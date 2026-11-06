import Copy from "@/components/ui/copy";
import type { ServiceStep } from "@/content/services";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { getServiceVisuals } from "./service-visuals";

export default function ServiceProcessStep({
  step,
  slug,
  index,
}: {
  step: ServiceStep;
  slug: string;
  index: number;
}) {
  const visual = getServiceVisuals(slug).hero;
  return (
    <div className="grid lg:min-h-116 lg:grid-cols-12">
      <figure className="relative min-h-80 border-b border-neutral-300 lg:col-span-6 lg:min-h-full lg:border-b-0 lg:border-r">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={cn("object-cover", visual.positionClass)}
        />
      </figure>
      <article className="min-w-0 p-6 sm:p-8 lg:col-span-6 lg:p-12">
        <p className="font-mono text-sm text-primary-700">
          {String(index + 1).padStart(2, "0")} / {step.label}
        </p>
        <h3 className="mt-8 max-w-xl font-heading text-4xl font-medium leading-tight text-neutral-950 sm:text-5xl">
          {step.title}
        </h3>
        <Copy
          text={step.description}
          className="mt-6 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base"
        />
      </article>
    </div>
  );
}
