import Image from "next/image";
import Button from "@/components/ui/Button";

const renoImages = [
  { src: "/images/reno1.jpeg", alt: "House renovation 1" },
  { src: "/images/reno2.jpeg", alt: "House renovation 2" },
  { src: "/images/reno3.jpeg", alt: "House renovation 3" },
];

export default function HouseRenovations() {
  return (
    <section className="bg-white pt-[10px] pb-[80px]">
      <div className="max-w-[1140px] mx-auto px-4">
        <p
          className="text-[#E00201] text-[13px] font-[600] uppercase tracking-widest mb-10 text-center"
          style={{ fontFamily: "var(--font-subheading)" }}
        >
          House Renovations
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left: 3-image strip */}
          <div className="flex-1 grid grid-cols-3 gap-2">
            {renoImages.map((img) => (
              <div
                key={img.src}
                className="relative"
                style={{ paddingBottom: "140%" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 15vw"
                />
              </div>
            ))}
          </div>

          {/* Right: text */}
          <div className="flex-1 flex flex-col justify-center gap-5 py-4">
            <h2
              className="text-black font-[700] leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(24px, 2.5vw, 36px)",
              }}
            >
              Seamless Home Transformations
            </h2>
            <h3
              className="text-[#54595F] font-[500]"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(18px, 2vw, 26px)",
              }}
            >
              Elevate Your Home&apos;s Value and Appeal
            </h3>
            <p
              className="text-[#7A7A7A] text-[15px] leading-relaxed"
              style={{ fontFamily: "var(--font-body)", wordSpacing: "3px" }}
            >
              Transform your home with our expert renovation services. Whether
              you&apos;re looking to update a single room or undertake a
              full-scale renovation, our team delivers exceptional results that
              enhance your home&apos;s value and appeal.
            </p>
            <div>
              <Button variant="red" href="#contact">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
