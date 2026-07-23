import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import { homeHero } from "@/content/home";
import { cn } from "@/utils/cn";
import Image from "next/image";

const panelMotion = [
  "mb-4 mt-12 group-hover/proof:mb-8 group-hover/proof:mt-8",
  "mb-12 group-hover/proof:mb-4 group-hover/proof:mt-4",
  "mt-20 group-hover/proof:mb-8 group-hover/proof:mt-8",
] as const;

const Hero = () => {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative isolate min-h-svh overflow-hidden border-b border-neutral-300 bg-[#f6f1ea] pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-12 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(119,77,43,.07)_1px,transparent_1px)] bg-size-[32px_100%] opacity-35"
      />

      <div className="container">
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-8">
          <header className="relative z-10 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:flex lg:flex-col lg:pt-12 xl:pt-16">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="block h-px w-8 bg-primary-600"
              />
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-primary-700 sm:text-[10px]">
                {homeHero.eyebrow}
              </p>
              <span className="ml-auto hidden font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-500 sm:block lg:hidden xl:block">
                Folio / {homeHero.media.index}
              </span>
            </div>

            <Title
              as="h1"
              id="home-hero-title"
              size="hero"
              tone="ink"
              highlight={homeHero.title.emphasis}
              highlightTone="primary"
              weight="medium"
              tracking="editorial"
              leading="tight"
              revealFrom="up"
              revealDelay={80}
              className="relative z-20 mt-8 max-w-2xl"
            >
              {`${homeHero.title.lead} ${homeHero.title.emphasis}`}
            </Title>

            <div className="mt-8 grid max-w-xl grid-cols-[4px_1fr] gap-4 lg:mt-10">
              <span aria-hidden="true" className="bg-primary-700" />
              <div>
                <p className="text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
                  {homeHero.description}
                </p>

                <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                  <Button
                    href={homeHero.actions.primary.href}
                    size="lg"
                    className="sm:min-w-44"
                  >
                    {homeHero.actions.primary.label}
                  </Button>
                  <Button
                    href={homeHero.actions.secondary.href}
                    size="lg"
                    variant="outline"
                    className="sm:min-w-56"
                  >
                    {homeHero.actions.secondary.label}
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-auto lg:pt-12">
              <div className="hidden min-h-32 grid-cols-[160px_1fr] border-y border-neutral-300 lg:grid">
                <div className="relative overflow-hidden border-r border-neutral-300">
                  <Image
                    src={homeHero.media.src}
                    alt=""
                    fill
                    sizes="160px"
                    className="object-cover"
                    style={{
                      objectPosition: homeHero.media.detail.objectPosition,
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-2 border border-white/40"
                  />
                </div>
                <div className="flex flex-col justify-between p-4">
                  <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-primary-700">
                    {homeHero.media.detail.label}
                  </p>
                  <p className="max-w-xs text-sm font-medium leading-5 text-neutral-700">
                    {homeHero.media.detail.caption}
                  </p>
                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-primary-600"
                  />
                </div>
              </div>

              <div className="grid border-y border-neutral-300 lg:border-t-0 xl:grid-cols-[120px_1fr]">
                <div className="flex min-h-12 items-center border-b border-neutral-300 px-3 xl:border-b-0 xl:border-r">
                  <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-primary-700">
                    Studio scope
                  </p>
                </div>
                <ul
                  aria-label="Publishing capabilities"
                  className="grid sm:grid-cols-3"
                >
                  {homeHero.disciplines.map((discipline, index) => (
                    <li
                      key={discipline}
                      className="group/scope relative grid min-h-14 grid-cols-[28px_1fr] items-center gap-2 border-b border-neutral-300 px-3 py-2 last:border-b-0 sm:border-b-0 sm:border-l sm:first:border-l-0"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-[8px] tracking-[0.14em] text-primary-500 transition-transform duration-300 group-hover/scope:-translate-y-px"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-semibold leading-snug text-neutral-700 transition-transform duration-300 group-hover/scope:translate-x-1 motion-reduce:transform-none">
                        {discipline}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-primary-600 transition-transform duration-400 group-hover/scope:scale-x-100"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </header>

          <figure className="group/proof relative lg:col-start-7 lg:col-end-13 lg:row-start-1">
            <div className="flex min-h-10 items-center justify-between border-y border-neutral-300 px-2 py-2">
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-primary-700 sm:text-[9px]">
                {homeHero.media.plate}
              </p>
              <span
                aria-hidden="true"
                className="font-mono text-[8px] tracking-[0.16em] text-neutral-500"
              >
                I — III
              </span>
            </div>

            <div
              role="img"
              aria-label={homeHero.media.alt}
              className="relative mt-4 h-112 sm:h-144 lg:h-128 xl:h-144"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 -right-1 left-1 top-1 border border-primary-900/25"
              />

              <div className="relative grid h-full grid-cols-[0.78fr_1.1fr_0.86fr] gap-1 transition-[grid-template-columns] duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover/proof:grid-cols-[0.86fr_0.9fr_1.14fr] motion-reduce:transition-none">
                {homeHero.media.stages.map((stage, index) => (
                  <div
                    key={stage.label}
                    className={cn(
                      "relative min-w-0 overflow-hidden border border-neutral-400 bg-primary-100 transition-[margin] duration-700 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none",
                      panelMotion[index],
                    )}
                  >
                    <Image
                      src={homeHero.media.src}
                      alt=""
                      fill
                      priority={index === 1}
                      sizes="(max-width: 1023px) 33vw, 20vw"
                      className="object-cover"
                      style={{ objectPosition: stage.objectPosition }}
                    />

                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-2 border border-white/35 sm:inset-3"
                    />

                    <div className="absolute inset-x-0 bottom-0 grid min-h-12 grid-cols-[28px_1fr] items-center gap-2 border-t border-neutral-300 bg-[#fcfaf7] px-2 py-2">
                      <span className="font-mono text-[8px] tracking-[0.12em] text-primary-600">
                        {stage.index}
                      </span>
                      <span className="truncate text-[10px] font-semibold uppercase tracking-[0.08em] text-neutral-800 sm:text-xs">
                        {stage.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-2 top-1/3 h-16 w-px bg-primary-600/60"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 top-1/3 size-2 -translate-y-px border-l border-t border-primary-600/60"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 bottom-1/4 size-2 border-b border-r border-primary-600/60"
              />
            </div>

            <figcaption className="mt-4 grid min-h-12 grid-cols-[32px_1fr] items-center gap-3 border-t border-neutral-300 px-2 py-2">
              <span
                aria-hidden="true"
                className="font-mono text-[8px] tracking-[0.16em] text-primary-600"
              >
                {homeHero.media.index}
              </span>
              <p className="text-sm font-medium leading-5 text-neutral-700">
                {homeHero.media.caption}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
