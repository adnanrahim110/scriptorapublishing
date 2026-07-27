import LegalDocument from "@/components/legal/legal-document";
import {
  getLegalDocument,
  legalDocuments,
  type LegalSlug,
} from "@/content/legal";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type LegalPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(legalDocuments).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = getLegalDocument(slug);

  if (!document) {
    return {
      title: "Legal Document | Scriptora Publishing",
    };
  }

  return {
    title: `${document.shortTitle} | Scriptora Publishing`,
    description: document.description,
  };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const document = getLegalDocument(slug as LegalSlug);

  if (!document) notFound();

  return <LegalDocument document={document} />;
}
