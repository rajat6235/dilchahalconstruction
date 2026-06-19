import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "insulation-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Insulation Saskatoon, SK | Energy-Efficient Insulation Contractor",
  description:
    "Professional insulation installation in Saskatoon, SK — batt, blown-in & rigid board for homes and commercial buildings. Reduce energy costs. Licensed contractor. Free quote!",
  keywords: [
    "insulation saskatoon",
    "insulation contractor saskatoon",
    "insulation installation saskatoon",
    "home insulation saskatoon",
    "commercial insulation saskatoon",
    "batt insulation saskatoon",
    "blown in insulation saskatoon",
    "wall insulation saskatoon",
    "attic insulation saskatoon",
    "energy efficient insulation saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Insulation Contractor in Saskatoon, SK | Dil Chahal Construction Ltd.",
    description: "Energy-efficient insulation installation for homes and commercial buildings in Saskatoon, SK. Reduce energy costs year-round. Free quote.",
    url: CANONICAL,
    images: [{ url: "/images/insulation.jpeg", width: 1200, height: 630, alt: "Insulation installation service in Saskatoon, SK by Dil Chahal Construction" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insulation Contractor Saskatoon, SK | Dil Chahal Construction",
    description: "Professional insulation for homes & commercial buildings in Saskatoon. Lower energy costs. Licensed. Free quote.",
    images: ["/images/insulation.jpeg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Insulation Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Insulation Installation in Saskatoon, SK | Dil Chahal Construction Ltd.",
  description: "Professional insulation services for residential and commercial properties in Saskatoon, SK. Reduce energy bills and improve comfort.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Insulation Installation Saskatoon, SK",
  description: "Energy-efficient insulation installation for residential and commercial properties in Saskatoon, SK. Batt, blown-in, and rigid board options available. Reduces heating and cooling costs in Saskatchewan's extreme climate.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "Insulation",
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
      name: "What types of insulation do you install in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install batt insulation (fibreglass and mineral wool), blown-in insulation (fibreglass and cellulose), and rigid board insulation (EPS and XPS). The right type depends on the assembly — walls, attics, and basements each have specific requirements under Saskatchewan's building code for thermal resistance (R-value).",
      },
    },
    {
      "@type": "Question",
      name: "What R-value do I need for my Saskatoon home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saskatchewan's National Building Code requirements for Saskatoon (Climate Zone 7) specify minimum R-values depending on assembly location. Generally: attic/ceiling R-50 to R-60, walls R-20 to R-28, basement walls R-12 to R-17, and slab edges R-10. We assess your specific project and advise on the correct R-values during the free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you insulate an existing home or only new construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work on both new construction and existing homes in Saskatoon. For existing homes, we can install insulation in open wall cavities during renovations, upgrade attic insulation, insulate basement walls during basement development, and insulate areas exposed during any construction project.",
      },
    },
    {
      "@type": "Question",
      name: "How much can proper insulation save on heating costs in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saskatoon's extreme winter temperatures — regularly reaching -30°C or colder — mean that adequate insulation provides significant energy savings. Upgrading from below-code insulation to a properly insulated envelope can reduce heating costs by 20–40% annually. We advise on the right R-values for your specific assembly during the free quote.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Insulation Saskatoon",
  heroTitle: "Energy-Efficient Insulation in Saskatoon, SK",
  currentPage: "Insulation",
  intro: [
    "Saskatoon's winters are among the most demanding in Canada — temperatures regularly drop below -30°C, making proper insulation not just a comfort consideration but an energy and cost necessity. Dil Chahal Construction installs residential and commercial insulation throughout Saskatoon, SK, ensuring every assembly meets or exceeds Saskatchewan's building code R-value requirements and delivers maximum energy efficiency year-round.",
    "We work with fibreglass batt, mineral wool batt, blown-in cellulose, and rigid foam board insulation — selecting the right product for each application based on the assembly type, available cavity depth, fire requirements, and moisture management strategy. From new construction framing to basement development renovations, our insulation installations are correctly installed, properly air-sealed, and built to perform in Saskatchewan's climate.",
  ],
  benefitsHeading: "Why Proper Insulation Matters in Saskatoon",
  benefits: [
    {
      title: "Lower Heating Bills",
      description: "Correct R-values and proper air sealing can reduce annual heating costs by 20–40% in Saskatoon's extreme winters — a significant saving that pays back the installation cost quickly.",
    },
    {
      title: "Year-Round Comfort",
      description: "Well-insulated walls and ceilings keep warmth in during winter and heat out during summer, maintaining a consistent, comfortable indoor temperature throughout Saskatchewan's seasons.",
    },
    {
      title: "Sound Reduction",
      description: "Mineral wool and dense-pack insulation also reduces sound transmission between rooms and from exterior noise — beneficial for bedrooms, offices, and multi-unit residential buildings.",
    },
    {
      title: "Code Compliance",
      description: "All insulation installations meet Saskatchewan's National Building Code R-value requirements for the applicable climate zone — ensuring your project passes inspection without delays.",
    },
  ],
  processSteps: [
    {
      title: "Energy Assessment & Consultation",
      description: "We review your project plans or assess your existing building to identify insulation gaps, thermal bridging, and the correct R-values for each assembly type.",
    },
    {
      title: "Product Selection",
      description: "Based on the assembly, budget, and performance targets, we recommend the appropriate insulation product — batt, blown-in, or rigid board — for each location.",
    },
    {
      title: "Air Barrier Preparation",
      description: "Before insulation goes in, air sealing at penetrations, electrical boxes, and framing gaps is addressed — because insulation without air sealing delivers only a fraction of its rated performance.",
    },
    {
      title: "Insulation Installation",
      description: "Batts are cut and fitted without compression or gaps. Blown-in insulation is installed to the specified depth for target R-value. Rigid board is cut, fitted, and fastened correctly.",
    },
    {
      title: "Inspection & Vapour Barrier",
      description: "Completed insulation is inspected for gaps, voids, and compression. Polyethylene vapour barrier is installed on the warm side where required by code before drywall installation.",
    },
  ],
  faqs: [
    {
      question: "What types of insulation do you install in Saskatoon?",
      answer: "We install fibreglass batt, mineral wool batt, blown-in cellulose and fibreglass, and rigid foam board (EPS/XPS) — selecting the right product for each assembly based on performance requirements, cavity depth, and moisture management.",
    },
    {
      question: "What R-value do I need for my Saskatoon home?",
      answer: "Saskatoon (Climate Zone 7) requires roughly R-50 to R-60 in attics, R-20 to R-28 in above-grade walls, and R-12 to R-17 in basement walls under Saskatchewan's building code. We advise on correct values for your specific project.",
    },
    {
      question: "Can you insulate an existing home as well as new construction?",
      answer: "Yes. We work on both new builds and existing Saskatoon homes — open wall cavities during renovations, attic insulation upgrades, basement insulation during development, and any assembly exposed during construction.",
    },
    {
      question: "How much can good insulation save on heating costs?",
      answer: "Upgrading from below-code insulation to a properly air-sealed and insulated building envelope in Saskatoon's climate can reduce heating costs by 20–40% annually — significant savings given Saskatchewan's cold winters.",
    },
  ],
  relatedServices: [
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/steel-framing-saskatoon", label: "Steel Framing" },
    { href: "/basement-renovations-saskatoon", label: "Basement Renovations" },
    { href: "/residential-renovations-saskatoon", label: "Residential Renovations" },
  ],
  imageSrc: "/images/insulation.jpeg",
  imageAlt: "Energy-efficient insulation installation in a residential property in Saskatoon, SK by Dil Chahal Construction",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function InsulationPage() {
  return <ServiceLandingLayout {...data} />;
}
