import SectionHeading from "@/components/home/section-heading";
import type { ServiceDetail } from "@/content/services";
import { cn } from "@/utils/cn";
import Image from "next/image";
import ServiceDetailCard from "./service-detail-card";
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
            title={service.outcomesTitle}
            description={service.outcomesDescription}
            reveal={false}
          />
        </div>
        <div className="mt-14 grid overflow-hidden border-y border-neutral-300 lg:mt-16 lg:grid-cols-12">
          <figure className="relative min-h-112 lg:col-span-5 lg:min-h-full lg:border-r">
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className={cn("object-cover", visual.positionClass)}
            />
          </figure>
          <div className="lg:col-span-7">
            {service.outcomes.map((outcome) => (
              <ServiceDetailCard
                key={outcome.title}
                {...outcome}
                className="last:border-b-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
