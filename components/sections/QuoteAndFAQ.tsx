"use client";
import { useState, useRef, FormEvent } from "react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AnimateIn from "@/components/ui/AnimateIn";

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY: FormState = { name: "", email: "", subject: "", message: "" };

const inputStyle: React.CSSProperties = {
  backgroundColor: "rgb(255,255,255)",
  border: "1px solid rgba(0,0,0,0.25)",
  borderRadius: "3px",
  color: "rgba(0,0,0,0.7)",
  fontSize: "16px",
  fontFamily: "var(--font-body)",
  padding: "10px 14px",
  width: "100%",
};

const inputErrorStyle: React.CSSProperties = {
  ...inputStyle,
  border: "1px solid #ffaaaa",
  outline: "2px solid rgba(255,100,100,0.4)",
};

export default function QuoteAndFAQ() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<FormState>>({});
  const formRef = useRef<HTMLFormElement>(null);

  /* Client-side validation mirrors server rules */
  function validate(): boolean {
    const errors: Partial<FormState> = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      errors.name = "Please enter your full name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = "Please enter a valid email address.";
    if (!form.subject.trim() || form.subject.trim().length < 2)
      errors.subject = "Please enter a subject.";
    if (!form.message.trim() || form.message.trim().length < 10)
      errors.message = "Please enter a message (at least 10 characters).";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError("");

    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          website: "", // honeypot — always empty from real users
        }),
      });

      const data: { success?: boolean; error?: string } = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm(EMPTY);
        setFieldErrors({});
      } else {
        setStatus("error");
        setServerError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerError("Network error. Please check your connection and try again.");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (fieldErrors[name as keyof FormState]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const isLoading = status === "loading";

  return (
    <section id="contact" style={{ backgroundColor: "rgb(245,245,245)" }}>
      <div className="max-w-[1140px] mx-auto" style={{ paddingBottom: "150px" }}>
        <div className="flex flex-col md:flex-row">

          {/* ── Left: Contact Form ── */}
          <AnimateIn
            variant="bounceIn"
            className="flex-1"
            style={{ backgroundColor: "rgb(139,0,1)", padding: "64px" }}
          >
            <h2
              id="quote-form-title"
              className="mb-4"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(24px, 2.5vw, 36px)",
                fontWeight: 500,
                color: "rgb(255,255,255)",
                lineHeight: "46.8px",
                letterSpacing: "0.5px",
              }}
            >
              Request a Quote
            </h2>

            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(255,255,255)",
                lineHeight: "24.75px",
              }}
            >
              Ready to Work Together? Build a project with us!
            </p>

            {/* ── Success state ── */}
            {status === "success" ? (
              <div
                role="alert"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: "3px",
                  padding: "28px 24px",
                  textAlign: "center",
                }}
              >
                {/* Checkmark icon */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ margin: "0 auto 16px", display: "block" }} aria-hidden="true">
                  <circle cx="24" cy="24" r="22" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
                  <path d="M14 24l8 8 12-14" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p style={{ fontFamily: "var(--font-subheading)", fontSize: "20px", fontWeight: 600, color: "#ffffff", margin: "0 0 8px" }}>
                  Message Sent!
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(255,255,255,0.85)", margin: "0 0 20px", lineHeight: "1.6" }}>
                  Thank you for reaching out. We&apos;ll get back to you within 1 business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.5)",
                    color: "#ffffff",
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    padding: "8px 20px",
                    borderRadius: "3px",
                    cursor: "pointer",
                    letterSpacing: "0.5px",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                className="flex flex-col gap-5"
                aria-labelledby="quote-form-title"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Server-level error banner */}
                {status === "error" && serverError && (
                  <div
                    role="alert"
                    style={{
                      background: "rgba(0,0,0,0.25)",
                      border: "1px solid rgba(255,100,100,0.5)",
                      borderRadius: "3px",
                      padding: "12px 16px",
                    }}
                  >
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#ffcccc", margin: 0, lineHeight: "1.5" }}>
                      {serverError}
                    </p>
                  </div>
                )}

                {/* Honeypot — hidden from real users, bots fill it */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
                />

                {/* Name */}
                <div>
                  <label htmlFor="quote-name" className="sr-only">Your name</label>
                  <input
                    id="quote-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    disabled={isLoading}
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "err-name" : undefined}
                    style={fieldErrors.name ? inputErrorStyle : inputStyle}
                  />
                  {fieldErrors.name && (
                    <p id="err-name" role="alert" style={{ margin: "4px 0 0", fontFamily: "var(--font-body)", fontSize: "12px", color: "#ffcccc" }}>
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="quote-email" className="sr-only">Email address</label>
                  <input
                    id="quote-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    disabled={isLoading}
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "err-email" : undefined}
                    style={fieldErrors.email ? inputErrorStyle : inputStyle}
                  />
                  {fieldErrors.email && (
                    <p id="err-email" role="alert" style={{ margin: "4px 0 0", fontFamily: "var(--font-body)", fontSize: "12px", color: "#ffcccc" }}>
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="quote-subject" className="sr-only">Subject</label>
                  <input
                    id="quote-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    disabled={isLoading}
                    aria-invalid={!!fieldErrors.subject}
                    aria-describedby={fieldErrors.subject ? "err-subject" : undefined}
                    style={fieldErrors.subject ? inputErrorStyle : inputStyle}
                  />
                  {fieldErrors.subject && (
                    <p id="err-subject" role="alert" style={{ margin: "4px 0 0", fontFamily: "var(--font-body)", fontSize: "12px", color: "#ffcccc" }}>
                      {fieldErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="quote-message" className="sr-only">Message</label>
                  <textarea
                    id="quote-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    disabled={isLoading}
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? "err-message" : undefined}
                    style={fieldErrors.message ? { ...inputErrorStyle, resize: "none" } : { ...inputStyle, resize: "none" }}
                  />
                  {fieldErrors.message && (
                    <p id="err-message" role="alert" style={{ margin: "4px 0 0", fontFamily: "var(--font-body)", fontSize: "12px", color: "#ffcccc" }}>
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="hover:bg-[#5a5a5a] transition-colors duration-300"
                    style={{
                      backgroundColor: isLoading ? "#555" : "rgb(115,115,115)",
                      color: "rgb(255,255,255)",
                      fontSize: "17px",
                      fontWeight: 500,
                      fontFamily: "var(--font-subheading)",
                      padding: "12px 24px",
                      letterSpacing: "normal",
                      border: "none",
                      borderRadius: "3px",
                      cursor: isLoading ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      opacity: isLoading ? 0.8 : 1,
                    }}
                    aria-live="polite"
                  >
                    {isLoading && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        aria-hidden="true"
                        style={{ animation: "spin 0.8s linear infinite" }}
                      >
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                    )}
                    {isLoading ? "SENDING…" : "SEND MESSAGE"}
                  </button>
                </div>
              </form>
            )}
          </AnimateIn>

          {/* ── Right: FAQ ── */}
          <AnimateIn
            variant="fadeInRight"
            className="flex-1"
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0px 0px 0px 100px" }}
          >
            <h3
              className="mb-3"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "24px",
                fontWeight: 600,
                color: "#E00201",
                lineHeight: "28.8px",
                letterSpacing: "normal",
              }}
            >
              Learn More From
            </h3>

            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(24px, 2.5vw, 36px)",
                fontWeight: 500,
                color: "#000000",
                lineHeight: "46.8px",
                letterSpacing: "0.5px",
              }}
            >
              Frequently Asked Questions
            </h2>

            <FAQAccordion />
          </AnimateIn>

        </div>
      </div>

      {/* Spinner keyframe — injected once, no JS dependency */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
