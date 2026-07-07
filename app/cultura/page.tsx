"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cultureSections, timeline } from "@/data/culture";

export default function Cultura() {
  return (
    <div className="page-enter">

      {/* Header */}
      <section className="page-header-md" style={{
        position: "relative",
        height: 480,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}>
        <img
          src="/assets/mongui/main.jpg"
          alt="Cultura Sugamuxi"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="hero-overlay" />
        <div className="container-wide" style={{ position: "relative", zIndex: 2, textAlign: "center", width: "100%" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Identidad y patrimonio</div>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Cultura &amp; Tradición
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 560, margin: "0 auto" }}>
            Milenios de historia Muisca, colonial y boyacense que dan vida a una de las regiones culturalmente más ricas de Colombia.
          </p>
        </div>
      </section>

      {/* Alternating sections */}
      {cultureSections.map((sec, i) => (
        <section
          key={sec.title}
          style={{
            padding: "80px 0",
            background: i % 2 === 0 ? "var(--color-white)" : "var(--color-gray-50)",
          }}
        >
          <div className="container-wide culture-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
            direction: sec.side === "right" ? "rtl" : "ltr",
          }}>
            {/* Image */}
            <div style={{ direction: "ltr", borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <img
                src={sec.img}
                alt={sec.title}
                loading="lazy"
                decoding="async"
                className="culture-img"
                style={{ width: "100%", height: 380, objectFit: "cover" }}
              />
            </div>

            {/* Text */}
            <div style={{ direction: "ltr" }}>
              <div className="section-label" style={{ color: sec.color }}>
                <span style={{ width: 32, height: 2, background: sec.color, display: "inline-block", borderRadius: 2, marginRight: 10 }} />
                {sec.subtitle}
              </div>
              <h2 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 700,
                color: "var(--color-dark)",
                lineHeight: 1.2,
                marginBottom: 20,
              }}>
                {sec.title}
              </h2>
              <p style={{ fontSize: 16, color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: 28 }}>
                {sec.desc}
              </p>
              <button style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                color: sec.color,
                fontSize: 14,
                fontWeight: 700,
                background: "none",
                border: `2px solid ${sec.color}`,
                borderRadius: "var(--radius-full)",
                padding: "10px 22px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = sec.color;
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = sec.color;
              }}
              >
                Conocer más
              </button>
            </div>
          </div>
        </section>
      ))}



      {/* CTA */}
      <section style={{ padding: "64px 0", background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-lago) 100%)", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            Vive la cultura en persona
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", marginBottom: 32 }}>
            Tours culturales guiados por historiadores y líderes comunitarios locales.
          </p>
          <Link href="/contacto" className="btn btn-gold">
            Planifica tu viaje cultural
          </Link>
        </div>
      </section>
    </div>
  );
}
