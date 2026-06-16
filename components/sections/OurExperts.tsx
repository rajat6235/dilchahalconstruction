import Image from "next/image";

export default function OurExperts() {
  return (
    <section className="bg-white pt-[20px] pb-[60px]">
      <div className="max-w-[1140px] mx-auto px-4">
        <p
          className="text-[#E00201] text-[13px] font-[600] uppercase tracking-widest mb-2"
          style={{ fontFamily: "var(--font-subheading)" }}
        >
          The Team
        </p>
        <h2
          className="text-black font-[700] mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(28px, 3vw, 40px)",
          }}
        >
          Our Experts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full" style={{ paddingBottom: "60%" }}>
            <Image
              src="/images/work4.jpeg"
              alt="Dil Chahal Construction team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative w-full" style={{ paddingBottom: "60%" }}>
            <Image
              src="/images/work6.jpeg"
              alt="Dil Chahal Construction crew"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
