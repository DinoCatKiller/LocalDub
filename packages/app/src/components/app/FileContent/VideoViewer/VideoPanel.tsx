import { mediaUrl } from "#/lib/utils/path.ts";
import { useActivePath } from "../store/ContentPanel";

export interface VideoPanelProps {
  path: string;
  onReady: (ref: HTMLVideoElement) => void;
}

export function VideoPanel(props: VideoPanelProps) {
  let videoRef!: HTMLVideoElement;
  return (
    <div class="flex items-center justify-center bg-black h-full w-full overflow-hidden">
      <video
        ref={videoRef}
        src={mediaUrl(props.path)}
        // controls
        class="max-h-full max-w-full object-contain"
        onLoadedMetadata={() => props.onReady(videoRef)}
      />
    </div>
  );
}
