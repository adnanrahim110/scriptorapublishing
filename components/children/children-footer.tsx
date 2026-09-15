import { childrenFont } from "@/app/fonts";
import Button from "@/components/ui/button";
import { brand, contactDetails, navigationLink } from "@/content/global";
import { legalLinks } from "@/content/legal";
import { ArrowUp, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = navigationLink.filter(
  (item) => "href" in item && item.href,
);

const childServiceLinks = [
  {
    label: "Editing & proofreading",
    href: "/book-editing-and-proofreading-services",
  },
  { label: "Book cover design", href: "/book-cover-design-services" },
  { label: "Book formatting", href: "/book-formatting-services" },
  { label: "Book distribution", href: "/book-distribution-services" },
];

const email = contactDetails.find((detail) => detail.label === "Email");

function PlayfulFooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-5 border-b border-white/14 py-3.5 text-sm font-semibold text-white/68 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd85a]"
    >
      {label}
      <span
        aria-hidden="true"
        className="size-2 rounded-full bg-[#ff715f] transition-transform duration-300 group-hover:scale-150"
      />
    </Link>
  );
}

export default function ChildrenFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="children-footer-title"
      className={`${childrenFont.variable} overflow-hidden bg-[#25223d] text-white`}
    >
      <div className="container pt-10 pb-2 sm:pt-14 lg:pt-18">
        <section className="relative overflow-hidden rounded-4xl bg-[#ff715f] p-7 text-[#25223d] sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-16 size-52 rounded-full border-34 border-[#ffd85a]/65"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 left-[42%] size-36 rounded-full bg-[#35b8ad]/70"
          />
          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[.17em]">
              THE END OF THIS PAGE. THE BEGINNING OF SOMETHING ELSE.
            </p>
            <h2
              id="children-footer-title"
              className="mt-4 max-w-3xl font-(family-name:--font-children) text-3xl font-semibold leading-none tracking-[-.035em] text-[#25223d] sm:text-4xl lg:text-5xl"
            >
              Someday, this could be someone's favorite book.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#25223d]/80">
              That's the beautiful thing about children's stories. You never
              quite know where they'll travel. Into a classroom, onto a library
              shelf, or into the imagination of one child who asks:{" "}
              <strong>"Can we read it again?"</strong> Let's make a book worthy
              of the answer.
            </p>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <Button
              href="/contact-us"
              size="lg"
              className="border-[#25223d] bg-[#25223d] text-white"
            >
              Begin Your Children's Book
            </Button>
          </div>
        </section>

        <div className="mt-10 grid gap-10 border-b border-white/14 pb-10 sm:mt-12 lg:grid-cols-[1.15fr_.85fr_.85fr] lg:gap-14 lg:pb-12">
          <section>
            <Image
              src={brand.logoHorizontal}
              alt={brand.name}
              width={240}
              height={88}
              className="h-auto w-44 brightness-0 invert sm:w-48"
            />
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/58">
              Story shaping, illustration direction, and publishing craft for
              picture books, early readers, and illustrated adventures.
            </p>

            {email && (
              <a
                href={typeof email.href === "string" ? email.href : undefined}
                className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/6 px-4 py-3 text-sm font-semibold text-white/78 transition-colors hover:border-[#ffd85a]/60 hover:text-white"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-[#ffd85a] text-[#25223d]">
                  <Mail
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.8}
                  />
                </span>
                {email.value}
              </a>
            )}
          </section>

          <nav aria-label="Children’s page footer navigation">
            <p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#ffd85a]">
              Explore
            </p>
            <div className="mt-4">
              {footerLinks.map((item) =>
                "href" in item && item.href ? (
                  <PlayfulFooterLink
                    key={item.label}
                    href={item.href}
                    label={item.label}
                  />
                ) : null,
              )}
            </div>
          </nav>

          <nav aria-label="Related publishing services">
            <p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#35b8ad]">
              Related services
            </p>
            <div className="mt-4">
              {childServiceLinks.map((item) => (
                <PlayfulFooterLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                />
              ))}
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-semibold text-white/38">
            © {currentYear} {brand.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-semibold text-white/48 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="#children-hero-title"
              variant="outline"
              tone="neutral"
              size="sm"
              icon={<ArrowUp aria-hidden="true" />}
              className="border-white/18 text-white"
            >
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
