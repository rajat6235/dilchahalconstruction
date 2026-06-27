import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";

export default function OurExperts() {
  return (
    <section className="bg-white" style={{ padding: "clamp(24px, 4vw, 48px) 0 clamp(56px, 8vw, 96px)" }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">

        <AnimateIn variant="zoomInDown">
          {/* Section header */}
          <div className="text-center mb-12">
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
              The Team
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
              Our Experts
            </h2>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              className="relative overflow-hidden img-zoom-container"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/images/work4.jpeg"
                alt="Dil Chahal Construction expert drywall and framing team on a commercial project in Saskatoon, SK"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                aria-hidden="true"
              />
            </div>

            <div
              className="relative overflow-hidden img-zoom-container"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/images/work6.jpeg"
                alt="Skilled construction crew from Dil Chahal Construction working on a renovation project in Saskatoon"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
