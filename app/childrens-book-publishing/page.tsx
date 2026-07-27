import ChildrenCta from "@/components/children/children-cta";
import ChildrenDeliverables from "@/components/children/children-deliverables";
import ChildrenFaq from "@/components/children/children-faq";
import ChildrenHero from "@/components/children/children-hero";
import ChildrenStudio from "@/components/children/children-studio";
import ReaderPaths from "@/components/children/reader-paths";
import StorybookJourney from "@/components/children/storybook-journey";
import { childrenFont } from "@/app/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Children’s Book Publishing | Scriptora Publishing",
  description:
    "Children’s book publishing for picture books, early readers, and illustrated chapter books—from story shaping and illustration to production-ready files.",
};

export default function ChildrensBookPublishingPage() {
  return (
    <main className={childrenFont.variable}>
      <ChildrenHero />
      <ReaderPaths />
      <ChildrenStudio />
      <StorybookJourney />
      <ChildrenDeliverables />
      <ChildrenFaq />
      <ChildrenCta />
    </main>
  );
}
