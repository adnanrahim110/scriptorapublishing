"use client";

import Button from "@/components/ui/button";
import { childrenPage } from "@/content/children";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function ChildrenHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 86]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.025, 1.09]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 34]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="children-hero-title"
      className="relative overflow-hidden bg-[#fff7e8] pb-10 pt-28 sm:pb-14 sm:pt-32 lg:pb-18 lg:pt-30"
    >
      <div className="container">
        <div className="relative min-h-180 overflow-hidden rounded-4xl border border-[#e6d5bc] bg-[#fdf4df] shadow-[0_30px_90px_rgba(74,48,25,.12)] sm:min-h-190 lg:min-h-177.5 lg:rounded-[3rem]">
          <motion.div
            aria-hidden="true"
            className="absolute inset-0"
            style={
              prefersReducedMotion
                ? undefined
                : { y: imageY, scale: imageScale }
            }
          >
            <Image
              src="/imgs/children/storybook-hero.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 1280px) 1440px, 100vw"
              className="object-cover object-[68%_50%] lg:object-center"
            />
          </motion.div>

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,232,.94)_0%,rgba(255,247,232,.82)_45%,rgba(255,247,232,.08)_76%),linear-gradient(90deg,rgba(255,247,232,.99)_0%,rgba(255,247,232,.92)_38%,rgba(255,247,232,.12)_70%)] lg:bg-[linear-gradient(90deg,rgba(255,247,232,.99)_0%,rgba(255,247,232,.92)_35%,rgba(255,247,232,.08)_67%)]"
          />

          <motion.div
            className="relative z-10 flex min-h-180 max-w-3xl flex-col justify-start px-6 py-8 sm:min-h-190 sm:px-10 sm:py-12 lg:min-h-177.5 lg:justify-center lg:px-16 lg:py-16 xl:px-20"
            style={prefersReducedMotion ? undefined : { y: copyY }}
          >
            <div className="mb-8 flex w-fit items-center gap-3 rounded-full border border-[#e4bea4] bg-white/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8a472e] backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#ff715f]" />
              {childrenPage.hero.eyebrow}
            </div>

            <h1
              id="children-hero-title"
              className="max-w-3xl font-(family-name:--font-children) text-[clamp(2.85rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-.045em] text-[#25223d]"
            >
              <span className="text-[#e95749]">
                {childrenPage.hero.titleLead}
              </span>{" "}
              {childrenPage.hero.titleTail}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#544d5d] sm:text-lg sm:leading-8">
              {childrenPage.hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                href="/contact-us"
                size="lg"
                className="border-[#25223d] bg-[#25223d] text-white"
              >
                Bring Your Story to Life
              </Button>
              <Button
                href="#storybook-journey"
                size="lg"
                variant="outline"
                tone="secondary"
                className="border-[#25223d] bg-[#fff7e8]/70 text-[#25223d] backdrop-blur-md"
              >
                See How We Create It
              </Button>
            </div>

            <div className="mt-9 flex items-center gap-3 text-sm font-semibold text-[#625969]">
              <span className="h-px w-10 bg-[#ff715f]" />
              {childrenPage.hero.note}
            </div>
          </motion.div>

          <div className="absolute bottom-5 right-5 z-20 hidden rounded-full border border-white/55 bg-[#25223d]/82 px-4 py-2 text-[10px] font-bold uppercase tracking-[.15em] text-white backdrop-blur-md sm:block">
            Scroll to turn the page ↓
          </div>
        </div>
      </div>
    </section>
  );
}
