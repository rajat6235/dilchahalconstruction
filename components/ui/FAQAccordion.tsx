"use client";
import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What drywall services do you offer in Saskatoon?",
    answer:
      "Dil Chahal Construction provides a full range of drywall services in Saskatoon, SK — including drywall installation, drywall repair, drywall finishing, mudding and taping, and texturing for both residential and commercial properties. We also offer GlassRoc sheathing, steel framing, T-bar ceiling systems, insulation, and bulkhead ceilings.",
  },
  {
    question: "Do you serve areas outside Saskatoon in Saskatchewan?",
    answer:
      "Yes. Our primary service area is Saskatoon, but we also serve Warman, Martensville, Regina, Prince Albert, and surrounding Saskatchewan communities. Contact us at +1 (306) 717-1994 to discuss your project location.",
  },
  {
    question: "Are you a licensed and insured contractor in Saskatchewan?",
    answer:
      "Yes, Dil Chahal Construction Ltd. is a fully licensed and insured general contractor operating in Saskatchewan. We comply with all provincial building codes and safety regulations, giving our residential and commercial clients complete peace of mind.",
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

function AccordionItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-[#E5E7EB] last:border-0">
      <button
        id={`faq-btn-${index}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-5 gap-4 group"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
      >
        <span
          className={`text-[15px] font-[600] transition-colors duration-200 ${
            isOpen ? "text-[#E00201]" : "text-[#111827] group-hover:text-[#E00201]"
          }`}
          style={{ fontFamily: "var(--font-subheading)" }}
        >
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-[#E00201] border-[#E00201] text-white rotate-45" : "text-[#9CA3AF] group-hover:border-[#E00201] group-hover:text-[#E00201]"
          }`}
          aria-hidden="true"
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        style={{
          overflow: "hidden",
          height: `${height}px`,
          transition: "height 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div ref={bodyRef} className="pb-5">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14.5px",
              fontWeight: 400,
              color: "#6B7280",
              lineHeight: "1.82",
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {faqs.map((item, i) => (
        <AccordionItem
          key={i}
          index={i}
          question={item.question}
          answer={item.answer}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}
