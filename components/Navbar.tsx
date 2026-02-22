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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-400"
      style={{
        height: 72,
        backgroundColor: scrolled ? "rgba(8,8,8,0.96)" : "#080808",
        borderBottom: scrolled
          ? "1px solid rgba(201,168,76,0.18)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            role="button"
            aria-label="Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-icon.png"
              alt="Ametrine"
              style={{ width: 28, height: "auto" }}
            />
            <span
              className="text-white font-bold"
              style={{ fontSize: 15, letterSpacing: "0.28em" }}
            >
              AMETRINE
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none" }}
          >
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: 22,
                backgroundColor: "#C9A84C",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: 22,
                backgroundColor: "#C9A84C",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: 22,
                backgroundColor: "#C9A84C",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? 280 : 0,
          backgroundColor: "#080808",
          borderTop: menuOpen ? "1px solid rgba(201,168,76,0.12)" : "none",
        }}
      >
        <div className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-left nav-link"
              style={{ fontSize: 13 }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
