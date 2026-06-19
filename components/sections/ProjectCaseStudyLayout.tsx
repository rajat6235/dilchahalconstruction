import Image from "next/image";
import Link from "next/link";
import PageHero from "./PageHero";
import Footer from "../layout/Footer";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectCaseStudyData {
  breadcrumbLabel: string;
  heroTitle: string;
  currentPage: string;
  featuredImage: ProjectImage;
  projectDetails: { label: string; value: string }[];
  description: string[];
  gallery: ProjectImage[];
  servicesUsed: { href: string; label: string }[];
  outcomes: string[];
  relatedProjects: { href: string; label: string }[];
  breadcrumbJsonLd: object;
  articleJsonLd: object;
  webPageJsonLd: object;
}

const BODY = { fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: "1.85", color: "#555" } as const;
const HEADING = { fontFamily: "var(--font-roboto-sans)", fontWeight: 700, color: "#111" } as const;

export default function ProjectCaseStudyLayout({
  breadcrumbLabel,
  heroTitle,
  currentPage,
  featuredImage,
  projectDetails,
  description,
  gallery,
  servicesUsed,
  outcomes,
  relatedProjects,
  breadcrumbJsonLd,
  articleJsonLd,
  webPageJsonLd,
}: ProjectCaseStudyData) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <PageHero title={heroTitle} currentPage={currentPage} />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ backgroundColor: "#f9f9f9", borderBottom: "1px solid #e5e7eb" }}>
          <div className="max-w-[1140px] mx-auto px-4 py-3">
            <ol style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0 8px", fontFamily: "var(--font-body)", fontSize: "13px", color: "#777", listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link href="/" style={{ color: "#E00201", textDecoration: "none" }}>Home</Link></li>
              <li style={{ color: "#bbb" }} aria-hidden="true">/</li>
              <li><Link href="/projects" style={{ color: "#E00201", textDecoration: "none" }}>Projects</Link></li>
              <li style={{ color: "#bbb" }} aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "#444" }}>{breadcrumbLabel}</li>
            </ol>
          </div>
        </nav>

        {/* Featured Image */}
        <div className="relative w-full" style={{ height: "clamp(240px, 40vw, 480px)", overflow: "hidden" }}>
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.45) 0%, transparent 60%)", pointerEvents: "none" }} />
        </div>

        {/* Project Details + Intro */}
        <section className="bg-white" style={{ paddingTop: "clamp(36px, 6vw, 64px)", paddingBottom: "clamp(30px, 5vw, 56px)" }}>
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row" style={{ gap: "48px" }}>

              {/* Left — Description */}
              <div style={{ flex: "1 1 0" }}>
                <div className="flex flex-col" style={{ gap: "14px", marginBottom: "28px" }}>
                  {description.map((p, i) => (
                    <p key={i} style={BODY}>{p}</p>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <Link href="/contact-us" style={{ background: "#E00201", color: "#fff", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", padding: "12px 28px", textDecoration: "none", display: "inline-block" }}>
                    GET A FREE QUOTE
                  </Link>
                  <a href="tel:+13067171994" style={{ border: "1px solid #E00201", color: "#E00201", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", padding: "12px 28px", textDecoration: "none", display: "inline-block" }}>
                    CALL (306) 717-1994
                  </a>
                </div>
              </div>

              {/* Right — Project Details Card */}
              <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "320px" }}>
                <div style={{ background: "#111", padding: "28px 24px" }}>
                  <h2 style={{ ...HEADING, color: "#fff", marginBottom: "20px", letterSpacing: "1px", textTransform: "uppercase", fontSize: "12px" }}>
                    Project Details
                  </h2>
                  <dl style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {projectDetails.map((detail, i) => (
                      <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "14px" }}>
                        <dt style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "3px" }}>
                          {detail.label}
                        </dt>
                        <dd style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "15px", fontWeight: 600, color: "#fff", margin: 0 }}>
                          {detail.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        {gallery.length > 0 && (
          <section style={{ backgroundColor: "#f4f4f4", paddingTop: "clamp(30px, 5vw, 60px)", paddingBottom: "clamp(30px, 5vw, 60px)" }}>
            <div className="max-w-[1140px] mx-auto px-4">
              <h2 style={{ ...HEADING, fontSize: "clamp(18px, 2.2vw, 24px)", marginBottom: "24px", textAlign: "center" }}>
                Project Gallery
              </h2>
              <div className={`grid grid-cols-1 ${gallery.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`} style={{ gap: "8px" }}>
                {gallery.map((img, i) => (
                  <div key={i} className="relative" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1140px) 50vw, 380px"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Used + Outcomes */}
        <section style={{ background: "#8B0001", paddingTop: "clamp(40px, 6vw, 70px)", paddingBottom: "clamp(40px, 6vw, 70px)" }}>
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="flex flex-col md:flex-row" style={{ gap: "48px" }}>
              <div className="flex-1">
                <h2 style={{ ...HEADING, fontSize: "clamp(18px, 2.2vw, 24px)", color: "#fff", marginBottom: "20px" }}>
                  Services Involved in This Project
                </h2>
                <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {servicesUsed.map((s, i) => (
                    <li key={i}>
                      <Link
                        href={s.href}
                        style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", fontFamily: "var(--font-body)", fontSize: "13px", padding: "7px 16px", textDecoration: "none" }}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h2 style={{ ...HEADING, fontSize: "clamp(18px, 2.2vw, 24px)", color: "#fff", marginBottom: "20px" }}>
                  Key Project Outcomes
                </h2>
                <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                  {outcomes.map((o, i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.9)", marginBottom: "10px", lineHeight: "1.65" }}>
                      <span style={{ color: "#ffbbbb", flexShrink: 0 }}>&#10003;</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
            <div className="max-w-[1140px] mx-auto px-4 text-center">
              <h2 style={{ ...HEADING, fontSize: "18px", marginBottom: "20px" }}>
                More Project Case Studies
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
                {relatedProjects.map((p, i) => (
                  <Link key={i} href={p.href} style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#E00201", border: "1px solid #E00201", padding: "7px 16px", textDecoration: "none", display: "inline-block" }}>
                    {p.label}
                  </Link>
                ))}
                <Link href="/projects" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#666", border: "1px solid #ccc", padding: "7px 16px", textDecoration: "none", display: "inline-block" }}>
                  View All Projects
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ background: "#111", paddingTop: "clamp(50px, 8vw, 90px)", paddingBottom: "clamp(50px, 8vw, 90px)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 16px", textAlign: "center" }}>
            <h2 style={{ ...HEADING, fontSize: "clamp(24px, 3.5vw, 40px)", color: "#fff", marginBottom: "16px" }}>
              Start a Similar Project in Saskatoon?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: "1.7", marginBottom: "36px" }}>
              Contact Dil Chahal Construction for a free, no-obligation written quote. Proudly serving Saskatoon, Regina, Prince Albert, and all of Saskatchewan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center" style={{ gap: "16px" }}>
              <Link href="/contact-us" style={{ background: "#E00201", color: "#fff", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", padding: "14px 36px", textDecoration: "none", display: "inline-block" }}>
                GET A FREE QUOTE
              </Link>
              <a href="tel:+13067171994" style={{ border: "1px solid rgba(255,255,255,0.35)", color: "#fff", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", padding: "14px 36px", textDecoration: "none", display: "inline-block" }}>
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
