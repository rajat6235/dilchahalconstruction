import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "construction-company-saskatchewan";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Construction Company in Saskatchewan | Dil Chahal Constructions Ltd.",
  description:
    "Licensed general contractor and drywall specialist serving all of Saskatchewan — Saskatoon, Regina, Prince Albert, Warman & beyond. Drywall, framing, insulation, renovations. Free quote!",
  keywords: [
    "construction company saskatchewan",
    "general contractor saskatchewan",
    "drywall contractor saskatchewan",
    "insulation contractor saskatchewan",
    "steel framing saskatchewan",
    "renovation contractor saskatchewan",
    "commercial renovations saskatchewan",
    "residential renovations saskatchewan",
    "drywall installation saskatchewan",
    "construction company saskatoon",
    "general contractor saskatoon",
    "licensed contractor saskatchewan",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Construction Company in Saskatchewan | Dil Chahal Constructions Ltd.",
    description: "Licensed general contractor serving Saskatchewan — drywall, steel framing, insulation, T-bar ceilings, and full renovations for residential and commercial projects. Free quote.",
    url: CANONICAL,
    images: [{ url: "/images/hero-bg.jpeg", width: 1200, height: 630, alt: "Dil Chahal Constructions — licensed construction company serving all of Saskatchewan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Company Saskatchewan | Dil Chahal Constructions",
    description: "Licensed general contractor serving Saskatoon, Regina, Prince Albert and all of SK. Drywall, framing, insulation & renovations. Free quote.",
    images: ["/images/hero-bg.jpeg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Construction Company Saskatchewan", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Construction Company in Saskatchewan | Dil Chahal Constructions Ltd.",
  description: "Licensed general contractor and drywall specialist serving all of Saskatchewan — Saskatoon, Regina, Prince Albert, and surrounding SK communities.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Construction & Renovation Services in Saskatchewan",
  description: "Comprehensive drywall installation, steel framing, insulation, ceiling systems, and full interior renovations for residential and commercial projects across Saskatchewan.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "General Contracting",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Saskatchewan", addressCountry: "CA" },
    { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Regina", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Prince Albert", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Warman", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Martensville", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Moose Jaw", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "North Battleford", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Lloydminster", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Humboldt", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Yorkton", addressRegion: "SK", addressCountry: "CA" },
  ],
  url: CANONICAL,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas of Saskatchewan does Dil Chahal Constructions serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are based in Saskatoon, SK and serve communities across Saskatchewan — including Regina, Prince Albert, Warman, Martensville, Moose Jaw, North Battleford, Lloydminster, Humboldt, Yorkton, and surrounding rural and urban centres. Travel costs may apply for projects outside the Saskatoon area. Contact us for a free quote specific to your location.",
      },
    },
    {
      "@type": "Question",
      name: "What construction services are available across Saskatchewan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide the full range of interior construction services across Saskatchewan: drywall installation and repair, drywall finishing (mudding, taping, texturing), steel framing, T-bar suspended ceiling installation, bulkhead ceiling construction, GlassRoc sheathing, insulation installation, and complete residential, commercial, and basement renovations.",
      },
    },
    {
      "@type": "Question",
      name: "Is Dil Chahal Constructions licensed and insured in Saskatchewan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dil Chahal Constructions Ltd. is a licensed general contractor and is fully insured in Saskatchewan. All work is completed to Saskatchewan Building Code requirements, and we can assist with building permit applications for projects in Saskatoon and other Saskatchewan municipalities.",
      },
    },
    {
      "@type": "Question",
      name: "Do you take on both residential and commercial construction projects across Saskatchewan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work on both residential projects (homes, basements, duplexes, townhouses) and commercial projects (offices, retail spaces, restaurants, medical facilities, government buildings) throughout Saskatchewan. Our team has experience with commercial-grade steel framing, GlassRoc sheathing, T-bar ceiling systems, and the higher finish standards required in commercial interiors.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Construction Company Saskatchewan",
  heroTitle: "Construction Company Serving All of Saskatchewan",
  currentPage: "Saskatchewan",
  breadcrumbParent: { href: "/services", label: "Services" },
  relatedServicesLabel: "Our Saskatchewan Services",
  intro: [
    "Dil Chahal Constructions Ltd. is a licensed Saskatchewan general contractor providing drywall installation, steel framing, insulation, ceiling systems, and full interior renovations to residential and commercial clients across the province. Based in Saskatoon, we serve communities throughout Saskatchewan — including Regina, Prince Albert, Warman, Martensville, Moose Jaw, and beyond.",
    "Over 7 years of delivering consistent, inspection-ready construction work has established Dil Chahal Constructions as a trusted partner for homeowners, property developers, commercial builders, and renovation contractors throughout SK. Every project — from a single-room drywall job to a complete commercial fit-out — is backed by a written quote, clear communication, Saskatchewan Building Code compliance, and a commitment to finishing on time.",
  ],
  benefitsHeading: "Complete Construction Services Across Saskatchewan",
  benefits: [
    {
      title: "Drywall Services",
      description: "Full-service drywall installation, repair, drywall finishing, mudding, taping, and texturing for residential and commercial projects province-wide — from new construction to renovation and repair.",
    },
    {
      title: "Structural & Framing",
      description: "Commercial and residential steel framing, GlassRoc exterior sheathing, T-bar suspended ceiling systems, and bulkhead ceiling construction — engineered for Saskatchewan's demanding climate and building code.",
    },
    {
      title: "Insulation",
      description: "Code-compliant insulation installation across Saskatchewan — R-values appropriate for SK Climate Zone 7, including basement walls, exterior wall assemblies, and attic/ceiling applications.",
    },
    {
      title: "Renovations",
      description: "Complete interior renovations for basements, homes, offices, and commercial spaces — framing, insulation, drywall, and ceiling work coordinated with all interior finishing trades.",
    },
  ],
  processHeading: "How We Serve Saskatchewan Projects",
  processSteps: [
    {
      title: "Remote or On-Site Consultation",
      description: "For Saskatchewan projects outside Saskatoon, we offer virtual consultations by phone or video call to discuss your scope. We can also arrange an on-site visit for larger projects — contact us to arrange.",
    },
    {
      title: "Detailed Written Quote",
      description: "All Saskatchewan projects receive a written, itemized quote with no hidden fees. We outline materials, labour, timeline, and travel costs so you have a complete picture before work begins.",
    },
    {
      title: "Permit Assistance",
      description: "We assist with building permit applications in Saskatoon and can advise on permit requirements in other Saskatchewan municipalities — ensuring your project meets local building code before work starts.",
    },
    {
      title: "Scheduled Project Start",
      description: "We schedule your project with a clear start date and milestone timeline. For projects outside Saskatoon, we coordinate material delivery and crew travel to minimize downtime and keep the project moving.",
    },
    {
      title: "Inspection-Ready Completion",
      description: "Every project is completed to Saskatchewan Building Code standards — insulation R-values met, fire separations correct, drywall finishes inspection-ready. We stay on site until the work passes inspection.",
    },
  ],
  faqs: [
    {
      question: "What areas of Saskatchewan do you serve?",
      answer: "We serve communities across Saskatchewan from our Saskatoon base — including Regina, Prince Albert, Warman, Martensville, Moose Jaw, North Battleford, Lloydminster, Humboldt, Yorkton, and surrounding communities. Travel costs may apply outside Saskatoon. Contact us for a specific quote.",
    },
    {
      question: "What construction services are available across Saskatchewan?",
      answer: "We provide drywall installation, repair, finishing, mudding, taping, texturing, steel framing, T-bar ceilings, bulkhead ceilings, GlassRoc sheathing, insulation, and complete residential, commercial, and basement renovations province-wide.",
    },
    {
      question: "Are you licensed and insured in Saskatchewan?",
      answer: "Yes. Dil Chahal Constructions Ltd. is a licensed general contractor fully insured in Saskatchewan. All work is completed to Saskatchewan Building Code requirements and we assist with permit applications where required.",
    },
    {
      question: "Do you serve both residential and commercial clients across SK?",
      answer: "Yes. We serve homeowners, property developers, and commercial clients throughout Saskatchewan — from basement finishing and home renovations to full commercial fit-outs with steel framing, GlassRoc sheathing, and commercial T-bar ceiling systems.",
    },
  ],
  relatedServices: [
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/steel-framing-saskatoon", label: "Steel Framing" },
    { href: "/insulation-saskatoon", label: "Insulation" },
    { href: "/commercial-renovations-saskatoon", label: "Commercial Renovations" },
    { href: "/drywall-contractor-regina", label: "Serving Regina, SK" },
    { href: "/drywall-contractor-prince-albert", label: "Serving Prince Albert, SK" },
  ],
  imageSrc: "/images/steel-frame.jpeg",
  imageAlt: "Steel framing and construction work by Dil Chahal Constructions Ltd., a licensed Saskatchewan general contractor",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function ConstructionCompanySaskatchewanPage() {
  return <ServiceLandingLayout {...data} />;
}
