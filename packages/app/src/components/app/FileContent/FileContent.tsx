import { Match, Switch, type JSX } from "solid-js";
import { FileEditor } from "./FileEditor";
import { ImageViewer } from "./ImageViewer";
import { VideoViewer, VideoViewerProps } from "./VideoViewer/VideoViewer";
import { effectLog } from "@repo/ui-solid/utils/log";

/** 文件类型标识 */
export type FileType = "text" | "image" | "video" | "unknown";

/** 根据扩展名判断文件类型 */
const TEXT_EXTS = [
  "json", "yaml", "yml", "toml", "xml", "csv", "txt",
  "md", "ts", "tsx", "js", "jsx", "rs", "py", "css",
  "html", "svelte", "vue", "srt", "vtt", "log",
];

const IMAGE_EXTS = ["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg", "ico"];

const VIDEO_EXTS = ["mp4", "webm", "ogg", "mov", "avi"];

export function detectType(path: string): FileType {
  const ext = path.split(".").pop()?.toLowerCase();
  if (!ext) return "unknown";
  if (IMAGE_EXTS.includes(ext)) return "image";
  if (VIDEO_EXTS.includes(ext)) return "video";
  if (TEXT_EXTS.includes(ext)) return "text";
  return "unknown";
}

export interface FileContentProps extends VideoViewerProps {
  /** 当前打开的文件路径（相对于 workfolder） */
  path: string;
  /** 文件名，用于展示 */
  label: string;
  /** 文件类型（由 detectType 得出，可传入避免重复计算） */
  fileType?: FileType;
}

/**
 * 文件内容分发器 — 根据文件类型渲染对应的 viewer。
 *
 * 没有视频 controls，视频播放器与控制条完全分离；
 * FileEditor 自身带 dirty 指示器 + 保存按钮。
 */
export function FileContent(props: FileContentProps): JSX.Element {
  const type = () => props.fileType ?? detectType(props.path);
  effectLog('type', type())

  return <Switch>
    {/*// unknown 类型：显示不支持提示*/}
    <Match when={type() === 'unknown'}>
      <div class="flex items-center justify-center h-full text-sm text-muted-foreground">
        Unsupported file type
      </div>
    </Match>
    <Match when={type() === 'text'}>
      <FileEditor path={props.path} label={props.label} />
    </Match>
    <Match when={type() === 'image'}>
      <ImageViewer src={props.path} />
    </Match>
    <Match when={type() === 'video'}>
      <VideoViewer path={props.path} currentTime={props.currentTime}
        fps={props.fps}
        duration={props.duration} playbackRate={props.playbackRate} onTogglePlay={props.onTogglePlay} onRateChange={props.onRateChange} onReady={props.onReady} playing={props.playing} />
    </Match>
  </Switch>
}
