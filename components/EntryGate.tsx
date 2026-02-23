"use client";

import { useState } from "react";

interface EntryGateProps {
  onUnlock: () => void;
}

export default function EntryGate({ onUnlock }: EntryGateProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; organization?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [fading, setFading] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Full name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    if (!organization.trim()) e.organization = "Organization is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), organization: organization.trim() }),
      });
    } catch {
      // Non-blocking — proceed regardless
    }
    localStorage.setItem("ametrine_access", "true");
    setFading(true);
    setTimeout(() => onUnlock(), 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{
        backgroundColor: "#08080f",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.6s ease",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,215,0,0.05) 0%, rgba(123,47,190,0.03) 55%, transparent 70%)",
        }}
      />

      <div
        className="relative w-full max-w-md"
        style={{
          padding: 2,
          background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
          borderRadius: 4,
        }}
      >
        <div
          style={{
            backgroundColor: "#0d0d16",
            borderRadius: 3,
            padding: "48px 40px",
          }}
        >
          {/* Logo */}
          <div className="text-center mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.png"
              alt="Ametrine"
              style={{ width: 100, height: "auto", margin: "0 auto 20px" }}
            />
            <h1
              className="font-bold"
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontSize: "clamp(1.4rem, 4vw, 1.9rem)",
                letterSpacing: "0.08em",
                lineHeight: 1.2,
                background: "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ACCESS CATALOG
            </h1>
            <p
              style={{
                color: "#8888aa",
                fontSize: 13,
                lineHeight: 1.6,
                marginTop: 8,
              }}
            >
              Enter your details to access the Ametrine product catalog.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: "block",
                  color: "#8888aa",
                  fontSize: 9,
                  letterSpacing: "0.28em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                FULL NAME
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Smith"
                style={{
                  width: "100%",
                  backgroundColor: "#111118",
                  border: errors.name ? "1px solid #FF6B00" : "1px solid rgba(240,240,245,0.08)",
                  color: "#f0f0f5",
                  padding: "12px 14px",
                  fontSize: 14,
                  outline: "none",
                  borderRadius: 0,
                  fontFamily: "inherit",
                }}
                onFocus={(e) => {
                  if (!errors.name) e.currentTarget.style.borderColor = "rgba(255,215,0,0.4)";
                }}
                onBlur={(e) => {
                  if (!errors.name) e.currentTarget.style.borderColor = "rgba(240,240,245,0.08)";
                }}
              />
              {errors.name && (
                <p style={{ color: "#FF6B00", fontSize: 11, marginTop: 5, letterSpacing: "0.05em" }}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: "block",
                  color: "#8888aa",
                  fontSize: 9,
                  letterSpacing: "0.28em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@organization.com"
                style={{
                  width: "100%",
                  backgroundColor: "#111118",
                  border: errors.email ? "1px solid #FF6B00" : "1px solid rgba(240,240,245,0.08)",
                  color: "#f0f0f5",
                  padding: "12px 14px",
                  fontSize: 14,
                  outline: "none",
                  borderRadius: 0,
                  fontFamily: "inherit",
                }}
                onFocus={(e) => {
                  if (!errors.email) e.currentTarget.style.borderColor = "rgba(255,215,0,0.4)";
                }}
                onBlur={(e) => {
                  if (!errors.email) e.currentTarget.style.borderColor = "rgba(240,240,245,0.08)";
                }}
              />
              {errors.email && (
                <p style={{ color: "#FF6B00", fontSize: 11, marginTop: 5, letterSpacing: "0.05em" }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Organization */}
            <div style={{ marginBottom: 32 }}>
              <label
                style={{
                  display: "block",
                  color: "#8888aa",
                  fontSize: 9,
                  letterSpacing: "0.28em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                ORGANIZATION
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Department of Defense"
                style={{
                  width: "100%",
                  backgroundColor: "#111118",
                  border: errors.organization ? "1px solid #FF6B00" : "1px solid rgba(240,240,245,0.08)",
                  color: "#f0f0f5",
                  padding: "12px 14px",
                  fontSize: 14,
                  outline: "none",
                  borderRadius: 0,
                  fontFamily: "inherit",
                }}
                onFocus={(e) => {
                  if (!errors.organization) e.currentTarget.style.borderColor = "rgba(255,215,0,0.4)";
                }}
                onBlur={(e) => {
                  if (!errors.organization) e.currentTarget.style.borderColor = "rgba(240,240,245,0.08)";
                }}
              />
              {errors.organization && (
                <p style={{ color: "#FF6B00", fontSize: 11, marginTop: 5, letterSpacing: "0.05em" }}>
                  {errors.organization}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{
                width: "100%",
                background: submitting
                  ? "rgba(255,107,0,0.4)"
                  : "linear-gradient(135deg, #FFD700, #FF6B00, #7B2FBE)",
                color: "#08080f",
                border: "none",
                padding: "14px 24px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.22em",
                cursor: submitting ? "not-allowed" : "pointer",
                fontFamily: "inherit",
                minHeight: 48,
                transition: "opacity 0.2s ease",
              }}
            >
              {submitting ? "SUBMITTING..." : "ACCESS CATALOG"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
