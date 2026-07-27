import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import type { ServiceDetail } from "@/content/services";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

import { getServiceVisuals } from "./service-visuals";

export default function ServiceHero({
  service,
}: {
  service: ServiceDetail;
}) {
  const visual = getServiceVisuals(service.slug).hero;

  return (
    <section
      aria-labelledby="service-hero-title"
      className="relative overflow-hidden border-b border-neutral-300 bg-[#f5efe7] pb-12 pt-32 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(56,38,24,.055)_1px,transparent_1px)] bg-size-[32px_100%]"
      />
      <div className="container relative">
        <div className="grid overflow-hidden border border-neutral-300 bg-[#fcfaf7] lg:min-h-164 lg:grid-cols-12">
          <div className="flex flex-col p-5 sm:p-8 lg:col-span-7 lg:p-10 xl:p-14">
            <div className="flex items-center justify-between gap-6 border-b border-neutral-300 pb-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.19em] text-primary-700">
                Service dossier / {service.eyebrow}
              </p>
              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-400">
                {service.code}
              </span>
            </div>

            <div className="my-auto py-10 sm:py-14">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary-700">
                {service.name}
              </p>
              <Title
                id="service-hero-title"
                as="h1"
                size="display"
                weight="medium"
                highlight={service.highlight}
                className="mt-5 max-w-4xl"
              >
                {service.heroTitle}
              </Title>
              <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                {service.description}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact-us" size="lg">
                  Discuss this service
                </Button>
                <Button
                  href="#service-process"
                  size="lg"
                  variant="outline"
                  tone="secondary"
                  icon={
                    <ArrowDownRight aria-hidden="true" strokeWidth={1.7} />
                  }
                >
                  Review the process
                </Button>
              </div>
            </div>

            <ul className="grid border-t border-neutral-300 sm:grid-cols-3">
              {service.artifacts.map((artifact, index) => (
                <li
                  key={artifact}
                  className="grid min-h-14 grid-cols-[24px_1fr] items-center gap-2 border-b border-neutral-300 px-2 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <span className="font-mono text-[8px] text-primary-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-neutral-600">
                    {artifact}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative min-h-112 border-t border-neutral-300 lg:col-span-5 lg:min-h-full lg:border-l lg:border-t-0">
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
              style={{ objectPosition: visual.position ?? "50% 50%" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-primary-950/55 via-transparent to-transparent"
            />
            <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-6 border-t border-white/35 pt-4 text-white sm:inset-x-7 sm:bottom-7">
              <span className="max-w-60 text-xs font-semibold leading-5">
                A publishing service should feel as considered as the object it
                helps create.
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/65">
                Studio plate / {service.code}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
