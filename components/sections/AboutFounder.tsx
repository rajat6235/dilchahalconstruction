export default function AboutFounder() {
  return (
    <section id="about" className="bg-white pt-[100px] pb-[60px]">
      <div className="max-w-[1140px] mx-auto px-4 text-center">
        {/* h4 — Montserrat weight 300, red, small uppercase */}
        <p
          className="text-[#E00201] font-[300] tracking-widest mb-3"
          style={{
            fontFamily: "var(--font-subheading)",
            fontSize: "clamp(13px, 1.1vw, 16px)",
          }}
        >
          About Founder
        </p>

        {/* h2 — Montserrat 36px weight 500, ddc72f6 global type, color #242424 */}
        <h2
          className="text-[#242424] leading-tight"
          style={{
            fontFamily: "var(--font-subheading)",
            fontSize: "clamp(30px, 3vw, 36px)",
            fontWeight: 500,
            letterSpacing: "0.5px",
          }}
        >
          We Are Leading Company In The Saskatchewan
        </h2>
      </div>
    </section>
  );
}
