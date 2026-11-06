import ServiceCta from "@/components/services/service-cta";
import ServiceDeliverables from "@/components/services/service-deliverables";
import ServiceFaq from "@/components/services/service-faq";
import ServiceHero from "@/components/services/service-hero";
import ServiceOutcomes from "@/components/services/service-outcomes";
import ServiceProcess from "@/components/services/service-process";
import ServiceRelated from "@/components/services/service-related";
import ServiceNarrative from "@/components/services/service-narrative";
import { getServiceDetail, serviceDetails } from "@/content/services";
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
    description:
      service.metaDescription ?? service.description.replace(/\s+/g, " "),
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) notFound();

  return (
    <main>
      <ServiceHero service={service} />
      {service.introductionTitle && (
        <ServiceNarrative
          id="service-introduction-title"
          copy={{
            title: service.introductionTitle,
            description: service.introduction,
          }}
        />
      )}
      <ServiceOutcomes service={service} />
      <ServiceProcess service={service} />
      <ServiceDeliverables service={service} />
      {service.authority && (
        <ServiceNarrative
          id="service-authority-title"
          copy={service.authority}
        />
      )}
      <ServiceFaq service={service} />
      <ServiceRelated service={service} />
      <ServiceCta service={service} />
    </main>
  );
}
