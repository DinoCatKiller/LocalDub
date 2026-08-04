# LocalDub 前端路线图

## 已解决

### 1. Timeline 编辑轨道后滚动归零（已修复）

**现象**：编辑/插入 asr_ocr_fix 片段后，Timeline 滚动条自动滑到开头。

**根因**（分层实验 A→B→C→D 定位）：
- 触发条件 = `<For>` 无 key 全量重建轨道行（编辑时 `tracks()` 重组） **+** 轨道组件内 `useQuery` **并读取其 result**（建立响应式订阅），二者缺一不可。
- 仅订阅不读取（B 层）→ 不归零；remount 本身 → 不归零；refetch taskCtxQ → 不归零。
- 读取任何 shared query result（get_task_ctx / translation）都会触发，属通用机制。

**修复**：轨道行改用 `<Index>`（按 index 复用，避免 remount）+ 轨道组件响应式 props 访问（`track()`/`pxPerMs()`/`color()`），解决复用下的 UI 更新。

### 2. `<Index>` 冷启动随机轨道重复（已修复）

**现象**：硬刷新（冷启动）时轨道数量/颜色纯随机（如 translation×4 + asr_ocr_fix×2），软刷新正常；`tracks()` 数据本身唯一正确。

**根因**：`<Index>` 按 index keyed 复用，硬刷新多 query 竞态下 reconcile 异常；TimelineTrackSide（`<For>`）正常 vs TimelineTracks（`<Index>`）错乱。

**修复**：TimelineTracks 回退 `<For>`。为保持"编辑不归零"，轨道组件回到 B 层状态（不读任何 shared query result）。

## 联动删除（暂未实现）

### 需求
在 **translate tab**（同时显示校对 asr_ocr_fix 轨 + 译文 translation 轨）右键 asr_ocr_fix 片段，提供"联动删除(校对+译文)"：同步删除 `asr_ocr_fix/asr_ocr_fused_llm_fix.json` 与 `translate/translation.{target_language}.json` 中**同一索引**的片段。

### 为什么客户端方案不可行
1. **归零 bug**：客户端实现需轨道组件读 translation 数据（`read_app_file_text`）→ 读 shared query result → 与 `<For>` 全重建组合触发滚动归零。
2. **非原子**：双文件写入靠客户端 `Promise.all`，一个失败即两文件不一致。
3. **依赖链**：`translation.{lang}.json` 的 key 依赖 `get_task_ctx` 的 `target_language`，轨道组件再读一个 shared query。

### 未来方案：服务端 RPC
- 在 `packages/app/src-tauri/src/feat/tasks/` 新增 handler，如 `linked_delete_segment(task_dir, seg_index)`（`#[fnrpc::rpc_mutation]`），注册进 `fnrpc_func.rs` 的 router。
- 服务端职责：
  1. 读 `asr_ocr_fix/asr_ocr_fused_llm_fix.json` 与 `translate/translation.{lang}.json`（lang 从 task ctx 取）
  2. 校验两文件 segments 数一致
  3. 同索引删除，写回两文件（出错回滚）
  4. 返回结果
- 重新运行 `gen_fnrpc` 生成 TS 绑定。
- 客户端：轨道组件仅调 RPC + invalidate 两个文件的 read query → **轨道组件零 shared query**、操作原子。
- 菜单项现阶段为占位（提示"开发中"），UI 入口保留。

## 待办
- [ ] 联动删除服务端 RPC（见上）
- [ ] 诊断探针清理（Timeline `[EL-MOUNT]/[SCROLL]/[REF-TRACKS]/[SET-SL]/[SCROLLTO]/[SIV]/[WIN-SCROLL]/[RAF]/[RESIZE]/[TRACE]/[SCROLL-capture]`、TaskDetailPage `[TRACE-ctx]`、AsrOcrFixTrack onMount/data-vtab、TimelineTracks `[TRACK]/[TRACKS-ARR]`）
- [ ] `AsrOcrFixTrack` 恢复 `const.ts` translate tab 的联动删除入口完善
