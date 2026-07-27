"use client";

import ChildrenFooter from "@/components/children/children-footer";
import { usePathname } from "next/navigation";

import Footer from "./footer";

export default function FooterRouter() {
  const pathname = usePathname();

  if (pathname === "/childrens-book-publishing") {
    return <ChildrenFooter />;
  }

  return <Footer />;
}

