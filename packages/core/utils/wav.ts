import { readFileSync } from "node:fs";

export interface WavPcm {
  /** 单声道样本, 归一化到 [-1, 1] */
  samples: Float32Array;
  sampleRate: number;
  /** 原始文件声道数 (返回样本已下混为单声道) */
  channels: number;
}

/**
 * 读取标准 PCM WAV, 返回单声道归一化样本。
 *
 * 支持 8/16/32-bit; 32-bit 按 IEEE float 解析 (与 demucs 侧 `_readWav` 一致)。
 * 多声道按各声道平均值下混。
 *
 * 注意: 只处理无压缩的 PCM, 遇到 mp3/aac 等封装或非 PCM 会抛错,
 * 调用方需自行 try/catch (例如 TTS 质检遇到损坏占位文件时不应让主流程失败)。
 */
export function readWavPcm(filePath: string): WavPcm {
  const buf = readFileSync(filePath);
  if (buf.length < 44) throw new Error(`WAV 过小或非标准 PCM: ${filePath}`);
  if (buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WAVE") {
    throw new Error(`不是合法的 WAV 文件: ${filePath}`);
  }

  const channels = buf.readUInt16LE(22);
  const sampleRate = buf.readUInt32LE(24);
  const bitsPerSample = buf.readUInt16LE(34);
  const bytesPerSample = bitsPerSample / 8;
  if (channels <= 0) throw new Error(`WAV 声道数非法 (${channels}): ${filePath}`);

  // 遍历 chunk 找 data (不假设固定 44 字节头, 兼容含 LIST/fact 等 chunk 的文件)
  let dataStart = -1;
  let dataSize = 0;
  let pos = 12;
  while (pos + 8 <= buf.length) {
    const chunkId = buf.toString("ascii", pos, pos + 4);
    const chunkSize = buf.readUInt32LE(pos + 4);
    if (chunkId === "data") {
      dataStart = pos + 8;
      dataSize = Math.min(chunkSize, buf.length - dataStart);
      break;
    }
    pos += 8 + chunkSize + (chunkSize % 2); // chunk 按偶数字节对齐
  }
  if (dataStart < 0 || dataSize <= 0) throw new Error(`WAV 缺少 data chunk: ${filePath}`);

  const frames = Math.floor(dataSize / (bytesPerSample * channels));
  const samples = new Float32Array(frames);

  if (channels === 1 && bitsPerSample === 16 && (buf.byteOffset + dataStart) % 2 === 0) {
    // 快路径: 单声道 16bit 直接建 Int16Array 视图, 避免逐样本 readInt16LE 开销
    const view = new Int16Array(buf.buffer, buf.byteOffset + dataStart, frames);
    for (let i = 0; i < frames; i++) samples[i] = view[i] / 32768;
  } else {
    const stride = bytesPerSample * channels;
    for (let f = 0; f < frames; f++) {
      let sum = 0;
      for (let c = 0; c < channels; c++) {
        const off = dataStart + f * stride + c * bytesPerSample;
        if (bitsPerSample === 16) sum += buf.readInt16LE(off) / 32768;
        else if (bitsPerSample === 32) sum += buf.readFloatLE(off);
        else if (bitsPerSample === 8) sum += (buf.readUInt8(off) - 128) / 128;
      }
      samples[f] = sum / channels;
    }
  }

  return { samples, sampleRate, channels };
}
