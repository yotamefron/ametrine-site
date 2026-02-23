"use client";

import { useEffect, useRef, useState } from "react";

export default function PatternsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("revealed"), i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleView = () => window.open("/brochures/patterns_catalog.pdf", "_blank");
  const handleDownload = () => window.open("/brochures/patterns_catalog.pdf", "_blank");

  return (
    <section
      id="patterns"
      ref={sectionRef}
      className="relative py-20 lg:py-32"
      style={{ backgroundColor: "#0d0d16" }}
    >
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-5">
          <div
            className="h-px w-10 shrink-0"
            style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }}
          />
          <span
            style={{
              color: "#FF6B00",
              fontSize: 11,
              letterSpacing: "0.14em",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            PATTERNS
          </span>
          <div
            className="h-px flex-1"
            style={{ backgroundColor: "rgba(240,240,245,0.06)" }}
          />
        </div>

        <h2
          className="reveal font-bold mb-3"
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.08em",
            lineHeight: 1.15,
            background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          PATTERN CATALOG
        </h2>
        <p
          className="reveal mb-14"
          style={{ color: "#8888aa", fontSize: 15, lineHeight: 1.7 }}
        >
          Full terrain-matched pattern library for AMETRINE concealment systems.
        </p>

        {/* Featured wide card */}
        <div
          className="reveal relative flex flex-col lg:flex-row"
          style={{
            backgroundColor: "#111118",
            border: "1px solid rgba(255,107,0,0.1)",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
            boxShadow: hovered ? "0 0 32px rgba(255,215,0,0.1)" : "none",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Gradient top border */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: 3,
              background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
            }}
          />

          {/* Cover area */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "100%",
              minHeight: 220,
              backgroundColor: "#0d0d16",
              backgroundImage:
                "repeating-linear-gradient(-45deg, rgba(255,107,0,0.03) 0, rgba(255,107,0,0.03) 1px, transparent 0, transparent 50%)",
              backgroundSize: "18px 18px",
            }}
          >
            {/* Corner accents */}
            <div
              className="absolute top-0 left-0 w-6 h-6"
              style={{
                borderTop: "1px solid rgba(255,107,0,0.25)",
                borderLeft: "1px solid rgba(255,107,0,0.25)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-6 h-6"
              style={{
                borderTop: "1px solid rgba(255,107,0,0.25)",
                borderRight: "1px solid rgba(255,107,0,0.25)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-6 h-6"
              style={{
                borderBottom: "1px solid rgba(255,107,0,0.25)",
                borderLeft: "1px solid rgba(255,107,0,0.25)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-6 h-6"
              style={{
                borderBottom: "1px solid rgba(255,107,0,0.25)",
                borderRight: "1px solid rgba(255,107,0,0.25)",
              }}
            />

            <div className="text-center px-8">
              <div
                className="font-black mb-2"
                style={{
                  background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: "clamp(1.2rem, 3vw, 2rem)",
                  letterSpacing: "0.12em",
                  fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                }}
              >
                PATTERNS CATALOG
              </div>
              <div
                style={{
                  color: "#8888aa",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                }}
              >
                MULTI-TERRAIN
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-8 lg:min-w-[360px]">
            <div>
              <span
                style={{
                  display: "inline-block",
                  color: "#FF6B00",
                  backgroundColor: "rgba(255,107,0,0.08)",
                  border: "1px solid rgba(255,107,0,0.2)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  padding: "3px 8px",
                  marginBottom: 14,
                  textTransform: "uppercase",
                }}
              >
                PATTERNS
              </span>
              <h3
                className="font-bold mb-3"
                style={{
                  fontSize: 18,
                  letterSpacing: "0.05em",
                  lineHeight: 1.3,
                  background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                PATTERNS CATALOG
              </h3>
              <p
                style={{
                  color: "#8888aa",
                  fontSize: 15,
                  lineHeight: 1.7,
                }}
              >
                Comprehensive terrain-matched pattern library covering desert, woodland, arctic,
                urban, and multispectral concealment configurations for all AMETRINE systems.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={handleView}
                className="flex-1 flex items-center justify-center gap-2 font-bold transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,107,0,0.3)",
                  backgroundColor: "transparent",
                  color: "rgba(255,107,0,0.85)",
                  padding: "10px 24px",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  cursor: "pointer",
                  minHeight: 44,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FF6B00";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#FF6B00";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,107,0,0.85)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(255,107,0,0.3)";
                }}
              >
                VIEW
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 flex items-center justify-center gap-2 font-bold transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,107,0,0.15)",
                  backgroundColor: "rgba(255,107,0,0.08)",
                  color: "#FF6B00",
                  padding: "10px 24px",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  cursor: "pointer",
                  minHeight: 44,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "rgba(255,107,0,0.16)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "rgba(255,107,0,0.08)";
                }}
              >
                DOWNLOAD
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
