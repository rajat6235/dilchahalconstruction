import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "mudding-taping-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Mudding & Taping Saskatoon, SK | Drywall Joint Finishing Contractor",
  description:
    "Professional mudding and taping in Saskatoon, SK — seamless drywall joints, smooth finishes, and paint-ready surfaces. Residential & commercial. Licensed contractor. Free quote!",
  keywords: [
    "mudding taping saskatoon",
    "drywall mudding saskatoon",
    "drywall taping saskatoon",
    "drywall joint compound saskatoon",
    "drywall finishing saskatoon",
    "mudding taping contractor saskatoon",
    "commercial mudding saskatoon",
    "residential mudding taping saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Mudding & Taping in Saskatoon, SK | Dil Chahal Constructions Ltd.",
    description: "Professional drywall mudding and taping services in Saskatoon, SK. Seamless joints and paint-ready surfaces for residential and commercial projects.",
    url: CANONICAL,
    images: [{ url: "/images/work9.jpeg", width: 1200, height: 630, alt: "Drywall mudding and taping work in Saskatoon, SK by Dil Chahal Constructions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudding & Taping Saskatoon, SK | Dil Chahal Constructions",
    description: "Expert drywall mudding and taping for seamless joints in Saskatoon. Residential & commercial. Free quote.",
    images: ["/images/work9.jpeg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Mudding & Taping Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Mudding & Taping in Saskatoon, SK | Dil Chahal Constructions Ltd.",
  description: "Expert drywall mudding and taping services for seamless joints and paint-ready surfaces in Saskatoon, SK.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mudding and Taping Saskatoon, SK",
  description: "Professional drywall mudding and taping services in Saskatoon, SK — embedding tape, applying joint compound, and delivering smooth, paint-ready surfaces for residential and commercial projects.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "Mudding and Taping",
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
      name: "What is the difference between mudding and taping in drywall work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taping refers to embedding paper or fibre mesh tape into joint compound along all drywall seams to bridge the gap between panels. Mudding (or jointing) refers to the process of applying, feathering, and building up coats of joint compound over the tape — and over all fastener heads and corner bead — to create a smooth, level surface. Both steps work together as part of the drywall finishing process.",
      },
    },
    {
      "@type": "Question",
      name: "How many mud coats are needed for a professional drywall finish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard Level 4 drywall finish requires a minimum of three coats: a tape coat to embed the joint tape, a fill coat to build up the compound and level the seam, and a finish coat applied wider to feather and blend the surface. Each coat must dry fully before the next is applied. Level 5 adds a skim coat over the entire surface.",
      },
    },
    {
      "@type": "Question",
      name: "Can you mud and tape without doing the full drywall installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer mudding and taping as a standalone service. If drywall panels have already been installed by your contractor or your own crew, we can step in to handle the taping and finishing phase — from tape coat through final sanding — for projects in Saskatoon, SK.",
      },
    },
    {
      "@type": "Question",
      name: "How do you prevent mud cracks from appearing in the finished drywall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mud cracks typically occur when compound is applied too thickly in a single coat, or dries too quickly due to excessive heat or direct airflow. Our process applies thinner, wider coats with proper drying time between each, using appropriate compound for the coat type — all preventing the cracking and shrinkage that causes visible seam lines after painting.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Mudding & Taping Saskatoon",
  heroTitle: "Professional Mudding & Taping in Saskatoon, SK",
  currentPage: "Mudding & Taping",
  intro: [
    "Mudding and taping is where a drywall installation transforms from raw panels into a smooth, continuous surface — and it requires both skill and patience. Dil Chahal Constructions provides expert mudding and taping services throughout Saskatoon, SK, delivering seamless drywall joints that are invisible after painting. Whether we're completing the finishing phase after our own installation or picking up where another contractor left off, our results are consistent: flat, smooth, and paint-ready.",
    "We use professional-grade joint compounds selected for each coat — setting-type compounds for the tape coat in high-humidity areas, and lightweight topping compound for final coats that sand easily without raising dust. Our finishers work systematically across walls and ceilings, maintaining consistent feather widths and coat thickness to avoid ridging, shadowing, and the cracking that plagues rushed drywall work.",
  ],
  benefitsHeading: "The Art of Seamless Drywall Joints",
  benefits: [
    {
      title: "Seamless Joints",
      description: "Properly taped and mudded seams completely disappear after painting — no lines, ridges, or shadows visible even under raking light or bright artificial lighting.",
    },
    {
      title: "No Shrinkage Cracks",
      description: "We use the right compound for each coat and apply proper thicknesses to eliminate the cracking and seam telegraphing that comes from rushed or improperly applied mudding.",
    },
    {
      title: "Standalone Service",
      description: "Already have drywall installed? We can step in to handle just the mudding and taping phase, picking up where your installation team left off anywhere in Saskatoon.",
    },
    {
      title: "Faster Paint-Ready Results",
      description: "Our systematic approach minimizes rework and delays — walls are ready for primer and paint sooner, keeping your entire renovation or construction project on track.",
    },
  ],
  processSteps: [
    {
      title: "Surface Preparation",
      description: "All drywall panels are inspected for proud fasteners, damaged paper, and gaps. Problem areas are addressed before tape is applied to ensure a solid base.",
    },
    {
      title: "Tape Coat",
      description: "Paper tape is embedded in joint compound along every seam and butt joint. Corner bead is installed on outside corners. All fastener heads receive their first coat of compound.",
    },
    {
      title: "Fill Coat",
      description: "After the tape coat dries fully, a wider fill coat builds up compound over the seam and fasteners, beginning to level the surface toward the plane of the surrounding board.",
    },
    {
      title: "Finish Coat & Feathering",
      description: "A third coat, applied even wider and at a thinner consistency, feathers the edges of the seam fill into the board surface — eliminating any remaining height transitions.",
    },
    {
      title: "Sanding & Final Inspection",
      description: "Dried compound is sanded flat using pole sanders and hand blocks. The surface is inspected under raking light before final approval and handoff for painting.",
    },
  ],
  faqs: [
    {
      question: "What is the difference between mudding and taping?",
      answer: "Taping embeds paper or mesh tape into compound along drywall seams. Mudding (jointing) is the process of applying, building up, and feathering multiple coats of joint compound over the tape, fasteners, and corners to create a smooth, level surface. Both are part of the same finishing process.",
    },
    {
      question: "How many coats of mud are required for a proper finish?",
      answer: "A standard Level 4 finish requires three coats: tape coat, fill coat, and finish coat — each allowed to dry fully before the next is applied. Level 5 adds a skim coat over the entire surface. We advise on the right level for your project.",
    },
    {
      question: "Can you just do mudding and taping if drywall is already installed?",
      answer: "Yes. We offer mudding and taping as a standalone service in Saskatoon. If your drywall panels are already hung, we'll assess the installation and complete the taping and finishing phase.",
    },
    {
      question: "How do you prevent cracks from appearing in the finished drywall?",
      answer: "Cracks come from applying compound too thickly or too quickly. We apply multiple thin, wide coats with correct drying time between each, using appropriate compounds for each stage — preventing the shrinkage and cracking that causes visible seam lines after painting.",
    },
  ],
  relatedServices: [
    { href: "/drywall-finishing-saskatoon", label: "Drywall Finishing" },
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
    { href: "/drywall-repair-saskatoon", label: "Drywall Repair" },
    { href: "/texturing-saskatoon", label: "Texturing" },
  ],
  imageSrc: "/images/work9.jpeg",
  imageAlt: "Professional drywall mudding and taping work on a commercial interior project in Saskatoon, SK",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function MuddingTapingPage() {
  return <ServiceLandingLayout {...data} />;
}
