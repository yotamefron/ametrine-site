"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative" style={{ backgroundColor: "#08080f" }}>
      {/* Gradient separator line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(135deg, transparent, rgba(255,215,0,0.5), rgba(123,47,190,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-icon.png"
                alt="Ametrine logo"
                style={{ width: 32, height: "auto" }}
              />
              <span
                className="text-white font-bold"
                style={{ fontSize: 15, letterSpacing: "0.3em" }}
              >
                AMETRINE
              </span>
            </div>
            <p
              style={{
                color: "#8888aa",
                fontSize: 13,
                letterSpacing: "0.04em",
                lineHeight: 1.7,
                maxWidth: 400,
              }}
            >
              Multispectral concealment engineered for the modern battlefield — visual,
              near-IR, thermal, and radar signature management across all domains.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                color: "#FF6B00",
                fontSize: 10,
                letterSpacing: "0.3em",
                fontWeight: 700,
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              CATALOG
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Brochures", href: "#brochures" },
                { label: "Patterns", href: "#patterns" },
                { label: "Video", href: "#video" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() =>
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-left nav-link"
                  style={{ fontSize: 12 }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-12 pt-8"
          style={{ borderTop: "1px solid rgba(240,240,245,0.05)" }}
        >
          <span
            style={{
              color: "rgba(240,240,245,0.18)",
              fontSize: 10,
              letterSpacing: "0.18em",
            }}
          >
            © {currentYear} AMETRINE TECHNOLOGIES. ALL RIGHTS RESERVED.
          </span>
          <div className="flex flex-col items-end gap-3">
            <a
              href="mailto:sales@ametrine-tech.com"
              style={{
                color: "rgba(255,107,0,0.4)",
                fontSize: 10,
                letterSpacing: "0.15em",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#FF6B00";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,107,0,0.4)";
              }}
            >
              sales@ametrine-tech.com
            </a>
            <a
              href="https://www.linkedin.com/company/ametirne-technologie's/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ametrine on LinkedIn"
              style={{
                color: "rgba(240,240,245,0.3)",
                transition: "color 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#FFD700";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,240,245,0.3)";
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
