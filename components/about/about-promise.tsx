import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import { aboutPromise } from "@/content/about";
import { ArrowUpRight } from "lucide-react";

export default function AboutPromise() {
  return (
    <section
      aria-labelledby="about-promise-title"
      className="relative overflow-hidden border-b border-white/15 bg-primary-900 py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.045)_1px,transparent_1px)] bg-size-[32px_100%]"
      />
      <div className="container relative">
        <div className="grid border-y border-white/20 lg:grid-cols-12">
          <div className="border-b border-white/20 p-6 sm:p-9 lg:col-span-8 lg:border-b-0 lg:border-r lg:p-12">
            <p className="font-mono text-[9px] uppercase tracking-[0.19em] text-primary-200">
              {aboutPromise.eyebrow}
            </p>
            <Title
              id="about-promise-title"
              as="h2"
              size="display"
              tone="inverse"
              weight="medium"
              highlight="production line"
              className="mt-9 max-w-4xl"
            >
              {aboutPromise.title}
            </Title>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              {aboutPromise.description}
            </p>
          </div>

          <div className="relative flex flex-col justify-end bg-primary-950 p-6 sm:p-9 lg:col-span-4 lg:p-10">
            <span
              aria-hidden="true"
              className="absolute inset-3 border border-white/10"
            />
            <div className="relative">
              <p className="font-heading text-3xl font-medium leading-[1.05] text-white">
                Bring the work as it is. We will begin there.
              </p>
              <div className="mt-9 flex flex-col gap-4">
                <Button
                  href={aboutPromise.primaryAction.href}
                  size="lg"
                  fullWidth
                  icon={<ArrowUpRight aria-hidden="true" />}
                >
                  {aboutPromise.primaryAction.label}
                </Button>
                <Button
                  href={aboutPromise.secondaryAction.href}
                  size="lg"
                  variant="outline"
                  tone="primary"
                  fullWidth
                  className="border-white/25 text-white"
                >
                  {aboutPromise.secondaryAction.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
