import { childrenPage } from "@/content/children";
import Image from "next/image";
import ChildrenHeading from "./children-heading";
import ChildrenContentCard from "./children-content-card";

export default function ChildrenIllustration() {
  return (
    <section
      aria-labelledby="children-art-title"
      className="bg-[#eaf7f5] py-18 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <ChildrenHeading
              id="children-art-title"
              {...childrenPage.artSection}
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {childrenPage.artDirections.map((direction) => (
                <ChildrenContentCard
                  key={direction.title}
                  title={direction.title}
                  heading={direction.subtitle}
                  description={direction.description}
                  image={direction.image}
                  imageAlt={direction.imageAlt}
                  className="rounded-3xl border border-[#1e625c]/20 bg-white/80"
                />
              ))}
            </div>
          </div>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-4xl bg-[#153d55] lg:sticky lg:top-28 lg:col-span-5">
            <Image
              src="/imgs/children/painted-journey.webp"
              alt="An illustrated journey flowing across picture-book pages"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
