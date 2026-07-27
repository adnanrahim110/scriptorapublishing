import Title from "@/components/ui/title";
import { contactLedger } from "@/content/contact";
import { ArrowDownRight, FileText, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  mail: <Mail aria-hidden="true" className="size-5" strokeWidth={1.6} />,
  phone: <Phone aria-hidden="true" className="size-5" strokeWidth={1.6} />,
  file: <FileText aria-hidden="true" className="size-5" strokeWidth={1.6} />,
};

export default function ContactLedger() {
  return (
    <section
      aria-labelledby="contact-ledger-title"
      className="bg-[#fcfaf7] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[9px] uppercase tracking-[0.19em] text-primary-700">
              {contactLedger.eyebrow}
            </p>
            <Title
              id="contact-ledger-title"
              as="h2"
              size="xl"
              weight="medium"
              highlight="clear route"
              className="mt-5 max-w-3xl"
            >
              {contactLedger.title}
            </Title>
          </div>
          <p className="max-w-xl text-sm leading-7 text-neutral-600 lg:col-span-5">
            {contactLedger.description}
          </p>
        </div>

        <div className="mt-12 grid border-y border-neutral-300 lg:mt-16 lg:grid-cols-3">
          {contactLedger.entries.map((entry) => {
            const content = (
              <>
                <div className="flex items-start justify-between gap-5">
                  <span className="font-mono text-[9px] tracking-[0.17em] text-primary-600">
                    {entry.index}
                  </span>
                  <span className="flex size-10 items-center justify-center border border-neutral-300 text-primary-700">
                    {icons[entry.icon]}
                  </span>
                </div>
                <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-500">
                  {entry.label}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-medium leading-tight text-neutral-950 sm:text-[28px]">
                  {entry.value}
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-500">
                  {entry.description}
                </p>
                {entry.href && (
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-primary-700">
                    Open route
                    <ArrowDownRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover/contact-route:translate-x-1 group-hover/contact-route:translate-y-1"
                    />
                  </span>
                )}
              </>
            );

            return (
              <article
                key={entry.index}
                className="border-b border-neutral-300 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                {entry.href ? (
                  <a
                    href={entry.href}
                    className="group/contact-route block min-h-full p-6 transition-colors duration-300 hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400/70 sm:p-8 lg:p-10"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="min-h-full p-6 sm:p-8 lg:p-10">
                    {content}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
