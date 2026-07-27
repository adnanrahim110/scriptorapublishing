import { Lenis } from "lenis/react";
import FooterRouter from "./footer-router";
import Header from "./header";

const SiteShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Lenis root options={{ allowNestedScroll: true }} />
      <Header />
      {children}
      <FooterRouter />
    </>
  );
};

export default SiteShell;
