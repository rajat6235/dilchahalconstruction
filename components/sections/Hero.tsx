"use client";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";

export default function Hero() {
  return (
    <section
      className="relative w-full flex items-center"
      style={{ minHeight: "940px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpeg')" }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.60) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 max-w-[1140px] mx-auto px-4 w-full"
        style={{ paddingTop: "170px", paddingBottom: "135px" }}
      >
        {/* WP d6211bd: fadeInDown — "Welcome to" label */}
        <AnimateIn variant="fadeInDown" style={{ display: "inline-block", marginBottom: "8px" }}>
          <p
            className="text-white text-[18px] font-[300]"
            style={{ fontFamily: "var(--font-subheading)" }}
          >
            Welcome to
          </p>
        </AnimateIn>

        {/* WP 949f175: zoomIn — main heading */}
        <AnimateIn variant="zoomIn">
          <h1
            className="text-[#E00201] font-[700] uppercase leading-tight mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "0.5px",
            }}
          >
            Dil Chahal Constructions Ltd.
          </h1>
        </AnimateIn>

        {/* WP 7eaab47: fadeIn — body paragraph */}
        <AnimateIn variant="fadeIn">
          <p
            className="text-white text-[16px] leading-relaxed max-w-[560px] mb-8"
            style={{ fontFamily: "var(--font-body)", wordSpacing: "3px" }}
          >
            Dil Chahal Construction Ltd. proudly serves Saskatoon and surrounding
            areas with expert drywall services, including installation, steel
            framing, T-bar ceilings, house renovations, insulation, mudding,
            tapping, and texturing. We handle residential and commercial projects
            with expertise and attention to detail. Fully insured and experienced,
            we are committed to quality workmanship and reliable service.
          </p>
        </AnimateIn>

        {/* WP 59f1388: fadeInUp — button group */}
        <AnimateIn variant="fadeInUp" style={{ display: "inline-block" }}>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="/services">
              Our Services
            </Button>
            <Button variant="outline" href="/contact-us">
              Contact Us
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
