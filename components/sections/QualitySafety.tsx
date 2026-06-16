import Button from "@/components/ui/Button";

const features = [
  { icon: "♻", label: "Sustainability" },
  { icon: "⏱", label: "Project On Time" },
  { icon: "🖥", label: "Modern Technology" },
  { icon: "✕", label: "Latest Designs" },
];

export default function QualitySafety() {
  return (
    <section className="w-full flex flex-col md:flex-row" style={{ minHeight: "600px" }}>
      {/* Left column */}
      <div
        className="relative flex-1 flex items-center p-10 md:p-16"
        style={{ minHeight: "400px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/quality-left-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-[480px]">
          <p
            className="text-[#E00201] text-[13px] font-[600] uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-subheading)" }}
          >
            Quality and Safety
          </p>
          <h2
            className="text-white font-[700] leading-tight mb-5"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 3vw, 42px)",
            }}
          >
            Committed to Safe and Healthy Construction Practices
          </h2>
          <p
            className="text-white/80 text-[15px] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our commitment to safety is unwavering. From planning to execution,
            we implement rigorous safety protocols and health practices to protect
            everyone involved.
          </p>
          <Button variant="outline" href="#contact">
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Right column */}
      <div
        className="relative flex-1 flex items-center p-10 md:p-16"
        style={{ minHeight: "400px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/quality-right-bg.jpeg')" }}
        />
        <div className="absolute inset-0 bg-[#8B0001]/75" />
        <div className="relative z-10 max-w-[480px]">
          <h2
            className="text-white font-[700] leading-tight mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(24px, 2.5vw, 36px)",
            }}
          >
            Dedicated to Superior Construction Standards
          </h2>
          <p
            className="text-white/85 text-[15px] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Quality is at the core of our construction philosophy. From planning
            to completion, we maintain stringent quality control measures to
            ensure that every structure we build stands the test of time.
          </p>
          <ul className="flex flex-col gap-3">
            {features.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-3 text-white text-[15px] font-[500]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="text-[18px]">{f.icon}</span>
                {f.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
