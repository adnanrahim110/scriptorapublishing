"use client";

import Title from "@/components/ui/title";
import type { ServiceDetail } from "@/content/services";
import { cn } from "@/utils/cn";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { getServiceVisuals } from "./service-visuals";

export default function ServiceProcess({
  service,
}: {
  service: ServiceDetail;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = service.process[activeIndex];
  const visual = getServiceVisuals(service.slug).hero;

  return (
    <section
      id="service-process"
      aria-labelledby="service-process-title"
      className="relative overflow-hidden border-b border-neutral-300 bg-[#f6f1ea] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(56,38,24,.04)_1px,transparent_1px)] bg-size-[32px_100%]"
      />
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[9px] uppercase tracking-[0.19em] text-primary-700">
              Plate 02 / Working sequence
            </p>
            <Title
              id="service-process-title"
              as="h2"
              size="xl"
              weight="medium"
              className="mt-6 max-w-3xl"
            >
              {service.processTitle}
            </Title>
          </div>
          <p className="max-w-xl text-sm leading-7 text-neutral-600 lg:col-span-5">
            {service.processDescription}
          </p>
        </div>

        <div className="mt-14 overflow-hidden border-y border-neutral-300 bg-[#fcfaf7] lg:mt-16">
          <div
            role="tablist"
            aria-label={`${service.name} process stages`}
            className="grid grid-cols-5 border-b border-neutral-300"
          >
            {service.process.map((step, index) => (
              <button
                key={step.title}
                id={`${service.slug}-process-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls={`${service.slug}-process-panel`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group/process-tab min-h-16 border-r border-neutral-300 px-2 py-3 text-left last:border-r-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/70 sm:min-h-20 sm:px-4",
                  activeIndex === index
                    ? "bg-primary-900 text-white"
                    : "text-neutral-600 hover:bg-primary-50",
                )}
              >
                <span
                  className={cn(
                    "block font-mono text-[8px] tracking-[0.14em]",
                    activeIndex === index
                      ? "text-primary-200"
                      : "text-primary-600",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 hidden text-[10px] font-bold uppercase tracking-[0.08em] sm:block">
                  {step.label}
                </span>
              </button>
            ))}
          </div>

          <div
            id={`${service.slug}-process-panel`}
            role="tabpanel"
            aria-labelledby={`${service.slug}-process-tab-${activeIndex}`}
            className="grid lg:min-h-116 lg:grid-cols-12"
          >
            <figure className="relative min-h-80 border-b border-neutral-300 lg:col-span-6 lg:min-h-full lg:border-b-0 lg:border-r">
              <Image
                src={visual.src}
                alt={visual.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: visual.position ?? "50% 50%" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-primary-950/65 via-transparent to-transparent"
              />
              <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-6 border-t border-white/35 pt-4 text-white sm:inset-x-7 sm:bottom-7">
                <span className="text-xs font-semibold uppercase tracking-[0.1em]">
                  Active stage / {activeStep.label}
                </span>
                <span className="font-heading text-4xl font-medium">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>

            <article
              key={activeStep.title}
              className="relative flex flex-col justify-center p-6 sm:p-9 lg:col-span-6 lg:p-12"
            >
              <div className="flex items-start justify-between gap-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-700">
                  Stage {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {activeStep.label}
                </p>
                <ArrowDownRight
                  aria-hidden="true"
                  className="size-5 text-primary-500"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="mt-10 max-w-xl font-heading text-4xl font-medium leading-[1.02] text-neutral-950 sm:text-5xl">
                {activeStep.title}
              </h3>
              <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
                {activeStep.description}
              </p>
              <p className="mt-10 border-t border-neutral-300 pt-5 font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-400">
                Select another numbered tab to inspect the next stage.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
