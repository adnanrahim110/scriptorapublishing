import { homeRights } from "@/content/home";
import { Check } from "lucide-react";

import SectionHeading from "./section-heading";

const AuthorRights = () => {
  return (
    <section
      aria-labelledby="author-rights-title"
      className="relative overflow-hidden border-b border-white/15 bg-primary-950 py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.045)_1px,transparent_1px)] bg-size-[32px_100%] opacity-60"
      />
      <div className="container relative">
        <div id="author-rights-title">
          <SectionHeading
            index="06"
            eyebrow={homeRights.eyebrow}
            title={homeRights.title}
            description={homeRights.description}
            inverted
          />
        </div>

        <div className="mt-14 grid border-y border-white/20 lg:mt-20 lg:grid-cols-12">
          <div className="border-b border-white/20 p-5 sm:p-7 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-8">
            <div className="flex items-center justify-between gap-5 border-b border-white/15 pb-4">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-200">
                The author keeps
              </p>
              <span className="font-mono text-[8px] text-white/35">A / 01</span>
            </div>
            <ul>
              {homeRights.authorKeeps.map((item, index) => (
                <li
                  key={item}
                  className="grid min-h-24 grid-cols-[28px_1fr] items-center gap-4 border-b border-white/15 py-4 last:border-b-0"
                >
                  <span className="flex size-6 items-center justify-center border border-primary-300/60 text-primary-200">
                    <Check aria-hidden="true" className="size-3" strokeWidth={2} />
                  </span>
                  <span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
                      Clause {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-6 text-white/90 sm:text-base">
                      {item}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 sm:p-7 lg:col-span-5 lg:border-r lg:border-white/20 lg:p-8">
            <div className="flex items-center justify-between gap-5 border-b border-white/15 pb-4">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-200">
                The studio handles
              </p>
              <span className="font-mono text-[8px] text-white/35">S / 02</span>
            </div>
            <ul>
              {homeRights.studioHandles.map((item, index) => (
                <li
                  key={item}
                  className="grid min-h-24 grid-cols-[28px_1fr] items-center gap-4 border-b border-white/15 py-4 last:border-b-0"
                >
                  <span className="flex size-6 items-center justify-center border border-white/25 font-mono text-[8px] text-primary-200">
                    {index + 1}
                  </span>
                  <span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
                      Record {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-6 text-white/90 sm:text-base">
                      {item}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="relative flex min-h-64 flex-col justify-between border-t border-white/20 bg-primary-900 p-5 sm:p-7 lg:col-span-2 lg:min-h-full lg:border-t-0 lg:p-6">
            <span
              aria-hidden="true"
              className="absolute inset-2 border border-white/12"
            />
            <p className="relative font-mono text-[8px] uppercase tracking-[0.16em] text-primary-200">
              Project agreement / note
            </p>
            <p className="relative mt-12 font-heading text-2xl font-medium leading-[1.05] text-white">
              The agreement should read as clearly as the finished page.
            </p>
            <p className="relative mt-8 text-xs leading-5 text-white/60">
              {homeRights.note}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AuthorRights;
