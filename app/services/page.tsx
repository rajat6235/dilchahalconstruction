import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import HouseRenovations from "@/components/sections/HouseRenovations";
import AnimateIn from "@/components/ui/AnimateIn";
import Footer from "@/components/layout/Footer";

const BASE_URL = "https://dilchahalconstruction.com";

export const metadata: Metadata = {
  title: "Drywall & Construction Services — Saskatoon, SK",
  description:
    "Licensed drywall installation, steel framing, T-bar ceilings, GlassRoc sheathing, insulation, mudding, taping & texturing in Saskatoon, SK. Residential & commercial contractor. Free quote!",
  keywords: [
    "drywall installation saskatoon",
    "drywall contractor saskatoon",
    "drywall services saskatoon",
    "drywall repair saskatoon",
    "drywall finishing saskatoon",
    "steel framing saskatoon",
    "steel framing contractor saskatoon",
    "t-bar ceiling installation saskatoon",
    "drop ceiling saskatoon",
    "suspended ceiling saskatoon",
    "insulation contractor saskatoon",
    "insulation services saskatoon",
    "glasroc sheathing saskatoon",
    "bulkhead ceiling saskatoon",
    "mudding taping saskatoon",
    "texturing saskatoon",
    "general contractor saskatoon",
    "construction company saskatoon",
    "renovation contractor saskatoon",
    "commercial drywall saskatoon",
    "residential drywall saskatoon",
    "interior construction saskatoon",
    "drywall company saskatoon sk",
    "drywall contractor saskatchewan",
  ],
  alternates: { canonical: `${BASE_URL}/services/` },
  openGraph: {
    title: "Drywall & Construction Services in Saskatoon, SK | Dil Chahal Construction Ltd.",
    description:
      "Licensed drywall contractor offering installation, repair, steel framing, T-bar ceilings, GlassRoc sheathing, insulation & more in Saskatoon & Saskatchewan. Free quote!",
    url: `${BASE_URL}/services/`,
    images: [
      {
        url: "/images/drywall.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Drywall Installation Services in Saskatoon, SK by Dil Chahal Construction Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall & Construction Services in Saskatoon, SK | Dil Chahal Construction",
    description:
      "Licensed drywall installation, steel framing, T-bar ceilings, insulation & more in Saskatoon. Residential & commercial. Free quote!",
    images: ["/images/drywall.jpg"],
  },
};

/* ── Services data ─────────────────────────────────────── */
const services = [
  {
    img: "/images/drywall.jpg",
    alt: "Professional drywall installation for residential and commercial properties in Saskatoon, Saskatchewan — Dil Chahal Construction",
    title: "Drywall Installation",
    desc: "Professional drywall installation and finishing for residential and commercial spaces in Saskatoon, SK — precision work, strong and even surfaces built to last.",
  },
  {
    img: "/images/glasroc.jpeg",
    alt: "GlassRoc sheathing installation for superior fire and moisture resistance on exterior walls in Saskatoon, SK",
    title: "GlassRoc Sheathing",
    desc: "Protect your building with GlasRoc Sheathing — superior fire, moisture, and mold resistance for durable exterior walls and roofs throughout Saskatoon and Saskatchewan.",
  },
  {
    img: "/images/steel-frame.jpeg",
    alt: "Steel stud framing for residential and commercial construction projects in Saskatoon, Saskatchewan",
    title: "Steel Framing",
    desc: "Precision steel stud framing for walls and partitions in Saskatoon, SK — durable, code-compliant structural support for residential and commercial construction projects.",
  },
  {
    img: "/images/t-bar.jpeg",
    alt: "T-bar suspended ceiling installation for commercial and office spaces in Saskatoon, Saskatchewan",
    title: "T-Bar Ceiling",
    desc: "Professional T-bar suspended ceiling installation for commercial and office spaces in Saskatoon — clean, modern, and acoustically effective ceiling systems.",
  },
  {
    img: "/images/insulation.jpeg",
    alt: "Energy-efficient insulation installation for homes and commercial buildings in Saskatoon, Saskatchewan",
    title: "Insulation",
    desc: "Energy-efficient insulation services for homes and commercial properties in Saskatoon, SK — lower energy bills, improved comfort, and code-compliant installation.",
  },
  {
    img: "/images/bulkhead.jpeg",
    alt: "Custom bulkhead ceiling construction for residential kitchens and commercial spaces in Saskatoon",
    title: "Bulkhead Ceiling",
    desc: "Custom bulkhead ceiling construction in Saskatoon — architectural detail and definition for residential kitchens, hallways, and commercial spaces.",
  },
  {
    img: "/images/mudding.jpeg",
    alt: "Expert mudding and taping for smooth drywall finishing in Saskatoon, SK — residential and commercial",
    title: "Mudding & Taping",
    desc: "Expert mudding and taping for flawless drywall seams — residential and commercial projects in Saskatoon, SK, ensuring a perfectly paint-ready surface every time.",
  },
  {
    img: "/images/texture.jpeg",
    alt: "Decorative wall and ceiling texturing services in Saskatoon SK — orange peel knockdown and smooth finishes",
    title: "Texture & Finishing",
    desc: "Decorative wall and ceiling texturing in Saskatoon, SK — orange peel, knockdown, skip trowel, and smooth finish options to enhance any interior space.",
  },
];

/* ── JSON-LD Schemas ───────────────────────────────────── */
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${BASE_URL}/services/#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/services/#page`,
  name: "Drywall & Construction Services in Saskatoon, SK | Dil Chahal Construction Ltd.",
  description:
    "Licensed drywall contractor offering installation, repair, steel framing, T-bar ceilings, GlassRoc sheathing, insulation, mudding, taping and texturing for residential and commercial properties in Saskatoon, SK.",
  url: `${BASE_URL}/services/`,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#business` },
  inLanguage: "en-CA",
  breadcrumb: { "@id": `${BASE_URL}/services/#breadcrumb` },
};

const serviceCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/services/#catalog`,
  name: "Drywall & Construction Services — Saskatoon, SK",
  description: "Complete list of drywall and construction services offered by Dil Chahal Construction Ltd. in Saskatoon, SK.",
  numberOfItems: 8,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Drywall Installation Saskatoon",
        description: "Professional drywall installation and finishing for residential and commercial properties in Saskatoon, SK and surrounding Saskatchewan communities.",
        provider: { "@id": `${BASE_URL}/#business` },
        serviceType: "Drywall Installation",
        areaServed: [
          { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
          { "@type": "City", name: "Warman", addressRegion: "SK", addressCountry: "CA" },
          { "@type": "City", name: "Martensville", addressRegion: "SK", addressCountry: "CA" },
        ],
        url: `${BASE_URL}/services/`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Steel Framing Saskatoon",
        description: "Commercial and residential steel stud framing in Saskatoon, SK — durable, code-compliant structural support for walls, partitions, and interior construction.",
        provider: { "@id": `${BASE_URL}/#business` },
        serviceType: "Steel Framing",
        areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
        url: `${BASE_URL}/services/`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "T-Bar Ceiling Installation Saskatoon",
        description: "Expert T-bar (drop/suspended) ceiling installation for commercial offices, retail, and industrial spaces in Saskatoon, SK.",
        provider: { "@id": `${BASE_URL}/#business` },
        serviceType: "T-Bar Ceiling Installation",
        areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
        url: `${BASE_URL}/services/`,
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "GlassRoc Sheathing Saskatoon",
        description: "GlasRoc sheathing installation in Saskatoon, SK — fire, moisture, and mold resistant exterior wall and roof sheathing for commercial and residential construction.",
        provider: { "@id": `${BASE_URL}/#business` },
        serviceType: "GlassRoc Sheathing",
        areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
        url: `${BASE_URL}/services/`,
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Insulation Services Saskatoon",
        description: "Energy-efficient insulation installation for homes and commercial buildings in Saskatoon, SK — batt, blown-in, and rigid insulation options available.",
        provider: { "@id": `${BASE_URL}/#business` },
        serviceType: "Insulation",
        areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
        url: `${BASE_URL}/services/`,
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Bulkhead Ceiling Saskatoon",
        description: "Custom bulkhead ceiling design and installation in Saskatoon, SK — adds architectural dimension to residential and commercial interiors.",
        provider: { "@id": `${BASE_URL}/#business` },
        serviceType: "Bulkhead Ceiling",
        areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
        url: `${BASE_URL}/services/`,
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Service",
        name: "Mudding and Taping Saskatoon",
        description: "Professional mudding and taping for seamless, paint-ready drywall finishes in Saskatoon, SK — residential and commercial applications.",
        provider: { "@id": `${BASE_URL}/#business` },
        serviceType: "Mudding and Taping",
        areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
        url: `${BASE_URL}/services/`,
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Service",
        name: "Texturing Saskatoon",
        description: "Decorative wall and ceiling texturing in Saskatoon, SK — orange peel, knockdown, skip trowel, and smooth finish techniques.",
        provider: { "@id": `${BASE_URL}/#business` },
        serviceType: "Texturing",
        areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
        url: `${BASE_URL}/services/`,
      },
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What drywall services does Dil Chahal Construction offer in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dil Chahal Construction provides comprehensive drywall services in Saskatoon, SK — including drywall installation, drywall repair, drywall finishing, mudding and taping, and texturing. We also offer GlassRoc sheathing, steel framing, T-bar ceiling systems, insulation, and bulkhead ceilings for both residential and commercial properties.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer steel framing and T-bar ceiling installation in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We specialize in steel stud framing and T-bar suspended ceiling installation for residential and commercial buildings throughout Saskatoon and Saskatchewan. Our licensed team ensures precise, code-compliant installations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide commercial drywall services in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We handle commercial drywall installation, steel framing, T-bar ceiling systems, GlassRoc sheathing, and insulation for offices, retail spaces, warehouses, and industrial buildings in Saskatoon, SK.",
      },
    },
    {
      "@type": "Question",
      name: "What areas of Saskatchewan does Dil Chahal Construction serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our primary service area is Saskatoon, SK. We also serve Warman, Martensville, Regina, Prince Albert, and surrounding Saskatchewan communities. Contact us to discuss your specific project location.",
      },
    },
    {
      "@type": "Question",
      name: "Are you a licensed and insured drywall contractor in Saskatchewan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dil Chahal Construction Ltd. is a fully licensed and insured general contractor in Saskatchewan. We comply with all provincial building codes and WorkSafe Saskatchewan regulations, providing our clients with complete confidence.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a free drywall quote in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Request a free quote by calling +1 (306) 717-1994, emailing contact@dilchahalconstruction.com, or using the quote request form on our website. We respond promptly and offer competitive, transparent pricing for all drywall and construction projects in Saskatoon.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title="Services" currentPage="Services" />

      <main>
        {/* ── Heading ── */}
        <section className="bg-white" style={{ paddingTop: "clamp(40px, 8vw, 100px)", paddingBottom: "clamp(30px, 5vw, 60px)" }}>
          <div className="max-w-[1140px] mx-auto px-4 text-center">
            <AnimateIn variant="fadeInDown">
              <h2
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "24px",
                  fontWeight: 300,
                  color: "rgb(0,0,0)",
                  lineHeight: "31.2px",
                  marginBottom: "12px",
                }}
              >
                Expert Drywall & Construction Solutions in Saskatoon, SK
              </h2>
              <h3
                style={{
                  fontFamily: "var(--font-roboto-sans)",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 700,
                  color: "rgb(0,0,0)",
                  lineHeight: "1.2",
                  marginBottom: "20px",
                }}
              >
                Quality Drywall & Construction Services
              </h3>
              <Link
                href="/projects"
                aria-label="View all drywall and construction projects"
                className="hover:text-[#E00201] transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#E00201", fontWeight: 500 }}
              >
                View Our Projects →
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* ── Service Cards ── */}
        <section
          className="bg-white"
          style={{ paddingBottom: "clamp(30px, 5vw, 60px)" }}
          aria-label="Drywall and construction services offered in Saskatoon, SK"
        >
          <div className="max-w-[1140px] mx-auto px-4">
            <AnimateIn variant="fadeInUp">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "0" }}>
                {services.map((svc) => (
                  <article key={svc.title} className="flex flex-col">
                    <div className="relative w-full" style={{ aspectRatio: "3/2" }}>
                      <Image
                        src={svc.img}
                        alt={svc.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        loading="lazy"
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
                  </article>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Internal link to About + Contact */}
          <div className="max-w-[1140px] mx-auto px-4 mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/about"
              aria-label="Learn about our experienced drywall contractor team"
              className="text-sm font-medium hover:underline"
              style={{ color: "#E00201", fontFamily: "var(--font-body)" }}
            >
              About Our Team →
            </Link>
            <Link
              href="/contact-us"
              aria-label="Get a free drywall quote in Saskatoon"
              className="text-sm font-medium hover:underline"
              style={{ color: "#E00201", fontFamily: "var(--font-body)" }}
            >
              Get a Free Quote →
            </Link>
          </div>
        </section>

        {/* ── Detailed Service Pages ── */}
        <section style={{ backgroundColor: "#f4f4f4", paddingTop: "clamp(40px, 6vw, 70px)", paddingBottom: "clamp(40px, 6vw, 70px)" }}>
          <div className="max-w-[1140px] mx-auto px-4">
            <AnimateIn variant="fadeInDown">
              <h2
                style={{
                  fontFamily: "var(--font-roboto-sans)",
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 700,
                  color: "#111",
                  textAlign: "center",
                  marginBottom: "12px",
                }}
              >
                Explore Individual Service Pages
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#666", textAlign: "center", marginBottom: "36px" }}>
                Each service has its own dedicated page with detailed information, process breakdowns, FAQs, and service-specific content.
              </p>
            </AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "12px" }}>
              {([
                { href: "/drywall-installation-saskatoon", label: "Drywall Installation Saskatoon" },
                { href: "/drywall-repair-saskatoon", label: "Drywall Repair Saskatoon" },
                { href: "/drywall-finishing-saskatoon", label: "Drywall Finishing Saskatoon" },
                { href: "/mudding-taping-saskatoon", label: "Mudding & Taping Saskatoon" },
                { href: "/texturing-saskatoon", label: "Texturing Saskatoon" },
                { href: "/steel-framing-saskatoon", label: "Steel Framing Saskatoon" },
                { href: "/insulation-saskatoon", label: "Insulation Contractor Saskatoon" },
                { href: "/t-bar-ceiling-installation-saskatoon", label: "T-Bar Ceiling Installation Saskatoon" },
                { href: "/bulkhead-ceiling-saskatoon", label: "Bulkhead Ceiling Saskatoon" },
                { href: "/glassroc-sheathing-saskatoon", label: "GlassRoc Sheathing Saskatoon" },
                { href: "/commercial-renovations-saskatoon", label: "Commercial Renovations Saskatoon" },
                { href: "/residential-renovations-saskatoon", label: "Residential Renovations Saskatoon" },
                { href: "/basement-renovations-saskatoon", label: "Basement Renovations Saskatoon" },
              ] as Array<{ href: string; label: string }>).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    background: "#fff",
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#333",
                    textDecoration: "none",
                    borderLeft: "3px solid #E00201",
                  }}
                >
                  <span>{item.label}</span>
                  <span style={{ color: "#E00201", fontSize: "18px" }}>&#8250;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── House Renovations ── */}
        <HouseRenovations />
      </main>

      <Footer />
    </>
  );
}
