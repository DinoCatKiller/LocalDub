import { createSignal, Match, Show, Switch,createEffect } from "solid-js";
import { client, fnrpc } from "#/integrations/fnrpc/client.ts";
import type { TrackSegment } from "./Timeline/consts";
import { TaskControlPanel } from "#/components/pages/task/TaskControlPanel/TaskControlPanel.tsx";
import { AiReviewPanel } from "#/components/pages/task/AiReviewPanel.tsx";
import { ContentPanel } from "#/components/app/FileContent/ContentPanel";
import { createQuery, useQuery } from "@tanstack/solid-query";
import {
    setCurrentTime, setDuration, setFps, setPlaying, setPlaybackRate,
    useCurrentTime, useDuration, useFps,
} from "#/components/app/FileContent/store/videoViewer";
import { TranslateFile } from "@repo/core/stages/05_translate/type";
import { AsrResult } from "@repo/core/stages/asr/types";
import { stages_to_map } from "@repo/core/stages/utils/filtering";
import { to } from "@repo/shared/lib/utils/try";
import { SplitAudioFile, SplitAudioTiming, SplitAudioTimingFile } from "@repo/core/stages/06_split_audio/types";
import { AsrOcrFile } from "@repo/core/ml/subtitle_ocr/types";
import type { TtsFile } from "@repo/core/stages/07_tts/types";
import { TimingsFile } from "@repo/core/stages/merge_audio/types";
import { use_resumeFrom, useViewingTab, type StageTab } from "./TaskControlPanel/taskControlPanelStore";
import { STAGE_TRACKS } from "./const";
import { CommonTimeline } from "./Timeline/CommonTimeline";
import type { CommonTrackGroup } from "./Timeline/CommonTimelineTracks";



interface Props { groupId: string; taskId: string; }

export function TaskDetailPage(props: Props) {
    // console.log('[TaskDetailPage] props:', props);
    const taskDir = `workfolder/${props.groupId}/${props.taskId}`;
    const taskCtxQ = useQuery(() => client.get_task_ctx.queryOptions(taskDir));
    // console.log('[TaskDetailPage] taskCtxQ:', taskCtxQ);
    const stage_map = () => stages_to_map(taskCtxQ.data?.stages ?? []);
    // console.log('[TaskDetailPage] stages:', taskCtxQ.data?.stages?.map(s => s.name));

    const [videoRef, setVideoRef] = createSignal<HTMLVideoElement | null>(null);
    const resumeFrom = use_resumeFrom()
    const watch_task_tree_q = useQuery(() => client.watch_task_tree.streamedOptions(`workfolder/${props.groupId}/${props.taskId}`))

    const onVideoReady = (ref: HTMLVideoElement) => {
        setVideoRef(ref);
        setDuration(ref.duration * 1000);
        if (taskCtxQ.data) setFps(taskCtxQ.data.frame_rate);
        ref.addEventListener("timeupdate", () => setCurrentTime(ref.currentTime * 1000));
        ref.addEventListener("play", () => setPlaying(true));
        ref.addEventListener("pause", () => setPlaying(false));
    };

    const togglePlay = () => { const v = videoRef(); if (!v) return; v.paused ? v.play() : v.pause(); };
    const onRateChange = (rate: number) => { const v = videoRef(); if (v) v.playbackRate = rate; setPlaybackRate(rate); };
    const onSeek = (ms: number) => { const v = videoRef(); if (v) v.currentTime = ms / 1000; };

    const asrQuery = useQuery(() => client.read_app_file_text.queryOptions(`${taskDir}/asr/asr.json`));

    const asrSegments = () => {
        if (!asrQuery.data) return [];
        try {
            const data: AsrResult = JSON.parse(asrQuery.data);
            return (data.result?.segments || []).map((s: any, i: number) => ({
                index: i, text: (s.text || '').trim(), startMs: s.start, endMs: s.end,
            })).filter((s: { text: string }) => s.text);
        } catch { return []; }
    };

    const transLang = () => taskCtxQ.data?.target_language;
    const transQuery = useQuery(() => client.read_app_file_text.queryOptions(`${taskDir}/translate/translation.${transLang()}.json`));
    const transSegments = () => {
        if (!transQuery.data) return [];
        try {
            const raw = JSON.parse(transQuery.data) as Record<string, any>;
            // 兼容两种格式：正常 {translation: [...]} 和被旧默认序列化破坏的 {result: {segments: [...]}}
            const translation: Record<string, any>[] = raw.translation
                || raw.result?.segments?.map((seg: Record<string, any>) => ({
                    dst: seg.text ?? seg.dst ?? '',
                    start: seg.start ?? 0,
                    end: seg.end ?? 0,
                }))
                || [];
            return translation.map((item, i: number) => ({ index: i, text: item.dst || '', startMs: item.start, endMs: item.end, raw: item }));
        } catch { return []; }
    };

    const merge_audio_q = useQuery(() => client.read_app_file_text.queryOptions(`${taskDir}/merge_audio/timings.json`, {
        enabled: stage_map().merge_audio?.status === 'success',
    }));
    const merge_audio_segments = () => {
        if (!merge_audio_q.data) return [];
        const [data, err] = to<TimingsFile>(() => JSON.parse(merge_audio_q.data))
        if (err) return []
        return (data.translation || []).map((item, i: number) => ({ index: i, text: item.dst, startMs: item.actual_start, endMs: item.actual_end }));
    };

    const split_audio_timings_q = useQuery(() => client.read_app_file_text.queryOptions(`${taskDir}/split_audio/timings.json`));
    const split_audio_timings = () => {
        if (!split_audio_timings_q.data) return [];
        const [data, err] = to<SplitAudioTimingFile>(() => JSON.parse(split_audio_timings_q.data))
        if (err) return []
        return (data.translation || []).map((item, i: number) => ({ index: i, text: item.dst || '', startMs: item.start, endMs: item.end, raw: item }));
    };

    const split_audio_q = useQuery(() => client.read_app_file_text.queryOptions(`${taskDir}/split_audio/split_audio.json`));
    const split_audio = () => {
        if (!split_audio_q.data) return [];
        const [data, err] = to<SplitAudioFile>(() => JSON.parse(split_audio_q.data))
        if (err) return []
        return (data.translation || []).map((item, i: number) => ({ index: i, text: item.dst || '', startMs: item.start, endMs: item.end, raw: item }));
    };

    const ttsQ = useQuery(() => client.read_app_file_text.queryOptions(`${taskDir}/tts/tts.json`, {
        enabled: stage_map().tts?.status === 'success',
    }));
    const ttsSegments = () => {
        if (!ttsQ.data) return [];
        const [data, err] = to<TtsFile>(() => JSON.parse(ttsQ.data))
        if (err) return []
        return (data.segments || []).map((item, i: number) => ({ index: i, text: item.text, startMs: item.start, endMs: item.end, raw: item }));
    };

    const asr_ocr_fix_llm_q = useQuery(() => client.read_app_file_text.queryOptions(`${taskDir}/asr_ocr_fix/asr_ocr_fused.json`));
    const asr_ocr_fix_llm = () => {
        if (!asr_ocr_fix_llm_q.data) return [];
        const [data, err] = to<AsrOcrFile>(() => JSON.parse(asr_ocr_fix_llm_q.data))
        if (err) return []
        return data.result.segments.map((item, i: number) => ({ index: i, text: item.text, startMs: item.start, endMs: item.end, raw: item }));
    };


    const resumeFromStage = use_resumeFrom();

    const groups = (): CommonTrackGroup[] => {
        if (resumeFromStage() === 'asr_ocr_pre') {
            const asr = asrSegments();
            return asr.length ? [{ id: 'asr', label: 'ASR', rows: [{ track: { id: 'asr', label: 'asr.json', segments: asr, color: '#3b82f6' }, filePath: `${taskDir}/asr/asr.json` }] }] : [];
        }
        if (resumeFromStage() === 'translate') {
            const data = asr_ocr_fix_llm();
            return data.length ? [{ id: 'asr_ocr_fix', label: 'ASR+OCR校对', rows: [{ track: { id: 'asr_ocr_fix', label: 'asr_ocr_fix/asr_ocr_fused.json', segments: data, color: '#a855f7' }, filePath: `${taskDir}/asr_ocr_fix/asr_ocr_fused.json` }] }] : [];
        }
        if (resumeFromStage() === 'split_audio') {
            const data = asr_ocr_fix_llm();
            if (!data.length) return [];
            const trans = transSegments();
            return [{
                id: 'split-audio-linked', label: '翻译校对',
                linked: true,
                rows: [
                    {
                        track: { id: 'fused', label: 'asr_ocr_fix/asr_ocr_fused.json', segments: data, color: '#a855f7' },
                        filePath: `${taskDir}/asr_ocr_fix/asr_ocr_fused.json`,
                        serialize: (segs) => JSON.stringify({
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
                        }, null, 2),
                    },
                    {
                        track: { id: 'translation', label: `translation.${transLang()}.json`, segments: trans, color: '#22c55e' },
                        filePath: `${taskDir}/translate/translation.${transLang()}.json`,
                        serialize: (segs) => JSON.stringify({
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
                        }, null, 2),
                    },
                ],
            }];
        }
        if (resumeFromStage() === 'tts') {
            const data = split_audio();
            if (!data.length) return [];
            const timings = split_audio_timings();
            const vocals: TrackSegment[] = data.map(s => ({
                index: s.index, text: `🔊 ${String(s.index + 1).padStart(4, '0')}.wav`, startMs: s.startMs, endMs: s.endMs,
                raw: `${taskDir}/split_audio/vocals/${String(s.index + 1).padStart(4, '0')}.wav`,
            }));
            return [{
                id: 'tts-group', label: '配音校对',
                linked: true,
                rows: [
                    {
                        track: { id: 'text', label: 'split_audio/split_audio.json', segments: data, color: '#f59e0b' },
                        filePath: `${taskDir}/split_audio/split_audio.json`,
                        features: ["edit", "delete"],
                        serialize: (segs) => JSON.stringify({
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
                        }, null, 2),
                    },
                    {
                        track: { id: 'timings', label: 'timings.json', segments: timings, color: '#3b82f6' },
                        filePath: `${taskDir}/split_audio/timings.json`,
                        features: ["edit", "delete"],
                        serialize: (segs) => JSON.stringify({
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
                        }, null, 2),
                    },
                    { track: { id: 'audio', label: 'vocals', segments: vocals, color: '#ec4899' }, isAudio: true, features: [] },
                ],
            }];
        }
        const result: CommonTrackGroup[] = [];
        const merge_audio = merge_audio_segments();
        if (merge_audio.length) result.push({ id: 'merge_audio', label: '合并音频', rows: [{ track: { id: 'merge_audio', label: 'merge_audio/timings.json', segments: merge_audio, color: '#3b82f6' }, features: [] }] });
        const tts_segments = ttsSegments();
        if (tts_segments.length) result.push({ id: 'tts', label: 'TTS', rows: [{ track: { id: 'tts', label: 'tts/tts.json', segments: tts_segments, color: '#f43f5e' }, features: [] }] });
        const timings_data = split_audio_timings();
        if (timings_data.length) result.push({ id: 'split_audio_timings', label: '分割时间', rows: [{ track: { id: 'split_audio_timings', label: 'split_audio/timings.json', segments: timings_data, color: '#3b82f6' }, features: [] }] });
        const split_audio_data = split_audio();
        if (split_audio_data.length) result.push({ id: 'split_audio', label: '分割音频', rows: [{ track: { id: 'split_audio', label: 'split_audio/split_audio.json', segments: split_audio_data, color: '#f59e0b' }, features: [] }] });
        const trans_data = transSegments();
        if (trans_data.length) result.push({ id: 'translation', label: '翻译', rows: [{ track: { id: 'translation', label: `translation.${transLang()}.json`, segments: trans_data, color: '#22c55e' }, features: [] }] });
        const fix = asr_ocr_fix_llm();
        if (fix.length) result.push({ id: 'asr_ocr_fix', label: 'ASR+OCR', rows: [{ track: { id: 'asr_ocr_fix', label: 'asr_ocr_fix/asr_ocr_fused.json', segments: fix, color: '#a855f7' }, features: [] }] });
        const asr_segs = asrSegments();
        if (asr_segs.length) result.push({ id: 'asr', label: 'ASR', rows: [{ track: { id: 'asr', label: 'asr.json', segments: asr_segs, color: '#3b82f6' }, features: [] }] });
        return result;
    };

    const duration = useDuration();
    const currentTime = useCurrentTime();
    const fps = useFps();

    return (
        <div class="flex flex-col h-full w-full min-w-0 max-w-full">
            <div class="flex h-120">
                <Show when={taskCtxQ.isPending}><p>Loading...</p></Show>
                <Show when={taskCtxQ.isSuccess}>
                    <TaskControlPanel
                        ctx={taskCtxQ.data!}
                        // resumeFromStage={resumeFromStage()}
                        // onResumeFrom={setResumeFromStage}
                    />
                </Show>
                <div class="flex-1 min-w-0 flex flex-col">
                    <ContentPanel onReady={onVideoReady} onTogglePlay={togglePlay} onRateChange={onRateChange} onTimeChange={onSeek} />
                </div>
                <AiReviewPanel />
            </div>
            <Show when={!resumeFromStage() || resumeFromStage() === 'asr_ocr_pre' || resumeFromStage() === 'translate' || resumeFromStage() === 'split_audio' || resumeFromStage() === 'tts'}>
                <div class="flex-1">
                    <CommonTimeline groups={groups()} duration={duration()} currentTime={currentTime()} fps={fps()} onSeek={onSeek} taskDir={taskDir} />
                </div>
            </Show>
        </div>
    );
}
