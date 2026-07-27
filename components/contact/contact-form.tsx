"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import Textarea from "@/components/ui/textarea";
import { contactDetails } from "@/content/global";
import { homeContactServices } from "@/content/home";
import { cn } from "@/utils/cn";
import { MessageSquareText } from "lucide-react";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;

type ContactFormProps = {
  idPrefix: string;
  eyebrow?: string;
  description?: string;
  submitLabel?: string;
  className?: string;
};

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

  if (name.length < 2) {
    errors.name = "Enter your name using at least 2 characters.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = "Enter a valid phone number with 7–15 digits.";
  }
  if (!values.service) {
    errors.service = "Choose the service closest to your project.";
  }
  if (message.length < 20) {
    errors.message =
      "Tell us a little more about the book (at least 20 characters).";
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

export default function ContactForm({
  idPrefix,
  eyebrow = "Manuscript inquiry form",
  description = "Required fields are checked inline before the inquiry is prepared.",
  submitLabel = "Prepare inquiry",
  className,
}: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<FieldName, boolean>>
  >({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const emailContact = contactDetails.find((detail) => detail.label === "Email");
  const contactEmail = emailContact?.value ?? "info@scriptorapublishing.com";

  const fieldId = (field: FieldName) => `${idPrefix}-${field}`;

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

    const subject = encodeURIComponent(
      `Scriptora project inquiry — ${values.service}`,
    );
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nService: ${values.service}\n\nProject notes:\n${values.message}`,
    );

    setStatus("ready");
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className={cn("bg-[#fcfaf7] text-neutral-900", className)}>
      <div className="flex items-start justify-between gap-6 border-b border-neutral-300 pb-5">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary-700">
            {eyebrow}
          </p>
          <p className="mt-2 max-w-lg text-xs leading-5 text-neutral-500">
            {description}
          </p>
        </div>
        <MessageSquareText
          aria-hidden="true"
          className="size-6 shrink-0 text-primary-600"
          strokeWidth={1.5}
        />
      </div>

      <form
        id={`${idPrefix}-form`}
        noValidate
        onSubmit={handleSubmit}
        className="mt-8"
      >
        <div className="grid gap-x-5 md:grid-cols-2">
          <ContactField
            id={fieldId("name")}
            label="Name"
            error={touched.name ? errors.name : undefined}
          >
            <Input
              id={fieldId("name")}
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={handleChange("name")}
              onBlur={() => markTouched("name")}
              invalid={Boolean(touched.name && errors.name)}
              aria-describedby={`${fieldId("name")}-error`}
              placeholder="Your full name"
            />
          </ContactField>

          <ContactField
            id={fieldId("email")}
            label="Email"
            error={touched.email ? errors.email : undefined}
          >
            <Input
              id={fieldId("email")}
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange("email")}
              onBlur={() => markTouched("email")}
              invalid={Boolean(touched.email && errors.email)}
              aria-describedby={`${fieldId("email")}-error`}
              placeholder="you@example.com"
            />
          </ContactField>

          <ContactField
            id={fieldId("phone")}
            label="Phone number"
            error={touched.phone ? errors.phone : undefined}
          >
            <Input
              id={fieldId("phone")}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={handleChange("phone")}
              onBlur={() => markTouched("phone")}
              invalid={Boolean(touched.phone && errors.phone)}
              aria-describedby={`${fieldId("phone")}-error`}
              placeholder="+1 555 000 0000"
            />
          </ContactField>

          <ContactField
            id={fieldId("service")}
            label="Service"
            error={touched.service ? errors.service : undefined}
          >
            <Select
              id={fieldId("service")}
              name="service"
              value={values.service}
              options={serviceOptions}
              onValueChange={(value) => updateValue("service", value)}
              onBlur={() => markTouched("service")}
              invalid={Boolean(touched.service && errors.service)}
              aria-describedby={`${fieldId("service")}-error`}
              aria-label="Choose a publishing service"
              placeholder="Choose a service"
            />
          </ContactField>
        </div>

        <ContactField
          id={fieldId("message")}
          label="Tell us about the book"
          error={touched.message ? errors.message : undefined}
        >
          <Textarea
            id={fieldId("message")}
            name="message"
            rows={6}
            maxLength={1200}
            value={values.message}
            onChange={handleChange("message")}
            onBlur={() => markTouched("message")}
            invalid={Boolean(touched.message && errors.message)}
            aria-describedby={`${fieldId("message")}-error ${fieldId("message")}-count`}
            placeholder="What are you writing, where is the manuscript now, and what would you like help resolving?"
          />
        </ContactField>
        <p
          id={`${fieldId("message")}-count`}
          className="-mt-4 text-right font-mono text-[8px] uppercase tracking-[0.13em] text-neutral-400"
        >
          {values.message.length} / 1200
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-neutral-300 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[11px] leading-5 text-neutral-500">
            Submitting opens your email application with these project details
            prepared for {contactEmail}.
          </p>
          <Button type="submit" size="lg" className="sm:min-w-48">
            {submitLabel}
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
          Your email application should now be open with the inquiry prepared.
          Review it, then send when ready.
        </p>
      </form>
    </div>
  );
}
