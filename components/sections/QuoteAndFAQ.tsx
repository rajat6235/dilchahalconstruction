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

const inputBase: React.CSSProperties = {
  backgroundColor: "#fff",
  border: "1.5px solid #E5E7EB",
  borderRadius: "2px",
  color: "#111827",
  fontSize: "14.5px",
  fontFamily: "var(--font-body)",
  padding: "11px 14px",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

const inputError: React.CSSProperties = {
  ...inputBase,
  border: "1.5px solid #fca5a5",
  backgroundColor: "#fff8f8",
};

export default function QuoteAndFAQ() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<FormState>>({});
  const formRef = useRef<HTMLFormElement>(null);

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
          website: "",
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
    if (fieldErrors[name as keyof FormState]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const isLoading = status === "loading";

  return (
    <section id="contact" style={{ backgroundColor: "#F9FAFB" }}>
      <div
        className="max-w-[1200px] mx-auto px-4 md:px-8"
        style={{ paddingTop: "clamp(64px, 9vw, 112px)", paddingBottom: "clamp(64px, 9vw, 112px)" }}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* ── Left: Contact Form ── */}
          <AnimateIn
            variant="bounceIn"
            className="w-full lg:w-[48%] flex-shrink-0"
          >
            <div
              className="relative overflow-hidden p-8 md:p-10"
              style={{ background: "linear-gradient(135deg, #8B0001 0%, #c50000 60%, #8B0001 100%)" }}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                  }}
                >
                  Free Quote
                </p>
                <h2
                  id="quote-form-title"
                  className="text-white mb-2"
                  style={{
                    fontFamily: "var(--font-subheading)",
                    fontSize: "clamp(22px, 2.5vw, 32px)",
                    fontWeight: 700,
                    letterSpacing: "-0.2px",
                    lineHeight: "1.2",
                  }}
                >
                  Request a Quote
                </h2>
                <p
                  className="mb-8"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14.5px",
                    color: "rgba(255,255,255,0.70)",
                    lineHeight: "1.7",
                  }}
                >
                  Ready to work together? Tell us about your project and we&apos;ll get back to you within 1 business day.
                </p>

                {/* ── Success ── */}
                {status === "success" ? (
                  <div
                    role="alert"
                    className="flex flex-col items-center text-center py-10"
                    style={{
                      background: "rgba(255,255,255,0.10)",
                      border: "1.5px solid rgba(255,255,255,0.25)",
                      borderRadius: "2px",
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-full border-2 border-white/60 flex items-center justify-center mb-5"
                      aria-hidden="true"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l5 5L20 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p
                      className="text-white font-[700] mb-2"
                      style={{ fontFamily: "var(--font-subheading)", fontSize: "20px" }}
                    >
                      Message Sent!
                    </p>
                    <p
                      className="text-white/70 mb-6"
                      style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: "1.65" }}
                    >
                      Thank you for reaching out. We&apos;ll respond within 1 business day.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-white/80 border border-white/30 hover:border-white/60 transition-colors duration-200 text-[12px] px-5 py-2.5 rounded-[2px]"
                      style={{ fontFamily: "var(--font-body)", cursor: "pointer" }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    className="flex flex-col gap-4"
                    aria-labelledby="quote-form-title"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    {/* Server error */}
                    {status === "error" && serverError && (
                      <div
                        role="alert"
                        className="px-4 py-3 rounded-[2px]"
                        style={{
                          background: "rgba(0,0,0,0.20)",
                          border: "1.5px solid rgba(255,150,150,0.4)",
                        }}
                      >
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", color: "#fecaca", margin: 0 }}>
                          {serverError}
                        </p>
                      </div>
                    )}

                    {/* Honeypot */}
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
                        placeholder="Your name"
                        autoComplete="name"
                        disabled={isLoading}
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? "err-name" : undefined}
                        style={fieldErrors.name ? inputError : inputBase}
                      />
                      {fieldErrors.name && (
                        <p id="err-name" role="alert" style={{ margin: "4px 0 0", fontFamily: "var(--font-body)", fontSize: "12px", color: "#fca5a5" }}>
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
                        placeholder="Email address"
                        autoComplete="email"
                        disabled={isLoading}
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? "err-email" : undefined}
                        style={fieldErrors.email ? inputError : inputBase}
                      />
                      {fieldErrors.email && (
                        <p id="err-email" role="alert" style={{ margin: "4px 0 0", fontFamily: "var(--font-body)", fontSize: "12px", color: "#fca5a5" }}>
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
                        style={fieldErrors.subject ? inputError : inputBase}
                      />
                      {fieldErrors.subject && (
                        <p id="err-subject" role="alert" style={{ margin: "4px 0 0", fontFamily: "var(--font-body)", fontSize: "12px", color: "#fca5a5" }}>
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
                        placeholder="Tell us about your project…"
                        disabled={isLoading}
                        aria-invalid={!!fieldErrors.message}
                        aria-describedby={fieldErrors.message ? "err-message" : undefined}
                        style={fieldErrors.message ? { ...inputError, resize: "none" } : { ...inputBase, resize: "none" }}
                      />
                      {fieldErrors.message && (
                        <p id="err-message" role="alert" style={{ margin: "4px 0 0", fontFamily: "var(--font-body)", fontSize: "12px", color: "#fca5a5" }}>
                          {fieldErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex items-center justify-center gap-2.5 w-full py-[13px] rounded-[2px] transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]"
                      style={{
                        background: isLoading ? "#555" : "#0a0a0a",
                        color: "#fff",
                        fontFamily: "var(--font-subheading)",
                        fontSize: "12.5px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        border: "none",
                        cursor: isLoading ? "not-allowed" : "pointer",
                        opacity: isLoading ? 0.7 : 1,
                      }}
                      aria-live="polite"
                    >
                      {isLoading ? (
                        <>
                          <svg
                            width="14"
                            height="14"
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
                          Sending…
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </AnimateIn>

          {/* ── Right: FAQ ── */}
          <AnimateIn
            variant="fadeInRight"
            className="flex-1 flex flex-col justify-center"
          >
            <p
              className="mb-2"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "11px",
                fontWeight: 700,
                color: "#E00201",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Learn More
            </p>
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-subheading)",
                fontSize: "clamp(22px, 2.5vw, 32px)",
                fontWeight: 700,
                color: "#0a0a0a",
                letterSpacing: "-0.2px",
                lineHeight: "1.2",
              }}
            >
              Frequently Asked Questions
            </h2>

            <FAQAccordion />

            {/* Quick contact */}
            <div
              className="mt-8 p-5 border border-[#E5E7EB]"
              style={{ borderLeft: "3px solid #E00201", borderRadius: "2px" }}
            >
              <p
                className="mb-1"
                style={{
                  fontFamily: "var(--font-subheading)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                Still have questions?
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", color: "#6B7280", marginBottom: "10px" }}>
                Call us directly or send an email — we typically respond within a few hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+13067171994"
                  className="text-[#E00201] font-[600] text-[13px] hover:underline"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  +1 (306) 717-1994
                </a>
                <a
                  href="mailto:contact@dilchahalconstruction.com"
                  className="text-[#E00201] font-[600] text-[13px] hover:underline"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  contact@dilchahalconstruction.com
                </a>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
