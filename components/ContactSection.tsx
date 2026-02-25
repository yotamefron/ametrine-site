"use client";

import { useEffect, useRef, useState } from "react";

const BADGES = [
  { label: "ISO 9001:2015", desc: "Certified" },
  { label: "BERRY ACT", desc: "Compliant" },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("revealed"), i * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sales@ametrine-tech.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = "sales@ametrine-tech.com";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "rgba(13,13,22,0.95)", padding: "24px 16px", zIndex: 1 }}
    >
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
        }}
      />

      <div className="max-w-7xl mx-auto" style={{ paddingTop: 24, paddingBottom: 24 }}>
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-5">
          <div
            className="h-px w-10 shrink-0"
            style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }}
          />
          <span
            style={{
              color: "#FF6B00",
              fontSize: 11,
              letterSpacing: "0.14em",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            CONTACT
          </span>
          <div
            className="h-px flex-1"
            style={{ backgroundColor: "rgba(240,240,245,0.06)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2
              className="reveal font-bold text-white"
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "0.06em",
                lineHeight: 1.15,
                marginBottom: 12,
              }}
            >
              ESTABLISH
              <br />
              <span style={{ color: "#FF6B00" }}>CONTACT</span>
            </h2>

            <p
              className="reveal"
              style={{
                color: "#8888aa",
                fontSize: 15,
                lineHeight: 1.8,
                maxWidth: 520,
                marginBottom: 12,
              }}
            >
              For procurement, unit evaluation, and program integration discussions, contact us directly.
            </p>
            <p
              className="reveal"
              style={{
                color: "#8888aa",
                fontSize: 15,
                lineHeight: 1.8,
                maxWidth: 520,
                marginBottom: 16,
              }}
            >
              Meetings, demonstrations, and equipment evaluations can be coordinated directly via email.
            </p>

            {/* Email — copy button */}
            <div className="reveal relative" style={{ display: "inline-block" }}>
              <div
                style={{
                  color: "#8888aa",
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  marginBottom: 8,
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                SALES INQUIRIES
              </div>
              <button
                onClick={handleCopyEmail}
                className="btn-press font-bold transition-all duration-200"
                style={{
                  color: "#FF6B00",
                  fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                  letterSpacing: "0.04em",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid rgba(255,107,0,0.3)",
                  paddingBottom: 4,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  minHeight: 44,
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                sales@ametrine-tech.com
              </button>

              {/* Toast */}
              <span
                style={{
                  position: "absolute",
                  top: -8,
                  right: -56,
                  color: "#FFD700",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  opacity: copied ? 1 : 0,
                  transform: copied ? "translateY(0)" : "translateY(4px)",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                  pointerEvents: "none",
                }}
              >
                COPIED
              </span>
            </div>

            {/* LinkedIn CTA */}
            <div className="reveal" style={{ marginTop: 24 }}>
              <a
                href="https://www.linkedin.com/company/ametirne-technologie%27s/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center gap-3 transition-all duration-200"
                style={{
                  background: "transparent",
                  border: "1px solid #0A66C2",
                  color: "#ffffff",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  padding: "12px 28px",
                  minHeight: 48,
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 12px rgba(10,102,194,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                CONNECT ON LINKEDIN
              </a>
            </div>
          </div>

          {/* Right — Certifications */}
          <div className="flex flex-col gap-5">
            <div
              className="reveal"
              style={{
                color: "#8888aa",
                fontSize: 9,
                letterSpacing: "0.3em",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              CERTIFICATIONS &amp; COMPLIANCE
            </div>
            {BADGES.map((badge) => (
              <div
                key={badge.label}
                className="reveal flex items-center gap-5"
                style={{
                  border: "1px solid rgba(255,107,0,0.12)",
                  padding: "20px 24px",
                  backgroundColor: "#111118",
                  minHeight: 44,
                }}
              >
                <div
                  className="w-px self-stretch"
                  style={{ backgroundColor: "#FF6B00", minHeight: 40 }}
                />
                <div>
                  <div
                    style={{
                      color: "#FF6B00",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                    }}
                  >
                    {badge.label}
                  </div>
                  <div
                    style={{
                      color: "#8888aa",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      marginTop: 3,
                      lineHeight: 1.5,
                    }}
                  >
                    {badge.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
