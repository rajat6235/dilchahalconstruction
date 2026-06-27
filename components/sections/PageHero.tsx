import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  currentPage?: string;
  subtitle?: string;
}

export default function PageHero({ title, currentPage, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "360px" }}
      aria-label={`${title} page header`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpeg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.76)" }}
        aria-hidden="true"
      />

      {/* Content — centred, sits below the fixed 72px Navbar */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center"
        style={{
          minHeight: "360px",
          paddingTop: "72px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center gap-2 text-white/50 text-[12px]" style={{ fontFamily: "var(--font-body)" }}>
            <li>
              <Link href="/" className="hover:text-white/80 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <span>/</span>
            </li>
            <li>
              <span className="text-[#E00201]" aria-current="page">
                {currentPage ?? title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Page title */}
        <h1
          className="text-white font-[700] leading-tight"
          style={{
            fontFamily: "var(--font-subheading)",
            fontSize: "clamp(32px, 6vw, 72px)",
            letterSpacing: "-0.3px",
            maxWidth: "100%",
          }}
        >
          {title}
        </h1>

        {/* Optional subtitle */}
        {subtitle && (
          <p
            className="mt-4 text-white/60 text-[15px] max-w-[500px] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {subtitle}
          </p>
        )}

        {/* Bottom accent line */}
        <div className="mt-8 flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#E00201]" aria-hidden="true" />
          <span className="h-[1px] w-2 bg-white/20" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
