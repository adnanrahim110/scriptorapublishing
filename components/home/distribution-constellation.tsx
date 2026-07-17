import { homeDistribution } from "@/content/home";
import { cn } from "@/utils/cn";
import { BookOpen, Headphones, Megaphone, Tablet } from "lucide-react";

import SectionHeading from "./section-heading";

const iconMap = [BookOpen, Tablet, Headphones, Megaphone] as const;

const positionStyles: Record<string, string> = {
  left: "lg:left-[3%] lg:top-1/2 lg:-translate-y-1/2",
  top: "lg:left-1/2 lg:top-[4%] lg:-translate-x-1/2",
  right: "lg:right-[3%] lg:top-1/2 lg:-translate-y-1/2",
  bottom: "lg:bottom-[4%] lg:left-1/2 lg:-translate-x-1/2",
};

const DistributionConstellation = () => {
  return (
    <section
      aria-labelledby="distribution-title"
      className="border-b border-neutral-300 bg-[#fcfaf7] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div id="distribution-title">
          <SectionHeading
            index="07"
            eyebrow={homeDistribution.eyebrow}
            title={homeDistribution.title}
            description={homeDistribution.description}
          />
        </div>

        <div className="mt-14 border-y border-neutral-300 lg:mt-20">
          <div className="flex min-h-12 items-center justify-between border-b border-neutral-300 px-3">
            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.17em] text-primary-700">
              Master file / format routes
            </p>
            <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-500">
              Route map / 04
            </p>
          </div>

          <div className="relative grid gap-px bg-neutral-300 lg:min-h-176 lg:block">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 hidden h-px w-[58%] -translate-x-1/2 bg-primary-800/30 lg:block"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 hidden h-[58%] w-px -translate-y-1/2 bg-primary-800/30 lg:block"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 hidden size-[42%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-primary-800/15 lg:block"
            />

            {homeDistribution.routes.map((route, index) => {
              const Icon = iconMap[index];
              return (
                <article
                  key={route.index}
                  className={cn(
                    "group/route relative z-10 min-h-48 bg-[#fcfaf7] p-5 sm:p-6 lg:absolute lg:min-h-52 lg:w-64 lg:border lg:border-neutral-300 lg:shadow-[0_8px_28px_rgba(51,33,18,.08)]",
                    positionStyles[route.position],
                  )}
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="flex size-10 items-center justify-center border border-primary-300 bg-primary-100 text-primary-800 transition-colors duration-300 group-hover/route:bg-primary-800 group-hover/route:text-white">
                      <Icon aria-hidden="true" className="size-4" strokeWidth={1.7} />
                    </span>
                    <span className="font-mono text-[8px] tracking-[0.14em] text-primary-500">
                      {route.index}
                    </span>
                  </div>
                  <h3 className="mt-8 font-heading text-3xl font-medium text-neutral-950">
                    {route.title}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-neutral-600">
                    {route.detail}
                  </p>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-5 bottom-3 h-px origin-left scale-x-0 bg-primary-600 transition-transform duration-500 group-hover/route:scale-x-100"
                  />
                </article>
              );
            })}

            <div className="relative z-20 flex min-h-72 items-center justify-center bg-[#f6f1ea] lg:absolute lg:left-1/2 lg:top-1/2 lg:size-56 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:border lg:border-primary-900/30 lg:bg-[#fcfaf7] lg:shadow-[0_16px_45px_rgba(51,33,18,.14)]">
              <span
                aria-hidden="true"
                className="absolute inset-3 border border-primary-900/15"
              />
              <div className="relative flex h-48 w-32 flex-col justify-between border border-primary-900 bg-primary-800 p-4 text-white shadow-[8px_8px_0_rgba(119,77,43,.18)]">
                <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-primary-200">
                  Master / 01
                </span>
                <span className="font-heading text-3xl font-medium leading-[0.92]">
                  The finished book
                </span>
                <span className="h-px w-10 bg-primary-300" />
              </div>
            </div>
          </div>

          <ul className="grid border-t border-neutral-300 sm:grid-cols-2 lg:grid-cols-4">
            {homeDistribution.channels.map((channel, index) => (
              <li
                key={channel}
                className="grid min-h-16 grid-cols-[28px_1fr] items-center gap-3 border-b border-neutral-300 px-4 last:border-b-0 sm:border-r sm:[&:nth-child(2)]:border-r-0 sm:[&:nth-child(3)]:border-b-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r lg:last:border-r-0"
              >
                <span className="font-mono text-[8px] text-primary-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.09em] text-neutral-700">
                  {channel}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DistributionConstellation;
