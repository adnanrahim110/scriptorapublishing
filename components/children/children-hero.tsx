import Button from "@/components/ui/button";
import Copy from "@/components/ui/copy";
import { childrenPage } from "@/content/children";
import Image from "next/image";

export default function ChildrenHero() {
  return (
    <section
      aria-labelledby="children-hero-title"
      className="relative overflow-hidden bg-[#fff7e8] pb-10 pt-28 sm:pb-14 sm:pt-32 lg:pb-18 lg:pt-32"
    >
      <div className="container">
        <div className="relative min-h-180 overflow-hidden rounded-4xl border border-[#e6d5bc] bg-[#fdf4df] shadow-[0_30px_90px_rgba(74,48,25,.12)] sm:min-h-192 lg:rounded-[3rem]">
          <Image
            src="/imgs/children/storybook-hero.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1280px) 1440px, 100vw"
            className="object-cover object-[68%_50%] lg:object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,232,.97)_0%,rgba(255,247,232,.92)_65%,rgba(255,247,232,.15)_100%)] lg:bg-[linear-gradient(90deg,rgba(255,247,232,.99)_0%,rgba(255,247,232,.94)_45%,rgba(255,247,232,.08)_80%)]"
          />
          <div className="relative z-10 flex min-h-180 max-w-3xl flex-col justify-center px-6 py-8 sm:min-h-192 sm:px-10 sm:py-12 lg:px-16 lg:py-16 xl:px-20">
            <h1
              id="children-hero-title"
              className="font-(family-name:--font-children) text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-.045em] text-[#25223d]"
            >
              <span className="text-[#e95749]">
                {childrenPage.hero.titleLead}
              </span>{" "}
              {childrenPage.hero.titleTail}
            </h1>
            <Copy
              text={childrenPage.hero.description}
              className="mt-8 max-w-xl text-base leading-7 text-[#544d5d] sm:text-lg sm:leading-8"
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                href="/contact-us"
                size="lg"
                className="max-w-full border-[#25223d] bg-[#25223d] text-white [&_[data-slot=button-label]]:whitespace-normal"
              >
                {childrenPage.hero.primary}
              </Button>
              <Button
                href="#storybook-journey"
                size="lg"
                variant="outline"
                tone="secondary"
                className="max-w-full border-[#25223d] bg-[#fff7e8]/90 text-[#25223d] [&_[data-slot=button-label]]:whitespace-normal"
              >
                {childrenPage.hero.secondary}
              </Button>
            </div>
            <p className="mt-8 text-sm font-semibold leading-6 text-[#625969]">
              {childrenPage.hero.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
