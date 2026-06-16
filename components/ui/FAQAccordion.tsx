"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of projects do you specialize in?",
    answer:
      "We specialize in residential, commercial, and industrial construction projects including drywall installation, steel framing, T-bar ceilings, insulation, mudding, tapping, and texturing.",
  },
  {
    question: "How do you ensure quality and safety?",
    answer:
      "We implement stringent quality control measures and adhere to the highest safety standards. From planning to completion, we maintain rigorous safety protocols and health practices to protect everyone involved.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on size and complexity, but we prioritize timely completion. Our extensive experience and proven success in Saskatoon guarantees that every project we handle is completed with the highest level of quality and reliability.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {faqs.map((item, i) => (
        <div key={i} className="border-b border-white/20">
          <button
            className="w-full flex items-center justify-between py-4 text-left text-white font-[500] text-[16px] hover:text-[#E00201] transition-colors duration-300 cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.question}</span>
            <span className="ml-4 text-[20px] leading-none flex-shrink-0">
              {open === i ? "−" : "+"}
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? "200px" : "0px" }}
          >
            <p
              className="pb-4 text-[14px] text-white/80 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
