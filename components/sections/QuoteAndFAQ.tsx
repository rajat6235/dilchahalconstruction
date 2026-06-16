"use client";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function QuoteAndFAQ() {
  return (
    <section id="contact" className="bg-[#2d2d2d] pb-[120px] pt-[80px]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left: Request a Quote form */}
          <div className="flex-1">
            <h2
              className="text-white font-[700] mb-8"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(24px, 2.5vw, 36px)",
              }}
            >
              Request a Quote
            </h2>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  className="block text-white/80 text-[13px] mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-[14px] focus:outline-none focus:border-[#E00201] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div>
                <label
                  className="block text-white/80 text-[13px] mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-[14px] focus:outline-none focus:border-[#E00201] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div>
                <label
                  className="block text-white/80 text-[13px] mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-[14px] focus:outline-none focus:border-[#E00201] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div>
                <label
                  className="block text-white/80 text-[13px] mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-[14px] focus:outline-none focus:border-[#E00201] transition-colors duration-200 resize-none"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#8B0001] text-white px-8 py-3 text-[15px] font-[600] hover:bg-[#E00201] transition-colors duration-300 cursor-pointer"
                  style={{ fontFamily: "var(--font-subheading)" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Right: FAQ */}
          <div className="flex-1">
            <p
              className="text-[#E00201] text-[13px] font-[600] uppercase tracking-widest mb-3"
              style={{ fontFamily: "var(--font-subheading)" }}
            >
              Learn More From
            </p>
            <h2
              className="text-white font-[700] mb-8"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(24px, 2.5vw, 36px)",
              }}
            >
              Frequently Asked Questions
            </h2>
            <FAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
