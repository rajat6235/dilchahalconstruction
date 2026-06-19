import type { MetadataRoute } from "next";

const BASE_URL = "https://dilchahalconstruction.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    /* ── Core pages ── */
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact-us`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.85 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },

    /* ── Drywall service pages ── */
    { url: `${BASE_URL}/drywall-installation-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/drywall-repair-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/drywall-finishing-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/mudding-taping-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/texturing-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },

    /* ── Structural & specialty pages ── */
    { url: `${BASE_URL}/steel-framing-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/insulation-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/t-bar-ceiling-installation-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/bulkhead-ceiling-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/glassroc-sheathing-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },

    /* ── Renovation pages ── */
    { url: `${BASE_URL}/commercial-renovations-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/residential-renovations-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/basement-renovations-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },

    /* ── Location & authority pages ── */
    { url: `${BASE_URL}/construction-company-saskatchewan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/drywall-contractor-regina`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/drywall-contractor-prince-albert`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    /* ── Informational content ── */
    { url: `${BASE_URL}/drywall-cost-saskatoon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    /* ── Project case study pages ── */
    { url: `${BASE_URL}/projects/commercial-office-fit-out-saskatoon`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.75 },
    { url: `${BASE_URL}/projects/basement-development-saskatoon`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.75 },
    { url: `${BASE_URL}/projects/steel-framing-residential-saskatoon`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/projects/interior-home-renovation-saskatoon`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
}
