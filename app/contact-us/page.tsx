import ContactFormSection from "@/components/contact/contact-form-section";
import ContactHero from "@/components/contact/contact-hero";
import ContactLedger from "@/components/contact/contact-ledger";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Scriptora Publishing | Discuss Your Book",
  description:
    "Tell Scriptora Publishing about your manuscript, publishing goals, and the support you need. Begin with a clear, no-obligation project inquiry.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactLedger />
      <ContactFormSection />
    </main>
  );
}
