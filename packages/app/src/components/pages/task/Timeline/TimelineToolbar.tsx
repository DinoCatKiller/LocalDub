import { ZoomIn, ZoomOut } from "lucide-solid";

interface Props {
  zoom: number;
  sliderValue: number;
  onSliderChange: (v: number) => void;
}

export function TimelineToolbar(props: Props) {
  return (
    <div class="flex items-center h-7 px-2 gap-2 border-b bg-muted/20 shrink-0">
      <button onClick={() => props.onSliderChange(Math.max(0, props.sliderValue - 0.12))} class="hover:text-foreground text-muted-foreground">
        <ZoomOut size={14} />
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.001}
        value={props.sliderValue}
        onInput={(e) => props.onSliderChange(Number(e.currentTarget.value))}
        class="w-20 h-1"
      />
      <button onClick={() => props.onSliderChange(Math.min(1, props.sliderValue + 0.12))} class="hover:text-foreground text-muted-foreground">
        <ZoomIn size={14} />
      </button>
      <span class="text-[10px] text-muted-foreground">{props.zoom.toFixed(1)}x</span>
    </div>
  );
}
