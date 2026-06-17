import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HouseRenovations() {
  return (
    <>
      {/* Section 1: WP 1b490cc — 177px white, centered H2 heading */}
      <section className="bg-white" style={{ padding: "65px 0px 65px" }}>
        <div className="max-w-[1140px] mx-auto px-4 text-center">
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
            House Renovations
          </h2>
        </div>
      </section>

      {/* Section 2: WP 96e9b97 — 520px, 2-col layout, padding 0px 10px */}
      <section style={{ backgroundColor: "rgba(0,0,0,0)", padding: "10px 10px" }}>
        <div className="flex flex-col md:flex-row">
          {/* Left: single large image — WP: 627px wide, 470px tall */}
          <div className="flex-1" style={{ maxWidth: "55%" }}>
            <Image
              src="/images/reno1.jpeg"
              alt="House renovation"
              width={627}
              height={470}
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>

          {/* Right: text content — WP: 630px wide, 0px padding */}
          <div
            className="flex-1 flex flex-col justify-center"
            style={{ padding: "40px" }}
          >
            {/* WP: H2 "Seamless Home Transformations" — Merriweather 34px weight 700 #E00201 lineHeight 44.2px */}
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

            {/* WP: H3 "Elevate Your Home's Value and Appeal" — Montserrat bold black */}
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

            {/* Para — WP: Open Sans 16px weight 500 #7A7A7A lineHeight 24.75px */}
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                fontWeight: 500,
                color: "#7A7A7A",
                lineHeight: "24.75px",
              }}
            >
              Experience the difference of working with a dedicated team
              committed to delivering seamless home transformations. Whether
              you&apos;re looking to increase your home&apos;s value or
              enhance its comfort and style, our renovation experts are here
              to help you achieve your goals with precision and professionalism.
            </p>

            <Button
              variant="primary"
              href="#contact"
              className="!bg-[#737373] !border-[#737373] rounded hover:!bg-[#5a5a5a] hover:!border-[#5a5a5a] self-start"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
