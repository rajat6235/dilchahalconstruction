import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "commercial-renovations-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Commercial Renovations Saskatoon, SK | Office & Retail Contractor",
  description:
    "Full-service commercial renovation contractor in Saskatoon, SK — office fit-outs, retail build-outs, tenant improvements, and industrial upgrades. Licensed & insured. Free quote!",
  keywords: [
    "commercial renovations saskatoon",
    "commercial renovation contractor saskatoon",
    "office renovation saskatoon",
    "retail renovation saskatoon",
    "tenant improvement saskatoon",
    "commercial build out saskatoon",
    "office fit out saskatoon",
    "commercial interior renovation saskatoon",
    "commercial general contractor saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Commercial Renovations in Saskatoon, SK | Dil Chahal Constructions Ltd.",
    description: "Full-service commercial renovation contractor in Saskatoon, SK. Office fit-outs, retail build-outs, tenant improvements. Licensed & insured. Free quote.",
    url: CANONICAL,
    images: [{ url: "/images/work1.jpg", width: 1200, height: 630, alt: "Commercial renovation project by Dil Chahal Constructions in Saskatoon, SK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Renovations Saskatoon, SK | Dil Chahal Constructions",
    description: "Office fit-outs, retail build-outs & tenant improvements in Saskatoon. Licensed commercial renovation contractor. Free quote.",
    images: ["/images/work1.jpg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Commercial Renovations Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Commercial Renovations in Saskatoon, SK | Dil Chahal Constructions Ltd.",
  description: "Full-service commercial renovation contractor for offices, retail, and industrial spaces in Saskatoon, SK.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Renovations Saskatoon, SK",
  description: "Full-scope commercial interior renovation and tenant improvement services in Saskatoon, SK — office fit-outs, retail build-outs, industrial upgrades, and complete interior overhauls by a licensed general contractor.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "Commercial Renovations",
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
      name: "What types of commercial renovations does Dil Chahal Constructions handle in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle a full range of commercial renovation projects in Saskatoon, SK — including office fit-outs and reconfigurations, retail store build-outs, restaurant and hospitality renovations, medical clinic fit-ups, warehouse interior work, and industrial facility upgrades. Our team manages all aspects of the interior construction phase including framing, drywall, ceilings, and finishing.",
      },
    },
    {
      "@type": "Question",
      name: "Can you renovate a commercial space while it remains open for business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly work on phased commercial renovations in Saskatoon where sections of a building are renovated sequentially, allowing the business to remain partially operational. We coordinate scheduling, noise, and dust containment to minimize disruption to your operations and staff.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle commercial renovation permits in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Commercial renovations in Saskatoon typically require a City of Saskatoon building permit. As a licensed contractor, we can assist with the permit application process, provide the required documentation, and ensure all work is completed to meet inspection requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a commercial renovation take in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary significantly with scope. A small office reconfiguration (new walls, ceilings, and finishes) may take 2–4 weeks. A full floor fit-out for a new tenant may take 6–12 weeks. We provide a detailed project schedule with every proposal so you can plan your business occupancy accordingly.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Commercial Renovations Saskatoon",
  heroTitle: "Commercial Renovations in Saskatoon, SK",
  currentPage: "Commercial Renovations",
  intro: [
    "Commercial renovation projects demand more than skilled trades — they require a contractor who understands scheduling around business operations, code compliance for commercial occupancies, and the coordination of multiple systems within a single project. Dil Chahal Constructions brings 7+ years of commercial construction experience to offices, retail spaces, medical facilities, and industrial buildings throughout Saskatoon, SK.",
    "From building out a new tenant space from a bare shell to reconfiguring an existing office floor plan, we manage the full interior construction scope: steel framing, drywall installation, T-bar ceilings, insulation, GlassRoc sheathing where required, and all finishing. Our team works with property managers, business owners, and general contractors to deliver commercial renovations on time, on budget, and to the standards required by Saskatchewan's commercial building code.",
  ],
  benefitsHeading: "The Advantages of Choosing Dil Chahal for Commercial Work",
  benefits: [
    {
      title: "Minimal Business Disruption",
      description: "We plan phased renovation schedules and establish proper dust containment and noise barriers, allowing your Saskatoon business to operate while construction proceeds.",
    },
    {
      title: "Code-Compliant Commercial Work",
      description: "All commercial framing, fire-rated assemblies, and ceiling systems meet Saskatchewan's commercial building code and National Building Code requirements — passing City of Saskatoon inspections.",
    },
    {
      title: "Full Interior Scope",
      description: "From demolition through framing, insulation, drywall, ceilings, and finishing — we manage the entire interior construction phase, coordinating with your HVAC, electrical, and plumbing trades.",
    },
    {
      title: "On-Time Delivery",
      description: "We understand that commercial tenants have lease start dates and business commitments. We build and respect project schedules, communicating proactively when timelines need to be adjusted.",
    },
  ],
  processSteps: [
    {
      title: "Project Consultation & Scope Definition",
      description: "We meet with you to understand your business needs, review architectural drawings (if available), assess the existing space, and define the renovation scope — then provide a detailed written proposal.",
    },
    {
      title: "Permitting & Scheduling",
      description: "We assist with City of Saskatoon building permit applications, coordinate with your other trades (electrical, HVAC, plumbing), and build a construction schedule that minimizes business disruption.",
    },
    {
      title: "Demolition & Preparation",
      description: "Existing partitions, ceilings, and finishes are removed as required. The space is measured and prepared for the new layout according to the approved drawings.",
    },
    {
      title: "Framing & Rough-In",
      description: "New partition walls are framed in steel stud, ceiling grids are established, and insulation is installed before other trades complete their rough-in work in the new cavities.",
    },
    {
      title: "Drywall, Ceilings & Finishing",
      description: "Drywall is installed, taped, and finished. T-bar ceilings are installed and coordinated with lighting, diffusers, and sprinkler heads. The space is left ready for flooring, millwork, and painting.",
    },
  ],
  faqs: [
    {
      question: "What types of commercial renovations do you handle?",
      answer: "We handle office fit-outs, retail build-outs, restaurant renovations, medical clinic fit-ups, warehouse interior work, and industrial facility upgrades throughout Saskatoon, SK — including full-scope interior framing, drywall, ceilings, insulation, and finishing.",
    },
    {
      question: "Can you renovate while the business stays open?",
      answer: "Yes. We work in phases, establish dust containment, and schedule noisy work during off-hours where needed — allowing your Saskatoon business to continue operating during the renovation.",
    },
    {
      question: "Do you handle commercial renovation permits?",
      answer: "Yes. Commercial work in Saskatoon requires a City of Saskatoon building permit. As a licensed contractor, we assist with permit applications and ensure all work meets code requirements for inspections.",
    },
    {
      question: "How long does a commercial renovation take?",
      answer: "A small office reconfiguration may take 2–4 weeks. A full floor tenant fit-out may take 6–12 weeks. We provide a detailed construction schedule with every proposal so you can plan your occupancy date confidently.",
    },
  ],
  relatedServices: [
    { href: "/steel-framing-saskatoon", label: "Steel Framing" },
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/t-bar-ceiling-installation-saskatoon", label: "T-Bar Ceiling Installation" },
    { href: "/insulation-saskatoon", label: "Insulation" },
    { href: "/glassroc-sheathing-saskatoon", label: "GlassRoc Sheathing" },
  ],
  imageSrc: "/images/work1.jpg",
  imageAlt: "Commercial drywall and framing renovation project completed by Dil Chahal Constructions in Saskatoon, SK",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function CommercialRenovationsPage() {
  return <ServiceLandingLayout {...data} />;
}
