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

const Hero = () => (
  <section
    aria-labelledby="home-hero-title"
    className="relative isolate overflow-hidden border-b border-neutral-300 bg-[#f6f1ea] pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-12 lg:pt-36"
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(119,77,43,.07)_1px,transparent_1px)] bg-size-[32px_100%] opacity-35"
    />
    <div className="container">
      <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-8">
        <header className="relative z-10 min-w-0 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:flex lg:flex-col">
          <span aria-hidden="true" className="block h-px w-8 bg-primary-600" />
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
            <div className="min-w-0">
              {homeHero.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="not-last:mb-3 text-base text-neutral-700 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  href={homeHero.actions.primary.href}
                  size="lg"
                  className="max-w-full [&_[data-slot=button-label]]:whitespace-normal [&_[data-slot=button-label]]:text-left"
                >
                  {homeHero.actions.primary.label}
                </Button>
                <Button
                  href={homeHero.actions.secondary.href}
                  size="lg"
                  variant="outline"
                  className="max-w-full"
                >
                  {homeHero.actions.secondary.label}
                </Button>
              </div>
            </div>
          </div>
        </header>
        <figure
          className="group/proof relative min-w-0 lg:col-start-7 lg:col-end-13 lg:row-start-1"
          aria-label="From manuscript to designed and published book"
        >
          <div
            aria-hidden="true"
            className="min-h-10 border-y border-neutral-300"
          />
          <div className="relative mt-4 h-112 sm:h-144 lg:h-128 xl:h-144">
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
                    src={stage.src}
                    alt={stage.alt}
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
        </figure>
      </div>
    </div>
  </section>
);
export default Hero;
