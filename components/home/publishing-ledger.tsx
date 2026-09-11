import { homeLedger, homeMedia } from "@/content/home";
import Image from "next/image";
import SectionHeading from "./section-heading";

const PublishingLedger = () => (
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
          title={homeLedger.title}
          description={homeLedger.description}
        />
      </div>
      <div className="mt-14 grid border-y border-neutral-300 lg:mt-20 lg:grid-cols-12">
        <div className="relative flex min-h-96 flex-col justify-end overflow-hidden border-b border-neutral-300 bg-primary-900 p-6 text-white lg:col-span-4 lg:border-b-0 lg:border-r lg:p-8">
          <Image
            src={homeMedia.finishedBook.src}
            alt={homeMedia.finishedBook.alt}
            fill
            sizes="(max-width: 1023px) 100vw, 33vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-primary-950/95 via-primary-950/30 to-transparent"
          />
          <span
            aria-hidden="true"
            className="absolute inset-3 border border-white/25"
          />
          <p className="relative max-w-sm font-heading text-3xl font-medium leading-[1.04] sm:text-4xl">
            {homeLedger.statement}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:col-span-8">
          {homeLedger.entries.map((entry) => (
            <article
              key={entry.title}
              className="group/ledger relative min-h-52 border-b border-neutral-300 p-5 last:border-b-0 sm:p-6 sm:odd:border-r sm:nth-3:border-b-0 lg:min-h-48 lg:p-7"
            >
              <span
                aria-hidden="true"
                className="block size-2 border-r border-t border-primary-500/60 transition-transform duration-300 group-hover/ledger:translate-x-1 group-hover/ledger:-translate-y-1 motion-reduce:transform-none"
              />
              <h3 className="mt-8 font-heading text-2xl font-medium text-neutral-950 sm:text-[28px]">
                {entry.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-600">
                {entry.description}
              </p>
              <span
                aria-hidden="true"
                className="absolute inset-x-5 bottom-3 h-px origin-left scale-x-0 bg-primary-600 transition-transform duration-500 group-hover/ledger:scale-x-100 sm:inset-x-6"
              />
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default PublishingLedger;
