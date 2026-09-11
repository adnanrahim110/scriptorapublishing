import { homeMarginalia } from "@/content/home";
import Image from "next/image";
import SectionHeading from "./section-heading";

const AuthorMarginalia = () => (
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
          title={homeMarginalia.title}
          description={homeMarginalia.description}
        />
      </div>
      <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12 lg:items-start">
        {homeMarginalia.notes.map((note, index) => (
          <article
            key={note.title}
            className={`relative border border-neutral-300 bg-[#fcfaf7] p-6 shadow-[0_14px_40px_rgba(51,33,18,.08)] sm:p-8 ${index === 0 ? "lg:col-span-5 lg:min-h-128" : index === 1 ? "lg:col-span-4 lg:mt-20 lg:min-h-112" : "lg:col-span-3 lg:mt-8 lg:min-h-120"}`}
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-11 w-px bg-primary-900/8"
            />
            <div className="relative h-44 overflow-hidden border border-neutral-300">
              <Image
                src={note.media.src}
                alt={note.media.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="relative mt-10 pl-7 font-heading text-3xl font-medium leading-[1.08] text-neutral-950 sm:text-4xl">
              {note.title}
            </h3>
            <span
              aria-hidden="true"
              className="absolute -bottom-1 -right-1 size-3 border-b border-r border-primary-500/50"
            />
          </article>
        ))}
      </div>
      <p className="mt-10 max-w-2xl text-base leading-7 text-neutral-600 lg:ml-auto">
        {homeMarginalia.conclusion}
      </p>
    </div>
  </section>
);
export default AuthorMarginalia;
