import Copy from "@/components/ui/copy";
import type { childrenPage } from "@/content/children";
import Image from "next/image";

type JourneyStep = (typeof childrenPage.journey)[number];
export default function ChildrenJourneyStep({
  step,
  index,
}: {
  step: JourneyStep;
  index: number;
}) {
  return (
    <article
      id={`children-chapter-${index}`}
      data-children-chapter={index}
      className="flex min-h-[72vh] flex-col justify-center border-b border-white/20 py-14 last:border-b-0 lg:min-h-[78vh]"
    >
      <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-3xl lg:hidden">
        <Image
          src={step.image}
          alt={step.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <p className="text-sm font-semibold text-[#ffd85a]">{step.chapter}</p>
      <h3 className="mt-4 max-w-xl font-(family-name:--font-children) text-3xl font-semibold leading-tight tracking-[-.03em] text-white sm:text-4xl">
        {step.title}
      </h3>
      <Copy
        text={step.description}
        className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8"
      />
    </article>
  );
}
