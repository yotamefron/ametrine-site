"use client";

import { useState, useEffect } from "react";
import EntryGate from "@/components/EntryGate";
import Navbar from "@/components/Navbar";
import VideoSection from "@/components/VideoSection";
import { HeroTop, HeroBottom } from "@/components/Hero";
import SignatureManagement from "@/components/SignatureManagement";
import TransitionBlock from "@/components/TransitionBlock";
import BrandDivider from "@/components/BrandDivider";
import BrochureLibrary from "@/components/BrochureLibrary";
import PatternsSection from "@/components/PatternsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 150);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 32,
        right: 16,
        zIndex: 50,
        opacity: visible ? 0.6 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
        animation: "scroll-pulse 2s ease-in-out infinite",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFD700"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
}

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("ametrine_access");
    if (stored === "true") setUnlocked(true);
    setChecked(true);
  }, []);

  const handleUnlock = () => setUnlocked(true);

  if (!checked) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{ backgroundColor: "#08080f" }}
      />
    );
  }

  return (
    <>
      {!unlocked && <EntryGate onUnlock={handleUnlock} />}

      {unlocked && (
        <div className="min-h-screen" style={{ backgroundColor: "#08080f" }}>
          <Navbar />
          <ScrollIndicator />
          <main>
            {/*
              Section order — identical on mobile and desktop:
              1. HeroTop (logo + label)
              2. VideoSection
              3. HeroBottom (BE INVISIBLE + CTA)
              4. Everything else
            */}
            <HeroTop />
            <VideoSection />
            <HeroBottom />
            <SignatureManagement />
            <TransitionBlock />
            <BrandDivider />
            <BrochureLibrary />
            <PatternsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
