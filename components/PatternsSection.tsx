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
      className="relative py-28 lg:py-36"
      style={{ backgroundColor: "#080808" }}
    >
      {/* Section separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.15), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-5 mb-4 reveal">
          <div className="h-px" style={{ width: 48, backgroundColor: "#C9A84C" }} />
          <span
            style={{ color: "#C9A84C", fontSize: 10, letterSpacing: "0.4em", fontWeight: 700 }}
          >
            PATTERNS
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "#1a1a1a" }} />
        </div>

        <h2
          className="reveal font-black text-white mb-3"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.15em" }}
        >
          PATTERN CATALOG
        </h2>
        <p
          className="reveal mb-14"
          style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, letterSpacing: "0.08em" }}
        >
          Full terrain-matched pattern library for AMETRINE concealment systems.
        </p>

        {/* Featured wide card */}
        <div
          className="reveal relative flex flex-col lg:flex-row"
          style={{
            backgroundColor: "#0d0d0d",
            border: "1px solid #1a1a1a",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
            boxShadow: hovered ? "0 20px 50px rgba(201,168,76,0.1)" : "none",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Gold left accent */}
          <div
            className="absolute left-0 top-0 bottom-0"
            style={{ width: 3, backgroundColor: "#C9A84C" }}
          />

          {/* Cover area */}
          <div
            className="relative flex items-center justify-center"
            style={{
              marginLeft: 3,
              width: "100%",
              minHeight: 220,
              backgroundColor: "#090909",
              backgroundImage:
                "repeating-linear-gradient(-45deg, rgba(201,168,76,0.04) 0, rgba(201,168,76,0.04) 1px, transparent 0, transparent 50%)",
              backgroundSize: "18px 18px",
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6" style={{ borderTop: "1px solid rgba(201,168,76,0.3)", borderLeft: "1px solid rgba(201,168,76,0.3)" }} />
            <div className="absolute top-0 right-0 w-6 h-6" style={{ borderTop: "1px solid rgba(201,168,76,0.3)", borderRight: "1px solid rgba(201,168,76,0.3)" }} />
            <div className="absolute bottom-0 left-0 w-6 h-6" style={{ borderBottom: "1px solid rgba(201,168,76,0.3)", borderLeft: "1px solid rgba(201,168,76,0.3)" }} />
            <div className="absolute bottom-0 right-0 w-6 h-6" style={{ borderBottom: "1px solid rgba(201,168,76,0.3)", borderRight: "1px solid rgba(201,168,76,0.3)" }} />

            <div className="text-center px-8">
              <div
                className="font-black mb-2"
                style={{ color: "#C9A84C", fontSize: "clamp(1.2rem, 3vw, 2rem)", letterSpacing: "0.12em" }}
              >
                PATTERNS CATALOG
              </div>
              <div
                style={{ color: "#CC0000", fontSize: 10, fontWeight: 700, letterSpacing: "0.25em" }}
              >
                MULTI-TERRAIN
              </div>
            </div>

            {/* COMING SOON overlay */}
            <div
              className="absolute"
              style={{
                color: "rgba(201,168,76,0.04)",
                fontSize: 48,
                fontWeight: 900,
                letterSpacing: "0.15em",
                transform: "rotate(-15deg)",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              CLASSIFIED
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-8 lg:min-w-[360px]" style={{ marginLeft: 0 }}>
            <div>
              <span
                style={{
                  display: "inline-block",
                  color: "#CC0000",
                  backgroundColor: "rgba(204,0,0,0.08)",
                  border: "1px solid rgba(204,0,0,0.2)",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  padding: "3px 8px",
                  marginBottom: 14,
                }}
              >
                PATTERNS
              </span>
              <h3
                className="font-bold mb-3"
                style={{ color: "#C9A84C", fontSize: 18, letterSpacing: "0.1em" }}
              >
                PATTERNS CATALOG
              </h3>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, lineHeight: 1.7, letterSpacing: "0.04em" }}>
                Comprehensive terrain-matched pattern library covering desert, woodland, arctic,
                urban, and multispectral concealment configurations for all AMETRINE systems.
              </p>
              <div
                className="mt-4"
                style={{ color: "rgba(201,168,76,0.4)", fontSize: 11, letterSpacing: "0.2em", fontStyle: "italic" }}
              >
                Catalog upload coming soon
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={handleView}
                className="flex items-center gap-2 font-bold transition-all duration-200"
                style={{
                  border: "1px solid rgba(201,168,76,0.3)",
                  backgroundColor: "transparent",
                  color: "rgba(201,168,76,0.7)",
                  padding: "10px 24px",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  cursor: "pointer",
                  flex: 1,
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#C9A84C";
                  (e.currentTarget as HTMLButtonElement).style.color = "#080808";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(201,168,76,0.7)";
                }}
              >
                VIEW
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 font-bold transition-all duration-200"
                style={{
                  border: "1px solid #1a1a1a",
                  backgroundColor: "#111111",
                  color: "#C9A84C",
                  padding: "10px 24px",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  cursor: "pointer",
                  flex: 1,
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#111111";
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
