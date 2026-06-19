import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "drywall-repair-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Drywall Repair Saskatoon, SK | Holes, Cracks & Water Damage",
  description:
    "Fast, professional drywall repair in Saskatoon, SK — holes, cracks, dents, water damage & texture matching. Seamless finish. Licensed contractor. Free quote!",
  keywords: [
    "drywall repair saskatoon",
    "drywall patching saskatoon",
    "drywall hole repair saskatoon",
    "drywall crack repair saskatoon",
    "water damage drywall repair saskatoon",
    "drywall texture matching saskatoon",
    "drywall fix saskatoon",
    "drywall contractor saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Drywall Repair in Saskatoon, SK | Holes, Cracks & Water Damage | Dil Chahal Construction",
    description: "Professional drywall repair in Saskatoon, SK — holes, cracks, water damage, and seamless texture matching. Licensed contractor. Free quote.",
    url: CANONICAL,
    images: [{ url: "/images/work8.jpeg", width: 1200, height: 630, alt: "Drywall repair work by Dil Chahal Construction in Saskatoon, SK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Repair Saskatoon, SK | Dil Chahal Construction",
    description: "Holes, cracks, water damage — professional drywall repair with texture matching in Saskatoon. Free quote.",
    images: ["/images/work8.jpeg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Drywall Repair Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Drywall Repair in Saskatoon, SK | Dil Chahal Construction Ltd.",
  description: "Expert drywall repair for holes, cracks, dents, and water damage in Saskatoon, SK. Seamless texture matching and paint-ready surfaces.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drywall Repair Saskatoon, SK",
  description: "Professional drywall patching and repair for holes, cracks, dents, and water-damaged drywall in Saskatoon, SK. Seamless texture matching for a flawless, invisible repair.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "Drywall Repair",
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
      name: "What types of drywall damage can Dil Chahal Construction repair in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We repair all types of drywall damage in Saskatoon, SK — including small nail holes and dents, large punched or cut holes, impact cracks, settling cracks, and water-damaged or mold-affected sections that need to be replaced. We also match existing textures for an invisible repair.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match my existing drywall texture when repairing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Texture matching is one of our specialties. Whether your walls have an orange peel, knockdown, skip trowel, or smooth finish, we carefully blend the repair into the surrounding surface so it becomes visually undetectable after painting.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can drywall repairs be completed in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most small to medium drywall repairs — holes under 6 inches, hairline cracks, and surface dings — can be completed in 1–4 hours. Larger repairs involving water damage or full panel replacements may take a full day, including drying time between mud coats.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to repaint after a drywall repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The repaired and textured area will need to be primed and painted to fully blend with the surrounding wall. We complete the repair to a paint-ready state. If needed, we can coordinate the painting phase or advise on matching your existing paint colour.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Drywall Repair Saskatoon",
  heroTitle: "Expert Drywall Repair in Saskatoon, SK",
  currentPage: "Drywall Repair",
  intro: [
    "Drywall damage — from door knob holes and accidental impacts to settling cracks and water damage — happens in every home and commercial space. Dil Chahal Construction provides fast, professional drywall repair throughout Saskatoon, SK, restoring walls and ceilings to a smooth, seamless condition that's ready for paint.",
    "What sets our repairs apart is our commitment to invisible results. We carefully match your existing texture — orange peel, knockdown, smooth, or skip trowel — so the repaired area blends perfectly with the surrounding surface. Whether it's a small nail hole or a full panel replacement after water damage, the finished product looks like nothing ever happened.",
  ],
  benefitsHeading: "The Benefits of Professional Drywall Repair",
  benefits: [
    {
      title: "Invisible Repairs",
      description: "We match existing textures with precision, so once painted, repairs are completely undetectable — no patchy areas, ridges, or colour differences left behind.",
    },
    {
      title: "Quick Turnaround",
      description: "Most standard repairs are completed in a single visit. We work efficiently to minimize disruption to your home or business in Saskatoon.",
    },
    {
      title: "Prevents Further Damage",
      description: "Cracks and holes can grow over time and allow moisture infiltration. Timely professional repair stops the damage from spreading and protects the surrounding structure.",
    },
    {
      title: "Paint-Ready Surface",
      description: "Every repair is sanded smooth and primed, leaving a surface that's fully ready for painting — no extra prep work needed on your end.",
    },
  ],
  processSteps: [
    {
      title: "Damage Assessment",
      description: "We inspect the damage type, size, and cause — identifying whether it's cosmetic, structural, or moisture-related — to determine the best repair approach.",
    },
    {
      title: "Area Preparation",
      description: "Damaged material is cleanly cut away, loose edges are trimmed, and the surrounding area is protected to keep dust and debris contained.",
    },
    {
      title: "Patching & Panel Replacement",
      description: "We install backing supports if needed, cut a new piece of drywall to fit precisely, and fasten it securely before applying mesh or paper tape to all seams.",
    },
    {
      title: "Mudding, Feathering & Drying",
      description: "Multiple coats of joint compound are applied and feathered out beyond the repair edge for a seamless blend. Each coat is allowed to dry fully before the next is applied.",
    },
    {
      title: "Sanding & Texture Matching",
      description: "Once dry, the area is sanded smooth, then textured to match the surrounding surface — leaving a paint-ready finish indistinguishable from the original wall.",
    },
  ],
  faqs: [
    {
      question: "What types of drywall damage do you repair?",
      answer: "We repair all common types of drywall damage in Saskatoon — nail holes and dents, punched or cut holes, impact cracks, settling cracks, and water or mold-damaged sections. We also do full panel replacements where required.",
    },
    {
      question: "Can you match my existing wall texture?",
      answer: "Yes. Texture matching is a core part of our repair service. Whether your walls have orange peel, knockdown, skip trowel, or a smooth finish, we blend the repair invisibly into the surrounding surface.",
    },
    {
      question: "How long does a drywall repair take?",
      answer: "Small hole repairs typically take 1–4 hours. Larger areas involving full panel replacements or multiple mud coats may take a full day. We'll give you an accurate timeline during the free quote visit.",
    },
    {
      question: "Do I need to repaint after the repair?",
      answer: "Yes — the repaired area will need primer and paint to fully blend. We leave the surface paint-ready. We can advise on matching your existing paint or coordinate with your painter.",
    },
  ],
  relatedServices: [
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/drywall-finishing-saskatoon", label: "Drywall Finishing" },
    { href: "/mudding-taping-saskatoon", label: "Mudding & Taping" },
  ],
  imageSrc: "/images/work8.jpeg",
  imageAlt: "Drywall repair and patching work completed in a commercial interior in Saskatoon, SK by Dil Chahal Construction",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function DrywallRepairPage() {
  return <ServiceLandingLayout {...data} />;
}
