import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import AnimatedGalleryRow from "@/components/ui/AnimatedGalleryRow";

const row1 = [
  { src: "/images/mudding.jpeg", alt: "Mudding and taping drywall finish work by Dil Chahal Construction in Saskatoon, SK" },
  { src: "/images/work9.jpeg", alt: "Residential renovation project showcasing interior construction in Saskatoon" },
  { src: "/images/work10.jpeg", alt: "Commercial drywall and framing project completed in Saskatoon, Saskatchewan" },
  { src: "/images/work3.jpg", alt: "Steel framing and drywall work for a commercial renovation in Saskatoon" },
];

const row2 = [
  { src: "/images/work2.jpg", alt: "Completed drywall installation project by Dil Chahal Construction in Saskatoon, SK" },
  { src: "/images/work1.jpg", alt: "Insulation and drywall installation for a Saskatoon residential project" },
  { src: "/images/bulkhead.jpeg", alt: "Custom bulkhead ceiling construction by Dil Chahal Construction in Saskatoon" },
  { src: "/images/work12.jpeg", alt: "House renovation project featuring drywall and interior finishing in Saskatoon" },
];

export default function LatestWorks() {
  return (
    <section
      id="latest-works"
      className="bg-white"
      style={{ paddingTop: "clamp(48px, 8vw, 96px)", paddingBottom: "clamp(48px, 6vw, 72px)" }}
    >
      {/* Section header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <AnimateIn variant="fadeInLeft">
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
              Portfolio
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
              Our Latest Works
            </h2>
          </AnimateIn>

          <AnimateIn variant="fadeInRight">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2.5 border border-[#0a0a0a] text-[#0a0a0a] text-[12px] font-[700] tracking-[0.5px] px-6 py-[11px] rounded-[2px] hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
              style={{ fontFamily: "var(--font-subheading)" }}
            >
              View All Projects
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

      {/* Gallery rows */}
      <AnimatedGalleryRow images={row1} animClass="fade-in-down" />
      <AnimatedGalleryRow images={row2} animClass="fade-in-up" />
    </section>
  );
}
