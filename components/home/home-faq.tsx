"use client";

import { homeFaqs, homeFaqTitle, homeMedia } from "@/content/home";
import { cn } from "@/utils/cn";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

import SectionHeading from "./section-heading";

const HomeFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      aria-labelledby="home-faq-title"
      className="border-b border-neutral-300 bg-[#fcfaf7] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div id="home-faq-title">
          <SectionHeading title={homeFaqTitle} />
        </div>

        <div className="mt-14 grid border-y border-neutral-300 lg:mt-20 lg:grid-cols-12">
          <aside className="border-b border-neutral-300 bg-primary-900 p-5 text-white sm:p-7 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-8">
            <div className="relative h-44 overflow-hidden border border-white/15">
              <Image
                src={homeMedia.conversation.src}
                alt={homeMedia.conversation.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <ol className="mt-5">
              {homeFaqs.map((faq, index) => (
                <li key={faq.question}>
                  <button
                    type="button"
                    aria-controls={`home-faq-answer-${index}`}
                    aria-expanded={openIndex === index}
                    onClick={() => setOpenIndex(index)}
                    className={cn(
                      "group/index grid w-full grid-cols-[28px_1fr] gap-3 border-b border-white/12 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-300/70",
                      openIndex === index ? "text-white" : "text-white/50",
                    )}
                  >
                    <span className="font-mono text-[8px] tracking-[0.14em] text-primary-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-semibold leading-5 transition-transform duration-300 group-hover/index:translate-x-1 motion-reduce:transform-none">
                      {faq.question}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </aside>

          <div className="lg:col-span-8">
            {homeFaqs.map((faq, index) => {
              const open = openIndex === index;
              const answerId = `home-faq-answer-${index}`;
              const buttonId = `home-faq-button-${index}`;

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
                      <span className="font-heading text-xl font-medium leading-tight text-neutral-950 transition-transform duration-300 group-hover/faq:translate-x-1 motion-reduce:transform-none sm:text-2xl">
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
                      <p className="ml-16 max-w-2xl whitespace-pre-line border-l border-primary-500 px-5 pb-8 text-sm leading-6 text-neutral-600 sm:ml-24 sm:px-6 sm:text-base sm:leading-7">
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
};

export default HomeFaq;
