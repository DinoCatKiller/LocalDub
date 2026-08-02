import { client } from "#/integrations/fnrpc/client.ts";
import type { TrackSegment } from "../consts";

/** 一个可联动写入的目标轨道（文件路径 + 数据 + 序列化格式） */
export interface LinkedWriteTarget {
  filePath: string;
  segments: TrackSegment[];
  serialize: (segs: TrackSegment[]) => string;
}

export function deleteAt(segments: TrackSegment[], index: number): TrackSegment[] {
  return segments.filter((_, i) => i !== index).map((s, i) => ({ ...s, index: i }));
}

/** 联动删除：对所有目标轨道同一索引删除一条并写盘 */
export async function linkedDelete(targets: LinkedWriteTarget[], index: number): Promise<void> {
  await Promise.all(
    targets.map((t) =>
      client.write_app_file_text.call([t.filePath, t.serialize(deleteAt(t.segments, index))]),
    ),
  );
}
