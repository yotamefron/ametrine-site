"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import brochuresData from "@/data/brochures.json";

type Category = "ALL" | "OVERGARMENTS" | "BLANKETS" | "HIDE SITES" | "URBAN" | "MOBILE";

const CATEGORIES: Category[] = ["ALL", "OVERGARMENTS", "BLANKETS", "HIDE SITES", "URBAN", "MOBILE"];

const CATEGORY_MAP: Record<string, Category> = {
  Overgarments: "OVERGARMENTS",
  Blankets: "BLANKETS",
  "Hide Sites": "HIDE SITES",
  Urban: "URBAN",
  Mobile: "MOBILE",
};

const IMAGE_MAP: Record<string, string> = {
  "3D SURVIVAL BLANKET":           "3D SURVIVAL BLANKET.png",
  "WP SURVIVAL BLANKET":           "WP SURVIVAL BLANKET.png",
  "ARCTIC OVERGARMENT KIT":        "ARCTIC OVERGARMENT KIT.png",
  "ARMORED PLATFORM HIDE SITE":    "ARMORD PLATFORM HIDE SITE.png",
  "FLINT \u2014 PLATFORM ON THE MOVE": "Flint Platform on the move.png",
  "GAL SUIT":                      "GAL SUIT.png",
  "MAY SUIT":                      "MAY SUIT.png",
  "MSSM COMBAT UNIFORM":           "MSSM COMBAT UNIFORM.png",
  "OPERATOR HIDE SITE":            "OPERATORS HIDE SITE.png",
  "OVERWATCH HIDE SITE":           "OVERWATCH HIDE SITE.png",
  "PONCHO INBAR":                  "PONCHO INBAR.png",
  "PONCHO SAHAR":                  "PONCHO SAHAR.png",
  "PONCHO SRV":                    "PONCHO SRV.png",
  "SNIPER ASSAULT":                "SNIPER ASSAULT.png",
  "SURVIVAL BLANKET":              "SURVIVAL BLANKET.png",
  "TACTICAL VEHICLE HIDE SITE":    "TACTICAL VEHICLE HIDE SITE.png",
  "WINDOW CONCEALMENT KIT":        "WINDOW CONCEALMENT KIT.png",
  "WP SNIPER BLANKET":             "WP SNIPER BLANKET.png",
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
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function ImagePlaceholder({ title }: { title: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#1a1a2e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Image placeholder">
        <circle cx="16" cy="16" r="11" stroke="#555577" strokeWidth="1.2" />
        <circle cx="16" cy="16" r="3" stroke="#555577" strokeWidth="1.2" />
        <line x1="16" y1="2" x2="16" y2="8" stroke="#555577" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="16" y1="24" x2="16" y2="30" stroke="#555577" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="2" y1="16" x2="8" y2="16" stroke="#555577" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="24" y1="16" x2="30" y2="16" stroke="#555577" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span style={{ color: "#FFD700", fontSize: 11, lineHeight: 1.4, textAlign: "center", maxWidth: "80%", letterSpacing: "0.06em" }}>
        {title}
      </span>
    </div>
  );
}

function ProductImage({ title, hovered }: { title: string; hovered: boolean }) {
  const [errored, setErrored] = useState(false);
  const filename = IMAGE_MAP[title];

  if (!filename || errored) {
    return (
      <div className="relative w-full aspect-video overflow-hidden" style={{ flexShrink: 0, backgroundColor: "#1a1a2e" }}>
        <ImagePlaceholder title={title} />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video overflow-hidden" style={{ flexShrink: 0 }}>
      <Image
        src={`/images/products/${filename}`}
        alt={`${title} product image`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        style={{
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
        onError={() => setErrored(true)}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "45%",
          background: "linear-gradient(to top, rgba(17,17,24,0.85), transparent)",
          pointerEvents: "none",
        }}
      />
    </div>
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
    if (fileId) window.open(`https://drive.google.com/uc?export=download&id=${fileId}`, "_blank");
  };

  return (
    <div ref={cardRef} className="reveal flex flex-col" style={{ transitionDelay: `${delay}ms` }}>
      {/* Gradient top border */}
      <div style={{ height: 3, background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)", flexShrink: 0 }} />

      {/* Card body */}
      <div
        className="flex flex-col flex-1"
        style={{
          backgroundColor: "#111118",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered ? "0 0 28px rgba(255,107,0,0.14)" : "none",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ProductImage title={brochure.title} hovered={hovered} />

        <div className="flex flex-col flex-1" style={{ padding: "20px 16px" }}>
          {/* Category badge */}
          <div className="mb-3">
            <span
              style={{
                display: "inline-block",
                color: "#FF6B00",
                backgroundColor: "rgba(255,107,0,0.08)",
                border: "1px solid rgba(255,107,0,0.2)",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.12em",
                padding: "3px 8px",
                textTransform: "uppercase",
              }}
            >
              {catLabel}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-semibold mb-2"
            style={{
              fontSize: 16,
              lineHeight: 1.3,
              background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {brochure.title}
          </h3>

          {/* Description */}
          <p className="flex-1 mb-5" style={{ color: "#8888aa", fontSize: 14, lineHeight: 1.7 }}>
            {brochure.description}
          </p>

          {/* Actions — 44-48px height buttons with clear spacing */}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <button
              onClick={handleView}
              className="btn-press flex-1 flex items-center justify-center gap-2 font-bold transition-all duration-200"
              style={{
                border: "1px solid rgba(255,107,0,0.3)",
                backgroundColor: "transparent",
                color: "rgba(255,107,0,0.9)",
                padding: "12px 16px",
                fontSize: 11,
                letterSpacing: "0.15em",
                cursor: "pointer",
                minHeight: 46,
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FF6B00";
                (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#FF6B00";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,107,0,0.9)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,107,0,0.3)";
              }}
            >
              <EyeIcon />
              VIEW
            </button>

            <button
              onClick={handleDownload}
              className="btn-press flex-1 flex items-center justify-center gap-2 font-bold transition-all duration-200"
              style={{
                border: "1px solid rgba(255,107,0,0.15)",
                backgroundColor: "rgba(255,107,0,0.08)",
                color: "#FF6B00",
                padding: "12px 16px",
                fontSize: 11,
                letterSpacing: "0.15em",
                cursor: "pointer",
                minHeight: 46,
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,107,0,0.18)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,107,0,0.08)";
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

function SearchIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="#8888aa" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function BrochureLibrary() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const filtered = (brochuresData as Brochure[]).filter((b) => {
    const catMatch = activeCategory === "ALL" || (CATEGORY_MAP[b.category] ?? b.category.toUpperCase()) === activeCategory;
    if (!catMatch) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q)
    );
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

  useEffect(() => { return () => { observerRef.current?.disconnect(); }; }, []);

  useEffect(() => {
    const t = setTimeout(setupObserver, 50);
    return () => clearTimeout(t);
  }, [filtered, setupObserver]);

  return (
    <section
      id="brochures"
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "#08080f", padding: "24px 16px" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />

      <div className="max-w-7xl mx-auto" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div className="flex items-center gap-4 mb-5">
          <div className="h-px w-10 shrink-0" style={{ background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" }} />
          <span style={{ color: "#FF6B00", fontSize: 11, letterSpacing: "0.14em", fontWeight: 600, textTransform: "uppercase" }}>
            PRODUCT CATALOG
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(240,240,245,0.06)" }} />
        </div>

        <h2
          className="font-bold"
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.08em",
            lineHeight: 1.15,
            background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: 12,
          }}
        >
          BROCHURE LIBRARY
        </h2>

        <p style={{ color: "#8888aa", fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>
          Select a product to view or download the technical brochure.
        </p>

        {/* Search field */}
        <div className="relative" style={{ marginBottom: 16, maxWidth: 480 }}>
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search system or brochure..."
            style={{
              width: "100%",
              minHeight: 46,
              padding: "10px 16px 10px 38px",
              backgroundColor: "#111118",
              border: "1px solid rgba(240,240,245,0.1)",
              color: "#f0f0f5",
              fontSize: 14,
              borderRadius: 4,
              outline: "none",
              fontFamily: "inherit",
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(255,215,0,0.4)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(240,240,245,0.1)"; }}
          />
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 items-center" style={{ marginBottom: 16 }}>
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="chip-transition"
                style={{
                  padding: "8px 20px",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  cursor: "pointer",
                  border: active ? "1px solid transparent" : "1px solid rgba(240,240,245,0.12)",
                  background: active ? "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)" : "transparent",
                  color: active ? "#08080f" : "rgba(240,240,245,0.45)",
                  borderRadius: 999,
                  minHeight: 44,
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,215,0,0.5)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#FFD700";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(240,240,245,0.12)";
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(240,240,245,0.45)";
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
          <span className="ml-auto" style={{ color: "#8888aa", fontSize: 11, letterSpacing: "0.15em" }}>
            {filtered.length} ITEMS
          </span>
        </div>

        {/* Grid: 1 col mobile, 2 sm, 3 lg (min 340px cards) */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
          }}
        >
          {filtered.map((brochure, i) => (
            <BrochureCard
              key={`${brochure.id}-${activeCategory}-${searchQuery}`}
              brochure={brochure}
              delay={i * 60}
              cardRef={(el) => { cardRefs.current[i] = el; }}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <span style={{ color: "#8888aa", fontSize: 12, letterSpacing: "0.3em" }}>NO ITEMS FOUND</span>
          </div>
        )}
      </div>
    </section>
  );
}
