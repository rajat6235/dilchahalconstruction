export default function TransformCommunities() {
  return (
    <section className="bg-white" style={{ padding: "100px 0px 50px" }}>
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left — label + heading, 50% width */}
          <div className="flex-1 flex flex-col justify-start pr-0 md:pr-10">
            {/* H4 label — WP: Montserrat 24px weight 300 #E00201 lineHeight 28.8px */}
            <h4
              className="mb-3"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "24px",
                fontWeight: 300,
                color: "#E00201",
                lineHeight: "28.8px",
                letterSpacing: "normal",
              }}
            >
              Building Strong Foundations
            </h4>
            {/* H2 — WP: Montserrat 36px weight 600 #242424 letterSpacing 0.5px lineHeight 46.8px */}
            <h2
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(30px, 3vw, 36px)",
                fontWeight: 600,
                color: "#242424",
                letterSpacing: "0.5px",
                lineHeight: "46.8px",
              }}
            >
              Transform Communities Across the Saskatchewan
            </h2>
          </div>

          {/* Right — body text — WP: Open Sans 16px weight 500 #7A7A7A lineHeight 24.75px */}
          <div className="flex-1 flex items-center mt-8 md:mt-0">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                fontWeight: 500,
                color: "#7A7A7A",
                lineHeight: "24.75px",
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
