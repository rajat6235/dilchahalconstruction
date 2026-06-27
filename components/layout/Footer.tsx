import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Drywall Installation", href: "/drywall-installation-saskatoon" },
  { label: "Drywall Repair", href: "/drywall-repair-saskatoon" },
  { label: "Steel Framing", href: "/steel-framing-saskatoon" },
  { label: "T-Bar Ceiling", href: "/t-bar-ceiling-installation-saskatoon" },
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

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact-us" },
];

function FooterLinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="flex flex-col gap-2.5" role="list">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="text-white/55 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
            style={{ fontFamily: "var(--font-body)", fontSize: "13.5px" }}
          >
            <span
              className="text-[#E00201] opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px]"
              aria-hidden="true"
            >
              ▸
            </span>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-white font-[700] mb-5"
      style={{
        fontFamily: "var(--font-subheading)",
        fontSize: "13px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        paddingBottom: "12px",
      }}
    >
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a", color: "#fff" }}>

      {/* Main footer grid */}
      <div
        className="max-w-[1200px] mx-auto px-4 md:px-8"
        style={{ paddingTop: "clamp(56px, 8vw, 80px)", paddingBottom: "clamp(40px, 6vw, 60px)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 0 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Dil Chahal Construction — Home">
              <Image
                src="/images/logo-header.png"
                alt="Dil Chahal Construction Ltd."
                width={180}
                height={66}
                style={{ height: "72px", width: "auto", marginBottom: "20px" }}
                className="object-contain"
              />
            </Link>
            <p
              className="text-white/50 leading-[1.75] mb-6"
              style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", maxWidth: "260px" }}
            >
              Quality You Can Trust, Excellence You Can See. Serving Saskatoon and Saskatchewan since 2016.
            </p>
            {/* Contact micro */}
            <address style={{ fontStyle: "normal" }} className="flex flex-col gap-2">
              <a
                href="tel:+13067171994"
                className="text-white/55 hover:text-white transition-colors duration-200 text-[13.5px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                +1 (306) 717-1994
              </a>
              <a
                href="mailto:contact@dilchahalconstruction.com"
                className="text-white/55 hover:text-white transition-colors duration-200 text-[13px] break-all"
                style={{ fontFamily: "var(--font-body)" }}
              >
                contact@dilchahalconstruction.com
              </a>
            </address>
          </div>

          {/* Col 1 — Services */}
          <div>
            <FooterHeading>Our Services</FooterHeading>
            <FooterLinkList items={services} />
          </div>

          {/* Col 2 — Navigation + Service Areas */}
          <div>
            <FooterHeading>Navigation</FooterHeading>
            <FooterLinkList items={quickLinks} />
            <div className="mt-8">
              <FooterHeading>Service Areas</FooterHeading>
              <FooterLinkList items={serviceAreas} />
            </div>
          </div>

          {/* Col 3 — Contact details */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-white/35 text-[10px] font-[600] uppercase tracking-[2px] mb-1" style={{ fontFamily: "var(--font-subheading)" }}>
                  Phone
                </p>
                <a
                  href="tel:+13067171994"
                  className="text-white/60 hover:text-white transition-colors duration-200 text-[14px]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  +1 (306) 717-1994
                </a>
              </div>
              <div>
                <p className="text-white/35 text-[10px] font-[600] uppercase tracking-[2px] mb-1" style={{ fontFamily: "var(--font-subheading)" }}>
                  Email
                </p>
                <a
                  href="mailto:contact@dilchahalconstruction.com"
                  className="text-white/60 hover:text-white transition-colors duration-200 text-[13px] break-all"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  contact@dilchahalconstruction.com
                </a>
              </div>
              <div>
                <p className="text-white/35 text-[10px] font-[600] uppercase tracking-[2px] mb-1" style={{ fontFamily: "var(--font-subheading)" }}>
                  Address
                </p>
                <address
                  style={{ fontStyle: "normal", fontFamily: "var(--font-body)", fontSize: "13.5px", color: "rgba(255,255,255,0.55)", lineHeight: "1.65" }}
                >
                  Unit 107, 1222 Alberta Ave<br />
                  Saskatoon, SK S7K 1R4
                </address>
              </div>
              <div>
                <p className="text-white/35 text-[10px] font-[600] uppercase tracking-[2px] mb-1" style={{ fontFamily: "var(--font-subheading)" }}>
                  Hours
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", color: "rgba(255,255,255,0.55)", lineHeight: "1.65" }}>
                  Mon–Fri: 8am–6pm<br />
                  Sat: 9am–4pm
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/8" />

      {/* Copyright bar */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12.5px",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            &copy; {new Date().getFullYear()} Dil Chahal Construction Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(255,255,255,0.30)" }}>
              Designed &amp; Developed by
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(255,255,255,0.50)", fontWeight: 600 }}>Rajat</span>
            <span style={{ color: "rgba(255,255,255,0.20)", fontSize: "12px" }}>·</span>
            <a
              href="https://www.linkedin.com/in/rajat6235"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rajat on LinkedIn"
              className="text-white/30 hover:text-[#66b5ff] transition-colors duration-200 text-[12px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              LinkedIn
            </a>
            <span style={{ color: "rgba(255,255,255,0.20)", fontSize: "12px" }}>·</span>
            <a
              href="https://github.com/rajat6235"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rajat on GitHub"
              className="text-white/30 hover:text-white transition-colors duration-200 text-[12px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
