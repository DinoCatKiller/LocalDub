import { For } from "solid-js";
import { msToRuler, shouldShowLabel, type RulerConfig } from "./consts";

interface Props {
  ref: (el: HTMLDivElement) => void;
  totalPx: number;
  duration: number;
  rulerCfg: RulerConfig;
  pxPerMs: number;
  scrollLeft: number;
  viewportWidth: number;
  fps: number;
  onRulerClick: (e: MouseEvent) => void;
}

export function TimelineRuler(props: Props) {
  const tickIntervalMs = () => props.rulerCfg.tickIntervalMs;
  const labelIntervalMs = () => props.rulerCfg.labelIntervalMs;

  const bufferRatio = 0.15;
  const visibleStartMs = () => props.scrollLeft / props.pxPerMs;
  const visibleEndMs = () => (props.scrollLeft + props.viewportWidth) / props.pxPerMs;
  const rangeStartMs = () => Math.max(0, visibleStartMs() - props.duration * bufferRatio);
  const rangeEndMs = () => Math.min(props.duration, visibleEndMs() + props.duration * bufferRatio);

  const startIndex = () => Math.floor(rangeStartMs() / tickIntervalMs());
  const endIndex = () => Math.min(
    Math.ceil(rangeEndMs() / tickIntervalMs()),
    Math.ceil(props.duration / tickIntervalMs()),
  );
  const count = () => Math.max(0, endIndex() - startIndex() + 1);

  return (
    <div ref={props.ref} class="overflow-hidden shrink-0 border-b bg-muted/20">
      <div
        class="relative h-5 text-[10px] text-muted-foreground cursor-pointer"
        style={{ width: `${props.totalPx}px`, "min-width": "100%" }}
        onClick={props.onRulerClick}
      >
        <For each={Array.from({ length: count() }, (_, i) => startIndex() + i)}>
          {(i) => {
            const ms = i * tickIntervalMs();
            const isLabel = shouldShowLabel(ms, labelIntervalMs());
            return (
              <div
                class="absolute border-l border-muted-foreground/20"
                classList={{
                  "top-0 h-full pl-0.5 leading-tight": isLabel,
                  "top-1.5 h-1.5": !isLabel,
                }}
                style={{ left: `${ms * props.pxPerMs}px` }}
              >
                {isLabel ? msToRuler(ms, props.fps) : null}
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
}
