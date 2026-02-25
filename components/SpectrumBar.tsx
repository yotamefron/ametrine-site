"use client";

// flex: [2, 6, 12, 8, 8, 14, 50] = 100
const SEGMENTS = [
  { label: "UV",                          flex: 2  },
  { label: "VISUAL",                      flex: 6  },
  { label: "NEAR INFRARED",              flex: 12 },
  { label: "SHORT WAVE INFRARED (SWIR)", flex: 8  },
  { label: "MID WAVE INFRARED (MWIR)",   flex: 8  },
  { label: "LONG WAVE INFRARED (LWIR)",  flex: 14 },
  { label: "RADAR",                       flex: 50 },
];

// Cumulative % at each boundary: 0, 2, 8, 20, 28, 36, 50, 100
const MARKERS = [
  { label: "360nm", pct: 0   },
  { label: "400nm", pct: 2   },
  { label: "700nm", pct: 8   },
  { label: "1.3μm", pct: 20  },
  { label: "3μm",   pct: 28  },
  { label: "5μm",   pct: 36  },
  { label: "1mm",   pct: 50  },
  { label: "1m",    pct: 100 },
];

// Divider positions (between segments, cumulative %)
const DIVIDERS = [2, 8, 20, 28, 36, 50];

const BAR_GRADIENT = `linear-gradient(to right,
  #8B00FF 0%,
  #4400CC 2%,
  #0000FF 3%,
  #0055FF 4%,
  #00AAFF 5%,
  #00FFCC 7%,
  #00FF44 9%,
  #AAFF00 11%,
  #FFD700 14%,
  #FF8800 17%,
  #FF4400 20%,
  #FF2200 22%,
  #DD0000 28%,
  #BB0000 36%,
  #990000 42%,
  #AA0022 52%,
  #BB1144 62%,
  #9955AA 74%,
  #8844BB 87%,
  #7733AA 100%
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
