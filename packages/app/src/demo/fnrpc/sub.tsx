import { fnrpc } from "#/integrations/fnrpc/client.ts";
import { consumeEventIterator } from "@fnrpc/client";
import { createEffect, createSignal, onCleanup, Show } from "solid-js";

function Row(props: { label: string; children: any }) {
  return (
    <div class="flex items-center gap-2 flex-wrap min-h-9 px-3 py-2 rounded-lg bg-card border text-sm">
      <span class="font-mono text-xs text-muted-foreground shrink-0 w-36">{props.label}</span>
      {props.children}
    </div>
  );
}
function TickTest() {
  const [count, setCount] = createSignal<number | null>(null);
  const [running, setRunning] = createSignal(false);

  createEffect(() => {
    if (!running()) return;
    const iter = fnrpc.tick(BigInt(500));
    const cancel = consumeEventIterator(iter, {
      onEvent: v => {
        setCount(Number(v))
      },
      onError: e => {
        console.error('tick error', e)
      }
    });
    onCleanup(() => cancel());
  });

  return (
    <Row label="tick(ms)">
      <span class="text-muted-foreground text-xs">500ms</span>
      <button
        class={running()
          ? 'bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700'
          : 'bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700'}
        onClick={() => setRunning(!running())}
      >
        {running() ? 'Stop' : 'Start'}
      </button>
      <Show when={count() !== null}>
        <span class="font-mono text-sm">Value: {count()}</span>
      </Show>
    </Row>
  );
}
