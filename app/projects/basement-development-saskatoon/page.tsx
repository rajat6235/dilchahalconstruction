import type { Metadata } from "next";
import ProjectCaseStudyLayout, { type ProjectCaseStudyData } from "@/components/sections/ProjectCaseStudyLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "projects/basement-development-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Basement Development Project — Saskatoon, SK | Dil Chahal Construction",
  description:
    "Full residential basement development in Saskatoon, SK — steel framing, code-compliant insulation, drywall installation, and ceiling system. Licensed contractor. View the completed project.",
  keywords: [
    "basement development project saskatoon",
    "basement finishing project saskatoon",
    "basement renovation project saskatoon",
    "residential basement drywall saskatoon",
    "basement insulation saskatoon project",
    "basement framing project saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Basement Development Project — Saskatoon, SK | Dil Chahal Construction",
    description: "Full basement development project in Saskatoon — framing, insulation, drywall, and ceiling system. Licensed contractor. View the completed project.",
    url: CANONICAL,
    images: [{ url: "/images/reno2.jpeg", width: 1200, height: 630, alt: "Completed residential basement development project in Saskatoon, SK by Dil Chahal Construction" }],
  },
  twitter: { card: "summary_large_image", title: "Basement Development Saskatoon | Dil Chahal Construction", description: "Framing, insulation, drywall, and ceiling for a full basement development in Saskatoon. Licensed contractor.", images: ["/images/reno2.jpeg"] },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${BASE_URL}/projects/` },
    { "@type": "ListItem", position: 3, name: "Basement Development — Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Basement Development Project — Saskatoon, SK | Dil Chahal Construction",
  description: "Full residential basement development project in Saskatoon, SK — framing, insulation, drywall, and ceiling by Dil Chahal Construction Ltd.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${CANONICAL}#article`,
  headline: "Basement Development Project — Saskatoon, SK",
  description: "Full residential basement development including steel stud framing, code-compliant insulation, drywall installation, and ceiling system in Saskatoon, SK.",
  image: [
    { "@type": "ImageObject", url: `${BASE_URL}/images/reno2.jpeg`, width: 1200, height: 900, caption: "Residential open-plan renovation and basement development in Saskatoon, SK" },
    { "@type": "ImageObject", url: `${BASE_URL}/images/work5.jpeg`, width: 1200, height: 900, caption: "Interior drywall and renovation work by Dil Chahal Construction in Saskatoon" },
  ],
  author: { "@id": `${BASE_URL}/#founder` },
  publisher: { "@id": `${BASE_URL}/#business` },
  datePublished: "2024-03-15",
  dateModified: "2024-03-15",
  about: [
    { "@type": "Service", name: "Basement Renovations Saskatoon", url: `${BASE_URL}/basement-renovations-saskatoon/` },
    { "@type": "Service", name: "Insulation Saskatoon", url: `${BASE_URL}/insulation-saskatoon/` },
    { "@type": "Service", name: "Drywall Installation Saskatoon", url: `${BASE_URL}/drywall-installation-saskatoon/` },
  ],
  url: CANONICAL,
};

const data: ProjectCaseStudyData = {
  breadcrumbLabel: "Basement Development — Saskatoon",
  heroTitle: "Basement Development",
  currentPage: "Basement Project",
  featuredImage: { src: "/images/reno2.jpeg", alt: "Completed residential basement renovation and development in Saskatoon, SK by Dil Chahal Construction" },
  projectDetails: [
    { label: "Project Type", value: "Residential Basement Development" },
    { label: "Location", value: "Saskatoon, SK" },
    { label: "Scope", value: "Framing, Insulation, Drywall, Ceiling" },
    { label: "Code Standard", value: "City of Saskatoon Building Code" },
  ],
  description: [
    "This full basement development project in Saskatoon transformed an unfinished concrete basement into a completely framed, insulated, and drywall-ready living space. The construction scope included: interior partition wall framing using steel studs, code-compliant insulation on all below-grade exterior walls meeting Saskatchewan's thermal requirements for Climate Zone 7, full drywall installation throughout all framed areas, and a combination of drywall ceilings in the primary living space with a T-bar ceiling in the utility and storage areas to allow mechanical access.",
    "The Saskatchewan National Building Code sets minimum insulation requirements for basement walls — a minimum of RSI 2.0 (approximately R-11) on below-grade walls, though we recommended and installed R-17 effective insulation on all exterior-facing wall assemblies to deliver meaningful energy savings during Saskatoon's long, cold winters. Rigid foam board against the concrete provides a continuous thermal break, with batt insulation between the steel studs bringing the assembly to the target R-value and meeting the city's requirements for permit approval.",
    "The project was completed in sequence with the homeowner's electrical and HVAC contractors — we framed all partition walls and provided blocking for all electrical panel locations and HVAC duct penetrations before stepping back for rough-in trades, then returned to complete insulation and drywall installation after rough-in inspections passed. The finished basement is ready for flooring, painting, and trim — adding over 800 square feet of functional, legal living space to the home.",
  ],
  gallery: [
    { src: "/images/work5.jpeg", alt: "Interior drywall and framing work in residential basement project in Saskatoon, SK" },
  ],
  servicesUsed: [
    { href: "/basement-renovations-saskatoon", label: "Basement Renovations" },
    { href: "/steel-framing-saskatoon", label: "Steel Framing" },
    { href: "/insulation-saskatoon", label: "Insulation" },
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/t-bar-ceiling-installation-saskatoon", label: "T-Bar Ceiling Installation" },
  ],
  outcomes: [
    "800+ sq ft of unfinished basement converted to legal, permit-approved living space",
    "R-17 effective insulation on all below-grade exterior walls — Saskatchewan Building Code compliant",
    "Steel stud framing of all partition walls — plumb, level, and inspection-ready",
    "Drywall installed throughout — Level 4 finish in living areas, T-bar ceiling in utility zone",
    "City of Saskatoon building permit obtained; all rough-in and final inspections passed",
  ],
  relatedProjects: [
    { href: "/projects/commercial-office-fit-out-saskatoon", label: "Commercial Office Fit-Out" },
    { href: "/projects/steel-framing-residential-saskatoon", label: "Steel Framing — Residential" },
    { href: "/projects/interior-home-renovation-saskatoon", label: "Interior Home Renovation" },
  ],
  breadcrumbJsonLd,
  articleJsonLd,
  webPageJsonLd,
};

export default function BasementDevelopmentPage() {
  return <ProjectCaseStudyLayout {...data} />;
}
