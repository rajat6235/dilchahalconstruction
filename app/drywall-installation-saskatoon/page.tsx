import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "drywall-installation-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Drywall Installation Saskatoon, SK | Expert Drywall Contractor",
  description:
    "Professional drywall installation in Saskatoon, SK by Dil Chahal Constructions. Residential & commercial, new builds & renovations. Licensed & insured. Get a free quote today!",
  keywords: [
    "drywall installation saskatoon",
    "drywall installer saskatoon",
    "drywall installation saskatoon sk",
    "residential drywall installation saskatoon",
    "commercial drywall installation saskatoon",
    "new construction drywall saskatoon",
    "drywall contractor saskatoon sk",
    "drywall company saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Professional Drywall Installation in Saskatoon, SK | Dil Chahal Constructions Ltd.",
    description: "Licensed drywall installation contractor in Saskatoon, SK. Residential & commercial new builds and renovations. Free quote.",
    url: CANONICAL,
    images: [{ url: "/images/drywall.jpg", width: 1200, height: 630, alt: "Professional drywall installation in Saskatoon, SK by Dil Chahal Constructions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Installation Saskatoon, SK | Dil Chahal Constructions",
    description: "Licensed drywall installation for homes & commercial buildings in Saskatoon. Free quote available.",
    images: ["/images/drywall.jpg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Drywall Installation Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Drywall Installation in Saskatoon, SK | Dil Chahal Constructions Ltd.",
  description: "Professional residential and commercial drywall installation services in Saskatoon, SK and surrounding Saskatchewan communities.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  breadcrumb: { "@type": "BreadcrumbList", "@id": `${CANONICAL}#breadcrumb` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drywall Installation Saskatoon, SK",
  description:
    "Professional drywall installation for residential and commercial properties in Saskatoon, SK. Covering new builds, renovations, and commercial fit-outs across Saskatchewan.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "Drywall Installation",
  areaServed: [
    { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Warman", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Martensville", addressRegion: "SK", addressCountry: "CA" },
  ],
  url: CANONICAL,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Drywall Installation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Drywall Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Drywall Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Construction Drywall" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovation Drywall Installation" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does professional drywall installation include in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional drywall installation by Dil Chahal Constructions includes measuring and cutting drywall sheets to fit, fastening panels to framing, taping joints, applying mud coats, sanding, and preparing surfaces for paint. We handle everything from single rooms to full-building commercial installations in Saskatoon, SK.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install drywall for both residential and commercial projects in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide drywall installation for single-family homes, multi-unit residential buildings, office spaces, retail stores, warehouses, and industrial facilities throughout Saskatoon, SK and surrounding Saskatchewan communities.",
      },
    },
    {
      "@type": "Question",
      name: "How much does drywall installation cost in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Drywall installation costs in Saskatoon vary based on project size, ceiling height, room complexity, and the finish level required. We offer free, no-obligation quotes — call +1 (306) 717-1994 or fill out our online form for an accurate estimate.",
      },
    },
    {
      "@type": "Question",
      name: "How long does drywall installation take in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard single-room installation typically takes 1–2 days. Larger residential projects take 3–7 days, and commercial fit-outs may take 1–4 weeks depending on scope. We provide a detailed timeline with every quote.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Drywall Installation Saskatoon",
  heroTitle: "Drywall Installation in Saskatoon, SK",
  currentPage: "Drywall Installation",
  intro: [
    "Dil Chahal Constructions Ltd. delivers professional drywall installation services throughout Saskatoon, SK and the surrounding Saskatchewan region. Whether you're building a new home, renovating an existing space, or completing a commercial fit-out, our licensed team installs drywall with precision — ensuring flat, even surfaces that hold paint beautifully and stand the test of time.",
    "From single-room renovations to multi-floor commercial builds, we handle every phase of the installation: measurement, cutting, fastening, taping, and finishing. We work efficiently to minimize disruption and complete your project on schedule, with results that meet the highest standards of Saskatchewan's building code.",
  ],
  benefits: [
    {
      title: "Speed & Efficiency",
      description: "Our experienced crew works systematically to complete drywall installation on time, reducing project delays and keeping your renovation or construction schedule on track.",
    },
    {
      title: "Lasting Quality",
      description: "We use industry-grade materials and proven techniques to ensure your drywall installation is structurally sound, properly fastened, and built to last in Saskatoon's climate.",
    },
    {
      title: "Flawless Finish",
      description: "Precision cutting and fitting means tight seams, minimal waste, and a surface that's ready for professional taping, mudding, and painting without visible imperfections.",
    },
    {
      title: "Code Compliance",
      description: "Every installation meets Saskatchewan's National Building Code requirements, including correct fire-rated assemblies for commercial and multi-family residential projects.",
    },
  ],
  processSteps: [
    {
      title: "Site Assessment & Measurement",
      description: "We visit your property in Saskatoon, take precise measurements, assess framing conditions, and confirm the scope of work — then provide a written quote.",
    },
    {
      title: "Material Selection & Delivery",
      description: "We source the correct drywall type and thickness for your project — standard, moisture-resistant, fire-rated, or impact-resistant — and arrange delivery to the site.",
    },
    {
      title: "Panel Installation",
      description: "Sheets are cut to fit, lifted into position, and fastened securely to wall studs and ceiling joists using the correct fastener pattern for the assembly type.",
    },
    {
      title: "Taping & Joint Treatment",
      description: "All seams, corners, and fastener heads are taped and coated with joint compound to begin the finishing process and create a smooth, seamless surface.",
    },
    {
      title: "Final Inspection & Cleanup",
      description: "We conduct a thorough walkthrough with you to confirm all panels are properly installed, surfaces are ready for the finishing trades, and the site is left clean.",
    },
  ],
  faqs: [
    {
      question: "What does professional drywall installation include?",
      answer: "Our drywall installation service covers measuring, cutting, fastening panels to framing, applying paper or mesh tape to joints, and preparing surfaces for the mudding and finishing stage — all completed to code for your Saskatoon, SK project.",
    },
    {
      question: "Do you install drywall for both homes and commercial buildings?",
      answer: "Yes. We install drywall in single-family homes, condominiums, office buildings, retail spaces, warehouses, and industrial facilities across Saskatoon and Saskatchewan. Both new construction and renovation projects are welcome.",
    },
    {
      question: "How much does drywall installation cost in Saskatoon?",
      answer: "Costs vary based on room size, ceiling height, drywall type, and finish level required. We offer free, no-obligation quotes — call +1 (306) 717-1994 or complete the online form for a tailored estimate.",
    },
    {
      question: "How long does drywall installation take?",
      answer: "A standard single room takes 1–2 days. A full home renovation takes 3–7 days. Commercial projects vary from 1–4 weeks depending on size. We provide a project-specific timeline with every written quote.",
    },
  ],
  relatedServices: [
    { href: "/drywall-repair-saskatoon", label: "Drywall Repair" },
    { href: "/drywall-finishing-saskatoon", label: "Drywall Finishing" },
    { href: "/mudding-taping-saskatoon", label: "Mudding & Taping" },
    { href: "/steel-framing-saskatoon", label: "Steel Framing" },
    { href: "/insulation-saskatoon", label: "Insulation" },
  ],
  imageSrc: "/images/drywall.jpg",
  imageAlt: "Professional drywall installation in progress for a residential property in Saskatoon, SK by Dil Chahal Constructions",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function DrywallInstallationPage() {
  return <ServiceLandingLayout {...data} />;
}
