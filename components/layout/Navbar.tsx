"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact-us" },
];

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Site navigation"
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out ${
          scrolled || menuOpen
            ? "bg-[#0a0a0a]/96 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-black/20 backdrop-blur-[2px]"
        }`}
        style={{ height: "72px" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-full flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center"
            aria-label="Dil Chahal Construction — Home"
          >
            <Image
              src="/images/logo-header.png"
              alt="Dil Chahal Construction Ltd."
              width={180}
              height={66}
              className="h-[44px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`relative flex items-center px-[14px] py-2 text-[13px] font-[600] tracking-[0.4px] transition-colors duration-200 group rounded-[2px] ${
                    isActive(link.href)
                      ? "text-[#E00201]"
                      : "text-white/80 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-subheading)" }}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#E00201] rounded-full origin-left transition-transform duration-300 ${
                      isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-60"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right: socials + phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/40 hover:text-white transition-colors duration-200"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://share.google/IPRPEsKN5rl26cugO"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business Profile"
                className="text-white/40 hover:text-white transition-colors duration-200"
              >
                <InstagramIcon />
              </a>
            </div>
            <div className="w-[1px] h-4 bg-white/12" aria-hidden="true" />
            <a
              href="tel:+13067171994"
              className="text-white/50 hover:text-white/90 text-[12px] tracking-[0.2px] transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              +1 (306) 717-1994
            </a>
            <Link
              href="/contact-us#contact"
              className="ml-1 inline-flex items-center bg-[#E00201] text-white text-[11px] font-[700] tracking-[1.5px] uppercase px-5 py-[10px] rounded-[2px] hover:bg-[#c50000] transition-all duration-250 hover:scale-[1.02] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E00201] focus-visible:outline-offset-2"
              style={{ fontFamily: "var(--font-subheading)" }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] -mr-1 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span
              className={`block h-[1.5px] w-5 bg-white origin-center transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-white origin-center transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>

        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 right-0 z-40 bg-[#0a0a0a]/97 backdrop-blur-xl lg:hidden"
            style={{ top: "72px", bottom: 0, overflowY: "auto" }}
          >
            <div className="max-w-[1200px] mx-auto px-5 py-8">
              <ul className="flex flex-col" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-4 text-[18px] font-[600] border-b transition-colors duration-200 ${
                        isActive(link.href)
                          ? "text-[#E00201] border-white/8"
                          : "text-white/85 hover:text-white border-white/8"
                      }`}
                      style={{ fontFamily: "var(--font-subheading)" }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.28 }}
                className="mt-8 flex flex-col gap-3"
              >
                <a
                  href="tel:+13067171994"
                  className="flex items-center justify-center gap-2 text-white/50 text-[14px]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.92 3.39 2 2 0 0 1 3.88 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +1 (306) 717-1994
                </a>
                <Link
                  href="/contact-us#contact"
                  className="block bg-[#E00201] text-white text-[12px] font-[700] tracking-[2px] uppercase py-4 text-center rounded-[2px] hover:bg-[#c50000] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-subheading)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Get a Free Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
