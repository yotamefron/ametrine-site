"use client";

import { useEffect, useRef } from "react";

/** Top portion: logo + eyebrow label. Always first content after the fixed navbar. */
export function HeroTop() {
  const logoRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const delays = [100, 260];
    [logoRef.current, eyebrowRef.current].forEach((el, i) => {
      if (!el) return;
      setTimeout(() => el.classList.add("in"), delays[i]);
    });
  }, []);

  return (
    <section
      className="relative flex flex-col overflow-hidden"
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

      {/* Navbar spacer — always visible (same order mobile + desktop) */}
      <div className="h-[72px] flex-shrink-0" />

      {/* Logo + eyebrow */}
      <div
        className="relative z-10 flex flex-col items-center text-center space-y-4"
        style={{ padding: "24px 16px 20px" }}
      >
        <div ref={logoRef} className="hero-el">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white.png"
            alt="Ametrine logo"
            style={{ width: 140, height: "auto", margin: "0 auto" }}
          />
        </div>

        <div ref={eyebrowRef} className="hero-el flex items-center justify-center gap-4">
          <div className="h-px w-8" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />
          <span style={{ color: "#FF6B00", fontSize: 11, letterSpacing: "0.14em", fontWeight: 600, textTransform: "uppercase" }}>
            Multispectral Signature Management
          </span>
          <div className="h-px w-8" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />
        </div>
      </div>
    </section>
  );
}

/** Bottom portion: BE INVISIBLE + supporting text + CTA. Rendered after VideoSection. */
export function HeroBottom() {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const delays = [0, 160, 320, 480, 640];
          elementsRef.current.forEach((el, i) => {
            if (!el) return;
            setTimeout(() => el.classList.add("in"), delays[i] ?? 160 * i);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const setRef = (i: number) => (el: HTMLElement | null) => {
    elementsRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col overflow-hidden"
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

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center space-y-4 md:space-y-6"
        style={{ padding: "24px 16px 40px" }}
      >
        {/* Headline */}
        <h1
          ref={setRef(0)}
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

        {/* Supporting description */}
        <p
          ref={setRef(1)}
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
          ref={setRef(2)}
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
          ref={setRef(3)}
          className="hero-el flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ marginTop: 8 }}
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
      </div>
    </section>
  );
}
