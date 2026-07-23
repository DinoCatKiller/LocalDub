import { createSignal, onMount } from "solid-js";
import { VideoPanel, VideoPanelProps } from "./VideoPanel";
import { VideoControls, VideoControlsProps } from "./VideoControls";

export interface VideoViewerProps extends VideoPanelProps, VideoControlsProps  {}
/**
 * 视频查看器 — 纯视频播放器，不含控制条（控制条由父级渲染）。
 */
export function VideoViewer(props: VideoViewerProps) {

  return (
    <div class="flex flex-col h-full">
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
