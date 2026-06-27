import AnimateIn from "@/components/ui/AnimateIn";

const stats = [
  { value: "7+", label: "Years in Business" },
  { value: "SK", label: "Province-Wide Licensed" },
  { value: "100%", label: "Inspection Ready" },
  { value: "Free", label: "Written Quotes" },
];

export default function TransformCommunities() {
  return (
    <section className="bg-white" style={{ padding: "clamp(72px, 10vw, 112px) 0" }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">

        {/* Heading row */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16 mb-16">
          <AnimateIn variant="fadeInDown" className="flex-1">
            <p
              className="mb-3"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "11px",
                fontWeight: 700,
                color: "#E00201",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Building Strong Foundations
            </p>
            <h2
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(26px, 3.2vw, 40px)",
                fontWeight: 700,
                color: "#0a0a0a",
                letterSpacing: "-0.3px",
                lineHeight: "1.2",
              }}
            >
              Transform Communities Across Saskatchewan
            </h2>
          </AnimateIn>

          <AnimateIn variant="fadeIn" className="flex-1">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                fontWeight: 400,
                color: "#6B7280",
                lineHeight: "1.82",
              }}
            >
              Our mission is to build and support vibrant, sustainable communities throughout Saskatchewan. By working together we create infrastructure where everyone can thrive.
            </p>
          </AnimateIn>
        </div>

        {/* Stats grid */}
        <AnimateIn variant="fadeInUp" delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#E5E7EB] divide-x divide-[#E5E7EB]">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-10 px-6 text-center"
              >
                <p
                  className="text-[#E00201] mb-2"
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "clamp(32px, 4vw, 48px)",
                    fontWeight: 800,
                    lineHeight: "1",
                    letterSpacing: "-1px",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12.5px",
                    fontWeight: 500,
                    color: "#9CA3AF",
                    letterSpacing: "0.5px",
                    lineHeight: "1.5",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
