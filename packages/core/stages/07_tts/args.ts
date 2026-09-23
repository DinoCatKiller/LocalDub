import { z } from "zod";

export const TtsStageArgsSchema = z
  .object({
    runtime: z.enum(["ggml", "cloud", "voxcpm_torch_gradio"]).default("cloud"),
    device: z.enum(["webgpu", "cuda", "rocm", "cpu", "mps"]).default("cuda"),
    skipExisting: z.boolean().default(true),
    regenIndices: z
      .array(z.number().int().positive())
      .optional()
      .describe(
        "continue 模式下强制重新生成的 segment 索引（1-based）；列表外段保留旧结果。命中段无视 skipExisting，强制重合成",
      ),
    refAudioX2: z
      .boolean()
      .default(false)
      .describe("将短参考音频（< 2500ms）拼接一倍再送 TTS，帮助稳定输出音色"),
    qualityCheck: z
      .object({
        enabled: z
          .boolean()
          .default(true)
          .describe(
            "TTS 完成后是否做语音质检: 挑出与上一段语气/响度/语速偏差过大的段 (仅报告, 不自动重生成)",
          ),
        pitchRatioMax: z
          .number()
          .positive()
          .default(1.6)
          .describe("与上一段音高比值超过该值即标记 (实测相邻段 p95≈1.54, 故取 1.6)"),
        loudnessDiffDbMax: z
          .number()
          .positive()
          .default(7)
          .describe("与上一段响度差超过该 dB 即标记 (实测 p99≈6.4, 取 7 只抓极端跳变)"),
        rateRatioMax: z
          .number()
          .positive()
          .default(2.4)
          .describe("与上一段语速比值超过该值即标记 (实测 p95≈2.3)"),
        minDurationMs: z
          .number()
          .positive()
          .default(700)
          .describe("时长短于该值的段不参与比较: 过短段音高/语速估计不可靠, 会大量误报"),
      })
      .prefault({})
      .describe("TTS 语音质检参数"),
  })
  .prefault({})
  .describe(`input: 1. split_audio/timings.json: translation[i].dst`);
export type TtsArgs = z.output<typeof TtsStageArgsSchema>;
