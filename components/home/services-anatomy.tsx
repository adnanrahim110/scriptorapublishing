"use client";

import { homeServiceChapters, homeServices } from "@/content/home";
import { cn } from "@/utils/cn";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import SectionHeading from "./section-heading";

const ServicesAnatomy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeChapter = homeServiceChapters[activeIndex];

  const handleTabKey = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % homeServiceChapters.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next =
        (index + homeServiceChapters.length - 1) % homeServiceChapters.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = homeServiceChapters.length - 1;
    else return;
    event.preventDefault();
    setActiveIndex(next);
    document.getElementById(`service-tab-${next}`)?.focus();
  };

  return (
    <section
      id="services"
      aria-labelledby="services-anatomy-title"
      className="border-b border-neutral-300 bg-[#f6f1ea] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div id="services-anatomy-title">
          <SectionHeading
            title={homeServices.title}
            description={homeServices.description}
          />
        </div>
        <div className="mt-14 grid border-y border-neutral-300 lg:mt-20 lg:grid-cols-12">
          <div className="border-b border-neutral-300 lg:col-span-4 lg:border-b-0 lg:border-r">
            <div
              role="tablist"
              aria-label="Publishing services"
              className="grid sm:grid-cols-3 lg:grid-cols-1"
            >
              {homeServiceChapters.map((chapter, index) => (
                <button
                  key={chapter.number}
                  id={`service-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-controls="service-chapter-panel"
                  tabIndex={index === activeIndex ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleTabKey(event, index)}
                  className={cn(
                    "group/chapter relative grid min-h-24 grid-cols-[1fr_20px] items-center gap-3 border-b border-neutral-300 px-4 py-5 text-left sm:border-b-0 sm:border-r sm:last:border-r-0 lg:min-h-32 lg:border-b lg:border-r-0 lg:px-6 lg:last:border-b-0 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/70",
                    index === activeIndex
                      ? "bg-primary-900 text-white"
                      : "text-neutral-800",
                  )}
                >
                  <span className="text-sm font-semibold leading-6">
                    {chapter.shortLabel}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-px origin-left transition-transform duration-300",
                      index === activeIndex
                        ? "scale-x-100 bg-primary-300"
                        : "scale-x-50 bg-primary-600 group-hover/chapter:scale-x-100",
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
          <div
            id="service-chapter-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${activeIndex}`}
            tabIndex={0}
            className="grid min-w-0 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/70 lg:col-span-8 xl:grid-cols-[0.8fr_1.2fr]"
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
                        aria-label={`Show ${chapter.shortLabel}`}
                        aria-pressed={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          "absolute left-1/2 top-1/2 h-64 w-[60%] overflow-hidden border border-neutral-400 text-left shadow-[0_8px_30px_rgba(51,33,18,.12)] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-primary-500",
                          index === activeIndex ? "z-20" : "z-10",
                        )}
                        style={{
                          transform: `translate(calc(-50% + ${offset * 68}px), calc(-50% + ${Math.abs(offset) * 22}px)) rotate(${offset * 5}deg)`,
                        }}
                      >
                        <Image
                          src={chapter.media.src}
                          alt={chapter.media.alt}
                          fill
                          sizes="(max-width: 1279px) 220px, 180px"
                          className="object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="min-w-0 p-5 sm:p-7 lg:p-8">
              {activeChapter.services.map((service) => (
                <article
                  key={service.href}
                  className="border-b border-neutral-300 py-6 first:pt-0 last:border-b-0"
                >
                  <h3 className="font-heading text-3xl font-medium leading-tight text-neutral-950">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm font-semibold leading-6 text-primary-800">
                    {service.lead}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="group/service mt-5 flex items-center justify-between gap-4 py-2 text-sm font-semibold text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/70"
                  >
                    <span>{service.label}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 shrink-0 transition-transform duration-300 group-hover/service:translate-x-0.5 group-hover/service:-translate-y-0.5 motion-reduce:transform-none"
                      strokeWidth={1.7}
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesAnatomy;
