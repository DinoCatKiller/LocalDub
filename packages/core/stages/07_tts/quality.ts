import { existsSync } from "node:fs";
import { join } from "node:path";
import { readWavPcm } from "@repo/core/utils/wav";
import { writeJson } from "@repo/util/file_op";
import { emitLog, nowISO } from "@repo/core/stages/utils/utils.ts";
import type { TtsSegment } from "./out";

/**
 * TTS 语音质检: 挑出「与上一段生成的语音语气/响度/语速差别过大」的段。
 *
 * 设计要点:
 * - 只做**检测与报告**, 不修改/重生成任何音频 (重生成由用户在 App 里手动触发)。
 * - 挂在 tts 阶段末尾, 因此 `skipExisting` 下重跑 `continueFrom: tts` 会只分析不重新合成,
 *   可以廉价地反复试阈值。
 * - 任何异常都不外抛, 避免质检把 TTS 阶段拖挂。
 */

/** 质检配置 (镜像 args.ts 的 `tts.qualityCheck`) */
export interface TtsQualityConfig {
  enabled: boolean;
  /** 与上一段音高比值超过该值即标记 (1.25 = 相差 25%) */
  pitchRatioMax: number;
  /** 与上一段响度差超过该 dB 即标记 */
  loudnessDiffDbMax: number;
  /** 与上一段语速比值超过该值即标记 */
  rateRatioMax: number;
  /** 时长短于该值的段不参与比较, 避免短句噪声误报 */
  minDurationMs: number;
}

/**
 * 默认阈值: 用 jojMVmRZABw (771 段) 实测校准。
 * 相邻段天然波动很大 (音高 p50≈1.14、响度 p50≈1.5dB、语速 p50≈1.24),
 * 因此阈值取各维度 **p95 附近** 才不会刷屏; 实测标记率 ≈6.6% (48/729)。
 */
export const DEFAULT_TTS_QUALITY_CONFIG: TtsQualityConfig = {
  enabled: true,
  pitchRatioMax: 1.6,
  loudnessDiffDbMax: 7,
  rateRatioMax: 2.4,
  minDurationMs: 700,
};

/** 单段声学特征 */
export interface TtsSegmentQuality {
  seg_idx: number;
  duration_ms: number;
  /** 音高中位数 (Hz); 0 = 无法估计 */
  f0_hz: number;
  /** 音高标准差 (Hz), 反映语调起伏 */
  f0_std_hz: number;
  /** 整体响度 (dBFS, 负值, 越大越响) */
  loudness_db: number;
  /** 语速 (字符/秒) */
  rate_cps: number;
  /** 是否可信 (参与与上一段的比较) */
  reliable: boolean;
  /** 不可信原因 (调试用) */
  unreliable_reason?: string;
}

/** 被标记的段: 与上一段语气/响度/语速偏差过大 */
export interface TtsQualityFlag {
  seg_idx: number;
  prev_seg_idx: number;
  /** TTS 实际朗读文本 (截断 40 字) */
  text: string;
  cur: { f0_hz: number; loudness_db: number; rate_cps: number };
  prev: { f0_hz: number; loudness_db: number; rate_cps: number };
  pitch_ratio: number;
  loudness_diff_db: number;
  rate_ratio: number;
  /** 人类可读的触发原因 */
  reasons: string[];
}

export interface TtsQualityReport {
  generated_at: string;
  config: TtsQualityConfig;
  summary: { total: number; analyzed: number; reliable: number; flagged: number };
  segments: TtsSegmentQuality[];
  flagged: TtsQualityFlag[];
}

// ── 音高分析参数 ────────────────────────────────────
/** 人声 F0 (70~400Hz) 在 8k 下足够, 且大幅降低计算量 */
const PITCH_SR = 8000;
const FRAME_MS = 30;
const HOP_MS = 15;
/** 每段最多分析帧数: 给长段设成本上限, 避免质检拖慢整体 */
const MAX_FRAMES = 150;
/** 归一化自相关低于该值视为非浊音/噪声 */
const VOICED_CORR = 0.5;
/** 低于该 RMS 的帧视为静音 */
const SILENCE_RMS = 0.003;
const F0_MIN_HZ = 70;
const F0_MAX_HZ = 400;
/** CLI 最多打印的被标记条数, 避免标记多时刷屏 (完整明细始终落在 quality.json) */
const MAX_PRINT_FLAGGED = 20;

/** 降采样: factor 点滑动平均 (兼作抗混叠低通) 后抽点 */
function decimate(samples: Float32Array, factor: number): Float32Array {
  const outLen = Math.floor(samples.length / factor);
  const out = new Float32Array(outLen);
  for (let i = 0; i < outLen; i++) {
    let sum = 0;
    const base = i * factor;
    for (let k = 0; k < factor; k++) sum += samples[base + k];
    out[i] = sum / factor;
  }
  return out;
}

function median(arr: number[]): number {
  if (arr.length === 0) return 0;
  const s = [...arr].sort((a, b) => a - b);
  const mid = s.length >> 1;
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

function stdev(arr: number[]): number {
  if (arr.length === 0) return 0;
  const m = arr.reduce((a, b) => a + b, 0) / arr.length;
  return Math.sqrt(arr.reduce((a, b) => a + (b - m) ** 2, 0) / arr.length);
}

/**
 * 单帧 F0 估计: 归一化自相关。
 * 倍频程保护: 取「首个达到峰值 92% 的较小 lag」, 避免把 2 倍周期误判为基频。
 */
function estimateF0(frame: Float32Array, sampleRate: number): number {
  const minLag = Math.max(2, Math.floor(sampleRate / F0_MAX_HZ));
  const maxLag = Math.min(frame.length - 1, Math.ceil(sampleRate / F0_MIN_HZ));
  if (maxLag <= minLag) return 0;

  const vals = new Float64Array(maxLag + 1);
  let bestVal = -Infinity;
  let bestLag = 0;
  for (let lag = minLag; lag <= maxLag; lag++) {
    let num = 0;
    let e1 = 0;
    let e2 = 0;
    const m = frame.length - lag;
    for (let i = 0; i < m; i++) {
      const a = frame[i];
      const b = frame[i + lag];
      num += a * b;
      e1 += a * a;
      e2 += b * b;
    }
    const den = Math.sqrt(e1 * e2);
    const v = den > 1e-12 ? num / den : 0;
    vals[lag] = v;
    if (v > bestVal) {
      bestVal = v;
      bestLag = lag;
    }
  }
  if (!(bestVal >= VOICED_CORR)) return 0;

  const accept = bestVal * 0.92;
  for (let lag = minLag; lag < bestLag; lag++) {
    if (vals[lag] >= accept) return sampleRate / lag;
  }
  return sampleRate / bestLag;
}

/** 提取单段音频的 F0 / 响度特征 */
function analyzeAudio(samples: Float32Array, sampleRate: number) {
  // 响度: 整段 RMS (TTS 输出已按峰值归一化, RMS 差异即实际响度差异)
  let sumSq = 0;
  for (let i = 0; i < samples.length; i++) sumSq += samples[i] * samples[i];
  const rms = Math.sqrt(sumSq / Math.max(1, samples.length));
  const loudness_db = 20 * Math.log10(Math.max(rms, 1e-9));

  // 音高: 降采样后分帧
  const factor = Math.max(1, Math.round(sampleRate / PITCH_SR));
  const dec = factor > 1 ? decimate(samples, factor) : samples;
  const sr = sampleRate / factor;
  const frameSize = Math.round((FRAME_MS / 1000) * sr);
  const hop = Math.round((HOP_MS / 1000) * sr);
  if (dec.length < frameSize) return { f0_hz: 0, f0_std_hz: 0, loudness_db };

  const totalFrames = Math.floor((dec.length - frameSize) / hop) + 1;
  const step = Math.max(1, Math.ceil(totalFrames / MAX_FRAMES));
  const f0s: number[] = [];
  for (let f = 0; f < totalFrames; f += step) {
    const start = f * hop;
    const frame = dec.subarray(start, start + frameSize);
    let fs = 0;
    for (let i = 0; i < frame.length; i++) fs += frame[i] * frame[i];
    if (Math.sqrt(fs / frame.length) < SILENCE_RMS) continue; // 静音帧
    const f0 = estimateF0(frame, sr);
    if (f0 > 0) f0s.push(f0);
  }

  return { f0_hz: median(f0s), f0_std_hz: stdev(f0s), loudness_db };
}

/**
 * 挑出与上一段语气/响度/语速偏差过大的 TTS 段:
 * 写 `tts/quality.json` 并打印报告 —— 只报告, 不修改/重生成音频。
 */
export async function runTtsQualityCheck(opts: {
  taskDir: string;
  ttsSegments: TtsSegment[];
  config: TtsQualityConfig;
}): Promise<TtsQualityReport> {
  const { taskDir, ttsSegments, config } = opts;
  const wavDir = join(taskDir, "tts", "wavs");
  const textOf = new Map<number, string>();
  for (const s of ttsSegments) textOf.set(s.seg_idx, s.dst || s.text || "");

  const qualities: TtsSegmentQuality[] = [];
  let analyzed = 0;

  for (const seg of ttsSegments) {
    const duration_ms = seg.tts_duration_ms || 0;
    const spoken = textOf.get(seg.seg_idx) ?? "";
    const chars = spoken.replace(/\s/g, "").length;
    const rate_cps = duration_ms > 0 ? chars / (duration_ms / 1000) : 0;
    const q: TtsSegmentQuality = {
      seg_idx: seg.seg_idx,
      duration_ms,
      f0_hz: 0,
      f0_std_hz: 0,
      loudness_db: 0,
      rate_cps,
      reliable: false,
    };

    // empty/error 段没有可用音频, 不分析
    if (seg.status === "empty" || seg.status === "error") {
      q.unreliable_reason = `status=${seg.status}`;
      qualities.push(q);
      continue;
    }
    const wavPath = join(wavDir, `${String(seg.seg_idx).padStart(4, "0")}.wav`);
    if (!existsSync(wavPath)) {
      q.unreliable_reason = "wav 缺失";
      qualities.push(q);
      continue;
    }
    if (duration_ms < config.minDurationMs) {
      q.unreliable_reason = `时长 ${duration_ms}ms < ${config.minDurationMs}ms`;
      qualities.push(q);
      continue;
    }

    let pcm;
    try {
      pcm = readWavPcm(wavPath);
    } catch (e) {
      q.unreliable_reason = `wav 读取失败: ${e instanceof Error ? e.message : String(e)}`;
      qualities.push(q);
      continue;
    }
    const { f0_hz, f0_std_hz, loudness_db } = analyzeAudio(pcm.samples, pcm.sampleRate);
    q.f0_hz = f0_hz;
    q.f0_std_hz = f0_std_hz;
    q.loudness_db = loudness_db;
    analyzed += 1;
    if (f0_hz > 0) q.reliable = true;
    else q.unreliable_reason = "音高无法估计 (清音/噪声过多)";
    qualities.push(q);
  }

  // 与「最近一个可信的上一段」比较 (不是死板的 i-1: 上一段若过短/无音高则比了也没意义)
  const flagged: TtsQualityFlag[] = [];
  let prev: TtsSegmentQuality | undefined;
  for (const q of qualities) {
    if (!q.reliable) continue;
    if (prev) {
      const pitch_ratio = Math.max(q.f0_hz / prev.f0_hz, prev.f0_hz / q.f0_hz);
      const loudness_diff_db = Math.abs(q.loudness_db - prev.loudness_db);
      const rate_ratio =
        q.rate_cps > 0 && prev.rate_cps > 0
          ? Math.max(q.rate_cps / prev.rate_cps, prev.rate_cps / q.rate_cps)
          : 1;
      const reasons: string[] = [];
      if (pitch_ratio > config.pitchRatioMax)
        reasons.push(
          `音高偏差 ${((pitch_ratio - 1) * 100).toFixed(0)}% (${prev.f0_hz.toFixed(0)}Hz → ${q.f0_hz.toFixed(0)}Hz)`,
        );
      if (loudness_diff_db > config.loudnessDiffDbMax)
        reasons.push(
          `响度偏差 ${loudness_diff_db.toFixed(1)}dB (${prev.loudness_db.toFixed(1)} → ${q.loudness_db.toFixed(1)} dBFS)`,
        );
      if (rate_ratio > config.rateRatioMax)
        reasons.push(
          `语速偏差 ${((rate_ratio - 1) * 100).toFixed(0)}% (${prev.rate_cps.toFixed(1)} → ${q.rate_cps.toFixed(1)} 字/秒)`,
        );

      if (reasons.length > 0) {
        flagged.push({
          seg_idx: q.seg_idx,
          prev_seg_idx: prev.seg_idx,
          text: (textOf.get(q.seg_idx) ?? "").slice(0, 40),
          cur: { f0_hz: q.f0_hz, loudness_db: q.loudness_db, rate_cps: q.rate_cps },
          prev: { f0_hz: prev.f0_hz, loudness_db: prev.loudness_db, rate_cps: prev.rate_cps },
          pitch_ratio,
          loudness_diff_db,
          rate_ratio,
          reasons,
        });
      }
    }
    prev = q;
  }

  const report: TtsQualityReport = {
    generated_at: nowISO(),
    config,
    summary: {
      total: qualities.length,
      analyzed,
      reliable: qualities.filter((q) => q.reliable).length,
      flagged: flagged.length,
    },
    segments: qualities,
    flagged,
  };
  writeJson(join(taskDir, "tts", "quality.json"), report);

  const lines: string[] = [
    `[tts-qc] 质检: 共 ${report.summary.total} 段, 分析 ${analyzed} 段, 参与比较 ${report.summary.reliable} 段, 标记 ${flagged.length} 段`,
  ];
  if (flagged.length === 0) {
    lines.push("[tts-qc] 未发现与上一段语气/响度/语速偏差过大的段");
  } else {
    lines.push("[tts-qc] 以下段与上一段差异较大 (仅提示, 未自动重生成):");
    for (const f of flagged.slice(0, MAX_PRINT_FLAGGED)) {
      lines.push(`  #${f.seg_idx} (对比 #${f.prev_seg_idx}): ${f.reasons.join("; ")} | ${f.text}`);
    }
    if (flagged.length > MAX_PRINT_FLAGGED) {
      lines.push(
        `  ... 另有 ${flagged.length - MAX_PRINT_FLAGGED} 条, 完整明细见 tts/quality.json`,
      );
    }
  }
  lines.push("[tts-qc] 明细已写入 tts/quality.json");
  // emitLog 内部已 console.log 并落盘任务日志, 不要再额外 log() 一次 (否则重复打印)
  for (const l of lines) emitLog(taskDir, l);

  return report;
}
