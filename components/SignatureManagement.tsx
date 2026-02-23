"use client";

import { useEffect, useRef } from "react";

const CARDS = [
  {
    title: "Full-Spectrum Concealment",
    text: "Optimized reduction of electromagnetic, thermal, and visual signatures across all detection bands — from the far infrared to radar.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-label="Spectrum waves icon"
      >
        <path
          d="M4 10 Q10 5 20 10 Q30 15 36 10"
          stroke="#E8650A"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M4 19 Q10 12 20 19 Q30 26 36 19"
          stroke="#E8650A"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M4 28 Q10 21 20 28 Q30 35 36 28"
          stroke="#E8650A"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M4 36 Q10 30 20 36 Q30 42 36 36"
          stroke="#E8650A"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    ),
  },
  {
    title: "Survivability by Design",
    text: "Signature management is not an accessory — it is the foundation of modern survivability. Every solution eliminates the detectable gaps legacy systems leave exposed.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-label="Shield icon"
      >
        <path
          d="M20 3 L35 9 L35 23 C35 31 20 37 20 37 C20 37 5 31 5 23 L5 9 Z"
          stroke="#E8650A"
          strokeWidth="1.8"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M20 3 Q27 9 27 16"
          stroke="#E8650A"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M20 3 Q13 9 13 16"
          stroke="#E8650A"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle
          cx="20"
          cy="16"
          r="3.5"
          stroke="#E8650A"
          strokeWidth="1.4"
          fill="none"
          opacity="0.7"
        />
      </svg>
    ),
  },
  {
    title: "Passive. Adaptive. Undetectable.",
    text: "No active emissions. No power dependency. Maximum operational freedom with minimum signature — across all environments and threat scenarios.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-label="Eye with slash icon"
      >
        <ellipse
          cx="20"
          cy="20"
          rx="14"
          ry="9"
          stroke="#E8650A"
          strokeWidth="1.8"
          fill="none"
        />
        <circle cx="20" cy="20" r="3.5" stroke="#E8650A" strokeWidth="1.6" fill="none" />
        <line
          x1="6"
          y1="6"
          x2="34"
          y2="34"
          stroke="#E8650A"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
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
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32"
      style={{ backgroundColor: "#08080f" }}
    >
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(135deg, #E8650A 0%, #6B3FA0 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-5">
          <div
            className="h-px w-10 shrink-0"
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
            OPERATIONAL ADVANTAGE
          </span>
          <div
            className="h-px flex-1"
            style={{ backgroundColor: "rgba(240,240,245,0.06)" }}
          />
        </div>

        <h2
          className="reveal font-bold text-white mb-3"
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "0.04em",
            lineHeight: 1.2,
          }}
        >
          Multispectral Signature Management
        </h2>

        <p
          className="reveal mb-14"
          style={{
            color: "#8888aa",
            fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
            lineHeight: 1.7,
          }}
        >
          Engineered for the modern threat environment
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="reveal relative flex flex-col p-8 transition-all duration-300"
              style={{ backgroundColor: "#111118" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 28px rgba(232,101,10,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Gradient top border */}
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: 3,
                  background: "linear-gradient(135deg, #E8650A 0%, #6B3FA0 100%)",
                }}
              />

              <div className="mb-6">{card.icon}</div>

              <h3
                className="text-white mb-4"
                style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3 }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "#8888aa",
                  fontSize: 16,
                  lineHeight: 1.7,
                  fontWeight: 400,
                }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
