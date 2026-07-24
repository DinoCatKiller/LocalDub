import { createSignal, Match, Show, Switch } from "solid-js";
import { client, fnrpc } from "#/integrations/fnrpc/client.ts";
import { Timeline } from "./Timeline/Timeline";
import type { Track } from "./Timeline/consts";
import { TaskControlPanel } from "#/components/pages/task/TaskControlPanel/TaskControlPanel.tsx";
import { AiReviewPanel } from "#/components/pages/task/AiReviewPanel.tsx";
import { ContentPanel } from "#/components/app/FileContent/ContentPanel";
import { createQuery, useQuery } from "@tanstack/solid-query";
import {
  setCurrentTime,
  setDuration,
  setFps,
  setPlaying,
  setPlaybackRate,
  useCurrentTime,
  useDuration,
  useFps,
} from "#/components/app/FileContent/store/videoViewer";
import { TranslateFile } from "@repo/core/stages/05_translate/type";
import { AsrResult } from "@repo/core/stages/asr/types";
import { stages_to_map } from "@repo/core/stages/utils/filtering";

interface Props {
  groupId: string;
  taskId: string;
}

export function TaskDetailPage(props: Props) {
  const taskDir = `workfolder/${props.groupId}/${props.taskId}`;
  const taskCtxQ = useQuery(() => client.get_task_ctx.queryOptions(taskDir));
  const stage_map = () => stages_to_map(taskCtxQ.data?.stages ?? []);
  const [videoRef, setVideoRef] = createSignal<HTMLVideoElement | null>(null);

  const onVideoReady = (ref: HTMLVideoElement) => {
    setVideoRef(ref);
    setDuration(ref.duration * 1000);
    if (taskCtxQ.data) setFps(taskCtxQ.data.frame_rate);
    ref.addEventListener("timeupdate", () => setCurrentTime(ref.currentTime * 1000));
    ref.addEventListener("play", () => setPlaying(true));
    ref.addEventListener("pause", () => setPlaying(false));
  };

  const togglePlay = () => {
    const v = videoRef();
    if (!v) return;
    v.paused ? v.play() : v.pause();
  };

  const onRateChange = (rate: number) => {
    const v = videoRef();
    if (v) v.playbackRate = rate;
    setPlaybackRate(rate);
  };

  const onSeek = (ms: number) => {
    const v = videoRef();
    if (v) v.currentTime = ms / 1000;
  };

  // ASR 字幕段
  const asrQuery = useQuery(
    () => client.read_app_file_text.queryOptions(`${taskDir}/asr/asr.json`, {
      // enabled: stage_map().asr.status
    }),
  );

  const asrSegments = () => {
    if (!asrQuery.data) return [];
    try {
      const data: AsrResult = JSON.parse(asrQuery.data);
      return (data.result?.segments || []).map((s: any, i: number) => ({
        index: i,
        text: (s.text || '').trim(),
        startMs: s.start,
        endMs: s.end,
      })).filter((s: { text: string }) => s.text);
    } catch { return []; }
  };

  const transLang = () => taskCtxQ.data?.target_language;

  const transQuery = useQuery(
    () => client.read_app_file_text.queryOptions(`${taskDir}/translate/translation.${transLang()}.json`, {
      enabled: !!transLang(),
    }),
  );

  const transSegments = () => {
    if (!transQuery.data) return [];
    try {
      const data: TranslateFile = JSON.parse(transQuery.data);
      return (data.translation || []).map((item, i: number) => ({
        index: i,
        text: item.dst || '',
        startMs: item.start,
        endMs: item.end,
      }));
    } catch { return []; }
  };

  const tracks = (): Track[] => {
    const result: Track[] = [];
    const asr = asrSegments();
    if (asr.length) {
      result.push({ id: 'asr', label: 'asr.json', segments: asr, color: '#3b82f6' });
    }
    const trans = transSegments();
    if (trans.length) {
      result.push({ id: 'translation', label: `translation.${transLang()}.json`, segments: trans, color: '#22c55e' });
    }
    return result;
  };

  const duration = useDuration();
  const currentTime = useCurrentTime();
  const fps = useFps();

  return (
    <div class="flex flex-col h-full w-full min-w-0 max-w-full">
      {/* 上层：左侧面板 + 中间内容区 + 右侧 AI Review */}
      <div class="flex h-120">
        <Show when={taskCtxQ.isPending}>
          <p>Loading...</p>
        </Show>
        <Show when={taskCtxQ.isSuccess} >
          <TaskControlPanel ctx={taskCtxQ.data!}
          />
        </Show>
        <div class="flex-1 min-w-0 flex flex-col">
          <ContentPanel
            onReady={onVideoReady}
            onTogglePlay={togglePlay}
            onRateChange={onRateChange}
            onTimeChange={onSeek}
          />
        </div>
        <AiReviewPanel />
      </div>

      {/* 下层：时间线轨道 */}
      <div class="flex-1">
        <Timeline
          tracks={tracks()}
          duration={duration()}
          currentTime={currentTime()}
          fps={fps()}
          onSeek={onSeek}
        />
      </div>
    </div>
  );
}
