import { Lenis } from "lenis/react";
import Footer from "./footer";
import Header from "./header";

const SiteShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Lenis root options={{ allowNestedScroll: true }} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default SiteShell;
