import Button from "@/components/ui/button";
import Image from "next/image";

export default function ChildrenCta() {
  return (
    <section className="bg-[#fff7e8] pb-18 sm:pb-24 lg:pb-30">
      <div className="container">
        <div className="relative min-h-140 overflow-hidden rounded-[2.25rem] bg-[#153d55] sm:min-h-170 lg:min-h-160 lg:rounded-[3rem]">
          <Image
            src="/imgs/children/readers-harbor.webp"
            alt="Fox, bear, and rabbit sailing on an open book toward a glowing library"
            fill
            sizes="(min-width: 1280px) 1440px, 100vw"
            className="object-cover object-[38%_center] lg:object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,61,85,.08)_25%,rgba(21,61,85,.92)_100%)] lg:bg-[linear-gradient(90deg,rgba(21,61,85,.05)_25%,rgba(21,61,85,.9)_78%)]"
          />

          <div className="absolute inset-x-5 bottom-5 rounded-[1.6rem] border border-white/25 bg-[#25223d]/82 p-7 text-white backdrop-blur-md sm:inset-x-8 sm:bottom-8 sm:p-9 lg:inset-y-8 lg:left-auto lg:right-8 lg:flex lg:w-[44%] lg:flex-col lg:justify-center lg:p-12">
            <p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#ffd85a]">
              Your next chapter
            </p>
            <h2 className="mt-4 font-(family-name:--font-children) text-3xl font-semibold leading-none tracking-[-.03em] text-white sm:text-4xl lg:text-5xl">
              Let's give your story a world of its own.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
              You don't need to know the terminology. You don't need to
              understand trim sizes, bleeds, spreads, typography, or publishing
              specifications. And you certainly don't need to have every answer
              before speaking with us. Bring the manuscript. Bring the sketch.
              Bring the character. Bring the half-finished idea you've been
              thinking about for three years. We'll start with the story.
            </p>
            <div className="mt-8">
              <Button
                href="/contact-us"
                size="lg"
                className="border-[#ffd85a] bg-[#ffd85a] text-[#25223d]"
              >
                Share Your Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
