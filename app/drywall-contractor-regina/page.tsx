import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "drywall-contractor-regina";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Drywall Contractor Regina, SK | Dil Chahal Constructions Ltd.",
  description:
    "Licensed drywall contractor serving Regina, SK — commercial and residential drywall installation, steel framing, insulation, T-bar ceilings & renovations. Free quote!",
  keywords: [
    "drywall contractor regina",
    "drywall contractor regina sk",
    "drywall installation regina",
    "drywall repair regina",
    "commercial drywall regina",
    "residential drywall regina",
    "steel framing regina",
    "insulation contractor regina",
    "commercial renovations regina",
    "general contractor regina",
    "renovation contractor regina",
    "drywall company regina",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Drywall Contractor Serving Regina, SK | Dil Chahal Constructions Ltd.",
    description: "Licensed drywall and construction contractor serving Regina, SK — drywall installation, steel framing, insulation, T-bar ceilings, and commercial renovations. Free quote.",
    url: CANONICAL,
    images: [{ url: "/images/drywall.jpg", width: 1200, height: 630, alt: "Drywall installation and construction services in Regina, SK by Dil Chahal Constructions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Contractor Regina SK | Dil Chahal Constructions",
    description: "Drywall installation, steel framing, insulation & renovations in Regina, SK. Licensed Saskatchewan contractor. Free quote.",
    images: ["/images/drywall.jpg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Drywall Contractor Regina", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Drywall Contractor Serving Regina, SK | Dil Chahal Constructions Ltd.",
  description: "Licensed drywall contractor and general contractor serving Regina, SK with drywall installation, steel framing, insulation, and commercial and residential renovations.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drywall & Construction Services in Regina, SK",
  description: "Licensed drywall contractor providing drywall installation, repair, steel framing, insulation, T-bar ceilings, and full commercial and residential renovations in Regina, Saskatchewan.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "Drywall Installation",
  areaServed: [
    { "@type": "City", name: "Regina", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "AdministrativeArea", name: "Saskatchewan", addressCountry: "CA" },
  ],
  url: CANONICAL,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you serve Regina, SK for drywall and construction work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dil Chahal Constructions serves Regina, SK for drywall installation, drywall repair, steel framing, insulation, T-bar ceiling installation, and commercial and residential renovations. We travel from our Saskatoon base to serve Regina clients. Contact us to discuss your project and get a free written quote.",
      },
    },
    {
      "@type": "Question",
      name: "What types of drywall projects do you handle in Regina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle all types of drywall and construction projects in Regina — including new construction drywall installation, drywall repair, commercial office and retail fit-outs, residential renovations, basement finishing, steel framing, insulation, and T-bar suspended ceiling systems. Both residential and commercial projects.",
      },
    },
    {
      "@type": "Question",
      name: "Is Dil Chahal Constructions licensed to work in Regina, SK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dil Chahal Constructions Ltd. is a licensed general contractor in Saskatchewan — our licence covers work across the entire province, including Regina. We are fully insured and all work is completed to Saskatchewan Building Code standards and is inspection-ready.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a quote for a drywall project in Regina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us by phone at (306) 717-1994 or through our website contact form. For most Regina projects, we can provide a preliminary estimate by phone or video call, with an on-site visit scheduled for larger or more complex commercial projects. All quotes are written and include materials, labour, and any travel costs.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Drywall Contractor Regina",
  heroTitle: "Drywall & Construction Contractor Serving Regina, SK",
  currentPage: "Regina, SK",
  breadcrumbParent: { href: "/services", label: "Services" },
  relatedServicesLabel: "Our Services Available in Regina",
  intro: [
    "Dil Chahal Constructions provides professional drywall installation, steel framing, insulation, ceiling systems, and full interior renovations to residential and commercial clients in Regina, SK. As Saskatchewan's capital city, Regina has a strong and active construction market — government buildings, healthcare facilities, retail developments, office fit-outs, and a steady demand for high-quality residential renovation work. We bring the same licensed, inspection-ready standard of work to Regina that Saskatoon clients have relied on for over 7 years.",
    "Our team serves Regina for both standalone drywall projects and larger construction scopes — commercial tenant improvements, multi-room residential renovations, basement finishing, and new construction drywall on residential and commercial builds. All Regina projects are backed by a written quote, clear communication, Saskatchewan Building Code compliance, and the same commitment to quality we bring to every project across the province.",
  ],
  benefitsHeading: "Services We Provide in Regina, SK",
  benefits: [
    {
      title: "Commercial Drywall",
      description: "Steel-stud framing and drywall installation for Regina offices, retail spaces, restaurants, healthcare facilities, government buildings, and commercial tenant improvements — to commercial finish standards.",
    },
    {
      title: "Residential Drywall",
      description: "New home drywall installation, residential renovation drywall, basement finishing, and drywall repair for homeowners and property owners throughout Regina and surrounding communities.",
    },
    {
      title: "Steel Framing & Insulation",
      description: "Commercial steel stud framing, GlassRoc sheathing, and code-compliant insulation for Regina's Climate Zone 7 requirements — meeting Saskatchewan's National Building Code thermal performance standards.",
    },
    {
      title: "Ceilings & Renovations",
      description: "T-bar suspended ceiling systems, bulkhead ceilings, and full interior renovation scopes — drywall, framing, insulation, and finishing coordinated with your electrical, plumbing, and HVAC contractors.",
    },
  ],
  processHeading: "How We Work With Regina Clients",
  processSteps: [
    {
      title: "Initial Consultation",
      description: "We discuss your Regina project by phone or video call to understand the scope, timeline, and requirements. For larger commercial projects, we can arrange an on-site visit to Regina.",
    },
    {
      title: "Written Quote",
      description: "You receive a detailed written quote including materials, labour, travel costs, and timeline — complete transparency before any commitment.",
    },
    {
      title: "Scheduling & Permits",
      description: "We schedule your project with a confirmed start date and can advise on City of Regina building permit requirements for your renovation or construction scope.",
    },
    {
      title: "Construction & Quality Control",
      description: "Our crew arrives on schedule, works to the agreed scope, and maintains a clean, organized job site throughout the project — residential or commercial.",
    },
    {
      title: "Inspection-Ready Completion",
      description: "All work is completed to Saskatchewan Building Code standards. We stay on site until the work is inspection-ready and the client is satisfied with the result.",
    },
  ],
  faqs: [
    {
      question: "Do you serve Regina, SK for drywall and construction?",
      answer: "Yes. We travel from our Saskatoon base to serve Regina clients for drywall installation, repair, steel framing, insulation, T-bar ceilings, and full residential and commercial renovations. Contact us for a free written quote.",
    },
    {
      question: "What types of drywall projects do you handle in Regina?",
      answer: "We handle commercial office and retail fit-outs, residential renovations, basement finishing, new construction drywall, drywall repair, steel framing, insulation, and T-bar suspended ceiling systems for both residential and commercial Regina projects.",
    },
    {
      question: "Are you licensed to work in Regina, SK?",
      answer: "Yes. Our Saskatchewan general contractor licence covers work province-wide, including Regina. We are fully insured and complete all work to Saskatchewan Building Code standards.",
    },
    {
      question: "How do I get a quote for a Regina project?",
      answer: "Call us at (306) 717-1994 or use our website contact form. We can provide a preliminary estimate by phone or video for most projects, with an on-site visit for larger commercial scopes. All quotes are written and include travel costs.",
    },
  ],
  relatedServices: [
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/steel-framing-saskatoon", label: "Steel Framing" },
    { href: "/commercial-renovations-saskatoon", label: "Commercial Renovations" },
    { href: "/insulation-saskatoon", label: "Insulation" },
    { href: "/construction-company-saskatchewan", label: "Serving All of Saskatchewan" },
    { href: "/drywall-contractor-prince-albert", label: "Serving Prince Albert, SK" },
  ],
  imageSrc: "/images/work1.jpg",
  imageAlt: "Commercial drywall and construction work by Dil Chahal Constructions serving Regina, Saskatchewan",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function DrywallContractorReginaPage() {
  return <ServiceLandingLayout {...data} />;
}
