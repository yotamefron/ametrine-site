"use client";

export default function PatternsSection() {
  const pdfPath = "/brochures/patterns_catalog.pdf";

  return (
    <section
      id="patterns"
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: "#0e0e0c" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-5">
          <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#fcc117" }} />
          <span
            className="text-xs tracking-[0.35em] font-bold"
            style={{ color: "#fcc117" }}
          >
            PATTERNS
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
        </div>

        <div className="mb-14">
          <h2
            className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            PATTERN LIBRARY
          </h2>
          <p className="text-white/40 text-sm tracking-wide">
            Full terrain-matched pattern catalog for AMETRINE concealment systems.
          </p>
        </div>

        {/* Single card */}
        <div className="max-w-sm">
          <div
            className="group relative flex flex-col border transition-all duration-300 hover:border-[#fcc117]/40"
            style={{
              backgroundColor: "#1a1a18",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-px transition-all duration-300 group-hover:bg-[#fcc117]" />
            <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#fcc117]/20 group-hover:border-[#fcc117]/60 transition-colors duration-300" />

            <div className="p-6 flex flex-col">
              {/* Badge */}
              <div className="mb-4">
                <span
                  className="inline-block text-[10px] font-bold tracking-[0.2em] px-2.5 py-1 border"
                  style={{
                    color: "#fcc117",
                    borderColor: "rgba(252,193,23,0.25)",
                    backgroundColor: "rgba(252,193,23,0.05)",
                  }}
                >
                  PATTERNS
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-white font-bold tracking-wide mb-3 text-sm leading-snug group-hover:text-[#fcc117] transition-colors duration-300"
                style={{ fontFamily: "system-ui, sans-serif", letterSpacing: "0.08em" }}
              >
                PATTERNS CATALOG
              </h3>

              {/* Description */}
              <p className="text-white/40 text-xs leading-relaxed mb-6">
                Comprehensive terrain-matched pattern library covering desert, woodland, arctic, urban,
                and multispectral concealment configurations.
              </p>

              {/* Note */}
              <p
                className="text-[10px] tracking-widest mb-6"
                style={{ color: "rgba(252,193,23,0.4)" }}
              >
                // UPLOAD patterns_catalog.pdf to /public/brochures/
              </p>

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold tracking-[0.15em] border transition-all duration-300 hover:border-[#fcc117] hover:text-[#fcc117]"
                  style={{
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  VIEW
                </a>
                <a
                  href={pdfPath}
                  download="patterns_catalog.pdf"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold tracking-[0.15em] transition-all duration-300 hover:brightness-90"
                  style={{
                    backgroundColor: "#fcc117",
                    color: "#141412",
                  }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  DOWNLOAD
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
