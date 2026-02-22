"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "BROCHURES", href: "#brochures" },
  { label: "PATTERNS", href: "#patterns" },
  { label: "VIDEO", href: "#video" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(20,20,18,0.97)" : "#141412",
        borderBottom: scrolled ? "1px solid rgba(252,193,23,0.15)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <svg width="38" height="44" viewBox="0 0 38 44" fill="none">
              <path
                d="M19 1.5L36.5 11.25V32.75L19 42.5L1.5 32.75V11.25L19 1.5Z"
                fill="none"
                stroke="#fcc117"
                strokeWidth="1.2"
              />
              <path
                d="M19 9L30 15V29L19 35L8 29V15L19 9Z"
                fill="#fcc117"
                fillOpacity="0.1"
                stroke="#fcc117"
                strokeWidth="0.5"
              />
              <text
                x="19"
                y="26"
                textAnchor="middle"
                fill="#fcc117"
                fontSize="7"
                fontWeight="700"
                letterSpacing="0.5"
                fontFamily="monospace"
              >
                AMT
              </text>
            </svg>
            <span
              className="text-white font-bold tracking-[0.25em] text-lg"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              AMETRINE
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-xs font-bold tracking-[0.2em] transition-colors duration-300 hover:text-[#fcc117]"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#fcc117] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#fcc117] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#fcc117] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}
        style={{ backgroundColor: "#141412", borderTop: menuOpen ? "1px solid rgba(252,193,23,0.15)" : "none" }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-left text-xs font-bold tracking-[0.2em] text-white/70 hover:text-[#fcc117] transition-colors py-2"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
