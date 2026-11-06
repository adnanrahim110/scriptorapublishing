import Copy from "@/components/ui/copy";
import Image from "next/image";
import ChildrenHeading from "./children-heading";

type Narrative = {
  title: string;
  description: string;
  statement?: string;
  conclusion?: string;
};
export default function ChildrenNarrative({
  id,
  content,
  image,
  imageAlt,
}: {
  id: string;
  content: Narrative;
  image: string;
  imageAlt: string;
}) {
  return (
    <section
      aria-labelledby={id}
      className="bg-white py-18 even:bg-[#fff7e8] sm:py-24 lg:py-32"
    >
      <div className="container grid gap-10 lg:grid-cols-12 lg:items-start">
        <figure className="relative min-h-112 overflow-hidden rounded-4xl bg-[#153d55] lg:sticky lg:top-28 lg:col-span-5 lg:min-h-148">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </figure>
        <div className="lg:col-span-7 lg:pl-6">
          <ChildrenHeading
            id={id}
            title={content.title}
            description={content.description}
          />
          {content.statement && (
            <Copy
              text={content.statement}
              className="mt-8 border-y border-[#ded4c7] py-6 font-(family-name:--font-children) text-2xl font-semibold leading-8 text-[#25223d]"
            />
          )}
          {content.conclusion && (
            <Copy
              text={content.conclusion}
              className="mt-8 text-lg font-semibold leading-8 text-[#625969]"
            />
          )}
        </div>
      </div>
    </section>
  );
}
