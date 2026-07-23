import { For } from "solid-js";
import { msToRuler } from "./consts";

interface Props {
  // 刻度线总宽度（像素），与时间线内容区域等宽
  ref: (el: HTMLDivElement) => void;
  totalPx: number;
  // 整个时间线的总时长（毫秒）
  duration: number;
  // 相邻刻度之间的间隔（毫秒），由父组件通过 rulerInterval() 动态计算得出
  interval: number;
  // 缩放系数：每毫秒对应的像素数
  pxPerMs: number;
  // 点击标尺时的回调，用于跳转播放头位置
  onRulerClick: (e: MouseEvent) => void;
}

/**
 * 时间轴标尺组件 — 在顶部渲染带有时间标签的水平刻度线。
 *
 * 结构：两层 div
 *   outer: 带裁剪/底边框的容器 (bg-muted/20)
 *   inner: relative 布局的实际绘制区，铺满总宽度，点击转发给 onRulerClick
 *     tick: 每个刻度是绝对定位的 div，左侧细线 + mm:ss 格式的时间文本
 *
 * 刻度间距逻辑（父组件 rulerInterval(pxPerMs) 决定）：
 *   从 [500ms, 1s, 2s, 5s, 10s, 30s, 60s] 中选最小值，
 *   使得任意相邻刻度的像素间距 ≥ 80px，避免标签重叠。
 */
export function TimelineRuler(props: Props) {
  // 需要渲染的刻度总数 = 总时长 / 间隔（向上取整）+ 1（包含 0 时刻）
  const tickCount = () => Math.ceil(props.duration / props.interval) + 1;

  return (
    <div ref={props.ref} class="overflow-hidden shrink-0 h-5 border-b bg-muted/20">
      {/* inner: 实际可点击区域，高度 20px (h-5)，宽度铺满时间线 */}
      <div
        class="relative text-[10px] text-muted-foreground cursor-pointer"
        style={{ width: `${props.totalPx}px`, "min-width": "100%" }}
        onClick={props.onRulerClick}
      >
        <For each={Array.from({ length: tickCount() }, (_, i) => i)}>
          {(i) => (
            /* 单个刻度标记 */
            <div
              // 每毫秒 × 间隔 → 刻度间的像素距离
              class="absolute top-0 h-full border-l border-muted-foreground/20 pl-0.5 leading-tight"
              style={{ left: `${i * props.interval * props.pxPerMs}px` }}
            >
              {msToRuler(i * props.interval)}
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
