"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Category = "ALL" | "DESERT" | "GREEN" | "SNOW" | "MARINE" | "URBAN / BOULDER";

const CATEGORIES: Category[] = ["ALL", "DESERT", "GREEN", "SNOW", "MARINE", "URBAN / BOULDER"];

interface Pattern {
  name: string;
  file: string;
  categories: Category[];
}

const PATTERNS: Pattern[] = [
  { name: "Desert", file: "Desert.png", categories: ["DESERT"] },
  { name: "Desert Green", file: "Desert Green.png", categories: ["DESERT"] },
  { name: "Desert Coyote", file: "Desert Coyote.png", categories: ["DESERT"] },
  { name: "Ever Green", file: "Ever-Green.png", categories: ["GREEN"] },
  { name: "Forest Green", file: "Forest Green.png", categories: ["GREEN"] },
  { name: "Kestrel", file: "Kestrel.png", categories: ["GREEN"] },
  { name: "Woodland", file: "Woodland.png", categories: ["GREEN"] },
  { name: "Woodland Brown", file: "Woodland Brown.png", categories: ["GREEN"] },
  { name: "Urban Green", file: "Urban Green.png", categories: ["GREEN", "URBAN / BOULDER"] },
  { name: "Urban", file: "Urban.png", categories: ["URBAN / BOULDER"] },
  { name: "Boulder", file: "Boulder.png", categories: ["URBAN / BOULDER"] },
  { name: "Marine", file: "Marine.png", categories: ["MARINE"] },
  { name: "Fresh Snow", file: "Fresh Snow.png", categories: ["SNOW"] },
  { name: "Snirt Snow", file: "Snirt Snow.png", categories: ["SNOW"] },
];

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

function PatternCard({ pattern }: { pattern: Pattern }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 snap-start"
      style={{ width: 200 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden"
        style={{
          width: 200,
          height: 200,
          border: hovered ? "1px solid rgba(255,215,0,0.5)" : "1px solid rgba(240,240,245,0.08)",
          transition: "border-color 0.2s ease",
        }}
      >
        <Image
          src={`/pattern/${pattern.file}`}
          alt={pattern.name}
          fill
          sizes="200px"
          className="object-cover"
        />
      </div>
      <p
        style={{
          color: "#f0f0f5",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        {pattern.name}
      </p>
    </div>
  );
}

export default function PatternsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

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

  const filtered = PATTERNS.filter((p) => {
    if (activeCategory === "ALL") return true;
    return p.categories.includes(activeCategory);
  });

  // Reset scroll position when filter changes
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  }, [activeCategory]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 220;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="patterns"
      ref={sectionRef}
      className="relative py-20 lg:py-32"
      style={{ backgroundColor: "#0d0d16" }}
    >
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
            PATTERNS
          </span>
          <div
            className="h-px flex-1"
            style={{ backgroundColor: "rgba(240,240,245,0.06)" }}
          />
        </div>

        <h2
          className="reveal font-bold mb-3"
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.08em",
            lineHeight: 1.15,
            background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          CAMOUFLAGE PATTERNS
        </h2>
        <p
          className="reveal mb-10"
          style={{
            color: "#8888aa",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Engineered for any terrain &mdash; custom configurations available
        </p>

        {/* Category filter tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 20px",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  cursor: "pointer",
                  border: active ? "1px solid transparent" : "1px solid rgba(255,215,0,0.3)",
                  background: active
                    ? "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)"
                    : "transparent",
                  color: active ? "#08080f" : "rgba(255,215,0,0.7)",
                  borderRadius: 999,
                  transition: "all 0.2s ease",
                  minHeight: 36,
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#FFD700";
                    (e.currentTarget as HTMLButtonElement).style.color = "#FFD700";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,215,0,0.3)";
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,215,0,0.7)";
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <div className="reveal relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 items-center justify-center"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "rgba(8,8,15,0.85)",
              border: "1px solid rgba(255,215,0,0.3)",
              color: "#FFD700",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 items-center justify-center"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "rgba(8,8,15,0.85)",
              border: "1px solid rgba(255,215,0,0.3)",
              color: "#FFD700",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {filtered.map((pattern) => (
              <PatternCard key={pattern.file} pattern={pattern} />
            ))}
          </div>
        </div>

        {/* Contact for custom pattern requests */}
        <p
          className="reveal mt-10"
          style={{
            color: "#8888aa",
            fontSize: 12,
            letterSpacing: "0.06em",
            lineHeight: 1.7,
          }}
        >
          Custom pattern configurations available upon request &mdash;{" "}
          <a
            href="mailto:sales@ametrine-tech.com"
            style={{ color: "#FF6B00", textDecoration: "none" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
            }}
          >
            contact sales@ametrine-tech.com
          </a>
        </p>
      </div>
    </section>
  );
}
