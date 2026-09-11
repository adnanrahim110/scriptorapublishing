import ContactForm from "@/components/contact/contact-form";
import Button from "@/components/ui/button";
import { contactDetails } from "@/content/global";
import { homeContact, homeContactServices, homeMedia } from "@/content/home";
import { Mail } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./section-heading";

const ContactSection = () => {
  const emailContact = contactDetails.find(
    (detail) => detail.label === "Email",
  );
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
            title={homeContact.title}
            description={homeContact.description}
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
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={homeMedia.conversation.src}
                  alt={homeMedia.conversation.alt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-10 max-w-sm font-heading text-4xl font-medium leading-[1.02] text-white sm:text-5xl">
                {homeContact.subtitle}
              </h3>
              <p className="mt-6 max-w-sm text-sm leading-6 text-white/70">
                {homeContact.conclusion}
              </p>
              <Button
                href="/contact-us"
                variant="outline"
                size="md"
                className="mt-8 max-w-full border-white/30 text-white hover:border-primary-300"
              >
                {homeContact.secondaryAction}
              </Button>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-12 flex items-center gap-3 border-t border-white/15 pt-5 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/70"
              >
                <span className="flex size-9 shrink-0 items-center justify-center border border-white/20">
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
            services={homeContactServices}
            eyebrow=""
            description={homeContact.invitation}
            submitLabel={homeContact.action}
            className="p-5 sm:p-8 lg:col-span-8 lg:p-10 xl:p-12"
          />
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
