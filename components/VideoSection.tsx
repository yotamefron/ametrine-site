"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_CONFIG = {
  type: "youtube" as const,
  url: "https://youtu.be/8mK50pqrJq0",
};

function getEmbedUrl(): string {
  if (VIDEO_CONFIG.type === "youtube") {
    const id = VIDEO_CONFIG.url.match(/(?:youtu\.be\/|v=)([^&?/]+)/)?.[1] ?? "";
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&rel=0`;
  }
  return VIDEO_CONFIG.url;
}

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const embedUrl = getEmbedUrl();

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

      {/* Video container — always centered, max-width 1400 */}
      <div className="w-full" style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="relative">
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
              src={embedUrl}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
              title="Ametrine Capability Demonstration"
              onLoad={() => setVideoLoaded(true)}
            />

            {/* Overlay — gradient + text */}
            <div
              className="reveal"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(8,8,8,0.1), rgba(8,8,8,0.5))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "24px 16px",
                  maxWidth: 680,
                  background: "rgba(8,8,8,0.35)",
                  borderRadius: 4,
                }}
              >
                <p
                  className="font-bold"
                  style={{
                    fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                    fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
                    letterSpacing: "0.06em",
                    lineHeight: 1.3,
                    color: "#f0f0f5",
                    marginBottom: 12,
                  }}
                >
                  Operational Multispectral Signature Management Systems.
                </p>
                <p
                  style={{
                    color: "#c0c0d0",
                    fontSize: "clamp(0.7rem, 1.3vw, 0.88rem)",
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  Ametrine designs and delivers mission-configured signature control solutions for units and defense programs operating under persistent multi-sensor surveillance.
                </p>
                <button
                  className="btn-press font-bold"
                  onClick={() => document.getElementById("brochures")?.scrollIntoView({ behavior: "smooth" })}
                  style={{
                    pointerEvents: "auto",
                    background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
                    color: "#08080f",
                    padding: "12px 32px",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    border: "none",
                    cursor: "pointer",
                    minHeight: 44,
                    fontFamily: "inherit",
                    fontWeight: 700,
                  }}
                >
                  ACCESS SOLUTIONS CATALOG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
