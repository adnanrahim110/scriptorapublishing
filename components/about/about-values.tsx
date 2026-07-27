import Title from "@/components/ui/title";
import { aboutValues } from "@/content/about";

export default function AboutValues() {
  return (
    <section
      aria-labelledby="about-values-title"
      className="relative overflow-hidden border-b border-white/15 bg-primary-950 py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.045)_1px,transparent_1px)] bg-size-[32px_100%] opacity-70"
      />
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[9px] uppercase tracking-[0.19em] text-primary-200">
              {aboutValues.index} / {aboutValues.eyebrow}
            </p>
            <Title
              id="about-values-title"
              as="h2"
              size="xl"
              tone="inverse"
              weight="medium"
              highlight="survive the deadline"
              className="mt-6 max-w-3xl"
            >
              {aboutValues.title}
            </Title>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/60 lg:col-span-5">
            {aboutValues.description}
          </p>
        </div>

        <div className="mt-14 grid border-y border-white/15 lg:mt-20 lg:grid-cols-12">
          {aboutValues.principles.map((principle, index) => (
            <article
              key={principle.index}
              className={`relative border-b border-white/15 p-6 sm:p-8 lg:col-span-4 lg:min-h-80 lg:border-r lg:p-9 ${
                index >= 3 ? "lg:border-b-0" : ""
              } ${index % 3 === 2 ? "lg:border-r-0" : ""}`}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-[9px] tracking-[0.16em] text-primary-300">
                  Clause / {principle.index}
                </span>
                <span
                  aria-hidden="true"
                  className="size-3 border-r border-t border-primary-300/45"
                />
              </div>
              <h3 className="mt-14 max-w-sm font-heading text-3xl font-medium leading-[1.05] text-white">
                {principle.title}
              </h3>
              <p className="mt-6 max-w-sm text-sm leading-6 text-white/55">
                {principle.description}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-5 left-0 h-px w-0 bg-primary-300 transition-[width] duration-500 group-hover:w-20"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
