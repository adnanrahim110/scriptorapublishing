import SectionHeading from "@/components/home/section-heading";
import Copy from "@/components/ui/copy";
import { serviceAssurances, type ServiceDetail } from "@/content/services";
import ServiceDetailCard from "./service-detail-card";

export default function ServiceDeliverables({
  service,
}: {
  service: ServiceDetail;
}) {
  const deliverables =
    service.deliverableDetails ??
    service.deliverables.map((title) => ({ title }));
  const audiences =
    service.bestForDetails ?? service.bestFor.map((title) => ({ title }));
  const principles =
    service.principles ?? serviceAssurances.map((item) => item.title);
  return (
    <section
      aria-labelledby="service-deliverables-title"
      className="relative overflow-hidden border-b border-white/20 bg-primary-950 py-20 text-white sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.045)_1px,transparent_1px)] bg-size-[32px_100%] opacity-70"
      />
      <div className="container relative">
        <div id="service-deliverables-title">
          <SectionHeading
            title={
              service.projectSection?.title ??
              "A clear handoff, without the wall of fine print."
            }
            description={
              service.projectSection?.description ??
              "The final scope is written for the project."
            }
            inverted
            reveal={false}
          />
        </div>
        <div className="mt-14 grid border-y border-white/20 lg:mt-16 lg:grid-cols-12">
          <div className="border-b border-white/20 lg:col-span-7 lg:border-b-0 lg:border-r">
            <div className="grid sm:grid-cols-2">
              {deliverables.map((item) => (
                <ServiceDetailCard key={item.title} {...item} inverted />
              ))}
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
              {principles.map((title) => (
                <ServiceDetailCard
                  key={title}
                  title={title}
                  inverted
                  className="border border-white/20 bg-white/5 p-4 sm:p-4 [&_h3]:text-lg"
                />
              ))}
            </div>
          </div>
          <aside className="relative bg-primary-900 p-6 sm:p-8 lg:col-span-5 lg:p-10">
            <h2 className="font-heading text-3xl font-medium leading-tight text-white sm:text-4xl">
              {service.fitSection?.title ??
                "The right scope should feel specific from the first page."}
            </h2>
            {service.fitSection?.description && (
              <Copy
                text={service.fitSection.description}
                className="mt-6 text-sm leading-6 text-white/80"
              />
            )}
            <div className="mt-8 border-t border-white/20">
              {audiences.map((item) => (
                <ServiceDetailCard
                  key={item.title}
                  {...item}
                  inverted
                  className="px-0 sm:px-0"
                />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
