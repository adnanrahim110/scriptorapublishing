"use client";

import { childrenPage } from "@/content/children";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Copy from "@/components/ui/copy";
import ChildrenHeading from "./children-heading";

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
            <ChildrenHeading
              id="children-faq-title"
              {...childrenPage.faqSection}
            />
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
                      id={`children-faq-button-${index}`}
                      className="flex min-h-11 w-full items-center justify-between gap-6 py-6 text-left focus-visible:ring-2 focus-visible:ring-[#a95437]"
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
                    role="region"
                    aria-labelledby={`children-faq-button-${index}`}
                    className={isOpen ? "pb-7 pr-14" : "hidden"}
                  >
                    <Copy
                      text={faq.answer}
                      className="max-w-2xl text-sm leading-7 text-[#625969] sm:text-base"
                    />
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
