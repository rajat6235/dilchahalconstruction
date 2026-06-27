import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
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

      <PageHero
        title="Projects"
        currentPage="Projects"
        subtitle="Drywall, steel framing, renovations, and more — completed across Saskatoon and Saskatchewan."
      />

      <main>
        {/* ── Section 1: Heading ── */}
        <section
          style={{
            backgroundColor: "#fff",
            paddingTop: "clamp(56px, 8vw, 96px)",
            paddingBottom: "clamp(40px, 6vw, 64px)",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
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
                  Our Work
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "clamp(28px, 3.8vw, 48px)",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    letterSpacing: "-0.3px",
                    lineHeight: "1.15",
                  }}
                >
                  Drywall &amp; Renovation Portfolio
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="text-[#E00201] font-[600] text-[13px] hover:underline"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Our Services →
                </Link>
                <Link
                  href="/contact-us"
                  className="text-[#E00201] font-[600] text-[13px] hover:underline"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Get a Free Quote →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Image Grid ── */}
        <section style={{ backgroundColor: "#0a0a0a", paddingBottom: "clamp(48px, 7vw, 80px)" }}>
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-2 lg:grid-cols-4">
              {row.map((img) => {
                const inner = (
                  <>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.06]"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-400" />
                    {img.href && (
                      <span
                        className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: "#E00201",
                          color: "#fff",
                          fontFamily: "var(--font-subheading)",
                          fontSize: "9.5px",
                          fontWeight: 700,
                          letterSpacing: "1.5px",
                          padding: "4px 10px",
                          textTransform: "uppercase",
                        }}
                      >
                        View Case Study
                      </span>
                    )}
                  </>
                );
                return img.href ? (
                  <Link
                    key={img.src}
                    href={img.href}
                    aria-label={img.alt}
                    className="group relative overflow-hidden"
                    style={{ height: "clamp(160px, 22vw, 300px)" }}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div
                    key={img.src}
                    className="group relative overflow-hidden"
                    style={{ height: "clamp(160px, 22vw, 300px)" }}
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          ))}

          {/* ── Case Study Links ── */}
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-12">
            <p
              className="mb-4 text-center"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "11px",
                fontWeight: 700,
                color: "#E00201",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Case Studies
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/projects/commercial-office-fit-out-saskatoon", label: "Commercial Office Fit-Out" },
                { href: "/projects/basement-development-saskatoon", label: "Basement Development" },
                { href: "/projects/steel-framing-residential-saskatoon", label: "Steel Framing — Residential" },
                { href: "/projects/interior-home-renovation-saskatoon", label: "Interior Home Renovation" },
              ].map((cs) => (
                <Link
                  key={cs.href}
                  href={cs.href}
                  className="group inline-flex items-center gap-2 border border-white/20 text-white/70 hover:border-[#E00201] hover:text-white transition-all duration-250 px-5 py-3 rounded-[2px]"
                  style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600 }}
                >
                  {cs.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#E00201]" aria-hidden="true">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Videos ── */}
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-12">
            <p
              className="mb-6 text-center"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "11px",
                fontWeight: 700,
                color: "#E00201",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Project Videos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videos.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-[2px]" style={{ aspectRatio: "16/9", backgroundColor: "#111" }}>
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
