import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  href?: string;
  priority?: boolean;
}

export default function ServiceCard({
  src,
  alt,
  title,
  description,
  href,
  priority = false,
}: ServiceCardProps) {
  const content = (
    <>
      {/* Image with zoom */}
      <div
        className="relative w-full overflow-hidden img-zoom-container"
        style={{ paddingBottom: "66.5%" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
        />
        {/* Hover tint */}
        <div
          className="absolute inset-0 bg-[#E00201]/0 group-hover:bg-[#E00201]/12 transition-all duration-500"
          aria-hidden="true"
        />
      </div>

      {/* Text */}
      <div className="pt-5 pb-2">
        <h3
          className="text-[#0a0a0a] mb-2 group-hover:text-[#E00201] transition-colors duration-300"
          style={{
            fontFamily: "var(--font-subheading)",
            fontSize: "19px",
            fontWeight: 700,
            letterSpacing: "0.1px",
            lineHeight: "1.35",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 400,
            color: "#6B7280",
            lineHeight: "1.7",
          }}
        >
          {description}
        </p>
        {href && (
          <span
            className="inline-flex items-center gap-1.5 mt-4 text-[11.5px] font-[700] text-[#E00201] tracking-[0.8px] uppercase group-hover:gap-3 transition-all duration-300"
            style={{ fontFamily: "var(--font-subheading)" }}
            aria-hidden={!href}
          >
            Learn More
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path
                d="M2 5.5h7M6.5 2.5l2.5 3-2.5 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group flex flex-col card-hover"
        aria-label={`${title} — learn more`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="group flex flex-col card-hover">
      {content}
    </div>
  );
}
