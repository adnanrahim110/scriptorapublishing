import Button from "@/components/ui/button";
import { homeProcess } from "@/content/home";

import SectionHeading from "./section-heading";

const PublishingProcess = () => {
  return (
    <section
      id="process"
      aria-labelledby="publishing-process-title"
      className="border-b border-neutral-300 bg-[#f6f1ea] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div id="publishing-process-title">
          <SectionHeading
            index="05"
            eyebrow={homeProcess.eyebrow}
            title={homeProcess.title}
            description={homeProcess.description}
          />
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-4">
            <div className="border-y border-neutral-300 py-5 lg:sticky lg:top-28">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-700">
                Production sequence / 05 stages
              </p>
              <p className="mt-6 max-w-sm font-heading text-3xl font-medium leading-[1.03] text-neutral-950 sm:text-4xl">
                Each decision leaves a visible trace.
              </p>
              <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-600">
                The stack holds the full project record: brief, margins, form, proof, and release.
              </p>
              <Button href="/contact-us" variant="outline" className="mt-8">
                Discuss your manuscript
              </Button>
              <div className="mt-10 hidden items-end gap-1 lg:flex" aria-hidden="true">
                {homeProcess.steps.map((step, index) => (
                  <span
                    key={step.index}
                    className="w-6 border border-primary-800/25 bg-primary-100"
                    style={{ height: `${22 + index * 9}px` }}
                  />
                ))}
              </div>
            </div>
          </aside>

          <ol className="space-y-5 lg:col-span-8 lg:space-y-8">
            {homeProcess.steps.map((step, index) => (
              <li
                key={step.index}
                className="overflow-hidden border border-neutral-300 bg-[#fcfaf7] shadow-[0_10px_35px_rgba(51,33,18,.08)] lg:sticky"
                style={{ top: `${7 + index * 0.85}rem` }}
              >
                <article className="grid min-h-72 md:grid-cols-[116px_1fr] lg:min-h-80">
                  <div className="relative flex min-h-24 items-center justify-between border-b border-neutral-300 bg-primary-900 px-5 text-white md:min-h-full md:flex-col md:items-start md:border-b-0 md:border-r md:py-6">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-200">
                      Stage
                    </span>
                    <span className="font-heading text-6xl font-medium leading-none text-white/95 md:text-7xl">
                      {step.index}
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/45 md:[writing-mode:vertical-rl]">
                      {step.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-2 border border-white/12"
                    />
                  </div>

                  <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-8 w-px bg-primary-900/7"
                    />
                    <div className="relative pl-8">
                      <div className="flex items-start justify-between gap-8">
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-600">
                          Folio / {String(index + 1).padStart(2, "0")}
                        </p>
                        <span
                          aria-hidden="true"
                          className="size-2 border-r border-t border-primary-500/60"
                        />
                      </div>
                      <h3 className="mt-9 max-w-xl font-heading text-3xl font-medium leading-[1.02] text-neutral-950 sm:text-4xl lg:text-5xl">
                        {step.title}
                      </h3>
                      <p className="mt-5 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                        {step.description}
                      </p>
                    </div>

                    <div className="relative mt-10 flex items-center gap-3 pl-8">
                      <span className="h-px flex-1 bg-neutral-300" />
                      <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-400">
                        Recorded / reviewed / resolved
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default PublishingProcess;
