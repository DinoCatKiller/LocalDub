import { cn } from "@repo/shared/lib/utils";
import { createEffect, createSignal } from "solid-js";
import type { FrameRate } from "@repo/core/utils/timecode";
import { msToTimecode, timecodeToMs } from "@repo/core/utils/timecode";

interface EditableTimecodeProps {
  time: number;
  duration: number;
  fps: FrameRate;
  onTimeChange?: (ms: number) => void;
  class?: string;
  disabled?: boolean;
}

export function EditableTimecode(props: EditableTimecodeProps) {
  const [isEditing, setIsEditing] = createSignal(false);
  const [inputValue, setInputValue] = createSignal("");
  const [hasError, setHasError] = createSignal(false);
  let inputRef: HTMLInputElement | undefined;
  let enterPressed = false;

  const formatted = () => msToTimecode(props.time, props.fps);

  const startEditing = () => {
    if (props.disabled) return;
    setIsEditing(true);
    setInputValue(formatted());
    setHasError(false);
    enterPressed = false;
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setInputValue("");
    setHasError(false);
    enterPressed = false;
  };

  const applyEdit = () => {
    const parsed = timecodeToMs(inputValue(), props.fps);
    if (parsed == null) {
      setHasError(true);
      return;
    }
    const clamped = Math.max(0, Math.min(parsed, props.duration));
    props.onTimeChange?.(clamped);
    setIsEditing(false);
    setInputValue("");
    setHasError(false);
    enterPressed = false;
  };

  createEffect(() => {
    if (isEditing() && inputRef) {
      inputRef.focus();
      inputRef.select();
    }
  });

  return (
    <>
      {isEditing() ? (
        <input
          ref={inputRef!}
          type="text"
          value={inputValue()}
          onChange={(e) => { setInputValue(e.currentTarget.value); setHasError(false); }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              enterPressed = true;
              applyEdit();
            } else if (e.key === "Escape") {
              e.preventDefault();
              cancelEditing();
            }
          }}
          onBlur={() => {
            if (!enterPressed && isEditing()) applyEdit();
          }}
          class={cn(
            "-mx-1 border border-transparent bg-transparent px-1 font-mono text-xs outline-none",
            "focus:bg-background focus:border-primary focus:rounded",
            "text-primary tabular-nums",
            hasError() && "text-destructive focus:border-destructive",
            props.class,
          )}
          style={{ width: `${formatted().length + 1}ch` }}
          placeholder={formatted()}
        />
      ) : (
        <button
          type="button"
          onClick={startEditing}
          onKeyDown={(e) => {
            if (props.disabled) return;
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              startEditing();
            }
          }}
          disabled={props.disabled}
          class={cn(
            "text-primary cursor-pointer font-mono text-xs tabular-nums",
            "hover:bg-muted/50 -mx-1 px-1 hover:rounded",
            props.disabled && "cursor-default hover:bg-transparent",
            props.class,
          )}
          title={props.disabled ? undefined : "Click to edit time"}
        >
          {formatted()}
        </button>
      )}
    </>
  );
}
