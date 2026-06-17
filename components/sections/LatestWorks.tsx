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
    <section id="latest-works" className="bg-white pt-[100px] pb-[50px]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* WP: Montserrat 36px weight 500 #242424 letterSpacing 0.5px lineHeight 46.8px */}
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
            Our Latest Works
          </h2>
          <Button variant="primary" href="#">
            View Projects
          </Button>
        </div>
      </div>
      <AnimatedRow images={row1} animClass="fade-in-down" />
      <AnimatedRow images={row2} animClass="fade-in-up" />
    </section>
  );
}
