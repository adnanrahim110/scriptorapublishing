"use client";

import { cn } from "@/utils/cn";
import { useState, type KeyboardEvent, type ReactNode } from "react";

export default function ServiceProcessTabs({
  slug,
  name,
  labels,
  children,
}: {
  slug: string;
  name: string;
  labels: readonly string[];
  children: ReactNode[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % labels.length;
    else if (event.key === "ArrowLeft")
      next = (index + labels.length - 1) % labels.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = labels.length - 1;
    else return;
    event.preventDefault();
    setActiveIndex(next);
    document.getElementById(`${slug}-process-tab-${next}`)?.focus();
  }
  return (
    <>
      <div
        role="tablist"
        aria-label={`${name} process stages`}
        className="grid grid-cols-5 border-b border-neutral-300"
      >
        {labels.map((label, index) => (
          <button
            key={label}
            id={`${slug}-process-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`${slug}-process-panel-${index}`}
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => handleKey(event, index)}
            className={cn(
              "min-h-16 min-w-0 break-words border-r border-neutral-300 px-2 py-4 text-left last:border-r-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400 sm:min-h-20 sm:px-4",
              activeIndex === index
                ? "bg-primary-900 text-white"
                : "text-neutral-700 hover:bg-primary-50",
            )}
          >
            <span className="block font-mono text-xs">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-2 block text-xs font-semibold">{label}</span>
          </button>
        ))}
      </div>
      {children.map((child, index) => (
        <div
          key={index}
          id={`${slug}-process-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`${slug}-process-tab-${index}`}
          tabIndex={0}
          hidden={activeIndex !== index}
          className="focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400"
        >
          {child}
        </div>
      ))}
    </>
  );
}
