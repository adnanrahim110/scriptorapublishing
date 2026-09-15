"use client";

import { childrenPage } from "@/content/children";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function ChildrenFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      aria-labelledby="children-faq-title"
      className="bg-[#fff7e8] py-18 sm:py-24 lg:py-30"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-18 lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#a95437]">
              BEFORE THE FIRST PAGE
            </p>
            <h2
              id="children-faq-title"
              className="mt-4 font-(family-name:--font-children) text-4xl font-semibold leading-[.98] tracking-[-.035em] text-[#25223d] sm:text-5xl"
            >
              Questions from the story desk.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#625969]">
              Every children's book begins differently. These are some of the
              questions authors ask us before their project takes shape.
            </p>
          </div>

          <div className="border-t border-[#cfc1ae]">
            {childrenPage.faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `children-faq-panel-${index}`;

              return (
                <article
                  key={faq.question}
                  className="border-b border-[#cfc1ae]"
                >
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span className="font-(family-name:--font-children) text-xl font-semibold leading-tight text-[#25223d] sm:text-2xl">
                        {faq.question}
                      </span>
                      <span
                        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#25223d]/18"
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <Minus className="size-4" strokeWidth={1.8} />
                        ) : (
                          <Plus className="size-4" strokeWidth={1.8} />
                        )}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={contentId}
                    className={isOpen ? "pb-7 pr-14" : "hidden"}
                  >
                    <p className="max-w-2xl text-sm leading-7 text-[#625969] sm:text-base">
                      {faq.answer}
                    </p>
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
