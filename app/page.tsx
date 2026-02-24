"use client";

import { useState, useEffect } from "react";
import EntryGate from "@/components/EntryGate";
import Navbar from "@/components/Navbar";
import VideoSection from "@/components/VideoSection";
import Hero from "@/components/Hero";
import SignatureManagement from "@/components/SignatureManagement";
import TransitionBlock from "@/components/TransitionBlock";
import BrandDivider from "@/components/BrandDivider";
import BrochureLibrary from "@/components/BrochureLibrary";
import PatternsSection from "@/components/PatternsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
          <main>
            {/*
              Mobile: Hero first (text loads before video), Video below.
              Desktop: Video first (at top with navbar clearance), Hero below.
              flex-col-reverse reverses the visual order on mobile only.
            */}
            <div className="flex flex-col-reverse md:flex-col">
              <VideoSection />
              <Hero />
            </div>
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
