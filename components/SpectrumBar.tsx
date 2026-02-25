"use client";

// flex: [4, 8, 14, 7, 7, 10, 50] = 100
const SEGMENTS = [
  { label: "UV",                          flex: 4  },
  { label: "VISUAL",                      flex: 8  },
  { label: "NEAR INFRARED",              flex: 14 },
  { label: "SHORT WAVE INFRARED (SWIR)", flex: 7  },
  { label: "MID WAVE INFRARED (MWIR)",   flex: 7  },
  { label: "LONG WAVE INFRARED (LWIR)",  flex: 10 },
  { label: "RADAR",                       flex: 50 },
];

// Cumulative % at each boundary: 0, 4, 12, 26, 33, 40, 50, 100
const MARKERS = [
  { label: "360nm", pct: 0   },
  { label: "400nm", pct: 4   },
  { label: "700nm", pct: 12  },
  { label: "1.3μm", pct: 26  },
  { label: "3μm",   pct: 33  },
  { label: "5μm",   pct: 40  },
  { label: "1mm",   pct: 50  },
  { label: "1m",    pct: 100 },
];

// Single divider: only between VISUAL and NEAR INFRARED (at 12%)
const VISUAL_NIR_DIVIDER = 12;

const BAR_GRADIENT = `linear-gradient(to right,
  #8B00FF 0%,
  #4400CC 4%,
  #0000FF 5%,
  #0055FF 7%,
  #00AAFF 8%,
  #00FFCC 11%,
  #00FF44 13%,
  #AAFF00 16%,
  #FFD700 19%,
  #FF8800 23%,
  #FF4400 26%,
  #FF2200 28%,
  #DD0000 33%,
  #BB0000 40%,
  #990000 44%,
  #AA0022 52%,
  #BB1144 62%,
  #9955AA 74%,
  #8844BB 87%,
  #7733AA 100%
)`;

export default function SpectrumBar() {
  return (
    <section style={{ backgroundColor: "rgba(8,8,15,0.95)", padding: "20px 16px 28px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>

        {/* Title */}
        <p
          style={{
            textAlign: "center",
            color: "#FFD700",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase" as const,
            marginBottom: 20,
          }}
        >
          MULTISPECTRAL COVERAGE
        </p>

        {/* Scrollable on mobile */}
        <div className="relative">
          <div
            className="no-scrollbar"
            style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
          >
            <div style={{ minWidth: 700 }}>

              {/* Wavelength markers above bar */}
              <div style={{ position: "relative", height: 18, marginBottom: 6 }}>
                {MARKERS.map((m) => (
                  <span
                    key={m.label}
                    className={m.label === "400nm" ? "hidden sm:block" : undefined}
                    style={{
                      position: "absolute",
                      left: `${m.pct}%`,
                      transform:
                        m.pct === 0   ? "none"
                        : m.pct === 100 ? "translateX(-100%)"
                        : "translateX(-50%)",
                      fontSize: 9,
                      color: "rgba(240,240,245,0.45)",
                      letterSpacing: "0.06em",
                      whiteSpace: "nowrap",
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {m.label}
                  </span>
                ))}
              </div>

              {/* Color bar — single continuous gradient */}
              <div
                style={{
                  position: "relative",
                  height: 56,
                  borderRadius: 4,
                  overflow: "hidden",
                  background: BAR_GRADIENT,
                }}
              >
                {/* 2px solid white divider between VISUAL and NEAR INFRARED only */}
                <div
                  style={{
                    position: "absolute",
                    left: `${VISUAL_NIR_DIVIDER}%`,
                    top: 0,
                    bottom: 0,
                    width: 2,
                    backgroundColor: "#ffffff",
                  }}
                />
              </div>

              {/* Segment labels below bar */}
              <div style={{ display: "flex", marginTop: 8 }}>
                {SEGMENTS.map((seg) => (
                  <div
                    key={seg.label}
                    style={{
                      flex: seg.flex,
                      textAlign: "center",
                      fontSize: 8,
                      color: "rgba(240,240,245,0.55)",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase" as const,
                      lineHeight: 1.35,
                      padding: "0 2px",
                      wordBreak: "break-word" as const,
                    }}
                  >
                    {seg.label}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right-side fade hint on mobile */}
          <div
            className="sm:hidden pointer-events-none absolute right-0 top-0 bottom-0"
            style={{
              width: 40,
              background: "linear-gradient(to right, transparent, #080808)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
