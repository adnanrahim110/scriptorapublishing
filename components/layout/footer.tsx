import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import { brand, contactDetails, navigationLink } from "@/content/global";
import { cn } from "@/utils/cn";
import { ArrowUp, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = navigationLink.find(
  (item) => "dropdown" in item && item.dropdown,
);

const serviceLinks =
  services && "dropdown" in services ? (services.dropdown ?? []) : [];

const exploreLinks = navigationLink.filter(
  (item) => !("dropdown" in item && item.dropdown),
);

const footerContacts = contactDetails.filter(
  (detail) => detail.label !== "Address",
);

const contactIcons = {
  Email: Mail,
  Phone: Phone,
} as const;

const FooterLink = ({
  href,
  label,
  index,
  inverted = true,
}: {
  href: string;
  label: string;
  index: number;
  inverted?: boolean;
}) => (
  <Link
    href={href}
    className={cn(
      "group/footer-link relative grid min-h-12 grid-cols-[26px_1fr_16px] items-center gap-2 border-b text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-300/70",
      inverted
        ? "border-white/12 text-white/72 hover:text-white"
        : "border-neutral-300 text-neutral-700 hover:text-neutral-950",
    )}
  >
    <span
      className={cn(
        "font-mono text-[8px] tracking-[0.14em]",
        inverted ? "text-primary-300" : "text-primary-600",
      )}
    >
      {String(index + 1).padStart(2, "0")}
    </span>
    <span className="transition-transform duration-300 group-hover/footer-link:translate-x-1 motion-reduce:transform-none">
      {label}
    </span>
    <span
      aria-hidden="true"
      className={cn(
        "size-2 border-r border-t transition-transform duration-300 group-hover/footer-link:translate-x-0.5 group-hover/footer-link:-translate-y-0.5 motion-reduce:transform-none",
        inverted ? "border-white/35" : "border-primary-500/60",
      )}
    />
  </Link>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="footer-title"
      className="relative overflow-hidden border-t border-white/15 bg-[#120c08] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.035)_1px,transparent_1px)] bg-size-[32px_100%] opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 bg-primary-500/70"
      />

      <div className="container relative pt-16 sm:pt-20 lg:pt-24">
        <div className="grid border-y border-white/15 lg:grid-cols-12">
          <section className="relative border-b border-white/15 p-6 sm:p-8 lg:col-span-8 lg:min-h-116 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
            <span
              aria-hidden="true"
              className="absolute inset-3 border border-white/8"
            />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-6 border-b border-white/15 pb-4">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-200">
                  Scriptora / Publishing colophon
                </p>
                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/35">
                  Folio / Final
                </span>
              </div>

              <Title
                id="footer-title"
                as="h2"
                size="display"
                tone="inverse"
                highlight="readers never have to notice"
                highlightTone="primary"
                weight="medium"
                leading="tight"
                tracking="editorial"
                revealFrom="left"
                className="mt-12 max-w-4xl text-[clamp(2.5rem,5.7vw,5.5rem)]"
              >
                Books are made in the details readers never have to notice.
              </Title>

              <div className="mt-9 grid gap-8 border-t border-white/15 pt-6 sm:grid-cols-[1fr_auto] sm:items-end lg:mt-auto">
                <p className="max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                  One studio for the editorial judgment, visual craft,
                  production detail, and release preparation that turn a
                  manuscript into a considered volume.
                </p>
                <Button
                  href="/#services"
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-48"
                >
                  Review the services
                </Button>
              </div>
            </div>
          </section>

          <aside className="relative flex flex-col bg-primary-900 p-6 sm:p-8 lg:col-span-4 lg:p-10">
            <span
              aria-hidden="true"
              className="absolute inset-3 border border-white/10"
            />
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-6">
                <Image
                  src={brand.logoHorizontal}
                  alt={brand.name}
                  width={240}
                  height={88}
                  className="h-auto w-44 brightness-0 invert sm:w-52"
                />
                <span
                  aria-hidden="true"
                  className="size-3 border-r border-t border-primary-200/60"
                />
              </div>

              <p className="mt-12 font-heading text-3xl font-medium leading-[1.04] text-white sm:text-4xl">
                Your story, shaped with editorial conviction.
              </p>

              <dl className="mt-12 border-y border-white/15 lg:mt-auto">
                {footerContacts.map((detail) => {
                  const Icon =
                    contactIcons[detail.label as keyof typeof contactIcons];
                  const value = (
                    <span className="break-all text-xs font-semibold text-white/80 sm:text-sm">
                      {detail.value}
                    </span>
                  );

                  return (
                    <div
                      key={detail.label}
                      className="grid min-h-16 grid-cols-[34px_1fr] items-center gap-3 border-b border-white/15 last:border-b-0"
                    >
                      <span className="flex size-8 items-center justify-center border border-white/18 text-primary-200">
                        {Icon && (
                          <Icon
                            aria-hidden="true"
                            className="size-3.5"
                            strokeWidth={1.7}
                          />
                        )}
                      </span>
                      <div>
                        <dt className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
                          {detail.label}
                        </dt>
                        <dd className="mt-1">
                          {typeof detail.href === "string" ? (
                            <a
                              href={detail.href}
                              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/70"
                            >
                              {value}
                            </a>
                          ) : (
                            value
                          )}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </div>
          </aside>
        </div>

        <div className="grid border-b border-white/15 lg:grid-cols-12">
          <section className="border-b border-white/15 px-5 py-8 sm:px-7 lg:col-span-4 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-200">
              Studio index / 01
            </p>
            <nav aria-label="Footer primary navigation" className="mt-5">
              {exploreLinks.map((item, index) =>
                "href" in item && item.href ? (
                  <FooterLink
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    index={index}
                  />
                ) : null,
              )}
            </nav>
          </section>

          <section className="px-5 py-8 sm:px-7 lg:col-span-8 lg:px-8 lg:py-10">
            <div className="flex items-center justify-between gap-6">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-200">
                Service index / {String(serviceLinks.length).padStart(2, "0")}
              </p>
              <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/30">
                Draft to audience
              </span>
            </div>
            <nav
              aria-label="Footer service navigation"
              className="mt-5 grid sm:grid-cols-2 sm:gap-x-8"
            >
              {serviceLinks.map((item, index) => (
                <FooterLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  index={index}
                />
              ))}
            </nav>
          </section>
        </div>

        <div className="relative overflow-hidden pb-2 pt-10 -mb-16">
          <p
            aria-hidden="true"
            className="pointer-events-none whitespace-nowrap text-center font-heading text-[clamp(5rem,16vw,14rem)] font-medium leading-[0.7] tracking-[0.09em] text-white/7.5"
          >
            SCRIPTORA
          </p>
        </div>

        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between border-t border-white/15 backdrop-blur-xs px-2">
          <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
            © {currentYear} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button
              href="/#home-hero-title"
              variant="outline"
              tone="primary"
              size="sm"
              icon={<ArrowUp />}
              className="border-white/20 text-white hover:border-primary-300"
            >
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
