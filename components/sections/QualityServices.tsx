import ServiceCard from "@/components/ui/ServiceCard";
import AnimateIn from "@/components/ui/AnimateIn";

const services = [
  {
    src: "/images/drywall.jpg",
    alt: "Professional drywall installation service in Saskatoon, SK by Dil Chahal Construction",
    title: "Drywall",
    description: "Quality drywall services providing strong and even surfaces for any residential or commercial space.",
    href: "/drywall-installation-saskatoon",
  },
  {
    src: "/images/work7.jpeg",
    alt: "GlasRoc sheathing installation for fire, moisture, and mold resistance in Saskatoon",
    title: "GlassRoc",
    description: "Superior fire, moisture, and mold resistance for durable exterior walls and roofs.",
    href: "/glassroc-sheathing-saskatoon",
  },
  {
    src: "/images/steel-frame.jpeg",
    alt: "Steel framing construction for commercial and residential buildings in Saskatoon, SK",
    title: "Steel Frame",
    description: "Durable steel stud framing that provides excellent structural support for any build.",
    href: "/steel-framing-saskatoon",
  },
  {
    src: "/images/t-bar.jpeg",
    alt: "T-bar ceiling installation by certified ceiling contractor in Saskatoon",
    title: "T-Bar Ceiling",
    description: "Superior T-Bar ceiling systems for a modern, clean, and professional appearance.",
    href: "/t-bar-ceiling-installation-saskatoon",
  },
  {
    src: "/images/work5.jpeg",
    alt: "Insulation installation service for energy-efficient homes and buildings in Saskatoon, SK",
    title: "Insulation",
    description: "Top-tier insulation to keep your property energy-efficient and comfortable year-round.",
    href: "/insulation-saskatoon",
  },
  {
    src: "/images/bullcat2.jpeg",
    alt: "Custom bulkhead ceiling construction adding dimension and style in Saskatoon",
    title: "Bulkhead Ceiling",
    description: "Expertly crafted bulkhead ceilings that add dimension, style, and functionality.",
    href: "/bulkhead-ceiling-saskatoon",
  },
  {
    src: "/images/quality-right-bg.jpeg",
    alt: "Mudding and taping drywall finishing service for smooth surfaces in Saskatoon, SK",
    title: "Mudding & Taping",
    description: "Seamless mudding and taping for a smooth, impeccable finish on all surfaces.",
    href: "/mudding-taping-saskatoon",
  },
  {
    src: "/images/team2.jpeg",
    alt: "Interior wall texturing service for residential and commercial spaces in Saskatoon",
    title: "Texturing",
    description: "Stylish texturing techniques to enhance the visual appeal of your interiors.",
    href: "/texturing-saskatoon",
  },
];

export default function QualityServices() {
  return (
    <section id="services" className="bg-white" style={{ padding: "clamp(72px, 10vw, 120px) 0" }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">

        {/* Section header */}
        <AnimateIn variant="fadeInLeft">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <p
                className="mb-3"
                style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#E00201",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                Comprehensive Solutions
              </p>
              <h2
                className="text-[#0a0a0a]"
                style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 700,
                  letterSpacing: "-0.3px",
                  lineHeight: "1.15",
                }}
              >
                Quality Services
              </h2>
            </div>
            <p
              className="max-w-[360px]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14.5px",
                color: "#6B7280",
                lineHeight: "1.7",
              }}
            >
              From drywall to full renovations — every service delivered to Saskatchewan Building Code standards.
            </p>
          </div>
        </AnimateIn>

        {/* Services grid */}
        <AnimateIn variant="slideInUp" delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {services.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
