export type HomeHeroContent = {
  eyebrow: string;
  title: {
    lead: string;
    emphasis: string;
  };
  description: string;
  actions: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
  disciplines: readonly string[];
  media: {
    src: string;
    alt: string;
    width: number;
    height: number;
    index: string;
    plate: string;
    caption: string;
    stages: readonly {
      index: string;
      label: string;
      objectPosition: string;
    }[];
    detail: {
      label: string;
      caption: string;
      objectPosition: string;
    };
  };
};

export const homeHero = {
  eyebrow: "Scriptora / Independent publishing studio",
  title: {
    lead: "Your story, shaped with",
    emphasis: "editorial conviction.",
  },
  description:
    "Editing, design, production, distribution, and marketing—brought together as one considered publishing partnership.",
  actions: {
    primary: {
      label: "Start your book",
      href: "/contact-us",
    },
    secondary: {
      label: "Explore publishing services",
      href: "/book-publishing-services",
    },
  },
  disciplines: [
    "Editorial direction",
    "Design & production",
    "Launch & distribution",
  ],
  media: {
    src: "/imgs/hero-publishing-studio.png",
    alt: "A warm brown clothbound book standing among fanned cream manuscript pages in a publishing studio",
    width: 1122,
    height: 1402,
    index: "01",
    plate: "Plate 01 / The making of a book",
    caption: "From working pages to a finished volume.",
    stages: [
      {
        index: "I",
        label: "Manuscript",
        objectPosition: "20% center",
      },
      {
        index: "II",
        label: "Craft",
        objectPosition: "54% center",
      },
      {
        index: "III",
        label: "Volume",
        objectPosition: "84% center",
      },
    ],
    detail: {
      label: "Material study / Paper & cloth",
      caption: "Tactile choices, resolved with purpose.",
      objectPosition: "28% 76%",
    },
  },
} satisfies HomeHeroContent;

export const homeLedger = {
  eyebrow: "The publishing ledger",
  title: "A clear record of how the work is handled.",
  description:
    "Good publishing depends on trust before production begins. These are the principles that keep every Scriptora project considered, collaborative, and legible.",
  entries: [
    {
      index: "01",
      title: "One considered workflow",
      description: "Editorial, design, production, and release move as one plan.",
    },
    {
      index: "02",
      title: "Approvals at every stage",
      description: "Important decisions are reviewed before the work moves forward.",
    },
    {
      index: "03",
      title: "The author stays visible",
      description: "The process strengthens the manuscript without sanding away its voice.",
    },
    {
      index: "04",
      title: "Terms without fog",
      description: "Scope, deliverables, timing, rights, and costs are documented clearly.",
    },
  ],
} as const;

export const homeServiceChapters = [
  {
    index: "I",
    number: "01",
    shortLabel: "Shape",
    title: "Shape the manuscript",
    description:
      "Find the book inside the draft, protect its voice, and bring every page to editorial readiness.",
    services: [
      {
        label: "Ghostwriting",
        href: "/ghostwriting-services",
        note: "Ideas, interviews, and notes formed into a complete manuscript.",
      },
      {
        label: "Editing & proofreading",
        href: "/book-editing-and-proofreading-services",
        note: "Structural judgment, line-level clarity, and a precise final review.",
      },
    ],
  },
  {
    index: "II",
    number: "02",
    shortLabel: "Make",
    title: "Make the volume",
    description:
      "Turn the resolved manuscript into a tactile, readable system across print, screen, and sound.",
    services: [
      {
        label: "Book cover design",
        href: "/book-cover-design-services",
        note: "A distinctive visual promise designed for shelf and thumbnail.",
      },
      {
        label: "Book formatting",
        href: "/book-formatting-services",
        note: "Interior rhythm, hierarchy, and production-ready page architecture.",
      },
      {
        label: "eBook creation",
        href: "/e-book-creation-services",
        note: "Responsive digital editions prepared for contemporary reading devices.",
      },
      {
        label: "Audiobook production",
        href: "/audiobook-production-services",
        note: "A considered path from written voice to finished listening experience.",
      },
    ],
  },
  {
    index: "III",
    number: "03",
    shortLabel: "Release",
    title: "Release the work",
    description:
      "Prepare the finished book for discovery with publishing, distribution, and audience-building support.",
    services: [
      {
        label: "Book publishing",
        href: "/book-publishing-services",
        note: "Production details and publication setup coordinated as one release.",
      },
      {
        label: "Book distribution",
        href: "/book-distribution-services",
        note: "Print and digital availability prepared for the channels in scope.",
      },
      {
        label: "Book marketing",
        href: "/book-marketing-services",
        note: "Launch materials and campaigns shaped around the book's real audience.",
      },
      {
        label: "Author website",
        href: "/author-website-design-services",
        note: "A lasting home for the book, the author, and the work that follows.",
      },
    ],
  },
] as const;

export const homePortfolio = {
  eyebrow: "Selected volumes",
  title: "A living shelf of books with their own gravity.",
  description:
    "Move through the collection like a reading table: bring a volume forward, then inspect the craft assembled around it.",
  items: [
    {
      index: "01",
      title: "The Cartographer's Orchard",
      category: "Literary fiction",
      format: "Paperback / eBook",
      services: ["Editorial", "Cover", "Interior"],
      note: "A quiet, place-led novel translated into a restrained typographic system.",
      edition: "Concept edition",
      palette: {
        cover: "#4d2f22",
        accent: "#d8b68d",
        ink: "#fff8ef",
      },
    },
    {
      index: "02",
      title: "Small Weather",
      category: "Poetry",
      format: "Hardcover / eBook",
      services: ["Editing", "Art direction", "Typesetting"],
      note: "Short poems given generous pacing, field-note details, and a tactile cover language.",
      edition: "Concept edition",
      palette: {
        cover: "#ddd2be",
        accent: "#8e4e2f",
        ink: "#2c211a",
      },
    },
    {
      index: "03",
      title: "The Lantern Atlas",
      category: "Children's fiction",
      format: "Picture book",
      services: ["Illustration direction", "Cover", "Layout"],
      note: "A warm visual world designed to reward both first reading and return visits.",
      edition: "Concept edition",
      palette: {
        cover: "#96643a",
        accent: "#f0d6a4",
        ink: "#fffaf0",
      },
    },
    {
      index: "04",
      title: "Unquiet Hours",
      category: "Memoir",
      format: "Paperback / audiobook",
      services: ["Developmental edit", "Cover", "Audio"],
      note: "An intimate narrative shaped with clarity while preserving its original emotional register.",
      edition: "Concept edition",
      palette: {
        cover: "#252c2d",
        accent: "#b77a4f",
        ink: "#f5eee5",
      },
    },
    {
      index: "05",
      title: "Built of Salt",
      category: "Narrative nonfiction",
      format: "Hardcover / eBook",
      services: ["Line edit", "Design", "Launch assets"],
      note: "Research-heavy material organized into a confident, highly navigable reading experience.",
      edition: "Concept edition",
      palette: {
        cover: "#e9e0d1",
        accent: "#263d3a",
        ink: "#2b2924",
      },
    },
  ],
} as const;

export const homeProcess = {
  eyebrow: "Manuscript to marketplace",
  title: "The book resolves one decision at a time.",
  description:
    "A staged publishing path keeps the author close to the work and gives every specialist a clear moment to contribute.",
  steps: [
    {
      index: "01",
      title: "Conversation & review",
      label: "The brief",
      description:
        "We understand the manuscript, the intended reader, the current stage, and what a successful outcome should mean.",
    },
    {
      index: "02",
      title: "Editorial direction",
      label: "The margins",
      description:
        "The manuscript is strengthened at the appropriate depth, with decisions and feedback kept visible throughout.",
    },
    {
      index: "03",
      title: "Design & production",
      label: "The form",
      description:
        "Cover, interior, and format are developed as one coherent reading and buying experience.",
    },
    {
      index: "04",
      title: "Publishing preparation",
      label: "The proof",
      description:
        "Final files, metadata, format requirements, and release details are checked before publication.",
    },
    {
      index: "05",
      title: "Distribution & launch",
      label: "The audience",
      description:
        "The finished work is prepared for its selected channels with a practical foundation for discovery.",
    },
  ],
} as const;

export const homeRights = {
  eyebrow: "The fine print, enlarged",
  title: "Your voice. Your name. Your final approval.",
  description:
    "Scriptora guides the editorial and production work; the author remains present in the decisions that define the book.",
  authorKeeps: [
    "The character of the original voice",
    "Visibility into major creative decisions",
    "Final approval at agreed milestones",
  ],
  studioHandles: [
    "Editorial and production coordination",
    "Specialist briefs, files, and quality checks",
    "Release preparation within the agreed scope",
  ],
  note: "Copyright, royalties, platform ownership, deliverables, and usage terms are documented in the project agreement before production begins.",
} as const;

export const homeDistribution = {
  eyebrow: "Distribution constellation",
  title: "One story, prepared for more than one reading life.",
  description:
    "Every route begins with the finished master and expands only into the formats and channels that make sense for the book.",
  routes: [
    {
      index: "01",
      title: "Print",
      detail: "Paperback, hardcover, and print-on-demand preparation.",
      position: "left",
    },
    {
      index: "02",
      title: "Digital",
      detail: "Responsive eBook files, metadata, and storefront readiness.",
      position: "top",
    },
    {
      index: "03",
      title: "Audio",
      detail: "Narration, production, mastering, and release preparation.",
      position: "right",
    },
    {
      index: "04",
      title: "Discovery",
      detail: "Retail metadata, launch assets, and audience-facing materials.",
      position: "bottom",
    },
  ],
  channels: [
    "Online retailers",
    "Print networks",
    "Digital libraries",
    "Audio storefronts",
  ],
} as const;

export const homeMarginalia = {
  eyebrow: "Author marginalia",
  title: "The useful proof is always specific.",
  description:
    "This composition is ready for approved author testimony. The demonstration notes below show the intended rhythm without presenting them as verified reviews.",
  notes: [
    {
      index: "01",
      quote: "I could see the book becoming clearer without losing the voice that made it mine.",
      credit: "Illustrative author note",
      meta: "Editorial partnership",
    },
    {
      index: "02",
      quote: "Every stage had a reason, a decision, and a clear next step.",
      credit: "Illustrative author note",
      meta: "Publishing process",
    },
    {
      index: "03",
      quote: "The finished volume felt considered from the first page to the final detail.",
      credit: "Illustrative author note",
      meta: "Design & production",
    },
  ],
} as const;

export const homeFaqs = [
  {
    question: "What stage should my manuscript be in?",
    answer:
      "It can begin as a complete manuscript, a working draft, or a developed idea. The first review determines which editorial and production stages are genuinely useful.",
  },
  {
    question: "How is a publishing timeline decided?",
    answer:
      "Timing depends on manuscript length, editorial depth, formats, approvals, and release needs. A staged schedule is agreed before production begins.",
  },
  {
    question: "How is the project priced?",
    answer:
      "Pricing is based on the work required rather than a one-size package. The written scope identifies deliverables, review stages, timing, and cost.",
  },
  {
    question: "What happens to my rights and royalties?",
    answer:
      "Copyright, royalties, platform ownership, and file usage are addressed explicitly in the project agreement. Scriptora can walk you through each term before you commit.",
  },
  {
    question: "Can you prepare print, eBook, and audiobook editions?",
    answer:
      "Yes. The right combination depends on the book and the intended audience, so formats are selected as part of the publishing plan rather than added automatically.",
  },
  {
    question: "Can Scriptora support the book after publication?",
    answer:
      "Post-publication support can include distribution guidance, marketing assets, campaign work, and an author website when those services are included in scope.",
  },
] as const;

export const homeContactServices = [
  "Book publishing",
  "Ghostwriting",
  "Editing & proofreading",
  "Book cover design",
  "Book formatting",
  "eBook creation",
  "Audiobook production",
  "Book distribution",
  "Book marketing",
  "Author website design",
] as const;
