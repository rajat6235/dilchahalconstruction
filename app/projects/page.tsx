import type { Metadata } from "next";
import Image from "next/image";
import ProjectsHero from "@/components/sections/ProjectsHero";
import VideoPlayer from "@/components/ui/VideoPlayer";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Dil Chahal Constructions Ltd. latest projects in Saskatoon, SK — drywall installation, steel framing, T-bar ceilings, house renovations, and commercial construction.",
  alternates: { canonical: "https://dilchahalconstruction.com/projects/" },
  openGraph: {
    title: "Projects | Dil Chahal Constructions Ltd.",
    description: "Browse our latest construction and renovation projects in Saskatoon, SK.",
    url: "https://dilchahalconstruction.com/projects/",
    images: [{ url: "/images/work1.jpg", width: 1200, height: 630, alt: "Dil Chahal Constructions – Latest Projects" }],
  },
};

/* Image grid — 3 rows × 4 images, full viewport width, no gaps */
const rows: { src: string; alt: string }[][] = [
  [
    { src: "/images/work1.jpg",   alt: "Drywall framing construction project in Saskatoon" },
    { src: "/images/work2.jpg",   alt: "T-bar ceiling installation for commercial project" },
    { src: "/images/work3.jpg",   alt: "Steel frame exterior structure construction" },
    { src: "/images/work4.jpeg",  alt: "Interior T-bar ceiling grid installation" },
  ],
  [
    { src: "/images/reno1.jpeg",  alt: "Kitchen renovation with custom cabinetry in Saskatoon" },
    { src: "/images/reno2.jpeg",  alt: "Residential renovation open living space" },
    { src: "/images/reno3.jpeg",  alt: "Bathroom renovation completed by Dil Chahal Constructions" },
    { src: "/images/work5.jpeg",  alt: "Interior renovation project in Saskatoon" },
  ],
  [
    { src: "/images/work8.jpeg",  alt: "Commercial drywall installation project" },
    { src: "/images/work9.jpeg",  alt: "Drywall and framing work on commercial build" },
    { src: "/images/work10.jpeg", alt: "Steel framing structural construction" },
    { src: "/images/work12.jpeg", alt: "Commercial interior construction Saskatoon" },
  ],
];

/* Video sources from live site — hosted .mov files */
const videos = [
  "https://dilchahalconstruction.com/wp-content/uploads/2024/05/3ffeed33-6ca5-4622-8455-84c27d309641-1-1.mov",
  "https://dilchahalconstruction.com/wp-content/uploads/2024/05/157356ce-9ab0-4fc8-a911-cf10ec5b8709.mov",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://dilchahalconstruction.com/projects/#page",
  name: "Projects – Dil Chahal Constructions Ltd.",
  description: "Latest construction and renovation projects by Dil Chahal Constructions Ltd. in Saskatoon, SK.",
  url: "https://dilchahalconstruction.com/projects/",
  isPartOf: { "@type": "WebSite", "@id": "https://dilchahalconstruction.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://dilchahalconstruction.com/" },
      { "@type": "ListItem", position: 2, name: "Projects", item: "https://dilchahalconstruction.com/projects/" },
    ],
  },
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
              Our Projects
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
              Latest Works
            </h2>
          </div>
        </section>

        {/* ── Section 2: Image Grid ── */}
        {/* WP 2a2118d / 46faa25 / 24533ce: full-width, no gap, white bg, pb-100px */}
        <section className="bg-white" style={{ paddingBottom: "100px" }}>
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {row.map((img) => (
                <div key={img.src} className="relative" style={{ height: "280px" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          ))}

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
