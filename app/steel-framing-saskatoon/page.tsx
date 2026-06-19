import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "steel-framing-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Steel Framing Saskatoon, SK | Commercial & Residential Steel Stud Contractor",
  description:
    "Expert steel stud framing in Saskatoon, SK — interior partitions, load-bearing walls, commercial build-outs & multi-family projects. Code-compliant. Licensed. Free quote!",
  keywords: [
    "steel framing saskatoon",
    "steel stud framing saskatoon",
    "steel framing contractor saskatoon",
    "commercial steel framing saskatoon",
    "residential steel framing saskatoon",
    "interior steel framing saskatoon",
    "light gauge steel framing saskatoon",
    "metal stud framing saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Steel Framing Contractor in Saskatoon, SK | Dil Chahal Constructions Ltd.",
    description: "Professional steel stud framing for residential and commercial projects in Saskatoon, SK. Precise, code-compliant, and durable. Free quote.",
    url: CANONICAL,
    images: [{ url: "/images/steel-frame.jpeg", width: 1200, height: 630, alt: "Steel stud framing installation in Saskatoon, SK by Dil Chahal Constructions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Framing Saskatoon, SK | Dil Chahal Constructions",
    description: "Commercial & residential steel stud framing in Saskatoon. Code-compliant, precise, and durable. Free quote.",
    images: ["/images/steel-frame.jpeg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Steel Framing Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Steel Framing in Saskatoon, SK | Dil Chahal Constructions Ltd.",
  description: "Commercial and residential steel stud framing services in Saskatoon, SK. Precise, code-compliant framing for any project type.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Steel Framing Saskatoon, SK",
  description: "Professional light gauge steel stud framing for interior partitions, exterior walls, and commercial build-outs in Saskatoon, SK. Durable, dimensionally stable, and code-compliant.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "Steel Framing",
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
      name: "What is steel stud framing and when is it used in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Steel stud framing uses light gauge steel tracks and studs instead of wood to build interior partition walls, exterior wall assemblies, and ceiling soffits. It's common in commercial office build-outs, retail spaces, multi-family residential buildings, and anywhere dimensional stability and fire resistance are priorities in Saskatoon, SK.",
      },
    },
    {
      "@type": "Question",
      name: "What are the advantages of steel framing over wood framing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Steel framing doesn't warp, shrink, or twist over time like wood can. It's dimensionally stable in Saskatchewan's extreme temperature swings, pest-resistant, non-combustible, and lighter than lumber. These properties make it the preferred choice for commercial construction and increasingly popular in high-performance residential builds.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle both interior and exterior steel framing in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We install interior partition wall framing, load-bearing steel assemblies, exterior curtain wall framing, ceiling grid framing, and soffit framing for both residential and commercial projects in Saskatoon, Warman, Martensville, and surrounding SK communities.",
      },
    },
    {
      "@type": "Question",
      name: "Is steel framing code-compliant in Saskatchewan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Steel stud framing is fully compliant with the National Building Code of Canada and Saskatchewan's provincial building requirements. We ensure all installations meet the required gauge, spacing, and connection specifications for the assembly type.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Steel Framing Saskatoon",
  heroTitle: "Steel Stud Framing in Saskatoon, SK",
  currentPage: "Steel Framing",
  intro: [
    "Steel stud framing is the backbone of modern commercial and residential interior construction. Dil Chahal Constructions delivers precise, code-compliant steel framing services throughout Saskatoon, SK — from straightforward interior partition walls to complex multi-story commercial build-outs. Our team works with light gauge steel track and stud systems that are dimensionally stable, fire-resistant, and built to outlast wood alternatives in Saskatchewan's demanding climate.",
    "Whether you're fitting out a new office floor, building partition walls in a retail space, or framing an addition to your Saskatoon home, our experienced crew lays out, tracks, and installs steel assemblies with the precision and speed that keeps your project on schedule. Every installation follows the National Building Code of Canada and Saskatchewan's provincial requirements.",
  ],
  benefitsHeading: "Why Steel Framing Is the Right Choice",
  benefits: [
    {
      title: "Dimensional Stability",
      description: "Unlike wood, steel studs don't warp, shrink, or twist — critical in Saskatchewan's extreme temperature and humidity swings. Walls stay straight for the life of the building.",
    },
    {
      title: "Fire Resistance",
      description: "Light gauge steel is non-combustible, making steel-framed assemblies preferred for commercial occupancies and multi-family residential projects where fire ratings are required.",
    },
    {
      title: "Pest & Rot Resistant",
      description: "Steel never rots, molds, or attracts pests. It maintains structural integrity over decades without the maintenance concerns associated with wood framing.",
    },
    {
      title: "Code Compliance",
      description: "All steel framing installations meet the National Building Code of Canada and Saskatchewan's provincial requirements — fully documented for permit inspections.",
    },
  ],
  processSteps: [
    {
      title: "Layout & Planning",
      description: "We review architectural drawings or field-measure the space to establish precise stud layouts, accounting for doorways, windows, and mechanical penetrations.",
    },
    {
      title: "Track Installation",
      description: "Floor and ceiling tracks are fastened to the concrete slab or existing structure using the correct anchoring system for the substrate and load requirements.",
    },
    {
      title: "Stud Installation",
      description: "Steel studs are cut to length, inserted into the track at the specified on-centre spacing (typically 16\" or 24\" OC), and fastened at top and bottom.",
    },
    {
      title: "Bridging & Bracing",
      description: "Horizontal bridging or blocking is installed at required intervals to prevent lateral deflection and ensure the wall assembly meets its specified performance criteria.",
    },
    {
      title: "Inspection & Handoff",
      description: "Completed framing is inspected against the layout drawings, and a walkthrough is conducted with you or the general contractor before drywall installation begins.",
    },
  ],
  faqs: [
    {
      question: "What is steel stud framing and when is it used?",
      answer: "Steel stud framing uses light gauge steel tracks and studs to construct interior partition walls, exterior assemblies, and soffits. It's the standard in commercial build-outs and increasingly used in high-performance residential construction throughout Saskatoon, SK.",
    },
    {
      question: "What are the advantages of steel framing over wood?",
      answer: "Steel doesn't warp, shrink, or attract pests. It's dimensionally stable through Saskatchewan's extreme temperature swings, non-combustible, and lighter than lumber — making it the preferred material for commercial and multi-family residential framing.",
    },
    {
      question: "Do you frame both interior partitions and exterior walls?",
      answer: "Yes. We install interior partition walls, exterior curtain wall framing, ceiling soffits, and load-bearing steel assemblies for all project types in Saskatoon, Warman, Martensville, and across Saskatchewan.",
    },
    {
      question: "Is steel framing compliant with Saskatchewan building code?",
      answer: "Absolutely. All of our steel framing work meets the National Building Code of Canada and Saskatchewan provincial requirements, with correct gauge, spacing, and connections for the assembly type.",
    },
  ],
  relatedServices: [
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/t-bar-ceiling-installation-saskatoon", label: "T-Bar Ceiling Installation" },
    { href: "/insulation-saskatoon", label: "Insulation" },
    { href: "/glassroc-sheathing-saskatoon", label: "GlassRoc Sheathing" },
    { href: "/commercial-renovations-saskatoon", label: "Commercial Renovations" },
  ],
  imageSrc: "/images/steel-frame.jpeg",
  imageAlt: "Steel stud framing installation for commercial interior construction in Saskatoon, SK by Dil Chahal Constructions",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function SteelFramingPage() {
  return <ServiceLandingLayout {...data} />;
}
