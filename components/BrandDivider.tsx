"use client";

export default function BrandDivider() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "rgba(8,8,15,0.95)", zIndex: 1 }}
    >
      {/* 6% gold-purple gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,215,0,0.06) 0%, rgba(123,47,190,0.06) 100%)",
        }}
      />

      {/* Top gradient border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
        }}
      />

      {/* Bottom gradient border line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p
          className="font-bold text-white mb-3"
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            letterSpacing: "0.15em",
            lineHeight: 1.05,
          }}
        >
          BLEND, DON&apos;T BLOCK
        </p>
        <p
          style={{
            color: "#8888aa",
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            lineHeight: 1.7,
          }}
        >
          Technology to be invisible
        </p>
      </div>
    </section>
  );
}
