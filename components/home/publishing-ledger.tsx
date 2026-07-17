import { homeLedger } from "@/content/home";

import SectionHeading from "./section-heading";

const PublishingLedger = () => {
  return (
    <section
      aria-labelledby="publishing-ledger-title"
      className="relative overflow-hidden border-b border-neutral-300 bg-[#fcfaf7] py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(119,77,43,.055)_1px,transparent_1px)] bg-size-[32px_100%] opacity-40"
      />
      <div className="container relative">
        <div id="publishing-ledger-title">
          <SectionHeading
            index="02"
            eyebrow={homeLedger.eyebrow}
            title={homeLedger.title}
            description={homeLedger.description}
          />
        </div>

        <div className="mt-14 grid border-y border-neutral-300 lg:mt-20 lg:grid-cols-12">
          <div className="relative flex min-h-52 flex-col justify-between border-b border-neutral-300 bg-primary-900 p-6 text-white lg:col-span-4 lg:min-h-96 lg:border-b-0 lg:border-r lg:p-8">
            <span
              aria-hidden="true"
              className="absolute inset-3 border border-white/15"
            />
            <p className="relative font-mono text-[9px] uppercase tracking-[0.18em] text-primary-200">
              Studio record / 2026
            </p>
            <p className="relative max-w-sm font-heading text-3xl font-medium leading-[1.04] sm:text-4xl">
              Nothing important should be hidden between the lines.
            </p>
            <div className="relative flex items-center gap-3">
              <span className="h-px w-12 bg-primary-300" />
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/50">
                Scope / proof / approval
              </span>
            </div>
          </div>

          <ol className="grid lg:col-span-8 sm:grid-cols-2">
            {homeLedger.entries.map((entry, index) => (
              <li
                key={entry.index}
                className="group/ledger relative min-h-52 border-b border-neutral-300 p-5 last:border-b-0 sm:p-6 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(3)]:border-b-0 lg:min-h-48 lg:p-7"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-[9px] tracking-[0.16em] text-primary-600">
                    {entry.index}
                  </span>
                  <span
                    aria-hidden="true"
                    className="size-2 border-r border-t border-primary-500/60 transition-transform duration-300 group-hover/ledger:translate-x-1 group-hover/ledger:-translate-y-1 motion-reduce:transform-none"
                  />
                </div>
                <h3 className="mt-10 font-heading text-2xl font-medium text-neutral-950 sm:text-[28px]">
                  {entry.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-600">
                  {entry.description}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-5 bottom-3 h-px origin-left scale-x-0 bg-primary-600 transition-transform duration-500 group-hover/ledger:scale-x-100 sm:inset-x-6"
                />
                <span className="sr-only">Ledger item {index + 1}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default PublishingLedger;
