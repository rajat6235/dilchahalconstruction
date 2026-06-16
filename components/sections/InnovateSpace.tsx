import Button from "@/components/ui/Button";

export default function InnovateSpace() {
  return (
    <section className="relative z-10" style={{ marginTop: "-100px" }}>
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Responsive padding: 24px on mobile, 50px on desktop */}
        <div
          className="p-6 md:p-[50px]"
          style={{ background: "#8B0001" }}
        >
          {/* Label — fluid from 12px (mobile) to 21.888px (desktop) */}
          <p
            className="uppercase tracking-wider md:tracking-widest mb-3"
            style={{
              fontFamily: "var(--font-subheading)",
              fontSize: "clamp(12px, 1.8vw, 21.888px)",
              fontWeight: 600,
              color: "#BEB9B9",
            }}
          >
            Innovate Your Space
          </p>

          {/* Heading — 42px desktop, fluid to 26px mobile */}
          <h2
            className="font-[700] leading-tight mb-5"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(26px, 3.7vw, 42px)",
              color: "#000000",
            }}
          >
            7+ Years of Unmatched Excellence
          </h2>

          {/* Body — Open Sans, fluid from 13px to 13.68px */}
          <p
            className="leading-relaxed mb-8"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(13px, 1.2vw, 13.68px)",
              color: "rgba(255,255,255,0.85)",
              wordSpacing: "3px",
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
        </div>
      </div>
    </section>
  );
}
