import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectsHero from "@/components/sections/ProjectsHero";
import VideoPlayer from "@/components/ui/VideoPlayer";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Drywall & Construction Portfolio — Saskatoon, SK",
  description:
    "Browse completed drywall installation, steel framing, T-bar ceiling, insulation & renovation projects by Dil Chahal Construction in Saskatoon, SK and across Saskatchewan.",
  keywords: [
    "drywall projects saskatoon",
    "construction portfolio saskatoon",
    "drywall renovation saskatoon",
    "commercial drywall saskatoon portfolio",
    "residential drywall portfolio saskatoon",
    "house renovation projects saskatoon",
    "drywall company projects sk",
    "construction projects saskatoon sk",
  ],
  alternates: { canonical: "https://dilchahalconstruction.com/projects/" },
  openGraph: {
    title: "Drywall & Construction Portfolio — Saskatoon, SK | Dil Chahal Construction Ltd.",
    description:
      "Browse completed drywall installation, steel framing, T-bar ceiling, insulation & renovation projects in Saskatoon, SK and across Saskatchewan.",
    url: "https://dilchahalconstruction.com/projects/",
    images: [{ url: "/images/work1.jpg", width: 1200, height: 630, alt: "Drywall and construction project portfolio — Dil Chahal Construction Saskatoon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall & Construction Portfolio — Saskatoon, SK | Dil Chahal Construction",
    description: "Browse completed drywall, steel framing, T-bar ceiling & renovation projects in Saskatoon and Saskatchewan.",
    images: ["/images/work1.jpg"],
  },
};

/* Image grid — 3 rows × 4 images, full viewport width, no gaps.
   Featured case study images link to their project pages; others link to /contact-us for a quote. */
const rows: { src: string; alt: string; href?: string }[][] = [
  [
    { src: "/images/work1.jpg",   alt: "Drywall installation and framing for commercial office fit-out in Saskatoon, SK — view case study", href: "/projects/commercial-office-fit-out-saskatoon" },
    { src: "/images/work2.jpg",   alt: "T-bar suspended ceiling installation for commercial property in Saskatoon, SK — view case study", href: "/projects/commercial-office-fit-out-saskatoon" },
    { src: "/images/work3.jpg",   alt: "Steel stud framing for residential construction in Saskatoon, Saskatchewan — view case study", href: "/projects/steel-framing-residential-saskatoon" },
    { src: "/images/work4.jpeg",  alt: "Interior T-bar ceiling grid installation for office space in Saskatoon, SK — view case study", href: "/projects/commercial-office-fit-out-saskatoon" },
  ],
  [
    { src: "/images/reno1.jpeg",  alt: "Interior home renovation with kitchen drywall completed by Dil Chahal Construction Saskatoon — view case study", href: "/projects/interior-home-renovation-saskatoon" },
    { src: "/images/reno2.jpeg",  alt: "Residential open-plan renovation and basement development in Saskatoon, Saskatchewan — view case study", href: "/projects/basement-development-saskatoon" },
    { src: "/images/reno3.jpeg",  alt: "Bathroom renovation with moisture-resistant drywall by Dil Chahal Construction Saskatoon — view case study", href: "/projects/interior-home-renovation-saskatoon" },
    { src: "/images/work5.jpeg",  alt: "Interior drywall and renovation project in Saskatoon by Dil Chahal Construction" },
  ],
  [
    { src: "/images/work8.jpeg",  alt: "Commercial drywall installation completed by Dil Chahal Construction Saskatoon" },
    { src: "/images/work9.jpeg",  alt: "Drywall and steel framing work on commercial build in Saskatoon, SK — view case study", href: "/projects/steel-framing-residential-saskatoon" },
    { src: "/images/work10.jpeg", alt: "Steel stud framing structural work for residential construction in Saskatoon — view case study", href: "/projects/steel-framing-residential-saskatoon" },
    { src: "/images/work12.jpeg", alt: "Commercial interior drywall and ceiling construction in Saskatoon, Saskatchewan" },
  ],
];

/* Video sources from live site — hosted .mov files */
const videos = [
  "https://dilchahalconstruction.com/wp-content/uploads/2024/05/3ffeed33-6ca5-4622-8455-84c27d309641-1-1.mov",
  "https://dilchahalconstruction.com/wp-content/uploads/2024/05/157356ce-9ab0-4fc8-a911-cf10ec5b8709.mov",
];

const BASE = "https://dilchahalconstruction.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${BASE}/projects/#page`,
  name: "Drywall & Construction Project Portfolio — Saskatoon, SK",
  description: "Completed drywall, steel framing, insulation, ceiling, and renovation projects by Dil Chahal Construction Ltd. in Saskatoon, SK and across Saskatchewan.",
  url: `${BASE}/projects/`,
  isPartOf: { "@type": "WebSite", "@id": `${BASE}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${BASE}/projects/` },
    ],
  },
  hasPart: [
    { "@type": "WebPage", name: "Commercial Office Fit-Out — Saskatoon, SK", url: `${BASE}/projects/commercial-office-fit-out-saskatoon/` },
    { "@type": "WebPage", name: "Basement Development — Saskatoon, SK", url: `${BASE}/projects/basement-development-saskatoon/` },
    { "@type": "WebPage", name: "Steel Framing — Residential Saskatoon, SK", url: `${BASE}/projects/steel-framing-residential-saskatoon/` },
    { "@type": "WebPage", name: "Interior Home Renovation — Saskatoon, SK", url: `${BASE}/projects/interior-home-renovation-saskatoon/` },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ProjectsHero />

      <main>
        {/* ── Section 1: Heading ── */}
        {/* WP 3a31dfd: white bg, inner max-width 1140px, padding 100px 0 50px */}
        <section className="bg-white">
          <div className="max-w-[1140px] mx-auto px-4" style={{ padding: "100px 16px 50px" }}>
            {/* WP 239a3f9: H3 "Our Projects" — Roboto 24px weight 200 #E00201 centered */}
            <h3
              style={{
                fontFamily: "var(--font-roboto-sans)",
                fontSize: "24px",
                fontWeight: 200,
                color: "#E00201",
                lineHeight: "31.2px",
                letterSpacing: "normal",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Our Construction Projects
            </h3>

            {/* WP fdd3d01: H2 "Latest Works" — Roboto 40px weight 600 #242424 centered */}
            <h2
              style={{
                fontFamily: "var(--font-roboto-sans)",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 600,
                color: "rgb(36,36,36)",
                lineHeight: "52px",
                letterSpacing: "normal",
                textAlign: "center",
              }}
            >
              Drywall &amp; Renovation Portfolio
            </h2>

            <div className="flex flex-wrap gap-4 justify-center" style={{ marginTop: "24px" }}>
              <Link
                href="/services"
                aria-label="View all drywall and construction services"
                className="text-sm font-medium hover:underline"
                style={{ color: "#E00201", fontFamily: "var(--font-body)" }}
              >
                Our Services →
              </Link>
              <Link
                href="/contact-us"
                aria-label="Get a free drywall or renovation quote"
                className="text-sm font-medium hover:underline"
                style={{ color: "#E00201", fontFamily: "var(--font-body)" }}
              >
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 2: Image Grid ── */}
        {/* WP 2a2118d / 46faa25 / 24533ce: full-width, no gap, white bg, pb-100px */}
        <section className="bg-white" style={{ paddingBottom: "100px" }}>
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {row.map((img) => {
                const inner = (
                  <div className="relative w-full h-full" style={{ position: "absolute", inset: 0 }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {img.href && (
                      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", transition: "background 0.2s" }} className="hover-darken" />
                    )}
                  </div>
                );
                return img.href ? (
                  <Link key={img.src} href={img.href} aria-label={img.alt} style={{ display: "block", position: "relative", height: "280px", overflow: "hidden" }}>
                    {inner}
                    <span style={{ position: "absolute", bottom: "12px", left: "12px", background: "#E00201", color: "#fff", fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", padding: "4px 10px", textTransform: "uppercase", zIndex: 10 }}>
                      View Case Study
                    </span>
                  </Link>
                ) : (
                  <div key={img.src} className="relative" style={{ height: "280px" }}>
                    {inner}
                  </div>
                );
              })}
            </div>
          ))}

          {/* ── Case Study Links ── */}
          <div className="max-w-[1140px] mx-auto px-4" style={{ paddingTop: "48px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 700, color: "#111", marginBottom: "20px" }}>
              Project Case Studies
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
              <Link href="/projects/commercial-office-fit-out-saskatoon" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#E00201", border: "1px solid #E00201", padding: "8px 18px", textDecoration: "none" }}>
                Commercial Office Fit-Out
              </Link>
              <Link href="/projects/basement-development-saskatoon" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#E00201", border: "1px solid #E00201", padding: "8px 18px", textDecoration: "none" }}>
                Basement Development
              </Link>
              <Link href="/projects/steel-framing-residential-saskatoon" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#E00201", border: "1px solid #E00201", padding: "8px 18px", textDecoration: "none" }}>
                Steel Framing — Residential
              </Link>
              <Link href="/projects/interior-home-renovation-saskatoon" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#E00201", border: "1px solid #E00201", padding: "8px 18px", textDecoration: "none" }}>
                Interior Home Renovation
              </Link>
            </div>
          </div>

          {/* ── Section 3: Videos ── */}
          {/* WP 1d3160d: max-width 1140px, padding 0 10px, two videos side-by-side 550×309px each */}
          <div
            className="mx-auto"
            style={{ maxWidth: "1140px", padding: "60px 10px 0" }}
          >
            <div className="flex flex-col md:flex-row" style={{ gap: "20px" }}>
              {videos.map((src, i) => (
                <div key={i} className="flex-1 overflow-hidden" style={{ aspectRatio: "16/9", backgroundColor: "#000" }}>
                  <VideoPlayer
                    src={src}
                    style={{ width: "100%", height: "100%", display: "block" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
