import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import type { LegalDocument as LegalDocumentContent } from "@/content/legal";
import { ArrowUpRight, FileCheck2, Mail, Scale, ShieldCheck } from "lucide-react";
import Link from "next/link";

const documentIcons = {
  "privacy-policy": ShieldCheck,
  "terms-and-conditions": Scale,
} as const;

export default function LegalDocument({
  document,
}: {
  document: LegalDocumentContent;
}) {
  const Icon =
    documentIcons[document.slug as keyof typeof documentIcons] ?? FileCheck2;

  return (
    <main>
      <section
        aria-labelledby="legal-document-title"
        className="relative overflow-hidden border-b border-neutral-300 bg-[#f5efe7] pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(56,38,24,.055)_1px,transparent_1px)] bg-size-[32px_100%]"
        />
        <div className="container relative">
          <div className="grid border-x border-neutral-300 lg:grid-cols-12">
            <div className="px-5 pb-12 sm:px-8 lg:col-span-8 lg:border-r lg:px-10 lg:pb-14 xl:px-14">
              <div className="flex items-center justify-between gap-6 border-y border-neutral-300 py-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.19em] text-primary-700">
                  Legal library / {document.eyebrow}
                </p>
                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-400">
                  {document.code}
                </span>
              </div>

              <Title
                id="legal-document-title"
                as="h1"
                size="display"
                weight="medium"
                highlight={
                  document.slug === "privacy-policy"
                    ? "same care as your manuscript"
                    : "better creative work"
                }
                className="mt-10 max-w-5xl"
              >
                {document.title}
              </Title>
              <p className="mt-7 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                {document.description}
              </p>
            </div>

            <aside className="relative flex min-h-72 flex-col justify-between border-t border-neutral-300 bg-primary-900 p-6 text-white sm:p-8 lg:col-span-4 lg:min-h-0 lg:border-t-0 lg:p-10">
              <span
                aria-hidden="true"
                className="absolute inset-3 border border-white/10"
              />
              <div className="relative flex items-start justify-between gap-6">
                <p className="font-mono text-[8px] uppercase tracking-[0.17em] text-primary-200">
                  Registered website notice
                </p>
                <span className="flex size-11 items-center justify-center border border-white/20 text-primary-200">
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={1.5}
                  />
                </span>
              </div>
              <div className="relative mt-14 border-y border-white/15">
                <dl>
                  <div className="grid grid-cols-[90px_1fr] gap-4 border-b border-white/15 py-4">
                    <dt className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/40">
                      Document
                    </dt>
                    <dd className="text-xs font-semibold text-white/85">
                      {document.shortTitle}
                    </dd>
                  </div>
                  <div className="grid grid-cols-[90px_1fr] gap-4 border-b border-white/15 py-4">
                    <dt className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/40">
                      Effective
                    </dt>
                    <dd className="text-xs font-semibold text-white/85">
                      {document.effectiveDate}
                    </dd>
                  </div>
                  <div className="grid grid-cols-[90px_1fr] gap-4 py-4">
                    <dt className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/40">
                      Applies to
                    </dt>
                    <dd className="text-xs font-semibold leading-5 text-white/85">
                      {document.appliesTo}
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        aria-label={`${document.shortTitle} contents`}
        className="bg-[#fcfaf7] py-16 sm:py-20 lg:py-28"
      >
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-0">
            <aside className="lg:col-span-4 lg:pr-12">
              <div className="lg:sticky lg:top-28">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-700">
                  Document index / {String(document.sections.length).padStart(2, "0")}
                </p>
                <nav aria-label={`${document.shortTitle} section navigation`} className="mt-5 border-y border-neutral-300">
                  {document.sections.map((section, index) => (
                    <Link
                      key={section.id}
                      href={`#${section.id}`}
                      className="group/legal-index grid min-h-12 grid-cols-[30px_1fr_14px] items-center gap-2 border-b border-neutral-300 px-1 text-xs font-semibold text-neutral-700 last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/70"
                    >
                      <span className="font-mono text-[8px] text-primary-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-4 transition-transform duration-300 group-hover/legal-index:translate-x-1">
                        {section.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className="size-2 border-r border-t border-primary-500/60"
                      />
                    </Link>
                  ))}
                </nav>

                <p className="mt-6 border-l-2 border-primary-500 bg-primary-50 px-4 py-4 text-xs leading-6 text-neutral-600">
                  {document.introduction}
                </p>
              </div>
            </aside>

            <article className="border-t border-neutral-300 lg:col-span-8">
              {document.sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-title`}
                  className="grid gap-5 border-b border-neutral-300 py-8 sm:grid-cols-[52px_1fr] sm:gap-7 sm:py-10 lg:grid-cols-[64px_1fr] lg:py-12"
                >
                  <span className="font-mono text-[9px] tracking-[0.16em] text-primary-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2
                      id={`${section.id}-title`}
                      className="font-heading text-3xl font-medium leading-tight text-neutral-950 sm:text-4xl"
                    >
                      {section.title}
                    </h2>

                    <div className="mt-6 space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="max-w-3xl text-sm leading-7 text-neutral-600 sm:text-[15px]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.bullets && (
                      <ul className="mt-7 border-y border-neutral-300">
                        {section.bullets.map((item, itemIndex) => (
                          <li
                            key={item}
                            className="grid grid-cols-[28px_1fr] gap-3 border-b border-neutral-300 py-4 last:border-b-0"
                          >
                            <span className="font-mono text-[8px] text-primary-600">
                              {String(itemIndex + 1).padStart(2, "0")}
                            </span>
                            <span className="text-sm leading-6 text-neutral-600">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.note && (
                      <aside className="relative mt-7 bg-primary-100 px-5 py-5 sm:px-6">
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 top-0 w-1 bg-primary-700"
                        />
                        <p className="text-xs font-semibold leading-6 text-primary-950">
                          {section.note}
                        </p>
                      </aside>
                    )}
                  </div>
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="legal-contact-title"
        className="relative overflow-hidden border-b border-white/15 bg-primary-950 py-16 text-white sm:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px)] bg-size-[32px_100%]"
        />
        <div className="container relative">
          <div className="grid border-y border-white/20 lg:grid-cols-12">
            <div className="border-b border-white/20 p-6 sm:p-8 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-200">
                Questions / document correspondence
              </p>
              <Title
                id="legal-contact-title"
                as="h2"
                size="lg"
                tone="inverse"
                weight="medium"
                className="mt-7 max-w-2xl"
              >
                Need clarity on a clause or privacy request?
              </Title>
              <a
                href="mailto:info@scriptorapublishing.com"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/70"
              >
                <span className="flex size-10 items-center justify-center border border-white/20 text-primary-200">
                  <Mail
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.6}
                  />
                </span>
                info@scriptorapublishing.com
              </a>
            </div>

            <div className="flex flex-col justify-end bg-primary-900 p-6 sm:p-8 lg:col-span-5 lg:p-10">
              <p className="font-heading text-3xl font-medium leading-tight text-white">
                The companion document completes the website record.
              </p>
              <Button
                href={document.companion.href}
                size="lg"
                fullWidth
                icon={<ArrowUpRight aria-hidden="true" />}
                className="mt-8"
              >
                {document.companion.label}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
