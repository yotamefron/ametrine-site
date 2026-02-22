"use client";

import { useState } from "react";
import brochuresData from "@/data/brochures.json";

type Category = "ALL" | "OVERGARMENTS" | "BLANKETS" | "HIDE SITES" | "URBAN";

const CATEGORIES: Category[] = ["ALL", "OVERGARMENTS", "BLANKETS", "HIDE SITES", "URBAN"];

const CATEGORY_MAP: Record<string, Category> = {
  Overgarments: "OVERGARMENTS",
  Blankets: "BLANKETS",
  "Hide Sites": "HIDE SITES",
  Urban: "URBAN",
};

interface Brochure {
  id: number;
  title: string;
  description: string;
  category: string;
  filename: string;
}

function DownloadIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function BrochureCard({ brochure }: { brochure: Brochure }) {
  const pdfPath = `/brochures/${brochure.filename}`;
  const categoryLabel = CATEGORY_MAP[brochure.category] ?? brochure.category.toUpperCase();

  return (
    <div
      className="group relative flex flex-col border transition-all duration-300 hover:border-[#fcc117]/40"
      style={{
        backgroundColor: "#1a1a18",
        borderColor: "rgba(255,255,255,0.07)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-all duration-300 group-hover:bg-[#fcc117]"
        style={{ backgroundColor: "transparent" }}
      />

      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#fcc117]/20 group-hover:border-[#fcc117]/60 transition-colors duration-300" />

      <div className="p-6 flex flex-col flex-1">
        {/* Category badge */}
        <div className="mb-4">
          <span
            className="inline-block text-[10px] font-bold tracking-[0.2em] px-2.5 py-1 border"
            style={{
              color: "#fcc117",
              borderColor: "rgba(252,193,23,0.25)",
              backgroundColor: "rgba(252,193,23,0.05)",
            }}
          >
            {categoryLabel}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-white font-bold tracking-wide mb-3 text-sm leading-snug group-hover:text-[#fcc117] transition-colors duration-300"
          style={{ fontFamily: "system-ui, sans-serif", letterSpacing: "0.08em" }}
        >
          {brochure.title}
        </h3>

        {/* Description */}
        <p className="text-white/40 text-xs leading-relaxed flex-1 mb-6">
          {brochure.description}
        </p>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold tracking-[0.15em] border transition-all duration-300 hover:border-[#fcc117] hover:text-[#fcc117]"
            style={{
              borderColor: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <EyeIcon />
            VIEW
          </a>
          <a
            href={pdfPath}
            download={brochure.filename}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold tracking-[0.15em] transition-all duration-300 hover:brightness-90"
            style={{
              backgroundColor: "#fcc117",
              color: "#141412",
            }}
          >
            <DownloadIcon />
            DOWNLOAD
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BrochureLibrary() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filtered = (brochuresData as Brochure[]).filter((b) => {
    if (activeCategory === "ALL") return true;
    return (CATEGORY_MAP[b.category] ?? b.category.toUpperCase()) === activeCategory;
  });

  return (
    <section
      id="brochures"
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: "#141412" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-5">
          <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#fcc117" }} />
          <span
            className="text-xs tracking-[0.35em] font-bold"
            style={{ color: "#fcc117" }}
          >
            PRODUCT CATALOG
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
        </div>

        <div className="mb-14">
          <h2
            className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            BROCHURE LIBRARY
          </h2>
          <p className="text-white/40 text-sm tracking-wide">
            Select a product to view or download the technical brochure.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 text-[10px] font-bold tracking-[0.2em] border transition-all duration-200"
              style={{
                borderColor: activeCategory === cat ? "#fcc117" : "rgba(255,255,255,0.12)",
                backgroundColor: activeCategory === cat ? "#fcc117" : "transparent",
                color: activeCategory === cat ? "#141412" : "rgba(255,255,255,0.5)",
              }}
            >
              {cat}
            </button>
          ))}
          <span
            className="ml-auto self-center text-xs tracking-widest"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            {filtered.length} ITEMS
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((brochure) => (
            <BrochureCard key={brochure.id} brochure={brochure} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <span className="text-white/20 text-sm tracking-widest">NO ITEMS IN THIS CATEGORY</span>
          </div>
        )}
      </div>
    </section>
  );
}
