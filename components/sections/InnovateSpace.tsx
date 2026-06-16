import Button from "@/components/ui/Button";

export default function InnovateSpace() {
  return (
    <section className="relative z-10" style={{ marginTop: "-100px" }}>
      <div className="max-w-[1140px] mx-auto px-4">
        <div
          className="flex flex-col md:flex-row"
          style={{ background: "#8B0001" }}
        >
          {/* Left: dark red card content */}
          <div className="flex-1 p-10 md:p-14">
            <p
              className="text-[#E00201] text-[13px] font-[600] uppercase tracking-widest mb-3"
              style={{ fontFamily: "var(--font-subheading)" }}
            >
              Innovate Your Space
            </p>
            <h2
              className="text-white font-[700] leading-tight mb-5"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 3vw, 42px)",
              }}
            >
              7+ Years of Unmatched Excellence
            </h2>
            <p
              className="text-white/85 text-[15px] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", wordSpacing: "3px" }}
            >
              For more than 7 years, Dil Chahal Construction Ltd. has been
              committed to providing outstanding drywall services. Our extensive
              experience and proven success in Saskatoon and the surrounding areas
              guarantee that every project we handle is completed with the highest
              level of quality and reliability.
            </p>
            <Button variant="dark" href="#contact">
              Work With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
