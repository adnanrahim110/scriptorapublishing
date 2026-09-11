"use client";

import Button from "@/components/ui/button";
import { homePortfolio } from "@/content/home";
import { cn } from "@/utils/cn";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import SectionHeading from "./section-heading";

const PortfolioSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const wasSwipe = useRef(false);
  const itemCount = homePortfolio.items.length;
  const activeItem = homePortfolio.items[activeIndex];
  const move = (direction: 1 | -1) =>
    setActiveIndex((index) => (index + direction + itemCount) % itemCount);
  const relativeOffset = (index: number) => {
    let offset = (index - activeIndex + itemCount) % itemCount;
    if (offset > Math.floor(itemCount / 2)) offset -= itemCount;
    return offset;
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    wasSwipe.current = false;
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "ArrowRight") move(1);
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "Home") setActiveIndex(0);
    if (event.key === "End") setActiveIndex(itemCount - 1);
  };
  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    wasSwipe.current = Math.abs(distance) > 42;
    if (wasSwipe.current) move(distance < 0 ? 1 : -1);
  };

  return (
    <section
      id="authors"
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
            title={homePortfolio.title}
            description={homePortfolio.description}
          />
        </div>
        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-0 lg:border-y lg:border-neutral-300">
          <div className="relative min-w-0 border-y border-neutral-300 lg:col-span-8 lg:border-y-0 lg:border-r">
            <div className="flex min-h-12 items-center justify-end border-b border-neutral-300 px-3">
              <p
                className="font-mono text-[9px] tracking-[0.15em] text-neutral-500"
                aria-label={`Genre ${activeIndex + 1} of ${itemCount}`}
              >
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(itemCount).padStart(2, "0")}
              </p>
            </div>
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label="Authors and genres"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onPointerDown={(event) => {
                pointerStart.current = event.clientX;
                wasSwipe.current = false;
              }}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => {
                pointerStart.current = null;
                wasSwipe.current = false;
              }}
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
              {homePortfolio.items.map((item, index) => {
                const offset = relativeOffset(index);
                const distance = Math.abs(offset);
                const active = index === activeIndex;
                return (
                  <button
                    key={item.index}
                    type="button"
                    aria-label={`Show ${item.title}`}
                    aria-pressed={active}
                    hidden={distance > 2}
                    tabIndex={active ? 0 : -1}
                    data-offset={offset}
                    data-distance={distance}
                    data-active={active || undefined}
                    onClick={() => {
                      if (!wasSwipe.current) setActiveIndex(index);
                    }}
                    className="portfolio-volume group/volume absolute left-1/2 top-[46%] h-76 w-48 origin-bottom select-none overflow-hidden border border-black/20 bg-primary-900 text-left shadow-[0_18px_45px_rgba(36,22,13,.24)] outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-4 sm:h-88 sm:w-56"
                  >
                    <Image
                      src={item.media.src}
                      alt={item.media.alt}
                      fill
                      sizes="224px"
                      draggable={false}
                      className="pointer-events-none object-cover"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary-950/95 via-transparent to-transparent"
                    />
                    <span className="absolute inset-x-5 bottom-6 font-heading text-2xl font-medium leading-tight text-white sm:text-3xl">
                      {item.title}
                    </span>
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
                  aria-label="Previous genre"
                  onClick={() => {
                    if (!wasSwipe.current) move(-1);
                  }}
                  className="bg-[#fcfaf7]/90 backdrop-blur-sm"
                />
                <Button
                  type="button"
                  variant="outline"
                  tone="secondary"
                  size="md"
                  icon={<ArrowRight />}
                  aria-label="Next genre"
                  onClick={() => {
                    if (!wasSwipe.current) move(1);
                  }}
                  className="bg-[#fcfaf7]/90 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-col border-y border-neutral-300 lg:col-span-4 lg:border-y-0">
            <div
              aria-hidden="true"
              className="min-h-12 border-b border-neutral-300"
            />
            <article className="flex flex-1 flex-col p-5 sm:p-7 lg:p-8">
              <div aria-live="polite" aria-atomic="true">
                <h3 className="mt-8 font-heading text-4xl font-medium leading-[0.98] text-neutral-950 sm:text-5xl">
                  {activeItem.title}
                </h3>
                <p className="mt-7 border-y border-neutral-300 py-6 text-sm leading-6 text-neutral-600">
                  {activeItem.description}
                </p>
              </div>
              <p className="mt-5 text-sm leading-6 text-neutral-600">
                {homePortfolio.note}
              </p>
              <Button
                href="#contact"
                variant="outline"
                className="mt-8 w-fit max-w-full [&_[data-slot=button-label]]:whitespace-normal"
              >
                {homePortfolio.action}
              </Button>
              <div className="mt-auto pt-10">
                <div
                  className="flex items-end gap-1"
                  aria-label="Choose a genre"
                >
                  {homePortfolio.items.map((item, index) => (
                    <button
                      key={item.index}
                      type="button"
                      aria-label={`Select ${item.title}`}
                      aria-pressed={index === activeIndex}
                      onClick={() => setActiveIndex(index)}
                      className="group/indicator flex min-h-11 flex-1 items-end py-3 focus-visible:ring-2 focus-visible:ring-primary-500"
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "block w-full transition-[height,background-color] duration-300",
                          index === activeIndex
                            ? "h-4 bg-primary-700"
                            : "h-1 bg-neutral-300 group-hover/indicator:bg-primary-300",
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PortfolioSlider;
