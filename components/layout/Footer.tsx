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
              alt="Dil Chahal Constructions Ltd. — Drywall &amp; General Contractor in Saskatoon, SK"
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
                aria-label="Call Dil Chahal Constructions at +1 306 717 1994"
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
                aria-label="Email Dil Chahal Constructions"
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
            Copyright © 2024 Dil Chahal Constructions
          </p>
        </div>
      </div>
    </footer>
  );
}
