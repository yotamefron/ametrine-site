"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

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
      className="relative md:pt-[72px]"
      style={{ backgroundColor: "#08080f" }}
    >
      {/* Gradient line under navbar — desktop only (video is first on desktop) */}
      <div
        className="hidden md:block absolute top-[72px] left-0 right-0 h-px"
        style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-16">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-5">
          <div className="h-px w-10 shrink-0" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />
          <span style={{ color: "#FF6B00", fontSize: 11, letterSpacing: "0.14em", fontWeight: 600, textTransform: "uppercase" }}>
            CAPABILITY DEMONSTRATION
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(240,240,245,0.06)" }} />
        </div>

        <h2
          className="reveal font-bold mb-6"
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
              {/* 16:9 ratio container */}
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>

                {/* Loading spinner — shown until iframe fires onLoad */}
                {!videoLoaded && (
                  <div
                    style={{
                      position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                      display: "flex", flexDirection: "column", alignItems: "center",
                      justifyContent: "center", gap: 16,
                      backgroundColor: "#0d0d16", zIndex: 1,
                    }}
                  >
                    <div
                      className="animate-spin"
                      style={{
                        width: 40, height: 40, borderRadius: "50%",
                        border: "3px solid rgba(255,215,0,0.15)",
                        borderTopColor: "#FFD700",
                      }}
                    />
                    <span style={{ color: "#8888aa", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                      LOADING VIDEO
                    </span>
                  </div>
                )}

                <iframe
                  src="https://drive.google.com/file/d/17BL89_yvN7OfiGjOiTlYYn_gjWgbJc32/preview?autoplay=1"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  title="Ametrine Capability Demonstration"
                  onLoad={() => setVideoLoaded(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
