export default function TrustStats() {
  const stats = [
    { label: "In Business Since", value: "2016", sub: "7+ Years of Saskatchewan Trade Experience" },
    { label: "Contractor Status", value: "Licensed", sub: "Fully Licensed & Insured in Saskatchewan" },
    { label: "Quote Policy", value: "Free", sub: "Written Quotes — No Hidden Fees" },
    { label: "Work Standard", value: "100%", sub: "Inspection-Ready on Every Project" },
  ];

  return (
    <section
      aria-label="Company credentials and trust signals"
      style={{ backgroundColor: "#0a0a0a", paddingTop: "36px", paddingBottom: "36px" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center px-6 py-2"
            >
              <p
                style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.40)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "clamp(26px, 3.2vw, 38px)",
                  fontWeight: 800,
                  color: "#E00201",
                  lineHeight: "1",
                  marginBottom: "6px",
                  letterSpacing: "-0.5px",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11.5px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: "1.55",
                  margin: 0,
                }}
              >
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
