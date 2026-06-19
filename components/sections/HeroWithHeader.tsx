"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
];

/* Social icons — exact SVG paths from WordPress/Astra, all bright red */
function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 448 512" aria-hidden="true">
      <path
        fill="#E00201"
        d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 24 28" aria-hidden="true">
      <path
        fill="#E00201"
        d="M12 12.281h11.328c.109.609.187 1.203.187 2C23.515 21.125 18.921 26 11.999 26c-6.641 0-12-5.359-12-12s5.359-12 12-12c3.234 0 5.953 1.188 8.047 3.141L16.78 8.282c-.891-.859-2.453-1.859-4.781-1.859-4.094 0-7.438 3.391-7.438 7.578s3.344 7.578 7.438 7.578c4.75 0 6.531-3.406 6.813-5.172h-6.813v-4.125z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 448 512" aria-hidden="true">
      <path
        fill="#E00201"
        d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
      />
    </svg>
  );
}

export default function HeroWithHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full overflow-x-hidden">
      {/* Background image — next/image with priority for LCP */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-bg.jpeg"
          alt=""
          fill
          preload
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlay — darker to match WordPress reference */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.91) 42%, rgba(0,0,0,0.82) 65%, rgba(0,0,0,0.68) 100%)",
        }}
      />

      {/* ─── HEADER ─── */}
      <header className="relative z-20 w-full">

        {/* Primary header: logo left | phone center | socials right — WP: 198px min-height */}
        <div
          className="w-full flex items-center justify-between py-3 px-4 md:py-4 md:px-[40px]"
          style={{ minHeight: "clamp(100px, 20vw, 198px)" }}
        >
          {/* Logo — exact WP size: 230×168px */}
          <Link href="/" className="flex-shrink-0" style={{ maxWidth: "calc(100% - 56px)" }}>
            <Image
              src="/images/logo-header.png"
              alt="Dil Chahal Constructions Ltd. — Drywall Contractor and General Contractor in Saskatoon, SK"
              width={230}
              height={168}
              className="h-[70px] md:h-[168px] w-auto object-contain"
              loading="eager"
            />
          </Link>

          {/* Phone — center */}
          <p
            className="hidden md:block"
            style={{
              color: "#E00201",
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              fontWeight: 400,
            }}
          >
            Make a call:{" "}
            <a
              href="tel:+13067171994"
              style={{ color: "inherit", textDecoration: "none" }}
              aria-label="Call Dil Chahal Constructions at +1 306 717 1994"
            >
              +1 (306) 717-1994
            </a>
          </p>

          {/* Social icons — bright red, small */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity duration-200">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Google" className="hover:opacity-80 transition-opacity duration-200">
              <GoogleIcon />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity duration-200">
              <InstagramIcon />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Below header: nav left | GET A QUOTE right — WP: 60px height */}
        <nav
          aria-label="Primary navigation"
          className="w-full flex items-stretch"
          style={{
            minHeight: "60px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          {/* Nav links — WP: Open Sans 15px weight 500, padding 0px 15px */}
          <div
            className="hidden md:flex items-center flex-1"
            style={{ paddingLeft: "40px" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white hover:text-[#E00201] transition-colors duration-200 whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  fontWeight: 500,
                  padding: "0px 15px",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile phone */}
          <div className="md:hidden flex items-center px-4 flex-1">
            <a
              href="tel:+13067171994"
              style={{ color: "#E00201", fontFamily: "var(--font-body)", fontSize: "13px", textDecoration: "none" }}
              aria-label="Call Dil Chahal Constructions at +1 306 717 1994"
            >
              +1 (306) 717-1994
            </a>
          </div>

          {/* GET A QUOTE — flush right, reduced size */}
          <Link
            href="/contact-us"
            className="flex items-center text-white flex-shrink-0 hover:bg-[#E00201] transition-colors duration-300"
            style={{
              background: "#8B0001",
              fontFamily: "var(--font-subheading)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              padding: "0 30px",
            }}
          >
            GET A QUOTE
          </Link>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            id="mobile-nav"
            className="md:hidden w-full"
            style={{ background: "rgba(0,0,0,0.92)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-5 py-3 text-white text-[14px] hover:text-[#E00201] border-b transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)", borderColor: "rgba(255,255,255,0.05)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="block px-5 py-3 text-white text-[14px] font-bold text-center"
              style={{ background: "#8B0001" }}
              onClick={() => setMenuOpen(false)}
            >
              GET A QUOTE
            </Link>
          </div>
        )}
      </header>

      {/* ─── HERO CONTENT ─── */}
      <div
        className="relative z-10 max-w-[1140px] mx-auto px-4"
        style={{ paddingTop: "40px", paddingBottom: "160px" }}
      >
        {/* Decorative subtitle — not a heading; h3 before h1 breaks hierarchy */}
        <p
          className="mb-3"
          style={{
            fontFamily: "var(--font-subheading)",
            fontSize: "clamp(20px, 4.5vw, 36px)",
            fontWeight: 500,
            color: "#BEB9B9",
            lineHeight: "46.8px",
            letterSpacing: "0.5px",
          }}
        >
          Welcome to
        </p>

        {/* h1 — WP: Roboto 48px weight 600 #E00201 uppercase lineHeight 67.2px */}
        <h1
          className="uppercase mb-6"
          style={{
            fontFamily: "var(--font-roboto-sans)",
            fontWeight: 600,
            color: "#E00201",
            fontSize: "clamp(22px, 4.2vw, 48px)",
            lineHeight: "67.2px",
          }}
        >
          Dil Chahal Constructions Ltd.
          {/* Screen-reader supplement targets primary keyword without changing visible display */}
          <span className="sr-only"> — Drywall Contractor &amp; General Contractor in Saskatoon, SK</span>
        </h1>

        {/* Body text — WP: Open Sans 16px weight 400 white, capped width */}
        <p
          className="mb-8"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.88)",
            lineHeight: "1.65",
            maxWidth: "650px",
          }}
        >
          Dil Chahal Construction Ltd. proudly serves Saskatoon and surrounding
          areas with expert drywall services, including installation, steel
          framing, T-bar ceilings, house renovations, insulation, mudding,
          tapping, and texturing. We handle residential and commercial projects
          with expertise and attention to detail. Fully insured and experienced,
          we are committed to quality workmanship and reliable service.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            variant="primary"
            href="/services"
            className="!bg-[#737373] !border-[#737373] hover:!bg-[#5a5a5a] hover:!border-[#5a5a5a]"
          >
            Our Services
          </Button>
          <Button variant="outline" href="/contact-us">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
