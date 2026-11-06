import Title from "@/components/ui/title";
import Copy from "@/components/ui/copy";
import { getRelatedServices, type ServiceDetail } from "@/content/services";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServiceRelated({
  service,
}: {
  service: ServiceDetail;
}) {
  const relatedServices =
    service.relatedDetails ??
    getRelatedServices(service).map((item) => ({
      slug: item.slug,
      name: item.name,
      title: item.name,
      description: item.description,
      action: "Explore " + item.name,
    }));
  return (
    <section
      aria-labelledby="related-services-title"
      className="border-b border-neutral-300 bg-[#fcfaf7] py-20 sm:py-24 lg:py-28"
    >
      <div className="container">
        <header className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <Title
            id="related-services-title"
            as="h2"
            size="xl"
            reveal={false}
            className="max-w-3xl lg:col-span-7"
          >
            {service.relatedSection?.title ??
              "Keep the next handoff inside the same publishing brief."}
          </Title>
          <Copy
            text={
              service.relatedSection?.description ??
              "These services commonly sit before, after, or alongside " +
                service.name.toLowerCase() +
                "."
            }
            className="max-w-xl text-sm leading-7 text-neutral-600 lg:col-span-5"
          />
        </header>
        <div className="mt-12 grid border-y border-neutral-300 lg:mt-16 lg:grid-cols-3">
          {relatedServices.map((related) => (
            <Link
              key={related.slug}
              href={`/${related.slug}`}
              className="group/related flex min-h-64 min-w-0 flex-col border-b border-neutral-300 p-6 hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 sm:p-8 lg:min-h-72 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <h3 className="font-heading text-3xl font-medium leading-tight text-neutral-950">
                {related.name}
              </h3>
              {related.title !== related.name && (
                <p className="mt-4 font-heading text-2xl font-medium leading-tight text-neutral-950">
                  {related.title}
                </p>
              )}
              <Copy
                text={related.description}
                className="mt-4 text-sm leading-6 text-neutral-600"
              />
              <span className="mt-auto flex items-center justify-between gap-4 pt-8 text-sm font-semibold text-primary-700">
                {related.action}
                <ArrowUpRight aria-hidden="true" className="size-5 shrink-0" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
