import AttributionTracker from "@/components/analytics/attribution-tracker";
import { Lenis } from "lenis/react";
import FooterRouter from "./footer-router";
import Header from "./header";

const SiteShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Lenis root options={{ allowNestedScroll: true }} />
      <AttributionTracker />
      <Header />
      {children}
      <FooterRouter />
    </>
  );
};

export default SiteShell;
