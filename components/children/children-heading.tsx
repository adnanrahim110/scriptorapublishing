import Copy from "@/components/ui/copy";
import { cn } from "@/utils/cn";

export default function ChildrenHeading({
  id,
  title,
  description,
  inverted = false,
  className,
}: {
  id: string;
  title: string;
  description?: string;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <header className={cn("max-w-3xl", className)}>
      <h2
        id={id}
        className={cn(
          "font-(family-name:--font-children) text-4xl font-semibold leading-tight tracking-[-.035em] sm:text-5xl lg:text-6xl",
          inverted ? "text-white" : "text-[#25223d]",
        )}
      >
        {title}
      </h2>
      {description && (
        <Copy
          text={description}
          className={cn(
            "mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8",
            inverted ? "text-white/80" : "text-[#625969]",
          )}
        />
      )}
    </header>
  );
}
