import Copy from "@/components/ui/copy";
import { cn } from "@/utils/cn";
import Image from "next/image";

type ChildrenContentCardProps = {
  title: string;
  description: string;
  heading?: string;
  age?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
};

export default function ChildrenContentCard({
  title,
  description,
  heading,
  age,
  image,
  imageAlt = "",
  className,
}: ChildrenContentCardProps) {
  return (
    <article className={cn("min-w-0 p-6 text-[#25223d] sm:p-8", className)}>
      {image && (
        <div className="relative mb-6 aspect-[3/2] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
      {age && <p className="mb-4 text-sm font-semibold">{age}</p>}
      <h3 className="font-(family-name:--font-children) text-2xl font-semibold leading-tight tracking-[-.025em] sm:text-3xl">
        {title}
      </h3>
      {heading && (
        <p className="mt-4 text-base font-semibold leading-6">{heading}</p>
      )}
      <Copy
        text={description}
        className="mt-4 text-sm leading-6 text-[#25223d]/90"
      />
    </article>
  );
}
