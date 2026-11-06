import { childrenPage } from "@/content/children";
import Image from "next/image";
import ChildrenHeading from "./children-heading";
import ChildrenContentCard from "./children-content-card";

export default function ChildrenStudio() {
  return (
    <section
      aria-labelledby="children-studio-title"
      className="bg-white py-18 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
          <figure className="relative min-h-144 overflow-hidden rounded-4xl bg-[#153d55] lg:col-span-5">
            <Image
              src="/imgs/children/story-workshop.webp"
              alt="Fox, bear, and rabbit planning a picture book in a cozy treehouse studio"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </figure>
          <div className="lg:col-span-7 lg:pl-6">
            <ChildrenHeading
              id="children-studio-title"
              {...childrenPage.studioSection}
            />
            <div className="mt-10 grid border-t border-[#ded4c7] sm:grid-cols-2">
              {childrenPage.carePoints.map((point) => (
                <ChildrenContentCard
                  key={point.title}
                  {...point}
                  className="border-b border-[#ded4c7] sm:odd:border-r"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
