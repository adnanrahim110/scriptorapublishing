import { homeMedia, homeRights } from "@/content/home";
import { Check } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./section-heading";

const AuthorRights = () => (
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
          title={homeRights.title}
          description={homeRights.description}
          inverted
        />
      </div>
      <div className="mt-14 grid border-y border-white/20 lg:mt-20 lg:grid-cols-12">
        {[homeRights.entries.slice(0, 3), homeRights.entries.slice(3)].map(
          (entries, column) => (
            <div
              key={column}
              className="border-b border-white/20 p-5 sm:p-7 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-8"
            >
              <ul>
                {entries.map((item) => (
                  <li
                    key={item.title}
                    className="grid min-h-24 grid-cols-[28px_1fr] items-start gap-4 border-b border-white/15 py-6 last:border-b-0"
                  >
                    <span className="mt-1 flex size-6 items-center justify-center border border-primary-300/60 text-primary-200">
                      <Check
                        aria-hidden="true"
                        className="size-3"
                        strokeWidth={2}
                      />
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl font-medium leading-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/65">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ),
        )}
        <aside className="relative flex min-h-64 flex-col border-t border-white/20 bg-primary-900 p-5 sm:p-7 lg:col-span-2 lg:min-h-full lg:border-t-0 lg:p-6">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-2 border border-white/12"
          />
          <div className="relative h-52 overflow-hidden">
            <Image
              src={homeMedia.manuscript.src}
              alt={homeMedia.manuscript.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 200px"
              className="object-cover"
            />
          </div>
          <h3 className="relative mt-8 font-heading text-2xl font-medium leading-[1.05] text-white">
            {homeRights.statement}
          </h3>
          <p className="relative mt-6 text-xs leading-5 text-white/70">
            {homeRights.note}
          </p>
        </aside>
      </div>
    </div>
  </section>
);
export default AuthorRights;
