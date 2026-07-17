"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import Textarea from "@/components/ui/textarea";
import { homeContactServices } from "@/content/home";
import { contactDetails } from "@/content/global";
import { cn } from "@/utils/cn";
import { Mail, MessageSquareText } from "lucide-react";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";

import SectionHeading from "./section-heading";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = homeContactServices.map((service) => ({
  value: service,
  label: service,
}));

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const phoneDigits = values.phone.replace(/\D/g, "");
  const message = values.message.trim();

  if (name.length < 2) errors.name = "Enter your name using at least 2 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = "Enter a valid phone number with 7–15 digits.";
  }
  if (!values.service) errors.service = "Choose the service closest to your project.";
  if (message.length < 20) {
    errors.message = "Tell us a little more about the book (at least 20 characters).";
  }

  return errors;
}

function ContactField({
  id,
  label,
  required = true,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-xs font-semibold text-neutral-800">
          {label}
        </label>
        <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-400">
          {required ? "Required" : "Optional"}
        </span>
      </div>
      {children}
      <p
        id={`${id}-error`}
        aria-live="polite"
        className={cn(
          "mt-2 min-h-4 text-[11px] leading-4",
          error ? "text-rose-700" : "text-transparent",
        )}
      >
        {error ?? "No error"}
      </p>
    </div>
  );
}

const ContactSection = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const emailContact = contactDetails.find((detail) => detail.label === "Email");
  const contactEmail = emailContact?.value ?? "info@scriptorapublishing.com";

  const updateValue = (field: FieldName, value: string) => {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    setStatus("idle");
    if (touched[field]) setErrors(validate(nextValues));
  };

  const handleChange =
    (field: Exclude<FieldName, "service">) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateValue(field, event.target.value);
    };

  const markTouched = (field: FieldName) => {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      message: true,
    });

    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Scriptora project inquiry — ${values.service}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nService: ${values.service}\n\nProject notes:\n${values.message}`,
    );
    setStatus("ready");
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-section-title"
      className="relative overflow-hidden bg-primary-950 py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px)] bg-size-[32px_100%] opacity-70"
      />
      <div className="container relative">
        <div id="contact-section-title">
          <SectionHeading
            index="10"
            eyebrow="The manuscript desk"
            title="Bring us the draft. Tell us what it could become."
            description="Share the current shape of the project and the kind of help you need. The form validates each field before preparing your inquiry."
            inverted
          />
        </div>

        <div className="mt-14 grid border-y border-white/20 lg:mt-20 lg:grid-cols-12">
          <aside className="relative border-b border-white/20 bg-primary-900 p-6 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-10">
            <span
              aria-hidden="true"
              className="absolute inset-3 border border-white/10"
            />
            <div className="relative">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-200">
                Project folio / new inquiry
              </p>
              <h3 className="mt-10 max-w-sm font-heading text-4xl font-medium leading-[1.02] text-white sm:text-5xl">
                Start with the book, not the package.
              </h3>
              <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
                A useful first note explains what you are writing, where the manuscript stands, and what feels unresolved.
              </p>

              <ol className="mt-12 border-y border-white/15">
                {["Your details", "Project service", "Manuscript note"].map(
                  (item, index) => (
                    <li
                      key={item}
                      className="grid min-h-14 grid-cols-[28px_1fr] items-center gap-3 border-b border-white/15 last:border-b-0"
                    >
                      <span className="font-mono text-[8px] text-primary-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-white/75">
                        {item}
                      </span>
                    </li>
                  ),
                )}
              </ol>

              <a
                href={`mailto:${contactEmail}`}
                className="mt-12 flex items-center gap-3 border-t border-white/15 pt-5 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/70"
              >
                <span className="flex size-9 items-center justify-center border border-white/20">
                  <Mail aria-hidden="true" className="size-4" strokeWidth={1.7} />
                </span>
                <span className="break-all">{contactEmail}</span>
              </a>
            </div>
          </aside>

          <div className="bg-[#fcfaf7] p-5 text-neutral-900 sm:p-8 lg:col-span-8 lg:p-10 xl:p-12">
            <div className="flex items-start justify-between gap-6 border-b border-neutral-300 pb-5">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-700">
                  Manuscript inquiry form
                </p>
                <p className="mt-2 text-xs leading-5 text-neutral-500">
                  Required fields are checked inline before the inquiry is prepared.
                </p>
              </div>
              <MessageSquareText
                aria-hidden="true"
                className="size-6 text-primary-600"
                strokeWidth={1.5}
              />
            </div>

            <form noValidate onSubmit={handleSubmit} className="mt-8">
              <div className="grid gap-x-5 md:grid-cols-2">
                <ContactField id="contact-name" label="Name" error={touched.name ? errors.name : undefined}>
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange("name")}
                    onBlur={() => markTouched("name")}
                    invalid={Boolean(touched.name && errors.name)}
                    aria-describedby="contact-name-error"
                    placeholder="Your full name"
                  />
                </ContactField>

                <ContactField id="contact-email" label="Email" error={touched.email ? errors.email : undefined}>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    onBlur={() => markTouched("email")}
                    invalid={Boolean(touched.email && errors.email)}
                    aria-describedby="contact-email-error"
                    placeholder="you@example.com"
                  />
                </ContactField>

                <ContactField id="contact-phone" label="Phone number" error={touched.phone ? errors.phone : undefined}>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={handleChange("phone")}
                    onBlur={() => markTouched("phone")}
                    invalid={Boolean(touched.phone && errors.phone)}
                    aria-describedby="contact-phone-error"
                    placeholder="+1 555 000 0000"
                  />
                </ContactField>

                <ContactField id="contact-service" label="Service" error={touched.service ? errors.service : undefined}>
                  <Select
                    id="contact-service"
                    name="service"
                    value={values.service}
                    options={serviceOptions}
                    onValueChange={(value) => updateValue("service", value)}
                    onBlur={() => markTouched("service")}
                    invalid={Boolean(touched.service && errors.service)}
                    aria-describedby="contact-service-error"
                    aria-label="Choose a publishing service"
                    placeholder="Choose a service"
                  />
                </ContactField>
              </div>

              <ContactField id="contact-message" label="Tell us about the book" error={touched.message ? errors.message : undefined}>
                <Textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  maxLength={1200}
                  value={values.message}
                  onChange={handleChange("message")}
                  onBlur={() => markTouched("message")}
                  invalid={Boolean(touched.message && errors.message)}
                  aria-describedby="contact-message-error contact-message-count"
                  placeholder="What are you writing, where is the manuscript now, and what would you like help resolving?"
                />
              </ContactField>
              <p
                id="contact-message-count"
                className="-mt-4 text-right font-mono text-[8px] uppercase tracking-[0.13em] text-neutral-400"
              >
                {values.message.length} / 1200
              </p>

              <div className="mt-8 flex flex-col gap-4 border-t border-neutral-300 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-[11px] leading-5 text-neutral-500">
                  Submitting opens your email application with these project details prepared for {contactEmail}.
                </p>
                <Button type="submit" size="lg" className="sm:min-w-48">
                  Prepare inquiry
                </Button>
              </div>

              <p
                role="status"
                aria-live="polite"
                className={cn(
                  "mt-5 border-l-2 px-4 py-3 text-sm",
                  status === "ready"
                    ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                    : "hidden",
                )}
              >
                Your email application should now be open with the inquiry prepared. Review it, then send when ready.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
