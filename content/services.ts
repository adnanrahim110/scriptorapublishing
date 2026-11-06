export type ServiceOutcome = {
  title: string;
  description: string;
};

export type ServiceSectionCopy = {
  title: string;
  description: string;
};

export type ServiceClosing = ServiceSectionCopy & {
  action: string;
  href: string;
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
  metaDescription?: string;
  introductionTitle?: string;
  heroActions?: { primary: string; secondary: string };
  imageCaption?: string;
  projectSection?: ServiceSectionCopy;
  deliverableDetails?: readonly ServiceOutcome[];
  principles?: readonly string[];
  fitSection?: ServiceSectionCopy;
  bestForDetails?: readonly ServiceOutcome[];
  authority?: ServiceSectionCopy;
  faqSection?: ServiceSectionCopy;
  relatedSection?: ServiceSectionCopy;
  relatedDetails?: readonly {
    slug: string;
    name: string;
    title: string;
    description: string;
    action: string;
  }[];
  cta?: ServiceSectionCopy & { primary: string; secondary: string };
  closing?: ServiceClosing;
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
    metaDescription:
      "Professional book publishing with Scriptora: editing, design, formatting, print and digital production, metadata, and distribution preparation.",
    name: "Book Publishing",
    code: "PB / 02",
    eyebrow: "BOOK PUBLISHING",
    heroTitle:
      "Finishing the manuscript is one achievement. Making it a book is another.",
    highlight: "Making it a book is another.",
    description:
      "Between the final word and the finished book are hundreds of decisions readers may never notice, but every one of them shapes what they eventually hold.\n\nScriptora brings editing, design, formatting, production, publishing, metadata, and distribution preparation into one coordinated path, so your manuscript doesn't simply become available.\n\nIt becomes a book prepared to belong in the world.",
    introduction:
      "Publishing begins where writing ends.\n\nThe manuscript has to be assessed. Editorial questions need to be settled. The cover must speak to the right reader. Interior pages need structure and rhythm. Print and digital editions require different preparation. Metadata has to describe the book accurately. Publication details need to agree with one another.\n\nNone of these decisions lives in isolation.\n\nThat's why Scriptora approaches book publishing as one connected process, built around the book you actually wrote, not a package designed before we've read it.",
    artifacts: [
      "Publishing Plan",
      "Production-Ready Files",
      "Publication & Distribution",
    ],
    outcomesTitle: "The Craft Behind Book Publishing.",
    outcomesDescription: "",
    outcomes: [
      {
        title: "Start with the book, not the package.",
        description:
          "A polished novel, an illustrated memoir, and a research-led nonfiction book should never follow an identical production path.\n\nWe begin with the manuscript, its condition, genre, audience, format, and ambitions—then determine what should happen next.",
      },
      {
        title: "Every specialist should be working on the same book.",
        description:
          "Editing affects layout. Trim size affects page count. Page count can affect spine width. Cover design influences positioning. Format choices shape production.\n\nEditors, designers, formatters, and publishing specialists work from one agreed direction so decisions made in one stage don't quietly create problems in another.",
      },
      {
        title: "Nothing important should happen behind your back.",
        description:
          "Your book carries your name.\n\nMeaningful review points are built into the publishing process so you can see, question, refine, and approve the work as it develops, not discover major creative decisions after they're difficult to change.",
      },
      {
        title: "Ready to upload isn't the same as ready to publish.",
        description:
          "Before release, the book needs more than finished files.\n\nPrint specifications, digital editions, metadata, cover dimensions, identifiers, pricing inputs, descriptions, and selected publishing requirements need to agree with one another.\n\nWe check the details before readers are asked to find the book.",
      },
    ],
    processTitle: "Five decisions stand between manuscript and marketplace.",
    processDescription:
      "Each stage answers a different question about the book.\n\nWhat does it need?   How should it be shaped?   How should it look and feel?   Is every edition technically ready?   And finally, how should it enter the world?",
    process: [
      {
        title: "Begin with what you've actually written.",
        label: "UNDERSTAND",
        description:
          "We review the manuscript, genre, intended reader, current level of readiness, publishing ambitions, preferred formats, and timing.\n\nThis gives us the information to recommend a publishing path based on the project itself rather than assuming every author needs the same services.",
      },
      {
        title: "Settle the words before building around them.",
        label: "REFINE",
        description:
          "If editorial work is needed, this is where the manuscript is strengthened.\n\nDepending on the book, that may involve developmental editing, line editing, copyediting, proofreading, or a carefully selected combination.\n\nThe objective isn't to make every author sound the same.\n\nIt's to make the manuscript ready for everything that follows.",
      },
      {
        title: "Give the manuscript its physical identity.",
        label: "DESIGN",
        description:
          "The book begins becoming something readers can recognize.\n\nCover direction, typography, trim size, interior layout, chapter architecture, imagery, and other visual decisions are developed around the genre and reading experience.\n\nThe cover makes the first promise.\n\nThe pages inside have to keep it.",
      },
      {
        title: "Build every edition for the way it will be read.",
        label: "PREPARE",
        description:
          "Print and digital books don't simply use the same file in different places.\n\nEach selected format is prepared for its technical environment, followed by proofing and quality checks across layout, pagination, margins, images, typography, links, cover specifications, and other production details.",
      },
      {
        title: "Give the finished book a proper entrance.",
        label: "PUBLISH",
        description:
          "With the creative and production work approved, we prepare the publication details needed for the selected publishing and distribution route.\n\nMetadata, book descriptions, identifiers, edition information, files, and relevant platform requirements are checked together before the authorized release steps begin.\n\nThe manuscript is finished.\n\nThe book is ready.",
      },
    ],
    deliverables: [
      "Manuscript & Publishing Assessment",
      "Project Scope & Publishing Roadmap",
      "Editorial Deliverables",
      "Cover & Interior Design",
      "Print & Digital Master Files",
      "Book Metadata & Edition Details",
    ],
    bestFor: [
      "FIRST-TIME AUTHORS",
      "EXPERIENCED & RETURNING AUTHORS",
      "MULTI-STAGE PROJECTS",
    ],
    faqs: [
      {
        question: "Does every book need the complete publishing process?",
        answer:
          "No.\n\nA manuscript that's already professionally edited and designed may only require production, publication, or distribution support. Another may need substantial editorial development before anyone should think about formatting it.\n\nWe review where the book actually stands first, then define the appropriate scope.",
      },
      {
        question:
          "Can you publish a manuscript that isn't completely finished?",
        answer:
          "Potentially, yes—but the right starting point may be manuscript development or editing rather than publication.\n\nPublishing too early can turn unfinished editorial decisions into expensive production changes later. We'll identify the appropriate next stage after reviewing the project.",
      },
      {
        question: "How long does professional book publishing take?",
        answer:
          "There isn't one responsible timeline for every book.\n\nLength, manuscript readiness, editorial depth, cover development, interior complexity, illustrations, selected formats, revision rounds, author approvals, and publishing requirements can all affect the schedule.\n\nYour project timeline should reflect the book, not an arbitrary promise.",
      },
      {
        question: "Will I approve my book before it is published?",
        answer:
          "Yes.\n\nRelevant approvals are built into the agreed workflow, including major creative stages and final proofs or production files before authorized publication steps.",
      },
      {
        question: "Do I need both a paperback and an ebook?",
        answer:
          "Not necessarily.\n\nFormat decisions should reflect the book, audience, commercial goals, and reading experience. Some books benefit strongly from both; others may require print-first, digital-first, hardcover, or more specialized production choices.",
      },
      {
        question: "What is an ISBN, and will my book need one?",
        answer:
          "An ISBN is an identifier used to distinguish a specific book edition and format within the publishing and bookselling ecosystem.\n\nWhether one is required—and how identifiers should be handled, depends on the formats, publishing arrangement, and distribution route selected for your book.",
      },
      {
        question: "Can you help with Amazon publishing and print-on-demand?",
        answer:
          "Where included in the agreed publishing scope, Scriptora can assist with preparing the files, book information, and setup requirements for selected publishing and print-on-demand channels.\n\nThe exact platforms and account responsibilities are confirmed for each project.",
      },
      {
        question: "Can my book be available beyond Amazon?",
        answer:
          "Yes, depending on the distribution route selected for the project.\n\nWider availability can involve additional retail, wholesale, library, or digital channels. Distribution strategy should be determined by the book's formats, audience, market, and publishing arrangement rather than by simply listing as many platforms as possible.",
      },
      {
        question: "Do I retain ownership of my book?",
        answer:
          "Ownership, intellectual-property rights, licences, source files, publishing-account access, royalties, and usage permissions should be clearly documented in your project agreement.\n\nWe believe those details belong in writing, not hidden behind vague website promises.",
      },
      {
        question: "What happens after the book is published?",
        answer:
          "Publication makes the book available.\n\nDiscovery is a different challenge.\n\nDepending on your goals, the next stage may involve distribution expansion, author positioning, book marketing, launch activity, an author website, audience development, or simply beginning the next book.",
      },
    ],
    related: [
      "book-editing-and-proofreading-services",
      "book-cover-design-services",
      "book-distribution-services",
    ],
    heroActions: {
      primary: "Discuss Your Book",
      secondary: "See the Publishing Process",
    },
    imageCaption:
      "A finished book should feel inevitable, as though every detail belonged there from the beginning.",
    introductionTitle:
      "A manuscript can be finished and still have a long way to go.",
    projectSection: {
      title:
        "You should always know what is being made, what comes next, and what you're approving.",
      description:
        "Publishing becomes unnecessarily stressful when responsibilities are vague.\n\nYour project scope defines the work selected for your book, the sequence in which it happens, the expected deliverables, review points, and relevant publishing responsibilities before production moves forward.",
    },
    deliverableDetails: [
      {
        title: "Manuscript & Publishing Assessment",
        description:
          "A review of the book's current stage, intended readership, formats, production needs, and appropriate publishing path.",
      },
      {
        title: "Project Scope & Publishing Roadmap",
        description:
          "A written record of the selected services, working sequence, review stages, and project expectations.",
      },
      {
        title: "Editorial Deliverables",
        description:
          "The agreed level of manuscript editing and proofreading required before production.",
      },
      {
        title: "Cover & Interior Design",
        description:
          "Approved visual and production assets for the cover and interior according to the selected formats.",
      },
      {
        title: "Print & Digital Master Files",
        description:
          "Publication-ready files prepared for the formats included within the project scope.",
      },
      {
        title: "Book Metadata & Edition Details",
        description:
          "The essential information that identifies, describes, and distinguishes the book and its individual editions.",
      },
    ],
    principles: [
      "Scope agreed before production.",
      "Author approval at meaningful milestones.",
      "Rights and responsibilities written clearly.",
    ],
    fitSection: {
      title:
        "You don't need to know how publishing works. You need to know what you want your book to become.",
      description:
        "Our publishing service is designed for authors who want professional guidance without surrendering involvement in the decisions that shape their book.",
    },
    bestForDetails: [
      {
        title: "FIRST-TIME AUTHORS",
        description:
          "You wrote the manuscript. Now you're facing editing, ISBNs, covers, formatting, files, platforms, printing, and distribution for the first time.\n\nWe'll help you understand what matters, and what doesn't.",
      },
      {
        title: "EXPERIENCED & RETURNING AUTHORS",
        description:
          "You know what publication involves, but you'd rather have the moving pieces coordinated properly than manage every specialist, file, edition, and deadline yourself.",
      },
      {
        title: "MULTI-STAGE PROJECTS",
        description:
          "Your manuscript needs more than a final upload.\n\nWhen editing, design, production, print and digital preparation, metadata, and distribution depend on one another, a coordinated publishing path keeps the book moving as one project.",
      },
    ],
    authority: {
      title:
        "Readers shouldn't notice the production. They should notice the book.",
      description:
        "Professional publishing is full of details that disappear when they're done well.\n\nThe chapter that begins on the right page.\n\nA margin that gives the words room to breathe.\n\nA cover that remains legible at thumbnail size but feels considered in print.\n\nA spine calculated for the final page count.\n\nA table of contents that works properly in an ebook.\n\nMetadata that describes the same book the cover is selling.\n\nA print file that reaches production without an unpleasant surprise.\n\nReaders may never name these decisions.\n\nThey simply experience the result.\n\nAnd that's exactly the point.",
    },
    faqSection: {
      title: "Understand the process before your book enters it.",
      description:
        "No two publishing projects are identical, but authors tend to arrive with many of the same practical questions. Here are the answers worth knowing before production begins.",
    },
    relatedSection: {
      title:
        "Some books arrive ready. Others need another specialist before they do.",
      description:
        "These services often sit before, alongside, or immediately after the publishing process. The right combination depends on the manuscript.",
    },
    relatedDetails: [
      {
        slug: "book-editing-and-proofreading-services",
        name: "BOOK EDITING & PROOFREADING",
        title: "Make every sentence earn its place.",
        description:
          "Developmental editing, line editing, copyediting, and proofreading selected according to what the manuscript genuinely needs.",
        action: "Explore Editing & Proofreading",
      },
      {
        slug: "book-cover-design-services",
        name: "BOOK COVER DESIGN",
        title: "Make the first impression before the first sentence.",
        description:
          "Genre-aware cover strategy and design developed to work both at thumbnail size and in the reader's hands.",
        action: "Explore Book Cover Design",
      },
      {
        slug: "book-distribution-services",
        name: "BOOK DISTRIBUTION",
        title: "Put the book where readers can find it.",
        description:
          "Format readiness, metadata, publishing setup, print-on-demand considerations, listing preparation, and distribution support for selected channels.",
        action: "Explore Book Distribution",
      },
    ],
    cta: {
      title:
        "Bring us the version you have. We'll help identify what it needs next.",
      description:
        "Finished manuscript. Rough draft. Professionally edited book. Designed files waiting for publication.\n\nYou don't need to diagnose the publishing process before speaking with us.\n\nTell us what you've written, where the project currently stands, and what you'd like the finished book to accomplish.\n\nWe'll start with the book, not a prebuilt package.",
      primary: "Open Your Project Brief",
      secondary: "Email the Studio",
    },
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
    metaDescription:
      "Turn your ideas, knowledge, memories, and notes into a book with Scriptora's professional ghostwriting services, shaped around your voice.",
    name: "Ghostwriting Services",
    code: "GW / 04",
    eyebrow: "GHOSTWRITING SERVICES",
    heroTitle: "You don't need to be a writer to have a book worth writing.",
    highlight: "book worth writing.",
    description:
      "Some people arrive with twenty years of experience and no manuscript.\n\nOthers have voice notes, half-written chapters, old journals, research folders, or a story they've told a hundred times but never managed to put on paper.\n\nThat's enough to begin.\n\nScriptora pairs your knowledge, memories, ideas, and perspective with the discipline of a professional book writer, shaping what you know into a manuscript that reads naturally, holds together beautifully, and still feels unmistakably yours.",
    introduction:
      "Good ghostwriting isn't about finding someone who can write *for* you.\n\nIt's about finding someone who can listen closely enough to write *with* you.\n\nYour stories. Your arguments. Your memories. Your humor. Your expertise. Your way of explaining things when you're not trying too hard to sound like an author.\n\nWe study those things before the manuscript takes shape.\n\nThen interviews, conversations, notes, recordings, research, and existing material are organized into a clear narrative or argument, without polishing away the person the book is supposed to represent.\n\nThe craft is ours.   The perspective remains yours.",
    artifacts: ["Your Voice", "Your Ideas", "A Finished Manuscript"],
    outcomesTitle: "The Craft Behind Ghostwriting.",
    outcomesDescription: "",
    outcomes: [
      {
        title: "Before we write like you, we learn how you sound.",
        description:
          "Voice lives in more than vocabulary.\n\nIt's in sentence length. Humor. Rhythm. Directness. The stories you naturally reach for. The words you never use. The difference between how you explain something professionally and how you explain it over coffee.\n\nWe listen for those patterns before full drafting begins.",
      },
      {
        title: "A lifetime of knowledge doesn't arrive in chapter order.",
        description:
          "Ideas overlap. Memories jump decades. Expertise creates tangents. The most important story sometimes appears halfway through an unrelated conversation.\n\nThat's normal.\n\nWe find the underlying thread, organize the material, and build a chapter architecture that gives the reader a clear reason to keep going.",
      },
      {
        title:
          "Memory gives us the story. Research gives it ground to stand on.",
        description:
          "Where the book requires supporting material, we organize the available sources, references, documents, chronology, and factual information around what each chapter needs to accomplish.\n\nResearch should strengthen the author's authority, not bury the reader beneath it.",
      },
      {
        title: "Your involvement doesn't end when ours begins.",
        description:
          "Ghostwriting works best when authors aren't asked to disappear from their own books.\n\nDrafts are reviewed at meaningful stages. Questions are raised while they can still improve the manuscript. Voice, facts, stories, interpretations, and direction are refined collaboratively.\n\nYou remain close enough to recognize yourself on every page.",
      },
    ],
    processTitle:
      "Five stages between “I've always wanted to write a book” and actually having one.",
    processDescription:
      "You don't have to arrive knowing the chapters.\n\nYou don't need a perfect outline.\n\nAnd you certainly don't need to speak in polished paragraphs during an interview.\n\nOur job is to find the book inside the material, and build it with you, one considered stage at a time.",
    process: [
      {
        title: "Find the book behind the idea.",
        label: "LISTEN",
        description:
          "We begin with conversation.\n\nWhy this book? Why now? Who needs to read it? What should they understand, feel, question, remember, or do differently when they finish?\n\nWe also discuss voice, scope, existing material, confidentiality, authorship expectations, research needs, sensitivities, and how involved you'd like to be.\n\nBefore we decide what the chapters are, we understand why the book should exist.",
      },
      {
        title: "Give everything you know somewhere to belong.",
        label: "ARCHITECT",
        description:
          "Now we turn the raw material into a book-shaped idea.\n\nThemes are identified. Stories are placed. Arguments find sequence. Repetition is removed. Gaps become visible. Chapters begin to develop individual jobs within the larger manuscript.\n\nThe result is a working architecture that both author and writer can see before thousands of words are drafted.",
      },
      {
        title: "Make sure the manuscript sounds right before making it long.",
        label: "FIND THE VOICE",
        description:
          "A sample chapter or representative section lets us test the voice on the page.\n\nIs it too formal?\n\nToo polished?\n\nNot polished enough?\n\nDoes the humor sound natural? Does the authority feel earned? Would someone who knows you recognize the person speaking?\n\nThis is where we tune the writing before the manuscript gains momentum.",
      },
      {
        title:
          "Turn conversations and source material into chapters worth reading.",
        label: "WRITE",
        description:
          "With the direction established, drafting begins in meaningful sections.\n\nInterviews, research, notes, anecdotes, existing writing, and new material are shaped into coherent chapters while maintaining continuity across the manuscript.\n\nYou review at agreed milestones so questions and corrections happen while the book is still being built—not after the final chapter arrives.",
      },
      {
        title:
          "Make the manuscript feel as though it always knew what it wanted to say.",
        label: "REFINE",
        description:
          "Once the complete draft exists, we stop looking at individual chapters and read the book as a whole.\n\nWe refine transitions, pacing, repetition, argument, narrative continuity, voice consistency, factual queries, and any remaining structural issues.\n\nThe seams of the process begin to disappear.\n\nWhat's left should feel like one book, one voice, one point of view.",
      },
    ],
    deliverables: [
      "Authorship, Voice & Audience Brief",
      "Interview & Source Plan",
      "Chapter-by-Chapter Architecture",
      "Voice Test / Sample Chapter",
      "Working Chapter Drafts",
      "Complete Revised Manuscript",
    ],
    bestFor: [
      "You've lived the story. Now it needs shape.",
      "Turn what you know into something people can carry with them.",
      "You can know exactly what you want to say and still never find time to write it.",
    ],
    faqs: [
      {
        question: "Will the manuscript actually sound like me?",
        answer:
          "That's one of the central measures of successful ghostwriting.\n\nWe study your natural vocabulary, cadence, perspective, humor, storytelling habits, existing writing, and feedback. A voice-development stage or sample chapter provides an early opportunity to calibrate the writing before full drafting progresses.",
      },
      {
        question: "If someone else writes it, am I still the author?",
        answer:
          "Ghostwriting arrangements are specifically designed around situations where a professional writer helps transform an author's ideas, expertise, experiences, and source material into a manuscript.\n\nHowever, credit, copyright, confidentiality, acknowledgements, permitted portfolio use, and other authorship matters should always be defined explicitly in your individual agreement rather than assumed.",
      },
      {
        question: "How much of the book needs to come from me?",
        answer:
          "Enough to make it genuinely your book.\n\nThat may include interviews, memories, expertise, arguments, documents, stories, research, existing writing, feedback, or factual review.\n\nThe ghostwriter handles the writing process, but the substance and direction of the book depend on the nature of your project and the source material available.",
      },
      {
        question: "What if I only have an idea?",
        answer:
          "That's a valid starting point.\n\nAn early-stage project may begin with discovery conversations designed to determine the book's central idea, reader, purpose, scope, potential structure, and what additional material would be needed before drafting.",
      },
      {
        question:
          "Can you work from recordings, notes, presentations, or existing material?",
        answer:
          "Yes, provided the material can legally be used and shared for the project.\n\nDepending on the book, source material might include notes, journals, presentations, articles, interviews, transcripts, recordings, research, speeches, correspondence, previous drafts, or other relevant documents.",
      },
      {
        question: "Will I need to be interviewed?",
        answer:
          "For many memoir, business, expertise-led, and thought-leadership projects, interviews are one of the most valuable ways to capture knowledge and natural voice.\n\nThe number, length, and structure of conversations depend on the book and the amount of source material already available.",
      },
      {
        question: "What if I'm not good at explaining myself?",
        answer:
          "You don't need to arrive speaking in book-ready paragraphs.\n\nA skilled ghostwriting interview isn't a performance. It's a conversation designed to uncover stories, details, explanations, opinions, and language that can later be shaped on the page.\n\nSometimes the most useful material arrives after someone says, “I'm not sure how to explain this.”",
      },
      {
        question: "Can you ghostwrite fiction?",
        answer:
          "Fiction ghostwriting is possible, but it requires a different process from memoir or expertise-led nonfiction.\n\nPlot, character development, world-building, point of view, genre expectations, narrative voice, and creative ownership all need to be established carefully before substantial drafting begins.",
      },
      {
        question: "How long does ghostwriting a book take?",
        answer:
          "The timeline depends on the book's length, complexity, research requirements, interview schedule, availability of source material, revision depth, and how quickly approvals and feedback are provided.\n\nA serious manuscript should be scheduled around what the work requires rather than an arbitrary promise.",
      },
      {
        question: "Is ghostwriting confidential?",
        answer:
          "Confidentiality requirements should be defined in the project agreement.\n\nThat can include how source material is handled, who knows about the collaboration, whether the writer may discuss the project, and whether any portfolio or acknowledgement use is permitted.",
      },
      {
        question: "What happens once the manuscript is finished?",
        answer:
          "A completed ghostwritten manuscript can move into the appropriate editorial and publishing stages.\n\nDepending on the agreed scope, that may include final editing, proofreading, cover design, formatting, print and ebook preparation, publishing, distribution, and marketing.",
      },
    ],
    related: [
      "book-editing-and-proofreading-services",
      "book-publishing-services",
      "book-marketing-services",
    ],
    heroActions: {
      primary: "Tell Us About Your Book",
      secondary: "See How Ghostwriting Works",
    },
    imageCaption:
      "The writer may shape the sentences. The book still begins with you.",
    introductionTitle:
      "The words can come from someone else. The book shouldn't feel like they did.",
    projectSection: {
      title: "A book shouldn't disappear into a black box for six months.",
      description:
        "Ghostwriting requires trust, but trust shouldn't require guesswork.\n\nThe project is organized around visible stages, agreed responsibilities, defined review points, and tangible manuscript development so you know what is being created and where the work stands.",
    },
    deliverableDetails: [
      {
        title: "Authorship, Voice & Audience Brief",
        description:
          "A working foundation for who the book is speaking to, what it needs to accomplish, how it should sound, and the boundaries that shape the collaboration.",
      },
      {
        title: "Interview & Source Plan",
        description:
          "A structured approach to conversations, documents, research, recordings, existing writing, and other material needed to develop the manuscript.",
      },
      {
        title: "Chapter-by-Chapter Architecture",
        description:
          "A working map of the book's progression, major ideas, narrative beats, arguments, stories, and chapter responsibilities.",
      },
      {
        title: "Voice Test / Sample Chapter",
        description:
          "An early piece of representative writing used to establish tone, cadence, perspective, and author confidence before full drafting accelerates.",
      },
      {
        title: "Working Chapter Drafts",
        description:
          "Manuscript sections developed according to the approved structure and reviewed at the milestones established for the project.",
      },
      {
        title: "Complete Revised Manuscript",
        description:
          "The assembled manuscript refined for continuity, structure, voice, pacing, and the agreed level of final manuscript development.",
      },
    ],
    principles: [
      "Voice established before full drafting.",
      "Author approval at meaningful milestones.",
      "Credit, confidentiality, rights, and responsibilities agreed in writing.",
    ],
    fitSection: {
      title:
        "Sometimes the missing piece isn't the story. It's the time, structure, or distance to write it.",
      description:
        "Ghostwriting can make sense for very different authors. What they usually share is something valuable to say, and a reason they don't want to spend years figuring out how to turn it into a book.",
    },
    bestForDetails: [
      {
        title: "You've lived the story. Now it needs shape.",
        description:
          "A life rarely unfolds with a convenient beginning, middle, and end.\n\nWe help identify the moments that matter, find the narrative thread connecting them, and shape lived experience into a memoir readers can enter, not simply a chronology of everything that happened.",
      },
      {
        title: "Turn what you know into something people can carry with them.",
        description:
          "Years of expertise often live across presentations, conversations, frameworks, client stories, articles, and instincts that have never been formally documented.\n\nWe help turn that knowledge into a structured, readable book without stripping away the authority behind it.",
      },
      {
        title:
          "You can know exactly what you want to say and still never find time to write it.",
        description:
          "For founders, professionals, speakers, experts, and other busy authors, a ghostwriting partnership creates the structure and momentum needed to move a serious book forward without asking you to become a full-time writer.",
      },
    ],
    authority: {
      title: "The best ghostwriting disappears.",
      description:
        "A reader shouldn't finish a chapter wondering which sentence came from the author and which came from the writer.\n\nThey should hear one person.\n\nOne perspective.\n\nOne consistent intelligence guiding them through the book.\n\nGetting there means noticing details that rarely appear in a project proposal.\n\nThe phrase you use whenever something matters deeply.\n\nThe story you've told three times because you haven't realized yet that it's central to the book.\n\nThe moment your voice becomes stiff because you're trying to “sound professional.”\n\nThe anecdote that belongs in chapter seven even though you remembered it during the first interview.\n\nThe explanation that makes perfect sense to an expert but needs another sentence for everybody else.\n\nThe detail you almost leave out because you've lived with it so long that you no longer realize how interesting it is.\n\nThose are writing decisions.\n\nBut they're also listening decisions.\n\nAnd in ghostwriting, listening comes first.",
    },
    faqSection: {
      title: "The questions worth asking before someone writes in your voice.",
      description:
        "Ghostwriting is an unusually close creative partnership. Voice, authorship, confidentiality, involvement, research, and rights should be understood before the manuscript starts growing.",
    },
    relatedSection: {
      title: "Writing the manuscript is one chapter of the journey.",
      description:
        "Once the words are in place, these services commonly help move the project from working manuscript to finished book.",
    },
    relatedDetails: [
      {
        slug: "book-editing-and-proofreading-services",
        name: "BOOK EDITING & PROOFREADING",
        title: "Give the finished manuscript another set of eyes.",
        description:
          "Developmental editing, line editing, copyediting, and proofreading provide an editorial stage beyond the drafting relationship when the project requires it.",
        action: "Explore Editing & Proofreading",
      },
      {
        slug: "book-publishing-services",
        name: "BOOK PUBLISHING",
        title: "Take the manuscript from document to published book.",
        description:
          "A coordinated path through design, formatting, print and digital production, metadata, publishing setup, and distribution preparation.",
        action: "Explore Book Publishing",
      },
      {
        slug: "book-marketing-services",
        name: "BOOK MARKETING",
        title: "Give the finished idea a life beyond the page.",
        description:
          "Positioning, launch planning, author presence, campaign assets, and reader-discovery strategies built around the book and the audience it was written for.",
        action: "Explore Book Marketing",
      },
    ],
    cta: {
      title:
        "You don't need a manuscript to start. You need something worth saying.",
      description:
        "Bring the idea.\n\nThe voice notes.\n\nThe unfinished chapters.\n\nThirty years of experience.\n\nThe story your family keeps telling you to write down.\n\nOr simply the feeling that there's a book somewhere inside everything you know.\n\nTell us what you have and what you hope it could become.\n\nWe'll begin by listening.",
      primary: "Tell Us About Your Book",
      secondary: "Email the Studio",
    },
  },
  "book-editing-and-proofreading-services": {
    slug: "book-editing-and-proofreading-services",
    metaDescription:
      "Developmental editing, line editing, copyediting, and proofreading from Scriptora, selected for your manuscript while preserving your voice.",
    name: "Book Editing & Proofreading",
    code: "ED / 05",
    eyebrow: "BOOK EDITING & PROOFREADING",
    heroTitle:
      "Your voice is already there. Good editing knows where not to touch.",
    highlight: "where not to touch.",
    description:
      "A strong editor doesn't make every manuscript sound polished in the same way.\n\nThey know when a chapter needs rebuilding, when a paragraph needs tightening, when one word is doing too much work, and when a sentence should be left exactly as the author wrote it.\n\nScriptora provides developmental editing, line editing, copyediting, and proofreading at the depth your manuscript actually needs.\n\nThe objective isn't to make the writing sound like us.\n\nIt's to make it sound more completely like you.",
    introduction:
      "A novel with a weak middle doesn't need someone correcting commas first.\n\nA memoir with a strong structure but uneven prose doesn't need to be rebuilt from page one.\n\nAnd a beautifully edited manuscript entering the final layout doesn't need another developmental edit. It needs meticulous proof.\n\nThe important question isn't simply:\n\n“Does my book need editing?”\n\nIt's:\n\n“What kind of editing does it need now?”\n\nWe begin there—identifying the level of editorial attention that will make the greatest difference before unnecessary work begins.",
    artifacts: ["Editorial Assessment", "Tracked Manuscript", "Final Polish"],
    outcomesTitle: "The Four Editorial Layers.",
    outcomesDescription: "",
    outcomes: [
      {
        title: "First, make sure the book works.",
        description:
          "Developmental editing looks beyond individual sentences to the architecture holding the manuscript together.\n\nFor fiction, that can mean plot, pacing, character motivation, point of view, stakes, scene progression, world-building, and narrative payoff.\n\nFor nonfiction, it can mean argument, chapter logic, reader progression, repetition, evidence, positioning, and whether the book actually delivers what it promises.\n\nBefore polishing the language, we ask whether the book underneath it is doing its job.",
      },
      {
        title: "Then listen to how the writing moves.",
        description:
          "Line editing works where craft becomes voice.\n\nSentence rhythm. Word choice. Repetition. Transitions. Clarity. Emphasis. Tone. Awkward phrasing. Paragraph movement.\n\nThe editor works closely with the prose, not to replace its personality, but to remove the moments that keep the reader from experiencing it.",
      },
      {
        title: "Make consistency invisible.",
        description:
          "Names shouldn't change spelling halfway through the book.\n\nA character's eyes shouldn't change color unintentionally.\n\nCapitalization, punctuation, dates, terminology, hyphenation, numbers, citations, and recurring stylistic choices shouldn't depend on which chapter the reader happens to be in.\n\nCopyediting creates that consistency while correcting grammar, usage, mechanics, and appropriate factual or continuity concerns.\n\nReaders rarely notice when it's done well.\n\nThey notice when it isn't.",
      },
      {
        title: "Catch what survived everything else.",
        description:
          "Proofreading is the last editorial defense before publication.\n\nAt this stage, the question is no longer whether chapter seven belongs before chapter six.\n\nIt's whether a word disappeared during revision. Whether quotation marks match. Whether a heading is inconsistent. Whether a page break created an awkward result. Whether a caption, running head, folio, or line of text shifted during formatting.\n\nSmall errors.\n\nVery visible consequences.",
      },
    ],
    processTitle: "A manuscript becomes stronger in deliberate passes.",
    processDescription:
      "Editing works best when the biggest questions are answered before the smallest ones.\n\nThere's little value in perfecting punctuation inside a chapter that may later be removed.\n\nSo we move from diagnosis to deeper editorial decisions, then toward sentence-level refinement and final precision.",
    process: [
      {
        title: "Find out what the manuscript actually needs.",
        label: "DIAGNOSE",
        description:
          "We begin by considering the manuscript's genre, intended reader, stage of development, previous editorial work, publishing plans, and visible strengths and weaknesses.\n\nA sample or manuscript review helps determine whether the priority is structural development, line-level craft, copy consistency, proofreading, or an appropriate sequence of editorial stages.",
      },
      {
        title: "Solve the problems that affect the whole book.",
        label: "DEVELOP",
        description:
          "When developmental editing is required, we step back from individual sentences and examine the manuscript as a complete reading experience.\n\nDoes the opening create enough reason to continue?\n\nDoes the middle lose momentum?\n\nAre characters making believable choices?\n\nDoes the nonfiction reader understand why each chapter follows the last?\n\nDoes the ending deliver what the beginning promised?\n\nThese are questions worth answering before the prose receives its final polish.",
      },
      {
        title:
          "Work sentence by sentence without editing the author out of them.",
        label: "REFINE",
        description:
          "Once the larger structure is stable, attention moves closer to the language.\n\nWe examine rhythm, clarity, word choice, repetition, transitions, dialogue, tone, emphasis, and sentences that make the reader work harder than the idea requires.\n\nChanges and queries remain visible so editorial judgment becomes a conversation rather than an invisible rewrite.",
      },
      {
        title: "Make thousands of small decisions that agree with one another.",
        label: "CONSISTENCY",
        description:
          "Copyediting brings precision across the manuscript.\n\nGrammar, punctuation, spelling, capitalization, numbers, dates, terminology, names, continuity, references, and recurring stylistic choices are reviewed and recorded.\n\nA style sheet helps preserve those decisions across hundreds of pages so chapter twenty-four follows the same editorial logic as chapter one.",
      },
      {
        title: "Read the book readers are actually going to see.",
        label: "PROOF",
        description:
          "After the manuscript enters its designed form, proofreading becomes a different kind of reading.\n\nWe look for remaining textual errors alongside production issues introduced or exposed during layout, awkward breaks, missing text, inconsistent headings, spacing problems, captions, page references, running heads, and other visible details.\n\nAt this point, the manuscript isn't being reinvented.\n\nIt's being protected.",
      },
    ],
    deliverables: [
      "Editorial Assessment & Scope Recommendation",
      "Editorial Report",
      "Tracked or Annotated Manuscript",
      "Author Query Record",
      "Editorial Style Sheet",
      "Clean Accepted Manuscript",
    ],
    bestFor: [
      "The story exists. The architecture still needs work.",
      "The book works. Now make the writing work harder.",
      "Everything looks finished, which is exactly when tiny mistakes become dangerous.",
    ],
    faqs: [
      {
        question:
          "What's the difference between developmental editing, line editing, copyediting, and proofreading?",
        answer:
          "Developmental editing addresses the book at the structural level, plot, character, pacing, organization, argument, reader progression, and other large-scale concerns.\n\nLine editing focuses more closely on the prose itself: clarity, rhythm, word choice, tone, repetition, transitions, and sentence craft.\n\nCopyediting addresses correctness and consistency, including grammar, punctuation, spelling, usage, terminology, continuity, and style decisions.\n\nProofreading is the final quality-control stage, usually performed after formatting, to catch remaining textual and page-level errors.",
      },
      {
        question: "Which type of editing does my manuscript need?",
        answer:
          "That depends on what has already happened to the manuscript and what problems remain.\n\nA sample and project review can help determine whether the priority is structural work, prose refinement, copy consistency, final proofreading, or more than one editorial stage in sequence.",
      },
      {
        question: "Will an editor change my writing style?",
        answer:
          "A good editor shouldn't automatically make your writing resemble theirs.\n\nEditorial changes should improve the manuscript while respecting intentional voice, genre, audience, characterization, tone, and stylistic choices.\n\nWhere meaningful intervention is needed, tracked changes, comments, queries, or editorial discussion allow you to see and evaluate the reasoning.",
      },
      {
        question: "Will I be able to see the edits?",
        answer:
          "For manuscript stages where tracked editing is appropriate, changes and comments can be made visible for author review.\n\nThe precise workflow and deliverables are established within the project scope.",
      },
      {
        question: "Do you edit fiction and nonfiction?",
        answer:
          "Yes.\n\nThe editorial approach should change according to genre and purpose. A fantasy novel, memoir, business book, children's manuscript, and research-led nonfiction project present very different editorial questions.\n\nThe editor and scope should reflect those differences.",
      },
      {
        question:
          "Do I need developmental editing if I've already revised the book several times?",
        answer:
          "Not necessarily.\n\nMultiple revisions don't automatically mean the structure is finished, but they don't automatically mean developmental editing is required either.\n\nThe manuscript should be assessed based on its current condition rather than the number of drafts behind it.",
      },
      {
        question:
          "Can you edit a manuscript that has already been edited by someone else?",
        answer:
          "Yes.\n\nPrevious editing can be useful context, particularly if editorial reports, style sheets, or unresolved queries are available. We assess what the manuscript needs now rather than repeating work simply because it's part of a standard package.",
      },
      {
        question: "Should proofreading happen before or after formatting?",
        answer:
          "Final proofreading is generally most valuable after the book has been formatted.\n\nAt that point, the proofreader can catch remaining textual mistakes as well as issues visible only in the designed pages, such as awkward breaks, spacing, running heads, captions, page references, and layout-related errors.",
      },
      {
        question: "Can proofreading replace copyediting?",
        answer:
          "Usually not.\n\nProofreading is designed to catch remaining errors late in production, not perform substantial sentence-level correction or establish consistency across an unedited manuscript.\n\nIf significant copyediting issues remain, they are better resolved before final layout.",
      },
      {
        question: "How long does editing take?",
        answer:
          "The timeline depends on manuscript length, editorial depth, genre, complexity, manuscript condition, author-review stages, and whether multiple editorial passes are required.\n\nA developmental edit of a complex manuscript and a proofread of a polished book are fundamentally different assignments, so the schedule should reflect the actual work.",
      },
      {
        question: "What happens after editing is complete?",
        answer:
          "That depends on the manuscript's stage.\n\nA developmental edit may lead into author revision and later line or copyediting. A clean copyedited manuscript may move into book formatting and design. A completed proof may be ready for final production and publishing.",
      },
    ],
    related: [
      "ghostwriting-services",
      "book-formatting-services",
      "book-publishing-services",
    ],
    heroActions: {
      primary: "Discuss Your Manuscript",
      secondary: "See How We Edit",
    },
    imageCaption:
      "The best editorial decisions aren't always the words an editor changes. Sometimes they're the ones they choose to leave alone.",
    introductionTitle: "Not every manuscript needs the same kind of editing.",
    projectSection: {
      title: "You should be able to see what changed, and understand why.",
      description:
        "Editorial work shouldn't arrive as a mysterious cleaner-looking document.\n\nDepending on the scope of your project, you may receive editorial reasoning, visible manuscript changes, author queries, consistency records, and a clean accepted version—giving you both the improved manuscript and a clear view of how it got there.",
    },
    deliverableDetails: [
      {
        title: "Editorial Assessment & Scope Recommendation",
        description:
          "An evaluation of the manuscript's current condition and the editorial stage, or sequence of stages, most appropriate for the work.",
      },
      {
        title: "Editorial Report",
        description:
          "When included, a structured discussion of larger manuscript concerns such as narrative architecture, character, pacing, argument, reader progression, recurring craft issues, and revision priorities.",
      },
      {
        title: "Tracked or Annotated Manuscript",
        description:
          "Visible edits, comments, and queries that allow you to review meaningful editorial decisions rather than receiving unexplained changes.",
      },
      {
        title: "Author Query Record",
        description:
          "Questions requiring author judgment, clarification, factual confirmation, creative choice, or additional context.",
      },
      {
        title: "Editorial Style Sheet",
        description:
          "A working record of manuscript-specific decisions around spelling, capitalization, terminology, characters, places, dates, numbers, punctuation, and other consistency points where applicable.",
      },
      {
        title: "Clean Accepted Manuscript",
        description:
          "The manuscript after agreed editorial changes have been reviewed and resolved, ready for the appropriate next production stage.",
      },
    ],
    principles: [
      "The editorial depth is agreed before work begins.",
      "Meaningful changes remain visible to the author.",
      "Voice is strengthened, not standardized.",
    ],
    fitSection: {
      title: "The right editor meets the book at the stage it's actually in.",
      description:
        "Editing isn't one event between writing and publishing. Different manuscripts arrive with different questions still unresolved.",
    },
    bestForDetails: [
      {
        title: "The story exists. The architecture still needs work.",
        description:
          "Ideal for manuscripts where structure, plot, character, argument, chapter order, pacing, or reader progression need attention before sentence-level polishing begins.",
      },
      {
        title: "The book works. Now make the writing work harder.",
        description:
          "For manuscripts with a stable structure that need line editing, copyediting, or both to improve clarity, rhythm, consistency, correctness, and the overall reading experience.",
      },
      {
        title:
          "Everything looks finished, which is exactly when tiny mistakes become dangerous.",
        description:
          "For formatted interiors, print proofs, or publication-ready files requiring one final examination of text and page-level details before release.",
      },
    ],
    authority: {
      title:
        "An editor should know the difference between a mistake and a choice.",
      description:
        "A sentence fragment can be wrong.\n\nIt can also be exactly right.\n\nRepetition can be accidental.\n\nIt can also create rhythm, tension, emphasis, humor, or character.\n\nA long sentence can be difficult to read.\n\nOr it can make a reader feel breathless precisely when the scene demands it.\n\nA narrator can use imperfect grammar because that's how the voice lives.\n\nA memoir can break chronology because memory doesn't always move in straight lines.\n\nA nonfiction author can bend a convention deliberately because clarity matters more than displaying the rulebook.\n\nEditing requires rules.\n\nEditorial judgment requires knowing when the writing has earned the right to break them.\n\nThat's why we don't measure a successful edit by how much red appears on the page.\n\nWe measure it by how much stronger the book becomes.",
    },
    faqSection: {
      title: "Know what kind of editing you're paying for.",
      description:
        "“Editing” can mean very different things depending on who is using the word. Understanding those differences helps you commission the right work at the right stage.",
    },
    relatedSection: {
      title:
        "Once the words are settled, the book can begin taking its final form.",
      description:
        "These services commonly sit before or after editorial work depending on where the manuscript enters the process.",
    },
    relatedDetails: [
      {
        slug: "ghostwriting-services",
        name: "GHOSTWRITING SERVICES",
        title: "When the manuscript still needs to be written.",
        description:
          "A structured writing partnership for turning ideas, interviews, research, experience, and existing material into a complete manuscript.",
        action: "Explore Ghostwriting",
      },
      {
        slug: "book-formatting-services",
        name: "BOOK FORMATTING",
        title: "Give the edited words a page they belong on.",
        description:
          "Interior typography, page architecture, typesetting, image handling, and production-ready files built around the reading experience.",
        action: "Explore Book Formatting",
      },
      {
        slug: "book-publishing-services",
        name: "BOOK PUBLISHING",
        title: "Take the approved manuscript toward publication.",
        description:
          "A coordinated publishing path through design, production, metadata, selected formats, publishing setup, and distribution preparation.",
        action: "Explore Book Publishing",
      },
    ],
    cta: {
      title:
        "Bring us the draft you have, not the one you think you should have.",
      description:
        "First draft.\n\nFifth draft.\n\nA manuscript you've revised until you can no longer tell what's working.\n\nA professionally edited book that needs one final proof.\n\nYou don't need to diagnose the editorial problem before speaking with an editor.\n\nTell us where the manuscript stands and what you're uncertain about.\n\nWe'll begin by reading.",
      primary: "Discuss Your Manuscript",
      secondary: "Email the Studio",
    },
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
    metaDescription:
      "Professional book formatting and typesetting from Scriptora: interior design, typography, page composition, and print-ready production files.",
    name: "Book Formatting",
    code: "FM / 08",
    eyebrow: "Interior design and typesetting",
    heroTitle: "The best-designed pages let the story take over.",
    highlight: "inevitable to the reader",
    description:
      "Think about the last book you couldn't put down.\n\nYou probably remember the characters, the ideas, or the sentence that made you stop reading for a moment.\n\nYou probably don't remember the margins.\n\nThat's the beauty of thoughtful book formatting.\n\nScriptora transforms edited manuscripts into professionally designed book interiors, bringing typography, page composition, chapter structure, typesetting, and print production together to create a reading experience that feels effortless from the first page to the last.",
    introduction:
      "Open a manuscript in a word processor.\n\nThe paragraphs are there. The chapters are there. The story is complete.\n\nBut the reading experience hasn't been designed yet.\n\nHow wide should the margins be? How many words should sit on a line? Where should a chapter begin? How much space does a heading need? What happens when a paragraph ends with a single stranded word?\n\nThese decisions might seem small individually.\n\nAcross two hundred pages, they determine whether reading feels natural or unnecessarily difficult.\n\nProfessional book formatting brings those decisions into harmony.\n\nNot to decorate the manuscript.\n\nTo give the writing the space, structure, and attention it deserves.",
    artifacts: ["Page specification", "Typeset proof", "Print master"],
    outcomesTitle: "The Craft Behind Book Formatting.",
    outcomesDescription: "",
    outcomes: [
      {
        title: "The right typeface does more than look good.",
        description:
          "Typography changes how a book feels before the reader consciously notices it.\n\nTypeface selection, font size, line spacing, character spacing, line length, and paragraph treatment all influence comfort and readability.\n\nA literary novel calls for a different typographic experience than a practical business handbook.\n\nWe make those decisions around the book, its audience, and the way its pages will actually be read.",
      },
      {
        title: "Every chapter should feel like it belongs to the same book.",
        description:
          "Chapter openings, headings, subheadings, quotations, notes, captions, page numbers, and recurring elements need a shared visual language.\n\nWe establish a clear interior design system so the reader can move naturally through the book without being distracted by inconsistent formatting.\n\nEven when the content changes, the book should retain its identity.",
      },
      {
        title:
          "Sometimes the most important thing on a page is the space around the words.",
        description:
          "A chapter opening deserves a moment.\n\nA scene break needs to be understood.\n\nA poem needs room to breathe.\n\nA quotation should stand apart without interrupting the surrounding narrative.\n\nThoughtful spacing, paragraph treatment, page breaks, and visual hierarchy help control the rhythm of reading.\n\nThe page should know when to speak, and when to be quiet.",
      },
      {
        title: "Beautiful on screen. Reliable in print.",
        description:
          "A book interior has to work beyond the design software.\n\nTrim size, binding allowances, margins, embedded fonts, image resolution, bleed requirements, pagination, and export settings all affect the finished product.\n\nWe prepare and check the interior against the agreed production specifications so the design translates into a book readers can actually hold.",
      },
    ],
    processTitle:
      "From a document on your screen to pages that belong between two covers.",
    processDescription:
      "Good formatting is a sequence of considered decisions.\n\nWe begin by understanding the manuscript, establish its visual language, develop the interior, and refine the details before preparing the final production files.\n\nHere's how the pages take shape.",
    process: [
      {
        title: "Understand the book before designing its pages.",
        label: "DISCOVER",
        description:
          "A 90,000-word thriller, a poetry collection, and a heavily illustrated nonfiction book don't need the same interior treatment.\n\nWe begin by reviewing the manuscript's structure, genre, audience, intended formats, images, special elements, and production requirements.\n\nTrim size, binding method, content complexity, and editorial readiness are considered before the first page is designed.\n\nBecause the right layout begins with understanding what the book needs to do.",
      },
      {
        title: "Find the visual language of the book.",
        label: "DESIGN",
        description:
          "This is where the manuscript begins developing its identity on the page.\n\nWe explore appropriate typography, margins, chapter-opening treatments, heading styles, paragraph structure, page numbering, and other interior design elements.\n\nRepresentative sample pages allow you to see how the book will feel before the complete manuscript is typeset.\n\nThe important question isn't simply whether the pages look attractive.\n\nIt's whether they feel right for the book.",
      },
      {
        title: "Give every word its proper place.",
        label: "TYPESET",
        description:
          "With the interior direction approved, we apply the design system throughout the manuscript.\n\nChapters, paragraphs, headings, quotations, images, notes, and other elements are carefully composed into the selected page format.\n\nWe pay attention to the details that shape reading comfort: line breaks, spacing, alignment, page balance, and consistency from one chapter to the next.\n\nThe manuscript begins to feel less like a document.\n\nAnd more like a finished book.",
      },
      {
        title: "Read the pages the way a reader will experience them.",
        label: "REFINE",
        description:
          "Once the full interior is typeset, we review the designed pages for consistency and production concerns.\n\nWidows and orphans, awkward page breaks, inconsistent spacing, misplaced headings, image positioning, pagination, and other layout details are examined and corrected.\n\nAuthor review and final proofreading can also identify textual corrections that need to be incorporated before production.\n\nThis is where hundreds of small decisions begin working together.",
      },
      {
        title: "Prepare the book for the press.",
        label: "FINALIZE",
        description:
          "The approved interior is prepared according to the selected printing specifications.\n\nWe check the relevant production requirements, including page dimensions, margins, fonts, images, bleed where applicable, and export settings.\n\nThe result is a print-ready interior file prepared for the agreed publishing or printing route.\n\nYour manuscript has completed its transformation.\n\nIt's ready to become a physical book.",
      },
    ],
    deliverables: [
      "Interior Design Specification",
      "Representative Sample Pages",
      "Complete Typeset Interior",
      "Print-Ready Interior PDF",
      "Production Quality Checks",
      "Final Correction Record",
    ],
    bestFor: [
      "For books readers want to disappear into.",
      "For books where the arrangement is part of the meaning.",
      "For books that need a new format without losing their identity.",
    ],
    faqs: [
      {
        question: "Is book formatting the same as ebook formatting?",
        answer:
          "Not exactly.\n\nPrint book formatting creates fixed pages designed for a specific trim size and printing method.\n\nMost standard ebooks use reflowable layouts, allowing text to adjust to different screens, font sizes, and reader preferences.\n\nBecause these formats behave differently, ebook creation usually requires separate structural and technical preparation.",
      },
      {
        question: "Should my manuscript be edited before formatting?",
        answer:
          "Ideally, yes.\n\nThe manuscript should normally be copyedited and substantially finalized before full typesetting begins.\n\nMajor revisions after formatting can change page count, chapter breaks, image placement, cross-references, and even the required spine width of the cover.\n\nFinal proofreading is generally performed after layout so remaining textual and page-level issues can be identified in the designed book.",
      },
      {
        question:
          "Can you format books with illustrations, tables, poetry, or other complex elements?",
        answer:
          "Yes.\n\nBooks containing images, tables, footnotes, poetry, exercises, charts, captions, or other specialized content require additional planning.\n\nWe review these elements before establishing the layout because their complexity can affect typography, page composition, production specifications, and project scope.",
      },
      {
        question: "Can you match the formatting of my existing book or series?",
        answer:
          "Yes, where suitable reference material and the necessary rights are available.\n\nWe can work from an existing design system, adapt it for a new edition, or establish consistent formatting guidelines for additional books in a series.\n\nThe objective is to preserve visual continuity while accommodating the needs of each individual volume.",
      },
    ],
    related: [
      "e-book-creation-services",
      "book-cover-design-services",
      "book-editing-and-proofreading-services",
    ],
    heroActions: {
      primary: "Discuss Your Book",
      secondary: "Explore Our Formatting Process",
    },
    imageCaption:
      "Every page has a design. The finest ones know when to disappear.",
    introductionTitle:
      "A manuscript contains the words. A book gives them somewhere to belong.",
    projectSection: {
      title:
        "A beautiful interior begins with decisions you can see and approve.",
      description:
        "Book formatting should be a collaborative process, not a mysterious file conversion.\n\nYour project scope identifies the formats, design requirements, review stages, and final files included in the work.\n\nDepending on the book, the following deliverables may form part of your project.",
    },
    deliverableDetails: [
      {
        title: "Interior Design Specification",
        description:
          "The agreed foundation for typography, trim size, margins, chapter treatments, heading hierarchy, page numbering, and other recurring design decisions.",
      },
      {
        title: "Representative Sample Pages",
        description:
          "A selection of designed pages showing how the book's typography, layout, chapter openings, and other interior elements will appear before full typesetting begins.",
      },
      {
        title: "Complete Typeset Interior",
        description:
          "The manuscript composed into its approved page design, with consistent treatment of chapters, paragraphs, headings, and relevant special elements.",
      },
      {
        title: "Print-Ready Interior PDF",
        description:
          "A production file prepared for the agreed trim size, binding, printing specifications, and selected publishing or print-on-demand route.",
      },
      {
        title: "Production Quality Checks",
        description:
          "Review of applicable technical requirements, including embedded fonts, image resolution, margins, bleed, pagination, and other print-production considerations.",
      },
      {
        title: "Final Correction Record",
        description:
          "A record of agreed revisions and production corrections incorporated during the review and finalization stages.",
      },
    ],
    principles: [
      "Design direction approved before full typesetting.",
      "Meaningful review points throughout production.",
      "Deliverables and file rights defined in writing.",
    ],
    fitSection: {
      title: "The story determines the layout. Never the other way around.",
      description:
        "Every genre creates its own reading experience.\n\nThe interior of a book should respond to the way its readers move through the content—not force every manuscript into the same template.",
    },
    bestForDetails: [
      {
        title: "For books readers want to disappear into.",
        description:
          "Long-form reading depends on comfort, consistency, and an uninterrupted visual rhythm.\n\nWe develop considered typography, balanced margins, clear chapter openings, and carefully composed pages that let readers remain immersed in the narrative.",
      },
      {
        title: "For books where the arrangement is part of the meaning.",
        description:
          "Poetry, educational books, guided journals, business publications, and image-led manuscripts often require more specialized layouts.\n\nVerse structure, exercises, tables, illustrations, quotations, notes, and visual elements are handled according to how readers need to experience and use the material.",
      },
      {
        title:
          "For books that need a new format without losing their identity.",
        description:
          "A new trim size, revised edition, hardcover release, or additional series volume may require the interior to be reconsidered.\n\nWe can adapt an existing layout or develop a consistent design system across related titles, subject to the available source material and production requirements.",
      },
    ],
    faqSection: {
      title: "A few things worth knowing before the pages take shape.",
      description:
        "Book formatting involves both creative decisions and technical requirements. Understanding the difference helps you prepare your manuscript and choose the right production path.",
    },
    relatedSection: {
      title: "The pages are one part of the finished book.",
      description:
        "Formatting connects closely with editorial preparation, cover production, and digital publishing.\n\nThese services often work alongside interior design to help ensure the finished editions feel consistent and professionally prepared.",
    },
    relatedDetails: [
      {
        slug: "e-book-creation-services",
        name: "EBOOK CREATION",
        title: "Give the words a life beyond the printed page.",
        description:
          "Reflowable ebook preparation, navigation, content structure, digital typography, image handling, and file validation for reading across compatible devices.",
        action: "Explore Ebook Creation",
      },
      {
        slug: "book-cover-design-services",
        name: "BOOK COVER DESIGN",
        title: "Make the outside worthy of what's inside.",
        description:
          "Genre-aware cover design that considers visual positioning, typography, composition, and the production requirements of the selected print editions.",
        action: "Explore Book Cover Design",
      },
      {
        slug: "book-editing-and-proofreading-services",
        name: "BOOK EDITING & PROOFREADING",
        title: "Settle the words before setting the pages.",
        description:
          "Developmental editing, line editing, copyediting, and proofreading to strengthen the manuscript and help ensure the final text is ready for production.",
        action: "Explore Editing & Proofreading",
      },
    ],
    cta: {
      title: "You've written the words. Let's give them a place to live.",
      description:
        "Perhaps your manuscript is sitting in a Word document.\n\nPerhaps it's already edited and waiting for design.\n\nOr perhaps you've published before and want the next edition to feel more considered.\n\nTell us what you're working on, the format you have in mind, and where the manuscript currently stands.\n\nYou don't need to know the technical specifications before reaching out.\n\nWe'll begin with the pages.",
      primary: "Discuss Your Book",
      secondary: "Email the Studio",
    },
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
