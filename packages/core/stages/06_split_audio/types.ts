export type SplitAudioItem = {
  seg_idx: number;
	src: string;
	dst: string;
	src_lang: string;
	dst_lang: string;
  start: number; // padSegments 切分音频的起点
  end: number; // padSegments 切分音频的终点
	speaker: string;
}

export interface SplitAudioTiming extends SplitAudioItem {
 	start: number; // 视频意图起点
	end: number; // 视频意图终点
}

export interface SplitAudioFile {
  translation: SplitAudioItem[]
}
export interface SplitAudioWithVadFile {
  translation: SplitAudioTiming[]
}
