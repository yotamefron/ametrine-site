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
      className="relative"
      style={{ backgroundColor: "#08080f", paddingTop: 72 }}
    >
      {/* Gradient line under navbar */}
      <div
        className="absolute top-[72px] left-0 right-0 h-px"
        style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-5">
          <div className="h-px w-10 shrink-0" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />
          <span style={{ color: "#FF6B00", fontSize: 11, letterSpacing: "0.14em", fontWeight: 600, textTransform: "uppercase" }}>
            CAPABILITY DEMONSTRATION
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(240,240,245,0.06)" }} />
        </div>

        <h2
          className="reveal font-bold mb-10"
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "0.06em",
            lineHeight: 1.2,
            background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          SEE THE TECHNOLOGY
        </h2>

        {/* Video — gradient border wrapper */}
        <div className="reveal max-w-4xl mx-auto">
          <div
            style={{
              padding: 2,
              background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
              borderRadius: 8,
            }}
          >
            <div style={{ backgroundColor: "#08080f", borderRadius: 7, overflow: "hidden" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src="https://drive.google.com/file/d/17BL89_yvN7OfiGjOiTlYYn_gjWgbJc32/preview"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
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
