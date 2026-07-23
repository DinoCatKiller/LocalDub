import type { FrameRate } from "@repo/core/utils/timecode";

export interface TrackSegment {
  index: number;
  text: string;
  startMs: number;
  endMs: number;
}

export interface Track {
  id: string;
  label: string;
  segments: TrackSegment[];
  color?: string;
}

export const BASE_PX_PER_MS = 0.08;
export const DEFAULT_COLORS = ["#3b82f6", "#22c55e", "#a855f7", "#f59e0b", "#ef4444", "#ec4899"];

const LABEL_FRAME_INTERVALS = [2, 3, 5, 10, 15];
const TICK_FRAME_INTERVALS = [1, 2, 3, 5, 10, 15];
const SECOND_MULTIPLIERS = [1, 2, 3, 5, 10, 15, 30, 60, 120, 300, 600, 900, 1800, 3600];
const MIN_LABEL_SPACING_PX = 120;
const MIN_TICK_SPACING_PX = 18;

export interface RulerConfig {
  labelIntervalMs: number;
  tickIntervalMs: number;
}

function findOptimalInterval(pixelsPerFrame: number, pixelsPerSecond: number, minSpacingPx: number): number {
  for (const fi of LABEL_FRAME_INTERVALS) {
    if (pixelsPerFrame * fi >= minSpacingPx) return fi;
  }
  for (const sm of SECOND_MULTIPLIERS) {
    if (pixelsPerSecond * sm >= minSpacingPx) return sm;
  }
  return 60;
}

export function rulerConfig(pxPerMs: number, fps: FrameRate): RulerConfig {
  const fpsFloat = fps.numerator / fps.denominator;
  const pxPerSec = pxPerMs * 1000;
  const pxPerFrame = pxPerSec / fpsFloat;

  const labelIntervalSec = findOptimalInterval(pxPerFrame, pxPerSec, MIN_LABEL_SPACING_PX);

  return {
    labelIntervalMs: labelIntervalSec * 1000,
    tickIntervalMs: labelIntervalSec * 1000,
  };
}

export function msToRuler(ms: number) {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export function trackColor(index: number, track: Track) {
  return track.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length];
}
