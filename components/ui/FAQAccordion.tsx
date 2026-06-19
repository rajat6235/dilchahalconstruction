"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What drywall services do you offer in Saskatoon?",
    answer:
      "Dil Chahal Constructions provides a full range of drywall services in Saskatoon, SK — including drywall installation, drywall repair, drywall finishing, mudding and taping, and texturing for both residential and commercial properties. We also offer GlassRoc sheathing, steel framing, T-bar ceiling systems, insulation, and bulkhead ceilings.",
  },
  {
    question: "Do you serve areas outside Saskatoon in Saskatchewan?",
    answer:
      "Yes. Our primary service area is Saskatoon, but we also serve Warman, Martensville, Regina, Prince Albert, and surrounding Saskatchewan communities. Contact us at +1 (306) 717-1994 to discuss your project location.",
  },
  {
    question: "Are you a licensed and insured contractor in Saskatchewan?",
    answer:
      "Yes, Dil Chahal Constructions Ltd. is a fully licensed and insured general contractor operating in Saskatchewan. We comply with all provincial building codes and safety regulations, giving our residential and commercial clients complete peace of mind.",
  },
  {
    question: "Do you offer free quotes for drywall and renovation projects?",
    answer:
      "Absolutely. We provide free, no-obligation quotes for all drywall installation, renovation, and construction projects in Saskatoon and Saskatchewan. Call +1 (306) 717-1994, email contact@dilchahalconstruction.com, or fill out the quote form on this page.",
  },
  {
    question: "Do you handle both residential and commercial drywall projects?",
    answer:
      "Yes. We work across all project types — from single-family home drywall and basement renovations to large-scale commercial office build-outs, retail spaces, and industrial facilities throughout Saskatoon, SK.",
  },
  {
    question: "How long does a typical drywall installation project take?",
    answer:
      "Project timelines depend on scope and complexity. A standard residential room typically takes 1–3 days. Larger commercial or multi-room projects may take 1–4 weeks. We provide a detailed timeline with every quote so you know exactly what to expect.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col" style={{ gap: "0px" }}>
      {faqs.map((item, i) => (
        <div key={i} style={{ borderTop: i === 0 ? "1px solid #d5d5d5" : "none" }}>
          <button
            id={`faq-btn-${i}`}
            className="w-full flex items-center justify-between text-left cursor-pointer"
            style={{
              backgroundColor: "rgb(245,245,245)",
              color: "rgb(75,79,88)",
              fontSize: "15px",
              fontWeight: 700,
              fontFamily: "var(--font-body)",
              padding: "20px",
              borderBottom: "1px solid #d5d5d5",
            }}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-panel-${i}`}
          >
            <span>{item.question}</span>
            <span className="ml-4 text-[20px] leading-none flex-shrink-0" style={{ color: "rgb(75,79,88)" }} aria-hidden="true">
              {open === i ? "−" : "+"}
            </span>
          </button>

          <div
            id={`faq-panel-${i}`}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
            hidden={open !== i}
            style={{
              backgroundColor: "rgb(245,245,245)",
              padding: open === i ? "0px 20px 20px 20px" : undefined,
              borderBottom: open === i ? "1px solid #d5d5d5" : undefined,
            }}
          >
            {open === i && (
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#7A7A7A",
                  lineHeight: "24.75px",
                }}
              >
                {item.answer}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
