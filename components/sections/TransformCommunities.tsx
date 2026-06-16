export default function TransformCommunities() {
  return (
    <section className="bg-white pt-[100px] pb-[50px]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left — label + heading, 50% width */}
          <div className="flex-1 flex flex-col justify-start pr-0 md:pr-10">
            <p
              className="text-[#E00201] text-[14px] font-[600] uppercase tracking-widest mb-3"
              style={{ fontFamily: "var(--font-subheading)" }}
            >
              Building Strong Foundations
            </p>
            <h2
              className="text-[#242424] leading-tight"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(30px, 3vw, 36px)",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              Transform Communities Across the Saskatchewan
            </h2>
          </div>

          {/* Right — body text, vertically centered within the left column's height */}
          <div className="flex-1 flex items-center mt-8 md:mt-0">
            <p
              className="text-[#7A7A7A] leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(14px, 1.3vw, 16px)",
                textAlign: "justify",
                wordSpacing: "3px",
                marginTop: "20px",
              }}
            >
              Our mission is to build and support vibrant, sustainable communities
              throughout Saskatchewan. By working together, we aim to create
              infrastructure where everyone can thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
