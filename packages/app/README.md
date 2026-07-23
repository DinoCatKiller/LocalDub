# Tauri + Solid + Typescript

This template should help get you started developing with Tauri, Solid and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## todo

### tmp-todo
临时的局部todo, 经常修改

#### Timeline ruler refactor (aligned with OpenCutClassic)

- [x] Step 1 — `rulerConfig(pxPerMs, fps)` frame-aware 间隔算法
- [x] Step 2 — **两级刻度线**：label 间渲染小刻度 (tickIntervalMs)
- [x] **刻度视口虚拟化**：只渲染可见范围 + buffer，避免大量刻度时性能问题
- [ ] **标签格式支持帧号**：缩放到帧级时显示 `+FF` 号而非纯 `M:SS`
- [ ] **Zoom 锚定到播放头** + 对数映射：缩放时播放头保持在视口内
- [ ] **播放头吸附到帧**：`onSeek` / playhead drag 时对齐到帧边界
- [ ] **磁吸系统**：元素边缘/播放头/书签 snap（后期）
