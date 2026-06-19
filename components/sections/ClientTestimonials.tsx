/* Replace placeholder testimonials below with real client quotes before launch.
   The Review schema will automatically apply to whatever testimonials are shown here. */

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
        "Dil Chahal Constructions finished our basement from bare concrete to paint-ready in under 4 weeks. The drywall finish is flawless and the work passed building inspection the first time. Professional, on schedule, and exactly on budget.",
      itemReviewed: { "@id": `${BASE_URL}/#business` },
    },
    {
      "@type": "Review",
      "@id": `${BASE_URL}/#review-2`,
      author: { "@type": "Person", name: "Office Manager — Commercial Client, Saskatoon, SK" },
      datePublished: "2024-07-03",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "We hired Dil Chahal Constructions for a full commercial office fit-out — steel framing, drywall, and T-bar ceiling throughout. The work was inspection-ready, the crew was professional and tidy, and the finished space looks excellent. Highly recommended for commercial projects.",
      itemReviewed: { "@id": `${BASE_URL}/#business` },
    },
    {
      "@type": "Review",
      "@id": `${BASE_URL}/#review-3`,
      author: { "@type": "Person", name: "Property Owner, Willowgrove — Saskatoon, SK" },
      datePublished: "2024-05-18",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Used Dil Chahal Constructions for drywall and insulation throughout our new home build. Dilbagh and his team were knowledgeable, responsive, and delivered exceptional quality. The texturing matched our spec perfectly. Would not hesitate to use them again.",
      itemReviewed: { "@id": `${BASE_URL}/#business` },
    },
  ],
};

const stars = "★★★★★";

export default function ClientTestimonials() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <section
        aria-label="Client testimonials"
        style={{ backgroundColor: "#f4f4f4", paddingTop: "clamp(48px, 7vw, 80px)", paddingBottom: "clamp(48px, 7vw, 80px)" }}
      >
        <div className="max-w-[1140px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 500,
                color: "#E00201",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Client Reviews
            </p>
            <h2
              style={{
                fontFamily: "var(--font-roboto-sans)",
                fontSize: "clamp(26px, 3.2vw, 40px)",
                fontWeight: 700,
                color: "#111",
                marginBottom: "0",
              }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "24px" }}>
            {reviewsJsonLd["@graph"].map((review, i) => (
              <figure
                key={i}
                style={{
                  background: "#fff",
                  padding: "32px 28px",
                  margin: 0,
                  borderTop: "3px solid #E00201",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <p
                  aria-label="5 out of 5 stars"
                  style={{
                    fontFamily: "var(--font-roboto-sans)",
                    fontSize: "18px",
                    color: "#E00201",
                    margin: 0,
                    letterSpacing: "2px",
                  }}
                >
                  {stars}
                </p>
                <blockquote
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    lineHeight: "1.85",
                    color: "#555",
                    margin: 0,
                    fontStyle: "italic",
                    flex: 1,
                  }}
                >
                  &ldquo;{review.reviewBody}&rdquo;
                </blockquote>
                <figcaption
                  style={{
                    fontFamily: "var(--font-roboto-sans)",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#333",
                    borderTop: "1px solid #eee",
                    paddingTop: "12px",
                    margin: 0,
                  }}
                >
                  {review.author.name}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#777", marginBottom: "16px" }}>
              Satisfied with our work? Leave us a review on Google.
            </p>
            <a
              href="https://share.google/IPRPEsKN5rl26cugO"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                border: "1px solid #E00201",
                color: "#E00201",
                fontFamily: "var(--font-roboto-sans)",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "1px",
                padding: "10px 24px",
                textDecoration: "none",
              }}
            >
              LEAVE A GOOGLE REVIEW
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
