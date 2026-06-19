import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "basement-renovations-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Basement Renovations Saskatoon, SK | Basement Finishing Contractor",
  description:
    "Professional basement development and renovation in Saskatoon, SK — full finishing, framing, drywall, insulation & ceiling systems. Licensed contractor. Free quote!",
  keywords: [
    "basement renovations saskatoon",
    "basement finishing saskatoon",
    "basement development saskatoon",
    "basement renovation contractor saskatoon",
    "basement framing saskatoon",
    "basement drywall saskatoon",
    "basement insulation saskatoon",
    "basement suite saskatoon",
    "unfinished basement saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Basement Renovations in Saskatoon, SK | Dil Chahal Construction Ltd.",
    description: "Professional basement development and finishing in Saskatoon, SK — framing, insulation, drywall, and ceiling systems. Licensed contractor. Free quote.",
    url: CANONICAL,
    images: [{ url: "/images/reno2.jpeg", width: 1200, height: 630, alt: "Basement renovation and finishing project in Saskatoon, SK by Dil Chahal Construction" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Basement Renovations Saskatoon, SK | Dil Chahal Construction",
    description: "Basement finishing, framing, drywall & insulation in Saskatoon. Licensed renovation contractor. Free quote.",
    images: ["/images/reno2.jpeg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Basement Renovations Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Basement Renovations in Saskatoon, SK | Dil Chahal Construction Ltd.",
  description: "Professional basement finishing and development services in Saskatoon, SK — framing, insulation, drywall, and ceiling work by a licensed contractor.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Basement Renovations Saskatoon, SK",
  description: "Professional basement development and finishing in Saskatoon, SK — complete framing, code-compliant insulation, drywall installation, ceiling systems, and all interior finishing for residential basements.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "Basement Renovations",
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
      name: "What does a basement development involve in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basement development in Saskatoon typically involves: framing interior partition walls using steel or wood studs, installing code-required insulation on all below-grade walls and any framed exterior walls, hanging and finishing drywall throughout, installing ceiling systems (drywall or T-bar), and preparing the space for electrical, plumbing, and flooring trades. We handle all of the construction-phase work.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit to finish my basement in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Basement development in Saskatoon requires a City of Saskatoon building permit. The permit process ensures the development meets fire, safety, insulation, and egress requirements. As a licensed contractor, we can assist with the permit application and ensure all work is inspection-ready.",
      },
    },
    {
      "@type": "Question",
      name: "What R-value insulation is required in a Saskatoon basement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saskatchewan's National Building Code requires a minimum of RSI 2.0 (approximately R-11) on basement walls, though higher values are recommended for energy performance. Fully framed exterior basement walls should achieve R-17 or higher to minimize heat loss in Saskatoon's cold winters. We advise on the appropriate insulation strategy for your specific basement during the free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a basement renovation take in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical full basement development in Saskatoon — framing, insulation, drywall, and ceiling — takes approximately 3–6 weeks for the construction phase, depending on size and complexity. This does not include the time for rough-in trades (electrical, plumbing, HVAC) that must be completed before drywall installation begins.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Basement Renovations Saskatoon",
  heroTitle: "Basement Renovations & Finishing in Saskatoon, SK",
  currentPage: "Basement Renovations",
  intro: [
    "An unfinished basement represents hundreds of square feet of untapped living space — space that can become a family room, home office, guest suite, or legal secondary suite. Dil Chahal Construction delivers complete basement renovation and development services throughout Saskatoon, SK, transforming cold, unfinished concrete spaces into warm, functional, and beautifully finished rooms that add real value to your home.",
    "We handle every structural and finishing aspect of the basement development: framing partition walls, installing code-compliant insulation on all below-grade and exterior assemblies, hanging and finishing drywall, and installing ceiling systems — drywall for a seamless look or T-bar for mechanical access. We coordinate with electrical, plumbing, and HVAC trades to ensure the construction sequence runs smoothly and your basement is ready for inspection on schedule.",
  ],
  benefitsHeading: "Transform Your Basement into Livable Space",
  benefits: [
    {
      title: "Increased Home Value",
      description: "A professionally finished basement in Saskatoon typically returns 70–75% of renovation costs in added home value — one of the highest-return renovation investments available to homeowners.",
    },
    {
      title: "Added Living Space",
      description: "Transform raw square footage into functional rooms: family rooms, home offices, guest bedrooms, home gyms, or a legal secondary suite to generate rental income.",
    },
    {
      title: "Energy Efficiency",
      description: "Proper below-grade insulation dramatically reduces heat loss through basement walls and floor — cutting heating costs in Saskatoon's cold winters and improving whole-home comfort.",
    },
    {
      title: "Code-Compliant Development",
      description: "Every basement development meets City of Saskatoon building code requirements for insulation, fire separation, egress, and ceiling height — ensuring your permit is approved and your home is protected.",
    },
  ],
  processSteps: [
    {
      title: "Design Consultation & Quote",
      description: "We meet at your Saskatoon home to understand your goals for the space, assess the existing conditions (moisture, mechanicals, ceiling height), and develop a detailed scope and written quote.",
    },
    {
      title: "Building Permit",
      description: "We assist with the City of Saskatoon building permit application for the basement development, providing required documentation and ensuring the design meets all code requirements.",
    },
    {
      title: "Framing",
      description: "Perimeter walls are framed away from concrete with a thermal gap. Interior partition walls are framed to the approved layout, with doorway rough-ins and blocking for fixtures.",
    },
    {
      title: "Insulation Installation",
      description: "Code-compliant insulation is installed on all exterior-facing assemblies — rigid board or batt against concrete walls, plus batt between framing studs — meeting Saskatchewan's thermal requirements.",
    },
    {
      title: "Drywall, Ceilings & Finishing",
      description: "After rough-in trades complete their work and pass inspection, drywall is installed, taped, and finished. Ceiling systems — drywall or T-bar — are completed, leaving the space ready for flooring and painting.",
    },
  ],
  faqs: [
    {
      question: "What does a basement development involve?",
      answer: "Basement development in Saskatoon includes framing partition walls, installing code-required insulation, hanging and finishing drywall, and installing ceilings. We coordinate the construction sequence with your electrical, plumbing, and HVAC trades.",
    },
    {
      question: "Do I need a permit to finish my basement in Saskatoon?",
      answer: "Yes. A City of Saskatoon building permit is required for basement development. We assist with the permit application and ensure all work meets code requirements for inspection approval.",
    },
    {
      question: "What insulation R-value is required in a Saskatoon basement?",
      answer: "Saskatchewan code requires a minimum of RSI 2.0 (approx. R-11) on basement walls. We recommend R-17 or higher for energy performance in Saskatoon's cold winters. We advise on the right insulation strategy during the free consultation.",
    },
    {
      question: "How long does a basement renovation take?",
      answer: "The construction phase (framing, insulation, drywall, ceilings) typically takes 3–6 weeks for a full Saskatoon basement, depending on size and complexity. Rough-in trades must complete their work before drywall installation begins.",
    },
  ],
  relatedServices: [
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/insulation-saskatoon", label: "Insulation" },
    { href: "/steel-framing-saskatoon", label: "Steel Framing" },
    { href: "/residential-renovations-saskatoon", label: "Residential Renovations" },
    { href: "/t-bar-ceiling-installation-saskatoon", label: "T-Bar Ceiling Installation" },
  ],
  imageSrc: "/images/reno2.jpeg",
  imageAlt: "Basement renovation and development project showing framing and insulation in a Saskatoon residential property",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function BasementRenovationsPage() {
  return <ServiceLandingLayout {...data} />;
}
