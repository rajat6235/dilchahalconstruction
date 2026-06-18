"use client";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimateIn from "@/components/ui/AnimateIn";

const services = [
  {
    src: "/images/drywall.jpg",
    alt: "Drywall installation",
    title: "Drywall",
    description:
      "Quality drywall services providing strong and even surfaces for any space.",
  },
  {
    src: "/images/work7.jpeg",
    alt: "GlassRoc sheathing",
    title: "GlassRoc",
    description:
      "Safeguard your building with GlasRoc Sheathing superior fire, moisture, and mold resistance for durable exterior walls and roofs.",
  },
  {
    src: "/images/steel-frame.jpeg",
    alt: "Steel frame construction",
    title: "Steel Frame",
    description:
      "Durable steel frame constructions that provide excellent structural support.",
  },
  {
    src: "/images/t-bar.jpeg",
    alt: "T-Bar ceiling installation",
    title: "T-Bar",
    description:
      "Superior T-Bar ceiling systems for a modern, clean, and professional appearance.",
  },
  {
    src: "/images/work5.jpeg",
    alt: "Insulation services",
    title: "Insulation",
    description:
      "Top-tier insulation services to keep your property energy-efficient and cozy.",
  },
  {
    src: "/images/bullcat2.jpeg",
    alt: "Bulkhead ceiling",
    title: "Bulkhead Ceiling",
    description:
      "Enhance your space with our expertly crafted bulkhead ceilings, designed to add dimension, style, and functionality to any room.",
  },
  {
    src: "/images/quality-right-bg.jpeg",
    alt: "Mudding and taping",
    title: "Mudding",
    description:
      "Seamless mudding services for a smooth, impeccable finish on all surfaces.",
  },
  {
    src: "/images/team2.jpeg",
    alt: "Texture finishing",
    title: "Texture",
    description:
      "Stylish texturing techniques to enhance the visual appeal of your interiors.",
  },
];

export default function QualityServices() {
  return (
    <section id="services" className="bg-white py-[100px]">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* WP f91e953: fadeInLeft — heading block */}
        <AnimateIn variant="fadeInLeft">
          <h4
            className="mb-3"
            style={{
              fontFamily: "var(--font-subheading)",
              fontSize: "24px",
              fontWeight: 300,
              color: "#E00201",
              lineHeight: "28.8px",
              letterSpacing: "normal",
            }}
          >
            Comprehensive Solutions
          </h4>
          <h2
            className="font-[700] text-black mb-12"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 4vw, 48px)",
              letterSpacing: "0.5px",
              lineHeight: "62.4px",
            }}
          >
            Quality Services
          </h2>
        </AnimateIn>

        {/* WP 847a90d: slideInUp — services grid */}
        <AnimateIn variant="slideInUp">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 sm:gap-x-4 lg:gap-x-5">
            {services.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
