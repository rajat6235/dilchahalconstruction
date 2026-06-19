import type { Metadata } from "next";
import ServiceLandingLayout, { type ServiceLandingData } from "@/components/sections/ServiceLandingLayout";

const BASE_URL = "https://dilchahalconstruction.com";
const SLUG = "texturing-saskatoon";
const CANONICAL = `${BASE_URL}/${SLUG}/`;

export const metadata: Metadata = {
  title: "Texturing Saskatoon, SK | Wall & Ceiling Texture Contractor",
  description:
    "Expert wall and ceiling texturing in Saskatoon, SK — orange peel, knockdown, skip trowel, popcorn removal & smooth finish. Residential & commercial. Free quote!",
  keywords: [
    "texturing saskatoon",
    "wall texturing saskatoon",
    "ceiling texturing saskatoon",
    "orange peel texture saskatoon",
    "knockdown texture saskatoon",
    "skip trowel texture saskatoon",
    "popcorn ceiling removal saskatoon",
    "smooth finish saskatoon",
    "texture contractor saskatoon",
    "drywall texturing saskatoon",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Wall & Ceiling Texturing in Saskatoon, SK | Dil Chahal Construction Ltd.",
    description: "Expert wall and ceiling texturing in Saskatoon, SK — orange peel, knockdown, skip trowel, and smooth finish. Residential & commercial. Free quote.",
    url: CANONICAL,
    images: [{ url: "/images/texture.jpeg", width: 1200, height: 630, alt: "Professional wall and ceiling texturing in Saskatoon, SK by Dil Chahal Construction" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Texturing Saskatoon, SK | Dil Chahal Construction",
    description: "Orange peel, knockdown, skip trowel & smooth finish texturing for walls and ceilings in Saskatoon. Free quote.",
    images: ["/images/texture.jpeg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services/` },
    { "@type": "ListItem", position: 3, name: "Texturing Saskatoon", item: CANONICAL },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#page`,
  name: "Wall & Ceiling Texturing in Saskatoon, SK | Dil Chahal Construction Ltd.",
  description: "Expert decorative wall and ceiling texturing services in Saskatoon, SK — all common texture types for residential and commercial projects.",
  url: CANONICAL,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  inLanguage: "en-CA",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Texturing Saskatoon, SK",
  description: "Professional decorative wall and ceiling texturing in Saskatoon, SK — orange peel, knockdown, skip trowel, popcorn removal, and smooth (Level 5) finish for residential and commercial properties.",
  provider: { "@id": `${BASE_URL}/#business` },
  serviceType: "Texturing",
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
      name: "What types of wall and ceiling texture do you apply in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We apply all common drywall textures in Saskatoon, SK — orange peel (fine, medium, or coarse spray texture), knockdown (flattened spray pattern for a subtle, mottled appearance), skip trowel (hand-applied for a Mediterranean or Old World look), slap brush (a rolled and stippled pattern), and smooth finish (Level 4 or Level 5 for contemporary interiors). We also remove old popcorn ceilings and apply a new smooth or textured finish.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match an existing wall or ceiling texture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Texture matching is a core skill for our drywall repair and renovation work. When a section of wall or ceiling has been repaired or replaced, we carefully match the surrounding texture pattern — whether it's orange peel, knockdown, or skip trowel — so the repaired area blends invisibly after painting. We bring samples and do test patches on-site before committing to the full area.",
      },
    },
    {
      "@type": "Question",
      name: "How do you remove popcorn ceilings in Saskatoon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popcorn ceiling removal involves testing for asbestos (mandatory for ceilings installed before 1990 in Saskatoon), then wetting the texture to soften it, scraping it from the surface, repairing any damage to the underlying drywall, and applying a new finish — smooth or textured. The area must be fully masked and sealed before removal to contain the dust and debris.",
      },
    },
    {
      "@type": "Question",
      name: "Is popcorn ceiling removal necessary if the texture is in good condition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popcorn ceilings in good condition don't require immediate removal. However, many Saskatoon homeowners choose to remove them for aesthetic reasons, to apply paint more easily (popcorn absorbs and wastes paint), or during a renovation when the area is already cleared. If the existing popcorn was installed before 1990, asbestos testing is required before any disturbance.",
      },
    },
  ],
};

const data: ServiceLandingData = {
  breadcrumbLabel: "Texturing Saskatoon",
  heroTitle: "Wall & Ceiling Texturing in Saskatoon, SK",
  currentPage: "Texturing",
  intro: [
    "Wall and ceiling texture adds character, hides minor imperfections, and gives rooms a sense of warmth and depth that smooth walls alone cannot replicate. Dil Chahal Construction delivers professional decorative texturing services throughout Saskatoon, SK — applying orange peel, knockdown, skip trowel, and smooth finish textures on new drywall installations, after repairs, and as part of renovation projects. We also remove dated popcorn ceilings and replace them with a fresh, modern finish.",
    "Our texturing results are consistent, even, and properly blended into surrounding surfaces — whether it's a single repaired patch that needs to match the rest of the room or a complete re-texture of a renovated space. We work with spray equipment and hand tools, selecting the right technique for each texture type, substrate condition, and desired result for your Saskatoon home or commercial space.",
  ],
  benefitsHeading: "The Impact of Professional Texturing",
  benefits: [
    {
      title: "All Texture Types",
      description: "Orange peel, knockdown, skip trowel, slap brush, sand texture, and smooth finish — we apply any common drywall texture to match your style or the existing surfaces in your Saskatoon space.",
    },
    {
      title: "Accurate Texture Matching",
      description: "For repairs and partial renovations, we match your existing texture precisely — so freshly textured sections are visually seamless with the surrounding walls after painting.",
    },
    {
      title: "Popcorn Removal",
      description: "We remove old popcorn ceilings safely (with mandatory asbestos testing for pre-1990 ceilings) and apply a smooth or re-textured finish that gives Saskatoon homes a modern, updated look.",
    },
    {
      title: "Paint-Ready Results",
      description: "All textured surfaces are properly primed and ready for painting — with even texture distribution and correct compound application that prevents paint absorption issues.",
    },
  ],
  processSteps: [
    {
      title: "Surface Preparation",
      description: "Drywall surfaces are finished and sanded to the appropriate level before texturing — Level 3 for textured finishes, Level 4–5 for smooth finishes. Priming is completed to seal the surface.",
    },
    {
      title: "Area Protection",
      description: "Floors, fixtures, windows, and adjacent surfaces are fully masked and protected before any spray or application equipment is used — keeping the work area contained.",
    },
    {
      title: "Texture Application",
      description: "Texture is applied using the correct technique for the specified type — spray equipment for orange peel and knockdown, hand tools for skip trowel and slap brush. Test patches are reviewed before full application.",
    },
    {
      title: "Knockdown & Levelling (If Required)",
      description: "For knockdown texture, the fresh spray is allowed to partially set before being lightly knocked down with a drywall knife — creating the characteristic flattened mottled pattern.",
    },
    {
      title: "Priming & Inspection",
      description: "The textured surface is inspected for consistency and even distribution. Any touch-ups are applied, and the surface is primed — ready for your painter to apply the final colour coat.",
    },
  ],
  faqs: [
    {
      question: "What texture types do you apply in Saskatoon?",
      answer: "We apply orange peel, knockdown, skip trowel, slap brush, sand texture, and smooth (Level 4/5) finishes — for new drywall, renovated spaces, and repairs where existing texture needs to be matched.",
    },
    {
      question: "Can you match an existing texture on a repaired section?",
      answer: "Yes. Texture matching is a core part of our repair and renovation work. We bring samples, do on-site test patches, and blend the new texture seamlessly into the surrounding surface before full application.",
    },
    {
      question: "How do you remove popcorn ceilings in Saskatoon?",
      answer: "We test for asbestos first (mandatory for pre-1990 ceilings in Saskatoon), then wet, scrape, and repair the ceiling before applying a new smooth or textured finish. The area is fully masked to contain debris.",
    },
    {
      question: "Is popcorn removal required if the ceiling is in good condition?",
      answer: "Not required, but many Saskatoon homeowners choose removal for aesthetics, easier painting, or during renovations. Pre-1990 ceilings must be tested for asbestos before any disturbance.",
    },
  ],
  relatedServices: [
    { href: "/drywall-finishing-saskatoon", label: "Drywall Finishing" },
    { href: "/mudding-taping-saskatoon", label: "Mudding & Taping" },
    { href: "/drywall-repair-saskatoon", label: "Drywall Repair" },
    { href: "/drywall-installation-saskatoon", label: "Drywall Installation" },
  ],
  imageSrc: "/images/texture.jpeg",
  imageAlt: "Professional wall and ceiling texturing applied by Dil Chahal Construction in a Saskatoon residential space",
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
};

export default function TexturingPage() {
  return <ServiceLandingLayout {...data} />;
}
