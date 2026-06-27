import type { Metadata } from "next";
import { Merriweather, Montserrat, Open_Sans, Lato, Roboto } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/ui/Preloader";
import RouteLoader from "@/components/ui/RouteLoader";
import Navbar from "@/components/layout/Navbar";

const merriweather = Merriweather({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-sans",
  display: "swap",
});

const BASE_URL = "https://dilchahalconstruction.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dil Chahal Construction Ltd. | Drywall & General Contractor Saskatoon",
    template: "%s | Dil Chahal Construction Ltd.",
  },
  description:
    "Dil Chahal Construction Ltd. is Saskatoon's trusted drywall contractor and general contractor. Expert drywall installation, drywall repair, steel framing, T-bar ceilings, insulation, mudding, taping, texturing, and home & commercial renovations. Serving Saskatoon, Warman, Martensville, Regina, and Prince Albert.",
  keywords: [
    "drywall contractor saskatoon",
    "best drywall contractor saskatoon",
    "drywall installation saskatoon",
    "drywall repair saskatoon",
    "drywall finishing saskatoon",
    "drywall company saskatoon",
    "drywall contractor saskatchewan",
    "construction company saskatoon",
    "best construction company saskatoon",
    "general contractor saskatoon",
    "licensed general contractor saskatoon",
    "steel framing saskatoon",
    "steel framing contractor saskatoon",
    "t-bar ceiling saskatoon",
    "drop ceiling saskatoon",
    "suspended ceiling saskatoon",
    "insulation contractor saskatoon",
    "glasroc sheathing saskatoon",
    "bulkhead ceiling saskatoon",
    "mudding taping saskatoon",
    "texturing saskatoon",
    "renovation contractor saskatoon",
    "house renovations saskatoon",
    "basement renovation saskatoon",
    "commercial renovation saskatoon",
    "residential renovation saskatoon",
    "commercial drywall saskatoon",
    "residential drywall saskatoon",
    "interior construction saskatoon",
    "drywall warman sk",
    "drywall martensville sk",
    "general contractor warman sk",
    "drywall contractor regina",
    "drywall contractor prince albert",
    "construction company saskatchewan",
    "general contractor saskatchewan",
    "drywall contractor saskatchewan",
    "insulation contractor saskatchewan",
    "steel framing saskatchewan",
    "renovation contractor saskatchewan",
    "drywall cost saskatoon",
  ],
  authors: [{ name: "Dil Chahal Construction Ltd.", url: BASE_URL }],
  creator: "Dil Chahal Construction Ltd.",
  publisher: "Dil Chahal Construction Ltd.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: BASE_URL,
    siteName: "Dil Chahal Construction Ltd.",
    title: "Dil Chahal Construction Ltd. | Drywall & General Contractor Saskatoon",
    description:
      "Saskatoon's trusted drywall contractor and general contractor. Specializing in drywall installation, steel framing, T-bar ceilings, insulation, mudding, taping, texturing, and residential & commercial renovations.",
    images: [
      {
        url: "/images/hero-bg.jpeg",
        width: 1200,
        height: 630,
        alt: "Dil Chahal Construction Ltd. — Drywall and General Contractor in Saskatoon, SK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dil Chahal Construction Ltd. | Drywall & General Contractor Saskatoon",
    description:
      "Saskatoon's trusted drywall contractor. Expert drywall installation, steel framing, T-bar ceilings, insulation, mudding, taping, texturing, and home & commercial renovations.",
    images: ["/images/hero-bg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "construction",
  /* verification keys go here once tokens are obtained from Search Console */
};

/* ── JSON-LD structured data ── */

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  "@id": `${BASE_URL}/#business`,
  name: "Dil Chahal Construction Ltd.",
  legalName: "Dil Chahal Construction Ltd.",
  alternateName: ["Dil Chahal Construction", "DCC Saskatoon"],
  description:
    "Dil Chahal Construction Ltd. is a licensed general contractor and drywall specialist serving Saskatoon, SK and surrounding areas. Services include drywall installation, drywall repair, steel framing, T-bar ceilings, insulation, mudding, taping, texturing, and residential and commercial renovations.",
  url: BASE_URL,
  telephone: "+13067171994",
  email: "info@dilchahalconstruction.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 107, 1222 Alberta Ave",
    addressLocality: "Saskatoon",
    addressRegion: "SK",
    postalCode: "S7K 1R4",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.1332,
    longitude: -106.6700,
  },
  areaServed: [
    { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Warman", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Martensville", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Regina", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Prince Albert", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Moose Jaw", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "North Battleford", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Lloydminster", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Humboldt", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Yorkton", addressRegion: "SK", addressCountry: "CA" },
    {
      "@type": "AdministrativeArea",
      name: "Saskatchewan",
      addressCountry: "CA",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction and Renovation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Finishing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Steel Framing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "T-Bar Ceiling Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GlassRoc Sheathing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Insulation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bulkhead Ceiling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mudding and Taping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Texturing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Renovations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Basement Renovations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Renovations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Renovations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Construction" } },
    ],
  },
  image: `${BASE_URL}/images/logo.png`,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/logo.png`,
    width: 230,
    height: 168,
  },
  additionalType: [
    "https://www.wikidata.org/wiki/Q811430",
  ],
  priceRange: "$-$$",
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, Credit Card, Cheque",
  openingHours: "Mo-Sa 08:00-18:00",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  foundingDate: "2016",
  sameAs: ["https://share.google/IPRPEsKN5rl26cugO"],
};

const founderJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#founder`,
  name: "Dilbagh Singh Chahal",
  jobTitle: "CEO & Founder",
  description: "Founder and CEO of Dil Chahal Construction Ltd., a licensed general contractor with 7+ years of experience in drywall installation, steel framing, insulation, ceiling systems, and interior renovations across Saskatchewan.",
  worksFor: {
    "@id": `${BASE_URL}/#business`,
  },
  knowsAbout: [
    "Drywall Installation",
    "Drywall Repair and Finishing",
    "Steel Framing",
    "T-Bar Ceiling Installation",
    "GlassRoc Sheathing",
    "Insulation",
    "Interior Renovations",
    "Saskatchewan Building Code",
    "Commercial Construction",
    "Residential Construction",
  ],
  url: BASE_URL,
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#professional-service`,
  name: "Dil Chahal Construction Ltd.",
  description:
    "Licensed professional drywall contractor and general contractor serving Saskatoon, SK. Specializing in drywall installation, steel framing, T-bar ceilings, insulation, mudding, taping, texturing, and residential and commercial renovations.",
  url: BASE_URL,
  telephone: "+13067171994",
  email: "info@dilchahalconstruction.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 107, 1222 Alberta Ave",
    addressLocality: "Saskatoon",
    addressRegion: "SK",
    postalCode: "S7K 1R4",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Saskatchewan", addressCountry: "CA" },
    { "@type": "City", name: "Saskatoon", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Regina", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Prince Albert", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Warman", addressRegion: "SK", addressCountry: "CA" },
    { "@type": "City", name: "Martensville", addressRegion: "SK", addressCountry: "CA" },
  ],
  serviceType: [
    "Drywall Installation",
    "Drywall Repair",
    "Drywall Finishing",
    "Steel Framing",
    "T-Bar Ceiling Installation",
    "Bulkhead Ceiling",
    "GlassRoc Sheathing",
    "Insulation",
    "Mudding and Taping",
    "Texturing",
    "Basement Renovations",
    "Residential Renovations",
    "Commercial Renovations",
    "General Contracting",
  ],
  priceRange: "$-$$",
  foundingDate: "2016",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Dil Chahal Construction Ltd.",
  legalName: "Dil Chahal Construction Ltd.",
  alternateName: ["Dil Chahal Construction", "DCC Saskatoon"],
  description: "Licensed general contractor and drywall specialist in Saskatoon, SK — providing drywall installation, steel framing, insulation, ceiling systems, and full interior renovations across Saskatchewan since 2016.",
  slogan: "Quality You Can Trust, Excellence You Can See",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/logo.png`,
    width: 230,
    height: 168,
  },
  image: `${BASE_URL}/images/founder.jpeg`,
  foundingDate: "2016",
  foundingLocation: {
    "@type": "Place",
    name: "Saskatoon, Saskatchewan, Canada",
  },
  employee: {
    "@id": `${BASE_URL}/#founder`,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+13067171994",
      contactType: "customer service",
      contactOption: "TollFree",
      areaServed: ["CA-SK"],
      availableLanguage: ["English", "Punjabi"],
    },
    {
      "@type": "ContactPoint",
      email: "contact@dilchahalconstruction.com",
      contactType: "sales",
      areaServed: ["CA-SK"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 107, 1222 Alberta Ave",
    addressLocality: "Saskatoon",
    addressRegion: "SK",
    postalCode: "S7K 1R4",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Saskatchewan",
    addressCountry: "CA",
  },
  knowsAbout: [
    "Drywall Installation",
    "Drywall Repair",
    "Steel Stud Framing",
    "T-Bar Ceiling Installation",
    "GlassRoc Sheathing",
    "Insulation",
    "Interior Renovations",
    "Saskatchewan Building Code",
    "Commercial Construction",
    "Residential Construction",
  ],
  sameAs: ["https://share.google/IPRPEsKN5rl26cugO"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Dil Chahal Construction Ltd.",
  description:
    "Saskatoon's trusted drywall contractor and general contractor for residential and commercial construction projects.",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-CA"
      className={`${merriweather.variable} ${montserrat.variable} ${openSans.variable} ${lato.variable} ${roboto.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <Preloader />
        <RouteLoader />
        <Navbar />
        {children}

      </body>
    </html>
  );
}
