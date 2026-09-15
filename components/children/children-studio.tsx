import { childrenPage } from "@/content/children";
import { Check } from "lucide-react";
import Image from "next/image";

export default function ChildrenStudio() {
  return (
    <section
      aria-labelledby="children-studio-title"
      className="bg-white py-18 sm:py-24 lg:py-30"
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
          <figure className="relative min-h-[580px] overflow-hidden rounded-[2rem] bg-[#153d55] lg:col-span-5 lg:min-h-[780px]">
            <Image
              src="/imgs/children/story-workshop.webp"
              alt="Fox, bear, and rabbit planning a picture book in a cozy treehouse studio"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-[#153d55]/85 via-transparent to-transparent"
            />
            <figcaption className="absolute inset-x-6 bottom-6 rounded-[1.25rem] border border-white/35 bg-[#153d55]/75 p-5 text-white backdrop-blur-md sm:inset-x-8 sm:bottom-8">
              <span className="text-[10px] font-bold uppercase tracking-[.16em] text-[#ffd85a]">
                The working principle
              </span>
              <p className="mt-2 font-[family-name:var(--font-children)] text-2xl font-semibold leading-tight">
                Words and pictures are developed as one reading experience.
              </p>
            </figcaption>
          </figure>

          <div className="flex flex-col lg:col-span-7 lg:pl-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#a95437]">
                A CHILDREN'S PUBLISHING STUDIO
              </p>
              <h2
                id="children-studio-title"
                className="mt-4 font-[family-name:var(--font-children)] text-4xl font-semibold leading-[.98] tracking-[-.035em] text-[#25223d] sm:text-5xl lg:text-6xl"
              >
                Children are wonderfully difficult readers to fool.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#625969] sm:text-lg sm:leading-8">
                They know when something is funny. They know when something is boring. They notice the tiny creature hiding in the corner of page six. They remember the character who made them laugh. And they'll happily interrupt bedtime because you skipped their favorite page. That's why creating a children's book isn't simply a matter of shortening the manuscript and adding colorful pictures. Words, rhythm, characters, illustration, typography, pacing, and page turns have to work together as one reading experience.
              </p>
            </div>

            <div className="mt-10 grid border-t border-[#ded4c7] sm:grid-cols-2">
              {childrenPage.carePoints.map((point, index) => (
                <article
                  key={point.title}
                  className="border-b border-[#ded4c7] py-7 sm:min-h-56 sm:p-7 sm:odd:border-r sm:odd:pl-0"
                >
                  <div
                    className="flex size-9 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: [
                        "#ffd85a",
                        "#ff9b8f",
                        "#87d5ce",
                        "#b4aded",
                      ][index],
                    }}
                  >
                    <Check aria-hidden="true" className="size-4" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-children)] text-2xl font-semibold tracking-[-.025em] text-[#25223d]">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#625969]">
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
