export const contactHero = {
  eyebrow: "Contact / The manuscript desk",
  title: "A good publishing conversation starts with the manuscript.",
  description:
    "Tell us what you are writing, where the work stands, and what you want the finished book to achieve. We will begin with the project itself—not a prebuilt package.",
  primaryAction: {
    label: "Open the project brief",
    href: "#contact-form",
  },
  secondaryAction: {
    label: "Email the studio",
    href: "mailto:info@scriptorapublishing.com",
  },
  notes: ["Working drafts welcome", "No-obligation introduction", "Scope before production"],
} as const;

export const contactLedger = {
  eyebrow: "Contact ledger",
  title: "One clear route into the studio.",
  description:
    "Email is the best place to begin. It keeps your manuscript context, publishing priorities, and questions together before a focused conversation.",
  entries: [
    {
      index: "01",
      label: "Email",
      value: "info@scriptorapublishing.com",
      description:
        "For manuscripts, project questions, and publishing enquiries.",
      href: "mailto:info@scriptorapublishing.com",
      icon: "mail",
    },
    {
      index: "02",
      label: "Phone",
      value: "Available after inquiry",
      description:
        "A focused call can be arranged once we understand the shape of the project.",
      href: false,
      icon: "phone",
    },
    {
      index: "03",
      label: "First contact",
      value: "Send a short project brief",
      description:
        "A few useful details are enough to begin—there is no need for a polished proposal.",
      href: "#contact-form",
      icon: "file",
    },
  ],
} as const;

export const contactBrief = {
  eyebrow: "Project folio / new inquiry",
  title: "Give us the useful version, not the perfect version.",
  description:
    "Your first note only needs enough context for us to understand the work and suggest a sensible next conversation.",
  checklist: [
    "What you are writing and who it is for",
    "The manuscript’s current stage",
    "The service or outcome you need",
    "Any timing, format, or launch priorities",
  ],
  formEyebrow: "Manuscript inquiry form",
  formDescription:
    "Required fields are checked inline before your inquiry is prepared.",
} as const;
