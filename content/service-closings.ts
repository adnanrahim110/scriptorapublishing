import type { ServiceClosing } from "./services";

export const serviceClosings: Readonly<Record<string, ServiceClosing>> = {
  "book-publishing-services": {
    title:
      "Books are remembered for what they say. They're trusted because of how they're made.",
    description:
      "The editing. The typography. The cover. The paper. The digital edition. The metadata. The tiny decisions nobody applauds when they're right, and everybody notices when they're wrong.\n\nScriptora brings those decisions into one considered publishing process.\n\nSo when your name finally appears on the cover, the book beneath it feels worthy of being there.",
    action: "Review Our Services",
    href: "/#services",
  },
  "ghostwriting-services": {
    title:
      "Your name may be the one on the cover. Your voice should be the one readers remember.",
    description:
      "A ghostwriter brings structure, language, discipline, and perspective to the page.\n\nYou bring the reason the book deserves to exist.\n\nWhen the partnership works, readers never feel the distance between the two.\n\nThey simply feel that someone had something worth saying, and knew exactly how to say it.",
    action: "Start the Conversation",
    href: "/contact-us",
  },
  "book-editing-and-proofreading-services": {
    title: "The reader should feel the writing. Not the editing behind it.",
    description:
      "The moved paragraph.\n\nThe unnecessary sentence that disappeared.\n\nThe word that finally says exactly what you meant.\n\nThe inconsistency caught three hundred pages after it began.\n\nThe comma nobody will ever thank us for fixing.\n\nGood editing leaves traces everywhere in the making of a book.\n\nAnd almost none in the reader's experience.\n\nThat's how it should be.",
    action: "Review Our Services",
    href: "/#services",
  },
  "book-formatting-services": {
    title: "A beautiful book doesn't ask readers to admire its formatting.",
    description:
      "It invites them to keep reading.\n\nThrough the opening chapter.\n\nAcross the quiet space between scenes.\n\nPast the page they promised would be their last.\n\nUntil the story, the ideas, and the words have their full attention.\n\nBehind that experience are thousands of decisions about type, space, structure, and detail.\n\nDecisions readers may never notice.\n\nBut they'll feel the difference on every page.",
    action: "Explore Our Services",
    href: "/#services",
  },
};
