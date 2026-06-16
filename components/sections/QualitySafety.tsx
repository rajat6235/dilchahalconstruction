import { type ReactNode } from "react";
import Button from "@/components/ui/Button";

function IconRecycle() {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
      <path d="M184.561 261.903c3.232 13.997-12.123 24.635-24.068 17.168l-40.736-25.455-50.867 81.402C55.606 356.273 70.96 384 96.012 384H148c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H96.115c-75.334 0-121.302-83.048-81.408-146.88l50.822-81.388-40.725-25.448c-12.081-7.547-8.966-25.961 4.879-29.158l110.237-25.45c8.611-1.988 17.201 3.381 19.189 11.99l25.452 110.237zm98.561-182.915l41.289 66.076-40.74 25.457c-12.051 7.528-9 25.953 4.879 29.158l110.237 25.45c8.672 1.999 17.215-3.438 19.189-11.99l25.45-110.237c3.197-13.844-11.99-24.719-24.068-17.168l-40.687 25.424-41.263-66.082c-37.521-60.033-125.209-60.171-162.816 0l-17.963 28.766c-3.51 5.62-1.8 13.021 3.82 16.533l33.919 21.195c5.62 3.512 13.024 1.803 16.536-3.817l17.961-28.743c12.712-20.341 41.973-19.676 54.257-.022zM497.288 301.12l-27.515-44.065c-3.511-5.623-10.916-7.334-16.538-3.821l-33.861 21.159c-5.62 3.512-7.33 10.915-3.818 16.536l27.564 44.112c13.257 21.211-2.057 48.96-27.136 48.96H320V336.02c0-14.213-17.242-21.383-27.313-11.313l-80 79.981c-6.249 6.248-6.249 16.379 0 22.627l80 79.989C302.689 517.308 320 510.3 320 495.989V448h95.88c75.274 0 121.335-82.997 81.408-146.88z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
      <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" />
    </svg>
  );
}

function IconDesktop() {
  return (
    <svg aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
      <path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z" />
    </svg>
  );
}

function IconPencilRuler() {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
      <path d="M109.46 244.04l134.58-134.56-44.12-44.12-61.68 61.68a7.919 7.919 0 0 1-11.21 0l-11.21-11.21c-3.1-3.1-3.1-8.12 0-11.21l61.68-61.68-33.64-33.65C131.47-3.1 111.39-3.1 99 9.29L9.29 99c-12.38 12.39-12.39 32.47 0 44.86l100.17 100.18zm388.47-116.8c18.76-18.76 18.75-49.17 0-67.93l-45.25-45.25c-18.76-18.76-49.18-18.76-67.95 0l-46.02 46.01 113.2 113.2 46.02-46.03zM316.08 82.71l-297 296.96L.32 487.11c-2.53 14.49 10.09 27.11 24.59 24.56l107.45-18.84L429.28 195.9 316.08 82.71zm186.63 285.43l-33.64-33.64-61.68 61.68c-3.1 3.1-8.12 3.1-11.21 0l-11.21-11.21c-3.09-3.1-3.09-8.12 0-11.21l61.68-61.68-44.14-44.14L267.93 402.5l100.21 100.2c12.39 12.39 32.47 12.39 44.86 0l89.71-89.7c12.39-12.39 12.39-32.47 0-44.86z" />
    </svg>
  );
}

const features: { icon: ReactNode; label: string }[] = [
  { icon: <IconRecycle />, label: "Sustainablility" },
  { icon: <IconClock />, label: "Project On Time" },
  { icon: <IconDesktop />, label: "Modern Technology" },
  { icon: <IconPencilRuler />, label: "Latest Designs" },
];

export default function QualitySafety() {
  return (
    <section className="w-full flex flex-col md:flex-row" style={{ minHeight: "600px" }}>
      {/* Left column */}
      <div
        className="relative flex-1 flex items-center p-10 md:p-16"
        style={{ minHeight: "400px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/image-1-min.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-[480px]">
          <p
            className="text-[#E00201] text-[13px] font-[600] uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-subheading)" }}
          >
            Quality and Safety
          </p>
          <h2
            className="text-white font-[700] leading-tight mb-5"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 3vw, 42px)",
            }}
          >
            Committed to Safe and Healthy Construction Practices
          </h2>
          <p
            className="text-white/80 text-[15px] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our commitment to safety is unwavering. From planning to execution,
            we implement rigorous safety protocols and health practices to protect
            everyone involved.
          </p>
          <Button
            variant="primary"
            href="#contact"
            className="!bg-[#737373] !border-[#737373] rounded hover:!bg-[#5a5a5a] hover:!border-[#5a5a5a]"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Right column */}
      <div
        className="relative flex-1 flex items-center p-10 md:p-16"
        style={{ minHeight: "400px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/image-2-min.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#8B0001]/75" />
        <div className="relative z-10 max-w-[480px]">
          <h2
            className="text-white font-[700] leading-tight mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(24px, 2.5vw, 36px)",
            }}
          >
            Dedicated to Superior Construction Standards
          </h2>
          <p
            className="text-white/85 text-[15px] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Quality is at the core of our construction philosophy. From planning
            to completion, we maintain stringent quality control measures to
            ensure that every structure we build stands the test of time.
          </p>
          <ul className="flex flex-col gap-3">
            {features.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-3 text-white text-[15px] font-[500]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="flex-shrink-0 flex items-center justify-center w-[20px] text-[18px]">{f.icon}</span>
                {f.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
