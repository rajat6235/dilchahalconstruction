import Image from "next/image";
import Button from "@/components/ui/Button";

export default function FounderVision() {
  return (
    <section className="bg-white pb-[60px]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: founder photo */}
          <div className="flex-[0_0_auto] w-full md:w-[280px]">
            <div className="relative w-full" style={{ paddingBottom: "120%" }}>
              <Image
                src="/images/founder.jpeg"
                alt="Dilbagh Singh Chahal, CEO"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>
            <div className="mt-3 text-center">
              <p
                className="text-black font-[700] text-[15px]"
                style={{ fontFamily: "var(--font-subheading)" }}
              >
                Dilbagh Singh Chahal
              </p>
              <p
                className="text-[#7A7A7A] text-[13px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                CEO
              </p>
            </div>
          </div>

          {/* Right: text */}
          <div className="flex-1">
            <p
              className="text-[#E00201] text-[13px] font-[600] uppercase tracking-widest mb-3"
              style={{ fontFamily: "var(--font-subheading)" }}
            >
              Founder&apos;s Vision
            </p>
            <h2
              className="text-black font-[700] leading-tight mb-5"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(24px, 2.5vw, 36px)",
              }}
            >
              Why Choose Us?
            </h2>
            <p
              className="text-[#7A7A7A] text-[15px] leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-body)", wordSpacing: "3px" }}
            >
              Under the visionary leadership of Dilbagh Singh Chahal, our founder
              and CEO, Dil Chahal Constructions Ltd. has set new benchmarks in
              the industry. Our forward-thinking approach and unwavering
              commitment to excellence have earned us the trust of countless
              satisfied clients.
            </p>
            <p
              className="text-[#7A7A7A] text-[15px] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", wordSpacing: "3px" }}
            >
              We combine years of hands-on experience with modern technology and
              the highest performance. As your trusted construction partner in
              Saskatchewan, we are your premier partner in excellence.
            </p>
            <Button variant="primary" href="#services">
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
