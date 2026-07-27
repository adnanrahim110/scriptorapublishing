import { childrenPage } from "@/content/children";
import Image from "next/image";

export default function ChildrenDeliverables() {
  return (
    <section
      aria-labelledby="children-art-title"
      className="bg-[#eaf7f5] py-18 sm:py-24 lg:py-30"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#24736d]">
              Illustration direction
            </p>
            <h2
              id="children-art-title"
              className="mt-4 max-w-3xl font-[family-name:var(--font-children)] text-4xl font-semibold leading-[.98] tracking-[-.035em] text-[#25223d] sm:text-5xl lg:text-6xl"
            >
              A visual language that belongs to your story.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#53636a] sm:text-lg sm:leading-8">
              Style is never a preset pasted on top. We use references,
              character studies, and color exploration to find a direction
              that feels distinctive and right for the reader.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {childrenPage.artDirections.map((direction) => (
                <article
                  key={direction.title}
                  className="rounded-[1.5rem] border border-[#1e625c]/16 bg-white/72 p-6"
                >
                  <div className="flex gap-2">
                    {direction.swatches.map((swatch) => (
                      <span
                        key={swatch}
                        aria-hidden="true"
                        className="size-7 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: swatch }}
                      />
                    ))}
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-children)] text-2xl font-semibold tracking-[-.025em] text-[#25223d]">
                    {direction.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#53636a]">
                    {direction.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-5">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#153d55]">
              <Image
                src="/imgs/children/painted-journey.webp"
                alt="A picture-book world flowing across painted pages"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[54%_center]"
              />
            </figure>
            <div className="relative -mt-20 ml-5 rounded-[1.5rem] border border-[#d9ccb8] bg-[#fff9ec] p-6 shadow-[0_20px_60px_rgba(42,36,66,.16)] sm:ml-12 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#a95437]">
                Your project may include
              </p>
              <ul className="mt-5 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                {childrenPage.deliverables.map((deliverable, index) => (
                  <li
                    key={deliverable}
                    className="flex items-start gap-3 text-sm font-semibold leading-5 text-[#4f4859]"
                  >
                    <span className="mt-1 font-[family-name:var(--font-children)] text-xs text-[#e95749]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
