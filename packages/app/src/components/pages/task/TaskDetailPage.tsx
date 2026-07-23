import { createSignal, Match, Show, Switch } from "solid-js";
import { client, fnrpc } from "#/integrations/fnrpc/client.ts";
import { Timeline } from "./Timeline/Timeline";
import type { Track } from "./Timeline/consts";
import { TaskControlPanel } from "#/components/pages/task/TaskControlPanel/TaskControlPanel.tsx";
import { AiReviewPanel } from "#/components/pages/task/AiReviewPanel.tsx";
import { ContentPanel } from "#/components/app/FileContent/ContentPanel";
import { createQuery, useQuery } from "@tanstack/solid-query";

interface Props {
  groupId: string;
  taskId: string;
}

export function TaskDetailPage(props: Props) {
  const taskDir = `workfolder/${props.groupId}/${props.taskId}`;
  const taskCtxQ = useQuery(() => client.get_task_ctx.queryOptions(taskDir));
  const [videoRef, setVideoRef] = createSignal<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  const [playing, setPlaying] = createSignal(false);
  const [playbackRate, setPlaybackRate] = createSignal(1);

  // 视频源地址（默认取 video_source.mp4）
  const videoUrl = () => taskCtxQ.data?.video_source_path
    ? `http://localhost:19110/media/${taskDir}/video_source.mp4`
    : "";

  const onVideoReady = (ref: HTMLVideoElement) => {
    setVideoRef(ref);
    setDuration(ref.duration * 1000);
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
    () => client.read_app_file_text.queryOptions(`${taskDir}/asr/asr.json`),
  );

  const asrSegments = () => {
    if (!asrQuery.data) return [];
    try {
      const data = JSON.parse(asrQuery.data);
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
      const data = JSON.parse(transQuery.data);
      return (data.translation || []).map((item: any, i: number) => ({
        index: i,
        text: item.dst || '',
        startMs: item.start_time * 1000,
        endMs: item.end_time * 1000,
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

  // ContentPanel 暴露给 FileTree 的 openFile 回调
  const handleFileOpen = (_name: string, path: string) => {
    // 如果点击的是当前项目的默认视频，自动用 VideoViewer 打开
    if (path.includes('video_source.mp4') && videoUrl()) {
      // 暂不处理：可以在后续通过 VideoViewer 路径直接渲染
    }
  };

  return (
    <div class="flex flex-col h-full w-full min-w-0 max-w-full">
      {/* 上层：左侧面板 + 中间内容区 + 右侧 AI Review */}
      <div class="flex h-120">
        <Show when={taskCtxQ.isPending}>
          <p>Loading...</p>
        </Show>
        <Show when={taskCtxQ.isSuccess} >
          <TaskControlPanel ctx={taskCtxQ.data!}
            // onOpenFile={(name, path) => handleFileOpen(name, path)}
          />
        </Show>
        <div class="flex-1 min-w-0 flex flex-col">
          <ContentPanel
            onFileOpen={(name, path) => handleFileOpen(name, path)}
            currentTime={currentTime()}
            fps={taskCtxQ.data!.frame_rate}
            duration={duration()}
            playbackRate={playbackRate()}
            playing={playing()}
            onTogglePlay={togglePlay}
            onRateChange={onRateChange}
            onReady={onVideoReady}
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
          onSeek={onSeek}
        />
      </div>
    </div>
  );
}
