export type SplitAudioTiming = {
  seg_idx: number;
	src: string;
	dst: string;
	src_lang: string;
	dst_lang: string;
	start_time: number; // 视频意图起点
	end_time: number; // 视频意图终点
  start: number;
  end: number;
	speaker: string;
}

export interface SplitAudioFile {
  translation: SplitAudioTiming[]
}
