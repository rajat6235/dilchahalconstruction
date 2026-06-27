import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

const serviceAreas = [
  "Saskatoon",
  "Warman",
  "Martensville",
  "Regina",
  "Prince Albert",
  "Saskatchewan-Wide",
];

export default function LocationCard() {
  return (
    <section className="bg-white" style={{ paddingBottom: "clamp(72px, 10vw, 112px)" }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <AnimateIn variant="fadeInUp">
          <div
            className="border border-[#E5E7EB] p-8 md:p-12"
            style={{ borderLeft: "4px solid #E00201" }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              {/* Left: address */}
              <div>
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    color: "#E00201",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                  }}
                >
                  Our Location
                </p>
                <h3
                  className="text-[#0a0a0a] mb-2"
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "clamp(20px, 2vw, 26px)",
                    fontWeight: 700,
                    letterSpacing: "-0.1px",
                  }}
                >
                  Saskatchewan, Canada
                </h3>
                <address
                  className="not-italic"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14.5px",
                    color: "#6B7280",
                    lineHeight: "1.6",
                  }}
                >
                  Unit 107, 1222 Alberta Ave<br />
                  Saskatoon, SK S7K 1R4
                </address>
              </div>

              {/* Middle: service areas */}
              <div>
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    color: "#9CA3AF",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Service Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-block px-3 py-1 bg-[#F3F4F6] text-[#374151] text-[12px] font-[500] rounded-[2px]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: CTA */}
              <div className="flex-shrink-0">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2.5 bg-[#0a0a0a] text-white text-[12px] font-[700] tracking-[0.5px] px-7 py-[13px] rounded-[2px] hover:bg-[#1f1f1f] transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
                  style={{ fontFamily: "var(--font-subheading)" }}
                >
                  View Our Office
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6.5h9M8 3l3.5 3.5L8 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
