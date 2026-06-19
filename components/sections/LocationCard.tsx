import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";

export default function LocationCard() {
  return (
    <section className="bg-white pb-[100px]">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* WP c31875b: fadeInUp — location card */}
        <AnimateIn
          variant="fadeInUp"
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
        </AnimateIn>

        {/* WP d14cf69: zoomIn — "View Our Office" button */}
        <AnimateIn variant="zoomIn" style={{ display: "flex", justifyContent: "center", paddingTop: "50px" }}>
          <Button
            variant="primary"
            href="/contact-us"
            className="!bg-[#737373] !border-[#737373] rounded hover:!bg-[#5a5a5a] hover:!border-[#5a5a5a]"
          >
            View Our Office
          </Button>
        </AnimateIn>
      </div>
    </section>
  );
}
