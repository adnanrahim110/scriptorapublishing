import Copy from "@/components/ui/copy";
import Title from "@/components/ui/title";
import type { ServiceSectionCopy } from "@/content/services";

export default function ServiceNarrative({
  id,
  copy,
}: {
  id: string;
  copy: ServiceSectionCopy;
}) {
  return (
    <section
      aria-labelledby={id}
      className="border-b border-neutral-300 bg-[#fcfaf7] py-20 sm:py-24 lg:py-28"
    >
      <div className="container grid gap-8 lg:grid-cols-12">
        <Title
          id={id}
          as="h2"
          size="xl"
          reveal={false}
          className="max-w-3xl lg:col-span-6"
        >
          {copy.title}
        </Title>
        <Copy
          text={copy.description}
          className="max-w-2xl text-base leading-7 text-neutral-600 lg:col-span-6"
        />
      </div>
    </section>
  );
}
