import { homeDistribution, homeMedia } from "@/content/home";
import { cn } from "@/utils/cn";
import { BookOpen, Library, Mic, UserRound } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./section-heading";

const iconMap = [BookOpen, Mic, UserRound, Library] as const;
const positionStyles: Record<string, string> = {
  left: "lg:col-start-1 lg:row-start-2 lg:justify-self-start lg:self-center",
  top: "lg:col-start-2 lg:row-start-1 lg:justify-self-center",
  right: "lg:col-start-3 lg:row-start-2 lg:justify-self-end lg:self-center",
  bottom: "lg:col-start-2 lg:row-start-3 lg:justify-self-center",
};

const DistributionConstellation = () => (
  <section
    aria-labelledby="distribution-title"
    className="border-b border-neutral-300 bg-[#fcfaf7] py-20 sm:py-24 lg:py-32"
  >
    <div className="container">
      <div id="distribution-title">
        <SectionHeading
          title={homeDistribution.title}
          description={homeDistribution.description}
        />
      </div>
      <div className="mt-14 border-y border-neutral-300 lg:mt-20">
        <div
          aria-hidden="true"
          className="min-h-12 border-b border-neutral-300"
        />
        <div className="relative grid gap-px bg-neutral-300 lg:min-h-176 lg:grid-cols-[1fr_16rem_1fr] lg:gap-8 lg:p-8">
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
                key={route.position}
                className={cn(
                  "group/route relative z-10 min-h-48 bg-[#fcfaf7] p-5 sm:p-6 lg:min-h-52 lg:w-64 lg:max-w-full lg:border lg:border-neutral-300 lg:shadow-[0_8px_28px_rgba(51,33,18,.08)]",
                  positionStyles[route.position],
                )}
              >
                <span className="flex size-10 items-center justify-center border border-primary-300 bg-primary-100 text-primary-800 transition-colors duration-300 group-hover/route:bg-primary-800 group-hover/route:text-white">
                  <Icon
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.7}
                  />
                </span>
                <h3 className="mt-6 font-heading text-3xl font-medium leading-tight text-neutral-950">
                  {route.title}
                </h3>
                {"detail" in route && (
                  <p className="mt-3 text-xs leading-5 text-neutral-600">
                    {route.detail}
                  </p>
                )}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-5 bottom-3 h-px origin-left scale-x-0 bg-primary-600 transition-transform duration-500 group-hover/route:scale-x-100"
                />
              </article>
            );
          })}
          <div className="relative z-20 min-h-72 overflow-hidden bg-[#f6f1ea] lg:col-start-2 lg:row-start-2 lg:size-56 lg:min-h-0 lg:self-center lg:justify-self-center lg:border lg:border-primary-900/30 lg:shadow-[0_16px_45px_rgba(51,33,18,.14)]">
            <Image
              src={homeMedia.readers.src}
              alt={homeMedia.readers.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 224px"
              className="object-cover"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 border border-white/40"
            />
          </div>
        </div>
        <div className="grid gap-6 border-t border-neutral-300 px-5 py-6 sm:p-7 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          <p className="text-sm leading-6 text-neutral-600">
            {homeDistribution.continuation}
          </p>
          <p className="font-heading text-2xl font-medium leading-tight text-primary-800">
            {homeDistribution.conclusion}
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default DistributionConstellation;
