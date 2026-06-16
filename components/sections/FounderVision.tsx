import Button from "@/components/ui/Button";

export default function FounderVision() {
  return (
    <section className="bg-white pb-[60px]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Left column — photo card, no overlay */}
          <div className="flex-1">
            <div
              className="relative flex flex-col justify-end"
              style={{
                backgroundImage: "url('/images/founder.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                margin: "10px",
                minHeight: "500px",
                paddingBottom: "50px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              {/* Dilbagh Singh Chahal / CEO — white text over dark suit */}
              <div className="relative z-10">
                <h3
                  className="text-white font-[700]"
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "clamp(16px, 1.6vw, 22px)",
                    marginBottom: "0px",
                  }}
                >
                  Dilbagh Singh Chahal
                </h3>
                <p
                  className="text-white text-[14px]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  CEO
                </p>
              </div>
            </div>
          </div>

          {/* Right column — text content */}
          <div className="flex-1 md:pl-4">
            {/* "Founder's Vision" — red, Merriweather 40px 700 */}
            <h2
              className="leading-tight mb-5"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 3.2vw, 40px)",
                fontWeight: 700,
                color: "#E00201",
                letterSpacing: "0.5px",
              }}
            >
              Founder&apos;s Vision
            </h2>

            <p
              className="text-[#7A7A7A] leading-relaxed mb-6"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(14px, 1.3vw, 16px)",
                textAlign: "justify",
              }}
            >
              Under the visionary leadership of Dilbagh Singh Chahal, our founder
              and CEO, Dil Chahal Constructions aims to set new benchmarks in the
              industry. Dil Chahal&apos;s forward-thinking approach and unwavering
              commitment to quality have been the driving forces behind our
              innovative solutions and exceptional service standards.
            </p>

            {/* "Why Choose Us?" — Montserrat 36px weight 500 */}
            <h3
              className="text-black leading-tight mb-5"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(24px, 2.8vw, 36px)",
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
            >
              Why Choose Us?
            </h3>

            <p
              className="text-[#7A7A7A] leading-relaxed mb-8"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(14px, 1.3vw, 16px)",
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
              className="!bg-[#737373] !border-[#737373] rounded hover:!bg-[#5a5a5a] hover:!border-[#5a5a5a]"
            >
              Our Services
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
