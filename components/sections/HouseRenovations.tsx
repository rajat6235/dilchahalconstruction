"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";

const slides = [
  { src: "/images/reno1.jpeg", alt: "House renovation project — drywall and interior finishing completed by Dil Chahal Construction in Saskatoon, SK" },
  { src: "/images/reno2.jpeg", alt: "Residential renovation showcasing mudding, taping, and texturing work in Saskatoon" },
  { src: "/images/reno3.jpeg", alt: "Completed home renovation with drywall installation and ceiling work in Saskatoon, Saskatchewan" },
];

function RenovationCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setCurrent((i + slides.length) % slides.length);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused) setCurrent((c) => (c + 1) % slides.length);
    }, 2500);
  }, [paused]);

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTimer]);

  return (
    <div
      style={{ paddingBottom: "30px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide container — 4:3 aspect ratio matching WP 534×431 */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "4/3" }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transition: "opacity 500ms ease",
              zIndex: i === current ? 1 : 0,
            }}
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

        {/* WP: elementor-swiper-button-prev — chevron-left SVG inside */}
        <button
          onClick={() => {
            goTo(current - 1);
            startTimer();
          }}
          aria-label="Previous slide"
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(0,0,0,0.35)",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            padding: 0,
          }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
          </svg>
        </button>

        {/* WP: elementor-swiper-button-next — chevron-right SVG inside */}
        <button
          onClick={() => {
            goTo(current + 1);
            startTimer();
          }}
          aria-label="Next slide"
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(0,0,0,0.35)",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            padding: 0,
          }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
          </svg>
        </button>
      </div>

      {/* WP: swiper-pagination — dots below carousel */}
      <div
        className="flex justify-center gap-[8px]"
        style={{ paddingTop: "14px" }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              goTo(i);
              startTimer();
            }}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              backgroundColor: i === current ? "#333" : "#bbb",
              transition: "background-color 0.3s",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function HouseRenovations() {
  return (
    <>
      {/* Section 1: WP 1b490cc — fadeInDown on scroll */}
      <section className="bg-white" style={{ padding: "10px 0 60px" }}>
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <AnimateIn variant="fadeInDown" style={{ display: "inline-block", width: "100%" }}>
          <h2
            style={{
              fontFamily: "var(--font-subheading)",
              fontSize: "clamp(28px, 3vw, 36px)",
              fontWeight: 500,
              color: "#242424",
              letterSpacing: "0.5px",
              lineHeight: "46.8px",
            }}
          >
            House Renovations
          </h2>
          </AnimateIn>
        </div>
      </section>

      {/* Section 2: WP 96e9b97 — bg #FFFFFF, margin-top:100px desktop, mb:30px */}
      <section
        className="bg-[#f5f5f5]"
        style={{ paddingTop: "clamp(40px, 8vw, 100px)" }}
      >
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col md:flex-row" style={{ gap: "0px" }}>
            {/* WP 828acec — 55% width — fadeInLeft */}
            <AnimateIn
              variant="fadeInLeft"
              className="w-full md:w-[55%] flex-shrink-0"
              style={{ marginRight: "clamp(0px, 2.5vw, 30px)" }}
            >
              <RenovationCarousel />
            </AnimateIn>

            {/* WP c4b0a9a — remaining 45% — fadeInRight */}
            <AnimateIn
              variant="fadeInRight"
              className="flex-1 flex flex-col justify-center pl-0 md:pl-5 pt-8 md:pt-10 pb-10"
            >
              {/* WP 594bb2f: H2 "Seamless Home Transformations" — Merriweather 34px/700/#E00201 */}
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(24px, 2.5vw, 34px)",
                  fontWeight: 700,
                  color: "#E00201",
                  lineHeight: "44.2px",
                }}
              >
                Seamless Home Transformations
              </h2>

              {/* WP f62c51c: H5 "Elevate Your Home's Value and Appeal" — Montserrat bold black */}
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "clamp(18px, 2vw, 26px)",
                  fontWeight: 700,
                  color: "#000000",
                  letterSpacing: "0.2px",
                  lineHeight: "33.8px",
                }}
              >
                Elevate Your Home&apos;s Value and Appeal
              </h3>

              {/* WP 33ea119: italic Open Sans 16px/500/#7A7A7A */}
              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "#7A7A7A",
                  lineHeight: "24.75px",
                  textAlign: "justify",
                }}
              >
                Experience the difference of working with a dedicated team
                committed to delivering seamless home transformations. Whether
                you&apos;re looking to increase your home&apos;s value or
                enhance its comfort and style, our renovation experts are here
                to help you achieve your goals with precision and
                professionalism.
              </p>

              <Button
                variant="primary"
                href="/contact-us#contact"
                className="!bg-[#737373] !border-[#737373] rounded hover:!bg-[#5a5a5a] hover:!border-[#5a5a5a] self-start"
              >
                Get a Quote
              </Button>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
