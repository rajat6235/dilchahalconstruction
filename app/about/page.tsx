import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import FounderVision from "@/components/sections/FounderVision";
import OurExperts from "@/components/sections/OurExperts";
import QualitySafety from "@/components/sections/QualitySafety";
import TrustStats from "@/components/sections/TrustStats";
import ClientTestimonials from "@/components/sections/ClientTestimonials";
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

const BASE = "https://dilchahalconstruction.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${BASE}/about/#page`,
  name: "About Dil Chahal Constructions Ltd. — Saskatoon's Trusted Drywall Contractor",
  description:
    "Dil Chahal Constructions Ltd. was founded by Dilbagh Singh Chahal in 2016. A licensed drywall contractor and general contractor with 7+ years of experience serving Saskatoon, SK and Saskatchewan.",
  url: `${BASE}/about/`,
  isPartOf: { "@type": "WebSite", "@id": `${BASE}/#website` },
  about: { "@id": `${BASE}/#business` },
  mentions: { "@id": `${BASE}/#founder` },
  inLanguage: "en-CA",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "About Us", item: `${BASE}/about/` },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero title="About Us" currentPage="About us" />

      <main>
        {/* Trust signals bar */}
        <TrustStats />

        {/* Company story — unique content for about page E-E-A-T */}
        <section className="bg-white" style={{ paddingTop: "clamp(40px, 7vw, 80px)", paddingBottom: "clamp(40px, 6vw, 70px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 16px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, color: "#E00201", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
              Our Company
            </p>
            <h2 style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#111", marginBottom: "28px" }}>
              A Saskatchewan Contractor Built on Trade Craftsmanship
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: "1.85", color: "#555" }}>
                Dil Chahal Constructions Ltd. was founded in Saskatoon, Saskatchewan in 2016 by Dilbagh Singh Chahal — a tradesperson with hands-on experience in residential and commercial interior construction. The company was built to fill a clear gap in the Saskatoon market: a drywall and general contracting company that combines genuine trade expertise with the reliability and communication standards that residential and commercial clients expect from a professional contractor.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: "1.85", color: "#555" }}>
                Over 7 years of consistent, inspection-ready work has established the company across Saskatoon and Saskatchewan. We serve homeowners, property developers, commercial tenants, and general contractors — handling everything from single-room drywall repairs to full commercial fit-outs with steel framing, GlassRoc sheathing, suspended ceiling systems, and complete interior finishing.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: "1.85", color: "#555" }}>
                Every project is backed by a written quote, completed to Saskatchewan Building Code requirements, and supported by clear communication throughout the construction process. Our licence covers all of Saskatchewan — we serve Saskatoon, Regina, Prince Albert, Warman, Martensville, and surrounding communities.
              </p>
            </div>

            {/* Credentials & credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "16px", marginTop: "40px" }}>
              {[
                { label: "Founded", value: "2016", desc: "Established in Saskatoon, Saskatchewan" },
                { label: "Licence", value: "SK Licensed", desc: "Province-wide general contractor licence" },
                { label: "Insurance", value: "Fully Insured", desc: "Commercial general liability in Saskatchewan" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f4f4f4", padding: "20px 18px", borderTop: "3px solid #E00201" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "#999", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>{item.label}</p>
                  <p style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "20px", fontWeight: 700, color: "#111", marginBottom: "4px" }}>{item.value}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#777", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Service area links */}
            <div style={{ marginTop: "32px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#777", marginBottom: "12px" }}>We serve clients across Saskatchewan — including:</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {[
                  { label: "Saskatoon, SK", href: "/services" },
                  { label: "Regina, SK", href: "/drywall-contractor-regina" },
                  { label: "Prince Albert, SK", href: "/drywall-contractor-prince-albert" },
                  { label: "Saskatchewan-Wide", href: "/construction-company-saskatchewan" },
                ].map((a) => (
                  <Link key={a.href} href={a.href} style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#E00201", border: "1px solid #E00201", padding: "5px 14px", textDecoration: "none" }}>
                    {a.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Vision + Why Choose Us */}
        <FounderVision />

        {/* Our Experts / Team */}
        <OurExperts />

        {/* Quality and Safety */}
        <QualitySafety />

        {/* Client Testimonials */}
        <ClientTestimonials />
      </main>

      <Footer />
    </>
  );
}
