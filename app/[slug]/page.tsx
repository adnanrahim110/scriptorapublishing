import ServiceCta from "@/components/services/service-cta";
import ServiceDeliverables from "@/components/services/service-deliverables";
import ServiceFaq from "@/components/services/service-faq";
import ServiceHero from "@/components/services/service-hero";
import ServiceOutcomes from "@/components/services/service-outcomes";
import ServiceProcess from "@/components/services/service-process";
import ServiceRelated from "@/components/services/service-related";
import {
  getServiceDetail,
  serviceDetails,
  type ServiceSlug,
} from "@/content/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(serviceDetails)
    .filter((slug) => slug !== "childrens-book-publishing")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    return {
      title: "Publishing Service | Scriptora Publishing",
    };
  }

  return {
    title: `${service.name} | Scriptora Publishing`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceDetail(slug as ServiceSlug);

  if (!service) notFound();

  return (
    <main>
      <ServiceHero service={service} />
      <ServiceOutcomes service={service} />
      <ServiceProcess service={service} />
      <ServiceDeliverables service={service} />
      <ServiceFaq service={service} />
      <ServiceRelated service={service} />
      <ServiceCta service={service} />
    </main>
  );
}
