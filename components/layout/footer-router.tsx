"use client";

import ChildrenFooter from "@/components/children/children-footer";
import { usePathname } from "next/navigation";

import Footer from "./footer";
import { serviceClosings } from "@/content/service-closings";

export default function FooterRouter() {
  const pathname = usePathname();

  if (pathname === "/childrens-book-publishing") {
    return <ChildrenFooter />;
  }

  return (
    <Footer
      homepage={pathname === "/"}
      closing={serviceClosings[pathname.slice(1)]}
    />
  );
}
