"use client";

import { childrenPage } from "@/content/children";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function StorybookJourney() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start 22%", "end 78%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextStep = Math.min(
      childrenPage.journey.length - 1,
      Math.max(0, Math.round(latest * (childrenPage.journey.length - 1))),
    );

    setActiveStep((current) => (current === nextStep ? current : nextStep));
  });

  const active = childrenPage.journey[activeStep];

  return (
    <section
      ref={rootRef}
      id="storybook-journey"
      aria-labelledby="storybook-journey-title"
      className="relative overflow-clip bg-[#25223d] py-18 text-white sm:py-24 lg:py-30"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#7067d8_0,transparent_28%),radial-gradient(circle_at_85%_70%,#ff715f_0,transparent_26%)]"
      />
      <div className="container relative">
        <div className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#ffd85a]">
              FROM "WHAT IF..." TO "READ IT AGAIN."
            </p>
            <h2
              id="storybook-journey-title"
              className="mt-4 max-w-4xl font-[family-name:var(--font-children)] text-4xl font-semibold leading-[.96] tracking-[-.035em] text-white sm:text-5xl lg:text-6xl"
            >
              Five chapters from imagination to bookshelf.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/68 lg:justify-self-end">
            Maybe you have a finished manuscript. Maybe you have an idea you can't stop thinking about. Our process creates clear creative stages and approval points so the story, characters, illustrations, and book are developed deliberately—not all at once.
          </p>
        </div>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-18">
          <div className="hidden lg:block">
            <div className="sticky top-28 h-[calc(100vh-8rem)] max-h-[760px] min-h-[590px] overflow-hidden rounded-[2.25rem] bg-[#153d55]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${activeStep}-${active.image}`}
                  className="absolute inset-0"
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, scale: 1.035, y: 16 }
                  }
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.98, y: -12 }
                  }
                  transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
                >
                  <Image
                    src={active.image}
                    alt={active.imageAlt}
                    fill
                    sizes="55vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-[#111628]/85 via-transparent to-transparent"
              />
              <div className="absolute inset-x-7 bottom-7 rounded-[1.4rem] border border-white/20 bg-[#111628]/72 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[.16em] text-white/55">
                      Now reading
                    </span>
                    <p className="mt-2 font-[family-name:var(--font-children)] text-2xl font-semibold text-white">
                      {active.title}
                    </p>
                  </div>
                  <span
                    className="flex size-12 shrink-0 items-center justify-center rounded-full font-[family-name:var(--font-children)] text-sm font-semibold text-[#25223d]"
                    style={{ backgroundColor: active.accent }}
                  >
                    {activeStep + 1}/5
                  </span>
                </div>
                <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/15">
                  <motion.div
                    className="h-full rounded-full bg-[#ffd85a]"
                    style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            {childrenPage.journey.map((step, index) => (
              <article
                key={step.title}
                className="flex min-h-[72vh] flex-col justify-center border-b border-white/14 py-14 last:border-b-0 lg:min-h-[78vh]"
                aria-current={index === activeStep ? "step" : undefined}
              >
                <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-[1.5rem] lg:hidden">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.17em]"
                  style={{ color: step.accent }}
                >
                  <span
                    className="size-2 rounded-full"
                    style={{ backgroundColor: step.accent }}
                  />
                  {step.chapter}
                </div>
                <h3 className="mt-5 max-w-xl font-[family-name:var(--font-children)] text-3xl font-semibold leading-[1.02] tracking-[-.03em] text-white sm:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                  {step.description}
                </p>
                <p className="mt-7 text-xs font-bold uppercase tracking-[.14em] text-white/42">
                  {step.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
