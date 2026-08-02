import { useParams } from "@tanstack/solid-router";
import { use_resumeFrom, useViewingTab } from "./TaskControlPanel/taskControlPanelStore";
import { CommonTrackGroup } from "./Timeline/CommonTimelineTracks";
import {
  use_asr_data,
  use_asr_ocr_fix_llm_data,
  use_merge_audio_timings_data,
  use_split_audio_data,
  use_split_audio_timings_data,
  use_task_ctx,
  use_translate_data,
  use_tts_data,
} from "./query";
import { stages_to_map } from "@repo/core/stages/utils/filtering";
import { Track, TrackSegment } from "./Timeline/consts";
import { STAGE_TRACKS } from "./Timeline/tracks/const";
import { createMemo } from "solid-js";

export const use_track_groups = () => {
  const p = useParams({ from: "/group/$id/$taskId" });
  const taskDir = `workfolder/${p().id}/${p().taskId}`;
  const taskCtxQ = use_task_ctx();
  const stage_map = () => stages_to_map(taskCtxQ.data?.stages ?? []);
  // const viewingTab = useViewingTab();
  const resumeFromStage = use_resumeFrom();
  const asrSegments = use_asr_data({ enabled: () => stage_map().asr?.status === "success" });
  const split_audio_timings = use_split_audio_timings_data({
    enabled: () => stage_map().split_audio?.status === "success",
  });
  const ttsSegments = use_tts_data({
    enabled: () => stage_map().tts?.status === "success",
  });
  const transLang = () => taskCtxQ.data?.target_language;
  const transSegments = use_translate_data({
    enabled: () => !!transLang() && stage_map().translate?.status === "success",
  });
  const merge_audio_segments = use_merge_audio_timings_data({
    enabled: () => stage_map().merge_audio?.status === "success",
  });
  const split_audio = use_split_audio_data({
    enabled: () => stage_map().split_audio?.status === "success",
  });
  const asr_ocr_fix_llm = use_asr_ocr_fix_llm_data({
    enabled: () => stage_map().asr_ocr_fix?.status === "success",
  });
  return createMemo<CommonTrackGroup[]>(() => {
    if (resumeFromStage() === "asr_ocr_pre") {
      const asr = asrSegments();
      return asr.length
        ? [
            {
              id: "asr",
              label: "ASR",
              rows: [
                {
                  track: { id: "asr", label: "asr.json", segments: asr, color: "#3b82f6" },
                  filePath: `${taskDir}/asr/asr.json`,
                },
              ],
            },
          ]
        : [];
    }
    if (resumeFromStage() === "translate") {
      const data = asr_ocr_fix_llm();
      return data.length
        ? [
            {
              id: "asr_ocr_fix",
              label: "ASR+OCR校对",
              rows: [
                {
                  track: {
                    id: "asr_ocr_fix",
                    label: "asr_ocr_fix/asr_ocr_fused.json",
                    segments: data,
                    color: "#a855f7",
                  },
                  filePath: `${taskDir}/asr_ocr_fix/asr_ocr_fused.json`,
                },
              ],
            },
          ]
        : [];
    }
    if (resumeFromStage() === "split_audio") {
      const data = asr_ocr_fix_llm();
      if (!data.length) return [];
      const trans = transSegments();
      return [
        {
          id: "split-audio-linked",
          label: "翻译校对",
          linked: true,
          rows: [
            {
              track: {
                id: "fused",
                label: "asr_ocr_fix/asr_ocr_fused.json",
                segments: data,
                color: "#a855f7",
              },
              filePath: `${taskDir}/asr_ocr_fix/asr_ocr_fused.json`,
              serialize: (segs) =>
                JSON.stringify(
                  {
                    result: {
                      segments: segs.map((s) => {
                        const raw = s.raw as Record<string, any> | undefined;
                        return {
                          ...(raw ?? {}),
                          text: s.text,
                          start: s.startMs,
                          end: s.endMs,
                        };
                      }),
                    },
                  },
                  null,
                  2,
                ),
            },
            {
              track: {
                id: "translation",
                label: `translation.${transLang()}.json`,
                segments: trans,
                color: "#22c55e",
              },
              filePath: `${taskDir}/translate/translation.${transLang()}.json`,
              serialize: (segs) =>
                JSON.stringify(
                  {
                    translation: segs.map((s) => {
                      const raw = s.raw as Record<string, any> | undefined;
                      return {
                        src: raw?.src ?? "",
                        dst: s.text,
                        seg_idx: (raw?.seg_idx as number) ?? s.index + 1,
                        start: s.startMs,
                        end: s.endMs,
                        start_time: (raw?.start_time as number) ?? s.startMs,
                        end_time: (raw?.end_time as number) ?? s.endMs,
                        src_lang: raw?.src_lang,
                        dst_lang: raw?.dst_lang,
                        speaker: raw?.speaker,
                      };
                    }),
                  },
                  null,
                  2,
                ),
            },
          ],
        },
      ];
    }
    if (resumeFromStage() === "tts") {
      const data = split_audio();
      if (!data.length) return [];
      const timings = split_audio_timings();
      const vocals: TrackSegment[] = data.map((s) => ({
        index: s.index,
        text: `🔊 ${String(s.index + 1).padStart(4, "0")}.wav`,
        startMs: s.startMs,
        endMs: s.endMs,
        raw: `${taskDir}/split_audio/vocals/${String(s.index + 1).padStart(4, "0")}.wav`,
      }));
      return [
        {
          id: "tts-group",
          label: "配音校对",
          linked: true,
          rows: [
            {
              track: {
                id: "text",
                label: "split_audio/split_audio.json",
                segments: data,
                color: "#f59e0b",
              },
              filePath: `${taskDir}/split_audio/split_audio.json`,
              features: ["edit", "delete"],
              serialize: (segs) =>
                JSON.stringify(
                  {
                    translation: segs.map((s) => {
                      const raw = s.raw as Record<string, any> | undefined;
                      return {
                        src: raw?.src ?? "",
                        dst: s.text,
                        seg_idx: (raw?.seg_idx as number) ?? s.index + 1,
                        start: s.startMs,
                        end: s.endMs,
                        start_time: (raw?.start_time as number) ?? s.startMs,
                        end_time: (raw?.end_time as number) ?? s.endMs,
                        src_lang: raw?.src_lang,
                        dst_lang: raw?.dst_lang,
                        speaker: raw?.speaker,
                      };
                    }),
                  },
                  null,
                  2,
                ),
            },
            {
              track: { id: "timings", label: "timings.json", segments: timings, color: "#3b82f6" },
              filePath: `${taskDir}/split_audio/timings.json`,
              features: ["edit", "delete"],
              serialize: (segs) =>
                JSON.stringify(
                  {
                    translation: segs.map((s) => {
                      const raw = s.raw as Record<string, any> | undefined;
                      return {
                        src: raw?.src ?? "",
                        dst: s.text,
                        seg_idx: (raw?.seg_idx as number) ?? s.index + 1,
                        start: s.startMs,
                        end: s.endMs,
                        start_time: (raw?.start_time as number) ?? s.startMs,
                        end_time: (raw?.end_time as number) ?? s.endMs,
                        src_lang: raw?.src_lang,
                        dst_lang: raw?.dst_lang,
                        speaker: raw?.speaker,
                      };
                    }),
                  },
                  null,
                  2,
                ),
            },
            {
              track: { id: "audio", label: "vocals", segments: vocals, color: "#ec4899" },
              isAudio: true,
              features: [],
            },
          ],
        },
      ];
    }

    const result: CommonTrackGroup[] = [];
    const merge_audio = merge_audio_segments();
    if (merge_audio.length)
      result.push({
        id: "merge_audio",
        label: "合并音频",
        rows: [
          {
            track: {
              id: "merge_audio",
              label: "merge_audio/timings.json",
              segments: merge_audio,
              color: "#3b82f6",
            },
            features: [],
          },
        ],
      });
    const tts_segments = ttsSegments();
    if (tts_segments.length)
      result.push({
        id: "tts",
        label: "TTS",
        rows: [
          {
            track: { id: "tts", label: "tts/tts.json", segments: tts_segments, color: "#f43f5e" },
            features: [],
          },
        ],
      });
    const timings_data = split_audio_timings();
    if (timings_data.length)
      result.push({
        id: "split_audio_timings",
        label: "分割时间",
        rows: [
          {
            track: {
              id: "split_audio_timings",
              label: "split_audio/timings.json",
              segments: timings_data,
              color: "#3b82f6",
            },
            features: [],
          },
        ],
      });
    const split_audio_data = split_audio();
    if (split_audio_data.length)
      result.push({
        id: "split_audio",
        label: "分割音频",
        rows: [
          {
            track: {
              id: "split_audio",
              label: "split_audio/split_audio.json",
              segments: split_audio_data,
              color: "#f59e0b",
            },
            features: [],
          },
        ],
      });
    const trans_data = transSegments();
    if (trans_data.length)
      result.push({
        id: "translation",
        label: "翻译",
        rows: [
          {
            track: {
              id: "translation",
              label: `translation.${transLang()}.json`,
              segments: trans_data,
              color: "#22c55e",
            },
            features: [],
          },
        ],
      });
    const fix = asr_ocr_fix_llm();
    if (fix.length)
      result.push({
        id: "asr_ocr_fix",
        label: "ASR+OCR",
        rows: [
          {
            track: {
              id: "asr_ocr_fix",
              label: "asr_ocr_fix/asr_ocr_fused.json",
              segments: fix,
              color: "#a855f7",
            },
            features: [],
          },
        ],
      });
    const asr_segs = asrSegments();
    if (asr_segs.length)
      result.push({
        id: "asr",
        label: "ASR",
        rows: [
          {
            track: { id: "asr", label: "asr.json", segments: asr_segs, color: "#3b82f6" },
            features: [],
          },
        ],
      });
    return result;
  });
};

/** 当前任务的 timeline 轨道集合（返回 getter），按 viewingTab 过滤 */
export const use_track = (): (() => Track[]) => {
  const p = useParams({ from: "/group/$id/$taskId" });
  const taskDir = `workfolder/${p().id}/${p().taskId}`;
  const taskCtxQ = use_task_ctx();
  const stage_map = () => stages_to_map(taskCtxQ.data?.stages ?? []);
  const viewingTab = useViewingTab();

  const asrSegments = use_asr_data({ enabled: () => stage_map().asr?.status === "success" });
  const split_audio_timings = use_split_audio_timings_data({
    enabled: () => stage_map().split_audio?.status === "success",
  });
  const ttsSegments = use_tts_data({ enabled: () => stage_map().tts?.status === "success" });
  const transLang = () => taskCtxQ.data?.target_language;
  const transSegments = use_translate_data({
    enabled: () => !!transLang() && stage_map().translate?.status === "success",
  });
  const merge_audio_segments = use_merge_audio_timings_data({
    enabled: () => stage_map().merge_audio?.status === "success",
  });
  const split_audio = use_split_audio_data({
    enabled: () => stage_map().split_audio?.status === "success",
  });
  const asr_ocr_fix_llm = use_asr_ocr_fix_llm_data({
    enabled: () => stage_map().asr_ocr_fix?.status === "success",
  });

  return (): Track[] => {
    const result: Track[] = [];
    const merge_audio = merge_audio_segments();
    if (merge_audio.length)
      result.push({
        id: "merge_audio",
        label: "merge_audio/timings.json",
        segments: merge_audio,
        color: "#3b82f6",
      });
    const tts = ttsSegments();
    if (tts.length)
      result.push({
        id: "tts",
        label: "tts/tts.json",
        segments: tts,
        color: "#f43f5e",
        filePath: `${taskDir}/tts/tts.json`,
      });
    const split_audio_timings_data = split_audio_timings();
    if (split_audio_timings_data.length)
      result.push({
        id: "split_audio_timings",
        label: "split_audio/timings.json",
        segments: split_audio_timings_data,
        color: "#3b82f6",
      });
    const split_audio_data = split_audio();
    if (split_audio_data.length)
      result.push({
        id: "split_audio",
        label: "split_audio/split_audio.json",
        segments: split_audio_data,
        color: "#f59e0b",
        filePath: `${taskDir}/split_audio/split_audio.json`,
      });
    const trans = transSegments();
    if (trans.length)
      result.push({
        id: "translation",
        label: `translation.${transLang()}.json`,
        segments: trans,
        color: "#22c55e",
      });
    const asr_ocr_fix_llm_ = asr_ocr_fix_llm();
    if (asr_ocr_fix_llm_.length)
      result.push({
        id: "asr_ocr_fix",
        label: "asr_ocr_fix/asr_ocr_fused_llm_fix.json",
        segments: asr_ocr_fix_llm_,
        color: "#a855f7",
        filePath: `${taskDir}/asr_ocr_fix/asr_ocr_fused_llm_fix.json`,
      });
    const asr = asrSegments();
    if (asr.length) result.push({ id: "asr", label: "asr.json", segments: asr, color: "#3b82f6" });

    // root 显示全部轨道；其他 tab 仅显示该阶段对应的轨道
    const v = viewingTab();
    if (v === "root") return result;
    const ids = STAGE_TRACKS[v] ?? [];
    return ids.length ? result.filter((t) => ids.includes(t.id)) : [];
  };
};
