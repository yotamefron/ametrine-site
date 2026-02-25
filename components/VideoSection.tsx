"use client";

import { useRef, useState } from "react";

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

  return (
    <section
      id="video"
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "#08080f", zIndex: 1 }}
    >
      {/* Video container — always centered, max-width 1400 */}
      <div className="w-full" style={{ maxWidth: 1400, margin: "0 auto" }}>
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
        </div>
      </div>
    </section>
  );
}
