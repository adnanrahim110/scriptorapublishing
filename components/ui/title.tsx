"use client";

import { cn } from "@/utils/cn";
import {
  Children,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

export type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TitleSize =
  | "auto"
  | "display"
  | "hero"
  | "xl"
  | "lg"
  | "md"
  | "sm"
  | "xs"
  | "inherit";

export type TitleTone =
  | "ink"
  | "primary"
  | "soft"
  | "muted"
  | "inverse"
  | "inherit";

export type TitleWeight =
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "inherit";

export type TitleTracking =
  | "auto"
  | "editorial"
  | "tight"
  | "normal"
  | "wide"
  | "inherit";

export type TitleLeading =
  | "auto"
  | "compact"
  | "tight"
  | "snug"
  | "normal"
  | "inherit";

export type TitleAlign = "left" | "center" | "right" | "inherit";
export type TitleRevealFrom = "up" | "down" | "left" | "right" | "fade";

export type TitleProps = Omit<
  HTMLAttributes<HTMLHeadingElement>,
  "children" | "color"
> & {
  /** The semantic heading level rendered in the document. */
  as?: TitleTag;
  children: ReactNode;
  /** One or more exact text fragments to emphasize inside string children. */
  highlight?: string | readonly string[];
  size?: TitleSize;
  tone?: TitleTone;
  highlightTone?: TitleTone;
  weight?: TitleWeight;
  tracking?: TitleTracking;
  leading?: TitleLeading;
  align?: TitleAlign;
  highlightClassName?: string;
  /** Reveals once the title enters the viewport. */
  reveal?: boolean;
  revealFrom?: TitleRevealFrom;
  revealDelay?: number;
  revealDuration?: number;
  revealThreshold?: number;
  revealRootMargin?: string;
  revealOnce?: boolean;
};

const tagSize: Record<TitleTag, Exclude<TitleSize, "auto">> = {
  h1: "hero",
  h2: "xl",
  h3: "lg",
  h4: "md",
  h5: "sm",
  h6: "xs",
};

const sizeStyles: Record<Exclude<TitleSize, "auto">, string> = {
  display: "text-[clamp(3rem,5vw,4.5rem)]",
  hero: "text-[clamp(2.5rem,5vw,4rem)]",
  xl: "text-[clamp(2.125rem,4vw,3.25rem)]",
  lg: "text-[clamp(1.75rem,3vw,2.5rem)]",
  md: "text-[clamp(1.5rem,2.4vw,2rem)]",
  sm: "text-[clamp(1.25rem,1.8vw,1.5rem)]",
  xs: "text-[clamp(1rem,1.4vw,1.25rem)]",
  inherit: "text-[inherit]",
};

const toneStyles: Record<TitleTone, string> = {
  ink: "text-neutral-950",
  primary: "text-primary-700",
  soft: "text-neutral-700",
  muted: "text-neutral-500",
  inverse: "text-white",
  inherit: "text-inherit",
};

const weightStyles: Record<TitleWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  inherit: "font-[inherit]",
};

const tagTracking: Record<TitleTag, string> = {
  h1: "tracking-[-0.035em]",
  h2: "tracking-[-0.03em]",
  h3: "tracking-[-0.025em]",
  h4: "tracking-[-0.015em]",
  h5: "tracking-[-0.005em]",
  h6: "tracking-[0.01em]",
};

const trackingStyles: Record<Exclude<TitleTracking, "auto">, string> = {
  editorial: "tracking-[-0.035em]",
  tight: "tracking-[-0.02em]",
  normal: "tracking-[0em]",
  wide: "tracking-[0.04em]",
  inherit: "tracking-[inherit]",
};

const tagLeading: Record<TitleTag, string> = {
  h1: "leading-[0.98]",
  h2: "leading-[1]",
  h3: "leading-[1.04]",
  h4: "leading-[1.08]",
  h5: "leading-[1.12]",
  h6: "leading-[1.16]",
};

const leadingStyles: Record<Exclude<TitleLeading, "auto">, string> = {
  compact: "leading-[0.94]",
  tight: "leading-[0.98]",
  snug: "leading-[1.08]",
  normal: "leading-[1.2]",
  inherit: "leading-[inherit]",
};

const alignStyles: Record<TitleAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  inherit: "text-[inherit]",
};

const revealStartStyles: Record<TitleRevealFrom, Keyframe> = {
  up: {
    opacity: 0,
    transform: "translate3d(0, 20px, 0)",
    clipPath: "inset(0 0 100% 0)",
  },
  down: {
    opacity: 0,
    transform: "translate3d(0, -20px, 0)",
    clipPath: "inset(100% 0 0 0)",
  },
  left: {
    opacity: 0,
    transform: "translate3d(20px, 0, 0)",
    clipPath: "inset(0 100% 0 0)",
  },
  right: {
    opacity: 0,
    transform: "translate3d(-20px, 0, 0)",
    clipPath: "inset(0 0 0 100%)",
  },
  fade: {
    opacity: 0,
    transform: "translate3d(0, 0, 0)",
    clipPath: "inset(0)",
  },
};

const revealEndStyle: Keyframe = {
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  clipPath: "inset(0)",
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightedText(
  text: string,
  highlight: string | readonly string[] | undefined,
  tone: TitleTone,
  className: string | undefined,
) {
  const terms = (typeof highlight === "string" ? [highlight] : highlight ?? [])
    .map((term) => term.trim())
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  if (terms.length === 0) return text;

  const matcher = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");
  const normalizedTerms = new Set(terms.map((term) => term.toLocaleLowerCase()));

  return text.split(matcher).map((part, index) =>
    normalizedTerms.has(part.toLocaleLowerCase()) ? (
      <span
        key={`${part}-${index}`}
        className={cn("inline font-[inherit] tracking-[inherit]", toneStyles[tone], className)}
      >
        {part}
      </span>
    ) : (
      part
    ),
  );
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  (
    {
      as = "h2",
      children,
      highlight,
      size = "auto",
      tone = "ink",
      highlightTone = "primary",
      weight = "medium",
      tracking = "auto",
      leading = "auto",
      align = "left",
      highlightClassName,
      reveal = true,
      revealFrom = "up",
      revealDelay = 0,
      revealDuration = 800,
      revealThreshold = 0.2,
      revealRootMargin = "0px 0px -8% 0px",
      revealOnce = true,
      className,
      style,
      ...props
    },
    forwardedRef,
  ) => {
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const hasRevealed = useRef(false);

    const setRefs = useCallback(
      (node: HTMLHeadingElement | null) => {
        titleRef.current = node;

        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef],
    );

    useEffect(() => {
      if (!reveal) return;

      const node = titleRef.current;
      if (!node) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

      if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

      let animation: Animation | null = null;

      const playReveal = () => {
        if (hasRevealed.current && revealOnce) return;

        animation?.cancel();
        node.dataset.revealState = "animating";
        animation = node.animate(
          [revealStartStyles[revealFrom], revealEndStyle],
          {
            duration: Math.max(revealDuration, 0),
            delay: Math.max(revealDelay, 0),
            easing: "cubic-bezier(.22, 1, .36, 1)",
            fill: "backwards",
          },
        );
        hasRevealed.current = true;
        animation.onfinish = () => {
          node.dataset.revealState = "visible";
        };
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            playReveal();
          }

          if (entry.isIntersecting && revealOnce && hasRevealed.current) {
            observer.disconnect();
          }
        },
        {
          threshold: Math.min(Math.max(revealThreshold, 0), 1),
          rootMargin: revealRootMargin,
        },
      );

      observer.observe(node);
      return () => {
        observer.disconnect();
        animation?.cancel();
      };
    }, [
      reveal,
      revealDelay,
      revealDuration,
      revealFrom,
      revealOnce,
      revealRootMargin,
      revealThreshold,
    ]);

    const Component = as;
    const resolvedSize = size === "auto" ? tagSize[as] : size;
    const renderedChildren = Children.map(children, (child) =>
      typeof child === "string"
        ? highlightedText(
            child,
            highlight,
            highlightTone,
            highlightClassName,
          )
        : child,
    );

    return (
      <Component
        ref={setRefs}
        data-reveal-state="visible"
        className={cn(
          "font-heading",
          sizeStyles[resolvedSize],
          toneStyles[tone],
          weightStyles[weight],
          tracking === "auto" ? tagTracking[as] : trackingStyles[tracking],
          leading === "auto" ? tagLeading[as] : leadingStyles[leading],
          alignStyles[align],
          className,
        )}
        style={style}
        {...props}
      >
        {renderedChildren}
      </Component>
    );
  },
);

Title.displayName = "Title";

export default Title;
