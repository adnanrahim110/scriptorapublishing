import Title from "@/components/ui/title";
import Copy from "@/components/ui/copy";
import type { ServiceDetail } from "@/content/services";
import ServiceProcessTabs from "./service-process-tabs";
import ServiceProcessStep from "./service-process-step";

export default function ServiceProcess({
  service,
}: {
  service: ServiceDetail;
}) {
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
        <header className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <Title
            id="service-process-title"
            as="h2"
            size="xl"
            reveal={false}
            className="max-w-3xl lg:col-span-7"
          >
            {service.processTitle}
          </Title>
          <Copy
            text={service.processDescription}
            className="max-w-xl text-sm leading-7 text-neutral-600 lg:col-span-5"
          />
        </header>
        <div className="mt-14 overflow-hidden border-y border-neutral-300 bg-[#fcfaf7] lg:mt-16">
          <ServiceProcessTabs
            slug={service.slug}
            name={service.name}
            labels={service.process.map((step) => step.label)}
          >
            {service.process.map((step, index) => (
              <ServiceProcessStep
                key={step.title}
                step={step}
                index={index}
                slug={service.slug}
              />
            ))}
          </ServiceProcessTabs>
        </div>
      </div>
    </section>
  );
}
