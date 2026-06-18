import HeroWithHeader from "@/components/sections/HeroWithHeader";
import Footer from "@/components/layout/Footer";
import InnovateSpace from "@/components/sections/InnovateSpace";
import QualityServices from "@/components/sections/QualityServices";
import QualitySafety from "@/components/sections/QualitySafety";
import TransformCommunities from "@/components/sections/TransformCommunities";
import LocationCard from "@/components/sections/LocationCard";
import AboutFounder from "@/components/sections/AboutFounder";
import FounderVision from "@/components/sections/FounderVision";
import OurExperts from "@/components/sections/OurExperts";
import LatestWorks from "@/components/sections/LatestWorks";
import HouseRenovations from "@/components/sections/HouseRenovations";
import QuoteAndFAQ from "@/components/sections/QuoteAndFAQ";

const BASE_URL = "https://dilchahalconstruction.com";

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  name: "Dil Chahal Constructions Ltd. | Drywall & General Contractor Saskatoon",
  description:
    "Dil Chahal Construction Ltd. is Saskatoon's trusted drywall contractor and general contractor. Expert drywall installation, drywall repair, steel framing, T-bar ceilings, insulation, mudding, taping, texturing, and home & commercial renovations.",
  url: BASE_URL,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
  },
  about: {
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#business`,
    name: "Dil Chahal Constructions Ltd.",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
  },
  inLanguage: "en-CA",
  potentialAction: {
    "@type": "ReadAction",
    target: BASE_URL,
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service-drywall-installation`,
      name: "Drywall Installation Saskatoon",
      description:
        "Professional drywall installation for residential and commercial properties in Saskatoon, SK. Clean, precise, and built to last.",
      provider: { "@id": `${BASE_URL}/#business` },
      areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
      serviceType: "Drywall Installation",
      url: `${BASE_URL}/#services`,
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service-steel-framing`,
      name: "Steel Framing Saskatoon",
      description:
        "Commercial and residential steel stud framing services in Saskatoon, SK. Durable structural support for interior partition walls and ceilings.",
      provider: { "@id": `${BASE_URL}/#business` },
      areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
      serviceType: "Steel Framing",
      url: `${BASE_URL}/#services`,
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service-tbar-ceiling`,
      name: "T-Bar Ceiling Installation Saskatoon",
      description:
        "Expert T-bar (drop ceiling / suspended ceiling) installation for commercial and office spaces in Saskatoon, SK.",
      provider: { "@id": `${BASE_URL}/#business` },
      areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
      serviceType: "T-Bar Ceiling Installation",
      url: `${BASE_URL}/#services`,
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service-insulation`,
      name: "Insulation Services Saskatoon",
      description:
        "Energy-efficient insulation installation for homes and commercial buildings in Saskatoon, SK. Batt, blown-in, and rigid insulation options available.",
      provider: { "@id": `${BASE_URL}/#business` },
      areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
      serviceType: "Insulation",
      url: `${BASE_URL}/#services`,
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service-renovations`,
      name: "House & Commercial Renovations Saskatoon",
      description:
        "Full-scope residential and commercial interior renovation services in Saskatoon, SK. Kitchen, basement, and office build-outs handled by a licensed general contractor.",
      provider: { "@id": `${BASE_URL}/#business` },
      areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
      serviceType: "Renovations",
      url: `${BASE_URL}/#services`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of projects does Dil Chahal Constructions specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in residential, commercial, and industrial construction projects including drywall installation, drywall repair, steel framing, T-bar ceiling systems, insulation, mudding, taping, texturing, house renovations, and commercial renovations in Saskatoon, SK and surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "How does Dil Chahal Constructions ensure quality and safety on job sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We implement stringent quality control measures and adhere to the highest safety standards. From planning to completion, we maintain rigorous safety protocols and health practices to protect everyone involved.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical project timeline for drywall and renovation work in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary based on size and complexity, but we prioritize timely completion with the highest level of quality and reliability. Contact us at +1 (306) 717-1994 for a project-specific estimate.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <HeroWithHeader />
      <main>
        <InnovateSpace />
        <QualityServices />
        <QualitySafety />
        <TransformCommunities />
        <LocationCard />
        <AboutFounder />
        <FounderVision />
        <OurExperts />
        <LatestWorks />
        <HouseRenovations />
        {/* WP spacer bb98507 — 290px white, separates HouseRenovations from QuoteAndFAQ */}
        <div style={{ height: "290px", backgroundColor: "#ffffff" }} />
        <QuoteAndFAQ />
        {/* WP spacer d67cf34 — 200px white, separates QuoteAndFAQ from Footer */}
        <div style={{ height: "200px", backgroundColor: "#ffffff" }} />
      </main>
      <Footer />
    </>
  );
}
