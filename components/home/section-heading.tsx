import Title from "@/components/ui/title";
import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
  className?: string;
};

const SectionHeading = ({
  index,
  eyebrow,
  title,
  description,
  inverted = false,
  className,
}: SectionHeadingProps) => {
  return (
    <header
      className={cn(
        "grid gap-6 border-t pt-4 lg:grid-cols-12 lg:gap-8",
        inverted ? "border-white/20" : "border-neutral-300",
        className,
      )}
    >
      <div className="flex items-start gap-3 lg:col-span-3">
        <span
          aria-hidden="true"
          className={cn(
            "mt-2 block h-px w-8 shrink-0",
            inverted ? "bg-primary-300" : "bg-primary-600",
          )}
        />
        <div>
          <p
            className={cn(
              "font-mono text-[9px] font-semibold uppercase tracking-[0.18em]",
              inverted ? "text-primary-200" : "text-primary-700",
            )}
          >
            Plate {index}
          </p>
          <p
            className={cn(
              "mt-1 font-mono text-[8px] uppercase tracking-[0.16em]",
              inverted ? "text-white/45" : "text-neutral-500",
            )}
          >
            {eyebrow}
          </p>
        </div>
      </div>

      <div className="lg:col-span-9 lg:grid lg:grid-cols-9 lg:gap-8">
        <Title
          as="h2"
          size="display"
          tone={inverted ? "inverse" : "ink"}
          weight="medium"
          tracking="editorial"
          leading="tight"
          className={cn(
            "max-w-3xl text-[clamp(2.15rem,4.8vw,4.75rem)]",
            description ? "lg:col-span-6" : "lg:col-span-9",
          )}
        >
          {title}
        </Title>
        {description && (
          <p
            className={cn(
              "mt-5 max-w-xl text-sm leading-6 sm:text-base sm:leading-7 lg:col-span-3 lg:mt-1",
              inverted ? "text-white/65" : "text-neutral-600",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </header>
  );
};

export default SectionHeading;
