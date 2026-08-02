import { createSignal, Show } from "solid-js";
import { client } from "#/integrations/fnrpc/client.ts";
import { Timeline } from "./Timeline/Timeline";
import { TaskControlPanel } from "#/components/pages/task/TaskControlPanel/TaskControlPanel.tsx";
import { AiReviewPanel } from "#/components/pages/task/AiReviewPanel.tsx";
import { ContentPanel } from "#/components/app/FileContent/ContentPanel";
import { useQuery } from "@tanstack/solid-query";
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
import { use_track } from "./query_track";

interface Props {
  groupId: string;
  taskId: string;
}

export function TaskDetailPage(props: Props) {
  // console.log('[TaskDetailPage] props:', props);
  const taskDir = `workfolder/${props.groupId}/${props.taskId}`;
  const taskCtxQ = useQuery(() => client.get_task_ctx.queryOptions(taskDir));
  // console.log('[TaskDetailPage] taskCtxQ:', taskCtxQ);
  const tracks = use_track();

  const [videoRef, setVideoRef] = createSignal<HTMLVideoElement | null>(null);
  const watch_task_tree_q = useQuery(() =>
    client.watch_task_tree.streamedOptions(`workfolder/${props.groupId}/${props.taskId}`),
  );

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

  const duration = useDuration();
  const currentTime = useCurrentTime();
  const fps = useFps();

  return (
    <div class="flex flex-col h-full w-full min-w-0 max-w-full">
      <div class="flex h-120">
        <Show when={taskCtxQ.isPending}>
          <p>Loading...</p>
        </Show>
        <Show when={taskCtxQ.isSuccess}>
          <TaskControlPanel
            ctx={taskCtxQ.data!}
            // resumeFromStage={resumeFromStage()}
            // onResumeFrom={setResumeFromStage}
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
      {/*<Show when={resumeFrom() === 'asr_ocr_pre'}>*/}
      <div class="flex-1">
        <Timeline
          tracks={tracks()}
          duration={duration()}
          currentTime={currentTime()}
          fps={fps()}
          onSeek={onSeek}
          taskDir={taskDir}
        />
      </div>
      {/*</Show>*/}
    </div>
  );
}
