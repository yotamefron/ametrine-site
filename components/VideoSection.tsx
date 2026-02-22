"use client";

import { useEffect, useRef } from "react";

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="video"
      ref={sectionRef}
      className="relative py-28 lg:py-36"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Section separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-16 reveal">
          <div className="h-px" style={{ width: 48, backgroundColor: "#C9A84C" }} />
          <span
            style={{ color: "#C9A84C", fontSize: 10, letterSpacing: "0.4em", fontWeight: 700 }}
          >
            FIELD DEMONSTRATION
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "#1a1a1a" }} />
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
          {/* Left text */}
          <div>
            <h2
              className="reveal font-black text-white leading-tight mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "0.12em",
                lineHeight: 1.1,
              }}
            >
              SEE THE
              <br />
              <span style={{ color: "#C9A84C" }}>SYSTEM</span>
              <br />
              IN ACTION
            </h2>
            <p
              className="reveal"
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: 13,
                lineHeight: 1.8,
                letterSpacing: "0.05em",
              }}
            >
              Field-tested across multiple operational environments. Watch AMETRINE systems
              perform across visual, near-infrared, thermal, and RADAR spectrums — in real combat conditions.
            </p>
          </div>

          {/* Video placeholder */}
          <div className="reveal">
            <div
              className="relative w-full flex flex-col items-center justify-center"
              style={{
                aspectRatio: "16/9",
                backgroundColor: "#0a0a0a",
                border: "1px solid #1a1a1a",
                overflow: "hidden",
              }}
            >
              {/* Corner accents */}
              {[
                { top: 0, left: 0, borderTop: "1px solid #C9A84C", borderLeft: "1px solid #C9A84C" },
                { top: 0, right: 0, borderTop: "1px solid #C9A84C", borderRight: "1px solid #C9A84C" },
                { bottom: 0, left: 0, borderBottom: "1px solid #C9A84C", borderLeft: "1px solid #C9A84C" },
                { bottom: 0, right: 0, borderBottom: "1px solid #C9A84C", borderRight: "1px solid #C9A84C" },
              ].map((style, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{ width: 32, height: 32, ...style }}
                />
              ))}

              {/* CLASSIFIED watermark */}
              <div
                className="absolute pointer-events-none"
                style={{
                  color: "rgba(201,168,76,0.03)",
                  fontSize: 80,
                  fontWeight: 900,
                  letterSpacing: "0.15em",
                  transform: "rotate(-15deg)",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                }}
              >
                CLASSIFIED
              </div>

              {/* Hexagonal play button */}
              <div
                className="relative z-10 flex flex-col items-center gap-5 cursor-pointer group"
                style={{ padding: 20 }}
              >
                <svg
                  width="88"
                  height="88"
                  viewBox="0 0 88 88"
                  fill="none"
                  className="transition-all duration-300 group-hover:scale-110"
                >
                  <polygon
                    points="44,4 82,24 82,64 44,84 6,64 6,24"
                    fill="rgba(201,168,76,0.06)"
                    stroke="rgba(201,168,76,0.5)"
                    strokeWidth="1.5"
                  />
                  <polygon
                    points="44,16 70,31 70,61 44,76 18,61 18,31"
                    fill="rgba(201,168,76,0.04)"
                    stroke="rgba(201,168,76,0.2)"
                    strokeWidth="1"
                  />
                  <path d="M36 30 L62 44 L36 58 Z" fill="#C9A84C" fillOpacity="0.7" />
                </svg>

                <div className="text-center">
                  <div
                    style={{
                      color: "rgba(201,168,76,0.5)",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.3em",
                    }}
                  >
                    VIDEO COMING SOON
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.2)",
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      marginTop: 4,
                    }}
                  >
                    FIELD DEMONSTRATION — RESTRICTED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
