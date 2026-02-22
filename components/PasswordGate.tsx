"use client";

import { useState, useEffect, useRef } from "react";

const SITE_PASSWORD = "AMETRINE2025"; // single place to change it

interface PasswordGateProps {
  onUnlock: () => void;
}

export default function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [shake, setShake] = useState(false);
  const [visible, setVisible] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toUpperCase() === SITE_PASSWORD) {
      setStatus("success");
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          sessionStorage.setItem("ametrine_unlocked", "true");
          onUnlock();
        }, 600);
      }, 300);
    } else {
      setStatus("error");
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setStatus("idle");
        setInput("");
        inputRef.current?.focus();
      }, 1200);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-600 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "#141412" }}
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, #fcc117 39px, #fcc117 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #fcc117 39px, #fcc117 40px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 px-6 w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <svg width="64" height="72" viewBox="0 0 64 72" fill="none">
              <path
                d="M32 2L62 18.5V53.5L32 70L2 53.5V18.5L32 2Z"
                fill="none"
                stroke="#fcc117"
                strokeWidth="1.5"
              />
              <path
                d="M32 14L52 25.5V48.5L32 60L12 48.5V25.5L32 14Z"
                fill="#fcc117"
                fillOpacity="0.08"
                stroke="#fcc117"
                strokeWidth="0.5"
              />
              <text
                x="32"
                y="41"
                textAnchor="middle"
                fill="#fcc117"
                fontSize="11"
                fontWeight="700"
                letterSpacing="1"
                fontFamily="monospace"
              >
                AMT
              </text>
            </svg>
          </div>
          <div className="text-center">
            <div
              className="text-2xl font-bold tracking-[0.3em] text-white"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              AMETRINE
            </div>
            <div
              className="text-xs tracking-[0.2em] mt-1"
              style={{ color: "#fcc117" }}
            >
              RESTRICTED ACCESS
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full flex items-center gap-4">
          <div className="flex-1 h-px" style={{ backgroundColor: "#fcc11740" }} />
          <div className="text-xs tracking-widest" style={{ color: "#fcc11780" }}>
            AUTHORIZED PERSONNEL ONLY
          </div>
          <div className="flex-1 h-px" style={{ backgroundColor: "#fcc11740" }} />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div
            className={`transition-transform ${shake ? "animate-shake" : ""}`}
          >
            <input
              ref={inputRef}
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ENTER ACCESS CODE"
              autoComplete="off"
              spellCheck={false}
              className="w-full bg-transparent border text-white text-sm tracking-[0.2em] px-5 py-4 outline-none placeholder-white/30 transition-all duration-300"
              style={{
                borderColor:
                  status === "error"
                    ? "#ef4444"
                    : status === "success"
                    ? "#22c55e"
                    : "#fcc11760",
                boxShadow:
                  status === "error"
                    ? "0 0 20px rgba(239,68,68,0.2)"
                    : status === "success"
                    ? "0 0 20px rgba(34,197,94,0.2)"
                    : "none",
              }}
            />
          </div>

          {/* Error message */}
          <div
            className={`text-center text-xs tracking-[0.3em] font-bold transition-opacity duration-300 ${
              status === "error" ? "opacity-100" : "opacity-0"
            }`}
            style={{ color: "#ef4444", minHeight: "1rem" }}
          >
            ACCESS DENIED
          </div>

          <button
            type="submit"
            className="w-full py-4 text-sm font-bold tracking-[0.3em] transition-all duration-300 hover:brightness-110 active:scale-95"
            style={{
              backgroundColor: "#fcc117",
              color: "#141412",
            }}
          >
            AUTHENTICATE
          </button>
        </form>

        {/* Bottom text */}
        <p
          className="text-center text-xs tracking-widest"
          style={{ color: "#ffffff30" }}
        >
          AMETRINE TECHNOLOGIES — CONFIDENTIAL
        </p>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 50%, 90% { transform: translateX(-8px); }
          30%, 70% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }
        .duration-600 {
          transition-duration: 600ms;
        }
      `}</style>
    </div>
  );
}
