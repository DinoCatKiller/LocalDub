import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { emitLog } from "@repo/core/stages/utils/utils.ts";
import { z } from "zod";

/**
 * 任务级「用户编辑层」: `edits.json`。
 *
 * 背景: TTS 产物是按序号位置一一对应的 (`tts/wavs/0001.wav` ~ `NNNN.wav`),
 * 下游 mix_audio 也按位置取 wav 并有缺文件硬校验, 因此用户直接删某个段的下标
 * 会导致后面全部错位。这里提供一个**pipeline 永远不覆盖、由用户手工维护**的
 * 文件来表达「删掉某段 / 改写某段文案」, 让「跳过」成为一等语义而不是报错。
 *
 * 文件不存在 = 没有任何编辑。
 * 语法笔误只产生 warning, 不让流水线崩溃 —— 这是人手维护的文件,
 * 提示用户改对即可, 没必要中断整个任务。
 */

const EditsSchema = z
  .looseObject({
    /** 要删掉的段序号 (1-based): 不合成配音, 时间线与字幕都随之跳过 */
    dropSegments: z.array(z.number().int().positive()).optional(),
    /** 段序号 -> 新的朗读文案; 命中段会强制重生成 (无视 skipExisting) */
    textOverrides: z.record(z.string(), z.string()).optional(),
  })
  .prefault({});

export interface TaskEdits {
  /** 被删掉的段序号集合 */
  dropped: Set<number>;
  /** 段序号 -> 覆盖后的朗读文案 */
  textOverrides: Map<number, string>;
  /** 解析过程中的提示 (序号非法 / 字段类型不对 等) */
  warnings: string[];
}

export function editsPath(taskDir: string): string {
  return join(taskDir, "edits.json");
}

const EMPTY: TaskEdits = {
  dropped: new Set(),
  textOverrides: new Map(),
  warnings: [],
};

/**
 * 读取 `edits.json`。
 * @param opts.logWarnings 是否把 warning 打到控制台与任务日志 (默认 true)。
 *   同一条 run 里 tts / mix_audio 各调用一次, 因此每个阶段日志里都会提示一次。
 */
export function readTaskEdits(taskDir: string, opts?: { logWarnings?: boolean }): TaskEdits {
  const path = editsPath(taskDir);
  if (!existsSync(path)) return { ...EMPTY, dropped: new Set(), textOverrides: new Map() };

  let raw: unknown;
  try {
    raw = JSON.parse(readFileSync(path, "utf-8"));
  } catch (e) {
    const warnings = [
      `edits.json 不是合法 JSON, 已忽略全部编辑: ${e instanceof Error ? e.message : String(e)}`,
    ];
    logEditsWarnings(taskDir, warnings, opts?.logWarnings ?? true);
    return { ...EMPTY, dropped: new Set(), textOverrides: new Map(), warnings };
  }

  const parsed = EditsSchema.safeParse(raw);
  if (!parsed.success) {
    const warnings = [
      `edits.json 字段不符合约定, 已忽略全部编辑: ${z.prettifyError(parsed.error)}`,
    ];
    logEditsWarnings(taskDir, warnings, opts?.logWarnings ?? true);
    return { ...EMPTY, dropped: new Set(), textOverrides: new Map(), warnings };
  }

  const warnings: string[] = [];
  const dropped = new Set<number>();
  for (const n of parsed.data.dropSegments ?? []) {
    dropped.add(n);
  }

  const textOverrides = new Map<number, string>();
  for (const [k, v] of Object.entries(parsed.data.textOverrides ?? {})) {
    const idx = Number(k);
    if (!Number.isInteger(idx) || idx <= 0) {
      warnings.push(`textOverrides 的键 "${k}" 不是正整数段序号, 已忽略`);
      continue;
    }
    const text = v.trim();
    if (!text) {
      warnings.push(`textOverrides 的第 ${idx} 段文案为空 (想删段请用 dropSegments), 已忽略`);
      continue;
    }
    textOverrides.set(idx, text);
  }

  logEditsWarnings(taskDir, warnings, opts?.logWarnings ?? true);
  return { dropped, textOverrides, warnings };
}

function logEditsWarnings(taskDir: string, warnings: string[], enabled: boolean) {
  if (!enabled) return;
  for (const w of warnings) emitLog(taskDir, `[edits] [WARN] ${w}`);
}

/** 首次运行任务时生成一个空模板, 便于用户在任务目录里一眼看到编辑入口 */
export function writeEditsTemplate(taskDir: string) {
  const path = editsPath(taskDir);
  if (existsSync(path)) return; // 已有则绝不覆盖用户内容
  writeFileSync(
    path,
    JSON.stringify({ dropSegments: [], textOverrides: {} }, null, 2) + "\n",
    "utf-8",
  );
}
