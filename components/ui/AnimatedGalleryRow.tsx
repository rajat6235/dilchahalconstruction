"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface AnimatedGalleryRowProps {
  images: GalleryImage[];
  animClass: "fade-in-down" | "fade-in-up";
}

export default function AnimatedGalleryRow({ images, animClass }: AnimatedGalleryRowProps) {
  const ref = useRef<HTMLDivElement>(null);

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
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}
