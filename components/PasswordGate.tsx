"use client";

import { useState, useEffect, useRef } from "react";

const SITE_PASSWORD = "AMETRINE2026";
const TYPING_TEXT = "AUTHORIZED PERSONNEL ONLY";

interface PasswordGateProps {
  onUnlock: () => void;
}

export default function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [shake, setShake] = useState(false);
  const [visible, setVisible] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    inputRef.current?.focus();

    // Typing effect
    let i = 0;
    const timer = setInterval(() => {
      if (i < TYPING_TEXT.length) {
        setTypedText(TYPING_TEXT.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
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
        }, 700);
      }, 400);
    } else {
      setStatus("error");
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setStatus("idle");
        setInput("");
        inputRef.current?.focus();
      }, 1400);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "#080808" }}
    >
      {/* Scan lines overlay */}
      <div className="scanlines-overlay absolute inset-0 pointer-events-none z-0 opacity-60" />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Gold pulse center glow */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: 500,
          height: 500,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
          animation: "pulse-bg 6s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center gap-8 px-6 w-full max-w-[360px]"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.8s ease 0.3s",
        }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-icon.png"
            alt="Ametrine"
            className="logo-glow"
            style={{ width: 72, height: "auto" }}
          />
          <div className="text-center">
            <div
              className="text-white tracking-[0.35em] font-bold"
              style={{ fontSize: 22, letterSpacing: "0.35em" }}
            >
              AMETRINE
            </div>
            <div
              className="tracking-[0.2em] mt-1"
              style={{ color: "#C9A84C", fontSize: 10, letterSpacing: "0.2em" }}
            >
              TECHNOLOGIES
            </div>
          </div>
        </div>

        {/* Divider with typing text */}
        <div className="w-full">
          <div
            className="h-px w-full mb-5"
            style={{ background: "linear-gradient(to right, transparent, #C9A84C40, transparent)" }}
          />
          <div className="text-center" style={{ minHeight: 18 }}>
            <span
              style={{
                color: "rgba(201,168,76,0.6)",
                fontSize: 11,
                letterSpacing: "0.3em",
                fontWeight: 500,
              }}
            >
              {typedText}
            </span>
            {typedText.length < TYPING_TEXT.length && (
              <span className="typing-cursor" style={{ fontSize: 11 }}>
                |
              </span>
            )}
          </div>
          <div
            className="h-px w-full mt-5"
            style={{ background: "linear-gradient(to right, transparent, #C9A84C40, transparent)" }}
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <div className={shake ? "animate-shake" : ""}>
            <input
              ref={inputRef}
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ENTER ACCESS CODE"
              autoComplete="off"
              spellCheck={false}
              className="w-full bg-transparent text-white outline-none placeholder-white/25"
              style={{
                border: "none",
                borderBottom: `1px solid ${
                  status === "error"
                    ? "#CC0000"
                    : status === "success"
                    ? "#22c55e"
                    : "#C9A84C"
                }`,
                padding: "14px 0",
                fontSize: 13,
                letterSpacing: "0.25em",
                fontWeight: 400,
                transition: "border-color 0.3s ease",
              }}
            />
          </div>

          {/* Error */}
          <div
            style={{
              color: "#CC0000",
              fontSize: 11,
              letterSpacing: "0.3em",
              fontWeight: 700,
              textAlign: "center",
              minHeight: 16,
              opacity: status === "error" ? 1 : 0,
              transition: "opacity 0.2s ease",
            }}
          >
            — ACCESS DENIED —
          </div>

          <button
            type="submit"
            className="w-full font-bold tracking-[0.3em] transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            style={{
              backgroundColor: status === "success" ? "#22c55e" : "#C9A84C",
              color: "#080808",
              padding: "16px 0",
              fontSize: 12,
              letterSpacing: "0.3em",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            {status === "success" ? "ACCESS GRANTED" : "AUTHENTICATE"}
          </button>
        </form>

        {/* Bottom label */}
        <p
          style={{
            color: "rgba(255,255,255,0.18)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textAlign: "center",
          }}
        >
          AMETRINE TECHNOLOGIES — CONFIDENTIAL
        </p>
      </div>
    </div>
  );
}
