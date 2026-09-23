import { readJson, writeFile } from "@repo/core/utils/fileOps";
import { writeJson, ensureDir } from "@repo/util/file_op";
import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  emitLog,
  ffmpeg,
  nowISO,
  probeSampleRate,
  timings_filepath,
  read_split_audio_timings,
} from "@repo/core/stages/utils/utils.ts";
import { probeDurationMs } from "@repo/core/utils/ffmpeg";
import { readTaskEdits } from "@repo/core/edits";
import { TaskCtx, setStage, setTask } from "@repo/core/context/context.ts";
import { Timing } from "./types";

/**
 * `mix_audio.ts` 负责把 TTS 生成的各段音频合并成一条完整配音轨，同时做 timing 微调使配音与原视频时间线对齐。
 * **流程：**
 1. 读 `split_audio/timings.json` 得到每段的视频意图起止时间，构建 TTS wav 路径
 2. 逐段处理：
    - 去尾静音（`areverse + silenceremove` 反向去尾，不伤内部停顿）
    - 计算 **advance**（从前间隙借时间，让段略微提前开始）和 **delay**（从后间隙借时间）
    - 若 TTS 时长 ≤ 可用槽位 → 直接复制；超了则 `rubberband` 加速（上限 `maxSpeed` 1.35x）
    - **drift** 累加传到下一段，防止误差累积偏移
 3. 各段之间如果有空隙，插入静音填充
 4. 用 ffmpeg concat 合并所有片段为 `mix_audio/audio_dubbing.wav`
 5. 输出 `mix_audio/timings.json` 含每段实际起止时间、拉伸比、drift 等

 核心设计点：drift 传播 + advance/delay 借间隙时间，让配音节奏自然而不破坏整体同步。
 */
export async function stageMixAudio(ctx: TaskCtx) {
  const taskId = ctx.task.id;
  const taskDir = ctx.task.task_dir;
  const mergeAudioDir = join(taskDir, "mix_audio");
  const ttsDir = join(taskDir, "tts", "wavs");
  const stretchedDir = join(mergeAudioDir, "stretched");
  const silenceDir = join(mergeAudioDir, "silences");

  ensureDir(stretchedDir);
  ensureDir(silenceDir);
  ensureDir(mergeAudioDir);

  const dubbingFile = join(mergeAudioDir, "audio_dubbing.wav");

  const data = await read_split_audio_timings(ctx);
  const segments = data.segments;
  const ttsFiles = segments.map((_: any, i: number) =>
    join(ttsDir, `${String(i + 1).padStart(4, "0")}.wav`),
  );

  // 用户编辑层 (edits.json): 被删掉的段既不配音也不上字幕
  const edits = readTaskEdits(taskDir);
  if (edits.dropped.size > 0) {
    // emitLog() 会自动加阶段前缀, 文案里不要再写一遍 "[mix_audio] "
    emitLog(taskDir, `应用 edits.json: 跳过被删除的 ${edits.dropped.size} 段`);
  }

  for (const [i, f] of ttsFiles.entries()) {
    // 删掉的段不做缺文件校验: 它可能从未生成过音频
    if (edits.dropped.has(i + 1)) continue;
    if (!existsSync(f)) throw new Error(`Missing TTS segment: ${f}`);
  }

  const firstExisting = ttsFiles.find((f, i) => !edits.dropped.has(i + 1) && existsSync(f));
  if (!firstExisting) throw new Error("没有任何可用的 TTS 段音频, 无法确定采样率");
  const sampleRate = probeSampleRate(firstExisting);

  const segmentInputs: string[] = [];
  let lastEndMs = 0;
  let driftMs = 0;
  /** 因零时长而留白跳过的段 (TTS 空音频 / 去尾静音后无内容), 结束后统一告警 */
  const zeroDurationSkipped: {
    segIdx: number;
    text: string;
    ttsMs: number;
    trimmedMs: number;
  }[] = [];

  const maxSpeed = ctx.input.stages.mix_audio.maxSpeed;
  const maxAdvanceMs = ctx.input.stages.mix_audio.maxAdvanceMs;
  const maxDelayMs = ctx.input.stages.mix_audio.maxDelayMs;
  const newTranslation: Timing[] = [];
  for (const [i, item] of segments.entries()) {
    // const segment = translation[i];
    const ttsFile = ttsFiles[i];
    const idx = String(i + 1).padStart(4, "0");
    const stretchedFile = join(stretchedDir, `${idx}.wav`);

    // 用户在 edits.json 中删掉的段: 不加配音音频, 也不写入 timings。
    // timings 同时驱动 mix_video 的字幕, 所以这一段是「配音留白 + 字幕消失」同步生效。
    // 不更新 lastEndMs, 相邻段之间的静音填充会自然盖住这段原本的时间槽。
    if (edits.dropped.has(i + 1)) {
      continue;
    }

    // Probe original TTS duration
    const ttsMs = probeDurationMs(ttsFile);

    // 零时长/损坏的 TTS 段 (空译文或缺失参考音时, tts 阶段写入了无效/零时长占位 wav):
    // 跳过其配音、在时间线留白, 不让整个 mix_audio 失败 (见 known-limits "零时长段跳过留白")。
    if (ttsMs <= 0) {
      const realStartMs = Math.max(item.start_ms, lastEndMs, 0);
      if (realStartMs > lastEndMs) {
        const gapSec = (realStartMs - lastEndMs) / 1000;
        const silenceFile = join(silenceDir, `silence_${i}.wav`);
        ffmpeg([
          "-f",
          "lavfi",
          "-i",
          `anullsrc=r=${sampleRate}:cl=mono`,
          "-t",
          String(gapSec),
          silenceFile,
        ]);
        segmentInputs.push(silenceFile);
      }
      lastEndMs = realStartMs;
      newTranslation.push({
        ...item,
        original_duration_ms: item.end_ms - item.start_ms,
        drift_ms: Math.round(driftMs),
        advance_ms: 0,
        delay_ms: 0,
        actual_start: Math.floor(realStartMs),
        // 没配音但**保留字幕**, 且按原始时间槽给足时长 (而不是零长度),
        // 否则观众既听不到也看不到, 内容直接丢失
        actual_end: Math.max(Math.floor(item.end_ms), Math.floor(realStartMs) + 1),
        tts_duration_ms: 0,
        stretched_duration_ms: 0,
        stretch_ratio: 1.0,
      });
      continue;
    }

    // Trim trailing silence only (areverse so internal pauses aren't mistaken for tail)
    const trimmedFile = join(stretchedDir, `${idx}_trimmed.wav`);
    ffmpeg([
      "-i",
      ttsFile,
      "-af",
      "areverse,silenceremove=start_periods=1:start_threshold=-50dB:start_duration=0.05,areverse",
      trimmedFile,
    ]);

    let trimmedMs = probeDurationMs(trimmedFile);
    // 去尾静音会把「极短且整体很轻」的段整段删光: trimmed=0 但 tts_duration>0
    // (例如 gl8okcRDRpI #301: tts=320ms 被 silenceremove -50dB 整段判为尾部静音)。
    // 这种情况退化为使用**未裁剪**的原音频: 宁可多留一点呼吸声, 也不要整段丢词。
    let srcFile = trimmedFile;
    if (trimmedMs <= 0) {
      if (ttsMs > 0) {
        srcFile = ttsFile;
        trimmedMs = ttsMs;
      } else {
        // 理论上不可达 (ttsMs<=0 已在上面留白跳过), 兜底: 记录后跳过, 绝不中断
        zeroDurationSkipped.push({
          segIdx: i + 1,
          text: item.text?.slice(0, 30) || "?",
          ttsMs,
          trimmedMs: 0,
        });
        const skipStartMs = Math.max(item.start_ms, lastEndMs, 0);
        lastEndMs = skipStartMs;
        newTranslation.push({
          ...item,
          original_duration_ms: item.end_ms - item.start_ms,
          drift_ms: Math.round(driftMs),
          advance_ms: 0,
          delay_ms: 0,
          actual_start: Math.floor(skipStartMs),
          // 无配音但保留字幕, 避免观众既听不到也看不到
          actual_end: Math.max(Math.floor(item.end_ms), Math.floor(skipStartMs) + 1),
          tts_duration_ms: Math.round(ttsMs),
          stretched_duration_ms: 0,
          stretch_ratio: 1.0,
        });
        continue;
      }
    }

    // Determine advance — conservative for segments that already fit
    const originalSlotBaseMs = item.end_ms - item.start_ms;
    let advanceMs = 0;
    if (trimmedMs <= originalSlotBaseMs) {
      const surplusNoAdvanceMs = driftMs + (originalSlotBaseMs - trimmedMs);
      if (surplusNoAdvanceMs < 500) {
        advanceMs = Math.min(Math.round(500 - surplusNoAdvanceMs), Math.round(maxAdvanceMs * 0.2));
      }
    } else {
      advanceMs = Math.min(maxAdvanceMs, Math.max(0, Math.round(driftMs)));
    }

    const realStartMs = Math.max(item.start_ms - advanceMs, lastEndMs, 0);
    advanceMs = Math.max(0, item.start_ms - realStartMs);
    const effectiveDriftMs = driftMs - advanceMs;

    // Determine delay — borrow time from the next segment's gap
    const nextStartMs = i < segments.length - 1 ? segments[i + 1].start_ms : item.end_ms;
    const gapMs = Math.max(0, nextStartMs - item.end_ms);
    const delayMs = Math.min(gapMs, maxDelayMs);

    if (realStartMs > lastEndMs) {
      const gapSec = (realStartMs - lastEndMs) / 1000;
      const silenceFile = join(silenceDir, `silence_${i}.wav`);
      ffmpeg([
        "-f",
        "lavfi",
        "-i",
        `anullsrc=r=${sampleRate}:cl=mono`,
        "-t",
        String(gapSec),
        silenceFile,
      ]);
      segmentInputs.push(silenceFile);
    }

    const originalSlotMs = item.end_ms + delayMs - realStartMs;
    // floor at 50ms so speed calc never goes negative
    const slotMs = Math.max(50, originalSlotMs + effectiveDriftMs);

    let stretchedMs: number;
    let newDriftMs: number;
    let speed = 1.0;
    if (trimmedMs <= originalSlotMs) {
      stretchedMs = trimmedMs;
      ffmpeg(["-i", srcFile, "-c", "copy", stretchedFile]);
    } else if (trimmedMs <= slotMs) {
      stretchedMs = trimmedMs;
      ffmpeg(["-i", srcFile, "-c", "copy", stretchedFile]);
    } else {
      speed = Math.min(maxSpeed, trimmedMs / slotMs);
      stretchedMs = trimmedMs / speed;
      ffmpeg(["-i", srcFile, "-filter:a", `rubberband=tempo=${speed.toFixed(4)}`, stretchedFile]);
    }
    newDriftMs = originalSlotMs - stretchedMs;
    if (newDriftMs > maxAdvanceMs) newDriftMs = maxAdvanceMs;

    driftMs = newDriftMs;
    segmentInputs.push(stretchedFile);

    const realEndMs = Math.floor(realStartMs + stretchedMs);

    // 零时长段不再让整个阶段失败: 记录并留白跳过, 结束后统一告警。
    // 一个坏段不该毁掉整条 24 分钟的配音 (见 known-limits "零时长段跳过留白而非失败")。
    if (realEndMs <= realStartMs) {
      zeroDurationSkipped.push({
        segIdx: i + 1,
        text: item.text?.slice(0, 30) || "?",
        ttsMs,
        trimmedMs,
      });
      // 前面的间隙静音已经填到 realStartMs, 因此时间线推进到 realStartMs 即可
      lastEndMs = realStartMs;
      newTranslation.push({
        ...item,
        original_duration_ms: item.end_ms - item.start_ms,
        drift_ms: Math.round(driftMs),
        advance_ms: advanceMs,
        delay_ms: delayMs,
        actual_start: Math.floor(realStartMs),
        // 无配音但保留字幕, 避免观众既听不到也看不到
        actual_end: Math.max(Math.floor(item.end_ms), Math.floor(realStartMs) + 1),
        tts_duration_ms: Math.round(ttsMs),
        stretched_duration_ms: 0,
        stretch_ratio: 1.0,
      });
      continue;
    }

    lastEndMs = realEndMs;
    const segment: Timing = {
      ...item,
      original_duration_ms: item.end_ms - item.start_ms,
      drift_ms: Math.round(driftMs),
      advance_ms: advanceMs,
      delay_ms: delayMs,
      actual_start: Math.floor(realStartMs),
      actual_end: realEndMs,
      tts_duration_ms: Math.round(ttsMs),
      stretched_duration_ms: Math.round(stretchedMs),
      stretch_ratio: parseFloat((trimmedMs <= slotMs ? 1.0 : speed).toFixed(4)),
    };
    newTranslation.push(segment);
  }

  if (zeroDurationSkipped.length > 0) {
    // 明确告知哪些段没配上音, 便于用 edits.json 删掉或用 regenIndices 重生成,
    // 而不是像以前那样一条异常把整条配音打断。
    emitLog(
      taskDir,
      `[mix_audio] [WARN] ${zeroDurationSkipped.length} 段因零时长留白跳过 (这些段没有配音, 字幕仍在):`,
    );
    for (const z of zeroDurationSkipped.slice(0, 20)) {
      emitLog(
        taskDir,
        `  #${z.segIdx} tts=${z.ttsMs.toFixed(0)}ms trimmed=${z.trimmedMs.toFixed(0)}ms | ${z.text}`,
      );
    }
    if (zeroDurationSkipped.length > 20) {
      emitLog(taskDir, `  ... 另有 ${zeroDurationSkipped.length - 20} 段`);
    }
  }

  if (segmentInputs.length === 0) throw new Error("No audio segments to merge");

  const concatFile = join(mergeAudioDir, "concat_list.txt");
  writeFile(concatFile, segmentInputs.map((f) => `file '${f}'`).join("\n"), ctx);
  // 连接所有配音片段并输出最终配音音频
  ffmpeg([
    "-f",
    "concat", // 使用 concat 分离器
    "-safe",
    "0", // 允许文件路径中的特殊字符
    "-i",
    concatFile, // 输入文件列表（每行 `file 'path'`）
    "-acodec",
    "pcm_s16le", // 输出编码：16-bit 有符号小端 PCM（WAV
    "-ar",
    String(sampleRate), // 采样率，沿用 TTS 的采样率
    "-ac",
    "1", // 单声道
    dubbingFile,
  ]); // 输出到 `mix_audio/audio_dubbing.wav

  writeJson(timings_filepath(taskDir), { segments: newTranslation });
  await setStage(taskDir, "mix_audio", {
    status: "success",
    completed_at: nowISO(),
    progress: 100,
    last_message: "Merged",
  });
}
