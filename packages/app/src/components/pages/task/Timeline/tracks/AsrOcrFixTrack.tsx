import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@repo/ui-solid/base/context-menu";
import { openModal } from "@repo/ui-solid/custom/modal/renderer";
import type { Track, TrackSegment } from "../consts";
import { client } from "#/integrations/fnrpc/client.ts";
import type { AsrOcrBaseSegment, AsrOcrFile } from "@repo/core/ml/subtitle_ocr/types";
import type { TranslateFile } from "@repo/core/stages/05_translate/type";
import { useMutation, useQueryClient } from "@tanstack/solid-query";
import { useViewingTab } from "../../TaskControlPanel/taskControlPanelStore";
import { use_task_ctx, use_translate_data } from "../../query";
import { STAGE_TRACKS } from "./const";
import { deleteAt, insertAt, linkedDelete, type LinkedWriteTarget } from "./shared";
import { TrackEditModal } from "./TrackEditModal";

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
  const segs: AsrOcrBaseSegment[] = segments.map((s) => {
    const raw = (s.raw as AsrOcrBaseSegment) || {};
    return {
      text: s.text,
      start: s.startMs,
      end: s.endMs,
      box_y: raw.box_y ?? [0, 0],
      confidence: raw.confidence ?? 1,
    };
  });
  const out: AsrOcrFile = { result: { segments: segs } };
  return JSON.stringify(out, null, 2);
}

const ASR_OCR_DEFAULT_RAW = { text: "", start: 0, end: 0, box_y: [0, 0], confidence: 1 };

export function AsrOcrFixTrack(props: Props) {
  const { track, pxPerMs, onSeek, color } = props;
  const mutation = useMutation(() =>
    client.write_app_file_text.mutationOptions({
      onMutate: (variables, context) => {
        context.client.setQueryData(client.read_app_file_text.queryKey(variables[0]), variables[1]);
      },
      onSuccess: (data, variables, onMutateResult, context) => {
        context.client.invalidateQueries({
          queryKey: client.read_app_file_text.queryKey(variables[0]),
        });
      },
    }),
  );
  const handleInsertBefore = (segIndex: number) => {
    const newSegments = insertAt(track.segments, segIndex, false, {
      defaultRaw: ASR_OCR_DEFAULT_RAW,
    });
    mutation.mutate([props.filePath, serializeSegments(newSegments)]);
  };

  const handleInsertAfter = (segIndex: number) => {
    const newSegments = insertAt(track.segments, segIndex, true, {
      defaultRaw: ASR_OCR_DEFAULT_RAW,
    });
    mutation.mutate([props.filePath, serializeSegments(newSegments)]);
  };

  const handleEdit = (segIndex: number) => {
    const seg = track.segments[segIndex];
    if (!seg) return;
    const raw = seg.raw as AsrOcrBaseSegment | undefined;

    openModal(
      () => (
        <TrackEditModal
          initialText={seg.text}
          initialStartMs={seg.startMs}
          initialEndMs={seg.endMs}
          extraFields={() =>
            raw && (
              <div class="flex gap-4 text-xs text-muted-foreground">
                <span>置信度: {raw.confidence?.toFixed(3)}</span>
                <span>
                  box_y: [{raw.box_y?.[0]}, {raw.box_y?.[1]}]
                </span>
              </div>
            )
          }
          onSave={({ text, startMs, endMs }) => {
            const newSegments = track.segments.map((s, i) =>
              i === segIndex ? { ...s, text, startMs, endMs } : s,
            );
            mutation.mutate([props.filePath, serializeSegments(newSegments)]);
          }}
        />
      ),
      { title: "编辑片段" },
    );
  };

  const handleDelete = (segIndex: number) => {
    const newSegments = deleteAt(track.segments, segIndex);
    mutation.mutate([props.filePath, serializeSegments(newSegments)]);
  };

  // ---- 联动删除（校对 + 译文同步删同索引）----
  const viewingTab = useViewingTab();
  const taskCtxQ = use_task_ctx();
  // 当前 tab 映射到的轨道 id 列表（root tab 无映射）
  const tabTracks = () => {
    const v = viewingTab();
    return v === "root" ? [] : (STAGE_TRACKS[v] ?? []);
  };
  const transSegments = use_translate_data({
    enabled: () => tabTracks().includes("translation"),
  });
  const transLang = () => taskCtxQ.data?.target_language;
  const queryClient = useQueryClient();

  // 仅当当前 tab 同时映射了校对与翻译轨道（translate tab）时显示联动删除
  const showLinkedDelete = () =>
    tabTracks().includes("asr_ocr_fix") && tabTracks().includes("translation");

  const serializeTranslation = (segments: TrackSegment[]): string => {
    const segs: TranslateFile["translation"] = segments.map((s) => {
      const raw = s.raw as TranslateFile["translation"][number] | undefined;
      return {
        src: raw?.src ?? "",
        dst: s.text,
        src_lang: raw?.src_lang ?? "auto",
        dst_lang: raw?.dst_lang ?? "auto",
        start: s.startMs,
        end: s.endMs,
        speaker: raw?.speaker ?? "1",
      };
    });
    return JSON.stringify({ translation: segs }, null, 2);
  };

  const handleLinkedDelete = async (segIndex: number) => {
    const trans = transSegments();
    const lang = transLang();
    if (!lang || trans.length !== track.segments.length) return;
    const targets: LinkedWriteTarget[] = [
      { filePath: props.filePath, segments: track.segments, serialize: serializeSegments },
      {
        filePath: `${props.taskDir}/translate/translation.${lang}.json`,
        segments: trans,
        serialize: serializeTranslation,
      },
    ];
    await linkedDelete(targets, segIndex);
    await Promise.all(
      targets.map((t) =>
        queryClient.invalidateQueries({
          queryKey: client.read_app_file_text.queryKey(t.filePath),
        }),
      ),
    );
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
            <ContextMenuItem onSelect={() => handleInsertBefore(seg.index)}>
              向前插入
            </ContextMenuItem>
            <ContextMenuItem onSelect={() => handleInsertAfter(seg.index)}>
              向后插入
            </ContextMenuItem>
            <ContextMenuItem onSelect={() => handleEdit(seg.index)}>编辑</ContextMenuItem>
            <ContextMenuItem onSelect={() => onSeek(seg.endMs)}>跳转到结尾</ContextMenuItem>
            <ContextMenuSeparator />
            {showLinkedDelete() && (
              <ContextMenuItem
                onSelect={() => handleLinkedDelete(seg.index)}
                class="text-destructive"
              >
                联动删除(校对+译文)
              </ContextMenuItem>
            )}
            <ContextMenuItem onSelect={() => handleDelete(seg.index)} class="text-destructive">
              删除
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  );
}
