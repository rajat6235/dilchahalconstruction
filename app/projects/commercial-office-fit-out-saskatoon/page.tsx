import type { Metadata } from "next";
import ProjectCaseStudyLayout, { type ProjectCaseStudyData } from "@/components/sections/ProjectCaseStudyLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "projects/commercial-office-fit-out-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Commercial Office Fit-Out — Saskatoon, SK | Dil Chahal Construction",
  description:
    "Commercial office fit-out project in Saskatoon, SK — full steel framing, drywall installation, and T-bar suspended ceiling system for a professional office space. Licensed contractor.",
  keywords: [
    "commercial office fit-out saskatoon",
    "commercial drywall project saskatoon",
    "steel framing office saskatoon",
    "t-bar ceiling office saskatoon",
    "commercial renovation project saskatoon",
    "office interior construction saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Commercial Office Fit-Out — Saskatoon, SK | Dil Chahal Construction",
    description: "Full commercial office fit-out in Saskatoon — steel framing, drywall, and T-bar ceiling system. Licensed contractor. View the completed project.",
    url: CANONICAL,
    images: [{ url: "/images/work1.jpg", width: 1200, height: 630, alt: "Commercial office drywall and framing project in Saskatoon, SK by Dil Chahal Construction" }],
  },
  twitter: { card: "summary_large_image", title: "Commercial Office Fit-Out Saskatoon | Dil Chahal Construction", description: "Steel framing, drywall, and T-bar ceiling for a commercial office in Saskatoon. Licensed contractor.", images: ["/images/work1.jpg"] },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${BASE_URL}/projects/` },
    { "@type": "ListItem", position: 3, name: "Commercial Office Fit-Out — Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Commercial Office Fit-Out — Saskatoon, SK | Dil Chahal Construction",
  description: "Commercial office fit-out project in Saskatoon, SK — steel framing, drywall installation, and T-bar suspended ceiling system by Dil Chahal Construction Ltd.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${CANONICAL}#article`,
  headline: "Commercial Office Fit-Out — Saskatoon, SK",
  description: "Full commercial office interior fit-out including steel stud framing, drywall installation, taping, mudding, and T-bar suspended ceiling installation.",
  image: [
    { "@type": "ImageObject", url: `${BASE_URL}/images/work1.jpg`, width: 1200, height: 900, caption: "Drywall and framing for commercial office project in Saskatoon, SK" },
    { "@type": "ImageObject", url: `${BASE_URL}/images/work2.jpg`, width: 1200, height: 900, caption: "T-bar suspended ceiling installation for commercial office in Saskatoon" },
    { "@type": "ImageObject", url: `${BASE_URL}/images/work4.jpeg`, width: 1200, height: 900, caption: "Completed T-bar ceiling grid for office space in Saskatoon, SK" },
  ],
  author: { "@id": `${BASE_URL}/#founder` },
  publisher: { "@id": `${BASE_URL}/#business` },
  datePublished: "2024-02-01",
  dateModified: "2024-02-01",
  about: [
    { "@type": "Service", name: "Commercial Renovations Saskatoon", url: `${BASE_URL}/commercial-renovations-saskatoon/` },
    { "@type": "Service", name: "Steel Framing Saskatoon", url: `${BASE_URL}/steel-framing-saskatoon/` },
    { "@type": "Service", name: "T-Bar Ceiling Installation Saskatoon", url: `${BASE_URL}/t-bar-ceiling-installation-saskatoon/` },
  ],
  url: CANONICAL,
};

const data: ProjectCaseStudyData = {
  breadcrumbLabel: "Commercial Office Fit-Out",
  heroTitle: "Commercial Office Fit-Out",
  currentPage: "Commercial Office",
  featuredImage: { src: "/images/work1.jpg", alt: "Commercial office drywall and steel framing project in Saskatoon, SK by Dil Chahal Construction" },
  projectDetails: [
    { label: "Project Type", value: "Commercial Tenant Improvement" },
    { label: "Location", value: "Saskatoon, SK" },
    { label: "Scope", value: "Framing, Drywall, T-Bar Ceiling" },
    { label: "Standard", value: "Inspection-Ready, Saskatchewan Building Code" },
  ],
  description: [
    "This commercial tenant improvement project in Saskatoon involved the complete interior fit-out of a professional office space — from exposed concrete and open structure to a fully partitioned, finished, and ceiling-ready environment. The scope covered steel stud framing of all interior partition walls, drywall installation to commercial finish standards, taping and mudding to Level 4, and a full T-bar suspended ceiling grid system installed throughout the open-plan and private office areas.",
    "Commercial office fit-outs require a different level of precision than residential drywall work. Partition walls must be plumb and straight to accommodate built-in cabinetry, glass partitions, and door frames. The T-bar ceiling grid must align precisely with the reflected ceiling plan — coordinating with the positions of lighting fixtures, sprinkler heads, HVAC grilles, and other ceiling-mounted mechanical and electrical elements. Our team worked closely with the project's electrical and HVAC contractors to sequence the work correctly and ensure the ceiling grid met the reflected ceiling plan specifications before any tiles were installed.",
    "The finished office space achieves a clean, professional commercial aesthetic — smooth, paintable drywall surfaces on all partitioned walls, and a precisely installed T-bar ceiling ready for tile placement and trade finishing. All work was completed to Saskatchewan Building Code commercial construction requirements and passed building inspection without deficiencies.",
  ],
  gallery: [
    { src: "/images/work2.jpg", alt: "T-bar suspended ceiling installation for commercial office project in Saskatoon, SK" },
    { src: "/images/work4.jpeg", alt: "Commercial office T-bar ceiling grid and drywall installation in Saskatoon" },
    { src: "/images/work12.jpeg", alt: "Completed commercial interior drywall and ceiling construction in Saskatoon, Saskatchewan" },
  ],
  servicesUsed: [
    { href: "/steel-framing-saskatoon", label: "Steel Framing" },
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/t-bar-ceiling-installation-saskatoon", label: "T-Bar Ceiling Installation" },
    { href: "/mudding-taping-saskatoon", label: "Mudding & Taping" },
    { href: "/commercial-renovations-saskatoon", label: "Commercial Renovations" },
  ],
  outcomes: [
    "Full interior partitioning with steel stud framing — plumb, level, and aligned with the architectural plan",
    "Level 4 drywall finish on all walls — smooth, paint-ready, and deficiency-free on inspection",
    "T-bar ceiling grid precisely installed to the reflected ceiling plan — coordinated with electrical and HVAC trades",
    "All work completed to Saskatchewan Building Code commercial requirements",
    "Project delivered on schedule, ready for painting, flooring, and finishing trades",
  ],
  relatedProjects: [
    { href: "/projects/steel-framing-residential-saskatoon", label: "Steel Framing — Residential" },
    { href: "/projects/basement-development-saskatoon", label: "Basement Development" },
    { href: "/projects/interior-home-renovation-saskatoon", label: "Interior Home Renovation" },
  ],
  breadcrumbJsonLd,
  articleJsonLd,
  webPageJsonLd,
};

export default function CommercialOfficeFitOutPage() {
  return <ProjectCaseStudyLayout {...data} />;
}
