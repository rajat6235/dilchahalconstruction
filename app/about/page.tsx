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
    "Meet Dilbagh Singh Chahal and the expert team at Dil Chahal Construction — Saskatoon's trusted drywall contractor with 7+ years delivering quality residential & commercial construction across Saskatchewan.",
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
    title: "About Us — Trusted Drywall Contractor in Saskatoon, SK | Dil Chahal Construction Ltd.",
    description:
      "Meet Dilbagh Singh Chahal and the expert team at Dil Chahal Construction — Saskatoon's trusted drywall contractor with 7+ years of quality construction across SK.",
    url: "https://dilchahalconstruction.com/about/",
    images: [{ url: "/images/founder.jpeg", width: 1200, height: 630, alt: "Dilbagh Singh Chahal, CEO & Founder of Dil Chahal Construction Ltd., Saskatoon's trusted drywall contractor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Trusted Drywall Contractor Saskatoon | Dil Chahal Construction",
    description: "Meet the team behind Saskatoon's top-rated drywall contractor. 7+ years delivering quality construction across SK.",
    images: ["/images/founder.jpeg"],
  },
};

const BASE = "https://dilchahalconstruction.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${BASE}/about/#page`,
  name: "About Dil Chahal Construction Ltd. — Saskatoon's Trusted Drywall Contractor",
  description:
    "Dil Chahal Construction Ltd. was founded by Dilbagh Singh Chahal in 2016. A licensed drywall contractor and general contractor with 7+ years of experience serving Saskatoon, SK and Saskatchewan.",
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

        {/* Company story */}
        <section
          style={{
            backgroundColor: "#fff",
            paddingTop: "clamp(56px, 8vw, 96px)",
            paddingBottom: "clamp(48px, 7vw, 80px)",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

              {/* Left: heading + body */}
              <div className="flex-1">
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#E00201",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                  }}
                >
                  Our Company
                </p>
                <h2
                  className="mb-8"
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "clamp(26px, 3.5vw, 42px)",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    letterSpacing: "-0.3px",
                    lineHeight: "1.15",
                  }}
                >
                  A Saskatchewan Contractor Built on Trade Craftsmanship
                </h2>
                <div className="flex flex-col gap-5">
                  {[
                    "Dil Chahal Construction Ltd. was founded in Saskatoon, Saskatchewan in 2016 by Dilbagh Singh Chahal — a tradesperson with hands-on experience in residential and commercial interior construction. The company was built to fill a clear gap in the Saskatoon market: a drywall and general contracting company that combines genuine trade expertise with the reliability and communication standards that clients expect.",
                    "Over 7 years of consistent, inspection-ready work has established the company across Saskatoon and Saskatchewan. We serve homeowners, property developers, commercial tenants, and general contractors — handling everything from single-room drywall repairs to full commercial fit-outs with steel framing, GlassRoc sheathing, suspended ceiling systems, and complete interior finishing.",
                    "Every project is backed by a written quote, completed to Saskatchewan Building Code requirements, and supported by clear communication throughout. Our licence covers all of Saskatchewan — we serve Saskatoon, Regina, Prince Albert, Warman, Martensville, and surrounding communities.",
                  ].map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "15px",
                        lineHeight: "1.85",
                        color: "#555",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Service area tags */}
                <div className="mt-8">
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#9CA3AF", marginBottom: "10px" }}>
                    Serving communities across Saskatchewan:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "Saskatoon, SK", href: "/services" },
                      { label: "Regina, SK", href: "/drywall-contractor-regina" },
                      { label: "Prince Albert, SK", href: "/drywall-contractor-prince-albert" },
                      { label: "Saskatchewan-Wide", href: "/construction-company-saskatchewan" },
                    ].map((a) => (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="text-[#E00201] border border-[#E00201]/30 hover:border-[#E00201] hover:bg-[#E00201]/[0.04] transition-all duration-200 px-3 py-1.5 rounded-[2px]"
                        style={{ fontFamily: "var(--font-body)", fontSize: "12.5px", fontWeight: 600 }}
                      >
                        {a.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: credentials cards */}
              <div className="lg:w-[320px] flex-shrink-0">
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Founded", value: "2016", desc: "Established in Saskatoon, Saskatchewan" },
                    { label: "Licence", value: "SK Licensed", desc: "Province-wide general contractor licence" },
                    { label: "Insurance", value: "Fully Insured", desc: "Commercial general liability in Saskatchewan" },
                    { label: "Experience", value: "7+ Years", desc: "Consistent, inspection-ready project delivery" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-5 border border-[#E5E7EB] rounded-[2px]"
                      style={{ borderLeft: "3px solid #E00201" }}
                    >
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-subheading)",
                            fontSize: "9.5px",
                            fontWeight: 700,
                            color: "#9CA3AF",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            marginBottom: "4px",
                          }}
                        >
                          {item.label}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-subheading)",
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#0a0a0a",
                            lineHeight: "1.2",
                            marginBottom: "4px",
                          }}
                        >
                          {item.value}
                        </p>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#6B7280" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
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
