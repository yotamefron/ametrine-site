"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const delays = [100, 260, 420, 580, 740, 900];
    elementsRef.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => el.classList.add("in"), delays[i] ?? 200 * i);
    });
  }, []);

  // Hide scroll cue after 100px scroll
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setRef = (i: number) => (el: HTMLElement | null) => {
    elementsRef.current[i] = el;
  };

  return (
    <section
      className="relative flex flex-col overflow-hidden md:min-h-[85vh]"
      style={{ backgroundColor: "#08080f" }}
    >
      {/* Animated radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,215,0,0.06) 0%, rgba(123,47,190,0.04) 50%, transparent 70%)",
          animation: "pulse-bg 12s ease-in-out infinite",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,240,245,1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,240,245,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Mobile navbar spacer — on desktop VideoSection handles this */}
      <div className="h-[72px] flex-shrink-0 md:hidden" />

      {/* Main content — reduced mobile padding (~35% less) */}
      <div
        className="relative z-10 flex flex-col items-center justify-center flex-1 text-center space-y-4 md:space-y-6"
        style={{ padding: "16px 16px 24px", }}
      >
        {/* Desktop extra top padding */}
        <div className="hidden md:block" style={{ height: 40 }} />

        {/* Logo */}
        <div ref={setRef(0)} className="hero-el">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white.png"
            alt="Ametrine logo"
            style={{ width: 140, height: "auto", margin: "0 auto" }}
          />
        </div>

        {/* Eyebrow */}
        <div ref={setRef(1)} className="hero-el flex items-center justify-center gap-4">
          <div className="h-px w-8" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />
          <span style={{ color: "#FF6B00", fontSize: 11, letterSpacing: "0.14em", fontWeight: 600, textTransform: "uppercase" }}>
            Multispectral Signature Management
          </span>
          <div className="h-px w-8" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />
        </div>

        {/* Headline — gradient text */}
        <h1
          ref={setRef(2)}
          className="hero-el font-black leading-none"
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontSize: "clamp(3rem, 11vw, 7.5rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1.0,
            background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          BE INVISIBLE
        </h1>

        {/* Supporting description line */}
        <p
          ref={setRef(3)}
          className="hero-el"
          style={{
            color: "#c0c0d0",
            fontSize: "clamp(15px, 1.6vw, 18px)",
            lineHeight: 1.4,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          Ametrine develops integrated multispectral signature management systems across UV, VIS, NIR, thermal, and radar domains.
        </p>

        {/* Catalog subtitle */}
        <p
          ref={setRef(4)}
          className="hero-el"
          style={{
            color: "#FF6B00",
            fontSize: "clamp(0.65rem, 1.4vw, 0.8rem)",
            fontWeight: 600,
            letterSpacing: "0.22em",
            lineHeight: 1.4,
            textTransform: "uppercase",
          }}
        >
          Product Catalog
        </p>

        {/* CTA */}
        <div
          ref={setRef(5)}
          className="hero-el flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ marginTop: 16 }}
        >
          <button
            onClick={() => document.getElementById("brochures")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-press font-bold transition-all duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
              color: "#08080f",
              padding: "14px 40px",
              fontSize: 12,
              letterSpacing: "0.2em",
              border: "none",
              cursor: "pointer",
              minHeight: 44,
              minWidth: 220,
              fontFamily: "inherit",
              fontWeight: 700,
            }}
          >
            EXPLORE OUR SOLUTIONS
          </button>
        </div>

        {/* Desktop extra bottom padding */}
        <div className="hidden md:block" style={{ height: 48 }} />
      </div>

      {/* Scroll cue — bottom center, disappears after 100px */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-10 flex flex-col items-center gap-1"
        style={{
          opacity: showScroll ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFD700"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: "hero-pulse 3s ease-in-out infinite" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <span
          style={{
            color: "#FFD700",
            fontSize: 9,
            letterSpacing: "0.2em",
            opacity: 0.5,
            animation: "hero-pulse 3s ease-in-out infinite",
          }}
        >
          Operational Overview
        </span>
      </div>
    </section>
  );
}
