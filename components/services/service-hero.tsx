import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import Copy from "@/components/ui/copy";
import type { ServiceDetail } from "@/content/services";
import { cn } from "@/utils/cn";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { getServiceVisuals } from "./service-visuals";

export default function ServiceHero({ service }: { service: ServiceDetail }) {
  const visual = getServiceVisuals(service.slug).hero;
  return (
    <section
      aria-labelledby="service-hero-title"
      className="relative overflow-hidden border-b border-neutral-300 bg-[#f5efe7] pb-12 pt-32 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(56,38,24,.055)_1px,transparent_1px)] bg-size-[32px_100%]"
      />
      <div className="container relative">
        <div className="grid overflow-hidden border border-neutral-300 bg-[#fcfaf7] lg:min-h-164 lg:grid-cols-12">
          <div className="flex min-w-0 flex-col p-5 sm:p-8 lg:col-span-7 lg:p-10 xl:p-14">
            <div className="my-auto py-10 sm:py-14">
              <Title
                id="service-hero-title"
                as="h1"
                size="display"
                weight="medium"
                highlight={service.highlight}
                reveal={false}
                className="max-w-4xl"
              >
                {service.heroTitle}
              </Title>
              <Copy
                text={service.description}
                className="mt-8 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8"
              />
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button
                  href="/contact-us"
                  size="lg"
                  className="max-w-full [&_[data-slot=button-label]]:whitespace-normal"
                >
                  {service.heroActions?.primary ?? "Discuss this service"}
                </Button>
                <Button
                  href="#service-process"
                  size="lg"
                  variant="outline"
                  tone="secondary"
                  icon={<ArrowDownRight aria-hidden="true" strokeWidth={1.7} />}
                  className="max-w-full [&_[data-slot=button-label]]:whitespace-normal"
                >
                  {service.heroActions?.secondary ?? "Review the process"}
                </Button>
              </div>
            </div>
          </div>
          <figure className="relative min-h-112 border-t border-neutral-300 lg:col-span-5 lg:min-h-full lg:border-l lg:border-t-0">
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className={cn("object-cover", visual.positionClass)}
            />
            {service.imageCaption && (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-primary-950/95 via-transparent to-transparent"
                />
                <figcaption className="absolute inset-x-6 bottom-6 border-t border-white/35 pt-4 text-sm font-semibold leading-6 text-white">
                  {service.imageCaption}
                </figcaption>
              </>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
}
