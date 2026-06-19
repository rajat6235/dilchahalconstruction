import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import HouseRenovations from "@/components/sections/HouseRenovations";
import AnimateIn from "@/components/ui/AnimateIn";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Dil Chahal Constructions Ltd. offers drywall installation, GlassRoc sheathing, steel framing, T-bar ceilings, insulation, bulkhead ceilings, mudding, taping, texturing, and house renovations in Saskatoon, SK.",
  alternates: { canonical: "https://dilchahalconstruction.com/services/" },
  openGraph: {
    title: "Services | Dil Chahal Constructions Ltd.",
    description: "Expert drywall, steel framing, T-bar ceilings, insulation, and renovation services in Saskatoon, SK.",
    url: "https://dilchahalconstruction.com/services/",
    images: [{ url: "/images/drywall.jpg", width: 1200, height: 630, alt: "Dil Chahal Constructions – Drywall and Construction Services" }],
  },
};

const services = [
  {
    img: "/images/drywall.jpg",
    alt: "Drywall installation by Dil Chahal Constructions Ltd. in Saskatoon, SK",
    title: "Drywall",
    desc: "Quality drywall services providing strong and even surfaces for any space.",
  },
  {
    img: "/images/glasroc.jpeg",
    alt: "GlassRoc sheathing installation for exterior walls and roofs in Saskatoon",
    title: "GlassRoc",
    desc: "Safeguard your building with GlasRoc Sheathing—superior fire, moisture, and mold resistance for durable exterior walls and roofs.",
  },
  {
    img: "/images/steel-frame.jpeg",
    alt: "Steel frame construction by Dil Chahal Constructions Ltd. in Saskatoon",
    title: "Steel Frame",
    desc: "Durable steel frame constructions that provide excellent structural support.",
  },
  {
    img: "/images/t-bar.jpeg",
    alt: "T-bar suspended ceiling installation in a commercial space in Saskatoon",
    title: "T-Bar",
    desc: "Superior T-Bar ceiling systems for a modern, clean, and professional appearance.",
  },
  {
    img: "/images/insulation.jpeg",
    alt: "Professional insulation services to improve energy efficiency in Saskatoon buildings",
    title: "Insulation",
    desc: "Top-tier insulation services to keep your property energy-efficient and cozy.",
  },
  {
    img: "/images/bulkhead.jpeg",
    alt: "Custom bulkhead ceiling installation adding dimension to interior spaces in Saskatoon",
    title: "Bulkhead Ceiling",
    desc: "Enhance your space with our expertly crafted bulkhead ceilings, designed to add dimension and character to any room.",
  },
  {
    img: "/images/mudding.jpeg",
    alt: "Mudding and taping drywall joints for a smooth professional finish in Saskatoon",
    title: "Mudding",
    desc: "Seamless mudding services for a smooth, impeccable finish on all surfaces.",
  },
  {
    img: "/images/texture.jpeg",
    alt: "Decorative texturing services to enhance interior walls and ceilings in Saskatoon",
    title: "Texture",
    desc: "Stylish texturing techniques to enhance the visual appeal of your interiors.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://dilchahalconstruction.com/services/#page",
  name: "Services – Dil Chahal Constructions Ltd.",
  url: "https://dilchahalconstruction.com/services/",
  isPartOf: { "@type": "WebSite", "@id": "https://dilchahalconstruction.com/#website" },
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero title="Services" currentPage="Services" />

      <main>
        {/* ── Heading: "Comprehensive Solutions / Quality Services" ── */}
        {/* WP: white bg, 100px top padding, heading H4 + H2 centered, "View All" link */}
        <section className="bg-white" style={{ paddingTop: "100px", paddingBottom: "60px" }}>
          <div className="max-w-[1140px] mx-auto px-4 text-center">
            <AnimateIn variant="fadeInDown">
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "24px",
                  fontWeight: 300,
                  color: "rgb(0,0,0)",
                  lineHeight: "31.2px",
                  marginBottom: "12px",
                }}
              >
                Comprehensive Solutions
              </h3>
              <h2
                style={{
                  fontFamily: "var(--font-roboto-sans)",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 700,
                  color: "rgb(0,0,0)",
                  lineHeight: "1.2",
                  marginBottom: "20px",
                }}
              >
                Quality Services
              </h2>
              <Link
                href="/projects"
                className="hover:text-[#E00201] transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#E00201", fontWeight: 500 }}
              >
                View All →
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* ── Service Cards: 2 rows × 4 ── */}
        {/* WP: max-width 1140px, 4 columns, no gap, image + H3 + para */}
        <section className="bg-white" style={{ paddingBottom: "60px" }}>
          <div className="max-w-[1140px] mx-auto px-4">
            <AnimateIn variant="fadeInUp">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "0" }}>
                {services.map((svc) => (
                  <div key={svc.title} className="flex flex-col">
                    <div className="relative w-full" style={{ aspectRatio: "3/2" }}>
                      <Image
                        src={svc.img}
                        alt={svc.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div style={{ padding: "20px 16px 28px" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-roboto-sans)",
                          fontSize: "26px",
                          fontWeight: 700,
                          color: "rgb(0,0,0)",
                          lineHeight: "33.8px",
                          marginBottom: "10px",
                        }}
                      >
                        {svc.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "16px",
                          fontWeight: 400,
                          color: "rgb(0,0,0)",
                          lineHeight: "24.75px",
                        }}
                      >
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── House Renovations ── */}
        <HouseRenovations />
      </main>

      <Footer />
    </>
  );
}
