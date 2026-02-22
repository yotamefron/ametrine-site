"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import brochuresData from "@/data/brochures.json";

type Category = "ALL" | "OVERGARMENTS" | "BLANKETS" | "HIDE SITES" | "URBAN" | "MOBILE";

const CATEGORIES: Category[] = [
  "ALL",
  "OVERGARMENTS",
  "BLANKETS",
  "HIDE SITES",
  "URBAN",
  "MOBILE",
];

const CATEGORY_MAP: Record<string, Category> = {
  Overgarments: "OVERGARMENTS",
  Blankets: "BLANKETS",
  "Hide Sites": "HIDE SITES",
  Urban: "URBAN",
  Mobile: "MOBILE",
};

// Red color per category
const CATEGORY_COLOR: Record<string, string> = {
  OVERGARMENTS: "#CC0000",
  BLANKETS: "#CC0000",
  "HIDE SITES": "#CC0000",
  URBAN: "#CC0000",
  MOBILE: "#CC0000",
};

interface Brochure {
  id: number;
  title: string;
  description: string;
  category: string;
  driveUrl: string;
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function BrochureCard({
  brochure,
  delay,
  cardRef,
}: {
  brochure: Brochure;
  delay: number;
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const catLabel = CATEGORY_MAP[brochure.category] ?? brochure.category.toUpperCase();

  const handleView = () => window.open(brochure.driveUrl, "_blank");
  const handleDownload = () => {
    const fileId = brochure.driveUrl.match(/\/d\/(.+?)\/view/)?.[1];
    if (fileId) {
      window.open(`https://drive.google.com/uc?export=download&id=${fileId}`, "_blank");
    }
  };

  return (
    <div
      ref={cardRef}
      className="reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="relative flex flex-col"
        style={{
          backgroundColor: "#0d0d0d",
          border: "1px solid #1a1a1a",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? "0 20px 40px rgba(201,168,76,0.12)" : "none",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "default",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Gold left accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0"
          style={{ width: 3, backgroundColor: "#C9A84C", zIndex: 1 }}
        />

        {/* Document cover area — 16:9 */}
        <div
          className="relative flex flex-col items-center justify-center"
          style={{
            aspectRatio: "16/9",
            marginLeft: 3,
            backgroundColor: "#090909",
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(201,168,76,0.05) 0, rgba(201,168,76,0.05) 1px, transparent 0, transparent 50%)",
            backgroundSize: "18px 18px",
            overflow: "hidden",
          }}
        >
          {/* Corner accents */}
          <div
            className="absolute top-0 left-0 w-6 h-6"
            style={{ borderTop: "1px solid rgba(201,168,76,0.3)", borderLeft: "1px solid rgba(201,168,76,0.3)" }}
          />
          <div
            className="absolute top-0 right-0 w-6 h-6"
            style={{ borderTop: "1px solid rgba(201,168,76,0.3)", borderRight: "1px solid rgba(201,168,76,0.3)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-6 h-6"
            style={{ borderBottom: "1px solid rgba(201,168,76,0.3)", borderLeft: "1px solid rgba(201,168,76,0.3)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-6 h-6"
            style={{ borderBottom: "1px solid rgba(201,168,76,0.3)", borderRight: "1px solid rgba(201,168,76,0.3)" }}
          />

          {/* Product name */}
          <div className="text-center px-4">
            <div
              className="font-black leading-tight mb-2"
              style={{
                color: "#C9A84C",
                fontSize: "clamp(0.75rem, 2vw, 1.05rem)",
                letterSpacing: "0.08em",
              }}
            >
              {brochure.title}
            </div>
            <div
              style={{
                color: CATEGORY_COLOR[catLabel] ?? "#CC0000",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.25em",
                fontVariant: "small-caps",
              }}
            >
              {catLabel}
            </div>
          </div>

          {/* CONFIDENTIAL watermark */}
          <div
            className="absolute pointer-events-none"
            style={{
              color: "rgba(201,168,76,0.04)",
              fontSize: 32,
              fontWeight: 900,
              letterSpacing: "0.15em",
              transform: "rotate(-20deg)",
              userSelect: "none",
            }}
          >
            CONFIDENTIAL
          </div>
        </div>

        {/* Content area */}
        <div className="flex flex-col flex-1 p-5" style={{ marginLeft: 3 }}>
          {/* Category badge */}
          <div className="mb-3">
            <span
              style={{
                display: "inline-block",
                color: CATEGORY_COLOR[catLabel] ?? "#CC0000",
                backgroundColor: "rgba(204,0,0,0.08)",
                border: "1px solid rgba(204,0,0,0.2)",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.2em",
                padding: "3px 8px",
              }}
            >
              {catLabel}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-bold mb-2 leading-snug"
            style={{
              color: "#C9A84C",
              fontSize: 13,
              letterSpacing: "0.08em",
            }}
          >
            {brochure.title}
          </h3>

          {/* Description */}
          <p
            className="flex-1 mb-5"
            style={{
              color: "rgba(255,255,255,0.38)",
              fontSize: 12,
              lineHeight: 1.6,
            }}
          >
            {brochure.description}
          </p>

          {/* Actions */}
          <div className="flex gap-2 mt-auto">
            <button
              onClick={handleView}
              className="flex-1 flex items-center justify-center gap-2 font-bold transition-all duration-200"
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                backgroundColor: "transparent",
                color: "rgba(201,168,76,0.7)",
                padding: "9px 0",
                fontSize: 10,
                letterSpacing: "0.15em",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#C9A84C";
                (e.currentTarget as HTMLButtonElement).style.color = "#080808";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(201,168,76,0.7)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.3)";
              }}
            >
              <EyeIcon />
              VIEW
            </button>

            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center gap-2 font-bold transition-all duration-200"
              style={{
                border: "1px solid #1a1a1a",
                backgroundColor: "#111111",
                color: "#C9A84C",
                padding: "9px 0",
                fontSize: 10,
                letterSpacing: "0.15em",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1a1a1a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#111111";
              }}
            >
              <DownloadIcon />
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BrochureLibrary() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const filtered = (brochuresData as Brochure[]).filter((b) => {
    if (activeCategory === "ALL") return true;
    return (CATEGORY_MAP[b.category] ?? b.category.toUpperCase()) === activeCategory;
  });

  const setupObserver = useCallback(() => {
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    cardRefs.current.forEach((card) => {
      if (card) {
        card.classList.remove("revealed");
        observerRef.current?.observe(card);
      }
    });
  }, []);

  useEffect(() => {
    // Section reveal
    const sectionObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) sectionObs.disconnect();
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) sectionObs.observe(sectionRef.current);

    return () => {
      sectionObs.disconnect();
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    // Short delay to let DOM update after filter change
    const t = setTimeout(setupObserver, 50);
    return () => clearTimeout(t);
  }, [filtered, setupObserver]);

  return (
    <section
      id="brochures"
      ref={sectionRef}
      className="relative py-28 lg:py-36"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-4">
          <div className="h-px" style={{ width: 48, backgroundColor: "#C9A84C" }} />
          <span
            style={{
              color: "#C9A84C",
              fontSize: 10,
              letterSpacing: "0.4em",
              fontWeight: 700,
            }}
          >
            PRODUCT CATALOG
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "#1a1a1a" }} />
        </div>

        <div className="mb-5">
          <h2
            className="font-black text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.15em",
              lineHeight: 1.1,
            }}
          >
            AUTHORIZED TECHNICAL DATASHEETS
          </h2>
        </div>

        <p
          className="mb-14"
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: 13,
            letterSpacing: "0.1em",
          }}
        >
          Select a product to view or download the classified technical datasheet.
        </p>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-12 items-center">
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
                  letterSpacing: "0.2em",
                  cursor: "pointer",
                  border: active ? "1px solid #C9A84C" : "1px solid rgba(255,255,255,0.1)",
                  backgroundColor: active ? "#C9A84C" : "transparent",
                  color: active ? "#080808" : "rgba(255,255,255,0.45)",
                  borderRadius: 999,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.4)";
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(201,168,76,0.8)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.45)";
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
          <span
            className="ml-auto"
            style={{
              color: "rgba(255,255,255,0.2)",
              fontSize: 11,
              letterSpacing: "0.15em",
            }}
          >
            {filtered.length} ITEMS
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((brochure, i) => (
            <BrochureCard
              key={`${brochure.id}-${activeCategory}`}
              brochure={brochure}
              delay={i * 60}
              cardRef={(el) => {
                cardRefs.current[i] = el;
              }}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 12, letterSpacing: "0.3em" }}>
              NO ITEMS IN THIS CATEGORY
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
