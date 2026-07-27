export const childrenPage = {
  hero: {
    eyebrow: "Children’s book publishing",
    titleLead: "Big little stories,",
    titleTail: "beautifully brought to life.",
    description:
      "From a first spark to a finished picture book, we bring story, character, illustration, and publishing craft together in one thoughtful studio journey.",
    note: "Built for young readers. Guided by your voice.",
  },
  readerPaths: [
    {
      number: "01",
      title: "Picture books",
      age: "Typically ages 3–8",
      description:
        "Visual-first stories where rhythm, page turns, and expressive artwork do the storytelling together.",
      color: "#ff715f",
    },
    {
      number: "02",
      title: "Early readers",
      age: "Typically ages 5–9",
      description:
        "Clear, confidence-building books with inviting language, purposeful repetition, and lively visual cues.",
      color: "#35b8ad",
    },
    {
      number: "03",
      title: "Illustrated chapters",
      age: "Typically ages 7–12",
      description:
        "Longer adventures with memorable characters, readable structure, and illustrations placed for maximum impact.",
      color: "#7067d8",
    },
  ],
  carePoints: [
    {
      title: "Story shaping",
      description:
        "Age-aware editing, pacing, voice, and page-turn moments that keep the story clear without sanding away its charm.",
    },
    {
      title: "Character worlds",
      description:
        "Character exploration, visual references, and setting direction designed to make every spread feel like the same world.",
    },
    {
      title: "Illustration & layout",
      description:
        "A cohesive art direction, storyboard, full-page artwork, typography, and layouts that let words and pictures breathe.",
    },
    {
      title: "Print & digital production",
      description:
        "Careful proofing and production-ready files for the formats and distribution path selected for your book.",
    },
  ],
  journey: [
    {
      chapter: "Chapter one",
      title: "Find the story’s heartbeat",
      description:
        "We begin with the reader age, central feeling, characters, setting, and the moment you most want a child to remember.",
      detail: "Creative brief · audience · tone",
      image: "/imgs/children/story-workshop.webp",
      imageAlt:
        "Fox, bear, and rabbit developing a story together in a treehouse studio",
      accent: "#ffd85a",
    },
    {
      chapter: "Chapter two",
      title: "Shape words for young ears",
      description:
        "Your manuscript is refined for clarity, rhythm, read-aloud flow, and age-appropriate vocabulary while protecting your voice.",
      detail: "Editing · pacing · page turns",
      image: "/imgs/children/story-workshop.webp",
      imageAlt:
        "Storybook characters reviewing illustrated story cards and color notes",
      accent: "#ff715f",
    },
    {
      chapter: "Chapter three",
      title: "Storyboard the adventure",
      description:
        "We map each spread before final art begins, balancing quiet beats, reveals, text space, and visual movement across the book.",
      detail: "Thumbnails · spreads · approvals",
      image: "/imgs/children/painted-journey.webp",
      imageAlt:
        "Fox, bear, and rabbit travelling through a landscape of painted story pages",
      accent: "#35b8ad",
    },
    {
      chapter: "Chapter four",
      title: "Paint a world worth revisiting",
      description:
        "Characters, environments, color, and typography are developed as one visual language, with review points before finalization.",
      detail: "Characters · illustration · layout",
      image: "/imgs/children/painted-journey.webp",
      imageAlt:
        "A richly painted journey through changing picture-book scenes",
      accent: "#8d83ee",
    },
    {
      chapter: "Final chapter",
      title: "Prepare the book for readers",
      description:
        "We proof the complete book, prepare the agreed print and digital files, and guide the publishing setup for your chosen release path.",
      detail: "Proofing · files · publishing",
      image: "/imgs/children/readers-harbor.webp",
      imageAlt:
        "Fox, bear, and rabbit sailing on an open book toward a glowing library",
      accent: "#f4a7c7",
    },
  ],
  artDirections: [
    {
      title: "Soft & wonder-filled",
      description: "Airy color, gentle texture, and room for quieter stories.",
      swatches: ["#f7c9a7", "#8ecac4", "#f7e4a1"],
    },
    {
      title: "Bold & character-led",
      description: "Confident shapes and expressions made for comic energy.",
      swatches: ["#ff715f", "#243f56", "#ffd85a"],
    },
    {
      title: "Classic storybook",
      description: "Painterly warmth with timeless detail and atmosphere.",
      swatches: ["#a55a34", "#2d726f", "#e9c985"],
    },
    {
      title: "Magical adventure",
      description: "Cinematic light and layered worlds for bigger journeys.",
      swatches: ["#7067d8", "#153d55", "#f4a7c7"],
    },
  ],
  deliverables: [
    "Story and audience brief",
    "Edited manuscript",
    "Character and art direction",
    "Page-by-page storyboard",
    "Final illustrations",
    "Cover and interior layout",
    "Proofed production files",
    "Publishing setup guidance",
  ],
  faqs: [
    {
      question: "Can you help if I only have an idea?",
      answer:
        "Yes. We can begin with a concept, character, lesson, or rough draft and define the right writing, editing, illustration, and publishing path from there.",
    },
    {
      question: "How is the illustration style chosen?",
      answer:
        "We align the art direction with the reader age, tone, genre, and emotional world of the story. Visual references and character directions are approved before final illustrations move ahead.",
    },
    {
      question: "Will I review the words and artwork?",
      answer:
        "Yes. The workflow includes clear review points for the manuscript, character direction, storyboard, illustrations, and laid-out book so feedback happens at the right stage.",
    },
    {
      question: "Can you prepare both print and digital editions?",
      answer:
        "Yes. We can prepare the formats that suit your project, including print-ready interiors and covers plus compatible digital files where appropriate.",
    },
    {
      question: "Do you work with picture books and chapter books?",
      answer:
        "Yes. The process adapts to picture books, early readers, and illustrated chapter or middle-grade projects, each with different pacing, layout, and art requirements.",
    },
    {
      question: "Who owns the finished work?",
      answer:
        "Ownership, licensing, source files, and usage terms are documented in your project agreement before production begins, so the rights position is clear from the start.",
    },
  ],
} as const;

