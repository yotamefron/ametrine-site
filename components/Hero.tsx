"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "UV → RADAR", sub: "FULL SPECTRUM" },
  { label: "18 SYSTEMS", sub: "CERTIFIED" },
  { label: "ISO 9001:2015", sub: "COMPLIANT" },
  { label: "BERRY ACT", sub: "COMPLIANT" },
];

export default function Hero() {
  const [lineReady, setLineReady] = useState(false);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Staggered fade-in for hero elements
    const delays = [100, 300, 500, 700, 900, 1100, 1300, 1500];
    elementsRef.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => {
        el.classList.add("in");
      }, delays[i] ?? 200 * i);
    });

    // Trigger the line draw
    setTimeout(() => setLineReady(true), 1800);
  }, []);

  const setRef = (i: number) => (el: HTMLElement | null) => {
    elementsRef.current[i] = el;
  };

  const scrollToBrochures = () => {
    document.getElementById("brochures")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      {/* Animated pulsing radial background */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,1) 0%, transparent 70%)",
          animation: "pulse-bg 10s ease-in-out infinite",
        }}
      />

      {/* Diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Navbar spacer */}
      <div style={{ height: 72 }} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-16 pb-32 text-center">
        {/* Logo */}
        <div
          ref={setRef(0)}
          className="hero-el mb-10"
          style={{ transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white.png"
            alt="Ametrine"
            style={{ width: 180, height: "auto", margin: "0 auto" }}
          />
        </div>

        {/* Eyebrow */}
        <div
          ref={setRef(1)}
          className="hero-el flex items-center justify-center gap-4 mb-10"
          style={{ transition: "opacity 0.7s ease, transform 0.7s ease" }}
        >
          <div className="h-px w-10" style={{ backgroundColor: "#C9A84C" }} />
          <span
            style={{
              color: "#C9A84C",
              fontSize: 11,
              letterSpacing: "0.35em",
              fontWeight: 700,
            }}
          >
            MULTISPECTRAL SIGNATURE MANAGEMENT
          </span>
          <div className="h-px w-10" style={{ backgroundColor: "#C9A84C" }} />
        </div>

        {/* Headline */}
        <h1
          ref={setRef(2)}
          className="hero-el text-white font-black leading-none mb-0"
          style={{
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
            letterSpacing: "-0.02em",
            transition: "opacity 0.8s ease, transform 0.8s ease",
            textShadow: "0 0 80px rgba(201,168,76,0.06)",
          }}
        >
          THE EYES OF THE ENEMY
        </h1>

        <h1
          ref={setRef(3)}
          className="hero-el text-white font-black leading-none mb-10"
          style={{
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
            letterSpacing: "-0.02em",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          HAVE CHANGED.
        </h1>

        {/* Animated gold line + SO HAVE OURS */}
        <div
          ref={setRef(4)}
          className="hero-el w-full max-w-4xl mb-10"
          style={{ transition: "opacity 0.7s ease, transform 0.7s ease" }}
        >
          <div
            className={`gold-line ${lineReady ? "draw" : ""}`}
            style={{ marginBottom: 14 }}
          />
          <div className="text-right">
            <span
              style={{
                color: "#C9A84C",
                fontSize: "clamp(1.1rem, 3vw, 2rem)",
                fontStyle: "italic",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              SO HAVE OURS.
            </span>
          </div>
        </div>

        {/* Body paragraph */}
        <p
          ref={setRef(5)}
          className="hero-el max-w-xl mb-6"
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: 14,
            lineHeight: 1.8,
            letterSpacing: "0.05em",
            fontWeight: 300,
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          AMETRINE delivers battlefield-proven multispectral concealment across visual, near-IR,
          thermal, and RADAR domains — engineered for the modern threat landscape.
        </p>

        {/* BLEND. NOT BLOCK. */}
        <div
          ref={setRef(6)}
          className="hero-el mb-12"
          style={{ transition: "opacity 0.7s ease, transform 0.7s ease" }}
        >
          <span
            style={{
              color: "#C9A84C",
              fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "0.25em",
            }}
          >
            BLEND. NOT BLOCK.
          </span>
        </div>

        {/* CTA */}
        <div
          ref={setRef(7)}
          className="hero-el flex flex-col sm:flex-row items-center gap-4"
          style={{ transition: "opacity 0.7s ease, transform 0.7s ease" }}
        >
          <button
            onClick={scrollToBrochures}
            className="group relative overflow-hidden font-bold transition-all duration-300 hover:brightness-105 active:scale-[0.97]"
            style={{
              border: "1px solid #C9A84C",
              backgroundColor: "transparent",
              color: "#C9A84C",
              padding: "14px 36px",
              fontSize: 12,
              letterSpacing: "0.25em",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#C9A84C";
              (e.currentTarget as HTMLButtonElement).style.color = "#080808";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#C9A84C";
            }}
          >
            ACCESS BROCHURES
            <span style={{ fontSize: 16 }}>→</span>
          </button>

          <button
            onClick={() => document.getElementById("video")?.scrollIntoView({ behavior: "smooth" })}
            className="font-bold transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "transparent",
              color: "rgba(255,255,255,0.5)",
              padding: "14px 36px",
              fontSize: 12,
              letterSpacing: "0.25em",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.5)";
              (e.currentTarget as HTMLButtonElement).style.color = "#C9A84C";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)";
            }}
          >
            WATCH VIDEO
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x"
            style={{ borderColor: "rgba(201,168,76,0.08)" }}>
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-5 px-4"
                style={{ borderColor: "rgba(201,168,76,0.08)" }}
              >
                <span
                  style={{
                    color: "#C9A84C",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                  }}
                >
                  {stat.label}
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.25)",
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
        style={{ bottom: 90, opacity: 0.3 }}
      >
        <span style={{ color: "white", fontSize: 9, letterSpacing: "0.3em" }}>SCROLL</span>
        <div
          className="w-px"
          style={{
            height: 40,
            background: "linear-gradient(to bottom, white, transparent)",
          }}
        />
      </div>
    </section>
  );
}
