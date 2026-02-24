"use client";

import { useEffect, useRef } from "react";

const CARDS = [
  {
    title: "Full-Spectrum Concealment",
    text: "Optimized reduction of electromagnetic, thermal, and visual signatures across all detection bands — from the far infrared to radar.",
  },
  {
    title: "Survivability by Design",
    text: "Signature management is not an accessory — it is the foundation of modern survivability. Every solution eliminates the detectable gaps legacy systems leave exposed.",
  },
  {
    title: "Passive. Adaptive. Undetectable.",
    text: "No active emissions. No power dependency. Maximum operational freedom with minimum signature — across all environments and threat scenarios.",
  },
];

export default function SignatureManagement() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("revealed"), i * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32" style={{ backgroundColor: "#08080f" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal flex items-center gap-4 mb-5">
          <div className="h-px w-10 shrink-0" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />
          <span style={{ color: "#FF6B00", fontSize: 11, letterSpacing: "0.14em", fontWeight: 600, textTransform: "uppercase" }}>
            OPERATIONAL ADVANTAGE
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(240,240,245,0.06)" }} />
        </div>

        <h2
          className="reveal font-bold mb-3"
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "0.04em",
            lineHeight: 1.2,
            background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Multispectral Signature Management
        </h2>

        <p className="reveal mb-14" style={{ color: "#8888aa", fontSize: "clamp(0.9rem, 1.4vw, 1rem)", lineHeight: 1.7 }}>
          Engineered for the modern threat environment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="reveal relative flex flex-col p-8 transition-all duration-300"
              style={{ backgroundColor: "#111118" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 28px rgba(255,215,0,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div className="absolute top-0 left-0 right-0" style={{ height: 3, background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />
              <h3
                className="mb-4"
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: 1.3,
                  background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {card.title}
              </h3>
              <p style={{ color: "#8888aa", fontSize: 16, lineHeight: 1.7, fontWeight: 400 }}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
