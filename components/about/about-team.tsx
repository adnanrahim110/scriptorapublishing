import Title from "@/components/ui/title";
import { aboutTeam } from "@/content/about";
import { cn } from "@/utils/cn";

const groupStyles = {
  Words: "bg-[#eee3d6] text-primary-900",
  Form: "bg-primary-900 text-white",
  Reach: "bg-neutral-800 text-white",
} as const;

export default function AboutTeam() {
  return (
    <section
      aria-labelledby="about-team-title"
      className="relative overflow-hidden border-b border-neutral-300 bg-[#f6f1ea] py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(56,38,24,.04)_1px,transparent_1px)] bg-size-[32px_100%]"
      />
      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
          <div className="lg:col-span-4 lg:pr-12">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[9px] uppercase tracking-[0.19em] text-primary-700">
                {aboutTeam.index} / {aboutTeam.eyebrow}
              </p>
              <Title
                id="about-team-title"
                as="h2"
                size="xl"
                weight="medium"
                highlight="One editorial center"
                className="mt-6"
              >
                {aboutTeam.title}
              </Title>
              <p className="mt-7 max-w-md text-sm leading-7 text-neutral-600">
                {aboutTeam.description}
              </p>
              <div className="mt-10 flex border-y border-neutral-300">
                {(["Words", "Form", "Reach"] as const).map((group) => (
                  <span
                    key={group}
                    className={cn(
                      "flex min-h-12 flex-1 items-center justify-center border-r px-2 font-mono text-[8px] uppercase tracking-[0.14em] last:border-r-0",
                      groupStyles[group],
                    )}
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-300 lg:col-span-8">
            {aboutTeam.disciplines.map((discipline) => (
              <article
                key={discipline.index}
                className="group/team-row grid gap-4 border-b border-neutral-300 py-6 sm:grid-cols-[48px_88px_1fr] sm:items-start sm:gap-5 sm:py-7 lg:grid-cols-[56px_104px_minmax(220px,.8fr)_1.2fr] lg:items-center"
              >
                <span className="font-mono text-[9px] tracking-[0.16em] text-primary-600">
                  {discipline.index}
                </span>
                <span
                  className={cn(
                    "w-fit px-2 py-1 font-mono text-[8px] uppercase tracking-[0.14em]",
                    groupStyles[discipline.group],
                  )}
                >
                  {discipline.group}
                </span>
                <h3 className="font-heading text-2xl font-medium leading-tight text-neutral-950 transition-transform duration-300 group-hover/team-row:translate-x-1 sm:col-start-3 lg:col-start-auto">
                  {discipline.title}
                </h3>
                <p className="text-sm leading-6 text-neutral-500 sm:col-start-3 lg:col-start-auto">
                  {discipline.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
