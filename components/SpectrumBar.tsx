"use client";

const SEGMENTS = [
  { label: "UV",                          flex: 3  },
  { label: "VISUAL",                      flex: 8  },
  { label: "NEAR INFRARED",              flex: 10 },
  { label: "SHORT WAVE INFRARED (SWIR)", flex: 12 },
  { label: "MID WAVE INFRARED (MWIR)",   flex: 10 },
  { label: "LONG WAVE INFRARED (LWIR)",  flex: 15 },
  { label: "RADAR",                       flex: 42 },
];

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

// Divider positions (between segments, cumulative %)
const DIVIDERS = [3, 11, 21, 33, 43, 58];

const BAR_GRADIENT = `linear-gradient(to right,
  #8B00FF 0%,
  #4400FF 3%,
  #0000FF 5%,
  #0066FF 8%,
  #00CCFF 11%,
  #00FF88 14%,
  #AAFF00 17%,
  #FFD700 20%,
  #FF6B00 23%,
  #CC0000 28%,
  #990000 45%,
  #880000 58%,
  #AA1133 72%,
  #9966AA 80%,
  #7744AA 100%
)`;

export default function SpectrumBar() {
  return (
    <section style={{ backgroundColor: "#08080f", padding: "20px 16px 28px", position: "relative", zIndex: 1 }}>
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
              {/* Thin white dividers between segments */}
              {DIVIDERS.map((pct) => (
                <div
                  key={pct}
                  style={{
                    position: "absolute",
                    left: `${pct}%`,
                    top: 0,
                    bottom: 0,
                    width: 1,
                    backgroundColor: "rgba(255,255,255,0.3)",
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
