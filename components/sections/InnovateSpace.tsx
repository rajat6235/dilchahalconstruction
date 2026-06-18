"use client";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";

export default function InnovateSpace() {
  return (
    <section className="relative z-10" style={{ marginTop: "-100px" }}>
      <div className="max-w-[1140px] mx-auto px-4">
        {/* WP b81be35: fadeInUp — whole red card */}
        <AnimateIn
          variant="fadeInUp"
          className="p-[50px]"
          style={{ background: "#8B0001" }}
        >
          {/* H4 label — WP: Montserrat 24px weight 300 #BEB9B9 lineHeight 28.8px */}
          <h4
            className="mb-3"
            style={{
              fontFamily: "var(--font-subheading)",
              fontSize: "24px",
              fontWeight: 300,
              color: "#BEB9B9",
              lineHeight: "28.8px",
              letterSpacing: "normal",
            }}
          >
            Innovate Your Space
          </h4>

          {/* H2 — WP: Merriweather 48px weight 700 white letterSpacing 0.5px lineHeight 62.4px */}
          <h2
            className="leading-tight mb-5"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "rgb(255,255,255)",
              letterSpacing: "0.5px",
              lineHeight: "62.4px",
            }}
          >
            7+ Years of Unmatched Excellence
          </h2>

          {/* Para — WP: Open Sans 16px weight 500 white lineHeight 24.75px */}
          <p
            className="mb-8"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              fontWeight: 500,
              color: "rgb(255,255,255)",
              lineHeight: "24.75px",
            }}
          >
            For more than 7 years, Dil Chahal Construction Ltd. has been
            committed to providing outstanding drywall services. Our extensive
            experience and proven success in Saskatoon and the surrounding areas
            guarantee that every project we handle is completed with the highest
            level of quality and reliability.
          </p>

          <Button
            variant="dark"
            href="#contact"
            className="!bg-[#737373] !border-[#737373] hover:!bg-[#5a5a5a] hover:!border-[#5a5a5a]"
          >
            Work With Us
          </Button>
        </AnimateIn>
      </div>
    </section>
  );
}
