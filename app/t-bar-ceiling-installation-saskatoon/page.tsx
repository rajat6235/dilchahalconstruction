import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "t-bar-ceiling-installation-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "T-Bar Ceiling Installation Saskatoon, SK | Drop Ceiling Contractor",
  description:
    "Expert T-bar (suspended/drop) ceiling installation in Saskatoon, SK — offices, retail, commercial & industrial. Acoustic, clean finish. Licensed contractor. Free quote!",
  keywords: [
    "t-bar ceiling saskatoon",
    "drop ceiling saskatoon",
    "suspended ceiling saskatoon",
    "t-bar ceiling installation saskatoon",
    "commercial ceiling saskatoon",
    "acoustic ceiling saskatoon",
    "ceiling contractor saskatoon",
    "t-grid ceiling saskatoon",
    "office ceiling installation saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "T-Bar Ceiling Installation in Saskatoon, SK | Dil Chahal Constructions Ltd.",
    description: "Professional T-bar suspended ceiling installation for offices, retail, and commercial spaces in Saskatoon, SK. Acoustic and clean finish. Free quote.",
    url: CANONICAL,
    images: [{ url: "/images/t-bar.jpeg", width: 1200, height: 630, alt: "T-bar suspended ceiling installation in commercial office space in Saskatoon, SK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "T-Bar Ceiling Saskatoon, SK | Dil Chahal Constructions",
    description: "Expert drop ceiling installation for offices, retail & commercial spaces in Saskatoon. Acoustic and clean results. Free quote.",
    images: ["/images/t-bar.jpeg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "T-Bar Ceiling Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "T-Bar Ceiling Installation in Saskatoon, SK | Dil Chahal Constructions Ltd.",
  description: "Professional T-bar suspended ceiling installation for commercial and office spaces in Saskatoon, SK.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "T-Bar Ceiling Installation Saskatoon, SK",
  description: "Expert T-bar (suspended/drop) ceiling installation for commercial, office, retail, and industrial spaces in Saskatoon, SK. Acoustic tiles, clean grid layouts, and access to above-ceiling utilities.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "T-Bar Ceiling Installation",
  areaServed: [
    { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Warman", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Martensville", addressRegion: "SK", addressCountry: "CA" },
  ],
  url: CANONICAL,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a T-bar (suspended) ceiling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A T-bar ceiling, also called a suspended or drop ceiling, consists of a metal grid system (main runners and cross tees) hung from the structural ceiling by hanger wires, into which ceiling tiles are laid. The grid creates a finished ceiling at the desired height while leaving accessible space above for HVAC ductwork, electrical conduit, plumbing, and other building systems.",
      },
    },
    {
      "@type": "Question",
      name: "What types of spaces use T-bar ceilings in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "T-bar ceilings are standard in commercial office spaces, retail stores, medical clinics, schools, warehouses, and industrial facilities throughout Saskatoon, SK. They're also used in residential basements where access to mechanical systems is desirable and a lower finished ceiling height is acceptable.",
      },
    },
    {
      "@type": "Question",
      name: "What tile sizes and ceiling heights do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard T-bar grid systems accommodate 2×2 and 2×4 ceiling tiles. We can install grids at any ceiling height to maintain required clearance above mechanical and electrical systems, meeting both code minimums and your design requirements. We advise on the layout during the free quote visit.",
      },
    },
    {
      "@type": "Question",
      name: "Do T-bar ceilings improve acoustics in commercial spaces?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Acoustic ceiling tiles used in T-bar systems have NRC (Noise Reduction Coefficient) ratings that absorb sound and reduce echo in open-plan offices, classrooms, medical clinics, and other commercial spaces in Saskatoon. We can advise on tiles with the best acoustic performance for your specific use case.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "T-Bar Ceiling Installation Saskatoon",
  heroTitle: "T-Bar Ceiling Installation in Saskatoon, SK",
  currentPage: "T-Bar Ceiling",
  intro: [
    "T-bar suspended ceilings are the practical and professional choice for commercial and industrial spaces throughout Saskatoon, SK. They conceal structural elements, HVAC ductwork, electrical conduit, and plumbing runs while providing easy access for maintenance — all behind a clean, consistent grid of acoustic tiles that reduces echo and noise. Dil Chahal Constructions installs T-bar ceiling systems with precision, ensuring level grids, consistent tile placement, and correct heights for above-ceiling mechanical clearance.",
    "We work on office fit-outs, retail spaces, medical clinics, schools, warehouses, and any commercial or industrial facility in Saskatoon and surrounding Saskatchewan communities. Our team coordinates with HVAC and electrical trades to accommodate light fixtures, diffusers, and sprinkler heads within the grid — delivering a finished ceiling that meets fire code, accessibility standards, and your design requirements.",
  ],
  benefitsHeading: "Why T-Bar Ceilings Are the Commercial Standard",
  benefits: [
    {
      title: "Accessible Utilities",
      description: "Tiles lift out for easy access to above-ceiling HVAC, electrical, and plumbing systems — essential for commercial maintenance and reducing the cost of future upgrades.",
    },
    {
      title: "Acoustic Control",
      description: "Acoustic ceiling tiles absorb sound and reduce echo in open offices, clinics, and classrooms — improving speech intelligibility and reducing fatigue in occupied spaces.",
    },
    {
      title: "Conceals Infrastructure",
      description: "Exposed ductwork, conduit runs, and structural elements are hidden behind a clean, consistent ceiling — presenting a professional appearance for any Saskatoon commercial space.",
    },
    {
      title: "Fast Installation",
      description: "Compared to drywall ceilings, T-bar systems install quickly, allowing other trades to begin finishing work sooner and getting your commercial space ready on schedule.",
    },
  ],
  processSteps: [
    {
      title: "Height Planning & Layout",
      description: "We establish the finished ceiling height to ensure required clearance above mechanical systems, then calculate the grid layout for the best tile pattern and module alignment.",
    },
    {
      title: "Wall Angle Installation",
      description: "Perimeter wall angles are levelled and fastened to all surrounding walls as the reference for the finished ceiling height across the entire space.",
    },
    {
      title: "Main Runner Installation",
      description: "Main T-runners are hung from the structural ceiling on hanger wires at 4-foot centres, levelled precisely using string lines to ensure a flat plane across the entire area.",
    },
    {
      title: "Cross Tee & Grid Completion",
      description: "2-foot and 4-foot cross tees are inserted perpendicular to the main runners to complete the grid pattern, with cut pieces fitted neatly against all walls.",
    },
    {
      title: "Tile Installation & Lighting",
      description: "Ceiling tiles are set into the completed grid. Lighting fixtures, diffusers, sprinkler heads, and other penetrations are integrated as the final step before inspection.",
    },
  ],
  faqs: [
    {
      question: "What is a T-bar suspended ceiling?",
      answer: "A T-bar (or drop/suspended) ceiling is a metal grid system hung from the structural ceiling by wires, with ceiling tiles set into the grid. It creates a finished ceiling that conceals utilities and provides easy access above for HVAC, electrical, and plumbing maintenance.",
    },
    {
      question: "What types of spaces use T-bar ceilings?",
      answer: "T-bar ceilings are standard in commercial offices, retail stores, medical clinics, schools, warehouses, and industrial facilities in Saskatoon. They're also used in residential basements where access to mechanical systems is needed.",
    },
    {
      question: "What tile sizes and heights do you work with?",
      answer: "We install standard 2×2 and 2×4 grid systems at any finished ceiling height. We plan the layout during the free quote to ensure mechanical clearances are met and the grid module is aesthetically balanced.",
    },
    {
      question: "Do T-bar ceilings improve acoustics?",
      answer: "Yes. Acoustic ceiling tiles in T-bar systems have NRC ratings that absorb sound and reduce echo in open offices, clinics, and classrooms in Saskatoon. We can recommend tiles with the best acoustic performance for your specific use.",
    },
  ],
  relatedServices: [
    { href: "/steel-framing-saskatoon", label: "Steel Framing" },
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/bulkhead-ceiling-saskatoon", label: "Bulkhead Ceiling" },
    { href: "/commercial-renovations-saskatoon", label: "Commercial Renovations" },
  ],
  imageSrc: "/images/t-bar.jpeg",
  imageAlt: "Professional T-bar suspended ceiling installation for a commercial office space in Saskatoon, SK by Dil Chahal Constructions",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function TBarCeilingPage() {
  return <ServiceLandingLayout {...data} />;
}
