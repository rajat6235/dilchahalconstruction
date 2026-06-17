"use client";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function QuoteAndFAQ() {
  return (
    // WP: section bg #F5F5F5, 728px height
    <section id="contact" style={{ backgroundColor: "rgb(245,245,245)" }}>
      <div className="max-w-[1140px] mx-auto" style={{ paddingBottom: "150px" }}>
        <div className="flex flex-col md:flex-row">

          {/* Left — WP: bg #8B0001, 570px wide, 688px height, padding 64px */}
          <div
            className="flex-1"
            style={{
              backgroundColor: "rgb(139,0,1)",
              padding: "64px",
            }}
          >
            {/* H2 "Request a Quote" — WP: Montserrat 36px weight 500 white lineHeight 46.8px */}
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(24px, 2.5vw, 36px)",
                fontWeight: 500,
                color: "rgb(255,255,255)",
                lineHeight: "46.8px",
                letterSpacing: "0.5px",
              }}
            >
              Request a Quote
            </h2>

            {/* Subtitle — WP: Open Sans 16px white */}
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(255,255,255)",
                lineHeight: "24.75px",
              }}
            >
              Ready to Work Together? Build a project with us!
            </p>

            {/* Form — WP: white bg inputs, 16px, borderRadius 3px */}
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full focus:outline-none"
                style={{
                  backgroundColor: "rgb(255,255,255)",
                  border: "1px solid rgba(0,0,0,0.25)",
                  borderRadius: "3px",
                  color: "rgba(0,0,0,0.7)",
                  fontSize: "16px",
                  fontFamily: "var(--font-body)",
                  padding: "10px 14px",
                }}
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full focus:outline-none"
                style={{
                  backgroundColor: "rgb(255,255,255)",
                  border: "1px solid rgba(0,0,0,0.25)",
                  borderRadius: "3px",
                  color: "rgba(0,0,0,0.7)",
                  fontSize: "16px",
                  fontFamily: "var(--font-body)",
                  padding: "10px 14px",
                }}
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full focus:outline-none"
                style={{
                  backgroundColor: "rgb(255,255,255)",
                  border: "1px solid rgba(0,0,0,0.25)",
                  borderRadius: "3px",
                  color: "rgba(0,0,0,0.7)",
                  fontSize: "16px",
                  fontFamily: "var(--font-body)",
                  padding: "10px 14px",
                }}
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full focus:outline-none resize-none"
                style={{
                  backgroundColor: "rgb(255,255,255)",
                  border: "1px solid rgba(0,0,0,0.25)",
                  borderRadius: "3px",
                  color: "rgba(0,0,0,0.7)",
                  fontSize: "16px",
                  fontFamily: "var(--font-body)",
                  padding: "10px 14px",
                }}
              />
              {/* Submit — WP: bg #737373, white, 17px weight 500, "SEND MESSAGE" */}
              <div>
                <button
                  type="submit"
                  className="cursor-pointer hover:bg-[#5a5a5a] transition-colors duration-300"
                  style={{
                    backgroundColor: "rgb(115,115,115)",
                    color: "rgb(255,255,255)",
                    fontSize: "17px",
                    fontWeight: 500,
                    fontFamily: "var(--font-subheading)",
                    padding: "12px 24px",
                    letterSpacing: "normal",
                    border: "none",
                    borderRadius: "3px",
                  }}
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

          {/* Right — WP: transparent bg (#F5F5F5 inherited), 570px wide, padding 0px 0px 0px 100px, justify-center */}
          <div
            className="flex-1"
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0px 0px 0px 100px" }}
          >
            {/* H4 "Learn More From" — WP: Montserrat 24px weight 600 #E00201 */}
            <h4
              className="mb-3"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "24px",
                fontWeight: 600,
                color: "#E00201",
                lineHeight: "28.8px",
                letterSpacing: "normal",
              }}
            >
              Learn More From
            </h4>

            {/* H2 "Frequently Asked Questions" — WP: Montserrat 36px weight 500 #000000 lineHeight 46.8px */}
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(24px, 2.5vw, 36px)",
                fontWeight: 500,
                color: "#000000",
                lineHeight: "46.8px",
                letterSpacing: "0.5px",
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
