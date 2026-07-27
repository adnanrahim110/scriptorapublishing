import ContactForm from "@/components/contact/contact-form";
import Title from "@/components/ui/title";
import { contactBrief } from "@/content/contact";
import { Check, Mail } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-section-title"
      className="relative overflow-hidden bg-primary-950 py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px)] bg-size-[32px_100%] opacity-70"
      />
      <div className="container relative scroll-mt-24">
        <div className="grid border-y border-white/20 lg:grid-cols-12">
          <aside className="relative border-b border-white/20 bg-primary-900 p-6 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 border border-white/10"
            />
            <div className="relative">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-200">
                {contactBrief.eyebrow}
              </p>
              <Title
                id="contact-form-section-title"
                as="h2"
                size="lg"
                tone="inverse"
                weight="medium"
                className="mt-10 max-w-md"
              >
                {contactBrief.title}
              </Title>
              <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
                {contactBrief.description}
              </p>

              <ol className="mt-10 border-y border-white/15">
                {contactBrief.checklist.map((item, index) => (
                  <li
                    key={item}
                    className="grid min-h-16 grid-cols-[30px_1fr] items-center gap-3 border-b border-white/15 py-3 last:border-b-0"
                  >
                    <span className="flex size-6 items-center justify-center border border-white/20 text-primary-200">
                      <Check
                        aria-hidden="true"
                        className="size-3"
                        strokeWidth={2}
                      />
                    </span>
                    <span className="text-xs font-semibold leading-5 text-white/75">
                      {item}
                    </span>
                    <span className="sr-only">Item {index + 1}</span>
                  </li>
                ))}
              </ol>

              <a
                href="mailto:info@scriptorapublishing.com"
                className="mt-10 flex items-center gap-3 border-t border-white/15 pt-5 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/70"
              >
                <span className="flex size-9 shrink-0 items-center justify-center border border-white/20">
                  <Mail
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.7}
                  />
                </span>
                <span className="break-all">
                  info@scriptorapublishing.com
                </span>
              </a>
            </div>
          </aside>

          <ContactForm
            idPrefix="contact-page"
            eyebrow={contactBrief.formEyebrow}
            description={contactBrief.formDescription}
            className="p-5 sm:p-8 lg:col-span-8 lg:p-10 xl:p-12"
          />
        </div>
      </div>
    </section>
  );
}
