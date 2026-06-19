import type { Metadata } from "next";
import ProjectCaseStudyLayout, { type ProjectCaseStudyData } from "@/components/sections/ProjectCaseStudyLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "projects/steel-framing-residential-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Steel Framing Project — Saskatoon, SK | Dil Chahal Constructions",
  description:
    "Residential steel stud framing and exterior sheathing project in Saskatoon, SK — precision framing for new residential construction. Licensed Saskatchewan contractor. View the completed project.",
  keywords: [
    "steel framing project saskatoon",
    "residential steel framing saskatoon",
    "steel stud framing project saskatoon",
    "new construction framing saskatoon",
    "exterior sheathing project saskatoon",
    "residential construction framing saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Steel Framing Project — Saskatoon, SK | Dil Chahal Constructions",
    description: "Residential steel stud framing and exterior sheathing for new construction in Saskatoon, SK. Licensed contractor. View the completed project.",
    url: CANONICAL,
    images: [{ url: "/images/work3.jpg", width: 1200, height: 630, alt: "Steel stud framing for residential construction project in Saskatoon, SK by Dil Chahal Constructions" }],
  },
  twitter: { card: "summary_large_image", title: "Steel Framing Project Saskatoon | Dil Chahal Constructions", description: "Residential steel stud framing for new construction in Saskatoon. Licensed contractor.", images: ["/images/work3.jpg"] },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${BASE_URL}/projects/` },
    { "@type": "ListItem", position: 3, name: "Steel Framing — Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Steel Framing Project — Saskatoon, SK | Dil Chahal Constructions",
  description: "Residential steel stud framing and exterior sheathing project in Saskatoon, SK by Dil Chahal Constructions Ltd.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${CANONICAL}#article`,
  headline: "Steel Framing Project — Saskatoon, SK",
  description: "Residential steel stud framing and GlassRoc exterior sheathing for new residential construction in Saskatoon, SK.",
  image: [
    { "@type": "ImageObject", url: `${BASE_URL}/images/work3.jpg`, width: 1200, height: 900, caption: "Steel stud framing for exterior commercial/residential structure in Saskatoon, Saskatchewan" },
    { "@type": "ImageObject", url: `${BASE_URL}/images/work9.jpeg`, width: 1200, height: 900, caption: "Drywall and steel framing work on commercial build in Saskatoon, SK" },
    { "@type": "ImageObject", url: `${BASE_URL}/images/work10.jpeg`, width: 1200, height: 900, caption: "Steel stud framing structural work for residential construction in Saskatoon" },
  ],
  author: { "@id": `${BASE_URL}/#founder` },
  publisher: { "@id": `${BASE_URL}/#business` },
  datePublished: "2024-01-10",
  dateModified: "2024-01-10",
  about: [
    { "@type": "Service", name: "Steel Framing Saskatoon", url: `${BASE_URL}/steel-framing-saskatoon/` },
    { "@type": "Service", name: "GlassRoc Sheathing Saskatoon", url: `${BASE_URL}/glassroc-sheathing-saskatoon/` },
  ],
  url: CANONICAL,
};

const data: ProjectCaseStudyData = {
  breadcrumbLabel: "Steel Framing — Residential",
  heroTitle: "Steel Framing — Residential Project",
  currentPage: "Steel Framing",
  featuredImage: { src: "/images/work3.jpg", alt: "Steel stud framing for residential construction project in Saskatoon, SK by Dil Chahal Constructions" },
  projectDetails: [
    { label: "Project Type", value: "Residential New Construction Framing" },
    { label: "Location", value: "Saskatoon, SK" },
    { label: "Scope", value: "Steel Framing, Exterior Sheathing" },
    { label: "Code Standard", value: "Saskatchewan National Building Code" },
  ],
  description: [
    "This residential new construction project in Saskatoon required complete steel stud framing of all interior partition walls and exterior wall assemblies, along with the installation of GlassRoc exterior sheathing on all above-grade exterior wall faces. Steel stud framing was selected for this project over wood framing because of its dimensional stability in Saskatchewan's demanding climate — steel does not shrink, swell, or warp through the freeze-thaw cycles and humidity swings that Saskatoon's seasons produce, eliminating the nail pops, drywall cracks, and door alignment issues that can develop in wood-framed construction over time.",
    "Precision is critical at the framing stage because every subsequent trade — drywall, electrical, plumbing, cabinetry, flooring — depends on the framing being plumb, level, and correctly positioned. Our team framed all interior partitions to the architectural plan, installed all door rough-in openings at the correct widths and heights, and provided backing and blocking for all specified fixture locations before any rough-in trades began their work.",
    "GlassRoc exterior sheathing was installed on all above-grade exterior wall faces, fastened to the specified pattern, and integrated with the weather resistive barrier system to ensure a continuous drainage plane. GlassRoc's non-combustible, moisture-resistant, and mold-resistant properties make it well-suited for Saskatchewan's construction climate — it performs consistently through the wet spring and freeze-thaw conditions that can challenge wood-based sheathing products over time.",
  ],
  gallery: [
    { src: "/images/work9.jpeg", alt: "Drywall and steel framing work during residential construction in Saskatoon, SK" },
    { src: "/images/work10.jpeg", alt: "Steel stud framing and structural work for residential new construction in Saskatoon" },
  ],
  servicesUsed: [
    { href: "/steel-framing-saskatoon", label: "Steel Framing" },
    { href: "/glassroc-sheathing-saskatoon", label: "GlassRoc Sheathing" },
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/insulation-saskatoon", label: "Insulation" },
  ],
  outcomes: [
    "All interior partition walls framed to architectural plan — plumb, level, and dimensionally correct",
    "Door rough-in openings framed to correct widths and heights — deficiency-free on framing inspection",
    "GlassRoc exterior sheathing installed to manufacturer specifications and integrated with weather resistive barrier",
    "Backing and blocking provided for all specified fixture locations before rough-in trades",
    "Saskatchewan Building Code framing inspection passed without deficiencies",
  ],
  relatedProjects: [
    { href: "/projects/commercial-office-fit-out-saskatoon", label: "Commercial Office Fit-Out" },
    { href: "/projects/basement-development-saskatoon", label: "Basement Development" },
    { href: "/projects/interior-home-renovation-saskatoon", label: "Interior Home Renovation" },
  ],
  breadcrumbJsonLd,
  articleJsonLd,
  webPageJsonLd,
};

export default function SteelFramingResidentialPage() {
  return <ProjectCaseStudyLayout {...data} />;
}
