import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0">
      <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const features: { icon: ReactNode; label: string }[] = [
  { icon: <CheckIcon />, label: "Sustainability & green practices" },
  { icon: <CheckIcon />, label: "On-time project delivery" },
  { icon: <CheckIcon />, label: "Modern tools & technology" },
  { icon: <CheckIcon />, label: "Current design standards" },
];

export default function QualitySafety() {
  return (
    <section
      className="w-full flex flex-col md:flex-row"
      style={{ minHeight: "620px" }}
      aria-label="Quality and Safety"
    >
      {/* Left column — Quality & Safety */}
      <AnimateIn
        variant="fadeInLeft"
        className="relative flex-1 flex items-end p-8 md:p-14 lg:p-20"
        style={{ minHeight: "clamp(360px, 50vw, 620px)" }}
      >
        <Image
          src="/images/image-1-min.jpg"
          alt="Dil Chahal Construction team following rigorous safety protocols on a job site in Saskatoon, SK"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10" style={{ maxWidth: "480px" }}>
          <p
            className="mb-3"
            style={{
              fontFamily: "var(--font-subheading)",
              fontSize: "10.5px",
              fontWeight: 700,
              color: "#E00201",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Quality and Safety
          </p>
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-subheading)",
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: 700,
              letterSpacing: "-0.2px",
              lineHeight: "1.2",
            }}
          >
            Committed to Safe &amp; Healthy Construction
          </h2>
          <p
            className="mb-7"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14.5px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.70)",
              lineHeight: "1.8",
            }}
          >
            From planning to execution, we implement rigorous safety protocols and health practices to protect everyone involved in every project.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2.5 bg-[#E00201] text-white text-[12px] font-[700] tracking-[0.5px] px-6 py-[12px] rounded-[2px] hover:bg-[#c50000] transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
            style={{ fontFamily: "var(--font-subheading)" }}
          >
            Get In Touch
          </Link>
        </div>
      </AnimateIn>

      {/* Right column — Construction Standards */}
      <AnimateIn
        variant="fadeInRight"
        className="relative flex-1 flex items-end p-8 md:p-14 lg:p-20"
        style={{ minHeight: "clamp(360px, 50vw, 620px)" }}
      >
        <Image
          src="/images/image-2-min.jpg"
          alt="Dil Chahal Construction delivering superior construction standards on a commercial project"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(139,0,1,0.93) 0%, rgba(139,0,1,0.60) 55%, rgba(139,0,1,0.20) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10" style={{ maxWidth: "480px" }}>
          <h3
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-subheading)",
              fontSize: "clamp(20px, 2.2vw, 28px)",
              fontWeight: 700,
              letterSpacing: "-0.1px",
              lineHeight: "1.3",
            }}
          >
            Dedicated to Superior Construction Standards
          </h3>
          <p
            className="mb-7"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14.5px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.72)",
              lineHeight: "1.8",
            }}
          >
            Quality is at the core of our philosophy. We maintain stringent quality control from planning to completion so every structure stands the test of time.
          </p>
          <ul className="flex flex-col gap-3.5" aria-label="Key quality commitments">
            {features.map((f) => (
              <li
                key={f.label as string}
                className="flex items-center gap-3 text-white"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                <span className="text-white/80">{f.icon}</span>
                {f.label}
              </li>
            ))}
          </ul>
        </div>
      </AnimateIn>
    </section>
  );
}
