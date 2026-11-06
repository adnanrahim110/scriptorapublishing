import Button from "@/components/ui/button";
import Copy from "@/components/ui/copy";
import { childrenPage } from "@/content/children";
import Image from "next/image";

export default function ChildrenCta() {
  return (
    <section
      aria-labelledby="children-cta-title"
      className="bg-[#fff7e8] pb-18 sm:pb-24 lg:pb-32"
    >
      <div className="container">
        <div className="relative min-h-140 overflow-hidden rounded-[2.25rem] bg-[#153d55] p-4 pt-64 sm:min-h-172 sm:p-8 sm:pt-72 lg:flex lg:justify-end lg:rounded-[3rem] lg:pt-8">
          <Image
            src="/imgs/children/readers-harbor.webp"
            alt="Fox, bear, and rabbit sailing on an open book toward a glowing library"
            fill
            sizes="(min-width: 1280px) 1440px, 100vw"
            className="object-cover object-[38%_center] lg:object-center"
          />
          <div className="relative rounded-3xl border border-white/25 bg-[#25223d]/95 p-6 text-white backdrop-blur-md sm:p-8 lg:w-[48%] lg:p-12">
            <h2
              id="children-cta-title"
              className="font-(family-name:--font-children) text-3xl font-semibold leading-tight tracking-[-.03em] text-white sm:text-4xl lg:text-5xl"
            >
              {childrenPage.cta.title}
            </h2>
            <Copy
              text={childrenPage.cta.description}
              className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base"
            />
            <Button
              href="/contact-us"
              size="lg"
              className="mt-8 max-w-full border-[#ffd85a] bg-[#ffd85a] text-[#25223d] [&_[data-slot=button-label]]:whitespace-normal"
            >
              {childrenPage.cta.action}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
