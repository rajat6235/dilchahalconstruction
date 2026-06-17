import Image from "next/image";

export default function OurExperts() {
  return (
    // WP: section 385a48a — 655px, white bg
    <section className="bg-white" style={{ padding: "20px 0 40px" }}>
      <div className="max-w-[1140px] mx-auto px-4">

        {/* Heading block — WP: inner container ee5f9c7, 595px height, 0px padding */}
        <div className="text-center">
          {/* H3 "The Team" — WP: Montserrat 24px weight 300 #E00201 lineHeight 31.2px */}
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

          {/* H2 "Our Experts" — WP: Montserrat 36px weight 500 #000000 letterSpacing 0.5px lineHeight 46.8px */}
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

        {/* Images row — WP: flex-row, padding-top 50px, gap 20px */}
        <div
          className="flex flex-col md:flex-row"
          style={{ paddingTop: "70px", gap: "20px" }}
        >
          {/* Left image — WP: 569px wide, 426px tall */}
          <div className="flex-1">
            <Image
              src="/images/work4.jpeg"
              alt="Dil Chahal Construction team"
              width={1024}
              height={768}
              style={{ width: "100%", height: "auto", display: "block" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right image — WP: 570px wide, 427px tall */}
          <div className="flex-1">
            <Image
              src="/images/work6.jpeg"
              alt="Dil Chahal Construction crew"
              width={1024}
              height={768}
              style={{ width: "100%", height: "auto", display: "block" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
