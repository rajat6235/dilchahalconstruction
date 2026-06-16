export default function TransformCommunities() {
  return (
    <section className="bg-white pt-[100px] pb-[50px]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left */}
          <div className="flex-[0_0_55%]">
            <p
              className="text-[#E00201] text-[13px] font-[600] uppercase tracking-widest mb-3"
              style={{ fontFamily: "var(--font-subheading)" }}
            >
              Building Strong Foundations
            </p>
            <h2
              className="text-black font-[700] leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 3vw, 40px)",
              }}
            >
              Transform Communities Across the Saskatchewan
            </h2>
          </div>

          {/* Right */}
          <div className="flex-1 pt-8 md:pt-10">
            <p
              className="text-[#7A7A7A] text-[15px] leading-relaxed"
              style={{ fontFamily: "var(--font-body)", wordSpacing: "3px" }}
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
