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
        </div>
      </div>
    </footer>
  );
}
