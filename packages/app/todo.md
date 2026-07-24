
## tmp-todo
临时的局部todo, 经常修改

### Timeline ruler refactor (aligned with OpenCutClassic)

- [x] Step 1 — `rulerConfig(pxPerMs, fps)` frame-aware 间隔算法
- [x] Step 2 — **两级刻度线**：label 间渲染小刻度 (tickIntervalMs)
- [ ] **刻度视口虚拟化**：全量渲染暂时够用，后续需要再优化
- [x] **标签格式支持帧号**：缩放到帧级时显示 `+FF` 号而非纯 `M:SS`
- [x] **Zoom 锚定到播放头** + 对数映射：缩放时播放头保持在视口内
- [ ] **播放头吸附到帧**：`onSeek` / playhead drag 时对齐到帧边界
- [ ] **磁吸系统**：元素边缘/播放头/书签 snap（后期）

### Timeline: 多轨道自动检测 & 渲染

- [ ] **重构 Track 数据源** — 每个 stage 输出文件对应一个 parser 函数，统一输出 `TrackSegment[]`
  - [ ] `parseAsrTrack(file: AsrResult): TrackSegment[]`
  - [ ] `parseTranslationTrack(file: TranslateFile): TrackSegment[]`
  - [ ] `parseOcrTrack(file: OcrResult): TrackSegment[]`
  - [ ] `parseSplitAudioTrack(file: SplitAudioFile): TrackSegment[]`
  - [ ] `parseMergeAudioTrack(file: MergeTimings): TrackSegment[]`
- [ ] **TaskDetailPage 自动检测可用轨道** — 扫描 `taskDir` 下 stage 输出文件是否存在，自动填充 `tracks` 数组
- [ ] **轨道显示开关** — 用户可以勾选显示/隐藏某个轨道
- [ ] **轨道顺序** — 按 pipeline 执行顺序排列（asr → ocr → translate → split → merge）
- [ ] **轨道颜色** — 为每种轨道类型预设颜色
- [ ] **轨道高度 & 折叠** — 支持折叠/展开轨道以节省空间
