import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import { contactHero } from "@/content/contact";
import { BookOpenText, MailOpen } from "lucide-react";

export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-title"
      className="relative overflow-hidden border-b border-neutral-300 bg-[#f5efe7] pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(56,38,24,.055)_1px,transparent_1px)] bg-size-[32px_100%]"
      />
      <div className="container relative">
        <div className="grid border-x border-neutral-300 lg:grid-cols-12">
          <div className="px-5 pb-14 sm:px-8 lg:col-span-7 lg:border-r lg:px-10 lg:pb-16 xl:px-14">
            <div className="flex items-center justify-between gap-6 border-y border-neutral-300 py-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.19em] text-primary-700">
                {contactHero.eyebrow}
              </p>
              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-400">
                Folio / 001
              </span>
            </div>

            <Title
              id="contact-hero-title"
              as="h1"
              size="display"
              weight="medium"
              highlight="publishing conversation"
              className="mt-10 max-w-3xl"
            >
              {contactHero.title}
            </Title>
            <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              {contactHero.description}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href={contactHero.primaryAction.href} size="lg">
                {contactHero.primaryAction.label}
              </Button>
              <Button
                href={contactHero.secondaryAction.href}
                size="lg"
                variant="outline"
                tone="secondary"
                icon={<MailOpen aria-hidden="true" strokeWidth={1.7} />}
              >
                {contactHero.secondaryAction.label}
              </Button>
            </div>

            <ul className="mt-12 grid border-y border-neutral-300 sm:grid-cols-3">
              {contactHero.notes.map((note, index) => (
                <li
                  key={note}
                  className="grid min-h-14 grid-cols-[28px_1fr] items-center gap-2 border-b border-neutral-300 px-2 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <span className="font-mono text-[8px] text-primary-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-neutral-600">
                    {note}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-120 overflow-hidden border-t border-neutral-300 px-5 py-10 sm:px-8 lg:col-span-5 lg:min-h-0 lg:border-t-0 lg:p-10 xl:p-14">
            <span
              aria-hidden="true"
              className="absolute -right-16 top-10 size-56 rounded-full border border-primary-700/15"
            />
            <span
              aria-hidden="true"
              className="absolute -right-8 top-18 size-40 rounded-full border border-primary-700/15"
            />

            <div className="relative mx-auto h-full max-w-md">
              <div
                aria-hidden="true"
                className="absolute inset-x-8 inset-y-7 rotate-3 border border-primary-900/15 bg-primary-100"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-5 inset-y-4 -rotate-2 border border-primary-900/20 bg-[#fbf7f1]"
              />
              <article className="relative flex h-full min-h-96 flex-col border border-neutral-800 bg-[#fcfaf7] p-6 shadow-[10px_12px_0_rgba(75,48,28,.12)] sm:p-8">
                <div className="flex items-start justify-between gap-6 border-b border-neutral-300 pb-5">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-primary-700">
                      Correspondence plate
                    </p>
                    <p className="mt-2 text-xs text-neutral-500">
                      Scriptora / manuscript desk
                    </p>
                  </div>
                  <span className="flex size-10 items-center justify-center border border-primary-700 text-primary-700">
                    <BookOpenText
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>

                <ol className="my-auto py-8">
                  {[
                    ["01", "The work", "What are you writing?"],
                    ["02", "The stage", "How far has it developed?"],
                    ["03", "The need", "What should happen next?"],
                  ].map(([index, label, prompt]) => (
                    <li
                      key={index}
                      className="grid grid-cols-[36px_1fr] gap-4 border-b border-neutral-300 py-5 first:border-t"
                    >
                      <span className="font-mono text-[9px] text-primary-600">
                        {index}
                      </span>
                      <span>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-800">
                          {label}
                        </span>
                        <span className="mt-1 block text-sm text-neutral-500">
                          {prompt}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="flex items-end justify-between gap-4 border-t border-neutral-300 pt-5">
                  <p className="max-w-48 font-heading text-xl font-medium leading-tight text-neutral-900">
                    Begin with what is true now.
                  </p>
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-400">
                    Open folio
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
