---
name: "solidjs-reactivity"
---

## SolidJS 响应式陷阱

### getter 函数 vs 普通变量

**For 的 render 函数中，所有依赖 props/signal 的中间值必须写成 getter 函数，而非普通变量。**

```tsx
// ❌ 错误：ms/isLabel 是普通变量，只在插入时计算一次
<For each={arr}>
  {(i) => {
    const ms = i * props.interval;  // 被闭包捕获的定值
    const isLabel = shouldShowLabel(ms, props.labelInterval);
    return <div style={{ left: `${ms * props.pxPerMs}px` }}>
      {isLabel ? text : null}
    </div>;
  }}
</For>

// ✅ 正确：getter 让 SolidJS 追踪内部依赖
<For each={arr}>
  {(i) => {
    const ms = () => i * props.interval;
    const isLabel = () => shouldShowLabel(ms(), props.labelInterval);
    return <div style={{ left: `${ms() * props.pxPerMs}px` }}>
      {isLabel() ? text : null}
    </div>;
  }}
</For>
```

**原因**：SolidJS 编译 JSX 为 `createEffect`，只追踪在 JSX 内被调用的函数/属性访问。普通变量在闭包外已求值，SolidJS 看不到它们内部依赖的 props/signal。

### 案例：TimelineRuler 刻度不变密

缩放时 `tickIntervalMs` 和 `pxPerMs` 都变化，但已渲染的刻度（小竖线）位置不更新：
- `ms = i * tickIntervalMs` → 普通 number → 不追踪 `tickIntervalMs`
- 只追踪 `pxPerMs` → 位置变了但没变密
- 改为 `ms = () => i * tickIntervalMs` → getter → 追踪 `tickIntervalMs` → 正确更新

### 通用规则

| 写法 | 追踪 | 适用场景 |
|---|---|---|
| `const x = expr` | 不追踪 | 常量、不依赖 props/signal 的值 |
| `const x = () => expr` | 追踪 `expr` 内所有依赖 | 依赖 props/signal 的中间计算 |
| `const [x] = createMemo(() => expr)` | 追踪 + 缓存 | 复杂计算，多处引用 |
