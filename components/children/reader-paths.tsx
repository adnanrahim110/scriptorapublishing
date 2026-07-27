import { childrenPage } from "@/content/children";
import { ArrowUpRight } from "lucide-react";

export default function ReaderPaths() {
  return (
    <section
      aria-labelledby="reader-paths-title"
      className="overflow-hidden bg-[#fff7e8] py-18 sm:py-24 lg:py-30"
    >
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#a95437]">
              Choose the reading experience
            </p>
            <h2
              id="reader-paths-title"
              className="mt-4 max-w-xl font-[family-name:var(--font-children)] text-4xl font-semibold leading-[.98] tracking-[-.035em] text-[#25223d] sm:text-5xl"
            >
              Every age turns a different kind of page.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#625969] lg:justify-self-end lg:text-lg lg:leading-8">
            A children’s book works when language, visual rhythm, and format
            match the reader it is made for. We shape the publishing path
            around that relationship from the start.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {childrenPage.readerPaths.map((path, index) => (
            <article
              key={path.title}
              className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-[#25223d]/12 p-7 text-[#25223d] transition-transform duration-500 ease-out hover:-translate-y-2 sm:p-8"
              style={{ backgroundColor: path.color }}
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 size-40 rounded-full border-[26px] border-white/18 transition-transform duration-700 group-hover:scale-125"
              />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-children)] text-sm font-semibold">
                    {path.number}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    strokeWidth={1.8}
                  />
                </div>
                <div className="mt-auto pt-24">
                  <p className="text-[11px] font-bold uppercase tracking-[.14em]">
                    {path.age}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-children)] text-3xl font-semibold tracking-[-.035em] text-current">
                    {path.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm font-medium leading-6 text-[#25223d]/78">
                    {path.description}
                  </p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-8 h-3 w-28 rounded-t-full bg-white/65"
                style={{ transform: `translateX(${index * 14}px)` }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
