import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import HouseRenovations from "@/components/sections/HouseRenovations";
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

const services = [
  {
    img: "/images/drywall.jpg",
    alt: "Professional drywall installation for residential and commercial properties in Saskatoon, Saskatchewan",
    title: "Drywall Installation",
    desc: "Precision drywall installation for residential and commercial spaces — strong, even surfaces built to Saskatchewan code.",
    href: "/drywall-installation-saskatoon",
  },
  {
    img: "/images/glasroc.jpeg",
    alt: "GlassRoc sheathing installation for superior fire and moisture resistance in Saskatoon, SK",
    title: "GlassRoc Sheathing",
    desc: "Superior fire, moisture, and mold-resistant exterior wall sheathing for durable commercial and residential builds.",
    href: "/glassroc-sheathing-saskatoon",
  },
  {
    img: "/images/steel-frame.jpeg",
    alt: "Steel stud framing for residential and commercial construction in Saskatoon",
    title: "Steel Framing",
    desc: "Durable steel stud framing for walls and partitions — code-compliant structural support for any project scale.",
    href: "/steel-framing-saskatoon",
  },
  {
    img: "/images/t-bar.jpeg",
    alt: "T-bar suspended ceiling installation for commercial and office spaces in Saskatoon",
    title: "T-Bar Ceiling",
    desc: "Professional T-bar suspended ceiling systems for commercial and office spaces — clean, modern, and acoustically effective.",
    href: "/t-bar-ceiling-installation-saskatoon",
  },
  {
    img: "/images/insulation.jpeg",
    alt: "Energy-efficient insulation installation for homes and buildings in Saskatoon",
    title: "Insulation",
    desc: "Energy-efficient insulation services for homes and commercial properties — lower bills, improved comfort, code-compliant.",
    href: "/insulation-saskatoon",
  },
  {
    img: "/images/bulkhead.jpeg",
    alt: "Custom bulkhead ceiling construction for residential and commercial spaces in Saskatoon",
    title: "Bulkhead Ceiling",
    desc: "Custom bulkhead construction adding architectural dimension to residential kitchens, hallways, and commercial spaces.",
    href: "/bulkhead-ceiling-saskatoon",
  },
  {
    img: "/images/mudding.jpeg",
    alt: "Expert mudding and taping for smooth drywall finishing in Saskatoon",
    title: "Mudding & Taping",
    desc: "Expert mudding and taping for seamless, paint-ready drywall finishes — residential and commercial in Saskatoon, SK.",
    href: "/mudding-taping-saskatoon",
  },
  {
    img: "/images/texture.jpeg",
    alt: "Decorative wall and ceiling texturing services in Saskatoon — orange peel, knockdown, smooth finishes",
    title: "Texture & Finishing",
    desc: "Orange peel, knockdown, skip trowel, and smooth finish options to elevate any interior space.",
    href: "/texturing-saskatoon",
  },
];

const serviceLinks = [
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
];

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
    { "@type": "ListItem", position: 1, item: { "@type": "Service", name: "Drywall Installation Saskatoon", provider: { "@id": `${BASE_URL}/#business` }, serviceType: "Drywall Installation", areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" }, url: `${BASE_URL}/services/` } },
    { "@type": "ListItem", position: 2, item: { "@type": "Service", name: "Steel Framing Saskatoon", provider: { "@id": `${BASE_URL}/#business` }, serviceType: "Steel Framing", areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" }, url: `${BASE_URL}/services/` } },
    { "@type": "ListItem", position: 3, item: { "@type": "Service", name: "T-Bar Ceiling Installation Saskatoon", provider: { "@id": `${BASE_URL}/#business` }, serviceType: "T-Bar Ceiling Installation", areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" }, url: `${BASE_URL}/services/` } },
    { "@type": "ListItem", position: 4, item: { "@type": "Service", name: "GlassRoc Sheathing Saskatoon", provider: { "@id": `${BASE_URL}/#business` }, serviceType: "GlassRoc Sheathing", areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" }, url: `${BASE_URL}/services/` } },
    { "@type": "ListItem", position: 5, item: { "@type": "Service", name: "Insulation Services Saskatoon", provider: { "@id": `${BASE_URL}/#business` }, serviceType: "Insulation", areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" }, url: `${BASE_URL}/services/` } },
    { "@type": "ListItem", position: 6, item: { "@type": "Service", name: "Bulkhead Ceiling Saskatoon", provider: { "@id": `${BASE_URL}/#business` }, serviceType: "Bulkhead Ceiling", areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" }, url: `${BASE_URL}/services/` } },
    { "@type": "ListItem", position: 7, item: { "@type": "Service", name: "Mudding and Taping Saskatoon", provider: { "@id": `${BASE_URL}/#business` }, serviceType: "Mudding and Taping", areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" }, url: `${BASE_URL}/services/` } },
    { "@type": "ListItem", position: 8, item: { "@type": "Service", name: "Texturing Saskatoon", provider: { "@id": `${BASE_URL}/#business` }, serviceType: "Texturing", areaServed: { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" }, url: `${BASE_URL}/services/` } },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What drywall services does Dil Chahal Construction offer in Saskatoon?", acceptedAnswer: { "@type": "Answer", text: "Dil Chahal Construction provides comprehensive drywall services in Saskatoon, SK — including drywall installation, drywall repair, drywall finishing, mudding and taping, and texturing. We also offer GlassRoc sheathing, steel framing, T-bar ceiling systems, insulation, and bulkhead ceilings for both residential and commercial properties." } },
    { "@type": "Question", name: "Do you offer steel framing and T-bar ceiling installation in Saskatoon?", acceptedAnswer: { "@type": "Answer", text: "Yes. We specialize in steel stud framing and T-bar suspended ceiling installation for residential and commercial buildings throughout Saskatoon and Saskatchewan. Our licensed team ensures precise, code-compliant installations." } },
    { "@type": "Question", name: "Do you provide commercial drywall services in Saskatoon?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We handle commercial drywall installation, steel framing, T-bar ceiling systems, GlassRoc sheathing, and insulation for offices, retail spaces, warehouses, and industrial buildings in Saskatoon, SK." } },
    { "@type": "Question", name: "Are you a licensed and insured drywall contractor in Saskatchewan?", acceptedAnswer: { "@type": "Answer", text: "Yes. Dil Chahal Construction Ltd. is a fully licensed and insured general contractor in Saskatchewan. We comply with all provincial building codes and WorkSafe Saskatchewan regulations." } },
    { "@type": "Question", name: "How do I get a free drywall quote in Saskatoon?", acceptedAnswer: { "@type": "Answer", text: "Request a free quote by calling +1 (306) 717-1994, emailing contact@dilchahalconstruction.com, or using the quote request form on our website. We respond promptly with competitive, transparent pricing." } },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="Services"
        currentPage="Services"
        subtitle="From drywall to full renovations — every service delivered to Saskatchewan Building Code standards."
      />

      <main>

        {/* ── Section intro ── */}
        <section
          style={{
            backgroundColor: "#fff",
            paddingTop: "clamp(56px, 8vw, 96px)",
            paddingBottom: "clamp(48px, 6vw, 72px)",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
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
                  Comprehensive Solutions
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "clamp(28px, 3.8vw, 48px)",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    letterSpacing: "-0.3px",
                    lineHeight: "1.15",
                    maxWidth: "520px",
                  }}
                >
                  Quality Drywall &amp; Construction Services
                </h2>
              </div>
              <div className="lg:text-right lg:max-w-[320px]">
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: "1.75",
                    marginBottom: "16px",
                  }}
                >
                  Expert residential &amp; commercial work across Saskatchewan — licensed, insured, and inspection-ready.
                </p>
                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <Link
                    href="/projects"
                    className="text-[#E00201] font-[600] text-[13px] hover:underline"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    View Our Projects →
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

            {/* ── Service cards ── */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-12"
              aria-label="Drywall and construction services in Saskatoon, SK"
            >
              {services.map((svc, i) => (
                <ServiceCard
                  key={svc.title}
                  src={svc.img}
                  alt={svc.alt}
                  title={svc.title}
                  description={svc.desc}
                  href={svc.href}
                  priority={i < 4}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA strip ── */}
        <section
          style={{
            background: "linear-gradient(135deg, #8B0001 0%, #c50000 50%, #8B0001 100%)",
            paddingTop: "clamp(40px, 6vw, 64px)",
            paddingBottom: "clamp(40px, 6vw, 64px)",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p
                className="mb-2"
                style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "10.5px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                No Obligation
              </p>
              <h2
                className="text-white"
                style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "clamp(22px, 2.8vw, 34px)",
                  fontWeight: 700,
                  letterSpacing: "-0.2px",
                  lineHeight: "1.2",
                }}
              >
                Ready to Start Your Project?
              </h2>
            </div>
            <Link
              href="/contact-us"
              className="flex-shrink-0 inline-flex items-center gap-2.5 bg-white text-[#E00201] font-[700] px-7 py-[14px] rounded-[2px] hover:bg-[#f0f0f0] transition-all duration-300 active:scale-[0.97]"
              style={{ fontFamily: "var(--font-subheading)", fontSize: "13px", letterSpacing: "0.4px" }}
            >
              Get a Free Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ── Service landing pages directory ── */}
        <section
          style={{
            backgroundColor: "#F9FAFB",
            paddingTop: "clamp(56px, 8vw, 96px)",
            paddingBottom: "clamp(56px, 8vw, 96px)",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
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
                Detailed Pages
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 700,
                  color: "#0a0a0a",
                  letterSpacing: "-0.2px",
                  lineHeight: "1.2",
                  marginBottom: "12px",
                }}
              >
                Explore Individual Services
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#6B7280", maxWidth: "480px", margin: "0 auto" }}>
                Each service has its own page with process breakdowns, FAQs, and local detail.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between bg-white border border-[#E5E7EB] hover:border-[#E00201] hover:shadow-sm transition-all duration-250 rounded-[2px] px-5 py-4"
                >
                  <span
                    className="text-[#111827] group-hover:text-[#E00201] transition-colors duration-200 font-[600]"
                    style={{ fontFamily: "var(--font-body)", fontSize: "14px" }}
                  >
                    {item.label}
                  </span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className="text-[#D1D5DB] group-hover:text-[#E00201] transition-colors duration-200 flex-shrink-0 ml-3"
                    aria-hidden="true"
                  >
                    <path d="M3 7.5h9M9 4l3.5 3.5L9 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── House Renovations carousel ── */}
        <HouseRenovations />

      </main>

      <Footer />
    </>
  );
}
