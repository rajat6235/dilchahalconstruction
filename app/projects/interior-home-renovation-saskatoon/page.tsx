import type { Metadata } from "next";
import ProjectCaseStudyLayout, { type ProjectCaseStudyData } from "@/components/sections/ProjectCaseStudyLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "projects/interior-home-renovation-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Interior Home Renovation — Saskatoon, SK | Dil Chahal Construction",
  description:
    "Full interior home renovation in Saskatoon, SK — drywall, insulation, texturing and complete interior finishing for a residential renovation. Licensed contractor. View the completed project.",
  keywords: [
    "home renovation project saskatoon",
    "residential renovation project saskatoon",
    "interior renovation saskatoon project",
    "home drywall renovation saskatoon",
    "kitchen renovation saskatoon project",
    "interior construction project saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Interior Home Renovation — Saskatoon, SK | Dil Chahal Construction",
    description: "Full interior home renovation in Saskatoon — drywall, insulation, and interior finishing. Licensed contractor. View the completed project.",
    url: CANONICAL,
    images: [{ url: "/images/reno1.jpeg", width: 1200, height: 630, alt: "Interior home renovation project in Saskatoon, SK by Dil Chahal Construction" }],
  },
  twitter: { card: "summary_large_image", title: "Interior Home Renovation Saskatoon | Dil Chahal Construction", description: "Full interior renovation — drywall, insulation & finishing in Saskatoon. Licensed contractor.", images: ["/images/reno1.jpeg"] },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${BASE_URL}/projects/` },
    { "@type": "ListItem", position: 3, name: "Interior Home Renovation — Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Interior Home Renovation — Saskatoon, SK | Dil Chahal Construction",
  description: "Full interior home renovation project in Saskatoon, SK — drywall installation, insulation, mudding, taping, and texturing by Dil Chahal Construction Ltd.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${CANONICAL}#article`,
  headline: "Interior Home Renovation — Saskatoon, SK",
  description: "Full interior home renovation including drywall installation, insulation upgrades, mudding, taping, texturing, and bulkhead ceiling work in Saskatoon, SK.",
  image: [
    { "@type": "ImageObject", url: `${BASE_URL}/images/reno1.jpeg`, width: 1200, height: 900, caption: "Kitchen renovation with drywall and ceiling work completed by Dil Chahal Construction in Saskatoon" },
    { "@type": "ImageObject", url: `${BASE_URL}/images/reno3.jpeg`, width: 1200, height: 900, caption: "Bathroom renovation with drywall and moisture-resistant board in Saskatoon, SK" },
  ],
  author: { "@id": `${BASE_URL}/#founder` },
  publisher: { "@id": `${BASE_URL}/#business` },
  datePublished: "2024-04-22",
  dateModified: "2024-04-22",
  about: [
    { "@type": "Service", name: "Residential Renovations Saskatoon", url: `${BASE_URL}/residential-renovations-saskatoon/` },
    { "@type": "Service", name: "Drywall Installation Saskatoon", url: `${BASE_URL}/drywall-installation-saskatoon/` },
    { "@type": "Service", name: "Texturing Saskatoon", url: `${BASE_URL}/texturing-saskatoon/` },
  ],
  url: CANONICAL,
};

const data: ProjectCaseStudyData = {
  breadcrumbLabel: "Interior Home Renovation",
  heroTitle: "Interior Home Renovation",
  currentPage: "Home Renovation",
  featuredImage: { src: "/images/reno1.jpeg", alt: "Interior home renovation with custom kitchen and drywall work completed by Dil Chahal Construction in Saskatoon, SK" },
  projectDetails: [
    { label: "Project Type", value: "Residential Interior Renovation" },
    { label: "Location", value: "Saskatoon, SK" },
    { label: "Scope", value: "Drywall, Insulation, Texturing, Bulkhead" },
    { label: "Finish Level", value: "Level 4 — Paint-Ready Throughout" },
  ],
  description: [
    "This full interior home renovation in Saskatoon involved the complete removal and replacement of all existing drywall throughout the main floor and upper level, with insulation upgrades on all exterior-facing wall assemblies as part of the renovation. When interior walls are opened during a renovation, the opportunity to improve the thermal envelope is too valuable to pass up in Saskatchewan's cold climate — we upgraded the insulation on all exterior walls exposed during the renovation to current code standards before closing them with new drywall.",
    "The kitchen renovation portion required particular care around the existing cabinet layout. We installed moisture-resistant drywall (green board) on all walls adjacent to the sink and dishwasher, and constructed a new kitchen soffit (bulkhead) above the upper cabinetry to close the gap between cabinet tops and the ceiling — giving the kitchen a clean, polished appearance. All bulkhead corners were beaded and finished to the same Level 4 standard as the surrounding walls.",
    "Bathroom drywall throughout the home was replaced with moisture-resistant board, taped, and finished — a critical requirement in high-humidity spaces where standard drywall would be susceptible to moisture damage over time. The entire home was textured to a consistent knockdown texture, matching the character of the existing home and producing a smooth, even result across all walls and ceilings. Final inspection was completed and passed, and the home was left paint-ready throughout.",
  ],
  gallery: [
    { src: "/images/reno3.jpeg", alt: "Bathroom renovation with moisture-resistant drywall and tile-ready finish in Saskatoon, SK" },
  ],
  servicesUsed: [
    { href: "/residential-renovations-saskatoon", label: "Residential Renovations" },
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/insulation-saskatoon", label: "Insulation" },
    { href: "/mudding-taping-saskatoon", label: "Mudding & Taping" },
    { href: "/texturing-saskatoon", label: "Texturing" },
    { href: "/bulkhead-ceiling-saskatoon", label: "Bulkhead Ceiling" },
  ],
  outcomes: [
    "Full main floor and upper level drywall replacement — new drywall installed throughout",
    "Exterior wall insulation upgraded to current Saskatchewan Building Code standards during renovation",
    "Moisture-resistant drywall installed in all bathrooms and wet areas — correct specification for the application",
    "Custom kitchen soffit (bulkhead) built to close gap above upper cabinets — Level 4 finish",
    "Consistent knockdown texture applied throughout — visually seamless across all rooms",
    "Entire home left paint-ready, inspection passed, and building permit closed out",
  ],
  relatedProjects: [
    { href: "/projects/basement-development-saskatoon", label: "Basement Development" },
    { href: "/projects/commercial-office-fit-out-saskatoon", label: "Commercial Office Fit-Out" },
    { href: "/projects/steel-framing-residential-saskatoon", label: "Steel Framing — Residential" },
  ],
  breadcrumbJsonLd,
  articleJsonLd,
  webPageJsonLd,
};

export default function InteriorHomeRenovationPage() {
  return <ProjectCaseStudyLayout {...data} />;
}
