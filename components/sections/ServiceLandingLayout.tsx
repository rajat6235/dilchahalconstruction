import Image from "next/image";
import Link from "next/link";
import PageHero from "./PageHero";
import Footer from "../layout/Footer";

export interface Benefit {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface RelatedLink {
  href: string;
  label: string;
}

export interface ServiceLandingData {
  breadcrumbLabel: string;
  heroTitle: string;
  currentPage: string;
  intro: string[];
  benefits: Benefit[];
  benefitsHeading?: string;
  processSteps: ProcessStep[];
  processHeading?: string;
  faqs: ServiceFaq[];
  relatedServices: RelatedLink[];
  relatedServicesLabel?: string;
  breadcrumbParent?: { href: string; label: string };
  imageSrc: string;
  imageAlt: string;
  serviceJsonLd: object;
  faqJsonLd: object;
  breadcrumbJsonLd: object;
  webPageJsonLd: object;
}

const WHY_ITEMS = [
  "Licensed and fully insured contractor in Saskatchewan",
  "7+ years of residential and commercial experience",
  "Competitive, transparent pricing — no hidden fees",
  "Free consultations and no-obligation written quotes",
  "Committed to quality, safety, and on-time delivery",
];

const SERVICE_AREAS = [
  "Saskatoon, SK",
  "Warman, SK",
  "Martensville, SK",
  "Regina, SK",
  "Prince Albert, SK",
  "Surrounding SK Communities",
];

export default function ServiceLandingLayout({
  breadcrumbLabel,
  heroTitle,
  currentPage,
  intro,
  benefits,
  benefitsHeading = "Why Professional Service Matters",
  processSteps,
  processHeading = "Our Process",
  faqs,
  relatedServices,
  relatedServicesLabel = "Related Services in Saskatoon",
  breadcrumbParent = { href: "/services", label: "Services" },
  imageSrc,
  imageAlt,
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
}: ServiceLandingData) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title={heroTitle} currentPage={currentPage} />

      <main>
        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" style={{ backgroundColor: "#f9f9f9", borderBottom: "1px solid #e5e7eb" }}>
          <div className="max-w-[1140px] mx-auto px-4 py-3">
            <ol style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0 8px", fontFamily: "var(--font-body)", fontSize: "13px", color: "#777", listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link href="/" style={{ color: "#E00201", textDecoration: "none" }}>Home</Link></li>
              <li style={{ color: "#bbb" }} aria-hidden="true">/</li>
              <li><Link href={breadcrumbParent.href} style={{ color: "#E00201", textDecoration: "none" }}>{breadcrumbParent.label}</Link></li>
              <li style={{ color: "#bbb" }} aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "#444" }}>{breadcrumbLabel}</li>
            </ol>
          </div>
        </nav>

        {/* ── Intro + Image ── */}
        <section className="bg-white" style={{ paddingTop: "clamp(40px, 7vw, 80px)", paddingBottom: "clamp(30px, 5vw, 60px)" }}>
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="flex flex-col md:flex-row" style={{ gap: "48px", alignItems: "center" }}>
              <div className="flex-1">
                <div className="flex flex-col" style={{ gap: "16px" }}>
                  {intro.map((paragraph, i) => (
                    <p key={i} style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: "1.85", color: "#555" }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <Link
                    href="/contact-us#contact"
                    style={{ background: "#E00201", color: "#fff", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", padding: "12px 28px", textDecoration: "none", display: "inline-block" }}
                  >
                    GET A FREE QUOTE
                  </Link>
                  <a
                    href="tel:+13067171994"
                    style={{ border: "1px solid #E00201", color: "#E00201", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", padding: "12px 28px", textDecoration: "none", display: "inline-block" }}
                  >
                    CALL (306) 717-1994
                  </a>
                </div>
              </div>
              <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "480px" }}>
                <div className="relative w-full" style={{ aspectRatio: "4/3", borderRadius: "4px", overflow: "hidden" }}>
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 480px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section style={{ backgroundColor: "#f4f4f4", paddingTop: "clamp(40px, 6vw, 70px)", paddingBottom: "clamp(40px, 6vw, 70px)" }}>
          <div className="max-w-[1140px] mx-auto px-4">
            <h2 style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "clamp(22px, 2.8vw, 34px)", fontWeight: 700, color: "#111", textAlign: "center", marginBottom: "40px" }}>
              {benefitsHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "20px" }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ background: "#fff", padding: "28px 22px", borderTop: "3px solid #E00201" }}>
                  <h3 style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "17px", fontWeight: 700, color: "#111", marginBottom: "10px" }}>{b.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: "1.8", color: "#666", margin: 0 }}>{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="bg-white" style={{ paddingTop: "clamp(40px, 6vw, 70px)", paddingBottom: "clamp(40px, 6vw, 70px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 16px" }}>
            <h2 style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "clamp(22px, 2.8vw, 34px)", fontWeight: 700, color: "#111", textAlign: "center", marginBottom: "40px" }}>
              {processHeading}
            </h2>
            <div className="flex flex-col" style={{ gap: "28px" }}>
              {processSteps.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: "44px", height: "44px", borderRadius: "50%", background: "#E00201", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "16px" }}>
                    {i + 1}
                  </div>
                  <div style={{ paddingTop: "8px" }}>
                    <h3 style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "17px", fontWeight: 700, color: "#111", marginBottom: "6px" }}>{step.title}</h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: "1.75", color: "#666", margin: 0 }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us + Service Areas ── */}
        <section style={{ background: "#8B0001", paddingTop: "clamp(40px, 6vw, 70px)", paddingBottom: "clamp(40px, 6vw, 70px)" }}>
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="flex flex-col md:flex-row" style={{ gap: "48px" }}>
              <div className="flex-1">
                <h2 style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, color: "#fff", marginBottom: "20px" }}>
                  Why Choose Dil Chahal Constructions?
                </h2>
                <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                  {WHY_ITEMS.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: "1.7", color: "rgba(255,255,255,0.9)", marginBottom: "10px" }}>
                      <span style={{ color: "#ffbbbb", flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h2 style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, color: "#fff", marginBottom: "20px" }}>
                  Service Areas in Saskatchewan
                </h2>
                <ul className="grid grid-cols-2" style={{ gap: "8px 20px", padding: 0, margin: 0, listStyle: "none", marginBottom: "28px" }}>
                  {SERVICE_AREAS.map((area, i) => (
                    <li key={i} style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(255,255,255,0.9)", padding: "4px 0" }}>
                      {area}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact-us#contact"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", fontFamily: "var(--font-roboto-sans)", fontSize: "12px", fontWeight: 700, letterSpacing: "1px", padding: "10px 22px", textDecoration: "none", display: "inline-block" }}
                >
                  CHECK AVAILABILITY
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white" style={{ paddingTop: "clamp(40px, 6vw, 70px)", paddingBottom: "clamp(40px, 6vw, 70px)" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto", padding: "0 16px" }}>
            <h2 style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "clamp(22px, 2.8vw, 34px)", fontWeight: 700, color: "#111", textAlign: "center", marginBottom: "40px" }}>
              Frequently Asked Questions
            </h2>
            <div>
              {faqs.map((faq, i) => (
                <details key={i} style={{ borderTop: "1px solid #e5e7eb" }}>
                  <summary style={{ padding: "18px 16px 18px 0", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 700, color: "#333", lineHeight: "1.5", userSelect: "none" }}>
                    {faq.question}
                  </summary>
                  <div style={{ padding: "2px 0 18px 0", borderBottom: "1px solid #e5e7eb" }}>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: "1.75", color: "#666", margin: 0 }}>{faq.answer}</p>
                  </div>
                </details>
              ))}
              <div style={{ borderTop: "1px solid #e5e7eb" }} aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* ── Related Services ── */}
        {relatedServices.length > 0 && (
          <section style={{ backgroundColor: "#f4f4f4", paddingTop: "40px", paddingBottom: "40px" }}>
            <div className="max-w-[1140px] mx-auto px-4 text-center">
              <h2 style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "18px", fontWeight: 600, color: "#333", marginBottom: "20px" }}>
                {relatedServicesLabel}
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
                {relatedServices.map((s, i) => (
                  <Link key={i} href={s.href} style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#E00201", border: "1px solid #E00201", padding: "7px 16px", textDecoration: "none", display: "inline-block" }}>
                    {s.label}
                  </Link>
                ))}
                <Link href="/services" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#666", border: "1px solid #ccc", padding: "7px 16px", textDecoration: "none", display: "inline-block" }}>
                  All Services
                </Link>
                <Link href="/projects" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#666", border: "1px solid #ccc", padding: "7px 16px", textDecoration: "none", display: "inline-block" }}>
                  View Projects
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section style={{ background: "#111", paddingTop: "clamp(50px, 8vw, 90px)", paddingBottom: "clamp(50px, 8vw, 90px)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 16px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
              Ready to Start Your Project?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: "1.7", marginBottom: "36px" }}>
              Contact Dil Chahal Constructions for a free, no-obligation quote. Proudly serving Saskatoon, Warman, Martensville, and all of Saskatchewan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center" style={{ gap: "16px" }}>
              <Link
                href="/contact-us#contact"
                style={{ background: "#E00201", color: "#fff", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", padding: "14px 36px", textDecoration: "none", display: "inline-block" }}
              >
                GET A FREE QUOTE
              </Link>
              <a
                href="tel:+13067171994"
                style={{ border: "1px solid rgba(255,255,255,0.35)", color: "#fff", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", padding: "14px 36px", textDecoration: "none", display: "inline-block" }}
              >
                CALL (306) 717-1994
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
