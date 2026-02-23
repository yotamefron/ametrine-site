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
      className="relative py-20 lg:py-32"
      style={{ backgroundColor: "#0a0a0f" }}
    >
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(135deg, #E8650A 0%, #6B3FA0 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
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
            CAPABILITY DEMONSTRATION
          </span>
          <div
            className="h-px flex-1"
            style={{ backgroundColor: "rgba(240,240,245,0.06)" }}
          />
        </div>

        <h2
          className="reveal font-bold text-white mb-12"
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "0.06em",
            lineHeight: 1.2,
          }}
        >
          SEE THE TECHNOLOGY
        </h2>

        {/* Video — gradient border wrapper, max-w-4xl */}
        <div className="reveal max-w-4xl mx-auto">
          {/* Outer gradient border */}
          <div
            style={{
              padding: 2,
              background: "linear-gradient(135deg, #E8650A 0%, #6B3FA0 100%)",
              borderRadius: 8,
            }}
          >
            {/* Inner dark bg */}
            <div
              style={{
                backgroundColor: "#0a0a0f",
                borderRadius: 7,
                overflow: "hidden",
              }}
            >
              {/* 16:9 ratio */}
              <div
                style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
              >
                <iframe
                  src="https://drive.google.com/file/d/17BL89_yvN7OfiGjOiTlYYn_gjWgbJc32/preview"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  allow="autoplay"
                  allowFullScreen
                  title="Ametrine Capability Demonstration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
