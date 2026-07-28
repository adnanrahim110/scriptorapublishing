import Button from "@/components/ui/button";
import Title from "@/components/ui/title";
import type { Metadata } from "next";
import { BookOpenText, Check, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Scriptora Publishing",
  description:
    "Your publishing inquiry has been received by the Scriptora manuscript desk.",
  robots: {
    index: false,
    follow: true,
  },
};

const nextSteps = [
  {
    index: "01",
    title: "We read the brief",
    description:
      "The manuscript desk reviews the service, stage, and priorities you shared.",
  },
  {
    index: "02",
    title: "We shape the response",
    description:
      "We identify the most useful next conversation rather than sending a generic package.",
  },
  {
    index: "03",
    title: "We reply by email",
    description:
      "A member of the studio will respond using the email address in your inquiry.",
  },
] as const;

export default function ThankyouPage() {
  return (
    <main className="relative overflow-hidden bg-[#f5efe7] pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-32 lg:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(56,38,24,.055)_1px,transparent_1px)] bg-size-[32px_100%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-28 size-96 rounded-full border border-primary-700/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-48 size-64 rounded-full border border-primary-700/10"
      />

      <div className="container relative">
        <section
          aria-labelledby="thankyou-title"
          className="grid border-y border-neutral-300 bg-[#fcfaf7] shadow-[14px_16px_0_rgba(75,48,28,.1)] lg:grid-cols-12"
        >
          <div className="relative px-5 py-12 sm:px-9 sm:py-16 lg:col-span-7 lg:border-r lg:px-12 lg:py-20 xl:px-16">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 border border-primary-900/8"
            />
            <div className="relative">
              <div className="flex items-center justify-between gap-5 border-y border-neutral-300 py-4">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.19em] text-primary-700">
                  Inquiry received / 001
                </p>
                <span className="flex size-9 items-center justify-center border border-emerald-700 bg-emerald-50 text-emerald-700">
                  <Check aria-hidden="true" className="size-4" strokeWidth={2} />
                </span>
              </div>

              <Title
                id="thankyou-title"
                as="h1"
                size="display"
                weight="medium"
                highlight="on our desk"
                className="mt-10 max-w-3xl"
              >
                Thank you. Your book is now on our desk.
              </Title>
              <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                Your project inquiry has been sent successfully. We will review
                what you shared and reply with a thoughtful next step.
              </p>

              <div className="mt-10 flex flex-col gap-4 border-t border-neutral-300 pt-7 sm:flex-row sm:items-center">
                <Button
                  href="/"
                  size="lg"
                  icon={<Home aria-hidden="true" strokeWidth={1.7} />}
                >
                  Return to homepage
                </Button>
                <p className="max-w-xs text-[11px] leading-5 text-neutral-500">
                  A copy is not sent automatically, so keep an eye on the inbox
                  associated with your inquiry.
                </p>
              </div>
            </div>
          </div>

          <aside className="relative bg-primary-950 p-5 text-white sm:p-8 lg:col-span-5 lg:p-10 xl:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 border border-white/10"
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-5 border-b border-white/15 pb-5">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-200">
                    What happens next
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/45">
                    Scriptora / manuscript desk
                  </p>
                </div>
                <BookOpenText
                  aria-hidden="true"
                  className="size-6 text-primary-300"
                  strokeWidth={1.4}
                />
              </div>

              <ol className="mt-7">
                {nextSteps.map((step) => (
                  <li
                    key={step.index}
                    className="grid grid-cols-[34px_1fr] gap-4 border-b border-white/15 py-6 first:pt-2 last:border-b-0"
                  >
                    <span className="font-mono text-[9px] text-primary-300">
                      {step.index}
                    </span>
                    <div>
                      <h2 className="font-heading text-2xl font-medium text-white">
                        {step.title}
                      </h2>
                      <p className="mt-2 text-xs leading-5 text-white/55">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
