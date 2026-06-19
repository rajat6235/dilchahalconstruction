import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "bulkhead-ceiling-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Bulkhead Ceiling Saskatoon, SK | Custom Ceiling Design Contractor",
  description:
    "Custom bulkhead ceiling installation in Saskatoon, SK — kitchen soffits, dropped soffits, architectural ceilings for residential & commercial spaces. Free quote!",
  keywords: [
    "bulkhead ceiling saskatoon",
    "ceiling bulkhead saskatoon",
    "kitchen soffit saskatoon",
    "dropped soffit saskatoon",
    "bulkhead installation saskatoon",
    "architectural ceiling saskatoon",
    "custom ceiling saskatoon",
    "ceiling design saskatoon",
    "drywall bulkhead saskatoon sk",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Bulkhead Ceiling Installation in Saskatoon, SK | Dil Chahal Construction Ltd.",
    description: "Custom bulkhead ceiling design and installation in Saskatoon, SK. Kitchen soffits, dropped soffits & architectural ceiling details for residential and commercial spaces.",
    url: CANONICAL,
    images: [{ url: "/images/bulkhead.jpeg", width: 1200, height: 630, alt: "Custom bulkhead ceiling installation in a Saskatoon, SK residential space by Dil Chahal Construction" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulkhead Ceiling Saskatoon, SK | Dil Chahal Construction",
    description: "Custom bulkhead ceilings and kitchen soffits in Saskatoon. Architectural ceiling details for homes and commercial spaces. Free quote.",
    images: ["/images/bulkhead.jpeg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Bulkhead Ceiling Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Bulkhead Ceiling Installation in Saskatoon, SK | Dil Chahal Construction Ltd.",
  description: "Custom bulkhead ceiling and soffit design and installation for residential and commercial spaces in Saskatoon, SK.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bulkhead Ceiling Installation Saskatoon, SK",
  description: "Custom bulkhead ceiling design and installation in Saskatoon, SK — kitchen soffits, dropped soffits, architectural ceiling details, and duct concealment for residential and commercial interiors.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "Bulkhead Ceiling",
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
      name: "What is a bulkhead ceiling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A bulkhead ceiling (also called a soffit or dropped ceiling section) is a framed, drywalled enclosure built below the main ceiling level. Bulkheads are used to conceal ductwork, electrical conduit, plumbing, or structural beams while creating a defined architectural ceiling detail. They're common above kitchen cabinets, in hallways, at the perimeter of a room, and in commercial interiors in Saskatoon, SK.",
      },
    },
    {
      "@type": "Question",
      name: "What are bulkhead ceilings used for in Saskatoon homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Saskatoon residential projects, bulkheads are most often built above kitchen upper cabinets to close the gap between cabinet tops and the ceiling, creating a clean, finished appearance. They're also used to conceal HVAC ducts in open-plan spaces, create defined zones (like a dining area) with a dropped ceiling detail, or add architectural interest to hallways and entryways.",
      },
    },
    {
      "@type": "Question",
      name: "Can bulkhead ceilings be used in commercial spaces in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Bulkheads are widely used in commercial interiors throughout Saskatoon to conceal overhead mechanical systems in open-plan offices, create visual wayfinding in retail spaces, define service areas in restaurants, and add architectural character to lobbies and reception areas. We design and build commercial bulkheads to match the project's aesthetic and functional requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does bulkhead ceiling installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple kitchen soffit or single-room bulkhead typically takes 1–3 days — framing, drywall, and finishing. More complex multi-room or commercial bulkhead systems may take several days to a week. We provide a specific timeline with every quote for your Saskatoon project.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Bulkhead Ceiling Saskatoon",
  heroTitle: "Bulkhead Ceiling Installation in Saskatoon, SK",
  currentPage: "Bulkhead Ceiling",
  intro: [
    "Bulkhead ceilings — also called dropped soffits — are architectural ceiling details that add definition, conceal unsightly mechanical runs, and create zones within open-plan spaces. Dil Chahal Construction designs and builds custom bulkhead ceilings throughout Saskatoon, SK, for both residential and commercial interiors. From the classic kitchen soffit above upper cabinets to sophisticated multi-level ceiling details in commercial lobbies, our work is precise, clean-lined, and beautifully finished.",
    "Every bulkhead is framed, drywalled, taped, mudded, and finished to the same high standard as our full drywall installations — seamless joints, smooth surfaces, and crisp corners that accept paint without visible seams or ridges. If you're concealing a duct run, defining a hallway, or simply wanting to add architectural character to a room in your Saskatoon home or business, we can design and build the right bulkhead ceiling for your space.",
  ],
  benefitsHeading: "What Bulkhead Ceilings Add to Your Space",
  benefits: [
    {
      title: "Architectural Character",
      description: "Bulkheads add visual interest and dimension to flat ceilings — creating depth, defining zones in open-plan spaces, and giving rooms a more intentional, finished appearance.",
    },
    {
      title: "Conceals Unsightly Runs",
      description: "HVAC ducts, plumbing pipes, and electrical conduit that can't be routed elsewhere are hidden cleanly within a drywalled bulkhead — maintaining the aesthetic of the space.",
    },
    {
      title: "Clean Kitchen Soffits",
      description: "Closing the gap above kitchen upper cabinets with a tight, finished soffit eliminates the difficult-to-clean dust shelf and gives the kitchen a polished, complete look.",
    },
    {
      title: "Zone Definition",
      description: "A dropped bulkhead section can visually separate a dining area from a living room, or a reception desk from an open-plan office — without walls, allowing open sight lines.",
    },
  ],
  processSteps: [
    {
      title: "Design & Measurement",
      description: "We assess the space, confirm mechanical locations, and establish the bulkhead dimensions — height, depth, and profile — to achieve the desired aesthetic and functional goals.",
    },
    {
      title: "Framing",
      description: "The bulkhead framework is built from steel or wood framing, secured to the ceiling structure and adjacent walls, following the planned dimensions precisely.",
    },
    {
      title: "Drywall Installation",
      description: "Drywall is cut and installed on all exposed faces of the bulkhead — bottom face and vertical face(s) — with inside and outside corners carefully detailed for crisp lines.",
    },
    {
      title: "Taping, Mudding & Finishing",
      description: "All joints, corners, and fasteners are taped and finished to the same standard as surrounding walls and ceilings — seamless seams and flush surfaces throughout.",
    },
    {
      title: "Sanding & Final Inspection",
      description: "The completed bulkhead is sanded, inspected, and touched up as needed — leaving smooth, paint-ready surfaces and perfectly crisp corners in your Saskatoon space.",
    },
  ],
  faqs: [
    {
      question: "What is a bulkhead ceiling?",
      answer: "A bulkhead (or soffit) is a framed, drywalled enclosure built below the main ceiling to conceal ductwork, plumbing, conduit, or structural beams — or to create architectural ceiling details and zone definition in residential and commercial spaces in Saskatoon, SK.",
    },
    {
      question: "What are common uses for bulkhead ceilings in homes?",
      answer: "In Saskatoon homes, bulkheads are most often built above kitchen upper cabinets to close the gap to the ceiling, to conceal basement duct runs in open-plan spaces, and to create defined hallway or entryway ceiling details.",
    },
    {
      question: "Are bulkhead ceilings used in commercial spaces?",
      answer: "Yes. Commercial bulkheads in Saskatoon conceal mechanical systems in offices, create visual wayfinding in retail spaces, define zones in restaurants, and add architectural character to lobbies and reception areas.",
    },
    {
      question: "How long does a bulkhead installation take?",
      answer: "A simple kitchen soffit or single-room bulkhead takes 1–3 days — framing, drywall, and finishing. Larger or more complex commercial bulkhead systems may take several days. We provide a specific timeline with every quote.",
    },
  ],
  relatedServices: [
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/t-bar-ceiling-installation-saskatoon", label: "T-Bar Ceiling Installation" },
    { href: "/drywall-finishing-saskatoon", label: "Drywall Finishing" },
    { href: "/residential-renovations-saskatoon", label: "Residential Renovations" },
  ],
  imageSrc: "/images/bulkhead.jpeg",
  imageAlt: "Custom bulkhead ceiling installation in a residential interior in Saskatoon, SK by Dil Chahal Construction",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function BulkheadCeilingPage() {
  return <ServiceLandingLayout {...data} />;
}
