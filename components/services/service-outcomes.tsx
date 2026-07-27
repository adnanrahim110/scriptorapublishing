import SectionHeading from "@/components/home/section-heading";
import type { ServiceDetail } from "@/content/services";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

import { getServiceVisuals } from "./service-visuals";

export default function ServiceOutcomes({
  service,
}: {
  service: ServiceDetail;
}) {
  const visual = getServiceVisuals(service.slug).detail;

  return (
    <section
      aria-labelledby="service-outcomes-title"
      className="border-b border-neutral-300 bg-[#fcfaf7] py-20 sm:py-24 lg:py-28"
    >
      <div className="container">
        <div id="service-outcomes-title">
          <SectionHeading
            index="01"
            eyebrow="What the service resolves"
            title={service.outcomesTitle}
            description={service.outcomesDescription}
          />
        </div>

        <div className="mt-14 grid overflow-hidden border-y border-neutral-300 lg:mt-16 lg:grid-cols-12">
          <figure className="relative min-h-112 lg:col-span-5 lg:min-h-full lg:border-r">
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
              style={{ objectPosition: visual.position ?? "50% 50%" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-primary-950/70 via-primary-950/5 to-transparent"
            />
            <figcaption className="absolute inset-x-6 bottom-6 border-t border-white/35 pt-5 sm:inset-x-8 sm:bottom-8">
              <p className="font-mono text-[8px] uppercase tracking-[0.17em] text-white/65">
                Studio detail / {service.code}
              </p>
              <p className="mt-3 max-w-sm font-heading text-2xl font-medium leading-[1.12] text-white sm:text-3xl">
                The craft behind {service.name.toLowerCase()}.
              </p>
            </figcaption>
          </figure>

          <div className="lg:col-span-7">
            {service.outcomes.map((outcome, index) => (
              <article
                key={outcome.title}
                className="group/outcome grid gap-4 border-b border-neutral-300 p-6 last:border-b-0 sm:grid-cols-[50px_1fr_22px] sm:items-start sm:p-7 lg:min-h-36 lg:items-center lg:px-9"
              >
                <span className="font-mono text-[9px] tracking-[0.16em] text-primary-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-medium leading-tight text-neutral-950 transition-transform duration-300 group-hover/outcome:translate-x-1 sm:text-3xl">
                    {outcome.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                    {outcome.description}
                  </p>
                </div>
                <ArrowDownRight
                  aria-hidden="true"
                  className="hidden size-5 text-primary-500 transition-transform duration-300 group-hover/outcome:translate-x-1 group-hover/outcome:translate-y-1 sm:block"
                  strokeWidth={1.5}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
