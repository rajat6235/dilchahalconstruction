import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "glassroc-sheathing-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "GlassRoc Sheathing Saskatoon, SK | GlasRoc Installation Contractor",
  description:
    "Expert GlassRoc (GlasRoc) sheathing installation in Saskatoon, SK — superior fire, moisture & mold resistance for exterior walls. Residential & commercial. Free quote!",
  keywords: [
    "glassroc sheathing saskatoon",
    "glasroc sheathing saskatoon",
    "glassroc installation saskatoon",
    "exterior sheathing saskatoon",
    "fire resistant sheathing saskatoon",
    "moisture resistant sheathing saskatoon",
    "commercial sheathing saskatoon",
    "residential sheathing saskatoon",
    "exterior wall sheathing saskatoon sk",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "GlassRoc Sheathing Installation in Saskatoon, SK | Dil Chahal Construction Ltd.",
    description: "Professional GlasRoc sheathing installation in Saskatoon, SK. Fire, moisture & mold resistant exterior wall protection for residential and commercial buildings.",
    url: CANONICAL,
    images: [{ url: "/images/glasroc.jpeg", width: 1200, height: 630, alt: "GlassRoc sheathing installation for exterior wall protection in Saskatoon, SK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GlassRoc Sheathing Saskatoon, SK | Dil Chahal Construction",
    description: "Fire, moisture & mold resistant GlasRoc sheathing installation for homes and commercial buildings in Saskatoon. Free quote.",
    images: ["/images/glasroc.jpeg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "GlassRoc Sheathing Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "GlassRoc Sheathing Installation in Saskatoon, SK | Dil Chahal Construction Ltd.",
  description: "Professional GlasRoc sheathing installation for fire, moisture, and mold resistance on exterior walls in Saskatoon, SK.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GlassRoc Sheathing Installation Saskatoon, SK",
  description: "Expert GlassRoc (GlasRoc) exterior sheathing installation in Saskatoon, SK — providing superior fire, moisture, and mold resistance for exterior wall assemblies in residential and commercial construction.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "GlassRoc Sheathing",
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
      name: "What is GlassRoc (GlasRoc) sheathing and where is it used?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GlasRoc is a glass mat exterior gypsum sheathing product by Georgia-Pacific. Unlike traditional OSB or plywood sheathing, it's non-combustible, moisture-resistant, and mold-resistant. It's used on exterior wall and roof assemblies where fire resistance or wet conditions are concerns — including commercial buildings, multi-family residential, and high-performance homes in Saskatoon, SK.",
      },
    },
    {
      "@type": "Question",
      name: "What are the fire resistance properties of GlassRoc sheathing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GlasRoc sheathing is classified as non-combustible and contributes to fire-rated wall assemblies when used with the specified combination of framing, insulation, and interior finish. This makes it a preferred choice for commercial buildings, multi-family residential, and any construction in Saskatoon, SK where fire-rated exterior wall assemblies are required by code.",
      },
    },
    {
      "@type": "Question",
      name: "Is GlassRoc sheathing suitable for the Saskatoon climate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GlasRoc is specifically designed for moisture exposure during the construction phase and long-term performance in wall assemblies. Its glass mat face resists moisture intrusion and mold growth, making it well-suited for Saskatchewan's climate — where building envelopes face extreme temperature swings, freeze-thaw cycles, and seasonal precipitation.",
      },
    },
    {
      "@type": "Question",
      name: "Can GlassRoc sheathing replace OSB or plywood on exterior walls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GlasRoc sheathing is used as a non-structural exterior gypsum sheathing layer — it is not a structural substitute for OSB or plywood in shear wall applications. However, in many commercial and multi-family wall assemblies, it is used as the exterior sheathing layer applied over the structural framing or in combination with structural panels. We advise on the correct assembly for your Saskatoon project.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "GlassRoc Sheathing Saskatoon",
  heroTitle: "GlassRoc Sheathing Installation in Saskatoon, SK",
  currentPage: "GlassRoc Sheathing",
  intro: [
    "When it comes to exterior wall protection in commercial and residential construction, GlasRoc (GlassRoc) glass mat sheathing by Georgia-Pacific offers superior performance over traditional wood-based products. Dil Chahal Construction installs GlasRoc sheathing throughout Saskatoon, SK, providing your building's exterior walls with non-combustible, moisture-resistant, and mold-resistant protection during construction and throughout the life of the building.",
    "GlasRoc's performance characteristics make it the preferred exterior sheathing for commercial buildings, multi-family residential, and any high-performance construction where fire-rated wall assemblies are specified. Our experienced team installs it correctly — fastened to the required pattern, properly sealed at joints, and integrated with weather resistive barriers — ensuring the assembly performs as engineered and passes all required inspections in Saskatchewan.",
  ],
  benefitsHeading: "Why GlassRoc Outperforms Traditional Sheathing",
  benefits: [
    {
      title: "Fire Resistant",
      description: "GlasRoc is classified as non-combustible — a critical advantage in fire-rated exterior wall assemblies for commercial, multi-family, and code-specified residential projects in Saskatoon.",
    },
    {
      title: "Moisture Resistant",
      description: "The glass mat face resists moisture intrusion during the construction phase and throughout the service life of the wall assembly — important in Saskatchewan's wet seasons and freeze-thaw cycles.",
    },
    {
      title: "Mold Resistant",
      description: "GlasRoc's inorganic glass mat and core do not support mold growth under normal conditions, preventing the air quality and structural issues associated with mold in wall assemblies.",
    },
    {
      title: "Durable Performance",
      description: "Unlike wood sheathing, GlasRoc doesn't swell, warp, or delaminate when exposed to moisture — maintaining dimensional stability and consistent performance across Saskatoon's demanding climate.",
    },
  ],
  processSteps: [
    {
      title: "Assembly Review & Planning",
      description: "We review the wall assembly specifications, confirm fastening patterns, and plan the installation to ensure GlasRoc performs correctly within the overall exterior wall system.",
    },
    {
      title: "Framing Inspection",
      description: "Before installation, framing is checked for proper alignment, plumb, and spacing — correct framing is essential for GlasRoc to fasten securely and the wall to perform as specified.",
    },
    {
      title: "Sheathing Installation",
      description: "GlasRoc panels are installed vertically or horizontally as specified, fastened at the required on-centre spacing using the correct fastener type and pattern for the assembly.",
    },
    {
      title: "Joint Sealing & WRB Integration",
      description: "Panel joints are taped using GlasRoc-approved joint tape, and the sheathing is integrated with the weather resistive barrier (WRB) system to maintain a continuous drainage plane.",
    },
    {
      title: "Inspection Ready",
      description: "Completed installation is reviewed against the assembly specifications and documented for the building inspector — ensuring the exterior envelope passes scrutiny before cladding is applied.",
    },
  ],
  faqs: [
    {
      question: "What is GlassRoc sheathing and where is it used?",
      answer: "GlasRoc is a glass mat exterior gypsum sheathing product that is non-combustible, moisture-resistant, and mold-resistant. It's used on exterior wall and roof assemblies in commercial buildings, multi-family residential, and high-performance homes in Saskatoon, SK where traditional wood-based sheathing isn't suitable.",
    },
    {
      question: "What are the fire resistance properties of GlassRoc?",
      answer: "GlasRoc is non-combustible and contributes to fire-rated wall assemblies specified in Saskatchewan's commercial and multi-family building code requirements — a key advantage over wood-based sheathing.",
    },
    {
      question: "Is GlassRoc suitable for Saskatoon's climate?",
      answer: "Yes. GlasRoc is designed for moisture exposure during construction and long-term performance in assemblies subjected to Saskatchewan's freeze-thaw cycles, extreme temperature swings, and seasonal precipitation.",
    },
    {
      question: "Can GlassRoc replace OSB or plywood?",
      answer: "GlasRoc is a non-structural exterior gypsum sheathing layer — not a structural substitute for OSB in shear walls. However, it's commonly used as the exterior face sheathing layer in commercial and multi-family wall assemblies. We advise on the correct assembly for your Saskatoon project.",
    },
  ],
  relatedServices: [
    { href: "/steel-framing-saskatoon", label: "Steel Framing" },
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/insulation-saskatoon", label: "Insulation" },
    { href: "/commercial-renovations-saskatoon", label: "Commercial Renovations" },
  ],
  imageSrc: "/images/glasroc.jpeg",
  imageAlt: "GlassRoc exterior sheathing installation for fire and moisture resistance on a commercial building in Saskatoon, SK",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function GlassRocSheathingPage() {
  return <ServiceLandingLayout {...data} />;
}
