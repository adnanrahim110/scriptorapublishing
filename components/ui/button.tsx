"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";
import Link from "next/link";
import {
  Children,
  forwardRef,
  type ButtonHTMLAttributes,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
  type RefAttributes,
} from "react";

import { cn } from "@/utils/cn";

export type ButtonVariant = "solid" | "outline" | "soft" | "ghost";
export type ButtonTone =
  | "primary"
  | "secondary"
  | "neutral"
  | "success"
  | "danger";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonIconPosition = "start" | "end";

type ButtonOwnProps = {
  /** The visual surface treatment. */
  variant?: ButtonVariant;
  /** The semantic color family. */
  tone?: ButtonTone;
  size?: ButtonSize;
  /** Pass false or null to remove the default arrow. */
  icon?: ReactNode | false;
  iconPosition?: ButtonIconPosition;
  /** Prevents interaction and replaces the icon with a spinner. */
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
  className?: string;
};

type NextLinkProps = ComponentPropsWithoutRef<typeof Link>;

export type ButtonLinkProps = ButtonOwnProps &
  Omit<NextLinkProps, keyof ButtonOwnProps | "href"> & {
    href: NextLinkProps["href"];
  };

export type ButtonNativeProps = ButtonOwnProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonOwnProps | "href"
  > & {
    href?: never;
  };

export type ButtonProps = ButtonLinkProps | ButtonNativeProps;

type ButtonElement = HTMLAnchorElement | HTMLButtonElement;

const baseStyles = [
  "group/button relative isolate inline-flex shrink-0 touch-manipulation select-none items-center justify-center",
  "rounded-sm border font-semibold tracking-[0.01em] outline-none",
  "transition-transform duration-200 ease-[cubic-bezier(.22,1,.36,1)]",
  "focus-visible:ring-2 focus-visible:ring-offset-2",
  "motion-reduce:transition-none motion-reduce:transform-none",
].join(" ");

const sizeStyles: Record<ButtonSize, string> = {
  xs: "h-8 px-2 text-[11px]",
  sm: "h-10 px-3 text-xs",
  md: "h-12 px-4 text-sm",
  lg: "h-14 px-5 text-[15px]",
  xl: "h-16 px-6 text-base",
};

const iconOnlySizeStyles: Record<ButtonSize, string> = {
  xs: "w-8 px-0",
  sm: "w-10 px-0",
  md: "w-12 px-0",
  lg: "w-14 px-0",
  xl: "w-16 px-0",
};

const iconStageSizeStyles: Record<ButtonSize, string> = {
  xs: "size-4",
  sm: "size-4",
  md: "size-5",
  lg: "size-5",
  xl: "size-6",
};

const iconDividerStyles: Record<
  ButtonSize,
  Record<ButtonIconPosition, string>
> = {
  xs: {
    start: "mr-2 border-r pr-2",
    end: "ml-2 border-l pl-2",
  },
  sm: {
    start: "mr-2 border-r pr-2",
    end: "ml-2 border-l pl-2",
  },
  md: {
    start: "mr-3 border-r pr-3",
    end: "ml-3 border-l pl-3",
  },
  lg: {
    start: "mr-3 border-r pr-3",
    end: "ml-3 border-l pl-3",
  },
  xl: {
    start: "mr-4 border-r pr-4",
    end: "ml-4 border-l pl-4",
  },
};

const appearanceStyles: Record<ButtonVariant, Record<ButtonTone, string>> = {
  solid: {
    primary:
      "border-primary-700 bg-primary-600 text-white shadow-[0_1px_2px_rgba(51,33,18,.16)]",
    secondary:
      "border-neutral-950 bg-neutral-950 text-white shadow-[0_1px_2px_rgba(0,0,0,.14)]",
    neutral:
      "border-neutral-300 bg-white text-neutral-900 shadow-[0_1px_2px_rgba(23,23,23,.08)]",
    success:
      "border-emerald-700 bg-emerald-600 text-white shadow-[0_1px_2px_rgba(6,78,59,.14)]",
    danger:
      "border-rose-700 bg-rose-600 text-white shadow-[0_1px_2px_rgba(136,19,55,.14)]",
  },
  outline: {
    primary: "border-primary-500 bg-transparent text-primary-700 shadow-none",
    secondary: "border-neutral-800 bg-transparent text-neutral-950 shadow-none",
    neutral: "border-neutral-400 bg-transparent text-neutral-700 shadow-none",
    success: "border-emerald-500 bg-transparent text-emerald-700 shadow-none",
    danger: "border-rose-500 bg-transparent text-rose-700 shadow-none",
  },
  soft: {
    primary: "border-primary-200 bg-primary-100 text-primary-800 shadow-none",
    secondary: "border-neutral-200 bg-neutral-100 text-neutral-950 shadow-none",
    neutral: "border-neutral-200 bg-neutral-100 text-neutral-700 shadow-none",
    success: "border-emerald-200 bg-emerald-100 text-emerald-800 shadow-none",
    danger: "border-rose-200 bg-rose-100 text-rose-800 shadow-none",
  },
  ghost: {
    primary: "border-transparent bg-transparent text-primary-700 shadow-none",
    secondary: "border-transparent bg-transparent text-neutral-950 shadow-none",
    neutral: "border-transparent bg-transparent text-neutral-600 shadow-none",
    success: "border-transparent bg-transparent text-emerald-700 shadow-none",
    danger: "border-transparent bg-transparent text-rose-700 shadow-none",
  },
};

const focusStyles: Record<ButtonTone, string> = {
  primary: "focus-visible:ring-primary-400/65",
  secondary: "focus-visible:ring-neutral-500/55",
  neutral: "focus-visible:ring-neutral-400/60",
  success: "focus-visible:ring-emerald-400/60",
  danger: "focus-visible:ring-rose-400/60",
};

const registrationStyles: Record<ButtonTone, string> = {
  primary: "border-primary-900/30",
  secondary: "border-neutral-950/35",
  neutral: "border-neutral-400/45",
  success: "border-emerald-900/25",
  danger: "border-rose-900/25",
};

const disabledStyles =
  "cursor-not-allowed border-neutral-300 bg-neutral-100 text-neutral-400 shadow-none active:translate-x-0 active:translate-y-0";

const loadingStyles = "cursor-wait active:translate-x-0 active:translate-y-0";

function DefaultIcon() {
  return <ArrowRight aria-hidden="true" strokeWidth={1.8} />;
}

function ButtonIcon({
  icon,
  loading,
  position,
  size,
  hasLabel,
  interactive,
}: {
  icon: ReactNode | false;
  loading: boolean;
  position: ButtonIconPosition;
  size: ButtonSize;
  hasLabel: boolean;
  interactive: boolean;
}) {
  if (!loading && (icon === false || icon === null)) return null;

  const outgoingMotion =
    position === "end"
      ? "group-hover/button:translate-x-full group-hover/button:-translate-y-full"
      : "group-hover/button:-translate-x-full group-hover/button:-translate-y-full";
  const incomingStart =
    position === "end"
      ? "-translate-x-full translate-y-full"
      : "translate-x-full translate-y-full";

  return (
    <span
      aria-hidden="true"
      data-slot="button-icon"
      className={cn(
        "relative z-10 flex self-stretch items-center justify-center border-current/20",
        hasLabel && iconDividerStyles[size][position],
      )}
    >
      <span
        className={cn(
          "relative block shrink-0 overflow-hidden [&_svg]:size-full",
          iconStageSizeStyles[size],
        )}
      >
        {loading ? (
          <LoaderCircle className="animate-spin" strokeWidth={1.8} />
        ) : (
          <>
            <span
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transform-none",
                interactive && outgoingMotion,
              )}
            >
              {icon}
            </span>
            {interactive && (
              <span
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:hidden",
                  incomingStart,
                  "group-hover/button:translate-x-0 group-hover/button:translate-y-0",
                )}
              >
                {icon}
              </span>
            )}
          </>
        )}
      </span>
    </span>
  );
}

function ButtonContent({
  children,
  icon,
  iconPosition,
  loading,
  disabled,
  size,
  variant,
  tone,
  interactive,
}: Required<
  Pick<
    ButtonOwnProps,
    "iconPosition" | "loading" | "disabled" | "size" | "variant" | "tone"
  >
> & {
  children: ReactNode;
  icon: ReactNode | false;
  interactive: boolean;
}) {
  const hasLabel = Children.count(children) > 0;
  const iconSlot = (
    <ButtonIcon
      icon={icon}
      loading={loading}
      position={iconPosition}
      size={size}
      hasLabel={hasLabel}
      interactive={interactive}
    />
  );

  return (
    <>
      <span
        aria-hidden="true"
        data-slot="button-registration-frame"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 rounded-sm border transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]",
          disabled
            ? "translate-x-0 translate-y-0 border-neutral-300"
            : cn(
                "translate-x-1 translate-y-1",
                variant === "solid"
                  ? registrationStyles[tone]
                  : "border-current/25",
                interactive &&
                  "group-hover/button:translate-x-0 group-hover/button:translate-y-0 group-active/button:translate-x-0 group-active/button:translate-y-0",
              ),
          "motion-reduce:transition-none",
        )}
      />

      {interactive && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
        >
          <span className="absolute inset-x-3 top-1 h-px origin-left scale-x-0 bg-current opacity-45 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover/button:scale-x-100 motion-reduce:hidden" />
          <span className="absolute inset-x-3 bottom-1 h-px origin-right scale-x-0 bg-current opacity-45 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover/button:scale-x-100 motion-reduce:hidden" />
          <span className="absolute inset-y-3 left-1 w-px origin-top scale-y-0 bg-current opacity-30 transition-transform delay-75 duration-400 ease-out group-hover/button:scale-y-100 motion-reduce:hidden" />
          <span className="absolute inset-y-3 right-1 w-px origin-bottom scale-y-0 bg-current opacity-30 transition-transform delay-75 duration-400 ease-out group-hover/button:scale-y-100 motion-reduce:hidden" />
        </span>
      )}

      {iconPosition === "start" && iconSlot}
      {hasLabel && (
        <span
          data-slot="button-label"
          className={cn(
            "relative z-10 truncate transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]",
            interactive &&
              "group-hover/button:-translate-y-px group-active/button:translate-y-0",
            "motion-reduce:transform-none motion-reduce:transition-none",
          )}
        >
          {children}
        </span>
      )}
      {iconPosition === "end" && iconSlot}
    </>
  );
}

function ButtonImpl(
  {
    variant = "solid",
    tone = "primary",
    size = "md",
    icon = <DefaultIcon />,
    iconPosition = "end",
    loading = false,
    disabled = false,
    fullWidth = false,
    children,
    className,
    ...elementProps
  }: ButtonProps,
  ref: ForwardedRef<ButtonElement>,
) {
  const isInactive = disabled || loading;
  const hasLabel = Children.count(children) > 0;
  const classes = cn(
    baseStyles,
    sizeStyles[size],
    !hasLabel && iconOnlySizeStyles[size],
    appearanceStyles[variant][tone],
    focusStyles[tone],
    !isInactive && "cursor-pointer active:translate-x-px active:translate-y-px",
    fullWidth && "w-full",
    className,
    disabled && disabledStyles,
    !disabled && loading && loadingStyles,
  );

  const content = (
    <ButtonContent
      icon={icon}
      iconPosition={iconPosition}
      loading={loading}
      disabled={disabled}
      size={size}
      variant={variant}
      tone={tone}
      interactive={!isInactive}
    >
      {children}
    </ButtonContent>
  );

  if ("href" in elementProps && elementProps.href !== undefined) {
    const { href, onClick, tabIndex, ...linkProps } = elementProps as Omit<
      ButtonLinkProps,
      keyof ButtonOwnProps
    >;

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
      if (isInactive) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      onClick?.(event);
    };

    return (
      <Link
        {...linkProps}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        href={href}
        className={classes}
        onClick={handleClick}
        tabIndex={isInactive ? -1 : tabIndex}
        aria-busy={loading ? true : linkProps["aria-busy"]}
        aria-disabled={isInactive ? true : linkProps["aria-disabled"]}
        data-disabled={disabled || undefined}
        data-loading={loading || undefined}
        data-size={size}
        data-tone={tone}
        data-variant={variant}
      >
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = elementProps as Omit<
    ButtonNativeProps,
    keyof ButtonOwnProps
  >;

  return (
    <button
      {...buttonProps}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      type={type}
      disabled={isInactive}
      className={classes}
      aria-busy={loading ? true : buttonProps["aria-busy"]}
      data-disabled={disabled || undefined}
      data-loading={loading || undefined}
      data-size={size}
      data-tone={tone}
      data-variant={variant}
    >
      {content}
    </button>
  );
}

type ButtonComponent = {
  (props: ButtonLinkProps & RefAttributes<HTMLAnchorElement>): ReactElement;
  (props: ButtonNativeProps & RefAttributes<HTMLButtonElement>): ReactElement;
  displayName?: string;
};

export const Button = forwardRef(ButtonImpl) as ButtonComponent;

Button.displayName = "Button";

export default Button;
