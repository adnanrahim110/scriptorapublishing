import AboutCollaboration from "@/components/about/about-collaboration";
import AboutHero from "@/components/about/about-hero";
import AboutPromise from "@/components/about/about-promise";
import AboutStory from "@/components/about/about-story";
import AboutTeam from "@/components/about/about-team";
import AboutValues from "@/components/about/about-values";
import PortfolioSlider from "@/components/home/portfolio-slider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Scriptora Publishing | One Studio Around Your Book",
  description:
    "Meet the editorial, design, production, distribution, and author-brand disciplines Scriptora brings together around every publishing brief.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutValues />
      <PortfolioSlider />
      <AboutCollaboration />
      <AboutPromise />
    </main>
  );
}
