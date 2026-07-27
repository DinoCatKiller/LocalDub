# i18n

本目录存放 LocalDub 的国际化（i18n）相关文件，基于 [Paraglide JS](https://paraglidejs.com) 实现。

## 目录结构

- `messages/zh-cn.json`, `messages/en.json` — **翻译源文件**（需要提交到 Git，手动编辑维护）
- `project.inlang/` — inlang 项目配置（需要提交到 Git）
- `paraglide/` — **自动生成的编译产物**（由 Paraglide 从翻译源编译而来，**不纳入 Git**）

`paraglide/` 下的所有文件都由工具自动生成，已被 `paraglide/.gitignore` 忽略，请勿手动编辑，也不要将其提交到仓库。

## 生成时机

编译产物通常在以下时机自动生成，**无需手动干预**：

- 运行 `vite`（dev / build）时，由 `packages/app` 与 `packages/web` 的 `paraglideVitePlugin` 自动编译到 `packages/shared/i18n/paraglide`（见 `packages/*/vite.config.ts`）。

## 主动重新生成

如果需要不启动 vite 就重新生成产物（例如只想在 `shared` 包内单独触发，或确认产物是否最新），可在本仓库 `packages/shared` 下执行：

```bash
bun run i18n:compile
```

该命令等价于：

```bash
paraglide-js compile --project ./i18n/project.inlang --outdir ./i18n/paraglide
```

## 修改翻译

直接编辑 `messages/*.json`，保存后下次运行 vite（或手动执行 `i18n:compile`）即会重新生成 `paraglide/` 产物。
