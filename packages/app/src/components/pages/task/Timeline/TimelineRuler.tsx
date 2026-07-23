import { For } from "solid-js";
import { msToRuler, type RulerConfig } from "./consts";

interface Props {
  ref: (el: HTMLDivElement) => void;
  totalPx: number;
  duration: number;
  rulerCfg: RulerConfig;
  pxPerMs: number;
  onRulerClick: (e: MouseEvent) => void;
}

export function TimelineRuler(props: Props) {
  const tickCount = () => Math.ceil(props.duration / props.rulerCfg.labelIntervalMs) + 1;

  return (
    <div ref={props.ref} class="overflow-hidden shrink-0 border-b bg-muted/20">
      <div
        class="relative h-5 text-[10px] text-muted-foreground cursor-pointer"
        style={{ width: `${props.totalPx}px`, "min-width": "100%" }}
        onClick={props.onRulerClick}
      >
        <For each={Array.from({ length: tickCount() }, (_, i) => i)}>
          {(i) => {
            const tickMs = i * props.rulerCfg.labelIntervalMs;
            return (
              <div
                class="absolute top-0 h-full border-l border-muted-foreground/20 pl-0.5 leading-tight"
                style={{ left: `${tickMs * props.pxPerMs}px` }}
              >
                {msToRuler(tickMs)}
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
}
