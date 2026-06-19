import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "drywall-contractor-prince-albert";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Drywall Contractor Prince Albert, SK | Dil Chahal Construction Ltd.",
  description:
    "Licensed drywall contractor serving Prince Albert, SK — drywall installation, steel framing, insulation, residential & commercial renovations. Free quote!",
  keywords: [
    "drywall contractor prince albert",
    "drywall contractor prince albert sk",
    "drywall installation prince albert",
    "drywall repair prince albert",
    "construction company prince albert sk",
    "general contractor prince albert sk",
    "insulation contractor prince albert",
    "renovation contractor prince albert",
    "residential renovations prince albert",
    "commercial renovations prince albert sk",
    "drywall company prince albert",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Drywall Contractor Serving Prince Albert, SK | Dil Chahal Construction Ltd.",
    description: "Licensed drywall contractor serving Prince Albert, SK — drywall installation, steel framing, insulation, and residential and commercial renovations. Free quote.",
    url: CANONICAL,
    images: [{ url: "/images/drywall.jpg", width: 1200, height: 630, alt: "Drywall and construction services in Prince Albert, SK by Dil Chahal Construction" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Contractor Prince Albert SK | Dil Chahal Construction",
    description: "Drywall installation, framing, insulation & renovations in Prince Albert, SK. Licensed Saskatchewan contractor. Free quote.",
    images: ["/images/drywall.jpg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Drywall Contractor Prince Albert", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Drywall Contractor Serving Prince Albert, SK | Dil Chahal Construction Ltd.",
  description: "Licensed drywall and construction contractor serving Prince Albert, SK with drywall installation, steel framing, insulation, and full residential and commercial renovations.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drywall & Construction Services in Prince Albert, SK",
  description: "Licensed drywall contractor providing drywall installation, repair, steel framing, insulation, ceiling systems, and full residential and commercial renovations in Prince Albert, Saskatchewan.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "Drywall Installation",
  areaServed: [
    { "@type": "City", name: "Prince Albert", addressRegion: "SK", addressCountry: "CA" },
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
      name: "Do you serve Prince Albert, SK for drywall and construction work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dil Chahal Construction serves Prince Albert, SK for drywall installation, drywall repair, steel framing, insulation, T-bar ceiling installation, and residential and commercial renovations. We travel from our Saskatoon base to Prince Albert — approximately 140 km north. Contact us for a free written quote for your Prince Albert project.",
      },
    },
    {
      "@type": "Question",
      name: "What construction services are available in Prince Albert, SK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide drywall installation, drywall repair, drywall finishing (mudding, taping, texturing), steel framing, insulation, T-bar ceiling installation, bulkhead ceilings, and full basement, residential, and commercial renovation services in Prince Albert, SK.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed to complete construction work in Prince Albert, SK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Saskatchewan general contractor licence covers work throughout the province, including Prince Albert. We are fully insured, and all projects are completed to Saskatchewan Building Code standards — passing building inspection in Prince Albert and other SK municipalities.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a quote for a project in Prince Albert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call us at (306) 717-1994 or use our website contact form. For most Prince Albert projects, we can provide a preliminary estimate by phone or video call. For larger commercial projects, we can arrange an on-site visit. All quotes are written and include materials, labour, and travel costs.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Drywall Contractor Prince Albert",
  heroTitle: "Drywall & Construction Contractor Serving Prince Albert, SK",
  currentPage: "Prince Albert, SK",
  breadcrumbParent: { href: "/services", label: "Services" },
  relatedServicesLabel: "Our Services Available in Prince Albert",
  intro: [
    "Dil Chahal Construction extends its licensed construction and drywall services to Prince Albert, SK — one of northern Saskatchewan's most active urban centres and a hub for regional residential and commercial construction. Located approximately 140 km north of Saskatoon, Prince Albert supports a diverse construction market: residential growth in newer neighbourhoods, commercial and retail development, healthcare and government facility renovations, and resource-sector related commercial construction.",
    "We serve Prince Albert clients with the same full range of services available in Saskatoon: drywall installation, steel framing, insulation, T-bar ceiling systems, bulkhead ceilings, and complete residential and commercial renovations. All work is backed by a written quote, completed to Saskatchewan Building Code requirements, and inspection-ready — no matter the distance from our Saskatoon base.",
  ],
  benefitsHeading: "Services Available in Prince Albert, SK",
  benefits: [
    {
      title: "Drywall Installation & Repair",
      description: "Full drywall installation for new construction and renovation projects in Prince Albert — residential homes, duplexes, townhouses, and commercial interiors — plus drywall repair for damage and moisture issues.",
    },
    {
      title: "Residential Renovations",
      description: "Basement finishing, main floor renovations, and suite additions in Prince Albert homes — framing, insulation, drywall, and ceiling systems to code and ready for electrical and finishing trades.",
    },
    {
      title: "Commercial Construction",
      description: "Commercial drywall and steel framing for offices, retail spaces, restaurants, and healthcare or government facilities in Prince Albert — to commercial finish standards and code-compliant assemblies.",
    },
    {
      title: "Insulation & Ceilings",
      description: "Code-compliant insulation for SK's Climate Zone 7, T-bar suspended ceiling systems, and bulkhead ceiling construction — for both residential and commercial Prince Albert projects.",
    },
  ],
  processHeading: "How We Serve Prince Albert Projects",
  processSteps: [
    {
      title: "Phone or Video Consultation",
      description: "We discuss your Prince Albert project by phone or video — understanding the scope, existing conditions, and your timeline without requiring an immediate site visit for preliminary planning.",
    },
    {
      title: "Written Quote with Travel Costs",
      description: "You receive a complete written quote including materials, labour, travel, and timeline. No surprises — all costs are outlined before any commitment is made.",
    },
    {
      title: "Building Permit Guidance",
      description: "We can advise on building permit requirements for your project through the City of Prince Albert and provide documentation to support your application where required.",
    },
    {
      title: "Coordinated Site Work",
      description: "We coordinate material delivery and crew travel to minimize downtime and keep the project on schedule — working efficiently to complete the scope within the agreed timeline.",
    },
    {
      title: "Inspection-Ready Completion",
      description: "All work is completed to Saskatchewan Building Code standards. We stay on site until the work passes inspection and the client is satisfied with the quality of the finished result.",
    },
  ],
  faqs: [
    {
      question: "Do you serve Prince Albert, SK for drywall and construction?",
      answer: "Yes. We travel from our Saskatoon base (~140 km) to serve Prince Albert clients for drywall installation, repair, steel framing, insulation, ceiling systems, and full renovations. Contact us for a free written quote.",
    },
    {
      question: "What construction services are available in Prince Albert?",
      answer: "We provide drywall installation, repair, finishing, mudding, taping, texturing, steel framing, insulation, T-bar ceiling installation, bulkhead ceilings, and complete residential, commercial, and basement renovation services in Prince Albert, SK.",
    },
    {
      question: "Are you licensed to work in Prince Albert, SK?",
      answer: "Yes. Our Saskatchewan contractor licence covers all of Saskatchewan, including Prince Albert. We are fully insured and complete all work to Saskatchewan Building Code standards.",
    },
    {
      question: "How do I get a quote for a Prince Albert project?",
      answer: "Call (306) 717-1994 or use our contact form. We provide preliminary estimates by phone or video, with on-site visits for larger commercial scopes. All quotes include materials, labour, and travel costs.",
    },
  ],
  relatedServices: [
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/residential-renovations-saskatoon", label: "Residential Renovations" },
    { href: "/insulation-saskatoon", label: "Insulation" },
    { href: "/commercial-renovations-saskatoon", label: "Commercial Renovations" },
    { href: "/construction-company-saskatchewan", label: "Serving All of Saskatchewan" },
    { href: "/drywall-contractor-regina", label: "Serving Regina, SK" },
  ],
  imageSrc: "/images/reno1.jpeg",
  imageAlt: "Residential drywall and construction services serving Prince Albert, SK by Dil Chahal Construction",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function DrywallContractorPrinceAlbertPage() {
  return <ServiceLandingLayout {...data} />;
}
