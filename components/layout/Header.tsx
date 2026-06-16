"use client";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#latest-works" },
  { label: "Services", href: "#services" },
  { label: "About us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-[#8B0001] w-full">
        <div className="max-w-[1140px] mx-auto px-4 flex items-center justify-between py-2">
          <div />
          <p
            className="text-white text-[13px] tracking-wide"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Make a call: +1 (306) 717-1994
          </p>
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-[#E00201] transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Google */}
            <a
              href="#"
              aria-label="Google"
              className="text-white hover:text-[#E00201] transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.35 11.1H12v2.8h5.35C16.8 16.35 14.6 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.55 0 2.96.59 4.02 1.56l2.02-2.02C16.54 4.06 14.38 3 12 3 7.03 3 3 7.03 3 12s4.03 9 9 9c5 0 8.7-3.5 8.7-8.65 0-.58-.06-1.15-.15-1.7l-.2-.55z" />
              </svg>
            </a>
            {/* Houzz */}
            <a
              href="#"
              aria-label="Houzz"
              className="text-white hover:text-[#E00201] transition-colors duration-200 text-[13px] font-bold"
              style={{ fontFamily: "var(--font-nav)" }}
            >
              h
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-[#1a1a1a] w-full">
        <div className="max-w-[1140px] mx-auto px-4 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Dil Chahal Constructions Ltd."
              width={160}
              height={55}
              style={{ height: "55px", width: "auto" }}
              className="object-contain"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white text-[14px] font-[600] hover:text-[#E00201] transition-colors duration-200"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-[#E00201] text-white text-[13px] font-[700] tracking-wider px-5 py-3 hover:bg-[#8B0001] transition-colors duration-300"
            style={{ fontFamily: "var(--font-subheading)" }}
          >
            GET A QUOTE
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#111] border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-6 py-3 text-white text-[14px] font-[600] hover:text-[#E00201] border-b border-white/5 transition-colors duration-200"
                style={{ fontFamily: "var(--font-nav)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-6 py-4 bg-[#E00201] text-white text-[14px] font-[700] text-center"
              onClick={() => setMenuOpen(false)}
            >
              GET A QUOTE
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
