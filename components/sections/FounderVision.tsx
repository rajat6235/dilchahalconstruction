import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

const reasons = [
  { icon: "✓", text: "Licensed & fully insured in Saskatchewan" },
  { icon: "✓", text: "Written quotes — no hidden fees, ever" },
  { icon: "✓", text: "Inspection-ready on every project" },
  { icon: "✓", text: "Clear communication from quote to completion" },
];

export default function FounderVision() {
  return (
    <section className="bg-white" style={{ padding: "clamp(24px, 5vw, 60px) 0 clamp(56px, 8vw, 96px)" }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left: founder photo */}
          <AnimateIn variant="zoomIn" className="w-full lg:w-[44%] flex-shrink-0">
            <div
              className="relative overflow-hidden"
              style={{ maxHeight: "580px", borderRadius: "2px" }}
            >
              {/* Gradient overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 z-10"
                style={{
                  height: "40%",
                  background: "linear-gradient(0deg, rgba(10,10,10,0.75) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              />
              <Image
                src="/images/founder.jpeg"
                alt="Dilbagh Singh Chahal, CEO and founder of Dil Chahal Construction Ltd. — drywall contractor and general contractor in Saskatoon, SK"
                width={1080}
                height={1362}
                className="w-full h-auto lg:max-h-[580px] lg:object-cover lg:object-top"
                style={{ display: "block" }}
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
              {/* Name overlay */}
              <div className="absolute z-20 bottom-6 left-6">
                <p
                  className="text-white font-[700]"
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "18px",
                    letterSpacing: "0.1px",
                    marginBottom: "2px",
                  }}
                >
                  Dilbagh Singh Chahal
                </p>
                <p
                  className="text-white/60 font-[400]"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                  }}
                >
                  CEO &amp; Founder
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Right: text */}
          <AnimateIn
            variant="fadeInRight"
            className="flex-1 flex flex-col"
            style={{ gap: "24px" }}
          >
            {/* Section label */}
            <div>
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
                Our Story
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "clamp(24px, 2.8vw, 36px)",
                  fontWeight: 700,
                  color: "#E00201",
                  letterSpacing: "-0.2px",
                  lineHeight: "1.2",
                }}
              >
                Founder&apos;s Vision
              </h2>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                fontWeight: 400,
                color: "#4B5563",
                lineHeight: "1.85",
              }}
            >
              Dilbagh Singh Chahal founded Dil Chahal Construction in 2016 with one goal: deliver residential and commercial interior construction in Saskatchewan that passes inspection, holds up over time, and earns the trust of every client. With over 7 years of hands-on experience across drywall installation, steel framing, insulation, ceiling systems, and full interior renovations, Dilbagh leads every project with trade-level precision and transparent communication.
            </p>

            {/* Divider */}
            <div className="border-t border-[#F3F4F6]" />

            <div>
              <h3
                className="mb-5"
                style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "clamp(20px, 2.2vw, 26px)",
                  fontWeight: 700,
                  color: "#0a0a0a",
                  letterSpacing: "-0.1px",
                  lineHeight: "1.25",
                }}
              >
                Why Choose Us?
              </h3>

              <ul className="flex flex-col gap-3" aria-label="Reasons to choose Dil Chahal Construction">
                {reasons.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14.5px",
                      color: "#4B5563",
                      lineHeight: "1.65",
                    }}
                  >
                    <span
                      className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#E00201]/10 flex items-center justify-center text-[#E00201] text-[11px] font-bold"
                      aria-hidden="true"
                    >
                      {r.icon}
                    </span>
                    {r.text}
                  </li>
                ))}
              </ul>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                fontWeight: 400,
                color: "#4B5563",
                lineHeight: "1.85",
              }}
            >
              Dil Chahal Construction is a licensed and fully insured general contractor serving Saskatoon, Regina, Prince Albert, and communities across Saskatchewan. Every project is completed to Saskatchewan Building Code standards and is inspection-ready on schedule.
            </p>

            <Link
              href="/services"
              className="group self-start inline-flex items-center gap-2.5 bg-[#E00201] text-white text-[12px] font-[700] tracking-[0.5px] px-7 py-[13px] rounded-[2px] hover:bg-[#c50000] transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
              style={{ fontFamily: "var(--font-subheading)" }}
            >
              Our Services
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
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
