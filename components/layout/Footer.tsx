import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Drywall Installation", href: "/drywall-installation-saskatoon" },
  { label: "Drywall Repair", href: "/drywall-repair-saskatoon" },
  { label: "Steel Framing", href: "/steel-framing-saskatoon" },
  { label: "T-Bar Ceiling Installation", href: "/t-bar-ceiling-installation-saskatoon" },
  { label: "Insulation", href: "/insulation-saskatoon" },
  { label: "GlassRoc Sheathing", href: "/glassroc-sheathing-saskatoon" },
  { label: "Mudding & Taping", href: "/mudding-taping-saskatoon" },
  { label: "Basement Renovations", href: "/basement-renovations-saskatoon" },
];

const serviceAreas = [
  { label: "Saskatchewan", href: "/construction-company-saskatchewan" },
  { label: "Regina, SK", href: "/drywall-contractor-regina" },
  { label: "Prince Albert, SK", href: "/drywall-contractor-prince-albert" },
  { label: "Warman, SK", href: "/services" },
  { label: "Martensville, SK", href: "/services" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      <div
        className="max-w-[1208px] mx-auto"
        style={{ padding: "10px 10px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: "0px" }}>

          {/* Col 0 — Logo + tagline */}
          <div
            className="flex flex-col items-center justify-start text-center"
            style={{ padding: "10px" }}
          >
            <Image
              src="/images/logo-header.png"
              alt="Dil Chahal Construction Ltd. — Drywall &amp; General Contractor in Saskatoon, SK"
              width={230}
              height={168}
              style={{ height: "162px", width: "auto", marginBottom: "16px" }}
              className="object-contain"
            />
            <p
              style={{
                fontFamily: "var(--font-roboto-sans)",
                fontSize: "15px",
                fontWeight: 400,
                color: "rgb(255,255,255)",
                lineHeight: "1.5",
              }}
            >
              Quality You Can Trust, Excellence You Can See
            </p>
          </div>

          {/* Col 1 — Our Services */}
          <div
            className="flex flex-col items-center text-center"
            style={{ padding: "10px" }}
          >
            <h3
              className="mb-4"
              style={{
                fontFamily: "var(--font-roboto-sans)",
                fontSize: "32px",
                fontWeight: 600,
                color: "rgb(255,255,255)",
                lineHeight: "41.6px",
              }}
            >
              Our Services
            </h3>
            <ul className="flex flex-col" style={{ gap: "20px" }}>
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    style={{
                      fontFamily: "var(--font-roboto-sans)",
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "rgb(255,255,255)",
                      lineHeight: "15px",
                      display: "block",
                    }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 — Navigation links + Service Areas */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-col items-center text-center"
            style={{ padding: "10px" }}
          >
            <h3
              className="mb-2"
              style={{
                fontFamily: "var(--font-roboto-sans)",
                fontSize: "32px",
                fontWeight: 600,
                color: "rgb(255,255,255)",
                lineHeight: "41.6px",
              }}
            >
              <Link
                href="/projects"
                style={{ color: "rgb(255,255,255)", display: "block" }}
              >
                Projects
              </Link>
            </h3>
            <h3
              style={{
                fontFamily: "var(--font-roboto-sans)",
                fontSize: "32px",
                fontWeight: 600,
                color: "rgb(255,255,255)",
                lineHeight: "41.6px",
              }}
            >
              <Link
                href="/about"
                style={{ color: "rgb(255,255,255)", display: "block" }}
              >
                About us
              </Link>
            </h3>

            {/* Service Areas */}
            <div style={{ marginTop: "20px" }}>
              <p
                style={{
                  fontFamily: "var(--font-roboto-sans)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Service Areas
              </p>
              <ul className="flex flex-col" style={{ gap: "8px" }}>
                {serviceAreas.map((a) => (
                  <li key={a.label}>
                    <Link
                      href={a.href}
                      style={{
                        fontFamily: "var(--font-roboto-sans)",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "rgb(255,255,255)",
                        lineHeight: "1.4",
                        display: "block",
                        textDecoration: "none",
                      }}
                    >
                      {a.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Col 3 — Contact Us */}
          <div
            className="flex flex-col items-center text-center"
            style={{ padding: "10px" }}
          >
            <h3
              className="mb-4"
              style={{
                fontFamily: "var(--font-roboto-sans)",
                fontSize: "32px",
                fontWeight: 600,
                color: "rgb(255,255,255)",
                lineHeight: "41.6px",
              }}
            >
              Contact Us
            </h3>
            <address
              aria-label="Company address and contact information"
              style={{ fontStyle: "normal" }}
              className="flex flex-col gap-3"
            >
              <a
                href="tel:+13067171994"
                aria-label="Call Dil Chahal Construction at +1 306 717 1994"
                style={{
                  fontFamily: "var(--font-roboto-sans)",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "rgb(255,255,255)",
                  lineHeight: "15px",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                Make a call: +1 (306) 717-1994
              </a>
              <a
                href="mailto:contact@dilchahalconstruction.com"
                aria-label="Email Dil Chahal Construction"
                style={{
                  fontFamily: "var(--font-roboto-sans)",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "rgb(255,255,255)",
                  lineHeight: "15px",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                contact@dilchahalconstruction.com
              </a>
              <span
                style={{
                  fontFamily: "var(--font-roboto-sans)",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "rgb(255,255,255)",
                  lineHeight: "15px",
                  display: "block",
                }}
              >
                Unit 107, 1222 Alberta Ave, Saskatoon, SK S7K 1R4
              </span>
            </address>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1208px] mx-auto px-[10px] py-[8px]">
          <p
            style={{
              fontFamily: "var(--font-roboto-sans)",
              fontSize: "15px",
              fontWeight: 400,
              color: "rgb(190,185,185)",
            }}
          >
            Copyright © 2024 Dil Chahal Construction
          </p>
        </div>
      </div>

      {/* Developer credit bar */}
      <div className="bg-[#0d0d0d] border-t border-white/5 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="text-[#b8b8b8] text-xs tracking-wide">Designed &amp; Developed by</span>
          <span className="text-[#f5f5f5] text-xs font-medium tracking-wide">Rajat</span>
          <span className="text-[#a3a3a3] text-xs">·</span>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/rajat6235" target="_blank" rel="noopener noreferrer" aria-label="Rajat on LinkedIn" className="group flex items-center gap-1.5 text-[#b8b8b8] hover:text-[#66b5ff] transition-colors duration-300">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              <span className="text-xs group-hover:text-[#66b5ff] transition-colors duration-300">LinkedIn</span>
            </a>
            <span className="text-[#a3a3a3] text-xs">·</span>
            <a href="https://github.com/rajat6235" target="_blank" rel="noopener noreferrer" aria-label="Rajat on GitHub" className="group flex items-center gap-1.5 text-[#b8b8b8] hover:text-white transition-colors duration-300">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              <span className="text-xs group-hover:text-white transition-colors duration-300">GitHub</span>
            </a>
            <span className="text-[#a3a3a3] text-xs">·</span>
            <a href="https://wa.me/917837733549" target="_blank" rel="noopener noreferrer" aria-label="Rajat on WhatsApp" className="group flex items-center gap-1.5 text-[#b8b8b8] hover:text-[#25D366] transition-colors duration-300">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              <span className="text-xs group-hover:text-[#25D366] transition-colors duration-300">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
