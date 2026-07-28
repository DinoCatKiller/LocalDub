import { cn, css } from "../lib/utils";

export const scrollbarDefault = cn(
  "[&::-webkit-scrollbar]:w-1",
  "[&::-webkit-scrollbar]:h-1",
  // "[&::-webkit-scrollbar-track]:bg-gray-100", // 轨道
  "[&::-webkit-scrollbar-thumb]:bg-ctp-surface0", // 手柄
  "hover:[&::-webkit-scrollbar-thumb]:bg-accent", // 手柄
  // "dark:[&::-webkit-scrollbar-thumb]:bg-ctp-surface0",
  "[&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full",
);

/**
 * ⚠️ Tailwind CSS 静态扫描限制
 *
 * 这个值使用了 cn() 函数预合并，但由于 Tailwind CSS 只扫描源代码中的
 * 字面量字符串来检测哪些类需要包含进最终 CSS，当通过变量引用时，
 * Tailwind 无法自动识别 [&::-webkit-scrollbar]:w-0 和 [&::-webkit-scrollbar]:h-0
 * 这两个类，导致它们不会被包含进生成的 CSS。
 *
 * 原因：你的 Tailwind content 扫描配置可能只覆盖了当前应用目录（如
 * packages/app/src/*），而没有覆盖共享库目录（如 packages/shared/**）。
 因此定义在共享包中的 class 字符串即使直接写在变量里，也检测不到。
 *
 * 使用建议：
 * 1. 在 jsx/tsx 中使用时，请直接将类名作为字面量传入 cn()：
 *      cn("flex", "[&::-webkit-scrollbar]:w-0", "[&::-webkit-scrollbar]:h-0")
 * 2. 或者在 tailwind.config.ts 中通过 safelist 手动包含：
 *      safelist: ['[*~*::-webkit-scrollbar*:w-0]', '[*~*::-webkit-scrollbar*:h-0]']
 * 3. 或者扩展 Tailwind 的 content 扫描范围，将 packages/shared/** 加入扫描：
 *      content: ["./packages/**.{ts,tsx,html}"]
 *
 * 只有被 Tailwind 扫描到并包含进 CSS 的 class 才会生效。
 */
export const scrollbarHidden = cn("[&::-webkit-scrollbar]:w-0", "[&::-webkit-scrollbar]:h-0");
