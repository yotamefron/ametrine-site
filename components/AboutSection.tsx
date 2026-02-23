"use client";

import { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("revealed"), i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32"
      style={{ backgroundColor: "#0d0d16" }}
    >
      {/* Top gradient divider line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(135deg, #E8650A 0%, #6B3FA0 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Threat block */}
          <div>
            <div className="reveal flex items-center gap-4 mb-6">
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
                THE OPERATIONAL REALITY
              </span>
            </div>

            <h2
              className="reveal font-bold text-white mb-6"
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                lineHeight: 1.2,
                letterSpacing: "0.01em",
              }}
            >
              The Threat Is Real.
              <br />
              The Solution Must Be Total.
            </h2>

            <p
              className="reveal"
              style={{
                color: "#8888aa",
                fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
                lineHeight: 1.75,
              }}
            >
              The massive shift toward MWIR/LWIR infrared sensors and miniature radar systems
              has created a new reality: every soldier and vehicle without multispectral
              protection becomes a glowing target in the electromagnetic dark. Legacy passive
              camouflage is no longer sufficient — it is a liability.
            </p>
          </div>

          {/* Solutions block */}
          <div>
            <div className="reveal flex items-center gap-4 mb-6">
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
                SOLUTIONS
              </span>
            </div>

            <h2
              className="reveal font-bold text-white mb-6"
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                lineHeight: 1.2,
                letterSpacing: "0.01em",
              }}
            >
              Full-Spectrum
              <br />
              Concealment
            </h2>

            <p
              className="reveal"
              style={{
                color: "#8888aa",
                fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
                lineHeight: 1.75,
              }}
            >
              Ametrine signature management solutions span from soldier systems and multirole
              concealment covers to mobile camouflage platforms. Every solution is optimized to
              reduce the operator&apos;s signature across all relevant spectral bands — LWIR,
              MWIR, SWIR, NIR, Visible, UV, and Radar.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
