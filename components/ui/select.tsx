"use client";

import { Check, ChevronDown } from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type KeyboardEvent,
} from "react";

import type { InputControlSize, InputTone, InputVariant } from "./input";
import { cn } from "@/utils/cn";

export type SelectOption = {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
};

export type SelectProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "defaultValue" | "onChange" | "size" | "value"
> & {
  name?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  options: readonly SelectOption[];
  placeholder?: string;
  variant?: InputVariant;
  tone?: InputTone;
  controlSize?: InputControlSize;
  invalid?: boolean;
};

const sizeStyles: Record<InputControlSize, string> = {
  md: "min-h-12 px-3 text-sm",
  lg: "min-h-14 px-4 text-[15px]",
};

const variantStyles: Record<InputTone, Record<InputVariant, string>> = {
  light: {
    outline: "border-neutral-400 bg-transparent text-neutral-950",
    filled: "border-neutral-300 bg-[#fcfaf7] text-neutral-950",
  },
  dark: {
    outline: "border-white/30 bg-transparent text-white",
    filled: "border-white/15 bg-white/8 text-white",
  },
};

function nextEnabledIndex(
  options: readonly SelectOption[],
  start: number,
  direction: 1 | -1,
) {
  if (!options.length) return -1;

  for (let offset = 1; offset <= options.length; offset += 1) {
    const index = (start + offset * direction + options.length) % options.length;
    if (!options[index]?.disabled) return index;
  }

  return -1;
}

export function Select({
  name,
  value,
  defaultValue = "",
  onValueChange,
  options,
  placeholder = "Select an option",
  variant = "filled",
  tone = "light",
  controlSize = "lg",
  invalid = false,
  disabled = false,
  className,
  id,
  onBlur,
  "aria-describedby": ariaDescribedBy,
  ...buttonProps
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? `select-${generatedId}`;
  const listboxId = `${selectId}-listbox`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [activeIndex, setActiveIndex] = useState(-1);
  const currentValue = value ?? internalValue;
  const selectedIndex = options.findIndex(
    (option) => option.value === currentValue,
  );
  const selectedOption = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  const openMenu = () => {
    if (disabled) return;
    const firstEnabled = options.findIndex((option) => !option.disabled);
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : firstEnabled);
    setOpen(true);
  };

  const commitValue = (option: SelectOption) => {
    if (option.disabled) return;
    if (value === undefined) setInternalValue(option.value);
    onValueChange?.(option.value);
    setOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      if (!open) {
        openMenu();
        return;
      }
      setActiveIndex((index) =>
        nextEnabledIndex(options, index < 0 ? selectedIndex : index, direction),
      );
      return;
    }

    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      if (!open) openMenu();
      const ordered = event.key === "Home" ? options : [...options].reverse();
      const match = ordered.find((option) => !option.disabled);
      if (match) setActiveIndex(options.indexOf(match));
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!open) {
        openMenu();
      } else if (activeIndex >= 0) {
        const option = options[activeIndex];
        if (option) commitValue(option);
      }
      return;
    }

    if (event.key === "Escape" && open) {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      {name && <input type="hidden" name={name} value={currentValue} />}
      <button
        {...buttonProps}
        id={selectId}
        type="button"
        role="combobox"
        aria-autocomplete="none"
        aria-controls={listboxId}
        aria-describedby={ariaDescribedBy}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-invalid={invalid || undefined}
        aria-activedescendant={
          open && activeIndex >= 0
            ? `${listboxId}-option-${activeIndex}`
            : undefined
        }
        disabled={disabled}
        data-invalid={invalid || undefined}
        data-size={controlSize}
        data-tone={tone}
        data-variant={variant}
        onBlur={onBlur}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={handleKeyDown}
        className={cn(
          "group/select flex w-full items-center justify-between gap-3 rounded-sm border text-left font-medium transition-[border-color,background-color,box-shadow] duration-200",
          "focus:border-primary-500 focus:ring-2 focus:ring-primary-400/20",
          "disabled:cursor-not-allowed disabled:opacity-55",
          sizeStyles[controlSize],
          variantStyles[tone][variant],
          invalid &&
            "border-rose-500 text-rose-950 focus:border-rose-500 focus:ring-rose-400/20",
          className,
        )}
      >
        <span
          className={cn(
            "truncate",
            !selectedOption &&
              (tone === "dark" ? "text-white/45" : "text-neutral-400"),
          )}
        >
          {selectedOption?.label ?? placeholder}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "flex size-7 shrink-0 items-center justify-center border-l border-current/15 pl-3 transition-transform duration-300",
            open && "rotate-180",
          )}
        >
          <ChevronDown className="size-4" strokeWidth={1.8} />
        </span>
      </button>

      <div
        id={listboxId}
        role="listbox"
        aria-label={buttonProps["aria-label"]}
        aria-hidden={!open}
        className={cn(
          "absolute inset-x-0 top-[calc(100%+8px)] z-50 max-h-80 overflow-y-auto rounded-sm border p-1 shadow-[0_18px_48px_rgba(37,24,14,.18)]",
          "origin-top transition-[opacity,transform,visibility] duration-200",
          tone === "dark"
            ? "border-white/15 bg-neutral-950 text-white"
            : "border-neutral-300 bg-[#fcfaf7] text-neutral-900",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0",
        )}
      >
        {options.map((option, index) => {
          const selected = option.value === currentValue;
          const active = index === activeIndex;

          return (
            <button
              key={option.value}
              id={`${listboxId}-option-${index}`}
              type="button"
              role="option"
              aria-selected={selected}
              disabled={option.disabled}
              tabIndex={-1}
              onMouseDown={(event) => event.preventDefault()}
              onMouseEnter={() => !option.disabled && setActiveIndex(index)}
              onClick={() => commitValue(option)}
              className={cn(
                "grid w-full grid-cols-[1fr_20px] gap-3 rounded-xs border-b px-3 py-3 text-left last:border-b-0",
                "transition-colors duration-150",
                tone === "dark" ? "border-white/10" : "border-neutral-200",
                active &&
                  (tone === "dark" ? "bg-white/10" : "bg-primary-100/70"),
                option.disabled && "cursor-not-allowed opacity-40",
              )}
            >
              <span>
                <span className="block text-sm font-semibold">
                  {option.label}
                </span>
                {option.description && (
                  <span
                    className={cn(
                      "mt-1 block text-xs leading-5",
                      tone === "dark" ? "text-white/55" : "text-neutral-500",
                    )}
                  >
                    {option.description}
                  </span>
                )}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "mt-0.5 flex size-5 items-center justify-center border",
                  selected
                    ? "border-primary-600 bg-primary-600 text-white"
                    : tone === "dark"
                      ? "border-white/20"
                      : "border-neutral-300",
                )}
              >
                {selected && <Check className="size-3" strokeWidth={2} />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Select;
