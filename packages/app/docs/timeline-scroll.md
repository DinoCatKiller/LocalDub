# Timeline 滚动"归零"bug 调查与基线结论

> 更新时间：2026-08
> 相关分支：`fix/f290274-稳定基线`（干净基线）、`fix/3d82d87-正确基线`
> 相关提交：`3d82d87`（好版本）→ `5b28bd1`（Index 修复）→ `f290274`（回 For）→ `a03a775`（迁移 main，引入回归）→ `0073186`（稳定引用尝试）

## 结论：f290274 是完整干净基线

实测确认 **`f290274`**：
- 编辑 asr_ocr_fix → **不归零**
- 上下文查询（get_task_ctx）刷新 → **不归零**
- 硬刷新（冷启动）→ 轨道**稳定唯一**（TimelineTracks 用 `<For>`，无重复）

即 f290274 满足全部目标（编辑不归零 + 上下文刷新不归零 + 冷启动唯一）。

## bug 机制（已定位）

滚动归零的触发条件，二者缺一不可：
1. 轨道行 **remount（DOM 重建）**，且
2. 重建链路导致滚动容器 scrollWidth/clientWidth 变化 → 浏览器把 scrollLeft clamp 到有效范围（回 0）

历史上两种途径触发：
- **A. 轨道组件内读取 shared query result（`useQuery` 并渲染 `.data`）** 组合 remount → 归零。
  - 仅订阅不读取（B 层）不归零；读取任意 shared query result 都会命中。
- **B. 父层 `tracks()` 组装数组整体重建**（每查一次重建全部 track 对象 → `<For>` 全量重建轨道 DOM）→ 归零。

## a03a775 迁移为何回归

`a03a775` 迁入 main 的 `query.ts`（`use_*_data` hooks）+ `TaskDetailPage` 重构后，**编辑与上下文刷新都归零**，而 Timeline/轨道组件与 f290274 几乎无差。回归必来自 query 层重构。候选触发源：

1. `use_*_data` 每个 hook 内部用 `useParams({ from: "/group/$id/$taskId" })` 构造 taskDir（f290274 用 `props.groupId/taskId`）。
2. `use_translate_data` 内部额外 `use_task_ctx()` —— 在 TaskDetailPage 自己的 `taskCtxQ` 之外**出现第二个 `get_task_ctx` 订阅实例**。

（精确触发点尚未逐帧复现；f290274 基线不归零，故暂时不迁移该层。）

## 决策

- **基线**：`fix/f290274-稳定基线`（f290274 之上）。
- **迁移策略（保守）**：只吸收 main 的**非 query 资产**，保持 f290274 内联 query 结构不动：
  - `TrackEditModal`（通用编辑表单，`extraFields` 插槽）
  - `tracks/shared.ts`：`BaseTrackProps` + `insertAt`/`deleteAt` 纯函数
  - `TranslationTrack` 右键菜单（f290274 无）
  - **不迁** `query_/query_track.ts` 的 hooks 化（回归源）。

## 换用修复（备选，若未来需要 main 的 query 层）

若要迁 query 层而不归零，可给 tracks 稳定引用（`createMemo` + 按 id 缓存轨道对象，`For` 按 item 引用 diff 跳过未变轨道）——提交 `0073186` 曾尝试，但当时未在 a03a775 上验证即转走。此项待后续在干净基线上单独验证后再决定。