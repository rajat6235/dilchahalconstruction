import Image from "next/image";

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  src,
  alt,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full" style={{ paddingBottom: "62.5%" }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <h3
        className="text-[18px] font-[700] text-black"
        style={{ fontFamily: "var(--font-subheading)" }}
      >
        {title}
      </h3>
      <p
        className="text-[15px] text-[#7A7A7A] leading-relaxed"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {description}
      </p>
    </div>
  );
}
