export default function AboutFounder() {
  return (
    <section id="about" className="bg-white pt-[10px] pb-[60px]">
      <div className="max-w-[685px] mx-auto px-4 text-center">
        <p
          className="text-[#E00201] text-[13px] font-[600] uppercase tracking-widest mb-3"
          style={{ fontFamily: "var(--font-subheading)" }}
        >
          About Founder
        </p>
        <h2
          className="text-black font-[700] leading-tight"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(28px, 3vw, 40px)",
          }}
        >
          We Are Leading Company In The Saskatchewan
        </h2>
      </div>
    </section>
  );
}
