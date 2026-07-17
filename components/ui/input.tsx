import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export type InputVariant = "outline" | "filled";
export type InputTone = "light" | "dark";
export type InputControlSize = "md" | "lg";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  variant?: InputVariant;
  tone?: InputTone;
  controlSize?: InputControlSize;
  invalid?: boolean;
};

const sizeStyles: Record<InputControlSize, string> = {
  md: "h-12 px-3 text-sm",
  lg: "h-14 px-4 text-[15px]",
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

export const Input = forwardRef<HTMLInputElement, InputProps>(
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
    <input
      {...props}
      ref={ref}
      aria-invalid={invalid || props["aria-invalid"]}
      data-invalid={invalid || undefined}
      data-size={controlSize}
      data-tone={tone}
      data-variant={variant}
      className={cn(
        "block w-full rounded-sm border font-medium transition-[border-color,background-color,box-shadow] duration-200",
        "focus:border-primary-500 focus:ring-2 focus:ring-primary-400/20",
        "disabled:cursor-not-allowed disabled:opacity-55",
        sizeStyles[controlSize],
        variantStyles[tone][variant],
        invalid &&
          "border-rose-500 text-rose-950 focus:border-rose-500 focus:ring-rose-400/20",
        className,
      )}
    />
  ),
);

Input.displayName = "Input";

export default Input;
