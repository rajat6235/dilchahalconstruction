import Image from "next/image";

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  /** Pass true for above-the-fold cards to eagerly load the image (LCP) */
  priority?: boolean;
}

export default function ServiceCard({
  src,
  alt,
  title,
  description,
  priority = false,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col">
      {/* WP: image is 284×189px (aspect ~1.5:1), top-position layout */}
      <div className="relative w-full" style={{ paddingBottom: "66.5%" }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
        />
      </div>
      {/* WP: Montserrat 26px weight 700 #000000 letterSpacing 0.2px lineHeight 33.8px */}
      <h3
        className="text-black mt-4 mb-2"
        style={{
          fontFamily: "var(--font-subheading)",
          fontSize: "26px",
          fontWeight: 700,
          letterSpacing: "0.2px",
          lineHeight: "33.8px",
        }}
      >
        {title}
      </h3>
      {/* WP: Open Sans 16px weight 500 #7A7A7A lineHeight 24.75px */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          fontWeight: 500,
          color: "#7A7A7A",
          lineHeight: "24.75px",
        }}
      >
        {description}
      </p>
    </div>
  );
}
