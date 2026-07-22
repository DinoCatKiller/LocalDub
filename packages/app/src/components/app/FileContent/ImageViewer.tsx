/** 图片查看器 — 居中显示图片，自适应大小 */
export function ImageViewer(props: { src: string }) {
  // TODO: 构建完整图片 URL（当前 path 是相对路径，需要拼接 base url）
  return (
    <div class="flex items-center justify-center h-full bg-neutral-900 overflow-hidden">
      <img
        src={props.src}
        alt=""
        class="max-h-full max-w-full object-contain"
      />
    </div>
  );
}
