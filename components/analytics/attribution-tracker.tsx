"use client";

import { captureAttributionFromCurrentUrl } from "@/libs/attribution";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AttributionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    captureAttributionFromCurrentUrl();
  }, [pathname]);

  return null;
}
