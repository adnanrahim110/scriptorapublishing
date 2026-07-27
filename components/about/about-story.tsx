import Title from "@/components/ui/title";
import { aboutStory } from "@/content/about";
import { ArrowDownRight } from "lucide-react";

export default function AboutStory() {
  return (
    <section
      id="studio-story"
      aria-labelledby="about-story-title"
      className="border-b border-neutral-300 bg-[#fcfaf7] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-0 lg:border-y lg:border-neutral-300">
          <div className="lg:col-span-7 lg:border-r lg:border-neutral-300 lg:p-10 xl:p-14">
            <div className="flex items-center justify-between gap-6 border-b border-neutral-300 pb-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-700">
                {aboutStory.index} / {aboutStory.eyebrow}
              </p>
              <ArrowDownRight
                aria-hidden="true"
                className="size-5 text-primary-600"
                strokeWidth={1.5}
              />
            </div>
            <Title
              id="about-story-title"
              as="h2"
              size="xl"
              weight="medium"
              highlight="joined up"
              className="mt-10 max-w-2xl"
            >
              {aboutStory.title}
            </Title>
            <p className="mt-8 max-w-2xl font-heading text-2xl font-medium leading-[1.18] text-neutral-800 sm:text-3xl">
              {aboutStory.lead}
            </p>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
              {aboutStory.body}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="grid h-full grid-rows-[1fr_1fr_auto] border-y border-neutral-300 lg:border-y-0">
              {aboutStory.contrast.map((item, index) => (
                <article
                  key={item.label}
                  className="border-b border-neutral-300 p-6 sm:p-8 lg:p-10"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-primary-700">
                      {item.label}
                    </p>
                    <span className="font-mono text-[8px] text-neutral-400">
                      {index === 0 ? "Constant" : "Progress"}
                    </span>
                  </div>
                  <h3 className="mt-8 font-heading text-3xl font-medium leading-tight text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-neutral-500">
                    {item.description}
                  </p>
                </article>
              ))}
              <aside className="relative bg-primary-100 p-6 sm:p-8 lg:p-10">
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-3 w-px bg-primary-700/20"
                />
                <p className="relative font-heading text-2xl font-medium leading-[1.12] text-primary-900">
                  {aboutStory.note}
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
