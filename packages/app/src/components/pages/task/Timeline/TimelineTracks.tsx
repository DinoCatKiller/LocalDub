import { For, type Component } from "solid-js";
import type { Track } from "./consts";
import { AsrOcrFixTrack } from "./tracks/AsrOcrFixTrack";
import { SplitAudioTrack } from "./tracks/SplitAudioTrack";
import { TtsTrack } from "./tracks/TtsTrack";

interface Props {
  ref: (el: HTMLDivElement) => void;
  tracks: Track[];
  totalPx: number;
  pxPerMs: number;
  onSeek: (ms: number) => void;
  trackColor: (index: number, track: Track) => string;
  onScroll: () => void;
  taskDir?: string;
}

interface TrackComponentProps {
  track: Track;
  totalPx: number;
  pxPerMs: number;
  onSeek: (ms: number) => void;
  color: string;
  taskDir: string;
  filePath: string;
}

const trackComponents: Record<string, Component<TrackComponentProps>> = {
  asr_ocr_fix: AsrOcrFixTrack,
  split_audio: SplitAudioTrack,
  tts: TtsTrack,
};

function DefaultTrack(props: TrackComponentProps) {
  const { track, pxPerMs, onSeek, color } = props;
  return (
    <div class="h-16 border-b relative">
      <For each={track.segments}>
        {(seg) => (
          <div
            class="absolute top-1 h-12 rounded cursor-pointer truncate text-xs px-2 border flex items-center hover:opacity-80"
            style={{
              left: `${seg.startMs * pxPerMs}px`,
              width: `${Math.max((seg.endMs - seg.startMs) * pxPerMs, 4)}px`,
              background: `${color}33`,
              "border-color": `${color}55`,
            }}
            onClick={() => onSeek(seg.startMs)}
            title={seg.text}
          >
            {seg.text}
          </div>
        )}
      </For>
    </div>
  );
}

export function TimelineTracks(props: Props) {
  return (
    <div ref={props.ref} class="flex-1 overflow-auto min-h-0" onScroll={props.onScroll}>
      <div class="relative" style={{ width: `${props.totalPx}px`, "min-width": "100%" }}>
        <For each={props.tracks}>
          {(track, i) => {
            const c = props.trackColor(i(), track);
            const Comp = trackComponents[track.id] || DefaultTrack;
            return (
              <Comp
                track={track}
                totalPx={props.totalPx}
                pxPerMs={props.pxPerMs}
                onSeek={props.onSeek}
                color={c}
                taskDir={props.taskDir ?? ""}
                filePath={track.filePath ?? ""}
              />
            );
          }}
        </For>
      </div>
    </div>
  );
}
