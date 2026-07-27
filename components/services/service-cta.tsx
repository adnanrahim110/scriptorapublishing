import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import type { ServiceDetail } from "@/content/services";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ServiceCta({
  service,
}: {
  service: ServiceDetail;
}) {
  return (
    <section
      aria-labelledby="service-cta-title"
      className="relative overflow-hidden border-b border-white/15 bg-primary-900 py-20 text-white sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.045)_1px,transparent_1px)] bg-size-[32px_100%]"
      />
      <div className="container relative">
        <div className="grid border-y border-white/20 lg:grid-cols-12">
          <div className="border-b border-white/20 p-6 sm:p-9 lg:col-span-8 lg:border-b-0 lg:border-r lg:p-12">
            <p className="font-mono text-[9px] uppercase tracking-[0.19em] text-primary-200">
              New project / {service.code}
            </p>
            <Title
              id="service-cta-title"
              as="h2"
              size="display"
              tone="inverse"
              weight="medium"
              highlight="current version"
              className="mt-9 max-w-4xl"
            >
              Bring the current version. We will identify what should happen
              next.
            </Title>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Tell us what you are making, where the work stands, and what you
              need {service.name.toLowerCase()} to resolve.
            </p>
          </div>

          <aside className="relative flex flex-col justify-end bg-primary-950 p-6 sm:p-9 lg:col-span-4 lg:p-10">
            <span
              aria-hidden="true"
              className="absolute inset-3 border border-white/10"
            />
            <div className="relative">
              <p className="font-heading text-3xl font-medium leading-[1.05] text-white">
                Start with the book, not a prebuilt package.
              </p>
              <div className="mt-9 flex flex-col gap-4">
                <Button
                  href="/contact-us"
                  size="lg"
                  fullWidth
                  icon={<ArrowUpRight aria-hidden="true" />}
                >
                  Open the project brief
                </Button>
                <Button
                  href="mailto:info@scriptorapublishing.com"
                  size="lg"
                  variant="outline"
                  tone="primary"
                  fullWidth
                  icon={<Mail aria-hidden="true" />}
                  className="border-white/25 text-white"
                >
                  Email the studio
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
