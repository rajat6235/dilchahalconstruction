"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

const slides = [
  {
    src: "/images/reno1.jpeg",
    alt: "House renovation project — drywall and interior finishing completed by Dil Chahal Construction in Saskatoon, SK",
  },
  {
    src: "/images/reno2.jpeg",
    alt: "Residential renovation showcasing mudding, taping, and texturing work in Saskatoon",
  },
  {
    src: "/images/reno3.jpeg",
    alt: "Completed home renovation with drywall installation and ceiling work in Saskatoon, Saskatchewan",
  },
];

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M11 14l-5-5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RenovationCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setCurrent((i + slides.length) % slides.length);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused) setCurrent((c) => (c + 1) % slides.length);
    }, 3000);
  }, [paused]);

  useEffect(() => {
    startTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startTimer]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "4/3", borderRadius: "2px" }}
        aria-label="Renovation project slideshow"
        role="region"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.6s ease",
              zIndex: i === current ? 1 : 0,
            }}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={() => { goTo(current - 1); startTimer(); }}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/75 transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => { goTo(current + 1); startTimer(); }}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/75 transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Select slide">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            onClick={() => { goTo(i); startTimer(); }}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === current}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-5 h-[6px] bg-[#E00201]"
                : "w-[6px] h-[6px] bg-[#D1D5DB] hover:bg-[#9CA3AF]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HouseRenovations() {
  return (
    <>
      {/* Heading */}
      <section className="bg-white" style={{ padding: "clamp(48px, 7vw, 80px) 0 clamp(24px, 4vw, 40px)" }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <AnimateIn variant="fadeInDown">
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
              Residential
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
              House Renovations
            </h2>
          </AnimateIn>
        </div>
      </section>

      {/* Carousel + text */}
      <section
        className="bg-[#F9FAFB]"
        style={{ paddingTop: "clamp(40px, 6vw, 72px)", paddingBottom: "clamp(56px, 8vw, 96px)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-10 md:gap-14">

            {/* Carousel — 55% */}
            <AnimateIn variant="fadeInLeft" className="w-full md:w-[55%] flex-shrink-0">
              <RenovationCarousel />
            </AnimateIn>

            {/* Text — 45% */}
            <AnimateIn variant="fadeInRight" className="flex-1 flex flex-col justify-center">
              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "clamp(22px, 2.4vw, 32px)",
                  fontWeight: 700,
                  color: "#E00201",
                  letterSpacing: "-0.1px",
                  lineHeight: "1.25",
                }}
              >
                Seamless Home Transformations
              </h3>

              <h4
                className="mb-5"
                style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "clamp(16px, 1.6vw, 20px)",
                  fontWeight: 700,
                  color: "#0a0a0a",
                  letterSpacing: "0",
                  lineHeight: "1.35",
                }}
              >
                Elevate Your Home&apos;s Value and Appeal
              </h4>

              <p
                className="mb-8"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#6B7280",
                  lineHeight: "1.82",
                }}
              >
                Experience the difference of working with a dedicated team committed to seamless home transformations. Whether you&apos;re looking to increase your home&apos;s value or enhance its comfort and style, our renovation experts deliver precision and professionalism on every project.
              </p>

              <Link
                href="/contact-us#contact"
                className="group self-start inline-flex items-center gap-2.5 bg-[#E00201] text-white text-[12px] font-[700] tracking-[0.5px] px-7 py-[13px] rounded-[2px] hover:bg-[#c50000] transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
                style={{ fontFamily: "var(--font-subheading)" }}
              >
                Get a Quote
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </AnimateIn>

          </div>
        </div>
      </section>
    </>
  );
}
