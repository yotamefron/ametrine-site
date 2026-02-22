"use client";

import { useState, useEffect } from "react";
import PasswordGate from "@/components/PasswordGate";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrochureLibrary from "@/components/BrochureLibrary";
import PatternsSection from "@/components/PatternsSection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("ametrine_unlocked");
    if (stored === "true") setUnlocked(true);
    setChecked(true);
  }, []);

  const handleUnlock = () => setUnlocked(true);

  if (!checked) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{ backgroundColor: "#080808" }}
      />
    );
  }

  return (
    <>
      {!unlocked && <PasswordGate onUnlock={handleUnlock} />}

      {unlocked && (
        <div className="min-h-screen" style={{ backgroundColor: "#080808" }}>
          <Navbar />
          <main>
            <Hero />
            <BrochureLibrary />
            <PatternsSection />
            <VideoSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
