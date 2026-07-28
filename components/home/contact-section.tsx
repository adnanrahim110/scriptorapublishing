import ContactForm from "@/components/contact/contact-form";
import { contactDetails } from "@/content/global";
import { Mail } from "lucide-react";

import SectionHeading from "./section-heading";

const ContactSection = () => {
  const emailContact = contactDetails.find((detail) => detail.label === "Email");
  const contactEmail = emailContact?.value ?? "info@scriptorapublishing.com";

  return (
    <section
      id="contact"
      aria-labelledby="contact-section-title"
      className="relative overflow-hidden bg-primary-950 py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px)] bg-size-[32px_100%] opacity-70"
      />
      <div className="container relative">
        <div id="contact-section-title">
          <SectionHeading
            index="10"
            eyebrow="The manuscript desk"
            title="Bring us the draft. Tell us what it could become."
            description="Share the current shape of the project and the kind of help you need. The form validates each field before securely sending your inquiry."
            inverted
          />
        </div>

        <div className="mt-14 grid border-y border-white/20 lg:mt-20 lg:grid-cols-12">
          <aside className="relative border-b border-white/20 bg-primary-900 p-6 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-10">
            <span
              aria-hidden="true"
              className="absolute inset-3 border border-white/10"
            />
            <div className="relative">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-200">
                Project folio / new inquiry
              </p>
              <h3 className="mt-10 max-w-sm font-heading text-4xl font-medium leading-[1.02] text-white sm:text-5xl">
                Start with the book, not the package.
              </h3>
              <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
                A useful first note explains what you are writing, where the
                manuscript stands, and what feels unresolved.
              </p>

              <ol className="mt-12 border-y border-white/15">
                {["Your details", "Project service", "Manuscript note"].map(
                  (item, index) => (
                    <li
                      key={item}
                      className="grid min-h-14 grid-cols-[28px_1fr] items-center gap-3 border-b border-white/15 last:border-b-0"
                    >
                      <span className="font-mono text-[8px] text-primary-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-white/75">
                        {item}
                      </span>
                    </li>
                  ),
                )}
              </ol>

              <a
                href={`mailto:${contactEmail}`}
                className="mt-12 flex items-center gap-3 border-t border-white/15 pt-5 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/70"
              >
                <span className="flex size-9 items-center justify-center border border-white/20">
                  <Mail
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.7}
                  />
                </span>
                <span className="break-all">{contactEmail}</span>
              </a>
            </div>
          </aside>

          <ContactForm
            idPrefix="home-contact"
            className="p-5 sm:p-8 lg:col-span-8 lg:p-10 xl:p-12"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
