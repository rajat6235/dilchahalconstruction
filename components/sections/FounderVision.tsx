import Button from "@/components/ui/Button";
import Image from "next/image";

export default function FounderVision() {
  return (
    // WP: fa48280 — bg white, 30px side padding
    <section className="bg-white" style={{ padding: "0 30px" }}>
      {/* WP: e-con-inner — max-width 1024px, 60px top/bottom padding */}
      <div className="mx-auto" style={{ maxWidth: "1024px", padding: "60px 0" }}>
        {/* WP: column-gap 20px between cols */}
        <div className="flex flex-col lg:flex-row" style={{ gap: "20px" }}>

          {/* Left col — photo, 50% at lg+ */}
          <div className="w-full lg:w-1/2 flex flex-col pt-0 md:pt-[50px] lg:pt-0">
            {/*
              Desktop (lg+): overflow-hidden + max-h caps height to ~542px matching WP,
              image uses object-cover to fill without distorting.
              Mobile: natural height (no max-h), no crop.
            */}
            <div
              className="relative overflow-hidden lg:max-h-[542px]"
              style={{ margin: "10px" }}
            >
              {/* Gradient at bottom for name/CEO legibility */}
              <div
                className="absolute bottom-0 left-0 right-0 z-10"
                style={{
                  height: "35%",
                  background:
                    "linear-gradient(0deg, rgba(33,45,69,0.63) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
              {/* Mobile: width:100% height:auto (no crop). Desktop: object-cover fills the capped container. */}
              <Image
                src="/images/founder.jpeg"
                alt="Dilbagh Singh Chahal, CEO"
                width={1080}
                height={1362}
                className="w-full h-auto lg:h-full lg:object-cover lg:object-top"
                style={{ display: "block" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Name / title overlay at bottom-left */}
              <div
                className="absolute z-20"
                style={{ bottom: "30px", left: "30px" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-roboto-sans)",
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "rgb(255,255,255)",
                    lineHeight: "31.2px",
                    marginBottom: "0px",
                  }}
                >
                  Dilbagh Singh Chahal
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-roboto-sans)",
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "rgb(255,255,255)",
                    lineHeight: "24.75px",
                  }}
                >
                  CEO
                </p>
              </div>
            </div>
          </div>

          {/* Right col — text, 50% at lg+ */}
          <div
            className="w-full lg:w-1/2 pt-8 lg:pt-0 flex flex-col"
            style={{ gap: "20px" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 3.2vw, 40px)",
                fontWeight: 700,
                color: "#E00201",
                letterSpacing: "0.5px",
                lineHeight: "52px",
              }}
            >
              Founder&apos;s Vision
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                fontWeight: 500,
                color: "#7A7A7A",
                lineHeight: "24.75px",
                textAlign: "justify",
              }}
            >
              Under the visionary leadership of Dilbagh Singh Chahal, our founder
              and CEO, Dil Chahal Constructions aims to set new benchmarks in the
              industry. Dil Chahal&apos;s forward-thinking approach and unwavering
              commitment to quality have been the driving forces behind our
              innovative solutions and exceptional service standards.
            </p>

            <h3
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(26px, 3.16vw, 36px)",
                fontWeight: 500,
                color: "#000000",
                letterSpacing: "0.5px",
                lineHeight: "46.8px",
              }}
            >
              Why Choose Us?
            </h3>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                fontWeight: 500,
                color: "#7A7A7A",
                lineHeight: "24.75px",
                textAlign: "justify",
              }}
            >
              Choosing Dil Chahal Constructions means choosing reliability,
              innovation, and unparalleled customer service. Our founder&apos;s
              passion for excellence drives us to continuously improve and adapt
              to our clients&apos; needs. With a proven track record of success
              and a team of highly skilled professionals, we are your trusted
              partner in Saskatchewan.
            </p>

            <Button
              variant="primary"
              href="#services"
              className="!bg-[#737373] !border-[#737373] rounded hover:!bg-[#5a5a5a] hover:!border-[#5a5a5a] self-start"
            >
              Our Services
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
