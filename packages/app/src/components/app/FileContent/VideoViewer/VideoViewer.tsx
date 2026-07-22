import { createSignal, onMount } from "solid-js";
import { VideoPanel, VideoPanelProps } from "./VideoPanel";
import { VideoControls, VideoControlsProps } from "./VideoControls";

export interface VideoViewerProps extends VideoPanelProps, VideoControlsProps  {}
/**
 * 视频查看器 — 纯视频播放器，不含控制条（控制条由父级渲染）。
 */
export function VideoViewer(props: VideoViewerProps) {
  let videoRef: HTMLVideoElement | undefined;
  const [playing, setPlaying] = createSignal(false);
  const [currentTime, setCurrentTime] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  const [playbackRate, setPlaybackRate] = createSignal(1);

  onMount(() => {
    const v = videoRef;
    if (!v) return;
    v.addEventListener("timeupdate", () => setCurrentTime(Math.floor(v.currentTime * 1000)));
    v.addEventListener("loadedmetadata", () => setDuration(Math.floor(v.duration * 1000)));
    v.addEventListener("play", () => setPlaying(true));
    v.addEventListener("pause", () => setPlaying(false));
  });

  // 构建完整路径：相对于 /media/
  // TODO: 这里硬编码了本地代理地址，实际应改为从 props/context 获取 base url
  const videoSrc = `/media/${props.path}`;

  return (
    <div class="flex flex-col h-full bg-black">
      <div class="flex-1 min-h-0">
        <VideoPanel path={props.path} onReady={props.onReady} />
      </div>
      {/* 内联控制条：play/pause + 倍速 */}
      <VideoControls
        currentTime={props.currentTime}
        duration={props.duration}
        playbackRate={props.playbackRate}
        playing={props.playing}
        onTogglePlay={props.onTogglePlay}
        onRateChange={props.onRateChange}
      />
    </div>
  );
}
