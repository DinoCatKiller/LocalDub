import { Show } from "solid-js";
import { FileTab } from "./FileTab";
import { FileContent } from "./FileContent";
import { effectLog } from "@repo/ui-solid/utils/log";
import { useSelector } from "@tanstack/solid-store";
import { contentPanelStore } from "./store/ContentPanel";


interface Props {
  // onFileOpen?: (name: string, path: string) => void;
  onReady?: (ref: HTMLVideoElement) => void;
  onTogglePlay?: () => void;
  onRateChange?: (rate: number) => void;
  onTimeChange?: (ms: number) => void;
}

/**
 * ContentPanel — 文件查看面板。
 *
 * 内部维护一组已打开的 tab，每个 tab 对应一个文件。
 * 根据文件类型自动选择对应的 viewer（Monaco / Image / Video）。
 *
 * 使用方式：
 *   <ContentPanel onFileOpen={(name, path) => console.log(name, path)} />
 *   → FileTree 中 onOpenFile={panelRef.openFile}
 */
export function ContentPanel(props: Props) {
  const tabs = useSelector(contentPanelStore, (state) => state.tabs);
  // const [activePath, setActivePath] = createSignal<string | null>(null);
  const activePath = useSelector(contentPanelStore, (state) => state.activePath);
  effectLog('activePath:', activePath())
  // 默认行为：什么都不做
  // const handleFileOpen = props.onFileOpen ?? (() => {});

  /** 供外部（FileTree）调用的打开文件方法 */
  // function openFile(name: string, path: string) {
  //   // 如果已打开则直接切换
  //   const existing = tabs().find((t) => t.path === path);
  //   if (existing) {
  //     setActivePath(path);
  //     return;
  //   }
  //   addTab({ path, label: name });
  //   setActivePath(path);
  //   handleFileOpen(name, path);
  // }

  // 关闭 tab
  // function closeTab(path: string) {
  //   setTabs((prev) => {
  //     const filtered = prev.filter((t) => t.path !== path);
  //     // 如果关掉的是当前活跃 tab，切换到最后一个或 null
  //     if (path === activePath()) {
  //       setActivePath(filtered.length > 0 ? filtered[filtered.length - 1].path : null);
  //     }
  //     return filtered;
  //   });
  // }


  return (
    <div class="flex flex-col h-full w-full min-w-0 overflow-hidden">
      {/*<Show when={tabs().length > 0}>*/}
        <FileTab
        />
      {/*</Show>*/}

      <Show
        when={activePath()}
        fallback={
          <div class="flex-1 flex items-center justify-center text-sm text-muted-foreground">
            请选择一个文件
          </div>
        }
      >
        {/* 取文件名作为 label */}
        <FileContent
          path={activePath()!}
          label={tabs().find((t) => t.path === activePath())?.label ?? activePath()!}
          onReady={props.onReady}
          onTogglePlay={props.onTogglePlay}
          onRateChange={props.onRateChange}
          onTimeChange={props.onTimeChange}
        />
      </Show>
    </div>
  );
}
