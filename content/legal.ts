export type LegalSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  note?: string;
};

export type LegalDocument = {
  slug: string;
  code: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  effectiveDate: string;
  appliesTo: string;
  introduction: string;
  sections: readonly LegalSection[];
  companion: {
    label: string;
    href: string;
  };
};

export const legalDocuments = {
  "privacy-policy": {
    slug: "privacy-policy",
    code: "PP / 001",
    eyebrow: "Privacy policy",
    title: "Your information should be handled with the same care as your manuscript.",
    shortTitle: "Privacy Policy",
    description:
      "This notice explains what personal information Scriptora Publishing receives through this website and direct correspondence, why it is used, and the choices available to you.",
    effectiveDate: "July 28, 2026",
    appliesTo: "Website visitors and publishing enquiries",
    introduction:
      "This Privacy Policy applies to Scriptora Publishing’s public website and the enquiries initiated through it. A signed publishing agreement or another specific service arrangement may include additional terms for project files, contributors, payments, or production platforms.",
    sections: [
      {
        id: "information-we-receive",
        title: "Information we receive",
        paragraphs: [
          "We receive information you choose to provide when you contact us, request information, discuss a publishing project, or correspond with the studio.",
          "The public contact form currently prepares an email in your own email application. The information is not sent to Scriptora until you review and send that email.",
        ],
        bullets: [
          "Your name, email address, and telephone number.",
          "The publishing service you are interested in.",
          "Your message, project description, manuscript stage, and stated goals.",
          "Files or other materials you later choose to send through direct correspondence.",
          "Records of our communications and any preferences you communicate.",
          "Limited technical information that hosting, security, or network providers may process when serving the website, such as an IP address, browser type, device details, request time, and requested page.",
        ],
      },
      {
        id: "how-we-use-information",
        title: "How we use information",
        paragraphs: [
          "We use personal information only where it is reasonably connected to an enquiry, a requested service, website operation, business administration, or a legal obligation.",
        ],
        bullets: [
          "To respond to enquiries and understand the publishing support you are seeking.",
          "To assess a manuscript or project brief when you ask us to do so.",
          "To prepare consultations, proposals, scopes, schedules, or service agreements.",
          "To provide and coordinate contracted publishing services.",
          "To maintain correspondence, project, financial, and administrative records.",
          "To protect the website, our communications, our rights, and the rights of others.",
          "To comply with applicable legal, accounting, regulatory, or dispute-resolution requirements.",
        ],
        note:
          "Where data-protection law requires a legal basis, processing may rely on steps taken at your request before a contract, performance of a contract, legitimate business interests, legal obligations, or consent—depending on the activity and your location.",
      },
      {
        id: "manuscripts-and-project-materials",
        title: "Manuscripts and project materials",
        paragraphs: [
          "A manuscript remains the author’s material. Sending a manuscript or project sample for review does not transfer copyright or ownership to Scriptora.",
          "We use submitted material only to consider your enquiry, prepare requested services, or perform an agreed project. More detailed confidentiality, access, storage, and production terms may be included in the applicable proposal, nondisclosure agreement, or project agreement.",
        ],
      },
      {
        id: "sharing-and-service-providers",
        title: "Sharing and service providers",
        paragraphs: [
          "Scriptora does not sell or rent personal information. Information may be shared only as reasonably necessary to operate the website, communicate with you, administer the business, comply with law, or deliver services you have requested.",
        ],
        bullets: [
          "Website hosting, security, email, cloud-storage, communication, and business-administration providers.",
          "Editors, designers, producers, distributors, or other publishing specialists involved in an agreed project and given only the information needed for their role.",
          "Professional advisers, insurers, payment or accounting providers, and public authorities where access is necessary or legally required.",
          "A successor or transaction adviser if the business is involved in a reorganisation, financing, merger, sale, or transfer, subject to appropriate confidentiality requirements.",
        ],
      },
      {
        id: "cookies-and-technical-data",
        title: "Cookies and technical data",
        paragraphs: [
          "At the effective date shown above, this public website does not intentionally use advertising pixels or analytics cookies. Essential hosting, network, or security infrastructure may still process technical request information or use strictly necessary technologies to deliver and protect the site.",
          "If analytics, advertising, personalisation, or other non-essential cookie features are introduced, this notice and any required consent controls should be updated before those features are used.",
        ],
      },
      {
        id: "retention",
        title: "How long information is kept",
        paragraphs: [
          "Information is kept only for as long as reasonably necessary for the purpose for which it was received, including responding to an enquiry, delivering a project, maintaining business records, resolving a dispute, enforcing an agreement, or meeting legal and accounting obligations.",
          "Retention periods vary according to the relationship, the type of information, contractual requirements, sensitivity, and applicable law. When information is no longer needed, it is deleted, anonymised, or securely archived where continued retention is required.",
        ],
      },
      {
        id: "security",
        title: "Security",
        paragraphs: [
          "We use reasonable administrative, organisational, and technical measures intended to protect personal information from unauthorised access, loss, misuse, alteration, or disclosure.",
          "No email, website, storage system, or internet transmission can be guaranteed completely secure. Please avoid sending payment-card details, government identification numbers, account passwords, or other highly sensitive information through the public enquiry form or ordinary email.",
        ],
      },
      {
        id: "international-processing",
        title: "International processing",
        paragraphs: [
          "Some service providers or publishing specialists may operate in countries other than your own. Where applicable law requires safeguards for an international transfer, Scriptora will use an appropriate contractual, organisational, or legal mechanism for that transfer.",
        ],
      },
      {
        id: "your-rights",
        title: "Your privacy choices and rights",
        paragraphs: [
          "Depending on where you live and subject to legal exceptions, you may have rights concerning personal information held about you. We may need to verify your identity before completing a request.",
        ],
        bullets: [
          "Ask whether we hold personal information about you and request access to it.",
          "Request correction of inaccurate or incomplete information.",
          "Request deletion or restriction in circumstances recognised by applicable law.",
          "Object to certain processing or withdraw consent where processing relies on consent.",
          "Request a portable copy of eligible information.",
          "Complain to the relevant privacy or data-protection authority.",
        ],
        note:
          "To make a privacy request, email info@scriptorapublishing.com with “Privacy Request” in the subject line. We will respond as required by applicable law.",
      },
      {
        id: "children",
        title: "Children’s privacy",
        paragraphs: [
          "The website and Scriptora’s commercial publishing services are intended for adults and are not directed to children. We do not knowingly request personal information directly from children through this website. A parent, guardian, or authorised adult should manage any enquiry involving a minor author.",
        ],
      },
      {
        id: "third-party-links",
        title: "Third-party websites",
        paragraphs: [
          "The website may link to retailers, distribution platforms, social networks, or other third-party services. Their privacy practices are governed by their own notices, and Scriptora is not responsible for how those independent services collect or use information.",
        ],
      },
      {
        id: "changes-and-contact",
        title: "Changes and contact",
        paragraphs: [
          "We may revise this Privacy Policy when the website, our services, our information practices, or applicable requirements change. The effective date at the top of the page will identify the latest published version.",
          "Questions, privacy requests, and concerns may be sent to info@scriptorapublishing.com.",
        ],
      },
    ],
    companion: {
      label: "Read the Terms & Conditions",
      href: "/legal/terms-and-conditions",
    },
  },
  "terms-and-conditions": {
    slug: "terms-and-conditions",
    code: "TC / 001",
    eyebrow: "Terms & conditions",
    title: "Clear terms make room for better creative work.",
    shortTitle: "Terms & Conditions",
    description:
      "These terms govern use of the Scriptora Publishing website and the submission of general publishing enquiries through it.",
    effectiveDate: "July 28, 2026",
    appliesTo: "Website access and general enquiries",
    introduction:
      "These Terms & Conditions apply to this public website. They do not replace a proposal, statement of work, publishing agreement, nondisclosure agreement, platform agreement, or other written contract. If a signed project agreement conflicts with these website terms, the signed agreement controls for that project.",
    sections: [
      {
        id: "acceptance",
        title: "Acceptance of these terms",
        paragraphs: [
          "By accessing or using this website, you agree to these Terms & Conditions and acknowledge the Privacy Policy. If you do not agree, please do not use the website.",
          "You must be legally capable of entering into these terms. If you use the website for a company, organisation, or another person, you confirm that you are authorised to act for them.",
        ],
      },
      {
        id: "website-purpose",
        title: "Website purpose",
        paragraphs: [
          "The website provides general information about Scriptora Publishing, its publishing disciplines, and ways to begin a project conversation. Website content is not legal, financial, tax, investment, or professional publishing advice tailored to a specific manuscript.",
          "Examples, concept editions, illustrative author notes, service descriptions, workflows, and estimated outcomes are presented to explain capabilities or design intent. They are not guarantees that every project will use the same process or achieve the same result.",
        ],
      },
      {
        id: "enquiries-and-agreements",
        title: "Enquiries, proposals, and project agreements",
        paragraphs: [
          "Submitting an enquiry, sending a manuscript, scheduling a conversation, or receiving preliminary information does not create a publishing relationship or require either party to proceed.",
          "Services begin only after the parties agree to a written scope or contract addressing the relevant deliverables, responsibilities, fees, payment schedule, review rounds, timeline, rights, approvals, cancellation terms, and other project-specific conditions.",
        ],
        bullets: [
          "Website descriptions are general and may not include every limitation, dependency, or third-party cost.",
          "A quotation or proposed schedule is not binding until accepted in the manner stated in the proposal or agreement.",
          "Retailer approval, distribution access, sales, rankings, reviews, media coverage, awards, or commercial performance cannot be guaranteed.",
          "Project timing depends on scope, manuscript readiness, author feedback, specialist availability, platform requirements, and other stated dependencies.",
        ],
      },
      {
        id: "your-materials",
        title: "Your manuscripts and submissions",
        paragraphs: [
          "You retain ownership of the original material you submit. By sending material to Scriptora, you grant a limited, non-exclusive permission to access, copy, and internally share it only as reasonably necessary to evaluate your enquiry, respond to you, prepare a proposal, or deliver services you later authorise.",
          "You are responsible for maintaining your own backup copies and for confirming that you have the rights and permissions needed to submit and publish the material.",
        ],
        bullets: [
          "Do not submit material that infringes copyright, trademark, privacy, publicity, confidentiality, or other rights.",
          "Do not submit unlawful, malicious, deceptive, defamatory, or technically harmful content.",
          "Disclose third-party text, images, quotations, research, permissions, releases, or licensed assets that may affect publication.",
          "Do not send highly sensitive personal, financial, medical, authentication, or government-identification data unless a secure and agreed method has been provided.",
        ],
      },
      {
        id: "confidentiality",
        title: "Confidentiality",
        paragraphs: [
          "Scriptora will treat unpublished project material with appropriate professional care, but ordinary website enquiries and email are not a substitute for a formal nondisclosure agreement or a secure file-transfer arrangement.",
          "Any specific confidentiality commitments, permitted disclosures to specialists, security requirements, or embargo dates should be documented in a separate written agreement before sensitive material is supplied.",
        ],
      },
      {
        id: "site-intellectual-property",
        title: "Website intellectual property",
        paragraphs: [
          "The website’s branding, text, layout, interface, graphics, concept covers, service descriptions, and other original content are owned by or licensed to Scriptora and are protected by applicable intellectual-property laws.",
          "You may view and make a limited personal copy of website content for the purpose of evaluating Scriptora’s services. No other licence is granted.",
        ],
        bullets: [
          "Do not reproduce, publish, sell, license, scrape, or commercially exploit substantial website content without written permission.",
          "Do not remove ownership notices or present Scriptora’s work as your own.",
          "Do not use the Scriptora name, branding, or design system in a way that suggests endorsement, affiliation, or authorship without permission.",
        ],
      },
      {
        id: "acceptable-use",
        title: "Acceptable use",
        paragraphs: [
          "You may use the website only for lawful purposes and in a way that does not interfere with its operation or another person’s use.",
        ],
        bullets: [
          "Do not attempt to bypass security, probe vulnerabilities, gain unauthorised access, or introduce malicious code.",
          "Do not use automated systems to overload, copy, monitor, or extract from the website except as permitted by law and our written instructions.",
          "Do not impersonate another person, misrepresent your authority, or send fraudulent or abusive communications.",
          "Do not use the website to violate applicable law or the rights of Scriptora, an author, a reader, or any third party.",
        ],
      },
      {
        id: "third-party-services",
        title: "Third-party services and links",
        paragraphs: [
          "The website may identify or link to third-party retailers, production tools, distribution services, social platforms, or other independent websites. Those services are controlled by their respective operators and may have separate terms, policies, fees, availability rules, and technical requirements.",
          "A link or reference does not mean Scriptora controls or guarantees the third-party service.",
        ],
      },
      {
        id: "availability-and-changes",
        title: "Website availability and changes",
        paragraphs: [
          "We may update, correct, suspend, or withdraw website content or functionality without notice. We aim to keep information useful and current but do not promise that the website will always be available, complete, accurate, secure, or free from errors.",
        ],
      },
      {
        id: "disclaimers",
        title: "Disclaimers",
        paragraphs: [
          "To the fullest extent permitted by law, the website is provided on an “as available” basis without implied warranties of merchantability, fitness for a particular purpose, non-infringement, or a particular publishing or commercial result.",
          "Nothing in these terms excludes a warranty, right, or remedy that cannot lawfully be excluded.",
        ],
      },
      {
        id: "liability",
        title: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by applicable law, Scriptora will not be liable for indirect, incidental, special, consequential, exemplary, or punitive loss arising solely from use of, or inability to use, this public website.",
          "These website limitations do not replace any liability terms in a signed project agreement and do not limit liability that cannot lawfully be limited, including liability where exclusion is prohibited by applicable law.",
        ],
      },
      {
        id: "governing-law",
        title: "Governing law and disputes",
        paragraphs: [
          "A signed project agreement may identify the governing law, venue, and dispute process for that engagement. Where no separate agreement applies, these website terms are governed by the laws applicable to the website operator at its principal place of business, without overriding any mandatory consumer protection that applies to you.",
          "Before starting formal proceedings, the parties should first attempt in good faith to resolve a website-related concern by written notice.",
        ],
      },
      {
        id: "general-terms",
        title: "Changes, severability, and contact",
        paragraphs: [
          "We may revise these terms when the website, services, or applicable requirements change. Continued use after revised terms are published means the revised website terms apply from their stated effective date.",
          "If a provision is found unenforceable, it will be limited or removed only to the extent necessary, and the remaining provisions will continue to apply. A delay in enforcing a provision is not a waiver.",
          "Questions about these terms may be sent to info@scriptorapublishing.com.",
        ],
      },
    ],
    companion: {
      label: "Read the Privacy Policy",
      href: "/legal/privacy-policy",
    },
  },
} satisfies Record<string, LegalDocument>;

export type LegalSlug = keyof typeof legalDocuments;

export const legalLinks = Object.values(legalDocuments).map((document) => ({
  label: document.shortTitle,
  href: `/legal/${document.slug}`,
}));

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments[slug as LegalSlug];
}
