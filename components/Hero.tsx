"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = document.querySelectorAll(".hero-animate");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToBrochures = () => {
    document.getElementById("brochures")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#141412" }}
    >
      {/* Diagonal texture lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #fcc117 0, #fcc117 1px, transparent 0, transparent 50%)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gold bottom gradient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-10"
        style={{ background: "radial-gradient(ellipse, #fcc117 0%, transparent 70%)" }}
      />

      {/* Top left accent line */}
      <div
        className="absolute top-[80px] left-0 right-0 h-px opacity-20"
        style={{ backgroundColor: "#fcc117" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div
          className="hero-animate opacity-0 translate-y-4 transition-all duration-700 delay-100 mb-8 flex items-center justify-center gap-4"
          style={{ transitionDelay: "100ms" }}
        >
          <div className="h-px w-12" style={{ backgroundColor: "#fcc117" }} />
          <span
            className="text-xs tracking-[0.35em] font-bold"
            style={{ color: "#fcc117" }}
          >
            MULTISPECTRAL CONCEALMENT SYSTEMS
          </span>
          <div className="h-px w-12" style={{ backgroundColor: "#fcc117" }} />
        </div>

        {/* Main headline */}
        <h1
          className="hero-animate opacity-0 translate-y-6 transition-all duration-700 font-black text-white leading-none tracking-[-0.02em] mb-6"
          style={{
            fontSize: "clamp(3rem, 10vw, 8rem)",
            transitionDelay: "200ms",
            fontFamily: "system-ui, sans-serif",
            textShadow: "0 0 80px rgba(252,193,23,0.08)",
          }}
        >
          TECHNOLOGIES
          <br />
          <span
            style={{
              color: "#fcc117",
              textShadow: "0 0 40px rgba(252,193,23,0.3)",
            }}
          >
            TO BE
          </span>
          <br />
          INVISIBLE
        </h1>

        {/* Sub headline */}
        <p
          className="hero-animate opacity-0 translate-y-4 transition-all duration-700 text-white/50 font-light tracking-[0.4em] text-sm md:text-base mb-12"
          style={{ transitionDelay: "350ms" }}
        >
          BLEND. NOT BLOCK.
        </p>

        {/* CTA */}
        <div
          className="hero-animate opacity-0 translate-y-4 transition-all duration-700 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ transitionDelay: "500ms" }}
        >
          <button
            onClick={scrollToBrochures}
            className="group relative px-10 py-4 text-xs font-bold tracking-[0.25em] transition-all duration-300 overflow-hidden"
            style={{ backgroundColor: "#fcc117", color: "#141412" }}
          >
            <span className="relative z-10">ACCESS BROCHURES</span>
            <div
              className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"
              style={{ backgroundColor: "#e5ad15" }}
            />
          </button>

          <button
            onClick={() => document.getElementById("video")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 text-xs font-bold tracking-[0.25em] border transition-all duration-300 hover:border-[#fcc117] hover:text-[#fcc117]"
            style={{
              borderColor: "rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            WATCH VIDEO
          </button>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-white text-[10px] tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-12 bg-white animate-pulse" />
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
