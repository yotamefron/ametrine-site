"use client";

const VIDEO_CONFIG = {
  type: "placeholder" as "placeholder" | "local" | "youtube",
  url: "",
};

export default function VideoSection() {
  return (
    <section
      id="video"
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: "#0e0e0c" }}
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-5 mb-14">
          <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#fcc117" }} />
          <span
            className="text-xs tracking-[0.35em] font-bold"
            style={{ color: "#fcc117" }}
          >
            VIDEO
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left text */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              SEE THE
              <br />
              <span style={{ color: "#fcc117" }}>SYSTEM</span>
              <br />
              IN ACTION
            </h2>
            <p className="text-white/40 text-sm leading-relaxed tracking-wide">
              Field-tested across multiple operational environments. Watch our systems perform
              across visual, near-infrared, and thermal spectrums.
            </p>
          </div>

          {/* Video player */}
          <div>
            {VIDEO_CONFIG.type === "placeholder" && (
              <div
                className="relative w-full aspect-video flex flex-col items-center justify-center border"
                style={{
                  backgroundColor: "#1a1a18",
                  borderColor: "rgba(252,193,23,0.12)",
                }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l" style={{ borderColor: "#fcc117" }} />
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r" style={{ borderColor: "#fcc117" }} />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l" style={{ borderColor: "#fcc117" }} />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r" style={{ borderColor: "#fcc117" }} />

                {/* Play icon */}
                <div
                  className="w-16 h-16 rounded-full border-2 flex items-center justify-center mb-5"
                  style={{ borderColor: "rgba(252,193,23,0.3)" }}
                >
                  <svg
                    className="w-6 h-6 ml-1"
                    fill="#fcc117"
                    fillOpacity="0.4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <span
                  className="text-sm font-bold tracking-[0.3em]"
                  style={{ color: "rgba(252,193,23,0.4)" }}
                >
                  VIDEO COMING SOON
                </span>
                <span
                  className="text-xs tracking-widest mt-2"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  FIELD DEMONSTRATION — RESTRICTED
                </span>
              </div>
            )}

            {VIDEO_CONFIG.type === "local" && VIDEO_CONFIG.url && (
              <div className="relative w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  style={{ backgroundColor: "#1a1a18" }}
                >
                  <source src={VIDEO_CONFIG.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {VIDEO_CONFIG.type === "youtube" && VIDEO_CONFIG.url && (
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${VIDEO_CONFIG.url}`}
                  title="Ametrine Technologies"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
