"use client";
import Image from "next/image";
import Link from "next/link";

const trustItems = [
  { label: "In Business Since", value: "2016" },
  { label: "SK Province Licensed", value: "Licensed" },
  { label: "Every Project Quote", value: "Free" },
  { label: "Work Standard", value: "100% Inspected" },
];

export default function HeroWithHeader() {
  return (
    <>
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-anim {
          animation: heroFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .hero-anim-1 { animation-delay: 0.08s; }
        .hero-anim-2 { animation-delay: 0.18s; }
        .hero-anim-3 { animation-delay: 0.30s; }
        .hero-anim-4 { animation-delay: 0.42s; }
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "100svh" }}
        aria-label="Hero — Dil Chahal Construction"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpeg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(0,0,0,0.91) 0%, rgba(0,0,0,0.80) 48%, rgba(0,0,0,0.58) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Main content — pb clears the absolute trust bar (2-row on mobile ≈ 110px) */}
        <div
          className="relative z-10 flex items-center pb-[148px] md:pb-[100px]"
          style={{
            minHeight: "100svh",
            paddingTop: "clamp(110px, 15vw, 148px)",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 w-full">

            {/* Eyebrow */}
            <div className="flex items-start gap-3 mb-5 hero-anim hero-anim-1">
              <span className="h-[1px] w-8 bg-[#E00201] flex-shrink-0 mt-[6px]" aria-hidden="true" />
              <p
                className="text-[#E00201] text-[10px] font-[700] uppercase"
                style={{ fontFamily: "var(--font-subheading)", letterSpacing: "2.5px", lineHeight: "1.5" }}
              >
                Saskatchewan&apos;s Premier Contractor
              </p>
            </div>

            {/* H1 */}
            <h1
              className="text-white font-[700] mb-6 leading-[1.08] hero-anim hero-anim-2"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(36px, 6.2vw, 80px)",
                maxWidth: "840px",
                letterSpacing: "-0.5px",
              }}
            >
              Expert Drywall &amp;{" "}
              <span className="text-[#E00201]">Construction</span>
              <br className="hidden sm:block" />
              {" "}in Saskatoon, SK
            </h1>

            {/* Body copy */}
            <p
              className="mb-10 hero-anim hero-anim-3"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px, 1.6vw, 17px)",
                color: "rgba(255,255,255,0.70)",
                maxWidth: "560px",
                lineHeight: "1.82",
              }}
            >
              Dil Chahal Construction delivers premium drywall installation, steel framing, insulation, and full interior renovations across Saskatchewan. Licensed, insured, and inspection-ready.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 hero-anim hero-anim-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 bg-[#E00201] text-white font-[700] tracking-[0.4px] px-7 py-[14px] rounded-[2px] hover:bg-[#c50000] transition-all duration-300 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E00201] focus-visible:outline-offset-2"
                style={{ fontFamily: "var(--font-subheading)", fontSize: "13px" }}
              >
                Our Services
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2.5 text-white font-[600] tracking-[0.4px] px-7 py-[14px] border border-white/30 rounded-[2px] hover:border-white/70 hover:bg-white/[0.08] transition-all duration-300 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                style={{ fontFamily: "var(--font-subheading)", fontSize: "13px" }}
              >
                Get a Free Quote
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom trust bar */}
        <div
          className="absolute bottom-0 left-0 right-0 border-t border-white/10"
          style={{ background: "rgba(0,0,0,0.60)", backdropFilter: "blur(10px)" }}
        >
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-3 md:py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {trustItems.map((t, i) => (
                <div key={i} className="text-center px-2 py-2 md:py-1">
                  <p
                    className="text-[#E00201] font-[700] uppercase mb-0.5"
                    style={{ fontFamily: "var(--font-subheading)", fontSize: "8.5px", letterSpacing: "1px" }}
                  >
                    {t.label}
                  </p>
                  <p
                    className="text-white font-[700]"
                    style={{ fontFamily: "var(--font-subheading)", fontSize: "12px" }}
                  >
                    {t.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
