"use client";
import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";

const row1 = [
  { src: "/images/work1.jpg", alt: "Construction project 1" },
  { src: "/images/work2.jpg", alt: "Construction project 2" },
  { src: "/images/work3.jpg", alt: "Construction project 3" },
  { src: "/images/work4.jpeg", alt: "Construction project 4" },
];
const row2 = [
  { src: "/images/work5.jpeg", alt: "Construction project 5" },
  { src: "/images/work6.jpeg", alt: "Construction project 6" },
  { src: "/images/work7.jpeg", alt: "Construction project 7" },
  { src: "/images/work8.jpeg", alt: "Construction project 8" },
];

function AnimatedRow({
  images,
  animClass,
}: {
  images: { src: string; alt: string }[];
  animClass: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 lg:grid-cols-4 animate-on-scroll ${animClass}`}
    >
      {images.map((img) => (
        <div
          key={img.src}
          className="relative overflow-hidden group"
          style={{ height: "400px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${img.src}')` }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}

export default function LatestWorks() {
  return (
    <section
      id="latest-works"
      className="bg-white"
      style={{
        // WP 2d96af2: desktop pt-100 pb-50 | tablet pt-80 pb-50 | mobile pt-30 pb-40
        paddingTop: "clamp(30px, 8vw, 100px)",
        paddingBottom: "clamp(40px, 4vw, 50px)",
      }}
    >
      {/* WP 2d96af2 e-con-boxed inner container — max-width 1140px centered, pb-50px gap before image grid */}
      <div className="max-w-[1140px] mx-auto px-4 pb-[50px]">
        {/* WP: flex-row, gap 0, align-items stretch */}
        <div className="flex flex-row items-stretch" style={{ gap: "0px" }}>

          {/* WP 2c852fe — 50% width, left-aligned heading */}
          <div className="w-1/2">
            {/* WP ead625b — Montserrat 36px/500/#242424/ls 0.5px (ddc72f6 token) */}
            <h2
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 500,
                color: "#242424",
                letterSpacing: "0.5px",
                lineHeight: "46.8px",
                textAlign: "left",
              }}
            >
              Our Latest Works
            </h2>
          </div>

          {/* WP 100091c — 50% width, justify-content flex-end (right-align button) */}
          <div className="w-1/2 flex justify-end items-center">
            {/* WP 3e4d438: #737373 bg (44eb35c token), Montserrat 16px/600/ls 0.2px (da2e6c4 token) */}
            <Button
              variant="primary"
              href="#"
              className="!bg-[#737373] !border-[#737373] rounded hover:!bg-[#5a5a5a] hover:!border-[#5a5a5a]"
            >
              View Projects
            </Button>
          </div>

        </div>
      </div>
      <AnimatedRow images={row1} animClass="fade-in-down" />
      <AnimatedRow images={row2} animClass="fade-in-up" />
    </section>
  );
}
