import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FounderVision from "@/components/sections/FounderVision";
import OurExperts from "@/components/sections/OurExperts";
import QualitySafety from "@/components/sections/QualitySafety";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us — Trusted Drywall Contractor | Saskatoon, SK",
  description:
    "Meet Dilbagh Singh Chahal and the expert team at Dil Chahal Constructions — Saskatoon's trusted drywall contractor with 7+ years delivering quality residential & commercial construction across Saskatchewan.",
  keywords: [
    "about dil chahal constructions",
    "saskatoon drywall contractor about",
    "dilbagh singh chahal",
    "best drywall contractor saskatoon",
    "trusted general contractor saskatoon",
    "licensed drywall company saskatoon",
    "experienced drywall contractor sk",
  ],
  alternates: { canonical: "https://dilchahalconstruction.com/about/" },
  openGraph: {
    title: "About Us — Trusted Drywall Contractor in Saskatoon, SK | Dil Chahal Constructions Ltd.",
    description:
      "Meet Dilbagh Singh Chahal and the expert team at Dil Chahal Constructions — Saskatoon's trusted drywall contractor with 7+ years of quality construction across SK.",
    url: "https://dilchahalconstruction.com/about/",
    images: [{ url: "/images/founder.jpeg", width: 1200, height: 630, alt: "Dilbagh Singh Chahal, CEO & Founder of Dil Chahal Constructions Ltd., Saskatoon's trusted drywall contractor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Trusted Drywall Contractor Saskatoon | Dil Chahal Constructions",
    description: "Meet the team behind Saskatoon's top-rated drywall contractor. 7+ years delivering quality construction across SK.",
    images: ["/images/founder.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://dilchahalconstruction.com/about/#page",
  name: "About Dil Chahal Constructions Ltd. — Saskatoon's Trusted Drywall Contractor",
  description:
    "Dil Chahal Constructions Ltd. was founded by Dilbagh Singh Chahal. A licensed drywall contractor and general contractor serving Saskatoon, SK and surrounding Saskatchewan communities since 2016.",
  url: "https://dilchahalconstruction.com/about/",
  isPartOf: { "@type": "WebSite", "@id": "https://dilchahalconstruction.com/#website" },
  about: { "@id": "https://dilchahalconstruction.com/#business" },
  mentions: { "@id": "https://dilchahalconstruction.com/#founder" },
  inLanguage: "en-CA",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://dilchahalconstruction.com" },
      { "@type": "ListItem", position: 2, name: "About Us", item: "https://dilchahalconstruction.com/about/" },
    ],
  },
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
