"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative"
      style={{ backgroundColor: "#0a0a09" }}
    >
      {/* Top border */}
      <div className="h-px w-full" style={{ backgroundColor: "rgba(252,193,23,0.15)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <svg width="36" height="42" viewBox="0 0 36 42" fill="none">
                <path
                  d="M18 1.5L34.5 11V31L18 40.5L1.5 31V11L18 1.5Z"
                  fill="none"
                  stroke="#fcc117"
                  strokeWidth="1.2"
                />
                <path
                  d="M18 8L28 14V28L18 34L8 28V14L18 8Z"
                  fill="#fcc117"
                  fillOpacity="0.08"
                  stroke="#fcc117"
                  strokeWidth="0.5"
                />
                <text
                  x="18"
                  y="24"
                  textAnchor="middle"
                  fill="#fcc117"
                  fontSize="6.5"
                  fontWeight="700"
                  letterSpacing="0.5"
                  fontFamily="monospace"
                >
                  AMT
                </text>
              </svg>
              <span
                className="text-white font-bold tracking-[0.25em] text-base"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                AMETRINE
              </span>
            </div>
            <p
              className="text-xs leading-relaxed tracking-wide mb-6"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Multispectral concealment solutions engineered for tactical superiority.
              Stealth across all domains — visual, near-IR, thermal.
            </p>
            <div className="flex items-center gap-3">
              <div
                className="text-[10px] tracking-[0.15em] px-2 py-1 border"
                style={{ borderColor: "rgba(252,193,23,0.2)", color: "rgba(252,193,23,0.5)" }}
              >
                ISO 9001:2015
              </div>
              <div
                className="text-[10px] tracking-[0.15em] px-2 py-1 border"
                style={{ borderColor: "rgba(252,193,23,0.2)", color: "rgba(252,193,23,0.5)" }}
              >
                BERRY COMPLIANT
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-[10px] font-bold tracking-[0.3em] mb-6"
              style={{ color: "#fcc117" }}
            >
              CATALOG
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Brochures", href: "#brochures" },
                { label: "Patterns", href: "#patterns" },
                { label: "Video", href: "#video" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() =>
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-xs tracking-wide hover:text-[#fcc117] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[10px] font-bold tracking-[0.3em] mb-6"
              style={{ color: "#fcc117" }}
            >
              CONTACT
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <div
                  className="text-[10px] tracking-widest mb-1"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  SALES INQUIRIES
                </div>
                <a
                  href="mailto:sales@ametrine-tech.com"
                  className="text-sm font-medium tracking-wide hover:text-[#fcc117] transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  sales@ametrine-tech.com
                </a>
              </div>
              <div>
                <div
                  className="text-[10px] tracking-widest mb-2"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  CERTIFICATIONS
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    ISO 9001:2015 Certified
                  </span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Berry Amendment Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span
            className="text-[10px] tracking-widest"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            © {currentYear} AMETRINE TECHNOLOGIES. ALL RIGHTS RESERVED.
          </span>
          <span
            className="text-[10px] tracking-widest"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            CONFIDENTIAL — AUTHORIZED DISTRIBUTION ONLY
          </span>
        </div>
      </div>
    </footer>
  );
}
