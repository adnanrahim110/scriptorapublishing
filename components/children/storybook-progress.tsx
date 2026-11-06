"use client";

import { childrenPage } from "@/content/children";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function StorybookProgress() {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting)
            setActiveStep(
              Number(entry.target.getAttribute("data-children-chapter")),
            );
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("[data-children-chapter]")
      .forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  const active = childrenPage.journey[activeStep];
  return (
    <div className="hidden lg:block">
      <figure className="sticky top-28 h-[calc(100vh-8rem)] max-h-192 min-h-148 overflow-hidden rounded-[2.25rem] bg-[#153d55]">
        <Image
          src={active.image}
          alt={active.imageAlt}
          fill
          sizes="55vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-[#111628]/95 via-transparent to-transparent"
        />
        <figcaption className="absolute inset-x-8 bottom-8 rounded-3xl border border-white/20 bg-[#111628]/95 p-6 text-white">
          <p className="text-sm font-semibold text-[#ffd85a]">
            {active.chapter}
          </p>
          <p className="mt-2 font-(family-name:--font-children) text-2xl font-semibold">
            {active.title}
          </p>
          <p className="mt-4 text-sm text-white/80">
            {activeStep + 1} / {childrenPage.journey.length}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
