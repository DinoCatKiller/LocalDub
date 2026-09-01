import { z } from "zod/v4";

export const ImportSubtitleArgsSchema = z
  .looseObject({
    file: z
      .string()
      .optional()
      .describe("外部字幕文件路径 (VTT/SRT)，需配合 task.subtitleSource: 'file'"),
    mergeOverlap: z
      .boolean()
      .optional()
      .describe("合并 YouTube 自动字幕的渐进式滑动窗口重叠段 (默认: subtitleSource===file 时开启)"),
    maxSegmentWords: z.number().optional().describe("TTS 配音段最大词数 (默认 10)"),
    segmentPad: z.boolean().default(true).describe("段落前后 padding，避免字幕贴边"),
  })
  .prefault({});
