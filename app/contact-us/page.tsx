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
    title: "Contact Us — Free Drywall Quote in Saskatoon, SK | Dil Chahal Construction Ltd.",
    description:
      "Get a free drywall or renovation quote in Saskatoon, SK. Call +1 (306) 717-1994. Serving Saskatoon, Warman, Martensville & all of Saskatchewan.",
    url: "https://dilchahalconstruction.com/contact-us/",
    images: [{ url: "/images/hero-bg.jpeg", width: 1200, height: 630, alt: "Contact Dil Chahal Construction Ltd. — Drywall Contractor in Saskatoon, SK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Free Drywall Quote Saskatoon | Dil Chahal Construction",
    description: "Call +1 (306) 717-1994 or fill in our online form for a free drywall quote in Saskatoon, SK.",
    images: ["/images/hero-bg.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://dilchahalconstruction.com/contact-us/#page",
  name: "Contact Dil Chahal Construction Ltd. — Free Drywall Quote Saskatoon, SK",
  description:
    "Contact Dil Chahal Construction for a free drywall installation, renovation, or construction quote in Saskatoon, SK. Call, email, or fill in the online form.",
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
        text: "Contact Dil Chahal Construction by calling +1 (306) 717-1994, emailing contact@dilchahalconstruction.com, or filling in the online quote request form on this page. We respond quickly and provide free, no-obligation estimates for all drywall and construction projects in Saskatoon, SK.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Dil Chahal Construction located in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Saskatoon office is located at Unit 107, 1222 Alberta Ave, Saskatoon, SK S7K 1R4. We serve clients throughout Saskatoon, Warman, Martensville, and surrounding Saskatchewan communities.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does Dil Chahal Construction serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily serve Saskatoon, SK, and also extend our drywall and construction services to Warman, Martensville, Regina, Prince Albert, and other communities across Saskatchewan. Contact us to confirm coverage for your location.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can Dil Chahal Construction start a drywall project in Saskatoon?",
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
        <section
          style={{
            backgroundColor: "#fff",
            paddingTop: "clamp(56px, 8vw, 96px)",
            paddingBottom: "clamp(48px, 7vw, 80px)",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">

            {/* Heading */}
            <AnimateIn variant="fadeInDown">
              <div className="mb-12">
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
                  Get In Touch
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "clamp(26px, 3.5vw, 44px)",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    letterSpacing: "-0.3px",
                    lineHeight: "1.15",
                    maxWidth: "480px",
                  }}
                >
                  Contact Dil Chahal Construction
                </h2>
              </div>
            </AnimateIn>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
              {/* Left: contact detail cards */}
              <AnimateIn variant="fadeInLeft" className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  {[
                    {
                      label: "Phone",
                      value: "+1 (306) 717-1994",
                      href: "tel:+13067171994",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                          <path d="M16.5 12.675c0 .3-.067.592-.208.875a3.21 3.21 0 0 1-.567.817c-.341.375-.716.641-1.141.808-.417.167-.867.25-1.35.25-.709 0-1.468-.167-2.275-.508a19.07 19.07 0 0 1-2.275-1.309 19.24 19.24 0 0 1-2.117-1.941 18.96 18.96 0 0 1-1.3-2.109C4.89 8.567 4.666 7.808 4.666 7.083c0-.466.075-.917.233-1.333.158-.425.408-.817.758-1.167A1.85 1.85 0 0 1 7 4.083c.183 0 .367.042.533.125.175.084.333.209.459.392l1.6 2.25c.125.175.216.342.283.5.067.15.1.3.1.441 0 .175-.05.35-.15.517a2.526 2.526 0 0 1-.4.508l-.542.559a.382.382 0 0 0-.116.283c0 .058.008.108.025.158.025.05.05.092.066.133.126.233.341.534.642.891.308.359.633.726.983 1.059.367.341.716.633 1.083.891.359.258.658.417.9.5.033.017.075.025.125.025a.389.389 0 0 0 .292-.117l.541-.541c.167-.167.334-.292.5-.367.167-.075.334-.117.509-.117.141 0 .291.025.45.084.158.058.325.15.5.283l2.266 1.617c.184.125.309.275.384.45.066.175.1.35.1.533z" fill="#E00201"/>
                        </svg>
                      ),
                    },
                    {
                      label: "Email",
                      value: "contact@dilchahalconstruction.com",
                      href: "mailto:contact@dilchahalconstruction.com",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                          <path d="M3 3h12a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 15 15H3a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 3 3z" stroke="#E00201" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="m1.5 4.5 7.5 6 7.5-6" stroke="#E00201" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ),
                    },
                    {
                      label: "Address",
                      value: "Unit 107, 1222 Alberta Ave, Saskatoon, SK S7K 1R4",
                      href: undefined,
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                          <path d="M9 1.5A5.25 5.25 0 0 0 3.75 6.75C3.75 11.25 9 16.5 9 16.5s5.25-5.25 5.25-9.75A5.25 5.25 0 0 0 9 1.5z" stroke="#E00201" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="9" cy="6.75" r="1.875" stroke="#E00201" strokeWidth="1.4"/>
                        </svg>
                      ),
                    },
                    {
                      label: "Hours",
                      value: "Mon–Fri: 8am–6pm\nSat: 9am–4pm",
                      href: undefined,
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                          <circle cx="9" cy="9" r="7.5" stroke="#E00201" strokeWidth="1.4"/>
                          <path d="M9 5.25V9l2.625 2.625" stroke="#E00201" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ),
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="border border-[#E5E7EB] p-5 rounded-[2px]"
                      style={{ borderLeft: "3px solid #E00201" }}
                    >
                      <div className="flex items-center gap-2.5 mb-3">
                        {item.icon}
                        <p
                          style={{
                            fontFamily: "var(--font-subheading)",
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "#9CA3AF",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.label}
                        </p>
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#0a0a0a] hover:text-[#E00201] transition-colors duration-200 break-all"
                          style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600, lineHeight: "1.6" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#374151", lineHeight: "1.65", whiteSpace: "pre-line" }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 bg-[#E00201] text-white font-[700] px-7 py-[13px] rounded-[2px] hover:bg-[#c50000] transition-all duration-300 active:scale-[0.97]"
                  style={{ fontFamily: "var(--font-subheading)", fontSize: "12.5px", letterSpacing: "0.5px" }}
                >
                  Get a Free Quote
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </AnimateIn>

              {/* Right: Map */}
              <AnimateIn variant="fadeInRight" className="flex-1 min-h-[340px]">
                <div className="h-full min-h-[340px] overflow-hidden rounded-[2px] border border-[#E5E7EB]">
                  <MapWrapper />
                </div>
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
