import Button from "@/components/ui/Button";

export default function LocationCard() {
  return (
    <section className="bg-white pb-[100px]">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Card — full container width, 10px margin, 50px padding (30px on small screens) */}
        <div
          className="p-[30px] md:p-[50px]"
          style={{
            border: "1px solid #E1E1E1",
            margin: "10px",
          }}
        >
          <h3
            className="text-black mb-[7px]"
            style={{
              fontFamily: "var(--font-subheading)",
              fontSize: "clamp(22px, 2vw, 26px)",
              fontWeight: 700,
            }}
          >
            Saskatchewan,Canada
          </h3>
          <p
            className="text-[#7A7A7A]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.2vw, 16px)",
            }}
          >
            Unit 107, 1222 Alberta Ave, Saskatoon, SK S7K 1R4
          </p>
        </div>

        {/* Button — centered, 50px top spacing */}
        <div className="flex justify-center" style={{ paddingTop: "50px" }}>
          <Button
            variant="primary"
            href="#contact"
            className="!bg-[#737373] !border-[#737373] rounded hover:!bg-[#5a5a5a] hover:!border-[#5a5a5a]"
          >
            View Our Office
          </Button>
        </div>
      </div>
    </section>
  );
}
