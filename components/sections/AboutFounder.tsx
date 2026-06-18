import AnimateIn from "@/components/ui/AnimateIn";

export default function AboutFounder() {
  return (
    <section id="about" className="bg-white" style={{ padding: "10px 0 60px" }}>
      <div className="max-w-[1140px] mx-auto px-4">
        {/* WP: fe66c88 — fadeInDown on scroll */}
        <AnimateIn variant="fadeInDown" style={{ maxWidth: "685px", margin: "0 auto", textAlign: "center" }}>
          <h4
            style={{
              fontFamily: "var(--font-subheading)",
              fontSize: "24px",
              fontWeight: 300,
              color: "#E00201",
              lineHeight: "28.8px",
              letterSpacing: "normal",
              marginBottom: "20px",
            }}
          >
            About Founder
          </h4>

          <h2
            style={{
              fontFamily: "var(--font-subheading)",
              fontSize: "clamp(30px, 3vw, 36px)",
              fontWeight: 500,
              color: "#242424",
              letterSpacing: "0.5px",
              lineHeight: "46.8px",
            }}
          >
            We Are Leading Company In The Saskatchewan
          </h2>
        </AnimateIn>
      </div>
    </section>
  );
}
