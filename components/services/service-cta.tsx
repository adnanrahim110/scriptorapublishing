import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import Copy from "@/components/ui/copy";
import type { ServiceDetail } from "@/content/services";
import { Mail } from "lucide-react";

export default function ServiceCta({ service }: { service: ServiceDetail }) {
  return (
    <section
      aria-labelledby="service-cta-title"
      className="relative overflow-hidden border-b border-white/20 bg-primary-900 py-20 text-white sm:py-24"
    >
      <div className="container relative">
        <div className="grid border-y border-white/20 lg:grid-cols-12">
          <div className="border-b border-white/20 p-6 sm:p-8 lg:col-span-8 lg:border-b-0 lg:border-r lg:p-12">
            <Title
              id="service-cta-title"
              as="h2"
              size="display"
              tone="inverse"
              reveal={false}
              className="max-w-4xl"
            >
              {service.cta?.title ??
                "Bring the current version. We will identify what should happen next."}
            </Title>
            <Copy
              text={
                service.cta?.description ??
                "Tell us what you are making, where the work stands, and what you need " +
                  service.name.toLowerCase() +
                  " to resolve."
              }
              className="mt-8 max-w-2xl text-sm leading-7 text-white/80 sm:text-base"
            />
          </div>
          <aside className="relative flex flex-col justify-end bg-primary-950 p-6 sm:p-8 lg:col-span-4 lg:p-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 border border-white/15"
            />
            <div className="relative flex flex-col gap-4">
              <Button
                href="/contact-us"
                size="lg"
                fullWidth
                className="[&_[data-slot=button-label]]:whitespace-normal"
              >
                {service.cta?.primary ?? "Open the project brief"}
              </Button>
              <Button
                href="mailto:info@scriptorapublishing.com"
                size="lg"
                variant="outline"
                fullWidth
                icon={<Mail aria-hidden="true" />}
                className="border-white/40 text-white [&_[data-slot=button-label]]:whitespace-normal"
              >
                {service.cta?.secondary ?? "Email the studio"}
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
