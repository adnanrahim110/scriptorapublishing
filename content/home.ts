// Copy adapted from home.md. Artwork illustrates services and genres;
// it does not represent client books or author endorsements.

export const homeMedia = {
  manuscript: {
    src: "/imgs/home/manuscript.webp",
    alt: "An author reviewing and annotating a manuscript by hand",
  },
  design: {
    src: "/imgs/home/design.webp",
    alt: "Book layout proofs and illustration studies on a designer's desk",
  },
  finishedBook: {
    src: "/imgs/home/finished-book.webp",
    alt: "A clothbound hardcover beside an open book with carefully finished pages",
  },
  conversation: {
    src: "/imgs/home/conversation.webp",
    alt: "An author and editor discussing manuscript pages together",
  },
  readers: {
    src: "/imgs/home/readers.webp",
    alt: "Print books and an e-reader on a bookshop reading table",
  },
} as const;

export const homeSeo = {
  title: "Scriptora | Professional Book Publishing & Self-Publishing Services",
  description:
    "Scriptora is a professional book publishing partner for authors worldwide, offering ghostwriting, editing, book design, illustration, publishing, distribution, and book marketing support.",
} as const;

export const homeHero = {
  title: {
    lead: "Not every book changes the world.",
    emphasis: "The right one changes someone's.",
  },
  description: [
    "Your book may begin with a manuscript, an idea, or simply a story you know needs to be told. What happens next matters.",
    "Scriptora partners with authors to turn meaningful ideas into professionally crafted books, from writing and editorial development to design, publishing, distribution, and beyond. You remain the author. We bring the expertise, structure, and care to help your work reach readers with confidence.",
  ],
  actions: {
    primary: {
      label: "Start Your Publishing Journey",
      href: "#contact",
    },
    secondary: {
      label: "Explore How It Works",
      href: "#process",
    },
  },
  media: {
    stages: [
      {
        src: "/imgs/home/manuscript.webp",
        alt: "An author reviewing and annotating a manuscript by hand",
        label: "Writing",
        objectPosition: "50% center",
      },
      {
        src: "/imgs/home/design.webp",
        alt: "Book layout proofs and illustration studies on a designer's desk",
        label: "Design",
        objectPosition: "50% center",
      },
      {
        src: "/imgs/home/finished-book.webp",
        alt: "A clothbound hardcover beside an open book with carefully finished pages",
        label: "Publishing",
        objectPosition: "50% center",
      },
    ],
  },
} as const;

export const homeLedger = {
  title: "A Book Is More Than Something You Publish.",
  description:
    "It's something you put your name on. Behind every manuscript is a reason it was written. Whatever brought you to the page, we believe it deserves to be taken seriously.",
  statement: "Because when your name is on the cover, every detail matters.",
  entries: [
    {
      title: "A story you've carried for years.",
      description:
        "Perhaps there is a story you've carried for years. Knowledge you've spent a lifetime gathering. A message you believe someone needs to hear. Or simply a book you've always promised yourself you would finish.",
    },
    {
      title: "Designed around the author.",
      description:
        "Scriptora provides professional book publishing services designed around the author, not around a package. From the earliest stages of writing and editing through book design, production, publishing, distribution, and marketing support, we bring the essential pieces together under one roof.",
    },
    {
      title: "Books worth discovering.",
      description:
        "We Don't Believe in Publishing Books Just to Add Another Title to the World. We believe in helping authors create books worth discovering. That means looking beyond the manuscript. Beyond the cover. Beyond the publication date.",
    },
    {
      title: "You bring the story.",
      description:
        "We bring the expertise to help shape it into its finest form. We consider the reader, the market, the message, the presentation, and the author behind the work. Every decision, from the first editorial review to the final published edition—should serve a purpose.",
    },
  ],
} as const;

export const homeServices = {
  title: "Everything Your Book Needs. Nothing Your Vision Doesn't.",
  description:
    "Publishing a book involves far more than putting words between two covers. Our specialists work across the creative and publishing process to give authors access to the expertise they need, without having to coordinate a different company for every stage.",
} as const;

export const homeServiceChapters = [
  {
    number: "01",
    shortLabel: "Writing & Editing",
    media: {
      src: "/imgs/home/manuscript.webp",
      alt: "An author reviewing and annotating a manuscript by hand",
    },
    services: [
      {
        title: "Writing & Ghostwriting",
        lead: "Have the story but not the time, or the words, to tell it?",
        description:
          "Our writing specialists work with you to develop ideas, structure narratives, and create manuscripts that sound authentic to the author behind them.",
        label: "Explore Writing Services",
        href: "/ghostwriting-services",
      },
      {
        title: "Editing & Proofreading",
        lead: "The best editing doesn't replace your voice. It reveals it.",
        description:
          "From developmental guidance and substantive editing to line editing, copyediting, and proofreading, we help ensure your manuscript is clear, coherent, polished, and ready for publication.",
        label: "Explore Editorial Services",
        href: "/book-editing-and-proofreading-services",
      },
    ],
  },
  {
    number: "02",
    shortLabel: "Design & Publishing",
    media: {
      src: "/imgs/home/design.webp",
      alt: "Book layout proofs and illustration studies on a designer's desk",
    },
    services: [
      {
        title: "Book Design & Illustration",
        lead: "Before a reader turns the first page, your book has already spoken.",
        description:
          "Our designers create covers and interiors that reflect your genre, audience, and vision. For children's books and illustrated works, our creative team can develop custom artwork that supports the story rather than simply decorating it.",
        label: "Explore Book Design",
        href: "/book-cover-design-services",
      },
      {
        title: "Publishing & Production",
        lead: "The finished book should feel as considered as the writing inside it.",
        description:
          "We prepare your manuscript for professional print and digital publication, including formatting, typesetting, ebook conversion, production files, ISBN and barcode requirements, and publication setup.",
        label: "Explore Publishing",
        href: "/book-publishing-services",
      },
    ],
  },
  {
    number: "03",
    shortLabel: "Distribution & Marketing",
    media: {
      src: "/imgs/home/readers.webp",
      alt: "Print books and an e-reader on a bookshop reading table",
    },
    services: [
      {
        title: "Distribution",
        lead: "A book can't be discovered if it can't be found.",
        description:
          "We help make your book available through appropriate online and retail distribution channels, giving readers around the world more opportunities to discover, purchase, and read your work.",
        label: "Explore Distribution",
        href: "/book-distribution-services",
      },
      {
        title: "Author & Book Marketing",
        lead: "Publishing puts your book into the world. Marketing helps people find it.",
        description:
          "From author positioning and book descriptions to promotional materials, launch support, digital campaigns, and audience-building strategies, we help create a foundation for your book's visibility.",
        label: "Explore Marketing",
        href: "/book-marketing-services",
      },
    ],
  },
] as const;

export const homePortfolio = {
  title: "Every Genre Has Its Own Language.",
  description:
    "A book should never be treated like a template. Scriptora works with authors across a wide range of genres and formats, including:",
  note: "Whatever you're writing, the approach begins with understanding the work—not forcing it into a predetermined mold.",
  action: "Tell Us About Your Book",
  items: [
    {
      index: "01",
      title: "Fiction",
      description:
        "Novels, literary fiction, romance, fantasy, science fiction, mystery, thriller, historical fiction, and more.",
      media: {
        src: "/imgs/home/genre-fiction.webp",
        alt: "A painted forest path leading toward a distant village, evoking the possibilities of fiction",
      },
    },
    {
      index: "02",
      title: "Nonfiction",
      description:
        "Self-help, personal development, business, leadership, education, how-to, professional, and thought leadership.",
      media: {
        src: "/imgs/home/genre-nonfiction.webp",
        alt: "An illustrated open book, steps, and botanical growth representing learning and knowledge",
      },
    },
    {
      index: "03",
      title: "Memoir & Biography",
      description:
        "Personal stories, family histories, life experiences, biographies, and legacy projects.",
      media: {
        src: "/imgs/home/genre-memoir.webp",
        alt: "An illustrated journal and family photographs in window light, suggesting memory and legacy",
      },
    },
    {
      index: "04",
      title: "Children's Books",
      description:
        "Picture books, illustrated stories, educational books, activity books, and books for young readers.",
      media: {
        src: "/imgs/home/genre-children.webp",
        alt: "A storybook illustration of a child and fox exploring a lantern-lit tree",
      },
    },
    {
      index: "05",
      title: "Poetry & Inspirational",
      description:
        "Poetry collections, devotional works, inspirational books, reflections, and creative collections.",
      media: {
        src: "/imgs/home/genre-poetry.webp",
        alt: "A contemplative painting of reeds and light reflected in still water",
      },
    },
    {
      index: "06",
      title: "Specialized & Professional Works",
      description:
        "Guides, workbooks, educational titles, niche publications, and expertise-driven books.",
      media: {
        src: "/imgs/home/genre-professional.webp",
        alt: "An illustrated workbook, pencil, ruler, and plans representing specialist knowledge",
      },
    },
  ],
} as const;

export const homeProcess = {
  title: "From First Word to Finished Book.",
  description:
    "A great book rarely happens in one step. It develops through hundreds of decisions, some visible, many not. Our role is to make those decisions with you, not for you.",
  experience: {
    title:
      "You Shouldn't Have to Become a Publishing Expert to Publish a Professional Book.",
    paragraphs: [
      "There is a lot to navigate. Manuscript preparation. Editing. Cover design. Interior formatting. ISBNs. Metadata. Print editions. Ebooks. Distribution. Marketing.",
      "You could spend months learning the industry before you ever reach your readers. Or you could have a publishing partner beside you.",
      "Scriptora brings professional guidance to each stage, explains what matters, and helps you make informed decisions along the way.",
    ],
    conclusion:
      "You write the book. We'll help you navigate everything that comes after.",
  },
  steps: [
    {
      index: "01",
      title: "Discover",
      lead: "Start with the story behind the story.",
      description:
        "We begin by understanding your manuscript, your goals, your intended readers, and what you want your book to accomplish. If the manuscript is still taking shape, we can help determine what it needs before production begins.",
      media: {
        src: "/imgs/home/conversation.webp",
        alt: "An author and editor discussing manuscript pages together",
      },
    },
    {
      index: "02",
      title: "Develop",
      lead: "Refine the work without losing the voice behind it.",
      description:
        "From ghostwriting and developmental guidance to professional editing and proofreading, our specialists help strengthen the manuscript while preserving what makes it yours.",
      media: {
        src: "/imgs/home/manuscript.webp",
        alt: "An author reviewing and annotating a manuscript by hand",
      },
    },
    {
      index: "03",
      title: "Design",
      lead: "Give the words a world worthy of them.",
      description:
        "A professional book needs more than a good cover. Our design process considers cover art, typography, interior layout, illustrations where appropriate, and the reading experience as a whole.",
      media: {
        src: "/imgs/home/design.webp",
        alt: "Book layout proofs and illustration studies on a designer's desk",
      },
    },
    {
      index: "04",
      title: "Publish",
      lead: "Prepare your book to meet its readers.",
      description:
        "We handle the technical and production requirements involved in professional publishing, including print and digital editions, ISBN and barcode requirements, metadata, publishing setup, and distribution.",
      media: {
        src: "/imgs/home/finished-book.webp",
        alt: "A clothbound hardcover beside an open book with carefully finished pages",
      },
    },
    {
      index: "05",
      title: "Grow",
      lead: "Publication is a milestone. Not the end of the journey.",
      description:
        "Once your book is ready for readers, we can help with author positioning, marketing assets, promotional strategy, audience development, and the next chapter of your publishing journey.",
      media: {
        src: "/imgs/home/readers.webp",
        alt: "Print books and an e-reader on a bookshop reading table",
      },
    },
  ],
  action: "Discover the Scriptora Method",
} as const;

export const homeRights = {
  title: "Because Publishing Should Feel Like a Partnership.",
  description:
    "There are plenty of companies that can help you publish a book. We don't intend to be remembered simply as one of them. Scriptora was built around a different idea: authors deserve a publishing partner who is invested in the quality of the work, transparent about the process, and present throughout the journey.",
  entries: [
    {
      title: "One Partner. One Clear Journey.",
      description:
        "Instead of coordinating editors, designers, formatters, publishers, and marketers yourself, Scriptora brings the essential expertise together through one coordinated publishing experience.",
    },
    {
      title: "Specialists for the Book You're Writing.",
      description:
        "A children's picture book isn't edited like a thriller. A memoir isn't designed like a business book. A fantasy novel doesn't speak to readers the same way as a devotional. Your book deserves specialists who understand its category, audience, and purpose.",
    },
    {
      title: "Your Name. Your Work. Your Rights.",
      description:
        "You created the work. You should remain in control of it. Our assisted self-publishing model is designed to give authors professional support while maintaining ownership and control of their intellectual property.",
    },
    {
      title: "One Investment. No Complicated Subscription Model.",
      description:
        "Our services are structured around a clear, one-time investment for the work you commission—not a subscription designed to keep charging you simply for remaining with us.",
    },
    {
      title: "Human Guidance Throughout.",
      description:
        "Publishing can be complicated. Your experience with us shouldn't be. You'll have a dedicated point of contact to help coordinate your project, answer questions, explain the next step, and keep your publishing journey moving forward.",
    },
    {
      title: "Built for the Book—and the Author Behind It.",
      description:
        "We don't measure success only by whether a book goes live. We care about whether you understand the process, feel proud of the finished work, and have a foundation from which to build your next chapter.",
    },
  ],
  statement: "Your work. Your voice. Your rights.",
  note: "Scriptora operates as your publishing partner, not the owner of your story. You remain in control of your intellectual property and creative work while our specialists help you navigate the professional side of bringing it to readers.",
} as const;

export const homeDistribution = {
  title: 'What Happens After "Published"?',
  description:
    "For some authors, one book is the destination. For others, it's the beginning of something much larger. That's why we think beyond publication.",
  routes: [
    {
      title: "A second book. A series.",
      position: "left",
    },
    {
      title: "A speaking career.",
      position: "top",
    },
    {
      title: "A personal brand.",
      detail: "A business built around your expertise.",
      position: "right",
    },
    {
      title: "A body of work.",
      detail: "For your family to keep for generations.",
      position: "bottom",
    },
  ],
  continuation:
    "As your publishing partner, Scriptora can continue supporting the development of your author platform, future books, marketing efforts, and long-term publishing goals.",
  conclusion: "Because publication is a milestone. Authorship is a journey.",
} as const;

export const homeMarginalia = {
  title: "We Treat Your Name Like It Matters.",
  description:
    "Because it does. Your book will carry your name long after a project is marked complete. That's why we believe in thoughtful communication, professional standards, transparent expectations, and careful attention to the details readers may never consciously notice, but will always feel.",
  notes: [
    {
      title: "No rushed production for the sake of a deadline.",
      media: {
        src: "/imgs/home/design.webp",
        alt: "Book layout proofs and illustration studies on a designer's desk",
      },
    },
    {
      title:
        "No one-size-fits-all approach where your book gets lost in a template.",
      media: {
        src: "/imgs/home/manuscript.webp",
        alt: "An author reviewing and annotating a manuscript by hand",
      },
    },
    {
      title:
        "No unnecessary complexity simply because publishing is complicated.",
      media: {
        src: "/imgs/home/conversation.webp",
        alt: "An author and editor discussing manuscript pages together",
      },
    },
  ],
  conclusion:
    "Just a team focused on helping you produce work you are proud to call your own.",
} as const;

export const homeFaqTitle = "Questions Authors Ask Before They Begin" as const;

export const homeFaqs = [
  {
    question: "Do I need a finished manuscript to work with Scriptora?",
    answer:
      "No. Depending on your project, we can work with a completed manuscript, an early draft, a book concept, or an idea that still needs development. During the initial consultation, we'll determine what stage you're at and what kind of support would be most appropriate.",
  },
  {
    question: "Does Scriptora publish all types of books?",
    answer:
      "We work with authors across a broad range of genres, including fiction, nonfiction, memoir, biography, children's books, poetry, inspirational works, business books, educational titles, and more. The exact services and production requirements depend on the book.",
  },
  {
    question: "Do I keep ownership of my book?",
    answer:
      "Our assisted self-publishing model is designed around author ownership. Your intellectual property remains yours, subject to the specific terms of your agreement with Scriptora.",
  },
  {
    question: "Can Scriptora help me write my book?",
    answer:
      "Yes. If you have an idea, outline, notes, recordings, or an incomplete manuscript, our writing and ghostwriting specialists can help develop the material into a cohesive manuscript while working closely with you on your vision and voice.",
  },
  {
    question: "Can you edit a manuscript I've already written?",
    answer:
      "Absolutely. Depending on what your manuscript needs, we can provide developmental editing, line editing, copyediting, proofreading, or a combination of editorial services.",
  },
  {
    question: "Do you provide book cover design and interior formatting?",
    answer:
      "Yes. Our book design services can include custom cover design, interior layout, typography, typesetting, and preparation for print and digital formats. Children's and illustrated books can also receive custom illustration support.",
  },
  {
    question: "Can my book be published in print and ebook formats?",
    answer:
      "Yes. We can prepare books for professional print and digital publication, with the appropriate formats determined by your project and distribution requirements.",
  },
  {
    question: "Do you help with Amazon and other book retailers?",
    answer:
      "We can assist with publishing and distribution setup so your book can be made available through appropriate retail and digital channels. The specific platforms and availability depend on the publishing and distribution arrangement selected for your project.",
  },
  {
    question: "How much does publishing a book cost?",
    answer:
      "There is no single price that makes sense for every book. A children's picture book with custom illustrations, a 90,000-word novel, and a professionally developed business book have very different production requirements.\n\nRather than forcing every author into the same package, we first understand your project and recommend the services that actually fit it.",
  },
  {
    question: "How long does the publishing process take?",
    answer:
      "Timelines vary depending on the manuscript's condition, editing requirements, design complexity, illustration requirements, author approvals, and publishing specifications. We'll establish a realistic project timeline before production begins.",
  },
  {
    question: "Do you offer marketing?",
    answer:
      "Yes. Marketing support can include author positioning, book marketing assets, launch support, promotional strategy, digital marketing, and audience development. The appropriate approach depends on your book, genre, goals, and target readers.",
  },
] as const;

export const homeContact = {
  title: "Your Book Has Already Started.",
  description:
    "Whether you have a finished manuscript, a work in progress, or an idea that has lived in your head for years, you don't have to navigate the publishing process alone.",
  subtitle: "Now let's decide where it goes.",
  invitation:
    "Tell us about your book, where you are in the process, and what you hope it becomes.",
  conclusion: "We'll help you understand what comes next.",
  action: "Start a Conversation",
  secondaryAction: "Book a Consultation",
} as const;

export const homeBrandStatement = {
  title: "Your Story Deserves a Publishing Partner.",
  description:
    "Not a transaction. Not a template. Not another number in a production queue. A partner who understands that behind every manuscript is an author who cared enough to write it.",
  conclusion: "That's Scriptora.",
  action: "Begin Your Publishing Journey",
} as const;

export const homeFooter = {
  description:
    "Professional book publishing, writing, editing, design, production, distribution, and marketing support for authors across genres.",
  invitation:
    "Have a manuscript, an idea, or simply a story that needs a place to begin?",
  explore: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Scriptora",
      href: "/about-us",
    },
    {
      label: "Our Process",
      href: "/#process",
    },
    {
      label: "Services",
      href: "/#services",
    },
    {
      label: "Authors & Genres",
      href: "/#authors",
    },
    {
      label: "FAQs",
      href: "/#faqs",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ],
  services: [
    {
      label: "Ghostwriting & Book Writing",
      href: "/ghostwriting-services",
    },
    {
      label: "Editing & Proofreading",
      href: "/book-editing-and-proofreading-services",
    },
    {
      label: "Book Cover Design",
      href: "/book-cover-design-services",
    },
    {
      label: "Book Formatting & Typesetting",
      href: "/book-formatting-services",
    },
    {
      label: "Children's Book Illustration",
      href: "/childrens-book-publishing",
    },
    {
      label: "Print & Ebook Publishing",
      href: "/book-publishing-services",
    },
    {
      label: "Book Distribution",
      href: "/book-distribution-services",
    },
    {
      label: "Author & Book Marketing",
      href: "/book-marketing-services",
    },
  ],
} as const;

export const homeContactServices = [
  "Writing & ghostwriting",
  "Editing & proofreading",
  "Book design & illustration",
  "Publishing & production",
  "Book distribution",
  "Author & book marketing",
] as const;
