import { childrenPage } from "@/content/children";
import { cn } from "@/utils/cn";
import Copy from "@/components/ui/copy";
import ChildrenHeading from "./children-heading";
import ChildrenContentCard from "./children-content-card";

const backgrounds = ["bg-[#ff715f]", "bg-[#35b8ad]", "bg-[#b4aded]"] as const;
export default function ReaderPaths() {
  return (
    <section
      aria-labelledby="reader-paths-title"
      className="overflow-hidden bg-[#fff7e8] py-18 sm:py-24 lg:py-32"
    >
      <div className="container">
        <ChildrenHeading
          id="reader-paths-title"
          {...childrenPage.readerSection}
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {childrenPage.readerPaths.map((path, index) => (
            <ChildrenContentCard
              key={path.title}
              {...path}
              className={cn(
                "min-h-90 rounded-[1.75rem] border border-[#25223d]/12",
                backgrounds[index],
              )}
            />
          ))}
        </div>
        {childrenPage.readerSection.closing && (
          <Copy
            text={childrenPage.readerSection.closing}
            className="mx-auto mt-16 max-w-3xl text-center font-(family-name:--font-children) text-2xl font-semibold leading-tight text-[#25223d] sm:text-3xl"
          />
        )}
      </div>
    </section>
  );
}
