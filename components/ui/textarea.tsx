import { forwardRef, type TextareaHTMLAttributes } from "react";

import type { InputControlSize, InputTone, InputVariant } from "./input";
import { cn } from "@/utils/cn";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant?: InputVariant;
  tone?: InputTone;
  controlSize?: InputControlSize;
  invalid?: boolean;
};

const variantStyles: Record<InputTone, Record<InputVariant, string>> = {
  light: {
    outline:
      "border-neutral-400 bg-transparent text-neutral-950 placeholder:text-neutral-400",
    filled:
      "border-neutral-300 bg-[#fcfaf7] text-neutral-950 placeholder:text-neutral-400",
  },
  dark: {
    outline:
      "border-white/30 bg-transparent text-white placeholder:text-white/45",
    filled:
      "border-white/15 bg-white/8 text-white placeholder:text-white/45",
  },
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = "filled",
      tone = "light",
      controlSize = "lg",
      invalid = false,
      className,
      ...props
    },
    ref,
  ) => (
    <textarea
      {...props}
      ref={ref}
      aria-invalid={invalid || props["aria-invalid"]}
      data-invalid={invalid || undefined}
      data-size={controlSize}
      data-tone={tone}
      data-variant={variant}
      className={cn(
        "block min-h-32 w-full resize-y rounded-sm border px-4 py-3 font-medium leading-6 transition-[border-color,background-color,box-shadow] duration-200",
        "focus:border-primary-500 focus:ring-2 focus:ring-primary-400/20",
        "disabled:cursor-not-allowed disabled:opacity-55",
        controlSize === "md" ? "text-sm" : "text-[15px]",
        variantStyles[tone][variant],
        invalid &&
          "border-rose-500 text-rose-950 focus:border-rose-500 focus:ring-rose-400/20",
        className,
      )}
    />
  ),
);

Textarea.displayName = "Textarea";

export default Textarea;
