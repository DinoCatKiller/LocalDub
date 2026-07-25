import { createSignal } from "solid-js";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "@repo/ui-solid/base/context-menu";
import { openModal, closeModal } from "@repo/ui-solid/custom/modal/renderer";
import { AudioPlayer } from "#/components/ui/audio-player";
import { mediaUrl } from "#/lib/utils/path.ts";
import type { Track, TrackSegment } from "../consts";
import { client } from "#/integrations/fnrpc/client.ts";
import type { SplitAudioTiming } from "@repo/core/stages/06_split_audio/types";

interface Props {
  track: Track;
  totalPx: number;
  pxPerMs: number;
  onSeek: (ms: number) => void;
  color: string;
  taskDir: string;
  filePath: string;
}

function serializeSegments(segments: TrackSegment[]): string {
  const segs: SplitAudioTiming[] = segments.map((s) => {
    const raw = (s.raw as SplitAudioTiming) || {} as SplitAudioTiming;
    return {
      seg_idx: s.index + 1,
      src: raw.src ?? "",
      dst: s.text,
      src_lang: raw.src_lang ?? "auto",
      dst_lang: raw.dst_lang ?? "vi",
      start: s.startMs,
      end: s.endMs,
      speaker: raw.speaker ?? "1",
    };
  });
  return JSON.stringify({ translation: segs }, null, 2);
}

const DEFAULT_DURATION_MS = 500;

function insertAt(segments: TrackSegment[], index: number, after: boolean): TrackSegment[] {
  const copy = [...segments];
  const current = copy[index];
  if (!current) return copy;

  const newSeg: TrackSegment = {
    index: -1,
    text: "",
    startMs: after ? current.endMs : Math.max(0, current.startMs - DEFAULT_DURATION_MS),
    endMs: after ? current.endMs + DEFAULT_DURATION_MS : current.startMs,
    raw: { seg_idx: 0, src: "", dst: "", src_lang: "auto", dst_lang: "vi", start: 0, end: 0, speaker: "1" },
  };

  if (after) {
    const next = copy[index + 1];
    if (next) {
      const gap = next.startMs - current.endMs;
      newSeg.endMs = current.endMs + Math.min(gap / 2, DEFAULT_DURATION_MS);
    }
    copy.splice(index + 1, 0, newSeg);
  } else {
    const prev = copy[index - 1];
    if (prev) {
      const gap = current.startMs - prev.endMs;
      newSeg.startMs = current.startMs - Math.min(gap / 2, DEFAULT_DURATION_MS);
    }
    copy.splice(index, 0, newSeg);
  }

  return copy.map((s, i) => ({ ...s, index: i }));
}

function deleteAt(segments: TrackSegment[], index: number): TrackSegment[] {
  return segments.filter((_, i) => i !== index).map((s, i) => ({ ...s, index: i }));
}

export function SplitAudioTrack(props: Props) {
  const { track, pxPerMs, onSeek, color, taskDir } = props;

  const handleInsertBefore = async (segIndex: number) => {
    const newSegments = insertAt(track.segments, segIndex, false);
    await client.write_app_file_text.call([props.filePath, serializeSegments(newSegments)]);
  };

  const handleInsertAfter = async (segIndex: number) => {
    const newSegments = insertAt(track.segments, segIndex, true);
    await client.write_app_file_text.call([props.filePath, serializeSegments(newSegments)]);
  };

  const handleEdit = (segIndex: number) => {
    const seg = track.segments[segIndex];
    if (!seg) return;
    const raw = seg.raw as SplitAudioTiming | undefined;

    openModal(() => {
      const [text, setText] = createSignal(seg.text);
      const [startMs, setStartMs] = createSignal(seg.startMs);
      const [endMs, setEndMs] = createSignal(seg.endMs);

      const onSave = async () => {
        const newSegments = track.segments.map((s, i) =>
          i === segIndex ? { ...s, text: text(), startMs: startMs(), endMs: endMs() } : s,
        );
        await client.write_app_file_text.call([props.filePath, serializeSegments(newSegments)]);
        closeModal();
      };

      return (
        <div class="flex flex-col gap-3 p-2 text-sm">
          <label class="flex flex-col gap-1">
            <span class="font-medium">译文</span>
            <textarea
              class="w-full min-h-20 rounded border p-2 text-sm"
              value={text()}
              onInput={(e) => setText(e.currentTarget.value)}
            />
          </label>
          <div class="flex gap-4">
            <label class="flex flex-col gap-1 flex-1">
              <span class="font-medium">开始 (ms)</span>
              <input
                class="rounded border px-2 py-1 text-sm"
                type="number"
                value={startMs()}
                onInput={(e) => setStartMs(Number(e.currentTarget.value))}
              />
            </label>
            <label class="flex flex-col gap-1 flex-1">
              <span class="font-medium">结束 (ms)</span>
              <input
                class="rounded border px-2 py-1 text-sm"
                type="number"
                value={endMs()}
                onInput={(e) => setEndMs(Number(e.currentTarget.value))}
              />
            </label>
          </div>
          {raw && (
            <div class="flex gap-4 text-xs text-muted-foreground">
              <span>原文: {raw.src}</span>
              <span>语言: {raw.src_lang}→{raw.dst_lang}</span>
            </div>
          )}
          <div class="flex justify-end gap-2 mt-1">
            <button class="px-3 py-1.5 rounded border text-sm cursor-pointer" onClick={closeModal}>取消</button>
            <button class="px-3 py-1.5 rounded bg-primary text-primary-foreground text-sm cursor-pointer" onClick={onSave}>保存</button>
          </div>
        </div>
      );
    }, { title: "编辑切分片段" });
  };

  const handleDelete = async (segIndex: number) => {
    const newSegments = deleteAt(track.segments, segIndex);
    await client.write_app_file_text.call([props.filePath, serializeSegments(newSegments)]);
  };

  const handlePlay = (segIndex: number) => {
    const seg = track.segments[segIndex];
    if (!seg) return;
    const idx = String(segIndex + 1).padStart(4, "0");
    const url = mediaUrl(`${taskDir}/split_audio/vocals/${idx}.wav`);
    const label = `#${segIndex + 1} ${seg.text}`;

    openModal(() => (
      <div class="p-4 flex justify-center">
        <AudioPlayer src={url} label={label} />
      </div>
    ), { title: `播放切分片段 ${label}`, size: "sm" });
  };

  return (
    <div class="h-16 border-b relative">
      {track.segments.map((seg) => (
        <ContextMenu>
          <ContextMenuTrigger as="div" class="contents">
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
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onSelect={() => handlePlay(seg.index)}>
              播放切分片段
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem onSelect={() => handleInsertBefore(seg.index)}>
              向前插入
            </ContextMenuItem>
            <ContextMenuItem onSelect={() => handleInsertAfter(seg.index)}>
              向后插入
            </ContextMenuItem>
            <ContextMenuItem onSelect={() => handleEdit(seg.index)}>
              编辑
            </ContextMenuItem>
            <ContextMenuItem onSelect={() => handleDelete(seg.index)}>
              删除
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        ))}
    </div>
  );
}
