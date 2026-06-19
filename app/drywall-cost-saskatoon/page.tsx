import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Footer from "@/components/layout/Footer";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "drywall-cost-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Drywall Cost Saskatoon, SK | 2025 Pricing Guide",
  description:
    "How much does drywall installation cost in Saskatoon, SK? 2025 price guide covering materials, labour, room-by-room estimates, and factors that affect your drywall quote.",
  keywords: [
    "drywall cost saskatoon",
    "how much does drywall cost saskatoon",
    "drywall installation cost saskatoon",
    "drywall price saskatoon",
    "drywall pricing saskatoon",
    "drywall labour cost saskatoon",
    "drywall repair cost saskatoon",
    "basement drywall cost saskatoon",
    "drywall finishing cost saskatoon",
    "drywall quote saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Drywall Cost in Saskatoon, SK | 2025 Pricing Guide",
    description: "Complete 2025 guide to drywall installation costs in Saskatoon, SK — room estimates, material costs, labour rates, and what affects your final drywall quote.",
    url: CANONICAL,
    images: [{ url: "/images/drywall.jpg", width: 1200, height: 630, alt: "Drywall installation cost guide for Saskatoon, SK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Cost Saskatoon SK | 2025 Pricing Guide",
    description: "How much does drywall cost in Saskatoon? 2025 price guide with room estimates, material costs & labour rates. Get a free quote.",
    images: ["/images/drywall.jpg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Drywall Cost Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Drywall Cost in Saskatoon, SK | 2025 Pricing Guide",
  description: "2025 guide to drywall installation costs in Saskatoon, SK — covering materials, labour, typical room estimates, and factors that affect pricing.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
  about: {
    "@type": "Service",
    name: "Drywall Installation Saskatoon",
    provider: { "@id": `${BASE_URL}/#business` },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does drywall installation cost in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Saskatoon, SK, professional drywall installation (hanging, taping, mudding, and finishing) typically costs $1.75–$3.50 per square foot of drywall surface, depending on the finish level required, ceiling height, project complexity, and accessibility. A typical 12×12 bedroom with 8-foot ceilings has approximately 450–500 sq ft of drywall surface and costs $800–$1,750 to fully install and finish.",
      },
    },
    {
      "@type": "Question",
      name: "How much does drywall cost per sheet in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard 4×8 drywall sheets (1/2-inch, which is the most common residential type) cost approximately $18–$26 per sheet in Saskatoon as of 2025, depending on the supplier and any current material cost fluctuations. Specialty products like moisture-resistant (green board), fire-rated Type X, or soundboard are priced higher.",
      },
    },
    {
      "@type": "Question",
      name: "What does basement drywall finishing cost in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical unfinished basement in Saskatoon (approximately 800–1,200 sq ft of floor area) requires 2,000–4,000 sq ft of drywall surface after framing. The drywall installation and finishing cost for a full basement development ranges from approximately $4,500–$12,000, depending on layout complexity, ceiling type, and finish level. This does not include framing or insulation.",
      },
    },
    {
      "@type": "Question",
      name: "Does drywall repair cost less than full installation in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Small drywall repairs in Saskatoon typically cost $150–$500 depending on the size and number of holes, the finish required, and whether the existing texture needs to be matched. Medium-sized repairs covering several square feet may cost $400–$1,200. Larger repairs — such as water damage over multiple areas — are priced similarly to new installation on a per-square-foot basis.",
      },
    },
    {
      "@type": "Question",
      name: "What factors affect the cost of drywall installation in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main factors that affect drywall cost in Saskatoon are: (1) finish level — Level 3 for textured surfaces vs Level 4–5 for smooth painted walls; (2) ceiling height — vaulted or 9-foot+ ceilings require additional scaffolding and labour time; (3) project size — larger projects have lower per-sq-ft costs due to setup efficiency; (4) accessibility — tight spaces, stairwells, and unusual layouts add time; (5) material type — moisture-resistant, fire-rated, or soundboard products cost more than standard drywall.",
      },
    },
  ],
};

const HEADING = {
  fontFamily: "var(--font-roboto-sans)",
  fontWeight: 700,
  color: "#111",
} as const;

const BODY = {
  fontFamily: "var(--font-body)",
  color: "#555",
  lineHeight: "1.85",
  fontSize: "15px",
} as const;

const pricingRows = [
  { scope: "Small repair (1–3 holes)", range: "$150 – $500", notes: "Patch, mud, texture match, paint-ready" },
  { scope: "Medium repair (several sq ft)", range: "$400 – $1,200", notes: "Section replacement, texture match" },
  { scope: "Single bedroom (12×12, 8 ft ceiling)", range: "$800 – $1,750", notes: "Hang, tape, mud, Level 4 finish" },
  { scope: "Living room or open space (400+ sq ft floor)", range: "$1,400 – $3,200", notes: "Includes ceiling, Level 4 finish" },
  { scope: "Full basement (~1,000 sq ft floor)", range: "$4,500 – $12,000", notes: "Drywall only — framing & insulation separate" },
  { scope: "Full home (new construction, 1,500 sq ft)", range: "$8,000 – $18,000+", notes: "All rooms, Level 3–4, depends on complexity" },
  { scope: "Commercial office fit-out (per 1,000 sq ft)", range: "$3,500 – $8,000+", notes: "Steel stud framing + drywall + commercial finish" },
];

export default function DrywallCostSaskatoonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero title="Drywall Cost Saskatoon" currentPage="Drywall Cost" />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ backgroundColor: "#f9f9f9", borderBottom: "1px solid #e5e7eb" }}>
          <div className="max-w-[1140px] mx-auto px-4 py-3">
            <ol style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0 8px", fontFamily: "var(--font-body)", fontSize: "13px", color: "#777", listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link href="/" style={{ color: "#E00201", textDecoration: "none" }}>Home</Link></li>
              <li style={{ color: "#bbb" }} aria-hidden="true">/</li>
              <li><Link href="/services" style={{ color: "#E00201", textDecoration: "none" }}>Services</Link></li>
              <li style={{ color: "#bbb" }} aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "#444" }}>Drywall Cost Saskatoon</li>
            </ol>
          </div>
        </nav>

        {/* Intro */}
        <section className="bg-white" style={{ paddingTop: "clamp(40px, 7vw, 80px)", paddingBottom: "clamp(30px, 5vw, 60px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 16px" }}>
            <h2 style={{ ...HEADING, fontSize: "clamp(22px, 2.8vw, 34px)", marginBottom: "24px" }}>
              How Much Does Drywall Installation Cost in Saskatoon, SK?
            </h2>
            <p style={BODY}>
              Drywall installation costs in Saskatoon, SK typically range from <strong>$1.75 to $3.50 per square foot</strong> of finished drywall surface — covering hanging, taping, mudding, and a Level 4 finish ready for painting. The wide range reflects real differences in project complexity, ceiling height, finish level, and the type of drywall used.
            </p>
            <p style={{ ...BODY, marginTop: "16px" }}>
              This guide provides realistic 2025 price ranges for common drywall scopes in Saskatoon — so you can plan your budget accurately and know what to expect when you request a quote. <strong>All prices are in Canadian dollars and are based on Saskatoon market rates.</strong>
            </p>
            <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <Link
                href="/contact-us"
                style={{ background: "#E00201", color: "#fff", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", padding: "12px 28px", textDecoration: "none", display: "inline-block" }}
              >
                GET A FREE QUOTE
              </Link>
              <a
                href="tel:+13067171994"
                style={{ border: "1px solid #E00201", color: "#E00201", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", padding: "12px 28px", textDecoration: "none", display: "inline-block" }}
              >
                CALL (306) 717-1994
              </a>
            </div>
          </div>
        </section>

        {/* Pricing table */}
        <section style={{ backgroundColor: "#f4f4f4", paddingTop: "clamp(40px, 6vw, 70px)", paddingBottom: "clamp(40px, 6vw, 70px)" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 16px" }}>
            <h2 style={{ ...HEADING, fontSize: "clamp(20px, 2.5vw, 28px)", marginBottom: "28px", textAlign: "center" }}>
              Typical Drywall Prices in Saskatoon (2025)
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)", fontSize: "14px" }}>
                <thead>
                  <tr style={{ backgroundColor: "#E00201", color: "#fff" }}>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, whiteSpace: "nowrap" }}>Project Scope</th>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, whiteSpace: "nowrap" }}>Typical Range (CAD)</th>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>What's Included</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: "1px solid #e5e7eb" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 600, color: "#333" }}>{row.scope}</td>
                      <td style={{ padding: "12px 16px", fontWeight: 700, color: "#E00201", whiteSpace: "nowrap" }}>{row.range}</td>
                      <td style={{ padding: "12px 16px", color: "#666" }}>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ ...BODY, marginTop: "16px", fontSize: "13px", color: "#888" }}>
              Prices are estimates based on Saskatoon, SK market rates as of 2025. Actual quotes vary based on project-specific conditions. Material costs fluctuate — contact us for a written quote.
            </p>
          </div>
        </section>

        {/* Materials cost section */}
        <section className="bg-white" style={{ paddingTop: "clamp(40px, 6vw, 70px)", paddingBottom: "clamp(40px, 6vw, 70px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 16px" }}>
            <h2 style={{ ...HEADING, fontSize: "clamp(20px, 2.5vw, 28px)", marginBottom: "24px" }}>
              Drywall Material Costs in Saskatoon
            </h2>
            <p style={BODY}>
              Material costs are a significant portion of any drywall project. Here are the typical per-sheet prices for the most common drywall types purchased from Saskatoon suppliers in 2025:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px", marginTop: "24px" }}>
              {[
                { type: "Standard 1/2″ Drywall (4×8)", price: "$18 – $26/sheet", use: "Most residential walls and ceilings" },
                { type: "5/8″ Type X Fire-Rated Drywall (4×8)", price: "$22 – $32/sheet", use: "Garage walls, mechanical room, code-required fire separation" },
                { type: "Moisture-Resistant (Green Board) Drywall", price: "$20 – $30/sheet", use: "Bathrooms, laundry rooms, damp-prone areas" },
                { type: "Soundboard / Acoustic Drywall", price: "$35 – $55/sheet", use: "Home theatres, party walls, office dividers" },
                { type: "5/8″ Standard Drywall (4×12 sheets)", price: "$30 – $45/sheet", use: "Long runs, commercial, vaulted ceilings" },
                { type: "GlassRoc Exterior Sheathing", price: "$40 – $65/sheet", use: "Exterior walls, fire-rated commercial assemblies" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f9f9f9", padding: "18px 20px", borderTop: "3px solid #E00201" }}>
                  <p style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "15px", fontWeight: 700, color: "#111", marginBottom: "4px" }}>{item.type}</p>
                  <p style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "16px", fontWeight: 700, color: "#E00201", marginBottom: "6px" }}>{item.price}</p>
                  <p style={{ ...BODY, fontSize: "13px", color: "#777", margin: 0 }}>{item.use}</p>
                </div>
              ))}
            </div>
            <p style={{ ...BODY, marginTop: "20px", fontSize: "13px", color: "#888" }}>
              Material prices fluctuate based on supply chain and seasonal demand. A written quote from Dil Chahal Construction will reflect current material costs at the time of your project.
            </p>
          </div>
        </section>

        {/* Factors section */}
        <section style={{ backgroundColor: "#f4f4f4", paddingTop: "clamp(40px, 6vw, 70px)", paddingBottom: "clamp(40px, 6vw, 70px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 16px" }}>
            <h2 style={{ ...HEADING, fontSize: "clamp(20px, 2.5vw, 28px)", marginBottom: "28px", textAlign: "center" }}>
              What Affects Drywall Installation Cost in Saskatoon?
            </h2>
            <div className="flex flex-col" style={{ gap: "24px" }}>
              {[
                {
                  num: 1,
                  title: "Finish Level (Level 3 vs Level 4 vs Level 5)",
                  body: "Finish level has the single biggest impact on labour cost. Level 3 (for textured surfaces) requires fewer coats of compound and less sanding. Level 4 (standard for painted walls) adds one more skim coat and final sand. Level 5 (gloss paint or critical lighting environments) requires a full skim coat over the entire surface — significantly more labour time.",
                },
                {
                  num: 2,
                  title: "Ceiling Height and Vaulted or Angled Ceilings",
                  body: "Standard 8-foot ceilings require no special setup. Ceilings above 9 feet, vaulted profiles, or angled soffits require scaffolding or extended roller frames and additional labour time — adding 15–30% to the installation cost compared to standard ceiling heights.",
                },
                {
                  num: 3,
                  title: "Project Size and Efficiency",
                  body: "Larger projects have lower per-square-foot costs because setup time, material delivery, and equipment costs are spread across more work. A 200 sq ft repair costs more per sq ft than a 2,000 sq ft full floor renovation, where the crew can work efficiently without constant repositioning.",
                },
                {
                  num: 4,
                  title: "Layout Complexity and Accessibility",
                  body: "Open-plan spaces with long uninterrupted walls are the most efficient for drywall installation. Tight stairwells, closets, multiple small rooms, unusual angles, and spaces with limited access for carrying sheets all increase labour time and therefore cost.",
                },
                {
                  num: 5,
                  title: "Drywall Type and Thickness",
                  body: "Standard 1/2-inch drywall is the least expensive. Fire-rated 5/8-inch Type X, moisture-resistant board, soundboard, or specialty products like GlassRoc all carry higher material costs — which are passed through to the project total.",
                },
              ].map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: "44px", height: "44px", borderRadius: "50%", background: "#E00201", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "16px" }}>
                    {item.num}
                  </div>
                  <div style={{ paddingTop: "8px" }}>
                    <h3 style={{ ...HEADING, fontSize: "16px", marginBottom: "6px" }}>{item.title}</h3>
                    <p style={{ ...BODY, margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to save + what's included */}
        <section className="bg-white" style={{ paddingTop: "clamp(40px, 6vw, 70px)", paddingBottom: "clamp(40px, 6vw, 70px)" }}>
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="flex flex-col md:flex-row" style={{ gap: "48px" }}>
              <div className="flex-1">
                <h2 style={{ ...HEADING, fontSize: "clamp(18px, 2.2vw, 24px)", marginBottom: "16px" }}>
                  What&apos;s Included in a Drywall Quote from Dil Chahal Construction?
                </h2>
                <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                  {[
                    "Material supply — all drywall sheets, screws, joint tape, and compound",
                    "Hanging — cutting, fitting, and fastening drywall to framing",
                    "Taping — embedding tape in all joints and corner bead installation",
                    "Mudding — multiple coats of compound over all joints and fasteners",
                    "Sanding — final sand to the specified finish level",
                    "Cleanup — debris removal and job site cleanup",
                    "Inspection-ready finish — all work meets Saskatchewan Building Code",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", ...BODY, marginBottom: "10px" }}>
                      <span style={{ color: "#E00201", flexShrink: 0, fontWeight: 700 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h2 style={{ ...HEADING, fontSize: "clamp(18px, 2.2vw, 24px)", marginBottom: "16px" }}>
                  What is NOT Typically Included in a Drywall Quote?
                </h2>
                <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                  {[
                    "Framing (steel or wood stud) — quoted separately if required",
                    "Insulation — quoted separately, though often done before drywall",
                    "Priming and painting — drywall is left paint-ready, not painted",
                    "Electrical or plumbing rough-in — must be completed before drywall",
                    "HVAC or ductwork — mechanical trades work before drywall installation",
                    "Permits — advise on permit requirements; fee is separate if applicable",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", ...BODY, marginBottom: "10px" }}>
                      <span style={{ color: "#888", flexShrink: 0 }}>&#8212;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ backgroundColor: "#f4f4f4", paddingTop: "clamp(40px, 6vw, 70px)", paddingBottom: "clamp(40px, 6vw, 70px)" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto", padding: "0 16px" }}>
            <h2 style={{ ...HEADING, fontSize: "clamp(20px, 2.5vw, 28px)", textAlign: "center", marginBottom: "40px" }}>
              Frequently Asked Questions About Drywall Costs in Saskatoon
            </h2>
            <div>
              {[
                {
                  q: "How much does drywall installation cost in Saskatoon per square foot?",
                  a: "Professional drywall installation (hanging, taping, mudding, and finishing) in Saskatoon costs approximately $1.75–$3.50 per sq ft of drywall surface for a standard Level 4 finish. Level 5 finish or specialty products push this higher.",
                },
                {
                  q: "How much does a drywall sheet cost in Saskatoon?",
                  a: "Standard 1/2-inch 4×8 drywall sheets cost approximately $18–$26 CAD per sheet at Saskatoon building suppliers in 2025. Fire-rated, moisture-resistant, or soundboard products cost more.",
                },
                {
                  q: "How much does basement drywall installation cost in Saskatoon?",
                  a: "A typical full basement development drywall scope (not including framing or insulation) for an 800–1,200 sq ft basement costs $4,500–$12,000. This covers hanging, taping, mudding, and finishing all walls and ceiling drywall.",
                },
                {
                  q: "Why is my drywall quote higher than online estimates I've seen?",
                  a: "Online cost calculators often use national averages that underestimate Saskatchewan labour and material costs, and typically don't account for project-specific factors like ceiling height, finish level, or accessibility. A written quote from an on-site assessment is always more accurate than a calculator.",
                },
                {
                  q: "Do you offer free drywall quotes in Saskatoon?",
                  a: "Yes. Dil Chahal Construction provides free, no-obligation written quotes for all drywall and construction projects in Saskatoon and surrounding SK communities. Call (306) 717-1994 or use our contact form to get started.",
                },
              ].map((faq, i) => (
                <details key={i} style={{ borderTop: "1px solid #e5e7eb" }}>
                  <summary style={{ padding: "18px 16px 18px 0", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 700, color: "#333", lineHeight: "1.5", userSelect: "none" }}>
                    {faq.q}
                  </summary>
                  <div style={{ padding: "2px 0 18px 0", borderBottom: "1px solid #e5e7eb" }}>
                    <p style={{ ...BODY, margin: 0 }}>{faq.a}</p>
                  </div>
                </details>
              ))}
              <div style={{ borderTop: "1px solid #e5e7eb" }} aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="bg-white" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
          <div className="max-w-[1140px] mx-auto px-4 text-center">
            <h2 style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "18px", fontWeight: 600, color: "#333", marginBottom: "20px" }}>
              Drywall Services in Saskatoon & Saskatchewan
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
              {[
                { href: "/drywall-installation-saskatoon", label: "Drywall Installation Saskatoon" },
                { href: "/drywall-repair-saskatoon", label: "Drywall Repair Saskatoon" },
                { href: "/drywall-finishing-saskatoon", label: "Drywall Finishing Saskatoon" },
                { href: "/mudding-taping-saskatoon", label: "Mudding & Taping Saskatoon" },
                { href: "/basement-renovations-saskatoon", label: "Basement Renovations Saskatoon" },
                { href: "/construction-company-saskatchewan", label: "Saskatchewan-Wide Service" },
              ].map((s) => (
                <Link key={s.href} href={s.href} style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#E00201", border: "1px solid #E00201", padding: "7px 16px", textDecoration: "none", display: "inline-block" }}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#111", paddingTop: "clamp(50px, 8vw, 90px)", paddingBottom: "clamp(50px, 8vw, 90px)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 16px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-roboto-sans)", fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
              Get an Accurate Drywall Quote in Saskatoon
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: "1.7", marginBottom: "36px" }}>
              Online calculators only estimate. A written quote from Dil Chahal Construction gives you exact material costs, labour rates, and a fixed timeline for your Saskatoon project — at no cost or obligation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center" style={{ gap: "16px" }}>
              <Link
                href="/contact-us"
                style={{ background: "#E00201", color: "#fff", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", padding: "14px 36px", textDecoration: "none", display: "inline-block" }}
              >
                GET A FREE QUOTE
              </Link>
              <a
                href="tel:+13067171994"
                style={{ border: "1px solid rgba(255,255,255,0.35)", color: "#fff", fontFamily: "var(--font-roboto-sans)", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", padding: "14px 36px", textDecoration: "none", display: "inline-block" }}
              >
                CALL (306) 717-1994
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
