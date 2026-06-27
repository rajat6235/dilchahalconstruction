import AnimateIn from "@/components/ui/AnimateIn";

export default function AboutFounder() {
  return (
    <section id="about" className="bg-white" style={{ padding: "clamp(20px, 4vw, 48px) 0 clamp(16px, 3vw, 32px)" }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <AnimateIn variant="fadeInDown">
          <div className="flex flex-col items-center text-center" style={{ maxWidth: "680px", margin: "0 auto" }}>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "11px",
                fontWeight: 700,
                color: "#E00201",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              About the Founder
            </p>
            <h2
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(26px, 3.2vw, 42px)",
                fontWeight: 700,
                color: "#0a0a0a",
                letterSpacing: "-0.3px",
                lineHeight: "1.2",
              }}
            >
              Leading Construction Across Saskatchewan
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#E00201]" aria-hidden="true" />
              <span className="h-[1px] w-2 bg-[#E5E7EB]" aria-hidden="true" />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
