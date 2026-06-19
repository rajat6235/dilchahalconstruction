import type { Metadata } from "next";
import AnimateIn from "@/components/ui/AnimateIn";
import PageHero from "@/components/sections/PageHero";
import QuoteAndFAQ from "@/components/sections/QuoteAndFAQ";
import Footer from "@/components/layout/Footer";
import MapWrapper from "@/components/ui/MapWrapper";

export const metadata: Metadata = {
  title: "Contact Us — Free Drywall Quote | Saskatoon, SK",
  description:
    "Get a free drywall or renovation quote in Saskatoon, SK. Call +1 (306) 717-1994 or email contact@dilchahalconstruction.com. Serving Saskatoon, Warman, Martensville & all of Saskatchewan.",
  keywords: [
    "contact dil chahal constructions",
    "free drywall quote saskatoon",
    "drywall quote saskatoon",
    "drywall estimate saskatoon",
    "hire drywall contractor saskatoon",
    "drywall contractor contact saskatoon sk",
    "general contractor quote saskatoon",
  ],
  alternates: { canonical: "https://dilchahalconstruction.com/contact-us/" },
  openGraph: {
    title: "Contact Us — Free Drywall Quote in Saskatoon, SK | Dil Chahal Constructions Ltd.",
    description:
      "Get a free drywall or renovation quote in Saskatoon, SK. Call +1 (306) 717-1994. Serving Saskatoon, Warman, Martensville & all of Saskatchewan.",
    url: "https://dilchahalconstruction.com/contact-us/",
    images: [{ url: "/images/hero-bg.jpeg", width: 1200, height: 630, alt: "Contact Dil Chahal Constructions Ltd. — Drywall Contractor in Saskatoon, SK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Free Drywall Quote Saskatoon | Dil Chahal Constructions",
    description: "Call +1 (306) 717-1994 or fill in our online form for a free drywall quote in Saskatoon, SK.",
    images: ["/images/hero-bg.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://dilchahalconstruction.com/contact-us/#page",
  name: "Contact Dil Chahal Constructions Ltd. — Free Drywall Quote Saskatoon, SK",
  description:
    "Contact Dil Chahal Constructions for a free drywall installation, renovation, or construction quote in Saskatoon, SK. Call, email, or fill in the online form.",
  url: "https://dilchahalconstruction.com/contact-us/",
  isPartOf: { "@type": "WebSite", "@id": "https://dilchahalconstruction.com/#website" },
  about: { "@id": "https://dilchahalconstruction.com/#business" },
  inLanguage: "en-CA",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://dilchahalconstruction.com" },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://dilchahalconstruction.com/contact-us/" },
    ],
  },
};

const contactFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get a free drywall quote in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact Dil Chahal Constructions by calling +1 (306) 717-1994, emailing contact@dilchahalconstruction.com, or filling in the online quote request form on this page. We respond quickly and provide free, no-obligation estimates for all drywall and construction projects in Saskatoon, SK.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Dil Chahal Constructions located in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Saskatoon office is located at Unit 107, 1222 Alberta Ave, Saskatoon, SK S7K 1R4. We serve clients throughout Saskatoon, Warman, Martensville, and surrounding Saskatchewan communities.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does Dil Chahal Constructions serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily serve Saskatoon, SK, and also extend our drywall and construction services to Warman, Martensville, Regina, Prince Albert, and other communities across Saskatchewan. Contact us to confirm coverage for your location.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can Dil Chahal Constructions start a drywall project in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project start times depend on current scheduling and project scope. We encourage you to contact us as early as possible for faster scheduling. Call +1 (306) 717-1994 or submit the online form and we'll confirm availability for your Saskatoon project.",
      },
    },
  ],
};

export default function ContactUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqJsonLd) }} />

      <PageHero title="Contact Us" currentPage="Contact Us" />

      <main>
        {/* ── Contact Details section ── */}
        {/* WP: white bg, "Our Branch" H3 red + "Contact Details" H2, address card + map col */}
        <section className="bg-white" style={{ paddingTop: "clamp(40px, 8vw, 100px)", paddingBottom: "clamp(40px, 6vw, 80px)" }}>
          <div className="max-w-[1140px] mx-auto px-4">

            {/* Section heading */}
            <AnimateIn variant="fadeInDown">
              <div className="text-center" style={{ marginBottom: "60px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "#E00201",
                    lineHeight: "31.2px",
                    marginBottom: "12px",
                  }}
                >
                  Our Saskatoon Branch
                </h3>
                <h2
                  style={{
                    fontFamily: "var(--font-roboto-sans)",
                    fontSize: "clamp(28px, 3.5vw, 40px)",
                    fontWeight: 600,
                    color: "rgb(0,0,0)",
                    lineHeight: "52px",
                  }}
                >
                  Contact Dil Chahal Constructions
                </h2>
              </div>
            </AnimateIn>

            <div className="flex flex-col md:flex-row" style={{ gap: "40px" }}>
              {/* Left: address card */}
              <AnimateIn variant="fadeInLeft" className="flex-1">
                <div
                  style={{
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "4px",
                    padding: "40px 36px",
                    height: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-roboto-sans)",
                      fontSize: "24px",
                      fontWeight: 600,
                      color: "rgb(0,0,0)",
                      lineHeight: "31.2px",
                      marginBottom: "28px",
                    }}
                  >
                    Saskatchewan Head Office
                  </h3>

                  <dl className="flex flex-col" style={{ gap: "20px" }}>
                    <div>
                      <dt style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "18px", fontWeight: 600, color: "rgb(0,0,0)", marginBottom: "6px" }}>
                        Address:
                      </dt>
                      <dd style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 400, color: "rgb(80,80,80)", lineHeight: "1.6" }}>
                        Unit 107, 1222 Alberta Ave,<br />Saskatoon, SK S7K 1R4
                      </dd>
                    </div>

                    <div>
                      <dt style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "18px", fontWeight: 600, color: "rgb(0,0,0)", marginBottom: "6px" }}>
                        Phone:
                      </dt>
                      <dd>
                        <a
                          href="tel:+13067171994"
                          style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 400, color: "#E00201", textDecoration: "none" }}
                        >
                          +1 (306) 717-1994
                        </a>
                      </dd>
                    </div>

                    <div>
                      <dt style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "18px", fontWeight: 600, color: "rgb(0,0,0)", marginBottom: "6px" }}>
                        Email:
                      </dt>
                      <dd>
                        <a
                          href="mailto:contact@dilchahalconstruction.com"
                          style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 400, color: "#E00201", textDecoration: "none" }}
                        >
                          contact@dilchahalconstruction.com
                        </a>
                      </dd>
                    </div>
                  </dl>

                  <a
                    href="#quote"
                    className="inline-block hover:opacity-80 transition-opacity duration-200"
                    style={{
                      marginTop: "32px",
                      background: "#8B0001",
                      color: "rgb(255,255,255)",
                      fontFamily: "var(--font-subheading)",
                      fontSize: "14px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      padding: "12px 28px",
                      textDecoration: "none",
                      display: "inline-block",
                    }}
                  >
                    GET APPOINTMENT
                  </a>
                </div>
              </AnimateIn>

              {/* Right: Leaflet/OpenStreetMap — click opens Google Maps */}
              <AnimateIn variant="fadeInRight" className="flex-1">
                <MapWrapper />
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── Quote Form + FAQ ── (reuses home-page section) */}
        <QuoteAndFAQ />
      </main>

      <Footer />
    </>
  );
}
