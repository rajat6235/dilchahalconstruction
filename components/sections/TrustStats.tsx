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
      style={{ backgroundColor: "#111", paddingTop: "32px", paddingBottom: "32px" }}
    >
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "0" }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "20px 12px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-roboto-sans)",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-roboto-sans)",
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 700,
                  color: "#E00201",
                  lineHeight: "1.1",
                  marginBottom: "6px",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: "1.5",
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
