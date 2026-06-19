import Button from "@/components/ui/Button";
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
      style={{
        paddingTop: "clamp(30px, 8vw, 100px)",
        paddingBottom: "clamp(40px, 4vw, 50px)",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-4 pb-[50px]">
        <div className="flex flex-row items-stretch" style={{ gap: "0px" }}>

          <AnimateIn variant="fadeInLeft" className="w-1/2">
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
          </AnimateIn>

          <AnimateIn variant="fadeInRight" className="w-1/2 flex justify-end items-center">
            <Button
              variant="primary"
              href="/projects"
              className="!bg-[#737373] !border-[#737373] rounded hover:!bg-[#5a5a5a] hover:!border-[#5a5a5a]"
            >
              View Projects
            </Button>
          </AnimateIn>

        </div>
      </div>
      <AnimatedGalleryRow images={row1} animClass="fade-in-down" />
      <AnimatedGalleryRow images={row2} animClass="fade-in-up" />
    </section>
  );
}
