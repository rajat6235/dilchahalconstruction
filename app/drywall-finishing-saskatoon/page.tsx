import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "drywall-finishing-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Drywall Finishing Saskatoon, SK | Level 1–5 Finishing Contractor",
  description:
    "Expert drywall finishing in Saskatoon, SK — all finish levels from Level 1 to Level 5 smooth. Residential & commercial. Paint-ready surfaces guaranteed. Free quote!",
  keywords: [
    "drywall finishing saskatoon",
    "drywall finish levels saskatoon",
    "level 5 drywall finish saskatoon",
    "smooth drywall finish saskatoon",
    "drywall finishing contractor saskatoon",
    "drywall sanding saskatoon",
    "commercial drywall finishing saskatoon",
    "residential drywall finishing saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Drywall Finishing in Saskatoon, SK | Level 1–5 | Dil Chahal Construction",
    description: "Professional drywall finishing for all levels in Saskatoon, SK. Paint-ready surfaces with seamless joints. Residential & commercial. Free quote.",
    url: CANONICAL,
    images: [{ url: "/images/mudding.jpeg", width: 1200, height: 630, alt: "Professional drywall finishing and mudding in Saskatoon, SK by Dil Chahal Construction" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Finishing Saskatoon, SK | Dil Chahal Construction",
    description: "Level 1–5 drywall finishing for residential and commercial projects in Saskatoon. Paint-ready results. Free quote.",
    images: ["/images/mudding.jpeg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Drywall Finishing Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Drywall Finishing in Saskatoon, SK | Dil Chahal Construction Ltd.",
  description: "Expert drywall finishing services — all finish levels — for residential and commercial properties in Saskatoon, SK.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drywall Finishing Saskatoon, SK",
  description: "Professional drywall finishing for all levels (Level 1 to Level 5) in Saskatoon, SK. Seamless joints, smooth surfaces, and paint-ready results for residential and commercial projects.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "Drywall Finishing",
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
      name: "What are the different drywall finish levels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are five standard finish levels (Level 0–5) defined by the GA-214 specification. Level 0 is bare board with no finishing. Level 1 is tape embedded in compound (used in attics and service areas). Level 2 is a thin skim coat over tape (used behind tile). Level 3 is two coats of compound over tape (for texture application). Level 4 is three coats, producing a smooth surface for most residential use. Level 5 is a final skim coat over everything — the highest standard, required for high-gloss paint or critical lighting conditions in Saskatoon homes and commercial spaces.",
      },
    },
    {
      "@type": "Question",
      name: "What finish level do I need for my Saskatoon home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most residential projects in Saskatoon — walls painted with flat or eggshell paint — Level 4 is the standard. Level 5 is recommended for walls painted with semi-gloss or high-gloss paint, feature walls, or rooms with dramatic side-lighting that would reveal surface imperfections. We advise you on the right level for your project during the free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does drywall finishing take for a residential project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finishing time depends on the number of coats required and drying time between each coat. A standard Level 4 finish for a full home typically takes 3–7 days when accounting for tape, first coat, finish coat, and final sanding. Level 5 adds an extra skim coat and sanding day.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle drywall finishing for commercial projects in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide all finish levels for commercial office spaces, retail fit-outs, healthcare facilities, and institutional buildings in Saskatoon, SK. Commercial finishing often requires Level 4 or Level 5 for professional presentation and can be scheduled to minimize business disruption.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Drywall Finishing Saskatoon",
  heroTitle: "Expert Drywall Finishing in Saskatoon, SK",
  currentPage: "Drywall Finishing",
  intro: [
    "The quality of a drywall finish determines how a space looks after painting — and it's an area where the difference between a professional and an amateur result is immediately visible. Dil Chahal Construction delivers expert drywall finishing in Saskatoon, SK, from the standard Level 4 finish for most residential and commercial spaces to the demanding Level 5 skim coat required for high-gloss paint or critical lighting environments.",
    "Our finishing process involves multiple precisely applied coats of joint compound, careful feathering at every seam and corner, and thorough sanding between coats. The result is a surface that's not just smooth — it's flat and consistent across the entire wall plane, ready to take any paint finish without revealing telegraphed joints, ridges, or fastener dimples.",
  ],
  benefitsHeading: "The Difference a Professional Finish Makes",
  benefits: [
    {
      title: "Invisible Joints",
      description: "Correctly applied tape and compound makes seams completely disappear after painting. No ridges, no shadows, and no paint telegraphing — even under raking light.",
    },
    {
      title: "All Finish Levels",
      description: "From Level 1 (fire-stop tape in utility spaces) to Level 5 (skim coat for high-gloss interiors), we deliver the exact standard your project requires.",
    },
    {
      title: "Paint-Ready Surface",
      description: "Properly finished and sanded drywall accepts primer and paint evenly and durably. A professional finish prevents paint absorption issues and ensures long-lasting results.",
    },
    {
      title: "Faster Project Completion",
      description: "Our experienced finishers apply coats efficiently, allow proper drying times, and complete the work without rework — keeping your overall project timeline on track.",
    },
  ],
  processSteps: [
    {
      title: "Taping",
      description: "Paper or fibre mesh tape is embedded in the first coat of joint compound over all seams, corners, and fastener heads, creating a continuous surface ready for buildup.",
    },
    {
      title: "First Fill Coat",
      description: "A wider coat of compound is applied over the tape to begin levelling the seam. Corner bead is installed and filled on all outside corners.",
    },
    {
      title: "Second Coat & Feathering",
      description: "The second coat is applied wider still, feathering the edges to blend the seam area with the surrounding panel surface and eliminate any visible height difference.",
    },
    {
      title: "Sanding & Inspection",
      description: "Dried compound is sanded with a long-board sander to remove ridges and high spots. The surface is inspected under raking light to catch any remaining imperfections.",
    },
    {
      title: "Final Coat & Level 5 Skim (If Required)",
      description: "A finish coat brings the surface to Level 4 standard. For Level 5, an additional skim coat of compound is applied over the entire surface before a final fine sanding.",
    },
  ],
  faqs: [
    {
      question: "What are the different drywall finish levels?",
      answer: "Levels 0–5 describe the degree of drywall finishing. Level 4 is standard for most residential and commercial spaces — three coats over tape. Level 5 adds a full skim coat over the entire board and is used where high-gloss paint or critical lighting demands the highest possible smoothness.",
    },
    {
      question: "What finish level does my Saskatoon home need?",
      answer: "Level 4 is standard for homes painted with flat, matte, or eggshell finishes. Level 5 is recommended for semi-gloss or high-gloss paint, feature walls, or spaces with dramatic side-lighting that can reveal surface imperfections. We advise you during the free consultation.",
    },
    {
      question: "How long does drywall finishing take?",
      answer: "A full home at Level 4 typically takes 3–7 days, accounting for tape, two fill coats, drying time, and sanding. Level 5 adds an extra day for skim coating and fine sanding.",
    },
    {
      question: "Do you finish drywall for commercial projects?",
      answer: "Yes. We provide Level 4 and Level 5 drywall finishing for commercial office spaces, retail fit-outs, healthcare facilities, and institutional buildings in Saskatoon, SK, scheduled to minimize disruption.",
    },
  ],
  relatedServices: [
    { href: "/mudding-taping-saskatoon", label: "Mudding & Taping" },
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/drywall-repair-saskatoon", label: "Drywall Repair" },
    { href: "/texturing-saskatoon", label: "Texturing" },
  ],
  imageSrc: "/images/mudding.jpeg",
  imageAlt: "Professional drywall finishing and compound application in a Saskatoon residential project by Dil Chahal Construction",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function DrywallFinishingPage() {
  return <ServiceLandingLayout {...data} />;
}
