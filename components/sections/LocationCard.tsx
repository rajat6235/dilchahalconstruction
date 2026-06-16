import Button from "@/components/ui/Button";

export default function LocationCard() {
  return (
    <section className="bg-white pb-[100px]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="border border-[#e0e0e0] rounded p-8 mb-8 max-w-[600px]">
          <p
            className="text-black font-[700] text-[20px] mb-1"
            style={{ fontFamily: "var(--font-subheading)" }}
          >
            Saskatchewan,Canada
          </p>
          <p
            className="text-[#7A7A7A] text-[14px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Unit 107, 1222 Alberta Ave, Saskatoon, SK S7K 1R4
          </p>
        </div>
        <div>
          <Button variant="primary" href="#">
            View Our Office
          </Button>
        </div>
      </div>
    </section>
  );
}
