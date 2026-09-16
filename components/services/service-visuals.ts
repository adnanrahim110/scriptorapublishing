import type { ServiceSlug } from "@/content/services";

type ServiceImage = {
  src: string;
  alt: string;
  position?: string;
};

type ServiceVisualSet = {
  hero: ServiceImage;
  detail: ServiceImage;
};

const editorial = {
  src: "/imgs/service-editorial-studio.webp",
  alt: "A marked manuscript, pencil, bound book, and proof pages in a warm editorial studio",
} as const;

const design = {
  src: "/imgs/service-design-studio.webp",
  alt: "Book-cover studies, paper samples, and a digital reading layout in a publishing design studio",
} as const;

const audio = {
  src: "/imgs/service-audio-studio.webp",
  alt: "A narration microphone, headphones, and open book in an audiobook recording studio",
} as const;

const childrens = {
  src: "/imgs/service-childrens-studio.webp",
  alt: "An illustrated picture-book dummy, character sketches, and pencils in a children's publishing studio",
} as const;

const distribution = {
  src: "/imgs/service-distribution-studio.webp",
  alt: "Finished books, a wrapped parcel, and a digital distribution map in a publishing studio",
} as const;

const publishing = {
  src: "/imgs/hero-publishing-studio.png",
  alt: "An open handcrafted book and loose paper signatures in a warm publishing studio",
  position: "50% 58%",
} as const;

const bpHero = {
  src: "/imgs/bp_hero.jpg",
  alt: "A beautiful, professionally bound book resting on a warm wooden desk",
} as const;

const bpDetail = {
  src: "/imgs/bp_detail.jpg",
  alt: "A publishing studio desk showing a production process with print and digital master files",
} as const;

const gwHero = {
  src: "/imgs/gw_hero.jpg",
  alt: "A writer's collaborative desk with voice notes, old journals, and research folders",
} as const;

const gwDetail = {
  src: "/imgs/gw_detail.jpg",
  alt: "Chapter-by-chapter architecture spread out on a wooden table with working drafts",
} as const;

const edHero = {
  src: "/imgs/ed_hero.jpg",
  alt: "A marked manuscript with editorial corrections in a warm editorial studio",
} as const;

const edDetail = {
  src: "/imgs/ed_detail.jpg",
  alt: "A clean, polished accepted manuscript next to an editorial style sheet",
} as const;

const serviceVisuals: Record<ServiceSlug, ServiceVisualSet> = {
  "childrens-book-publishing": {
    hero: childrens,
    detail: design,
  },
  "book-publishing-services": {
    hero: bpHero,
    detail: bpDetail,
  },
  "book-marketing-services": {
    hero: distribution,
    detail: design,
  },
  "ghostwriting-services": {
    hero: gwHero,
    detail: gwDetail,
  },
  "book-editing-and-proofreading-services": {
    hero: edHero,
    detail: edDetail,
  },
  "author-website-design-services": {
    hero: design,
    detail: distribution,
  },
  "book-cover-design-services": {
    hero: design,
    detail: editorial,
  },
  "book-formatting-services": {
    hero: editorial,
    detail: design,
  },
  "audiobook-production-services": {
    hero: audio,
    detail: editorial,
  },
  "e-book-creation-services": {
    hero: design,
    detail: editorial,
  },
  "book-distribution-services": {
    hero: distribution,
    detail: publishing,
  },
};

export function getServiceVisuals(slug: string): ServiceVisualSet {
  return (
    serviceVisuals[slug as ServiceSlug] ?? {
      hero: publishing,
      detail: editorial,
    }
  );
}
