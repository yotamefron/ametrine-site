"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const delays = [100, 260, 420, 580, 740];
    elementsRef.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => el.classList.add("in"), delays[i] ?? 200 * i);
    });
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

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-8 pb-8 md:pt-16 md:pb-24 text-center">

        {/* Logo */}
        <div ref={setRef(0)} className="hero-el mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white.png"
            alt="Ametrine logo"
            style={{ width: 140, height: "auto", margin: "0 auto" }}
          />
        </div>

        {/* Eyebrow */}
        <div ref={setRef(1)} className="hero-el flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-8" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />
          <span style={{ color: "#FF6B00", fontSize: 11, letterSpacing: "0.14em", fontWeight: 600, textTransform: "uppercase" }}>
            Multispectral Signature Management
          </span>
          <div className="h-px w-8" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />
        </div>

        {/* Headline — gradient text */}
        <h1
          ref={setRef(2)}
          className="hero-el font-black leading-none mb-5"
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

        {/* Catalog subtitle */}
        <p
          ref={setRef(3)}
          className="hero-el mb-4"
          style={{
            color: "#FF6B00",
            fontSize: "clamp(0.65rem, 1.4vw, 0.8rem)",
            fontWeight: 600,
            letterSpacing: "0.22em",
            lineHeight: 1.4,
            textTransform: "uppercase",
          }}
        >
          Complete Product Catalog &mdash; Multispectral Signature Management Systems
        </p>

        {/* CTA */}
        <div
          ref={setRef(4)}
          className="hero-el flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={() => document.getElementById("brochures")?.scrollIntoView({ behavior: "smooth" })}
            className="font-bold transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
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
      </div>
    </section>
  );
}
