"use client";
import { useState } from "react";

const faqs = [
  {
    question: "1. What types of projects do you specialize in?",
    answer:
      "We specialize in residential, commercial, and industrial construction projects.",
  },
  {
    question: "2. How do you ensure quality and safety?",
    answer:
      "We implement stringent quality control measures and adhere to the highest safety standards. From planning to completion, we maintain rigorous safety protocols and health practices to protect everyone involved.",
  },
  {
    question: "3. What is your typical project timeline?",
    answer:
      "Project timelines vary based on size and complexity, but we prioritize timely completion with the highest level of quality and reliability.",
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
