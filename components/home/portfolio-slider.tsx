"use client";

import Button from "@/components/ui/button";
import { homePortfolio } from "@/content/home";
import { cn } from "@/utils/cn";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";

import SectionHeading from "./section-heading";

type VolumeStyle = CSSProperties & {
  "--cover": string;
  "--cover-accent": string;
  "--cover-ink": string;
};

const PortfolioSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const itemCount = homePortfolio.items.length;
  const activeItem = homePortfolio.items[activeIndex];

  const move = (direction: 1 | -1) => {
    setActiveIndex((index) => (index + direction + itemCount) % itemCount);
  };

  const relativeOffset = (index: number) => {
    let offset = (index - activeIndex + itemCount) % itemCount;
    if (offset > Math.floor(itemCount / 2)) offset -= itemCount;
    return offset;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(itemCount - 1);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStart.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) > 42) move(distance < 0 ? 1 : -1);
  };

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="relative overflow-hidden border-b border-neutral-300 bg-[#fcfaf7] py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[44%] h-px bg-primary-900/10"
      />
      <div className="container relative">
        <div id="portfolio-title">
          <SectionHeading
            index="04"
            eyebrow={homePortfolio.eyebrow}
            title={homePortfolio.title}
            description={homePortfolio.description}
          />
        </div>

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-0 lg:border-y lg:border-neutral-300">
          <div className="relative border-y border-neutral-300 lg:col-span-8 lg:border-y-0 lg:border-r">
            <div className="flex min-h-12 items-center justify-between border-b border-neutral-300 px-3">
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.17em] text-primary-700">
                Reading table / drag or use arrow keys
              </p>
              <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-500">
                {String(activeIndex + 1).padStart(2, "0")} / {String(itemCount).padStart(2, "0")}
              </p>
            </div>

            <div
              role="region"
              aria-roledescription="portfolio shelf"
              aria-label="Selected book concepts"
              aria-live="polite"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => (pointerStart.current = null)}
              className="relative min-h-128 touch-pan-y overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/70 sm:min-h-144 lg:min-h-160"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(119,77,43,.055)_1px,transparent_1px)] bg-size-[28px_100%] opacity-55"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-13 left-[8%] right-[8%] h-3 border-x border-b border-primary-900/25 bg-primary-100/40 shadow-[0_10px_30px_rgba(51,33,18,.12)]"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-16 left-[10%] right-[10%] h-px bg-primary-900/35"
              />

              {homePortfolio.items.map((item, index) => {
                const offset = relativeOffset(index);
                const distance = Math.abs(offset);
                const active = index === activeIndex;
                const style: VolumeStyle = {
                  "--cover": item.palette.cover,
                  "--cover-accent": item.palette.accent,
                  "--cover-ink": item.palette.ink,
                };

                return (
                  <button
                    key={item.index}
                    type="button"
                    aria-label={`Show ${item.title}`}
                    aria-pressed={active}
                    data-offset={offset}
                    data-distance={distance}
                    data-active={active || undefined}
                    onClick={() => setActiveIndex(index)}
                    style={style}
                    className="portfolio-volume group/volume absolute left-1/2 top-[46%] h-76 w-48 origin-bottom select-none border border-black/20 text-left shadow-[0_18px_45px_rgba(36,22,13,.24)] outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-4 sm:h-88 sm:w-56"
                  >
                    <span className="absolute inset-2 border border-[color:var(--cover-ink)]/30" />
                    <span className="absolute inset-x-5 top-6 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.16em] text-[color:var(--cover-ink)]/75">
                      <span>Scriptora</span>
                      <span>{item.index}</span>
                    </span>
                    <span className="absolute left-5 right-8 top-20 block font-heading text-[30px] font-medium leading-[0.94] text-[color:var(--cover-ink)] sm:text-4xl">
                      {item.title}
                    </span>
                    <span className="absolute left-5 top-[62%] h-px w-12 bg-[color:var(--cover-accent)]" />
                    <span className="absolute bottom-6 left-5 right-5 flex items-end justify-between gap-4 text-[color:var(--cover-ink)]">
                      <span className="max-w-24 text-[9px] font-semibold uppercase leading-4 tracking-[0.12em]">
                        {item.category}
                      </span>
                      <span
                        aria-hidden="true"
                        className="block h-14 w-8 border border-[color:var(--cover-accent)] bg-[color:var(--cover-accent)]/15"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 right-0 top-0 w-2 border-l border-black/15 bg-black/8"
                    />
                  </button>
                );
              })}

              <div className="absolute inset-x-4 bottom-4 z-40 flex items-center justify-between sm:inset-x-6">
                <Button
                  type="button"
                  variant="outline"
                  tone="secondary"
                  size="md"
                  icon={<ArrowLeft />}
                  iconPosition="start"
                  aria-label="Previous portfolio volume"
                  onClick={() => move(-1)}
                  className="bg-[#fcfaf7]/90 backdrop-blur-sm"
                />
                <Button
                  type="button"
                  variant="outline"
                  tone="secondary"
                  size="md"
                  icon={<ArrowRight />}
                  aria-label="Next portfolio volume"
                  onClick={() => move(1)}
                  className="bg-[#fcfaf7]/90 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col border-y border-neutral-300 lg:col-span-4 lg:border-y-0">
            <div className="grid min-h-12 grid-cols-[1fr_auto] items-center border-b border-neutral-300 px-4">
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.17em] text-primary-700">
                Volume record
              </p>
              <span className="font-mono text-[8px] tracking-[0.14em] text-neutral-500">
                CAT / {activeItem.index}
              </span>
            </div>

            <article key={activeItem.index} className="flex flex-1 flex-col p-5 sm:p-7 lg:p-8">
              <div className="flex items-start justify-between gap-5">
                <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-primary-600">
                  {activeItem.edition}
                </p>
                <span
                  aria-hidden="true"
                  className="size-2 border-r border-t border-primary-500"
                />
              </div>
              <h3 className="mt-8 font-heading text-4xl font-medium leading-[0.98] text-neutral-950 sm:text-5xl">
                {activeItem.title}
              </h3>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary-700">
                {activeItem.category}
              </p>
              <p className="mt-7 border-y border-neutral-300 py-6 text-sm leading-6 text-neutral-600">
                {activeItem.note}
              </p>

              <dl className="mt-2">
                <div className="grid grid-cols-[96px_1fr] gap-4 border-b border-neutral-300 py-4">
                  <dt className="font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-500">
                    Format
                  </dt>
                  <dd className="text-sm font-semibold text-neutral-800">
                    {activeItem.format}
                  </dd>
                </div>
                <div className="grid grid-cols-[96px_1fr] gap-4 border-b border-neutral-300 py-4">
                  <dt className="font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-500">
                    Disciplines
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {activeItem.services.map((service) => (
                      <span
                        key={service}
                        className="border border-neutral-300 bg-[#f6f1ea] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-neutral-700"
                      >
                        {service}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="mt-auto pt-10">
                <div
                  className="flex items-end gap-1"
                  aria-label="Choose a portfolio volume"
                >
                  {homePortfolio.items.map((item, index) => (
                    <button
                      key={item.index}
                      type="button"
                      aria-label={`Show ${item.title}`}
                      aria-pressed={index === activeIndex}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "h-1 flex-1 transition-[height,background-color] duration-300",
                        index === activeIndex
                          ? "h-4 bg-primary-700"
                          : "bg-neutral-300 hover:bg-primary-300",
                      )}
                    />
                  ))}
                </div>
                <p className="mt-3 text-[10px] leading-4 text-neutral-500">
                  Concept editions establish the portfolio interaction without presenting unapproved client work.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSlider;
