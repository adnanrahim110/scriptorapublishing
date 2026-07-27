export const aboutHero = {
  eyebrow: "About Scriptora / The publishing studio",
  title: "The right team should make the book more itself.",
  description:
    "Scriptora brings editorial judgment, visual craft, production detail, and publishing strategy around one manuscript—so authors can move from promising draft to considered book without losing the voice that began it.",
  primaryAction: {
    label: "Meet the studio",
    href: "#studio-story",
  },
  secondaryAction: {
    label: "Discuss your book",
    href: "/contact-us",
  },
  scope: ["Editorial", "Design", "Production", "Distribution"],
} as const;

export const aboutStory = {
  index: "01",
  eyebrow: "Why Scriptora exists",
  title: "Publishing should feel joined up.",
  lead:
    "A book can pass through many capable hands and still feel disconnected. The editorial direction says one thing, the cover says another, and the production decisions arrive without a shared point of view.",
  body:
    "Scriptora was shaped around a more coherent model: begin with the manuscript, agree on what the book needs, then coordinate every specialist around that same brief. The work remains collaborative, but the experience stays clear.",
  contrast: [
    {
      label: "What stays",
      title: "The author’s intent",
      description:
        "Voice, audience, creative priorities, and final approvals remain visible throughout the work.",
    },
    {
      label: "What changes",
      title: "The book’s readiness",
      description:
        "Structure, language, design, files, metadata, and release preparation become more resolved at every stage.",
    },
  ],
  note:
    "We are not here to standardize the story. We are here to give it the editorial and publishing form it deserves.",
} as const;

export const aboutTeam = {
  index: "02",
  eyebrow: "The specialist index",
  title: "Different disciplines. One editorial center.",
  description:
    "Each project draws on the expertise its manuscript and publishing plan require. The roles change with the book; the shared brief does not.",
  disciplines: [
    {
      index: "01",
      group: "Words",
      title: "Developmental editors",
      description:
        "Structure, pacing, argument, character, and reader experience considered at manuscript level.",
    },
    {
      index: "02",
      group: "Words",
      title: "Line editors & copyeditors",
      description:
        "Language refined for clarity, consistency, rhythm, and correctness without flattening the author’s voice.",
    },
    {
      index: "03",
      group: "Words",
      title: "Proofreaders & quality readers",
      description:
        "Late-stage text, layout, and production details checked before files move toward publication.",
    },
    {
      index: "04",
      group: "Form",
      title: "Cover designers & art directors",
      description:
        "A visual position developed around genre, audience, tone, and the promise made by the book.",
    },
    {
      index: "05",
      group: "Form",
      title: "Interior designers & typesetters",
      description:
        "Page systems built for legibility, hierarchy, pacing, and the particular demands of the format.",
    },
    {
      index: "06",
      group: "Form",
      title: "Digital & audio producers",
      description:
        "eBook and audiobook editions prepared as distinct reading and listening experiences.",
    },
    {
      index: "07",
      group: "Reach",
      title: "Publishing coordinators",
      description:
        "Schedules, approvals, deliverables, and specialist handoffs kept visible from brief to final files.",
    },
    {
      index: "08",
      group: "Reach",
      title: "Distribution specialists",
      description:
        "Formats, metadata, platform requirements, and release routes aligned with the publishing plan.",
    },
    {
      index: "09",
      group: "Reach",
      title: "Marketing & author-brand strategists",
      description:
        "Audience-facing materials shaped around the real book, its readers, and the author’s wider body of work.",
    },
  ],
} as const;

export const aboutValues = {
  index: "03",
  eyebrow: "What guides the work",
  title: "Principles that survive the deadline.",
  description:
    "The tools, formats, and routes to market will keep changing. The standards behind a good publishing partnership should not.",
  principles: [
    {
      index: "01",
      title: "The author is a collaborator",
      description:
        "We listen for intent before prescribing a solution and keep meaningful decisions close to the person who wrote the work.",
    },
    {
      index: "02",
      title: "Clarity belongs in the process",
      description:
        "Scope, milestones, responsibilities, costs, and approvals should be understandable before production begins.",
    },
    {
      index: "03",
      title: "Craft outranks shortcuts",
      description:
        "Efficiency matters when it removes friction—not when it removes judgment, review, or the details readers feel.",
    },
    {
      index: "04",
      title: "Every voice deserves attention",
      description:
        "Genre, background, format, and audience may change; curiosity, respect, and editorial care remain constant.",
    },
    {
      index: "05",
      title: "Innovation must be useful",
      description:
        "New tools earn their place when they improve communication, quality, access, or the reading experience.",
    },
    {
      index: "06",
      title: "Accountability is shared",
      description:
        "We make responsibilities visible, raise issues early, and treat quality control as part of the work—not a final rescue.",
    },
  ],
} as const;

export const aboutCollaboration = {
  index: "05",
  eyebrow: "The working relationship",
  title: "One brief keeps every specialist reading the same book.",
  description:
    "A coordinated publishing experience does not mean fewer perspectives. It means every perspective answers the same creative and practical direction.",
  stages: [
    {
      index: "01",
      label: "Listen",
      title: "The manuscript comes first",
      description:
        "We begin with the work, the intended reader, the author’s priorities, and the current publishing reality.",
    },
    {
      index: "02",
      label: "Align",
      title: "The scope becomes visible",
      description:
        "Deliverables, specialists, review stages, decisions, and dependencies are organized around one agreed plan.",
    },
    {
      index: "03",
      label: "Make",
      title: "Progress stays legible",
      description:
        "Editorial, design, and production work moves through named milestones with room for informed author feedback.",
    },
    {
      index: "04",
      label: "Release",
      title: "The files meet the promise",
      description:
        "Final quality checks connect the original brief to the book, formats, metadata, and launch materials being delivered.",
    },
  ],
} as const;

export const aboutPromise = {
  eyebrow: "The Scriptora promise",
  title: "Your book will never be treated like a slot in a production line.",
  description:
    "It will be read for what it is, planned for what it needs, and shaped through a publishing process that keeps authorship visible.",
  primaryAction: {
    label: "Start a publishing conversation",
    href: "/contact-us",
  },
  secondaryAction: {
    label: "Explore our services",
    href: "/#services",
  },
} as const;
