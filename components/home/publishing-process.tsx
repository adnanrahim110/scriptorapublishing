import Button from "@/components/ui/button";
import { homeProcess } from "@/content/home";
import Image from "next/image";
import SectionHeading from "./section-heading";

const PublishingProcess = () => (
  <section
    id="process"
    aria-labelledby="publishing-process-title"
    className="border-b border-neutral-300 bg-[#f6f1ea] py-20 sm:py-24 lg:py-32"
  >
    <div className="container">
      <div id="publishing-process-title">
        <SectionHeading
          title={homeProcess.title}
          description={homeProcess.description}
        />
      </div>
      <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
        <aside className="lg:col-span-4">
          <div className="border-y border-neutral-300 py-5 lg:sticky lg:top-28">
            <h3 className="max-w-sm font-heading text-3xl font-medium leading-[1.03] text-neutral-950">
              {homeProcess.experience.title}
            </h3>
            {homeProcess.experience.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 max-w-sm text-sm leading-6 text-neutral-600"
              >
                {paragraph}
              </p>
            ))}
            <p className="mt-5 max-w-sm text-sm font-semibold leading-6 text-primary-800">
              {homeProcess.experience.conclusion}
            </p>
            <Button
              href="#publishing-steps"
              variant="outline"
              className="mt-8 max-w-full [&_[data-slot=button-label]]:whitespace-normal"
            >
              {homeProcess.action}
            </Button>
          </div>
        </aside>
        <ol
          id="publishing-steps"
          className="space-y-5 lg:col-span-8 lg:space-y-8"
        >
          {homeProcess.steps.map((step, index) => (
            <li
              key={step.index}
              className="overflow-hidden border border-neutral-300 bg-[#fcfaf7] shadow-[0_10px_35px_rgba(51,33,18,.08)] lg:sticky"
              style={{ top: `${7 + index * 0.85}rem` }}
            >
              <article className="grid min-h-72 md:grid-cols-[116px_1fr] lg:min-h-80">
                <div className="relative flex min-h-40 items-end overflow-hidden border-b border-neutral-300 bg-primary-900 p-5 text-white md:min-h-full md:border-b-0 md:border-r md:py-6">
                  <Image
                    src={step.media.src}
                    alt={step.media.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 116px"
                    className="object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-primary-950/80 via-primary-950/10 to-transparent"
                  />
                  <span className="relative font-heading text-6xl font-medium leading-none text-white/95 md:text-7xl">
                    {step.index}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-2 border border-white/30"
                  />
                </div>
                <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-8 w-px bg-primary-900/7"
                  />
                  <div className="relative pl-8">
                    <h3 className="max-w-xl font-heading text-3xl font-medium leading-[1.02] text-neutral-950 sm:text-4xl lg:text-5xl">
                      {step.title}
                    </h3>
                    <p className="mt-5 text-sm font-semibold leading-6 text-primary-800 sm:text-base">
                      {step.lead}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                      {step.description}
                    </p>
                  </div>
                  <div aria-hidden="true" className="relative mt-8 pl-8">
                    <span className="block h-px bg-neutral-300" />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
export default PublishingProcess;
