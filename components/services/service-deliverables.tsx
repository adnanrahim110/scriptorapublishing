import SectionHeading from "@/components/home/section-heading";
import {
  serviceAssurances,
  type ServiceDetail,
} from "@/content/services";
import { Check, FileCheck2 } from "lucide-react";

export default function ServiceDeliverables({
  service,
}: {
  service: ServiceDetail;
}) {
  const visibleDeliverables = service.deliverables.slice(0, 6);

  return (
    <section
      aria-labelledby="service-deliverables-title"
      className="relative overflow-hidden border-b border-white/15 bg-primary-950 py-20 text-white sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.045)_1px,transparent_1px)] bg-size-[32px_100%] opacity-70"
      />
      <div className="container relative">
        <div id="service-deliverables-title">
          <SectionHeading
            index="03"
            eyebrow="The project record"
            title="A clear handoff, without the wall of fine print."
            description="The final scope is written for the project. This concise view shows the work most commonly carried forward."
            inverted
          />
        </div>

        <div className="mt-14 grid border-y border-white/20 lg:mt-16 lg:grid-cols-12">
          <div className="border-b border-white/20 p-6 sm:p-8 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-10">
            <div className="flex items-center justify-between gap-6 border-b border-white/15 pb-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-200">
                Core deliverables / {String(visibleDeliverables.length).padStart(2, "0")}
              </p>
              <FileCheck2
                aria-hidden="true"
                className="size-5 text-primary-200"
                strokeWidth={1.5}
              />
            </div>
            <ul className="grid sm:grid-cols-2 sm:gap-x-8">
              {visibleDeliverables.map((deliverable, index) => (
                <li
                  key={deliverable}
                  className="grid min-h-16 grid-cols-[30px_1fr] items-center gap-3 border-b border-white/15 py-3"
                >
                  <span className="font-mono text-[8px] text-primary-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-semibold leading-5 text-white/80">
                    {deliverable}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {serviceAssurances.map((assurance, index) => (
                <div
                  key={assurance.title}
                  className="border border-white/15 bg-white/4 p-4"
                >
                  <span className="font-mono text-[8px] text-primary-300">
                    A{index + 1}
                  </span>
                  <p className="mt-4 font-heading text-lg font-medium leading-tight text-white">
                    {assurance.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative flex flex-col justify-end bg-primary-900 p-6 sm:p-8 lg:col-span-5 lg:p-10">
            <span
              aria-hidden="true"
              className="absolute inset-3 border border-white/10"
            />
            <div className="relative">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-200">
                A strong fit for
              </p>
              <p className="mt-8 max-w-sm font-heading text-3xl font-medium leading-[1.08] text-white sm:text-4xl">
                The right scope should feel specific from the first page.
              </p>
              <ul className="mt-8 border-y border-white/15">
                {service.bestFor.map((item) => (
                  <li
                    key={item}
                    className="grid min-h-16 grid-cols-[28px_1fr] items-center gap-3 border-b border-white/15 last:border-b-0"
                  >
                    <span className="flex size-6 items-center justify-center border border-white/20 text-primary-200">
                      <Check
                        aria-hidden="true"
                        className="size-3"
                        strokeWidth={2}
                      />
                    </span>
                    <span className="text-xs font-semibold leading-5 text-white/75">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
