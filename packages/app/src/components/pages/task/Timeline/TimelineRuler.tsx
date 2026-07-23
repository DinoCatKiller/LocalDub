import { For } from "solid-js";
import { createVirtualizer } from "@tanstack/solid-virtual";
import { msToRuler, shouldShowLabel, type RulerConfig } from "./consts";

interface Props {
  ref: (el: HTMLDivElement) => void;
  totalPx: number;
  duration: number;
  rulerCfg: RulerConfig;
  pxPerMs: number;
  fps: number;
  getTracksScrollElement: () => HTMLDivElement | undefined;
  onSeek: (ms: number) => void;
}

export function TimelineRuler(props: Props) {
  const tickIntervalMs = () => props.rulerCfg.tickIntervalMs;
  const tickCount = () => Math.ceil(props.duration / tickIntervalMs()) + 1;
  const tickWidth = () => tickIntervalMs() * props.pxPerMs;

  const virtualizer = createVirtualizer({
    count: tickCount(),
    getScrollElement: () => props.getTracksScrollElement() ?? null,
    estimateSize: () => tickWidth(),
    horizontal: true,
    overscan: 10,
  });

  const onRulerClick = (e: MouseEvent) => {
    const el = props.getTracksScrollElement();
    if (!el) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left + el.scrollLeft;
    const ms = x / props.pxPerMs;
    props.onSeek(Math.max(0, Math.min(ms, props.duration)));
  };

  return (
    <div ref={props.ref} class="overflow-hidden shrink-0 border-b bg-muted/20">
      <div
        class="relative h-5 text-[10px] text-muted-foreground cursor-pointer"
        style={{ width: `${props.totalPx}px` }}
        onClick={onRulerClick}
      >
        <For each={virtualizer.getVirtualItems()}>
          {(item) => {
            const ms = () => item.index * tickIntervalMs();
            const isLabel = () => shouldShowLabel(ms(), props.rulerCfg.labelIntervalMs);
            return (
              <div
                class="absolute border-l border-muted-foreground/20"
                classList={{
                  "top-0 h-full pl-0.5 leading-tight": isLabel(),
                  "top-1.5 h-1.5": !isLabel(),
                }}
                style={{ left: `${item.start}px` }}
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
