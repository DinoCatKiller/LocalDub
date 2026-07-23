import { spawnSync } from 'node:child_process';

/**
 * 探索视频持续时间, ms
 */
export function probeVideoDuration(videoPath: string): number {

  const r = spawnSync('ffprobe', [
    '-v', 'error',
    '-show_entries', 'format=duration',
    '-of', 'csv=p=0',
    videoPath,
  ], { timeout: 15_000, encoding: 'utf-8' });
  return Math.round(parseFloat(r.stdout?.trim() || '0') * 1000);
}

/** 用 ffprobe 读取视频帧率，失败时返回默认值 */
export function probeFrameRate(videoPath: string, defaultValue = 30): number {
	try {
		const r = spawnSync('ffprobe', [
			'-v', 'error',
			'-select_streams', 'v:0',
			'-show_entries', 'stream=r_frame_rate',
			'-of', 'csv=p=0',
			videoPath,
		], { timeout: 10_000 });
		if (r.status !== 0) return defaultValue;
		const output = r.stdout.toString().trim();
		if (!output || !output.includes('/')) return defaultValue;
		// e.g. "30000/1001" → 30000/1001 ≈ 29.97
		const [numStr, denStr] = output.split('/');
		const num = parseInt(numStr, 10);
		const den = parseInt(denStr, 10);
		if (isNaN(num) || isNaN(den) || den === 0) return defaultValue;
		return Math.round(num / den * 1000) / 1000; // 保留三位小数
	} catch {
		return defaultValue;
	}
}
