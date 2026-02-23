"use client";

import { useEffect, useRef } from "react";

const BADGES = [
  { label: "ISO 9001:2015", desc: "Certified" },
  { label: "BERRY ACT", desc: "Compliant" },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 lg:py-32"
      style={{ backgroundColor: "#0d0d16" }}
    >
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(135deg, #E8650A 0%, #6B3FA0 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-5">
          <div
            className="h-px w-10 shrink-0"
            style={{ background: "linear-gradient(135deg, #E8650A, #6B3FA0)" }}
          />
          <span
            style={{
              color: "#E8650A",
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
              className="reveal font-bold text-white mb-8"
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "0.06em",
                lineHeight: 1.15,
              }}
            >
              ESTABLISH
              <br />
              <span style={{ color: "#E8650A" }}>CONTACT</span>
            </h2>

            <p
              className="reveal mb-10"
              style={{
                color: "#8888aa",
                fontSize: 15,
                lineHeight: 1.8,
                maxWidth: 420,
              }}
            >
              For sales inquiries, product demonstrations, and authorized procurement.
              All communications are handled through encrypted channels.
            </p>

            {/* Email */}
            <div className="reveal">
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
              <a
                href="mailto:sales@ametrine-tech.com"
                className="font-bold transition-all duration-200"
                style={{
                  color: "#E8650A",
                  fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  display: "inline-block",
                  borderBottom: "1px solid rgba(232,101,10,0.3)",
                  paddingBottom: 4,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#E8650A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor =
                    "rgba(232,101,10,0.3)";
                }}
              >
                sales@ametrine-tech.com
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
                  border: "1px solid rgba(232,101,10,0.12)",
                  padding: "20px 24px",
                  backgroundColor: "#111118",
                }}
              >
                <div
                  className="w-px self-stretch"
                  style={{ backgroundColor: "#E8650A", minHeight: 40 }}
                />
                <div>
                  <div
                    style={{
                      color: "#E8650A",
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
