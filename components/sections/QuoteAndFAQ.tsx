"use client";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AnimateIn from "@/components/ui/AnimateIn";

export default function QuoteAndFAQ() {
  return (
    <section id="contact" style={{ backgroundColor: "rgb(245,245,245)" }}>
      <div className="max-w-[1140px] mx-auto" style={{ paddingBottom: "150px" }}>
        <div className="flex flex-col md:flex-row">

          {/* Left — WP: 7671b54 bounceIn */}
          <AnimateIn
            variant="bounceIn"
            className="flex-1"
            style={{
              backgroundColor: "rgb(139,0,1)",
              padding: "64px",
            }}
          >
            {/* H2 "Request a Quote" */}
            <h2
              id="quote-form-title"
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

            <form
              className="flex flex-col gap-5"
              aria-labelledby="quote-form-title"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label htmlFor="quote-name" className="sr-only">Your name</label>
                <input
                  id="quote-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  className="w-full focus:outline-none focus:ring-2 focus:ring-white/50"
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
              </div>

              <div>
                <label htmlFor="quote-email" className="sr-only">Email address</label>
                <input
                  id="quote-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  className="w-full focus:outline-none focus:ring-2 focus:ring-white/50"
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
              </div>

              <div>
                <label htmlFor="quote-subject" className="sr-only">Subject</label>
                <input
                  id="quote-subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full focus:outline-none focus:ring-2 focus:ring-white/50"
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
              </div>

              <div>
                <label htmlFor="quote-message" className="sr-only">Message</label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full focus:outline-none resize-none focus:ring-2 focus:ring-white/50"
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
              </div>

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
          </AnimateIn>

          {/* Right — WP: d118cc3 fadeInRight */}
          <AnimateIn
            variant="fadeInRight"
            className="flex-1"
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0px 0px 0px 100px" }}
          >
            <h3
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
            </h3>

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
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
