import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FounderVision from "@/components/sections/FounderVision";
import OurExperts from "@/components/sections/OurExperts";
import QualitySafety from "@/components/sections/QualitySafety";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dil Chahal Constructions Ltd. — founded by Dilbagh Singh Chahal, we are a trusted drywall contractor and general contractor serving Saskatoon and surrounding areas with quality and safety at the core of everything we do.",
  alternates: { canonical: "https://dilchahalconstruction.com/about/" },
  openGraph: {
    title: "About Us | Dil Chahal Constructions Ltd.",
    description: "Meet the team behind Dil Chahal Constructions Ltd. — quality drywall and construction services in Saskatoon, SK.",
    url: "https://dilchahalconstruction.com/about/",
    images: [{ url: "/images/founder.jpeg", width: 1200, height: 630, alt: "Dilbagh Singh Chahal – CEO of Dil Chahal Constructions Ltd." }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://dilchahalconstruction.com/about/#page",
  name: "About Us – Dil Chahal Constructions Ltd.",
  url: "https://dilchahalconstruction.com/about/",
  isPartOf: { "@type": "WebSite", "@id": "https://dilchahalconstruction.com/#website" },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero title="About Us" currentPage="About us" />

      <main>
        {/* Founder's Vision + Why Choose Us — reuses home-page section */}
        <FounderVision />

        {/* Our Experts / Team — reuses home-page section */}
        <OurExperts />

        {/* Quality and Safety — reuses home-page section */}
        <QualitySafety />
      </main>

      <Footer />
    </>
  );
}
