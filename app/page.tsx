"use client";

import { useState, useEffect } from "react";
import PasswordGate from "@/components/PasswordGate";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import BrochureLibrary from "@/components/BrochureLibrary";
import PatternsSection from "@/components/PatternsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("ametrine_unlocked");
    if (stored === "true") {
      setUnlocked(true);
    }
    setChecked(true);
  }, []);

  const handleUnlock = () => {
    setUnlocked(true);
  };

  if (!checked) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{ backgroundColor: "#141412" }}
      />
    );
  }

  return (
    <>
      {!unlocked && <PasswordGate onUnlock={handleUnlock} />}

      {unlocked && (
        <div className="min-h-screen" style={{ backgroundColor: "#141412" }}>
          <Navbar />
          <main>
            <Hero />
            <BrochureLibrary />
            <PatternsSection />
            <VideoSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
