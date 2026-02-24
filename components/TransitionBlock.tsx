"use client";

import { useEffect, useRef } from "react";

const LINES = [
  "Review the system families aligned to your operational scope.",
  "Match configuration to mission tempo and threat model.",
  "Select pattern and system architecture by environment.",
  "Engage directly with program requirements.",
];

export default function TransitionBlock() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("revealed"), i * 80);
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
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "#08080f", padding: "24px 16px" }}
    >
      <div className="max-w-7xl mx-auto" style={{ paddingTop: 8, paddingBottom: 8 }}>
        <div className="flex flex-col" style={{ gap: 11 }}>
          {LINES.map((line, i) => (
            <p
              key={i}
              className="reveal"
              style={{
                color: "#c0c0d0",
                fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)",
                lineHeight: 1.6,
                letterSpacing: "0.01em",
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
