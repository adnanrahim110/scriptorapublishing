import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import { aboutHero } from "@/content/about";
import { BookOpenText, PenLine } from "lucide-react";

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative overflow-hidden border-b border-neutral-300 bg-[#f5efe7] pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(56,38,24,.055)_1px,transparent_1px)] bg-size-[32px_100%]"
      />
      <div className="container relative">
        <div className="grid border-x border-neutral-300 lg:grid-cols-12">
          <div className="px-5 pb-14 sm:px-8 lg:col-span-7 lg:border-r lg:px-10 lg:pb-16 xl:px-14">
            <div className="flex items-center justify-between gap-6 border-y border-neutral-300 py-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.19em] text-primary-700">
                {aboutHero.eyebrow}
              </p>
              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-400">
                Studio record / 001
              </span>
            </div>

            <Title
              id="about-hero-title"
              as="h1"
              size="display"
              weight="medium"
              highlight="more itself"
              className="mt-10 max-w-4xl"
            >
              {aboutHero.title}
            </Title>
            <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              {aboutHero.description}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href={aboutHero.primaryAction.href} size="lg">
                {aboutHero.primaryAction.label}
              </Button>
              <Button
                href={aboutHero.secondaryAction.href}
                size="lg"
                variant="outline"
                tone="secondary"
                icon={<PenLine aria-hidden="true" strokeWidth={1.7} />}
              >
                {aboutHero.secondaryAction.label}
              </Button>
            </div>

            <ul className="mt-12 grid grid-cols-2 border-y border-neutral-300 sm:grid-cols-4">
              {aboutHero.scope.map((item, index) => (
                <li
                  key={item}
                  className="grid min-h-14 grid-cols-[24px_1fr] items-center gap-2 border-b border-r border-neutral-300 px-2 even:border-r-0 nth-[n+3]:border-b-0 sm:border-b-0 sm:even:border-r sm:last:border-r-0"
                >
                  <span className="font-mono text-[8px] text-primary-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.09em] text-neutral-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-128 overflow-hidden border-t border-neutral-300 p-6 sm:p-10 lg:col-span-5 lg:min-h-0 lg:border-t-0 xl:p-14">
            <div className="relative mx-auto flex h-full min-h-112 max-w-lg items-center justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-x-[8%] bottom-[12%] top-[10%] border border-primary-900/15 bg-primary-100/65 shadow-[12px_14px_0_rgba(75,48,28,.1)]"
              />
              <article className="relative grid h-96 w-full max-w-sm grid-cols-2 border border-neutral-800 bg-[#fcfaf7] shadow-[0_22px_60px_rgba(51,33,18,.16)] sm:h-108">
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/2 top-0 w-px bg-neutral-300 shadow-[4px_0_10px_rgba(51,33,18,.08)]"
                />

                <div className="flex flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
                    <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-primary-700">
                      Manuscript
                    </span>
                    <span className="font-mono text-[8px] text-neutral-400">
                      A / 01
                    </span>
                  </div>
                  <p className="my-auto font-heading text-3xl font-medium leading-[1.02] text-neutral-900 sm:text-4xl">
                    The voice that makes the work yours.
                  </p>
                  <div className="space-y-2 border-t border-neutral-300 pt-4">
                    <span className="block h-px w-full bg-neutral-300" />
                    <span className="block h-px w-4/5 bg-neutral-300" />
                    <span className="block h-px w-3/5 bg-neutral-300" />
                  </div>
                </div>

                <div className="flex flex-col bg-primary-900 p-5 text-white sm:p-6">
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-primary-200">
                      Published form
                    </span>
                    <BookOpenText
                      aria-hidden="true"
                      className="size-4 text-primary-200"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="my-auto font-heading text-3xl font-medium leading-[1.02] text-white sm:text-4xl">
                    The craft that helps readers enter it.
                  </p>
                  <p className="border-t border-white/15 pt-4 font-mono text-[8px] uppercase leading-4 tracking-[0.13em] text-white/45">
                    Editorial direction / visual system / production detail
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
