import { readJson, writeFile, writeFileSync, rmSync } from "@repo/core/utils/fileOps";
import { writeJson, ensureDir } from "@repo/util/file_op";
import { existsSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { writeWav } from "@repo/voxlab";
import type { TtsFile, TtsSegment } from "./out.ts";

import {
  ffmpeg,
  nowISO,
  read_split_audio_timings,
  tts_filepath,
} from "@repo/core/stages/utils/utils.ts";
import { probeDurationMs } from "@repo/core/utils/ffmpeg";
import { TaskCtx, setStage, setTask } from "@repo/core/context/context.ts";
import { startLog } from "../utils/log.ts";
import { newVoxCPMEngine } from "@repo/core/ml/voxcpm/voxcpm";
import { log } from "@repo/util/log";
import { readTaskEdits } from "@repo/core/edits";
import { DEFAULT_TTS_QUALITY_CONFIG, runTtsQualityCheck, type TtsQualityConfig } from "./quality";

/**
 * 生成合法的零时长静音 WAV (PCM 16-bit mono), 作为空译文/缺参考音段的占位。
 * 必须带合法 RIFF/WAVE 头, 否则下游 mix_audio 用 ffmpeg 打开会报 "Invalid data"。
 */
function silentWav(sampleRate = 48000): Buffer {
  const buf = Buffer.alloc(44);
  buf.write("RIFF", 0, "ascii");
  buf.writeUInt32LE(36, 4);
  buf.write("WAVE", 8, "ascii");
  buf.write("fmt ", 12, "ascii");
  buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20); // PCM
  buf.writeUInt16LE(1, 22); // mono
  buf.writeUInt32LE(sampleRate, 24);
  buf.writeUInt32LE(sampleRate * 2, 28); // byteRate = sr * channels * bytesPerSample
  buf.writeUInt16LE(2, 32); // blockAlign
  buf.writeUInt16LE(16, 34); // bitsPerSample
  buf.write("data", 36, "ascii");
  buf.writeUInt32LE(0, 40); // data size = 0
  return buf;
}

// vocals 参考音的"非静音"判定阈值: PCM 裸数据 > 该字节数才认为有实际声音内容。
// 1200 = 1200 个采样帧 (约 75ms @ 16kHz), 16 = 16bit 采样深度, 2 = 双声道。
const MIN_REF_BYTES = 1200 * 16 * 2;
// refAudioX2 触发阈值: 参考音短于该时长时, 拼接自身翻倍作为 TTS 参考输入。
const MIN_REF_DURATION_MS = 2500;
// VoxCPM 云 API 参考音频时长上限 (50s), 留 5s 余量避免边界触发服务端校验。
const MAX_REF_DURATION_MS = 45_000;

/**
 * Progress bar
 */
function renderProgress(current: number, total: number, start: number) {
  const elapsed = (Date.now() - start) / 1000;
  const frac = total > 0 ? current / total : 0;
  const pct = (frac * 100).toFixed(0).padStart(3);
  const barW = 10;
  const fracW = frac * barW;
  const fill = Math.min(Math.floor(fracW), barW);
  const blockChars = [" ", "▏", "▎", "▍", "▌", "▋", "▊", "▉", "█"];
  const barFull = "█".repeat(fill);
  const barRest = fill >= barW ? "" : blockChars[Math.round((fracW - fill) * 8)] || " ";
  const barEmpty = fill >= barW ? "" : " ".repeat(Math.max(0, barW - fill - 1));
  const bar = `${barFull}${barRest}${barEmpty}`;
  const rate = current > 0 ? current / elapsed : 0;
  const eta = total > 0 && rate > 0 ? (total - current) / rate : 0;
  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };
  process.stdout.write(
    `\r${pct}%|${bar}| ${current}/${total} [${fmt(elapsed)}<${fmt(eta)}, ${rate.toFixed(2)}it/s]`,
  );
}

export async function stageTts(ctx: TaskCtx) {
  const taskId = ctx.task.id;
  const taskDir = ctx.task.task_dir;
  startLog(taskDir, taskId);

  const ttsArgs = ctx.input.stages.tts;
  const vocalsDir = join(taskDir, "split_audio", "vocals");
  const ttsWavDir = join(taskDir, "tts", "wavs");
  const doubledDir = join(taskDir, "tts", "ref_doubled");
  const trimmedDir = join(taskDir, "tts", "ref_trimmed");

  ensureDir(ttsWavDir);
  if (ttsArgs.refAudioX2) {
    ensureDir(doubledDir);
  }
  ensureDir(trimmedDir);

  const { segments } = await read_split_audio_timings(ctx);

  if (!ttsArgs.skipExisting) {
    const anyTts = readdirSync(ttsWavDir).find((f) => f.endsWith(".wav"));
    if (anyTts) {
      log(`Existing TTS segments found; will overwrite without deleting files`);
    }
  }
  // Unified engine (handles all runtimes via createBackend)

  log(`Using ${ttsArgs.runtime} backend`);
  const engine = newVoxCPMEngine(ttsArgs);
  await engine.load();

  //  Generation loop
  const tqdmStart = Date.now();
  let generated = 0,
    skipped = 0,
    errors = 0;
  let genMs = 0;
  const ttsSegments: TtsSegment[] = [];

  // Find fallback reference for segments without usable reference audio
  /**
   * 遍历 1 到 translation.length 个 segment 的 vocals 文件（0001.wav ~ 000N.wav），找到第一个非静音的作为 fallbackRef。
   * existsSync(refPath) && statSync(refPath).size > 1200 * 16 * 2 这个阈值：
   * - 1200 = 1200 个采样帧（约 75ms @ 16kHz）
   * - 16 = 16bit 采样深度
   * - 2 = 双声道
   * - 即 PCM 裸数据 > 38400 bytes 才认为有实际声音内容
   * 目的：后面如果有 segment 没有对应的 vocals 文件（或 vocals 太短是静音），就用这个 fallbackRef 作为 TTS 的参考音频输入，避免缺参考音导致 TTS 效果差或报错。
   */
  const i = segments.findIndex((_, i) => {
    const refPath = join(vocalsDir, `${String(i + 1).padStart(4, "0")}.wav`);
    return existsSync(refPath) && statSync(refPath).size > MIN_REF_BYTES;
  });
  const fallbackRef = i !== -1 ? join(vocalsDir, `${String(i + 1).padStart(4, "0")}.wav`) : "";

  const isStart = ctx.input?.task.action === "start";
  const regenIndices = isStart ? undefined : ttsArgs.regenIndices;

  // 上一次 tts.json 的结果: 既服务于 regenIndices 的复用判断,
  // 也用于识别「编辑层改动」导致的强制重生成 (改文案 / 取消删除)。
  const existingPath = tts_filepath(taskDir);
  const existingSegments: Map<number, TtsSegment> = existsSync(existingPath)
    ? new Map((await readJson<TtsFile>(existingPath)).segments.map((s) => [s.seg_idx, s]))
    : new Map();

  // 用户编辑层 (edits.json): 删段 / 改文案
  const edits = readTaskEdits(taskDir);
  if (edits.dropped.size > 0 || edits.textOverrides.size > 0) {
    // log() 会自动加阶段前缀, 文案里不要再写一遍 "[tts] "
    log(`应用 edits.json: 删除 ${edits.dropped.size} 段, 改文案 ${edits.textOverrides.size} 段`);
  }

  for (const [i, item] of segments.entries()) {
    const segIdx = i + 1;
    const idx = String(segIdx).padStart(4, "0");
    const outPath = resolve(ttsWavDir, `${idx}.wav`);

    // 编辑层: 用户删掉的段 —— 写合法静音占位, 不合成。
    // 下游 mix_audio 会据此跳过该段 (不加配音、不写入 timings 即不烧字幕),
    // 因此「删段」是合法语义, 而不需要真的把下标抽走导致后面整体错位。
    if (edits.dropped.has(segIdx)) {
      writeFile(outPath, silentWav(48000), ctx);
      ttsSegments.push({
        seg_idx: segIdx,
        text: item.text,
        dst: item.dst,
        start_ms: item.start_ms,
        end_ms: item.start_ms,
        slot_end_ms: item.end_ms,
        tts_duration_ms: 0,
        status: "dropped",
      });
      skipped += 1;
      renderProgress(i + 1, segments.length, tqdmStart);
      continue;
    }

    // 编辑层导致的强制重生成: 改了文案 (与上次记录不同), 或上一段被标记 dropped 现在又加回来。
    const prevSeg = existingSegments.get(segIdx);
    const wantText = edits.textOverrides.get(segIdx) ?? (item.dst || "");
    const forceRegen =
      (edits.textOverrides.has(segIdx) && prevSeg?.dst !== wantText) ||
      prevSeg?.status === "dropped";
    // 先删旧 wav, 这样下方的 regenIndices 复用判断与 skipExisting 都会自然落到「重新生成」分支
    if (forceRegen && existsSync(outPath)) {
      rmSync(outPath, { force: true });
    }

    if (regenIndices?.length && !regenIndices.includes(segIdx)) {
      // regenIndices 仅作用于「存在有效旧结果」的段: 列表外且旧结果有效才复用并跳过。
      // 没有有效旧结果 (无记录 / wav 缺失 / wav 零时长损坏) 的段, 无论是否在列表里
      // 都必须正常生成, 不能因为不在 regenIndices 中就被跳过复用坏结果。
      const existing = existingSegments.get(segIdx);
      const oldValid = !!existing && existsSync(outPath) && probeDurationMs(outPath) > 0;
      if (oldValid) {
        ttsSegments.push(existing!);
        skipped += 1;
        renderProgress(i + 1, segments.length, tqdmStart);
        continue;
      }
      // fall through: 走下方空译文/无参考音/正式合成逻辑
    }

    if (regenIndices?.length && existsSync(outPath)) {
      rmSync(outPath, { force: true });
    }

    let refWav = join(vocalsDir, `${idx}.wav`);
    if (!existsSync(refWav) || statSync(refWav).size < MIN_REF_BYTES) {
      refWav = fallbackRef;
    }
    const refMtime = refWav && existsSync(refWav) ? statSync(refWav).mtimeMs : 0;

    if (
      !forceRegen &&
      ttsArgs.skipExisting &&
      existsSync(outPath) &&
      statSync(outPath).mtimeMs > refMtime
    ) {
      const durMs = probeDurationMs(outPath);
      ttsSegments.push({
        seg_idx: segIdx,
        text: item.text,
        dst: item.dst,
        start_ms: item.start_ms,
        end_ms: item.start_ms + durMs,
        slot_end_ms: item.end_ms,
        tts_duration_ms: durMs,
        status: "skipped",
      });
      skipped += 1;
      renderProgress(i + 1, segments.length, tqdmStart);
      continue;
    }

    // 编辑层允许覆盖朗读文案, 因此用 wantText (而非原始译文) 参与后续所有判断与合成
    const text = wantText;
    if (!text.trim()) {
      writeFile(outPath, silentWav(48000), ctx);
      ttsSegments.push({
        seg_idx: i + 1,
        text: "",
        dst: "",
        start_ms: item.start_ms,
        end_ms: item.start_ms,
        slot_end_ms: item.end_ms,
        tts_duration_ms: 0,
        status: "empty",
      });
      skipped += 1;
      renderProgress(i + 1, segments.length, tqdmStart);
      continue;
    }

    if (!refWav || !existsSync(refWav)) {
      log(`[WARN] No reference for segment ${idx}, skipping`);
      writeFile(outPath, silentWav(48000), ctx);
      ttsSegments.push({
        seg_idx: i + 1,
        text: item.text,
        dst: item.dst,
        start_ms: item.start_ms,
        end_ms: item.start_ms,
        slot_end_ms: item.end_ms,
        tts_duration_ms: 0,
        status: "skipped",
      });
      skipped += 1;
      renderProgress(i + 1, segments.length, tqdmStart);
      continue;
    }

    // Double reference audio if shorter than MIN_REF_DURATION_MS
    if (ttsArgs.refAudioX2) {
      const minRefMs = MIN_REF_DURATION_MS;
      const refMs = probeDurationMs(refWav);
      if (refMs > 0 && refMs < minRefMs) {
        const doubled = resolve(doubledDir, `ref_${idx}_x2.wav`);
        if (!existsSync(doubled)) {
          const listPath = resolve(doubledDir, `ref_${idx}_list.txt`);
          writeFileSync(listPath, `file '${refWav}'\nfile '${refWav}'`);
          ffmpeg(["-f", "concat", "-safe", "0", "-i", listPath, "-c", "copy", doubled]);
        }
        refWav = doubled;
      }
    }

    // Trim reference audio longer than MAX_REF_DURATION_MS (VoxCPM cloud 50s 上限)
    const refMs = probeDurationMs(refWav);
    if (refMs > MAX_REF_DURATION_MS) {
      const trimmed = resolve(trimmedDir, `ref_${idx}_trim.wav`);
      if (!existsSync(trimmed)) {
        ffmpeg(["-i", refWav, "-t", String(MAX_REF_DURATION_MS / 1000), "-c", "copy", trimmed]);
      }
      refWav = trimmed;
    }

    setStage(taskDir, "tts", {
      last_message: `Generating ${i + 1}/${segments.length}...`,
    });
    renderProgress(i + 1, segments.length, tqdmStart);

    const t1 = performance.now();
    let ttsDurationMs = 0;
    let ttsOk = false;
    try {
      const samples = await engine.synthesize(text, refWav, item.text);
      genMs += performance.now() - t1;
      writeWav(samples, outPath, 48000);
      ttsDurationMs = probeDurationMs(outPath);
      generated += 1;
      ttsOk = true;
    } catch (e) {
      log(
        `[tts] [ERROR] Segment ${idx} failed: ${e instanceof Error ? e.message : JSON.stringify(e)}`,
      );
      // 重试逻辑在 engine.synthesize 内部完成; 走到这里说明已重试耗尽仍失败。
      // 直接抛出终止任务, 避免产出零内容音频被后续阶段当作正常段。
      throw new Error(
        `[tts] Segment ${idx} TTS failed after retries: ${e instanceof Error ? e.message : JSON.stringify(e)}`,
      );
    }

    ttsSegments.push({
      seg_idx: segIdx,
      text: item.text,
      // 记录实际朗读的文本 (可能来自 edits.json 的改写), 供下次运行比对是否需要重生成
      dst: text,
      start_ms: item.start_ms,
      end_ms: item.start_ms + ttsDurationMs,
      slot_end_ms: item.end_ms,
      tts_duration_ms: ttsDurationMs,
      status: ttsOk ? "success" : "error",
    });
  }

  await engine.release();
  process.stdout.write("\n");

  const genSec = genMs / 1000;
  const audioSec = segments.reduce((s, t) => s + (t.end_ms - t.start_ms), 0) / 1000;
  const rtf = audioSec > 0 && genSec > 0 ? genSec / audioSec : 0;

  log(`Batch complete: ${generated} generated, ${skipped} skipped, ${errors} errors`);
  log(`Generated in ${genSec.toFixed(1)}s | RTF ${rtf.toFixed(3)}`);

  ensureDir(join(taskDir, "tts"));
  writeJson(tts_filepath(taskDir), { segments: ttsSegments });

  // TTS 语音质检: 挑出与上一段语气/响度/语速偏差过大的段 (仅报告, 不自动修改/重生成音频)
  const qcConfig: TtsQualityConfig = {
    ...DEFAULT_TTS_QUALITY_CONFIG,
    ...(ttsArgs.qualityCheck ?? {}),
  };
  if (qcConfig.enabled) {
    try {
      await runTtsQualityCheck({ taskDir, ttsSegments, config: qcConfig });
    } catch (e) {
      // 质检是辅助功能, 任何异常都不应让 TTS 阶段失败
      log(
        `[tts-qc] 质检失败 (不影响 TTS 结果): ${e instanceof Error ? e.message : JSON.stringify(e)}`,
      );
    }
  }

  // 无音频处理汇总: 列出所有被 silentWav 占位 (零时长, 无配音) 的段。
  // 这些段在生成循环里写了合法静音 wav, 下游 mix_audio 据此跳过 (留白、不烧字幕)。
  // 用最终 ttsSegments 的 tts_duration_ms===0 作为判定, 这样无论本次新写还是
  // skipExisting 复用的静音占位段都能被列出。
  const noAudio = ttsSegments.filter((s) => (s.tts_duration_ms ?? 0) === 0);
  if (noAudio.length > 0) {
    const reasonOf = (s: TtsSegment) =>
      s.status === "dropped" ? "编辑层删段" : s.status === "empty" ? "空译文" : "无参考音/静音占位";
    log(
      `[tts-noaudio] 无音频处理: 共 ${noAudio.length} 段生成静音占位 (空译文/缺参考音/编辑层删段)`,
    );
    const shown = noAudio.slice(0, 20);
    for (const s of shown) {
      log(`  #${s.seg_idx} (${reasonOf(s)})`);
    }
    if (noAudio.length > shown.length) {
      log(
        `  ... 另有 ${noAudio.length - shown.length} 条, 完整明细见 tts/tts.json (status∈{empty,dropped,skipped} 且 tts_duration_ms=0)`,
      );
    }
  }

  await setStage(taskDir, "tts", {
    status: "success",
    completed_at: nowISO(),
    progress: 100,
    last_message: "TTS done",
  });
}
