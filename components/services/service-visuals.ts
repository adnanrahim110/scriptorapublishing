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
  alt: "An illustrated picture-book dummy, character sketches, and pencils in a children’s publishing studio",
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

const serviceVisuals: Record<ServiceSlug, ServiceVisualSet> = {
  "childrens-book-publishing": {
    hero: childrens,
    detail: design,
  },
  "book-publishing-services": {
    hero: publishing,
    detail: editorial,
  },
  "book-marketing-services": {
    hero: distribution,
    detail: design,
  },
  "ghostwriting-services": {
    hero: editorial,
    detail: publishing,
  },
  "book-editing-and-proofreading-services": {
    hero: editorial,
    detail: publishing,
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
