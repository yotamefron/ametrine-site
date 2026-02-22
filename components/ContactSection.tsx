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
      className="relative py-28 lg:py-36"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-5 mb-16 reveal">
          <div className="h-px" style={{ width: 48, backgroundColor: "#C9A84C" }} />
          <span style={{ color: "#C9A84C", fontSize: 10, letterSpacing: "0.4em", fontWeight: 700 }}>
            CONTACT
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "#1a1a1a" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2
              className="reveal font-black text-white mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "0.12em", lineHeight: 1.1 }}
            >
              ESTABLISH
              <br />
              <span style={{ color: "#C9A84C" }}>CONTACT</span>
            </h2>

            <p
              className="reveal mb-10"
              style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, lineHeight: 1.9, letterSpacing: "0.04em", maxWidth: 420 }}
            >
              For sales inquiries, product demonstrations, and authorized procurement.
              All communications are handled through encrypted channels.
            </p>

            {/* Email */}
            <div className="reveal">
              <div
                style={{ color: "rgba(255,255,255,0.2)", fontSize: 9, letterSpacing: "0.3em", marginBottom: 8, fontWeight: 700 }}
              >
                SALES INQUIRIES
              </div>
              <a
                href="mailto:sales@ametrine-tech.com"
                className="font-bold transition-all duration-200"
                style={{
                  color: "#C9A84C",
                  fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  display: "inline-block",
                  borderBottom: "1px solid rgba(201,168,76,0.3)",
                  paddingBottom: 4,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#C9A84C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(201,168,76,0.3)";
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
              style={{ color: "rgba(255,255,255,0.2)", fontSize: 9, letterSpacing: "0.3em", fontWeight: 700 }}
            >
              CERTIFICATIONS &amp; COMPLIANCE
            </div>
            {BADGES.map((badge) => (
              <div
                key={badge.label}
                className="reveal flex items-center gap-5"
                style={{
                  border: "1px solid rgba(201,168,76,0.12)",
                  padding: "20px 24px",
                  backgroundColor: "#0a0a0a",
                }}
              >
                <div
                  className="w-px self-stretch"
                  style={{ backgroundColor: "#C9A84C", minHeight: 40 }}
                />
                <div>
                  <div
                    style={{ color: "#C9A84C", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em" }}
                  >
                    {badge.label}
                  </div>
                  <div
                    style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, letterSpacing: "0.1em", marginTop: 3 }}
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
