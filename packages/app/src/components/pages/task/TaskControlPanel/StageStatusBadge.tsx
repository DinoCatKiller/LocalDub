import { type Component } from "solid-js";
import { Dynamic } from "solid-js/web";
import { CheckCircle2, CircleCheck, CircleDashed, CircleX, LoaderCircle } from "lucide-solid";
import type { StageStatus } from "@repo/core/context/types";
import { TooltipX } from "@repo/ui-solid/custom/tooltip";

type StatusConfig = {
  label: string;
  icon: Component<{ class?: string }>;
  class: string;
};

const STATUS_CONFIG: Record<StageStatus, StatusConfig> = {
  pending: {
    label: "待运行",
    icon: CircleDashed,
    class: "text-muted-foreground",
  },
  running: {
    label: "运行中",
    icon: LoaderCircle,
    class: "text-blue-400",
  },
  success: {
    label: "已完成",
    icon: CircleCheck,
    class: "text-green-500",
  },
  failed: {
    label: "失败",
    icon: CircleX,
    class: "text-destructive",
  },
};

export const StageStatusBadge: Component<{ status: StageStatus }> = (p) => {
  const cfg = () => STATUS_CONFIG[p.status];
  return (
    <TooltipX content={cfg().label}>
      <span class={cfg().class}>
        <Dynamic component={cfg().icon} class="size-3.5" />
      </span>
    </TooltipX>
  );
};
