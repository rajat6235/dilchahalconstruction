import type { Metadata } from "next";
import AnimateIn from "@/components/ui/AnimateIn";
import PageHero from "@/components/sections/PageHero";
import QuoteAndFAQ from "@/components/sections/QuoteAndFAQ";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Dil Chahal Constructions Ltd. in Saskatoon, SK. Call +1 (306) 717-1994 or email contact@dilchahalconstruction.com. Located at Unit 107, 1222 Alberta Ave, Saskatoon, SK S7K 1R4.",
  alternates: { canonical: "https://dilchahalconstruction.com/contact-us/" },
  openGraph: {
    title: "Contact Us | Dil Chahal Constructions Ltd.",
    description: "Get in touch with Dil Chahal Constructions Ltd. for drywall and general contracting services in Saskatoon, SK.",
    url: "https://dilchahalconstruction.com/contact-us/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://dilchahalconstruction.com/contact-us/#page",
  name: "Contact Us – Dil Chahal Constructions Ltd.",
  url: "https://dilchahalconstruction.com/contact-us/",
  isPartOf: { "@type": "WebSite", "@id": "https://dilchahalconstruction.com/#website" },
};

export default function ContactUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero title="Contact Us" currentPage="Contact Us" />

      <main>
        {/* ── Contact Details section ── */}
        {/* WP: white bg, "Our Branch" H3 red + "Contact Details" H2, address card + map col */}
        <section className="bg-white" style={{ paddingTop: "100px", paddingBottom: "80px" }}>
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
                  Our Branch
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
                  Contact Details
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

              {/* Right: Google Maps embed */}
              <AnimateIn variant="fadeInRight" className="flex-1">
                <div className="w-full h-full" style={{ minHeight: "400px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.4!2d-106.6700!3d52.1332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6d9f9b0d955%3A0x0!2sUnit%20107%2C%201222%20Alberta%20Ave%2C%20Saskatoon%2C%20SK%20S7K%201R4!5e0!3m2!1sen!2sca!4v1700000000000"
                    width="100%"
                    height="400"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dil Chahal Constructions Ltd. — Unit 107, 1222 Alberta Ave, Saskatoon, SK"
                  />
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
