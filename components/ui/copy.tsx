import { cn } from "@/utils/cn";

export default function Copy({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      {text
        .split(/\n\s*\n/)
        .filter(Boolean)
        .map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
    </div>
  );
}
