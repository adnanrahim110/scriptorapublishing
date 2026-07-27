export type ServiceOutcome = {
  title: string;
  description: string;
};

export type ServiceStep = {
  title: string;
  label: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  name: string;
  code: string;
  eyebrow: string;
  heroTitle: string;
  highlight: string;
  description: string;
  introduction: string;
  artifacts: readonly [string, string, string];
  outcomesTitle: string;
  outcomesDescription: string;
  outcomes: readonly ServiceOutcome[];
  processTitle: string;
  processDescription: string;
  process: readonly ServiceStep[];
  deliverables: readonly string[];
  bestFor: readonly string[];
  faqs: readonly ServiceFaq[];
  related: readonly string[];
};

const serviceAssurances = [
  {
    title: "Scope before production",
    description:
      "Deliverables, review points, responsibilities, timing, and costs are recorded before the work begins.",
  },
  {
    title: "Approval at named milestones",
    description:
      "The author remains present for the decisions that materially shape the manuscript, design, files, or release.",
  },
  {
    title: "Rights written clearly",
    description:
      "Ownership, licensing, platform access, royalties, and file usage are addressed in the applicable project agreement.",
  },
] as const;

export { serviceAssurances };

export const serviceDetails = {
  "childrens-book-publishing": {
    slug: "childrens-book-publishing",
    name: "Children’s Book Publishing",
    code: "CH / 01",
    eyebrow: "Publishing for young readers",
    heroTitle: "Build a book children ask to read one more time.",
    highlight: "one more time",
    description:
      "Editorial direction, illustration planning, page design, production, and release preparation shaped around the age, attention, and imagination of the intended reader.",
    introduction:
      "A children’s book is a reading experience shared by words, pictures, pacing, and the person turning the page. Scriptora coordinates those parts as one narrative system rather than treating illustration and text as separate jobs.",
    artifacts: ["Story map", "Visual sequence", "Reading edition"],
    outcomesTitle: "A small book with a complete publishing architecture.",
    outcomesDescription:
      "Every decision is tested against the child, the reading context, and the promise made by the story.",
    outcomes: [
      {
        title: "Age-aware editorial direction",
        description:
          "Language, length, emotional beats, repetition, and complexity considered for the intended reading stage.",
      },
      {
        title: "Visual storytelling plan",
        description:
          "Page turns, illustration moments, character continuity, and text-image relationships mapped before final art.",
      },
      {
        title: "Read-aloud pacing",
        description:
          "Rhythm, breath, surprise, and quiet moments shaped for both independent and shared reading.",
      },
      {
        title: "Format-ready production",
        description:
          "Trim, bleed, image quality, typography, and print or digital requirements resolved before release.",
      },
    ],
    processTitle: "From story seed to reading ritual.",
    processDescription:
      "The sequence keeps editorial and visual decisions connected from the first review through the final proof.",
    process: [
      {
        label: "Reader",
        title: "Story and audience review",
        description:
          "We identify the age range, reading context, manuscript strengths, format, and the emotional experience the book should create.",
      },
      {
        label: "Story",
        title: "Editorial and page-turn map",
        description:
          "The text is refined while the narrative is divided into spreads, revealing where words lead and where images should carry the moment.",
      },
      {
        label: "World",
        title: "Art direction and visual development",
        description:
          "Character, setting, palette, style, and continuity are briefed, explored, and aligned before full illustration production.",
      },
      {
        label: "Pages",
        title: "Layout, lettering, and proof",
        description:
          "Illustration and typography are composed into complete spreads, then reviewed for legibility, pacing, safety margins, and print behavior.",
      },
      {
        label: "Shelf",
        title: "Files, metadata, and release preparation",
        description:
          "Approved artwork and interiors are prepared for the selected editions, with production checks and publishing metadata completed.",
      },
    ],
    deliverables: [
      "Audience and format recommendation",
      "Edited children’s manuscript",
      "Spread-by-spread story map",
      "Illustration or art-direction brief",
      "Cover and interior page system",
      "Print-ready files for agreed format",
      "Digital edition when included in scope",
      "Production and metadata handoff",
    ],
    bestFor: [
      "Picture books and read-aloud stories",
      "Early readers and illustrated chapter books",
      "Authors who need words, visuals, and production coordinated",
    ],
    faqs: [
      {
        question: "Do I need finished illustrations before I begin?",
        answer:
          "No. A manuscript can be reviewed before illustration begins. In many cases, mapping the spreads and visual opportunities first produces a stronger brief and avoids commissioning art that later needs structural changes.",
      },
      {
        question: "Can I work with my own illustrator?",
        answer:
          "Yes. Scriptora can coordinate with an existing illustrator, help refine the production brief, and prepare the page system around approved artwork. Responsibilities and file requirements are confirmed in scope.",
      },
      {
        question: "How is the right age range decided?",
        answer:
          "Age positioning considers word count, vocabulary, narrative complexity, illustration density, format, reading independence, and how the book is likely to be shared or discovered.",
      },
      {
        question: "Can the book be prepared for print and eBook?",
        answer:
          "Yes. The editions are planned separately because a fixed print spread and a digital reading experience may require different technical decisions.",
      },
    ],
    related: [
      "book-cover-design-services",
      "book-editing-and-proofreading-services",
      "book-distribution-services",
    ],
  },
  "book-publishing-services": {
    slug: "book-publishing-services",
    name: "Book Publishing",
    code: "PB / 02",
    eyebrow: "End-to-end publishing",
    heroTitle: "Move from manuscript to marketplace without losing the thread.",
    highlight: "without losing the thread",
    description:
      "One coordinated publishing path for editorial work, design, production, metadata, distribution preparation, and the decisions that connect them.",
    introduction:
      "Publishing becomes difficult when every stage begins with a new brief. Scriptora keeps one project record from the first manuscript review to the final files, so the editorial intention survives the handoff into design, production, and release.",
    artifacts: ["Publishing plan", "Master files", "Release record"],
    outcomesTitle: "A complete publishing path, shaped around the actual book.",
    outcomesDescription:
      "The service combines specialist work without forcing every manuscript through the same package.",
    outcomes: [
      {
        title: "Manuscript-led planning",
        description:
          "Editorial depth, formats, design, production, and release needs selected after reviewing the work.",
      },
      {
        title: "Coordinated specialists",
        description:
          "Editors, designers, formatters, and publishing support work from the same agreed direction.",
      },
      {
        title: "Visible milestones",
        description:
          "Approvals and dependencies are placed where they prevent rework and keep the author close to decisions.",
      },
      {
        title: "Release-ready records",
        description:
          "Final files, metadata, format requirements, and platform handoffs checked before publication.",
      },
    ],
    processTitle: "The book resolves one publishing decision at a time.",
    processDescription:
      "A staged workflow gives each specialist a clear moment to contribute and every author a clear moment to approve.",
    process: [
      {
        label: "Brief",
        title: "Consultation and manuscript review",
        description:
          "We understand the work, reader, current stage, intended formats, timing priorities, and what publication should accomplish.",
      },
      {
        label: "Plan",
        title: "Custom scope and publishing map",
        description:
          "Recommended editorial, design, production, and release stages are organized into named deliverables and review points.",
      },
      {
        label: "Make",
        title: "Editorial and creative production",
        description:
          "The manuscript, cover, interior, and format-specific assets develop in sequence with author feedback at agreed milestones.",
      },
      {
        label: "Proof",
        title: "File preparation and quality assurance",
        description:
          "Text, layout, images, metadata, and technical specifications are checked against the editions and channels in scope.",
      },
      {
        label: "Release",
        title: "Publishing and distribution handoff",
        description:
          "Approved files and records are prepared for account setup, platform submission, live-listing checks, or author handoff as agreed.",
      },
    ],
    deliverables: [
      "Manuscript and publishing assessment",
      "Written scope and milestone schedule",
      "Editorial deliverables included in scope",
      "Cover and interior design files",
      "Print and digital master files",
      "Metadata and edition record",
      "Quality-assurance checklist",
      "Distribution or upload handoff",
    ],
    bestFor: [
      "First-time authors who want a guided path",
      "Experienced authors coordinating multiple editions",
      "Manuscripts that need several publishing disciplines",
    ],
    faqs: [
      {
        question: "Does every project include every publishing service?",
        answer:
          "No. The manuscript review determines which stages are useful. A near-final book may need production and distribution support, while an early draft may benefit from editorial work before design begins.",
      },
      {
        question: "How is the publishing timeline decided?",
        answer:
          "Timing depends on manuscript length and readiness, editorial depth, selected formats, illustration or design complexity, review rounds, author response times, and platform requirements.",
      },
      {
        question: "Will I approve the book before publication?",
        answer:
          "Yes. Meaningful author approvals are placed at agreed milestones, including final proof or files before any authorised publication step.",
      },
      {
        question: "Who owns the manuscript, files, and publishing accounts?",
        answer:
          "Ownership, licences, source files, platform access, royalties, and usage rights are stated in the project agreement. The website does not substitute for those project-specific terms.",
      },
    ],
    related: [
      "book-editing-and-proofreading-services",
      "book-cover-design-services",
      "book-distribution-services",
    ],
  },
  "book-marketing-services": {
    slug: "book-marketing-services",
    name: "Book Marketing",
    code: "MK / 03",
    eyebrow: "Audience and launch strategy",
    heroTitle: "Give the right readers a reason to notice the book.",
    highlight: "right readers",
    description:
      "Positioning, launch planning, campaign assets, channel decisions, and measurement built from the book’s real audience—not a generic promotion checklist.",
    introduction:
      "Book marketing works best when the message, cover, metadata, author presence, and campaign activity make the same promise. Scriptora builds that connective strategy before multiplying content across channels.",
    artifacts: ["Audience brief", "Launch system", "Campaign record"],
    outcomesTitle: "Marketing that begins with positioning, not posting.",
    outcomesDescription:
      "The work clarifies who the book is for, what will make them care, and which assets and channels can support that discovery.",
    outcomes: [
      {
        title: "Reader positioning",
        description:
          "Audience segments, comparable titles, needs, interests, and buying context turned into a useful campaign brief.",
      },
      {
        title: "Coherent book message",
        description:
          "Hooks, description, themes, proof points, and author story aligned across retail and campaign surfaces.",
      },
      {
        title: "Launch-ready assets",
        description:
          "A practical system for announcements, excerpts, graphics, outreach, and conversion-focused pages.",
      },
      {
        title: "Measured next decisions",
        description:
          "Campaign activity reviewed against useful signals so effort can be refined rather than repeated blindly.",
      },
    ],
    processTitle: "From audience hypothesis to campaign learning.",
    processDescription:
      "The sequence establishes the message before the media plan and builds measurement into the launch.",
    process: [
      {
        label: "Reader",
        title: "Book, audience, and market review",
        description:
          "We study the book, genre, comparable titles, existing author platform, launch context, and the readers most likely to respond.",
      },
      {
        label: "Position",
        title: "Messaging and campaign direction",
        description:
          "Core hooks, reader promises, themes, objections, calls to action, and channel roles are recorded in one strategy.",
      },
      {
        label: "Assets",
        title: "Launch content and creative system",
        description:
          "Retail copy, social assets, excerpts, email material, outreach notes, and landing-page needs are produced to the agreed plan.",
      },
      {
        label: "Launch",
        title: "Campaign coordination",
        description:
          "The release sequence is scheduled across owned, earned, and paid activity included in scope, with dependencies kept visible.",
      },
      {
        label: "Learn",
        title: "Reporting and next recommendations",
        description:
          "Available signals are reviewed to identify what resonated, what needs adjustment, and which follow-on activity is justified.",
      },
    ],
    deliverables: [
      "Audience and comparable-title brief",
      "Positioning and messaging framework",
      "Launch calendar",
      "Retail description and campaign copy",
      "Social or email asset system in scope",
      "Outreach or review-copy plan",
      "Campaign tracking framework",
      "Post-launch recommendation record",
    ],
    bestFor: [
      "Books approaching publication",
      "Backlist titles needing clearer positioning",
      "Authors building a repeatable launch system",
    ],
    faqs: [
      {
        question: "Can book marketing guarantee sales or bestseller status?",
        answer:
          "No responsible campaign can guarantee sales, rankings, reviews, media coverage, or retailer decisions. The work improves positioning, readiness, consistency, and the quality of informed campaign decisions.",
      },
      {
        question: "When should marketing begin?",
        answer:
          "Positioning can begin while the book is in production. The ideal lead time depends on the channels, available assets, review strategy, author platform, and whether paid or earned media is included.",
      },
      {
        question: "Do I need an existing audience?",
        answer:
          "No, but the plan will differ. An established audience supports activation, while a new author may need more foundation-building, partnerships, outreach, and realistic expectations about time.",
      },
      {
        question: "Can you market an already published book?",
        answer:
          "Yes. We first review the existing positioning, cover, retail page, metadata, audience signals, and campaign history before recommending a relaunch or focused campaign.",
      },
    ],
    related: [
      "author-website-design-services",
      "book-distribution-services",
      "book-cover-design-services",
    ],
  },
  "ghostwriting-services": {
    slug: "ghostwriting-services",
    name: "Ghostwriting Services",
    code: "GW / 04",
    eyebrow: "Collaborative manuscript development",
    heroTitle: "Turn lived knowledge into a book that still sounds like you.",
    highlight: "still sounds like you",
    description:
      "A confidential, structured writing partnership for transforming ideas, interviews, research, and experience into a coherent manuscript.",
    introduction:
      "Ghostwriting is not the removal of the author; it is a method for making authorship possible when time, structure, or writing capacity is the constraint. The work begins by learning how you think, speak, and want the reader to change.",
    artifacts: ["Voice brief", "Chapter architecture", "Working manuscript"],
    outcomesTitle: "A manuscript built from your authority and a writer’s discipline.",
    outcomesDescription:
      "The collaboration captures source material, establishes a reliable structure, and keeps approval close to every major chapter decision.",
    outcomes: [
      {
        title: "Voice before volume",
        description:
          "Speech patterns, tone, point of view, vocabulary, and boundaries studied before full drafting accelerates.",
      },
      {
        title: "Research with a purpose",
        description:
          "Interviews, notes, references, and evidence organized around the chapter’s job for the reader.",
      },
      {
        title: "Visible manuscript structure",
        description:
          "A chapter architecture gives both author and writer a shared record of argument, narrative, and progression.",
      },
      {
        title: "Collaborative revision",
        description:
          "Drafts are reviewed in meaningful sections so course corrections happen before they become expensive rewrites.",
      },
    ],
    processTitle: "A writing partnership with a traceable source.",
    processDescription:
      "Each stage turns conversation and material into approved manuscript decisions.",
    process: [
      {
        label: "Intent",
        title: "Discovery and authorship brief",
        description:
          "We define the book’s purpose, reader, voice, scope, source material, sensitivities, credit, confidentiality, and approval process.",
      },
      {
        label: "Source",
        title: "Interviews and research map",
        description:
          "Conversations, notes, documents, and research gaps are organized into a reliable source plan with clear responsibilities.",
      },
      {
        label: "Shape",
        title: "Outline and sample chapter",
        description:
          "The proposed structure and an early writing sample test the voice, depth, pacing, and working relationship before full drafting.",
      },
      {
        label: "Draft",
        title: "Chapter production and review",
        description:
          "The manuscript develops in agreed batches, with author notes, fact checks, and structural adjustments recorded throughout.",
      },
      {
        label: "Resolve",
        title: "Full-manuscript revision and handoff",
        description:
          "The complete draft is reviewed for continuity, accuracy, voice, and purpose before editorial or production handoff.",
      },
    ],
    deliverables: [
      "Authorship, voice, and audience brief",
      "Interview and source plan",
      "Chapter-by-chapter outline",
      "Sample chapter or voice test",
      "Working chapter drafts",
      "Revision and query record",
      "Complete manuscript in agreed format",
      "Editorial handoff notes",
    ],
    bestFor: [
      "Memoir and personal narrative",
      "Business, thought leadership, and expertise-led books",
      "Authors with strong material but limited writing time",
    ],
    faqs: [
      {
        question: "Will the manuscript sound like me?",
        answer:
          "That is a central goal. Voice is studied through conversation, samples, vocabulary, cadence, and feedback. The outline and sample chapter create an early checkpoint before full drafting.",
      },
      {
        question: "Who receives author credit?",
        answer:
          "Credit, confidentiality, copyright, acknowledgements, and any permitted portfolio use are agreed in writing. Arrangements can vary by project and should not be assumed from the website.",
      },
      {
        question: "How involved do I need to be?",
        answer:
          "The writer handles drafting, but your knowledge, decisions, source access, fact checks, and feedback remain essential. The schedule records the level and timing of author participation.",
      },
      {
        question: "Can you work from notes or recorded material?",
        answer:
          "Yes. Existing notes, talks, articles, interviews, research, or recordings can inform the source map, provided you have the right to use and share them.",
      },
    ],
    related: [
      "book-editing-and-proofreading-services",
      "book-publishing-services",
      "book-marketing-services",
    ],
  },
  "book-editing-and-proofreading-services": {
    slug: "book-editing-and-proofreading-services",
    name: "Book Editing & Proofreading",
    code: "ED / 05",
    eyebrow: "Editorial development and final polish",
    heroTitle: "Strengthen every page without sanding away the voice.",
    highlight: "without sanding away the voice",
    description:
      "Developmental editing, line editing, copyediting, and proofreading selected at the depth the manuscript actually needs.",
    introduction:
      "Editing is not one universal pass. Structure, style, correctness, and final proofing solve different problems at different moments. Scriptora begins by diagnosing the manuscript so the author pays attention to the right layer first.",
    artifacts: ["Editorial report", "Tracked manuscript", "Style record"],
    outcomesTitle: "The right edit at the right depth.",
    outcomesDescription:
      "The editorial path separates big-picture decisions from sentence work and final production checks.",
    outcomes: [
      {
        title: "Developmental clarity",
        description:
          "Structure, pacing, argument, character, chapter logic, and reader progression examined as a whole.",
      },
      {
        title: "Line-level intention",
        description:
          "Rhythm, emphasis, tone, transitions, and sentence clarity refined while preserving authorship.",
      },
      {
        title: "Copy consistency",
        description:
          "Grammar, punctuation, usage, continuity, facts, and house-style decisions recorded and corrected.",
      },
      {
        title: "Publication proof",
        description:
          "Late-stage text and layout errors checked after the manuscript enters its designed form.",
      },
    ],
    processTitle: "A manuscript becomes clearer in deliberate passes.",
    processDescription:
      "Each pass has a defined purpose, deliverable, and point of author review.",
    process: [
      {
        label: "Diagnose",
        title: "Sample review and editorial recommendation",
        description:
          "We assess the manuscript’s stage, genre, goals, visible issues, and dependencies before confirming the right editorial scope.",
      },
      {
        label: "Structure",
        title: "Developmental review",
        description:
          "Where included, the complete work is evaluated for architecture, pacing, narrative or argument flow, and reader experience.",
      },
      {
        label: "Revise",
        title: "Author revision and editorial dialogue",
        description:
          "Priority decisions are discussed and resolved before sentence-level editing begins, reducing contradictory or duplicated work.",
      },
      {
        label: "Language",
        title: "Line and copy edit",
        description:
          "Tracked changes, comments, queries, and a style sheet address voice, clarity, correctness, consistency, and unresolved choices.",
      },
      {
        label: "Proof",
        title: "Final proof and production handoff",
        description:
          "The approved manuscript or designed proof is checked at the agreed stage, then handed forward with editorial records intact.",
      },
    ],
    deliverables: [
      "Editorial assessment and scope recommendation",
      "Editorial report when included",
      "Annotated or tracked-change manuscript",
      "Author query list",
      "Copyediting style sheet",
      "Clean accepted manuscript",
      "Proofreading correction record",
      "Production handoff notes",
    ],
    bestFor: [
      "Early drafts needing structural direction",
      "Complete manuscripts needing line and copy polish",
      "Designed books requiring a final proof",
    ],
    faqs: [
      {
        question: "Which type of editing does my manuscript need?",
        answer:
          "A sample and project review helps determine whether the priority is structure, line-level craft, copy consistency, or final proofing. Several layers may be useful, but they should happen in the right order.",
      },
      {
        question: "Will an editor change my voice?",
        answer:
          "The aim is to clarify and strengthen the intended voice, not replace it. Material changes are visible through tracked edits, comments, queries, or an editorial report so the author can evaluate them.",
      },
      {
        question: "Should proofreading happen before formatting?",
        answer:
          "Copyediting is usually completed before layout. A final proof is most useful after formatting because it can catch text errors as well as page-level issues such as breaks, spacing, running heads, and captions.",
      },
      {
        question: "Do you edit fiction and nonfiction?",
        answer:
          "Yes. The brief and editor match should reflect the genre, audience, subject matter, and required editorial depth. Specialist or fact-sensitive projects may need additional review.",
      },
    ],
    related: [
      "ghostwriting-services",
      "book-formatting-services",
      "book-publishing-services",
    ],
  },
  "author-website-design-services": {
    slug: "author-website-design-services",
    name: "Author Website Design",
    code: "WD / 06",
    eyebrow: "Author platform and digital home",
    heroTitle: "Give the book a home that can hold the work that follows.",
    highlight: "work that follows",
    description:
      "Strategy, content architecture, visual design, responsive development, and launch support for an author presence built beyond a single campaign.",
    introduction:
      "An author website is not an online brochure. It is the stable point connecting books, biography, media, events, reader actions, and future work. Scriptora designs that system around what visitors need to understand and do.",
    artifacts: ["Site brief", "Page system", "Launch build"],
    outcomesTitle: "A digital home with an editorial reason for every page.",
    outcomesDescription:
      "The site balances author identity, book discovery, credibility, and useful next actions without becoming a maze.",
    outcomes: [
      {
        title: "Clear visitor journeys",
        description:
          "Readers, media, event organisers, and professional contacts guided to the information and actions relevant to them.",
      },
      {
        title: "Author-led visual identity",
        description:
          "Typography, imagery, tone, and interface details connected to the author’s work without copying a single cover.",
      },
      {
        title: "Responsive page system",
        description:
          "Reusable layouts designed to support current books and new titles across mobile and desktop.",
      },
      {
        title: "Launch-ready foundation",
        description:
          "Core search, accessibility, performance, metadata, and content handoff considered before the site goes live.",
      },
    ],
    processTitle: "From author position to durable digital shelf.",
    processDescription:
      "The process establishes the content model before visual design and confirms the system before launch.",
    process: [
      {
        label: "Position",
        title: "Author and audience discovery",
        description:
          "We review the books, author goals, audiences, references, existing platform, required actions, and content available.",
      },
      {
        label: "Structure",
        title: "Content and page architecture",
        description:
          "Navigation, page responsibilities, calls to action, and content gaps are organized into an approved site brief.",
      },
      {
        label: "Language",
        title: "Visual direction and interface system",
        description:
          "The design establishes typography, color, imagery, spacing, components, and responsive behavior around the author identity.",
      },
      {
        label: "Build",
        title: "Responsive development and content entry",
        description:
          "Approved pages are developed, populated, and checked across screen sizes with the integrations included in scope.",
      },
      {
        label: "Launch",
        title: "Quality assurance and handoff",
        description:
          "Links, forms, metadata, accessibility basics, performance, and launch settings are checked before handoff or release.",
      },
    ],
    deliverables: [
      "Website strategy and content brief",
      "Sitemap and page responsibilities",
      "Author-focused visual system",
      "Responsive website pages in scope",
      "Reusable interface components",
      "Core search and social metadata",
      "Launch quality-assurance record",
      "Content or maintenance handoff",
    ],
    bestFor: [
      "Debut authors establishing a professional home",
      "Multi-book authors reorganising an existing platform",
      "Authors preparing for launch, media, or speaking work",
    ],
    faqs: [
      {
        question: "Will I be able to update the website?",
        answer:
          "The handoff and editing model depend on the platform and scope. If author-managed updates are required, the content system and documentation should be planned for that from the beginning.",
      },
      {
        question: "Do I need a domain and hosting first?",
        answer:
          "No. Existing accounts can be reviewed, or domain, hosting, and deployment responsibilities can be included in the project plan. Ownership and renewal access should remain clearly documented.",
      },
      {
        question: "Can the site support multiple books?",
        answer:
          "Yes. The architecture can support one title at launch while establishing reusable book, series, event, media, or resource patterns for future growth.",
      },
      {
        question: "Can you write the website copy?",
        answer:
          "Copy strategy, editing, or writing can be included. The scope should identify which content you provide, what Scriptora develops, and which assets or approvals are needed.",
      },
    ],
    related: [
      "book-marketing-services",
      "book-cover-design-services",
      "book-publishing-services",
    ],
  },
  "book-cover-design-services": {
    slug: "book-cover-design-services",
    name: "Book Cover Design",
    code: "CV / 07",
    eyebrow: "Cover strategy and production",
    heroTitle: "Make the first page begin before the book is opened.",
    highlight: "before the book is opened",
    description:
      "Genre-aware cover strategy, concept development, refinement, and production files for a book that must work at thumbnail size and in the reader’s hands.",
    introduction:
      "A cover has several jobs at once: signal category, establish tone, create distinction, support the title, and reproduce correctly in every selected format. Scriptora treats it as both a visual argument and a production object.",
    artifacts: ["Cover brief", "Concept field", "Production artwork"],
    outcomesTitle: "A cover that makes the right promise at first glance.",
    outcomesDescription:
      "Creative exploration is anchored in the manuscript, its reader, its market context, and the practical behavior of the final formats.",
    outcomes: [
      {
        title: "Genre fluency",
        description:
          "Comparable covers and reader expectations studied to decide what to signal, reinterpret, or deliberately avoid.",
      },
      {
        title: "Concept before decoration",
        description:
          "The visual idea grows from theme, tension, tone, or proposition rather than surface styling alone.",
      },
      {
        title: "Thumbnail and shelf presence",
        description:
          "Hierarchy, typography, contrast, and image behavior tested across digital listings and physical scale.",
      },
      {
        title: "Production accuracy",
        description:
          "Spine, bleed, trim, barcode space, color, resolution, and edition requirements resolved in final artwork.",
      },
    ],
    processTitle: "From manuscript signal to finished cover system.",
    processDescription:
      "Each stage narrows the field with evidence, author feedback, and production reality.",
    process: [
      {
        label: "Read",
        title: "Creative and market briefing",
        description:
          "We study the manuscript, synopsis, themes, audience, genre, comparable titles, format, and the author’s references or boundaries.",
      },
      {
        label: "Position",
        title: "Visual direction",
        description:
          "A defined direction records the cover’s job, emotional register, hierarchy, imagery approach, and relationship to the market.",
      },
      {
        label: "Explore",
        title: "Concept development",
        description:
          "Distinct concepts test different visual arguments rather than presenting cosmetic variations of the same idea.",
      },
      {
        label: "Refine",
        title: "Author feedback and design resolution",
        description:
          "The selected direction is refined across type, image, color, composition, back-cover content, and edition requirements.",
      },
      {
        label: "Produce",
        title: "Final artwork and format handoff",
        description:
          "Approved work is prepared for the agreed print and digital formats, then checked against final specifications.",
      },
    ],
    deliverables: [
      "Creative and market-positioning brief",
      "Cover concept presentation",
      "Refined front-cover artwork",
      "Back cover and spine when included",
      "Print-ready cover PDF",
      "Digital cover image",
      "Thumbnail and format checks",
      "Asset-licensing record where applicable",
    ],
    bestFor: [
      "New titles preparing for publication",
      "Reissues that need clearer positioning",
      "Print and digital editions requiring one coherent system",
    ],
    faqs: [
      {
        question: "How many cover concepts will I receive?",
        answer:
          "The number and depth of concepts are defined in the scope. The aim is to explore genuinely distinct directions and preserve enough time to resolve the selected one well.",
      },
      {
        question: "When can the full print cover be finalised?",
        answer:
          "The final spine and wrap normally require confirmed trim size, paper choice, binding, page count, printer specifications, back-cover copy, and barcode requirements.",
      },
      {
        question: "Are stock images or illustrations licensed?",
        answer:
          "Any third-party imagery, fonts, or illustration rights should be identified in the brief and final handoff. Licence type, permitted uses, costs, and restrictions vary by asset.",
      },
      {
        question: "Can you redesign an existing cover?",
        answer:
          "Yes. We review the current cover, source-file availability, existing licences, reader positioning, and what the new edition needs to change before recommending a redesign scope.",
      },
    ],
    related: [
      "book-formatting-services",
      "book-marketing-services",
      "book-publishing-services",
    ],
  },
  "book-formatting-services": {
    slug: "book-formatting-services",
    name: "Book Formatting",
    code: "FM / 08",
    eyebrow: "Interior design and typesetting",
    heroTitle: "Make every page feel inevitable to the reader.",
    highlight: "inevitable to the reader",
    description:
      "Interior page systems, typography, typesetting, image handling, and print-ready files built around the way the book should be read.",
    introduction:
      "Formatting is where the manuscript becomes a physical reading rhythm. Page size, measure, type, spacing, hierarchy, breaks, notes, images, and navigation must work together quietly enough that the reader notices the book—not the machinery.",
    artifacts: ["Page specification", "Typeset proof", "Print master"],
    outcomesTitle: "A page system that carries the book without competing with it.",
    outcomesDescription:
      "Design decisions respond to genre, length, content complexity, print method, and the reader’s likely use of the book.",
    outcomes: [
      {
        title: "Readable typography",
        description:
          "Type size, line length, leading, margins, and hierarchy balanced for the selected trim and audience.",
      },
      {
        title: "Consistent structure",
        description:
          "Chapters, headings, front matter, back matter, notes, captions, tables, and special elements governed by one system.",
      },
      {
        title: "Purposeful pacing",
        description:
          "Openings, section breaks, white space, folios, and page turns used to support the reading experience.",
      },
      {
        title: "Print-ready precision",
        description:
          "Fonts, images, bleed, color, pagination, and export settings checked against the agreed production route.",
      },
    ],
    processTitle: "From clean manuscript to production master.",
    processDescription:
      "The layout is established as a system, tested in sample pages, then applied and proofed across the complete book.",
    process: [
      {
        label: "Audit",
        title: "Manuscript and specification review",
        description:
          "We confirm editorial readiness, trim, binding, print route, content types, image quality, special elements, and source-file condition.",
      },
      {
        label: "System",
        title: "Page architecture and sample design",
        description:
          "Representative pages establish typography, margins, hierarchy, openings, running elements, and complex content behavior.",
      },
      {
        label: "Compose",
        title: "Full-book typesetting",
        description:
          "The approved system is applied across the manuscript with manual attention to breaks, spacing, images, notes, and exceptions.",
      },
      {
        label: "Proof",
        title: "Author review and corrections",
        description:
          "A complete proof is checked for content corrections and layout issues, with changes recorded through agreed review rounds.",
      },
      {
        label: "Master",
        title: "Preflight and final export",
        description:
          "The approved interior is preflighted for fonts, images, color, dimensions, bleed, and printer or platform requirements.",
      },
    ],
    deliverables: [
      "Interior design specification",
      "Representative sample pages",
      "Complete typeset proof",
      "Print-ready interior PDF",
      "Image and font preflight",
      "Correction record",
      "Source files when included in scope",
      "Printer or platform handoff notes",
    ],
    bestFor: [
      "Novels, memoirs, and narrative nonfiction",
      "Poetry, workbooks, and image-led interiors",
      "Reformatted editions or new trim sizes",
    ],
    faqs: [
      {
        question: "Is book formatting the same as eBook conversion?",
        answer:
          "No. Print formatting creates fixed pages for a specific trim and production method. Most eBooks use responsive content that reflows across devices and needs separate structural and technical work.",
      },
      {
        question: "Should editing be complete before formatting?",
        answer:
          "The manuscript should normally be copyedited and substantially final. Significant changes after typesetting can affect page count, breaks, cross-references, indexes, and cover-spine calculations.",
      },
      {
        question: "Can you format books with images, tables, or notes?",
        answer:
          "Yes. Complex content should be identified during the audit because image preparation, captions, tables, footnotes, equations, or indexes can change the design and production scope.",
      },
      {
        question: "Can you match an existing series style?",
        answer:
          "Yes, provided suitable reference files and rights are available. We can extend an existing system or document a refined series specification for future volumes.",
      },
    ],
    related: [
      "e-book-creation-services",
      "book-cover-design-services",
      "book-editing-and-proofreading-services",
    ],
  },
  "audiobook-production-services": {
    slug: "audiobook-production-services",
    name: "Audiobook Production",
    code: "AU / 09",
    eyebrow: "Narration, production, and mastering",
    heroTitle: "Let the book find its voice beyond the page.",
    highlight: "beyond the page",
    description:
      "Audio adaptation, casting support, narration workflow, editing, quality control, mastering, and delivery preparation for a coherent listening edition.",
    introduction:
      "An audiobook is not simply a manuscript read aloud. Performance, pronunciation, pacing, chapter structure, room tone, editing, and mastering all shape whether the listener stays inside the work.",
    artifacts: ["Audio brief", "Approved sample", "Mastered edition"],
    outcomesTitle: "A listening edition with its own production logic.",
    outcomesDescription:
      "The voice, performance direction, technical standard, and release files are planned together before full recording begins.",
    outcomes: [
      {
        title: "Narration fit",
        description:
          "Voice, tone, character demands, subject authority, pronunciation, and audience considered before casting approval.",
      },
      {
        title: "Performance continuity",
        description:
          "A pronunciation and character record helps sustain consistent choices across long recording schedules.",
      },
      {
        title: "Editorial listening",
        description:
          "Misreads, repeats, noises, timing issues, and manuscript discrepancies identified through structured review.",
      },
      {
        title: "Platform-ready masters",
        description:
          "Chapter files, levels, noise floor, spacing, opening and closing credits, and sample requirements checked for the selected route.",
      },
    ],
    processTitle: "From narration brief to finished listening edition.",
    processDescription:
      "Approvals happen early enough to protect performance and late enough to verify every final file.",
    process: [
      {
        label: "Adapt",
        title: "Manuscript and audio brief",
        description:
          "We review length, genre, voices, pronunciations, tables or visual material, credits, rights, platform needs, and creative direction.",
      },
      {
        label: "Cast",
        title: "Narrator selection and sample",
        description:
          "Suitable voices are considered and an approved sample tests tone, pace, character, and technical quality before full production.",
      },
      {
        label: "Record",
        title: "Narration and session direction",
        description:
          "Recording follows the approved direction with a maintained pronunciation, character, pickup, and issue record.",
      },
      {
        label: "Edit",
        title: "Audio editing and quality review",
        description:
          "Sessions are assembled, cleaned, checked against the manuscript, and reviewed for continuity, errors, and required pickups.",
      },
      {
        label: "Master",
        title: "Mastering and delivery preparation",
        description:
          "Approved audio is mastered, divided, named, and checked against the technical requirements of the agreed distribution route.",
      },
    ],
    deliverables: [
      "Audiobook production brief",
      "Casting or narrator recommendation",
      "Approved narration sample",
      "Pronunciation and continuity record",
      "Edited chapter audio",
      "Mastered delivery files",
      "Retail sample and credits",
      "Audio quality-assurance report",
    ],
    bestFor: [
      "Fiction and narrative nonfiction",
      "Memoir, business, and expertise-led books",
      "Authors expanding an existing print or eBook edition",
    ],
    faqs: [
      {
        question: "Can I narrate my own audiobook?",
        answer:
          "Yes, when the voice and performance suit the book. A sample helps evaluate delivery, recording conditions, stamina, pacing, and whether coaching or studio support should be included.",
      },
      {
        question: "How is audiobook length estimated?",
        answer:
          "Finished length is estimated from word count and an appropriate narration pace, then adjusted for dialogue, performance, tables, credits, or other material that affects reading time.",
      },
      {
        question: "What happens when a mistake is found?",
        answer:
          "Misreads, omissions, technical issues, or approved corrections are recorded as pickups. The scope should distinguish production corrections from later author rewrites or manuscript changes.",
      },
      {
        question: "Can the audio be prepared for multiple platforms?",
        answer:
          "Yes. File structure and technical requirements are confirmed for the intended channels. Distribution account setup or submission can be scoped separately.",
      },
    ],
    related: [
      "book-distribution-services",
      "book-publishing-services",
      "book-editing-and-proofreading-services",
    ],
  },
  "e-book-creation-services": {
    slug: "e-book-creation-services",
    name: "eBook Creation",
    code: "EB / 10",
    eyebrow: "Responsive digital editions",
    heroTitle: "Make the book adapt without losing its structure.",
    highlight: "without losing its structure",
    description:
      "Semantic content, responsive styling, navigation, image handling, accessibility considerations, and validated files for a reliable digital reading experience.",
    introduction:
      "An eBook must survive changes in screen, font size, orientation, reading application, and user preference. Scriptora builds the edition from structure outward so flexibility does not become disorder.",
    artifacts: ["Content map", "Responsive edition", "Validation record"],
    outcomesTitle: "A digital edition built to reflow with purpose.",
    outcomesDescription:
      "The work protects hierarchy, navigation, meaning, and reading order across devices rather than imitating a fixed printed page.",
    outcomes: [
      {
        title: "Semantic structure",
        description:
          "Headings, sections, lists, notes, captions, and landmarks marked by meaning rather than appearance alone.",
      },
      {
        title: "Responsive reading",
        description:
          "Typography and spacing designed to adapt when readers change device, text size, theme, or orientation.",
      },
      {
        title: "Useful navigation",
        description:
          "Linked contents, landmarks, notes, references, and reading order checked for efficient movement through the book.",
      },
      {
        title: "Validated delivery",
        description:
          "File structure, metadata, images, links, and common device behavior tested before platform handoff.",
      },
    ],
    processTitle: "From source manuscript to resilient digital edition.",
    processDescription:
      "The conversion begins with content logic, then adds presentation, validation, and device review.",
    process: [
      {
        label: "Audit",
        title: "Source and format assessment",
        description:
          "We review the manuscript, print files, images, notes, tables, fonts, navigation, and whether reflowable or fixed layout is appropriate.",
      },
      {
        label: "Structure",
        title: "Semantic content preparation",
        description:
          "The book is organized into clean sections with meaningful hierarchy, navigation, metadata, and accessible reading order.",
      },
      {
        label: "Style",
        title: "Responsive digital design",
        description:
          "Typography, spacing, ornaments, images, quotations, lists, and special elements are styled for adaptable reading environments.",
      },
      {
        label: "Test",
        title: "Validation and device review",
        description:
          "The edition is checked with validation tools and representative reading applications for structure, links, images, and display behavior.",
      },
      {
        label: "Deliver",
        title: "Final correction and platform handoff",
        description:
          "Approved issues are resolved and the final file, cover, metadata, and upload notes are prepared for the agreed route.",
      },
    ],
    deliverables: [
      "Source-file and format assessment",
      "Reflowable or fixed-layout recommendation",
      "Structured digital content",
      "Linked table of contents",
      "Styled and embedded images",
      "Validated EPUB file",
      "Representative device checks",
      "Metadata and upload handoff",
    ],
    bestFor: [
      "New digital editions",
      "Print books being adapted for eBook",
      "Existing EPUB files needing correction or improvement",
    ],
    faqs: [
      {
        question: "Can a print PDF simply be converted into an eBook?",
        answer:
          "It can be used as a reference, but an automatic conversion often carries over broken reading order, headers, page numbers, line breaks, and visual artifacts. A reliable edition is rebuilt around content structure.",
      },
      {
        question: "What is the difference between reflowable and fixed layout?",
        answer:
          "Reflowable eBooks let text adapt to reader settings and are suitable for most prose. Fixed layout preserves exact pages and may suit highly visual books, but has different accessibility and device tradeoffs.",
      },
      {
        question: "Can an eBook include images and links?",
        answer:
          "Yes. Images, captions, internal navigation, external links, notes, and other elements can be included when prepared and tested for the selected format.",
      },
      {
        question: "Will the eBook look identical on every device?",
        answer:
          "No. Reading applications and user settings vary. The goal is consistent hierarchy, meaning, navigation, and graceful behavior—not pixel-identical pages.",
      },
    ],
    related: [
      "book-formatting-services",
      "book-distribution-services",
      "book-cover-design-services",
    ],
  },
  "book-distribution-services": {
    slug: "book-distribution-services",
    name: "Book Distribution",
    code: "DS / 11",
    eyebrow: "Channels, metadata, and release setup",
    heroTitle: "Prepare the book to be available where its readers look.",
    highlight: "where its readers look",
    description:
      "Format readiness, metadata, account planning, print-on-demand or digital setup, listing checks, and distribution handoff for selected channels.",
    introduction:
      "Distribution is not a promise that every retailer will stock every book. It is the technical and commercial foundation that makes an edition orderable, discoverable, correctly described, and manageable through the channels selected.",
    artifacts: ["Channel map", "Metadata record", "Live-listing check"],
    outcomesTitle: "Availability built on accurate files and useful metadata.",
    outcomesDescription:
      "The service connects editions, identifiers, pricing, categories, descriptions, accounts, and platform requirements into one release record.",
    outcomes: [
      {
        title: "Format readiness",
        description:
          "Print, eBook, or audio files checked against the requirements of the channels included in scope.",
      },
      {
        title: "Metadata coherence",
        description:
          "Title, contributor, description, category, keyword, pricing, territory, and edition details kept consistent.",
      },
      {
        title: "Account visibility",
        description:
          "Ownership, access, payment, tax, royalty, and reporting responsibilities clarified before submission.",
      },
      {
        title: "Live listing verification",
        description:
          "Approved listings reviewed for availability, cover, description, price, formats, and obvious platform errors.",
      },
    ],
    processTitle: "From master files to an orderable edition.",
    processDescription:
      "The route begins with the reader and format, then resolves the data and platform details required for release.",
    process: [
      {
        label: "Route",
        title: "Edition and channel planning",
        description:
          "We confirm formats, territories, audience, account ownership, print approach, identifiers, pricing needs, and selected channels.",
      },
      {
        label: "Check",
        title: "File and identifier readiness",
        description:
          "Covers, interiors, EPUB or audio files, ISBN or platform identifiers, and edition relationships are reviewed before upload.",
      },
      {
        label: "Describe",
        title: "Metadata preparation",
        description:
          "Book description, contributor data, categories, keywords, pricing, territories, publication dates, and edition details are assembled.",
      },
      {
        label: "Submit",
        title: "Platform or distributor setup",
        description:
          "Files and metadata are entered or handed off through the agreed accounts, with platform-specific issues recorded and resolved where possible.",
      },
      {
        label: "Verify",
        title: "Live listing and release record",
        description:
          "Availability and presentation are checked after approval, with account access, final metadata, and next responsibilities documented.",
      },
    ],
    deliverables: [
      "Edition and channel recommendation",
      "File-readiness review",
      "ISBN or identifier guidance",
      "Publishing metadata sheet",
      "Print-on-demand setup in scope",
      "Digital listing setup in scope",
      "Live-listing quality check",
      "Account and release handoff record",
    ],
    bestFor: [
      "Authors publishing print, digital, or audio editions",
      "Books expanding into additional formats or channels",
      "Existing listings with inconsistent metadata or setup",
    ],
    faqs: [
      {
        question: "Will distribution place my book in physical bookstores?",
        answer:
          "Distribution can make an eligible print edition available for retailers or wholesalers to order. Physical stocking decisions are made by individual booksellers and depend on demand, terms, returns, market fit, and their own buying policies.",
      },
      {
        question: "Which platforms will my book appear on?",
        answer:
          "Channels are selected in the scope according to format, territory, account strategy, technical eligibility, and the author’s goals. Platform availability and rules can change.",
      },
      {
        question: "Who owns the publishing accounts?",
        answer:
          "Account ownership, login access, payment details, tax information, reporting, and ongoing maintenance should be decided before setup and recorded in the project agreement or handoff.",
      },
      {
        question: "Does distribution guarantee sales?",
        answer:
          "No. Distribution creates availability and accurate presentation. Sales depend on the book, positioning, price, audience, reviews, marketing, retailer activity, and many factors outside a distributor’s control.",
      },
    ],
    related: [
      "book-publishing-services",
      "book-marketing-services",
      "e-book-creation-services",
    ],
  },
} satisfies Record<string, ServiceDetail>;

export type ServiceSlug = keyof typeof serviceDetails;

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug as ServiceSlug];
}

export function getRelatedServices(service: ServiceDetail) {
  return service.related
    .map((slug) => getServiceDetail(slug))
    .filter((item): item is ServiceDetail => Boolean(item));
}
