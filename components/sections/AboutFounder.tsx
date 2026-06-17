export default function AboutFounder() {
  return (
    // WP: section 90def38 — 212px, inner padding 10px top 60px bottom, content 685px wide centered
    <section id="about" className="bg-white" style={{ padding: "10px 0 60px" }}>
      <div className="max-w-[1140px] mx-auto px-4">
        <div style={{ maxWidth: "685px", margin: "0 auto", textAlign: "center" }}>
          {/* H4 — WP: Montserrat 24px weight 300 #E00201 lineHeight 28.8px */}
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

          {/* H2 — WP: Montserrat 36px weight 500 #242424 letterSpacing 0.5px lineHeight 46.8px — wraps to 2 lines at 685px */}
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
        </div>
      </div>
    </section>
  );
}
