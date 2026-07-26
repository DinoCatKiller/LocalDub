import { For } from "solid-js";
import { msToRuler, shouldShowLabel, type RulerConfig } from "./consts";

interface Props {
  ref: (el: HTMLDivElement) => void;
  totalPx: number;
  duration: number;
  rulerCfg: RulerConfig;
  pxPerMs: number;
  fps: number;
  onSeek: (ms: number) => void;
}

export function TimelineRuler(props: Props) {
  const tickCount = () => Math.ceil(props.duration / props.rulerCfg.tickIntervalMs) + 1;

  const onRulerClick = (e: MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ms = x / props.pxPerMs;
    props.onSeek(Math.max(0, Math.min(ms, props.duration)));
  };

  return (
    <div ref={props.ref} class="overflow-hidden shrink-0 border-b bg-muted/20">
      <div
        class="relative h-5 text-[10px] text-muted-foreground cursor-pointer"
        style={{ width: `${props.totalPx}px`, "min-width": "100%" }}
        onClick={onRulerClick}
      >
        <For each={Array.from({ length: tickCount() }, (_, i) => i)}>
          {(i) => {
            const ms = () => i * props.rulerCfg.tickIntervalMs;
            const isLabel = () => shouldShowLabel(ms(), props.rulerCfg.labelIntervalMs);
            return (
              <div
                class="absolute border-l border-muted-foreground/20"
                classList={{
                  "top-0 h-full pl-0.5 leading-tight": isLabel(),
                  "top-1.5 h-1.5": !isLabel(),
                }}
                style={{ left: `${ms() * props.pxPerMs}px` }}
              >
                {isLabel() ? msToRuler(ms(), props.fps) : null}
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
}
