import Button from "@/components/ui/Button";
import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";

export default function FounderVision() {
  return (
    // WP: fa48280 — bg white, 30px side padding
    <section className="bg-white" style={{ padding: "0 30px" }}>
      {/* WP: e-con-inner — max-width 1024px, 60px top/bottom padding */}
      <div className="mx-auto" style={{ maxWidth: "1024px", padding: "60px 0" }}>
        {/* WP: column-gap 20px between cols */}
        <div className="flex flex-col lg:flex-row" style={{ gap: "20px" }}>

          {/* Left col — photo, 50% at lg+ — WP: zoomIn */}
          <AnimateIn variant="zoomIn" className="w-full lg:w-1/2 flex flex-col pt-0 md:pt-[50px] lg:pt-0">
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
                alt="Dilbagh Singh Chahal, CEO and founder of Dil Chahal Construction Ltd., drywall contractor and general contractor in Saskatoon, SK"
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
          </AnimateIn>

          {/* Right col — text, 50% at lg+ — WP: fadeInRight */}
          <AnimateIn
            variant="fadeInRight"
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
              Dilbagh Singh Chahal founded Dil Chahal Construction in 2016 with
              one goal: deliver residential and commercial interior construction
              in Saskatchewan that passes inspection, holds up over time, and
              earns the trust of every client. With over 7 years of hands-on
              experience across drywall installation, steel framing, insulation,
              ceiling systems, and full interior renovations, Dilbagh leads every
              project with a commitment to trade-level precision and transparent
              communication from first quote to final walkthrough.
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
              Dil Chahal Construction is a licensed and fully insured general
              contractor serving Saskatoon, Regina, Prince Albert, and communities
              across Saskatchewan. Every project — from a small drywall repair to
              a complete commercial fit-out — is completed to Saskatchewan Building
              Code standards and is inspection-ready on schedule. We provide
              written quotes before work begins, communicate clearly at every stage,
              and do not leave a job site until the client is satisfied.
            </p>

            <Button
              variant="primary"
              href="/services"
              className="!bg-[#737373] !border-[#737373] rounded hover:!bg-[#5a5a5a] hover:!border-[#5a5a5a] self-start"
            >
              Our Services
            </Button>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
