"use client";

const SEGMENTS = [
  { label: "UV",                           color: "linear-gradient(90deg, #C850C0, #8B00FF)", flex: 3  },
  { label: "VISUAL",                       color: "linear-gradient(90deg, #FF6B00, #FFD700)", flex: 8  },
  { label: "NEAR INFRARED",               color: "#8B0000",                                  flex: 10 },
  { label: "SHORT WAVE INFRARED (SWIR)",  color: "#CC0000",                                  flex: 12 },
  { label: "MID WAVE INFRARED (MWIR)",    color: "#990000",                                  flex: 10 },
  { label: "LONG WAVE INFRARED (LWIR)",   color: "#CC2244",                                  flex: 15 },
  { label: "RADAR",                        color: "#9966AA",                                  flex: 42 },
];

// Cumulative % at each boundary (based on flex totals: 3,8,10,12,10,15,42 = 100)
const MARKERS = [
  { label: "360nm", pct: 0   },
  { label: "400nm", pct: 3   },
  { label: "700nm", pct: 11  },
  { label: "1.3μm", pct: 21  },
  { label: "3μm",   pct: 33  },
  { label: "5μm",   pct: 43  },
  { label: "1mm",   pct: 58  },
  { label: "1m",    pct: 100 },
];

export default function SpectrumBar() {
  return (
    <section style={{ backgroundColor: "#08080f", padding: "20px 16px 28px" }}>
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

        {/* Scrollable on mobile, full-width on desktop */}
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <div style={{ minWidth: 600 }}>

            {/* Wavelength markers above bar */}
            <div style={{ position: "relative", height: 18, marginBottom: 6 }}>
              {MARKERS.map((m) => (
                <span
                  key={m.label}
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

            {/* Color bar */}
            <div
              style={{
                display: "flex",
                height: 56,
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              {SEGMENTS.map((seg) => (
                <div
                  key={seg.label}
                  style={{
                    flex: seg.flex,
                    background: seg.color,
                  }}
                />
              ))}
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
      </div>
    </section>
  );
}
