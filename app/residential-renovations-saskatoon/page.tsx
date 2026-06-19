import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "residential-renovations-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Residential Renovations Saskatoon, SK | Home Renovation Contractor",
  description:
    "Expert residential renovation contractor in Saskatoon, SK — kitchen, bathroom, basement & whole-home renovations. Quality workmanship. Licensed & insured. Free quote!",
  keywords: [
    "residential renovations saskatoon",
    "home renovation contractor saskatoon",
    "home renovation saskatoon",
    "house renovation saskatoon",
    "kitchen renovation saskatoon",
    "bathroom renovation saskatoon",
    "whole home renovation saskatoon",
    "interior renovation saskatoon",
    "residential contractor saskatoon sk",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Residential Renovations in Saskatoon, SK | Dil Chahal Construction Ltd.",
    description: "Expert home renovation contractor in Saskatoon, SK — kitchen, bathroom, basement & whole-home renovations. Licensed & insured. Free quote.",
    url: CANONICAL,
    images: [{ url: "/images/reno1.jpeg", width: 1200, height: 630, alt: "Residential renovation project completed by Dil Chahal Construction in Saskatoon, SK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Renovations Saskatoon, SK | Dil Chahal Construction",
    description: "Kitchen, bathroom, basement & whole-home renovations in Saskatoon. Licensed home renovation contractor. Free quote.",
    images: ["/images/reno1.jpeg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Residential Renovations Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Residential Renovations in Saskatoon, SK | Dil Chahal Construction Ltd.",
  description: "Expert residential renovation services for homes in Saskatoon, SK — kitchen, bathroom, basement, and full interior renovations.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Renovations Saskatoon, SK",
  description: "Full-scope residential renovation services in Saskatoon, SK — kitchen renovations, bathroom renovations, basement development, and whole-home interior renovations by a licensed contractor.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "Residential Renovations",
  areaServed: [
    { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Warman", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Martensville", addressRegion: "SK", addressCountry: "CA" },
  ],
  url: CANONICAL,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of home renovations does Dil Chahal Construction offer in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a full range of residential renovation services in Saskatoon, SK — including kitchen renovations (drywall, framing, ceiling), bathroom renovations, basement development and finishing, whole-home interior renovations, room additions, and any interior construction work involving framing, drywall, insulation, and ceiling systems.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a home renovation cost in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Renovation costs in Saskatoon vary greatly depending on scope, materials, and the extent of structural changes. A single-room renovation (drywall, framing, insulation) may start at a few thousand dollars. A full basement development or whole-home renovation can range significantly higher. We provide free, detailed written quotes so you know exactly what to expect before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do residential renovations require a building permit in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many interior renovation projects in Saskatoon require a building permit — particularly structural changes, basement developments, and any work affecting plumbing, HVAC, or electrical systems. As a licensed contractor, we advise on permit requirements for your specific project and can assist with the City of Saskatoon permit application process.",
      },
    },
    {
      "@type": "Question",
      name: "Can you renovate while my family is living in the home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We take extra care on occupied residential renovations in Saskatoon — establishing dust barriers between the work zone and living areas, scheduling noisy work during agreed hours, and maintaining a clean, organized site at the end of each workday. We discuss these arrangements in detail during the pre-construction consultation.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Residential Renovations Saskatoon",
  heroTitle: "Residential Renovations in Saskatoon, SK",
  currentPage: "Residential Renovations",
  intro: [
    "Your home is your most significant investment, and a well-executed renovation adds lasting value while transforming how you live in the space. Dil Chahal Construction delivers residential renovation services throughout Saskatoon, SK — from single-room projects to whole-home interior overhauls. We specialize in the structural interior work: framing new walls, removing old ones, installing insulation, hanging and finishing drywall, and delivering ceilings that are smooth, level, and ready for paint.",
    "Every renovation is different, and we approach each Saskatoon project with the same commitment to quality: clean, precise work, respect for your home and family, and clear communication from start to finish. Whether you're opening up a floor plan, finishing a basement, or updating every room in a dated home, we bring the skills and experience to do it right.",
  ],
  benefitsHeading: "Why Saskatoon Homeowners Choose Dil Chahal",
  benefits: [
    {
      title: "Quality Workmanship",
      description: "Every framing, drywall, and finishing detail is completed to professional standards — smooth seams, straight walls, and level ceilings that make the entire renovation look exceptional.",
    },
    {
      title: "Respectful of Your Home",
      description: "We treat your home with care — establishing dust containment, protecting flooring and furniture, and cleaning up thoroughly at the end of every workday in Saskatoon.",
    },
    {
      title: "Transparent Quoting",
      description: "Written quotes detail exactly what's included in the scope. No hidden fees, no scope creep surprises — just honest pricing and clear communication throughout your renovation.",
    },
    {
      title: "Permit Assistance",
      description: "We advise on City of Saskatoon permit requirements for your renovation and can assist with the permit application, ensuring your project is fully compliant and legally documented.",
    },
  ],
  processSteps: [
    {
      title: "In-Home Consultation",
      description: "We visit your Saskatoon home, listen to your goals, assess the existing conditions, and discuss the renovation scope, materials, and timeline — then prepare a detailed written quote.",
    },
    {
      title: "Permits & Pre-Construction Planning",
      description: "Where required, we help obtain the necessary City of Saskatoon building permits. We coordinate with any other trades involved and establish a schedule that works for your household.",
    },
    {
      title: "Demolition & Preparation",
      description: "Existing finishes and structures are carefully removed, with salvageable materials separated and waste responsibly disposed of. The space is prepared for new framing and systems.",
    },
    {
      title: "Framing, Insulation & Rough-In",
      description: "New walls are framed, insulation is installed in cavities, and openings for mechanical, electrical, and plumbing are established before the framing is closed in.",
    },
    {
      title: "Drywall, Ceilings & Finishing",
      description: "Drywall is installed, taped, and finished to Level 4 (or Level 5 where required). Ceilings are completed and the space is left clean and ready for painting and millwork.",
    },
  ],
  faqs: [
    {
      question: "What types of home renovations do you do in Saskatoon?",
      answer: "We handle kitchen, bathroom, basement, and whole-home interior renovations — including framing, insulation, drywall, and ceiling work. We focus on the interior construction phase and coordinate with your other trades.",
    },
    {
      question: "How much does a home renovation cost in Saskatoon?",
      answer: "Costs vary widely with scope and materials. We provide free, detailed written quotes so you know exactly what to expect before work begins. No hidden fees or surprises.",
    },
    {
      question: "Do I need a permit for my renovation in Saskatoon?",
      answer: "Many interior renovations in Saskatoon require a building permit — particularly structural changes and basement developments. We advise on requirements and assist with the City of Saskatoon permit application.",
    },
    {
      question: "Can you renovate while we're living in the home?",
      answer: "Yes. We establish dust barriers, maintain a tidy site, and schedule disruptive work to minimize impact on your family throughout your Saskatoon renovation.",
    },
  ],
  relatedServices: [
    { href: "/basement-renovations-saskatoon", label: "Basement Renovations" },
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/insulation-saskatoon", label: "Insulation" },
    { href: "/drywall-finishing-saskatoon", label: "Drywall Finishing" },
    { href: "/commercial-renovations-saskatoon", label: "Commercial Renovations" },
  ],
  imageSrc: "/images/reno1.jpeg",
  imageAlt: "Residential kitchen renovation completed by Dil Chahal Construction in Saskatoon, SK",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function ResidentialRenovationsPage() {
  return <ServiceLandingLayout {...data} />;
}
