import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

export default function InnovateSpace() {
  return (
    <section className="relative z-10 mt-0 lg:-mt-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <AnimateIn variant="fadeInUp">
          <div
            className="relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #8B0001 0%, #c50000 50%, #8B0001 100%)",
              padding: "clamp(36px, 5vw, 60px) clamp(28px, 5vw, 64px)",
            }}
          >
            {/* Decorative grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left: text */}
              <div className="flex-1 max-w-[620px]">
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.60)",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                  }}
                >
                  Innovate Your Space
                </p>
                <h2
                  className="text-white mb-4"
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "clamp(26px, 3.5vw, 44px)",
                    fontWeight: 700,
                    lineHeight: "1.15",
                    letterSpacing: "-0.3px",
                  }}
                >
                  7+ Years of Unmatched Excellence
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: "1.75",
                  }}
                >
                  For more than 7 years, Dil Chahal Construction Ltd. has been committed to outstanding drywall services across Saskatoon and Saskatchewan — every project completed with the highest level of quality and reliability.
                </p>
              </div>

              {/* Right: stats + CTA */}
              <div className="flex flex-col items-start lg:items-end gap-6">
                {/* Mini stats */}
                <div className="flex gap-8">
                  {[
                    { num: "7+", label: "Years Experience" },
                    { num: "100%", label: "Inspection Ready" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p
                        className="text-white text-[28px] font-[800] leading-none mb-1"
                        style={{ fontFamily: "var(--font-subheading)" }}
                      >
                        {s.num}
                      </p>
                      <p
                        className="text-white/55 text-[11px] font-[600] tracking-[1px] uppercase"
                        style={{ fontFamily: "var(--font-subheading)" }}
                      >
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2.5 bg-white text-[#8B0001] text-[12px] font-[700] tracking-[0.5px] px-7 py-[13px] rounded-[2px] hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
                  style={{ fontFamily: "var(--font-subheading)" }}
                >
                  Work With Us
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
