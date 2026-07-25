import type { TaskCtx } from "#/integrations/fnrpc/bindings.ts";
import { useParams } from "@tanstack/solid-router";
import { For, Show, createSignal } from "solid-js";
import { FileTree } from "./FileTree";
import { Play } from 'lucide-solid';
import { fnrpc } from "#/integrations/fnrpc/client.ts";

export const TaskControlPanel = (p: {
  ctx: TaskCtx;
  resumeFromStage: string | null;
  onResumeFrom: (stageName: string | null) => void;
}) => {
  const params = useParams({from: '/group/$id/$taskId'});
  const taskDir = `workfolder/${params().id}/${p.ctx.task.id}`;
  const stages = () => p.ctx.stages ?? [];
  const tabs = () => ["root", ...stages().map(s => s.name)];

  const [activeTab, setActiveTab] = createSignal('root');
  const [viewingTab, setViewingTab] = createSignal('root');


  const handleResumeFrom = (stageName: string) => {
    const allTabs = tabs();
    const idx = allTabs.indexOf(stageName);
    if (idx > 0) {
      setViewingTab(allTabs[idx - 1]);
    }
    setActiveTab(stageName);      // 高亮三角所在的当前 tab
    p.onResumeFrom(stageName);
  };


  const handleSwitchTab = (tab: string) => {
    setActiveTab(tab);
    setViewingTab(tab);
    p.onResumeFrom(null);
  };

  const handleConfirmResume = () => {
    const stage = p.resumeFromStage;
    console.log('[resume] taskDir:', taskDir, 'stage:', stage);  // ← 加这行
    if (!stage) return;
    fnrpc.resume_task([taskDir,stage]).then(() => {
      console.log('[resume] 重跑完成');
    }).catch(err => {
      console.error('[resume] 重跑失败:', err);
    });
    p.onResumeFrom(null);
    setViewingTab(activeTab());
  };

  return (
      <div class="w-100 min-w-40 border-r flex text-muted-foreground text-sm overflow-hidden">
        <div class="w-full grid grid-cols-[auto_1fr]">
          {/* 左侧 tab 列表 */}
          <div class="flex flex-col gap-px p-1">
            <For each={tabs()}>{(tab) => (
                <div class="flex items-center w-full">
                  <Show when={tab !== 'root'} fallback={<span class="w-5 shrink-0 mx-1" />}>
                    <Play
                        class="size-3 text-green-500 hover:text-green-400 cursor-pointer shrink-0 mx-1"
                        onClick={() => handleResumeFrom(tab)}
                    />
                  </Show>
                  <button
                      class="flex-1 justify-start inline-flex items-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium hover:bg-accent/40 data-[active=true]:bg-accent/40 data-[active=true]:text-foreground data-[active=true]:shadow-sm"
                      data-active={activeTab() === tab}
                      onClick={() => handleSwitchTab(tab)}
                  >
                    {tab}
                  </button>
                </div>
            )}</For>
          </div>

          {/* 右侧内容 */}
          <div class="flex flex-col min-w-0">
            <Show when={p.resumeFromStage}>
              <div class="flex items-center gap-1.5 px-3 py-1.5 border-b text-sm bg-muted/30 shrink-0">
                <Play
                    class="size-3 text-green-500 hover:text-green-400 cursor-pointer shrink-0"
                    onClick={handleConfirmResume}
                />
                <span class="text-muted-foreground">重跑阶段:</span>
                <span class="font-medium text-foreground">{p.resumeFromStage}</span>
              </div>
            </Show>
            <For each={tabs()}>{(tab) => (
                <Show when={viewingTab() === tab}>
                  <div class="overflow-auto flex-1">
                    <FileTree
                        relativeDir={tab === 'root' ? taskDir : `${taskDir}/${tab}`}
                    />
                  </div>
                </Show>
            )}</For>
          </div>
        </div>
      </div>
  );
};
