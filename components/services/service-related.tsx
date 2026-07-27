import Title from "@/components/ui/title";
import {
  getRelatedServices,
  type ServiceDetail,
} from "@/content/services";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServiceRelated({
  service,
}: {
  service: ServiceDetail;
}) {
  const relatedServices = getRelatedServices(service);

  return (
    <section
      aria-labelledby="related-services-title"
      className="border-b border-neutral-300 bg-[#fcfaf7] py-20 sm:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[9px] uppercase tracking-[0.19em] text-primary-700">
              Plate 06 / Related disciplines
            </p>
            <Title
              id="related-services-title"
              as="h2"
              size="xl"
              weight="medium"
              highlight="next handoff"
              className="mt-6 max-w-3xl"
            >
              Keep the next handoff inside the same publishing brief.
            </Title>
          </div>
          <p className="max-w-xl text-sm leading-7 text-neutral-600 lg:col-span-5">
            These services commonly sit before, after, or alongside{" "}
            {service.name.toLowerCase()}. The right combination is confirmed
            after reviewing the project.
          </p>
        </div>

        <div className="mt-12 grid border-y border-neutral-300 lg:mt-16 lg:grid-cols-3">
          {relatedServices.map((related, index) => (
            <Link
              key={related.slug}
              href={`/${related.slug}`}
              className="group/related relative flex min-h-64 flex-col border-b border-neutral-300 p-6 transition-colors duration-300 hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/70 sm:p-8 lg:min-h-72 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-[9px] text-primary-600">
                  {String(index + 1).padStart(2, "0")} / {related.code}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 text-primary-600 transition-transform duration-300 group-hover/related:translate-x-1 group-hover/related:-translate-y-1"
                  strokeWidth={1.6}
                />
              </div>
              <h3 className="mt-auto max-w-sm font-heading text-3xl font-medium leading-tight text-neutral-950">
                {related.name}
              </h3>
              <p className="mt-4 line-clamp-2 text-sm leading-6 text-neutral-500">
                {related.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
