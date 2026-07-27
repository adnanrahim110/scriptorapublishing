import Title from "@/components/ui/title";
import { aboutCollaboration } from "@/content/about";

export default function AboutCollaboration() {
  return (
    <section
      aria-labelledby="about-collaboration-title"
      className="relative overflow-hidden border-b border-neutral-300 bg-[#fcfaf7] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[9px] uppercase tracking-[0.19em] text-primary-700">
              {aboutCollaboration.index} / {aboutCollaboration.eyebrow}
            </p>
            <Title
              id="about-collaboration-title"
              as="h2"
              size="xl"
              weight="medium"
              highlight="same book"
              className="mt-6 max-w-3xl"
            >
              {aboutCollaboration.title}
            </Title>
          </div>
          <p className="max-w-xl text-sm leading-7 text-neutral-600 lg:col-span-5">
            {aboutCollaboration.description}
          </p>
        </div>

        <div className="relative mt-14 border-y border-neutral-300 lg:mt-20">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-8 top-0 hidden w-px bg-primary-700/18 sm:block lg:left-1/2"
          />
          {aboutCollaboration.stages.map((stage, index) => (
            <article
              key={stage.index}
              className="relative grid border-b border-neutral-300 last:border-b-0 lg:grid-cols-2"
            >
              <div
                className={`p-6 sm:pl-16 sm:pr-8 sm:py-9 lg:px-12 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary-700">
                    {stage.index} / {stage.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="size-2 border-r border-t border-primary-500"
                  />
                </div>
                <h3 className="mt-7 font-heading text-3xl font-medium leading-tight text-neutral-950 sm:text-4xl">
                  {stage.title}
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500">
                  {stage.description}
                </p>
              </div>

              <div
                aria-hidden="true"
                className={`hidden items-center p-12 lg:flex ${
                  index % 2 === 1
                    ? "lg:col-start-1 lg:row-start-1 lg:justify-end"
                    : ""
                }`}
              >
                <span className="font-heading text-[7rem] font-medium leading-none text-primary-100">
                  {stage.index}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
