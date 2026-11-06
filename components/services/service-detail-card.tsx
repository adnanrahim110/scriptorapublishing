import Copy from "@/components/ui/copy";
import { cn } from "@/utils/cn";

export default function ServiceDetailCard({
  title,
  description,
  inverted = false,
  className,
}: {
  title: string;
  description?: string;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "min-w-0 border-b p-6 sm:p-8",
        inverted ? "border-white/20" : "border-neutral-300",
        className,
      )}
    >
      <h3
        className={cn(
          "font-heading text-2xl font-medium leading-tight sm:text-3xl",
          inverted ? "text-white" : "text-neutral-950",
        )}
      >
        {title}
      </h3>
      {description && (
        <Copy
          text={description}
          className={cn(
            "mt-4 text-sm leading-6",
            inverted ? "text-white/80" : "text-neutral-600",
          )}
        />
      )}
    </article>
  );
}
