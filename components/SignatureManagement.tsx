"use client";

import { useEffect, useRef } from "react";

const BULLETS = [
  "Extend survivability margins under layered ISR exposure.",
  "Enable concealment continuity from on-the-move to static posture.",
  "Reduce detection probability without compromising mission execution.",
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
    <section
      id="mssm"
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "#08080f", padding: "24px 16px 24px", zIndex: 1 }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />

      <div className="max-w-7xl mx-auto" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div className="reveal flex items-center gap-4 mb-5">
          <div className="h-px w-10 shrink-0" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />
          <span style={{ color: "#FF6B00", fontSize: 11, letterSpacing: "0.14em", fontWeight: 600, textTransform: "uppercase" }}>
            OPERATIONAL ADVANTAGE
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(240,240,245,0.06)" }} />
        </div>

        <h2
          className="reveal font-bold"
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "0.04em",
            lineHeight: 1.2,
            background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: 12,
          }}
        >
          Multispectral Signature Management
        </h2>

        {/* Body text */}
        <p
          className="reveal"
          style={{
            color: "#c0c0d0",
            fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
            lineHeight: 1.7,
            maxWidth: 760,
            marginBottom: 16,
          }}
        >
          Ametrine develops integrated multispectral signature management (MSSM) systems across UV, VIS, NIR, SWIR, MWIR, LWIR, RADAR &mdash; configured to match mission profiles, threat envelopes, and procurement constraints.
        </p>

        {/* Bullets */}
        <div className="reveal flex flex-col" style={{ gap: 11, marginBottom: 16 }}>
          {BULLETS.map((b) => (
            <div key={b} className="flex items-start gap-3">
              <span style={{ color: "#FFD700", fontSize: 10, lineHeight: "1.7", flexShrink: 0 }}>&#9670;</span>
              <span style={{ color: "#c0c0d0", fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)", lineHeight: 1.7 }}>
                {b}
              </span>
            </div>
          ))}
        </div>

        {/* Credibility line */}
        <p
          className="reveal"
          style={{
            color: "#8888aa",
            fontSize: 13,
            lineHeight: 1.6,
            opacity: 0.7,
            marginTop: 16,
          }}
        >
          Signature management complements tactics and requires proper TTPs; it does not replace them.
        </p>
      </div>
    </section>
  );
}
