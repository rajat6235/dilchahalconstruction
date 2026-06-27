/* Replace placeholder testimonials with real client quotes before launch. */

const BASE_URL = "https://dilchahalconstruction.com";

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Review",
      "@id": `${BASE_URL}/#review-1`,
      author: { "@type": "Person", name: "Homeowner, Stonebridge — Saskatoon, SK" },
      datePublished: "2024-09-12",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Dil Chahal Construction finished our basement from bare concrete to paint-ready in under 4 weeks. The drywall finish is flawless and the work passed building inspection the first time. Professional, on schedule, and exactly on budget.",
      itemReviewed: { "@id": `${BASE_URL}/#business` },
    },
    {
      "@type": "Review",
      "@id": `${BASE_URL}/#review-2`,
      author: { "@type": "Person", name: "Office Manager — Commercial Client, Saskatoon, SK" },
      datePublished: "2024-07-03",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "We hired Dil Chahal Construction for a full commercial office fit-out — steel framing, drywall, and T-bar ceiling throughout. The work was inspection-ready, the crew was professional and tidy, and the finished space looks excellent. Highly recommended for commercial projects.",
      itemReviewed: { "@id": `${BASE_URL}/#business` },
    },
    {
      "@type": "Review",
      "@id": `${BASE_URL}/#review-3`,
      author: { "@type": "Person", name: "Property Owner, Willowgrove — Saskatoon, SK" },
      datePublished: "2024-05-18",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Used Dil Chahal Construction for drywall and insulation throughout our new home build. Dilbagh and his team were knowledgeable, responsive, and delivered exceptional quality. The texturing matched our spec perfectly. Would not hesitate to use them again.",
      itemReviewed: { "@id": `${BASE_URL}/#business` },
    },
  ],
};

export default function ClientTestimonials() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <section
        aria-label="Client testimonials"
        style={{
          backgroundColor: "#F9FAFB",
          paddingTop: "clamp(56px, 8vw, 96px)",
          paddingBottom: "clamp(56px, 8vw, 96px)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">

          {/* Header */}
          <div className="text-center mb-14">
            <p
              className="mb-3"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "11px",
                fontWeight: 700,
                color: "#E00201",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Client Reviews
            </p>
            <h2
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(26px, 3.2vw, 40px)",
                fontWeight: 700,
                color: "#0a0a0a",
                letterSpacing: "-0.3px",
                lineHeight: "1.2",
              }}
            >
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsJsonLd["@graph"].map((review, i) => (
              <figure
                key={i}
                className="flex flex-col card-hover"
                style={{
                  background: "#fff",
                  padding: "32px 28px",
                  margin: 0,
                  borderTop: "3px solid #E00201",
                  borderRadius: "2px",
                  gap: "16px",
                }}
              >
                {/* Stars */}
                <p
                  aria-label="5 out of 5 stars"
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "16px",
                    color: "#E00201",
                    margin: 0,
                    letterSpacing: "3px",
                  }}
                  role="img"
                >
                  ★★★★★
                </p>

                {/* Quote */}
                <blockquote
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    lineHeight: "1.85",
                    color: "#4B5563",
                    margin: 0,
                    fontStyle: "italic",
                    flex: 1,
                  }}
                >
                  &ldquo;{review.reviewBody}&rdquo;
                </blockquote>

                {/* Author */}
                <figcaption
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "12.5px",
                    fontWeight: 700,
                    color: "#111827",
                    borderTop: "1px solid #F3F4F6",
                    paddingTop: "14px",
                    margin: 0,
                    letterSpacing: "0.2px",
                  }}
                >
                  {review.author.name}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Google CTA */}
          <div className="text-center mt-12">
            <p
              className="mb-5"
              style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", color: "#9CA3AF" }}
            >
              Satisfied with our work? We&apos;d love a review on Google.
            </p>
            <a
              href="https://share.google/IPRPEsKN5rl26cugO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-[#E00201] text-[#E00201] hover:bg-[#E00201] hover:text-white transition-all duration-300 text-[11.5px] font-[700] tracking-[1.5px] uppercase px-6 py-3 rounded-[2px]"
              style={{ fontFamily: "var(--font-subheading)" }}
            >
              Leave a Google Review
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
