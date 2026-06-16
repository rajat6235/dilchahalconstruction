import Image from "next/image";

const services = [
  "Drywall",
  "GlassRoc",
  "Steel Frame",
  "T-Bar",
  "Insulation",
  "Bulkhead Ceiling",
  "Mudding",
  "Texture",
];

const projects = ["Residential", "Commercial", "Industrial", "House Renovations"];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-[1140px] mx-auto px-4 py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Logo + tagline */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/logo.png"
              alt="Dil Chahal Constructions Ltd."
              width={160}
              height={55}
              style={{ height: "55px", width: "auto" }}
              className="object-contain"
            />
            <p
              className="text-[14px] text-white/70 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Dil Chahal Construction Ltd. proudly serves Saskatoon and
              surrounding areas with expert drywall and construction services.
            </p>
          </div>

          {/* Col 2: Our Services */}
          <div>
            <h4
              className="text-[16px] font-[700] mb-5 text-[#E00201]"
              style={{ fontFamily: "var(--font-subheading)" }}
            >
              Our Services
            </h4>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[14px] text-white/70 hover:text-[#E00201] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Projects + Contact */}
          <div className="flex flex-col gap-8">
            <div>
              <h4
                className="text-[16px] font-[700] mb-5 text-[#E00201]"
                style={{ fontFamily: "var(--font-subheading)" }}
              >
                Projects
              </h4>
              <ul className="flex flex-col gap-2">
                {projects.map((p) => (
                  <li key={p}>
                    <a
                      href="#latest-works"
                      className="text-[14px] text-white/70 hover:text-[#E00201] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="text-[16px] font-[700] mb-5 text-[#E00201]"
                style={{ fontFamily: "var(--font-subheading)" }}
              >
                Contact Us
              </h4>
              <ul
                className="flex flex-col gap-2 text-[14px] text-white/70"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>+1 (306) 717-1994</li>
                <li>Unit 107, 1222 Alberta Ave</li>
                <li>Saskatoon, SK S7K 1R4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1140px] mx-auto px-4 py-5 text-center">
          <p
            className="text-[13px] text-white/50"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Dil Chahal Constructions Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
