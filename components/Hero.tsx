"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { label: "UV → RADAR", sub: "FULL SPECTRUM" },
  { label: "18 SYSTEMS", sub: "IN SERVICE" },
  { label: "ISO 9001:2015", sub: "COMPLIANT" },
  { label: "BERRY ACT", sub: "COMPLIANT" },
];

export default function Hero() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const delays = [100, 280, 460, 640, 820, 1020];
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
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#08080f" }}
    >
      {/* Animated radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(232,101,10,0.07) 0%, rgba(107,63,160,0.05) 50%, transparent 70%)",
          animation: "pulse-bg 12s ease-in-out infinite",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,240,245,1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,240,245,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Navbar spacer */}
      <div style={{ height: 72 }} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-16 pb-36 text-center">

        {/* Logo */}
        <div
          ref={setRef(0)}
          className="hero-el mb-8"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white.png"
            alt="Ametrine logo"
            style={{ width: 160, height: "auto", margin: "0 auto" }}
          />
        </div>

        {/* Eyebrow */}
        <div
          ref={setRef(1)}
          className="hero-el flex items-center justify-center gap-4 mb-8"
        >
          <div
            className="h-px w-8"
            style={{ background: "linear-gradient(135deg, #E8650A, #6B3FA0)" }}
          />
          <span
            style={{
              color: "#E8650A",
              fontSize: 11,
              letterSpacing: "0.14em",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Multispectral Signature Management
          </span>
          <div
            className="h-px w-8"
            style={{ background: "linear-gradient(135deg, #E8650A, #6B3FA0)" }}
          />
        </div>

        {/* Headline — gradient text */}
        <h1
          ref={setRef(2)}
          className="hero-el font-black leading-none mb-6"
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontSize: "clamp(3rem, 11vw, 7.5rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1.0,
            background: "linear-gradient(135deg, #E8650A 0%, #6B3FA0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          BE INVISIBLE
        </h1>

        {/* Subheadline */}
        <p
          ref={setRef(3)}
          className="hero-el mb-6"
          style={{
            color: "#f0f0f5",
            fontSize: "clamp(1rem, 2.2vw, 1.35rem)",
            fontWeight: 600,
            letterSpacing: "0.04em",
            lineHeight: 1.3,
          }}
        >
          Multispectral Signature Management Solutions
        </p>

        {/* Body */}
        <p
          ref={setRef(4)}
          className="hero-el max-w-2xl mb-10"
          style={{
            color: "#8888aa",
            fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
            lineHeight: 1.75,
            letterSpacing: "0.02em",
          }}
        >
          The modern battlefield has become transparent. Advanced infrared sensors and AI-driven
          detection have rendered standard visual camouflage obsolete. Ametrine closes the
          Thermal &amp; RF Gap — because survivability is not optional.
        </p>

        {/* CTAs */}
        <div
          ref={setRef(5)}
          className="hero-el flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary — gradient background */}
          <button
            onClick={() =>
              document.getElementById("brochures")?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-bold transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #E8650A 0%, #6B3FA0 100%)",
              color: "#fff",
              padding: "14px 36px",
              fontSize: 12,
              letterSpacing: "0.2em",
              border: "none",
              cursor: "pointer",
              minHeight: 44,
              minWidth: 200,
            }}
          >
            EXPLORE OUR SOLUTIONS
          </button>

          {/* Secondary — border */}
          <button
            onClick={() =>
              document.getElementById("video")?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-bold transition-all duration-200"
            style={{
              border: "1px solid rgba(240,240,245,0.18)",
              backgroundColor: "transparent",
              color: "rgba(240,240,245,0.55)",
              padding: "14px 36px",
              fontSize: 12,
              letterSpacing: "0.2em",
              cursor: "pointer",
              minHeight: 44,
              minWidth: 160,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#E8650A";
              (e.currentTarget as HTMLButtonElement).style.color = "#E8650A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(240,240,245,0.18)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(240,240,245,0.55)";
            }}
          >
            WATCH THE VIDEO
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ borderTop: "1px solid rgba(232,101,10,0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-5 px-4"
                style={{
                  borderLeft:
                    i > 0 ? "1px solid rgba(232,101,10,0.08)" : "none",
                }}
              >
                <span
                  style={{
                    color: "#E8650A",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                  }}
                >
                  {stat.label}
                </span>
                <span
                  style={{
                    color: "#8888aa",
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    marginTop: 3,
                  }}
                >
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ bottom: 90, opacity: 0.25 }}
      >
        <span style={{ color: "#8888aa", fontSize: 9, letterSpacing: "0.3em" }}>SCROLL</span>
        <div
          className="w-px"
          style={{
            height: 36,
            background: "linear-gradient(to bottom, #8888aa, transparent)",
          }}
        />
      </div>
    </section>
  );
}
