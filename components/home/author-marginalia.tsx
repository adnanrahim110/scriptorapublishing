import { homeMarginalia } from "@/content/home";
import { Quote } from "lucide-react";

import SectionHeading from "./section-heading";

const AuthorMarginalia = () => {
  return (
    <section
      aria-labelledby="author-marginalia-title"
      className="relative overflow-hidden border-b border-neutral-300 bg-[#f6f1ea] py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 top-0 w-1 bg-primary-700/60"
      />
      <div className="container">
        <div id="author-marginalia-title">
          <SectionHeading
            index="08"
            eyebrow={homeMarginalia.eyebrow}
            title={homeMarginalia.title}
            description={homeMarginalia.description}
          />
        </div>

        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12 lg:items-start">
          {homeMarginalia.notes.map((note, index) => (
            <figure
              key={note.index}
              className={`relative border border-neutral-300 bg-[#fcfaf7] p-6 shadow-[0_14px_40px_rgba(51,33,18,.08)] sm:p-8 ${
                index === 0
                  ? "lg:col-span-5 lg:min-h-128"
                  : index === 1
                    ? "lg:col-span-4 lg:mt-20 lg:min-h-112"
                    : "lg:col-span-3 lg:mt-8 lg:min-h-120"
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-11 w-px bg-primary-900/8"
              />
              <div className="relative flex items-start justify-between gap-6 pl-7">
                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-primary-600">
                  Margin / {note.index}
                </span>
                <Quote aria-hidden="true" className="size-5 text-primary-300" strokeWidth={1.5} />
              </div>
              <blockquote className="relative mt-16 pl-7 font-heading text-3xl font-medium leading-[1.08] text-neutral-950 sm:text-4xl">
                “{note.quote}”
              </blockquote>
              <figcaption className="relative mt-14 border-t border-neutral-300 pb-2 pl-7 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-neutral-800">
                  {note.credit}
                </p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-500">
                  {note.meta}
                </p>
              </figcaption>
              <span
                aria-hidden="true"
                className="absolute -bottom-1 -right-1 size-3 border-b border-r border-primary-500/50"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorMarginalia;
