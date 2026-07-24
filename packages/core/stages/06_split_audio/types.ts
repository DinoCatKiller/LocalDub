export type SplitAudioTiming = {
  seg_idx: number;
	src: string;
	dst: string;
	src_lang: string;
	dst_lang: string;
	start_time: number;
	end_time: number;
  start: number;
  end: number;
	speaker: string;
}

export interface SplitAudioFile {
  translation: SplitAudioTiming[]
}
