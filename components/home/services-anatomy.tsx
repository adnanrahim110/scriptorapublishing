"use client";

import { homeServiceChapters } from "@/content/home";
import { cn } from "@/utils/cn";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import SectionHeading from "./section-heading";

const ServicesAnatomy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeChapter = homeServiceChapters[activeIndex];

  return (
    <section
      id="services"
      aria-labelledby="services-anatomy-title"
      className="border-b border-neutral-300 bg-[#f6f1ea] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div id="services-anatomy-title">
          <SectionHeading
            index="03"
            eyebrow="Anatomy of a published book"
            title="Every finished volume carries more than one craft."
            description="The disciplines are grouped by the job they perform, so authors can see the whole publishing system without walking through a wall of service cards."
          />
        </div>

        <div className="mt-14 grid border-y border-neutral-300 lg:mt-20 lg:grid-cols-12">
          <div className="border-b border-neutral-300 lg:col-span-4 lg:border-b-0 lg:border-r">
            <div
              role="tablist"
              aria-label="Publishing service chapters"
              className="grid sm:grid-cols-3 lg:grid-cols-1"
            >
              {homeServiceChapters.map((chapter, index) => {
                const active = index === activeIndex;
                return (
                  <button
                    key={chapter.number}
                    id={`service-tab-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls="service-chapter-panel"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "group/chapter relative grid min-h-24 grid-cols-[32px_1fr_20px] items-center gap-3 border-b border-neutral-300 px-4 py-5 text-left sm:border-b-0 sm:border-r sm:last:border-r-0 lg:min-h-32 lg:border-b lg:border-r-0 lg:px-6 lg:last:border-b-0",
                      "focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/70",
                      active ? "bg-primary-900 text-white" : "text-neutral-800",
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-[9px] tracking-[0.16em]",
                        active ? "text-primary-200" : "text-primary-600",
                      )}
                    >
                      {chapter.index}
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em]">
                        {chapter.shortLabel}
                      </span>
                      <span
                        className={cn(
                          "mt-1 hidden text-xs leading-5 lg:block",
                          active ? "text-white/55" : "text-neutral-500",
                        )}
                      >
                        {chapter.title}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-px origin-left transition-transform duration-300",
                        active
                          ? "scale-x-100 bg-primary-300"
                          : "scale-x-50 bg-primary-600 group-hover/chapter:scale-x-100",
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="service-chapter-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${activeIndex}`}
            className="grid lg:col-span-8 xl:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="relative min-h-96 overflow-hidden border-b border-neutral-300 p-6 xl:min-h-144 xl:border-b-0 xl:border-r xl:p-8">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(rgba(119,77,43,.07)_1px,transparent_1px)] bg-size-[100%_28px] opacity-40"
              />
              <div className="relative flex h-full min-h-80 items-center justify-center">
                <div className="relative h-72 w-full max-w-sm sm:h-80">
                  {homeServiceChapters.map((chapter, index) => {
                    const offset = index - activeIndex;
                    return (
                      <button
                        key={chapter.number}
                        type="button"
                        aria-label={`Show ${chapter.title}`}
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          "absolute left-1/2 top-1/2 flex h-64 w-[34%] -translate-x-1/2 -translate-y-1/2 flex-col justify-between border p-3 text-left shadow-[0_8px_30px_rgba(51,33,18,.12)]",
                          "transition-[transform,background-color,color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none",
                          index === activeIndex
                            ? "z-20 -translate-y-[54%] border-primary-900 bg-primary-800 text-white"
                            : "z-10 border-neutral-400 bg-[#fcfaf7] text-neutral-800",
                        )}
                        style={{
                          transform: `translate(calc(-50% + ${offset * 88}px), calc(-50% + ${Math.abs(offset) * 22}px)) rotate(${offset * 5}deg)`,
                        }}
                      >
                        <span className="font-mono text-[8px] uppercase tracking-[0.16em] opacity-65">
                          Signature / {chapter.index}
                        </span>
                        <span className="font-heading text-2xl font-medium leading-none [writing-mode:vertical-rl]">
                          {chapter.shortLabel}
                        </span>
                        <span className="font-mono text-[8px] uppercase tracking-[0.14em] opacity-65">
                          Scriptora
                        </span>
                      </button>
                    );
                  })}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-4 left-1/2 z-30 h-px w-4/5 -translate-x-1/2 bg-primary-900/30"
                  />
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-7 lg:p-8">
              <div className="flex items-start justify-between gap-6 border-b border-neutral-300 pb-6">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-600">
                    Chapter {activeChapter.index} / {activeChapter.shortLabel}
                  </p>
                  <h3 className="mt-3 font-heading text-3xl font-medium text-neutral-950 sm:text-4xl">
                    {activeChapter.title}
                  </h3>
                </div>
                <span className="font-heading text-6xl font-medium leading-none text-primary-200">
                  {activeChapter.number}
                </span>
              </div>
              <p className="max-w-xl border-b border-neutral-300 py-6 text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                {activeChapter.description}
              </p>

              <ul>
                {activeChapter.services.map((service, index) => (
                  <li key={service.href} className="border-b border-neutral-300">
                    <Link
                      href={service.href}
                      className="group/service grid min-h-24 grid-cols-[28px_1fr_24px] items-center gap-3 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/70"
                    >
                      <span className="font-mono text-[8px] tracking-[0.14em] text-primary-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-neutral-900 transition-transform duration-300 group-hover/service:translate-x-1 motion-reduce:transform-none">
                          {service.label}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-neutral-500">
                          {service.note}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 text-primary-600 transition-transform duration-300 group-hover/service:translate-x-0.5 group-hover/service:-translate-y-0.5 motion-reduce:transform-none"
                        strokeWidth={1.7}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAnatomy;
