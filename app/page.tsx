import AuthorMarginalia from "@/components/home/author-marginalia";
import AuthorRights from "@/components/home/author-rights";
import ContactSection from "@/components/home/contact-section";
import DistributionConstellation from "@/components/home/distribution-constellation";
import Hero from "@/components/home/hero";
import HomeFaq from "@/components/home/home-faq";
import PortfolioSlider from "@/components/home/portfolio-slider";
import PublishingLedger from "@/components/home/publishing-ledger";
import PublishingProcess from "@/components/home/publishing-process";
import ServicesAnatomy from "@/components/home/services-anatomy";
import { homeSeo } from "@/content/home";
import type { Metadata } from "next";

export const metadata: Metadata = homeSeo;

export default function Home() {
  return (
    <main>
      <Hero />
      <PublishingLedger />
      <ServicesAnatomy />
      <PortfolioSlider />
      <PublishingProcess />
      <AuthorRights />
      <DistributionConstellation />
      <AuthorMarginalia />
      <HomeFaq />
      <ContactSection />
    </main>
  );
}
