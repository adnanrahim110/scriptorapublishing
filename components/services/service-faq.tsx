"use client";

import SectionHeading from "@/components/home/section-heading";
import type { ServiceDetail } from "@/content/services";
import { cn } from "@/utils/cn";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function ServiceFaq({
  service,
}: {
  service: ServiceDetail;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="service-faq-title"
      className="border-b border-neutral-300 bg-[#f6f1ea] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div id="service-faq-title">
          <SectionHeading
            index="05"
            eyebrow={`${service.name} / questions`}
            title="Resolve the practical questions before the work begins."
            description="These answers establish a useful starting point. The written project scope remains the record for deliverables, timing, rights, and responsibilities."
          />
        </div>

        <div className="mt-14 grid border-y border-neutral-300 lg:mt-20 lg:grid-cols-12">
          <aside className="border-b border-neutral-300 bg-primary-900 p-5 text-white sm:p-7 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-8">
            <div className="flex items-center justify-between gap-5 border-b border-white/15 pb-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-200">
                Question index / {String(service.faqs.length).padStart(2, "0")}
              </p>
              <span className="font-mono text-[8px] text-white/35">
                Q—A
              </span>
            </div>
            <ol className="mt-5">
              {service.faqs.map((faq, index) => (
                <li key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    className={cn(
                      "group/faq-index grid w-full grid-cols-[28px_1fr] gap-3 border-b border-white/12 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-300/70",
                      openIndex === index ? "text-white" : "text-white/50",
                    )}
                  >
                    <span className="font-mono text-[8px] tracking-[0.14em] text-primary-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-semibold leading-5 transition-transform duration-300 group-hover/faq-index:translate-x-1">
                      {faq.question}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </aside>

          <div className="bg-[#fcfaf7] lg:col-span-8">
            {service.faqs.map((faq, index) => {
              const open = openIndex === index;
              const answerId = `${service.slug}-faq-answer-${index}`;
              const buttonId = `${service.slug}-faq-button-${index}`;

              return (
                <article
                  key={faq.question}
                  className="border-b border-neutral-300 last:border-b-0"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={answerId}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="group/faq grid min-h-24 w-full grid-cols-[36px_1fr_36px] items-center gap-3 px-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/70 sm:min-h-28 sm:px-7"
                    >
                      <span className="font-mono text-[9px] tracking-[0.16em] text-primary-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-xl font-medium leading-tight text-neutral-950 transition-transform duration-300 group-hover/faq:translate-x-1 sm:text-2xl">
                        {faq.question}
                      </span>
                      <span className="flex size-9 items-center justify-center border border-neutral-300 text-primary-700">
                        {open ? (
                          <Minus
                            aria-hidden="true"
                            className="size-4"
                            strokeWidth={1.7}
                          />
                        ) : (
                          <Plus
                            aria-hidden="true"
                            className="size-4"
                            strokeWidth={1.7}
                          />
                        )}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!open}
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(.22,1,.36,1)]",
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="ml-16 max-w-2xl border-l border-primary-500 px-5 pb-8 text-sm leading-7 text-neutral-600 sm:ml-24 sm:px-6 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
