import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";

export default function OurExperts() {
  return (
    // WP: section 385a48a — white bg
    <section className="bg-white" style={{ padding: "20px 0 40px" }}>
      <div className="max-w-[1140px] mx-auto px-4">

        {/* WP: ee5f9c7 — zoomInDown on scroll */}
        <AnimateIn variant="zoomInDown">
          <div className="text-center">
            <h3
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "24px",
                fontWeight: 300,
                color: "#E00201",
                lineHeight: "31.2px",
                letterSpacing: "normal",
                marginBottom: "20px",
              }}
            >
              The Team
            </h3>

            <h2
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(30px, 3.16vw, 36px)",
                fontWeight: 500,
                color: "#000000",
                letterSpacing: "0.5px",
                lineHeight: "46.8px",
              }}
            >
              Our Experts
            </h2>
          </div>

          <div
            className="flex flex-col md:flex-row"
            style={{ paddingTop: "70px", gap: "20px" }}
          >
            <div className="flex-1">
              <Image
                src="/images/work4.jpeg"
                alt="Dil Chahal Constructions expert drywall and framing team on a commercial project in Saskatoon, SK"
                width={1024}
                height={768}
                style={{ width: "100%", height: "auto", display: "block" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="flex-1">
              <Image
                src="/images/work6.jpeg"
                alt="Skilled construction crew from Dil Chahal Constructions working on a renovation project in Saskatoon"
                width={1024}
                height={768}
                style={{ width: "100%", height: "auto", display: "block" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
