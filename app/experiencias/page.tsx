"use client";

import { useState } from "react";
import { ArrowRight, Compass, Camera, Wind, Zap, TreePine, Sunset } from "lucide-react";
import Link from "next/link";

import { categories, experiences } from "@/data/experiences";

export default function Experiencias() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? experiences : experiences.filter(e => e.cat === active);

  return (
    <div className="page-enter">

      {/* Header */}
      <section className="page-header-sm" style={{
        position: "relative",
        height: 400,
        overflow: "hidden",
      }}>
        <img
          src="/assets/paramo/main.jpg"
          alt="Experiencias en Sugamuxi"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="hero-overlay" />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          textAlign: "center",
        }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Qué hacer en Sugamuxi</div>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(38px, 6vw, 72px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.1,
          }}>
            Experiencias Únicas
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", maxWidth: 480, marginTop: 16 }}>
            Aventura, cultura, gastronomía y naturaleza en un solo destino andino.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div style={{
        background: "#fff",
        borderBottom: "1px solid var(--color-gray-200)",
        position: "sticky",
        top: "var(--nav-height)",
        zIndex: 100,
      }}>
        <div className="container-wide filter-tabs" style={{
          display: "flex",
          gap: 4,
          padding: "12px 32px",
          overflowX: "auto",
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                padding: "8px 20px",
                borderRadius: "var(--radius-full)",
                border: "1.5px solid",
                borderColor: active === cat.id ? "var(--color-primary)" : "var(--color-gray-200)",
                background: active === cat.id ? "var(--color-primary)" : "transparent",
                color: active === cat.id ? "#fff" : "var(--color-text-light)",
                fontSize: 13,
                fontWeight: 600,
                whiteSpace: "nowrap",
                transition: "all var(--transition)",
                cursor: "pointer",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding: "64px 0", background: "var(--color-gray-50)" }}>
        <div className="container-wide">
          <div className="exp-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 28,
          }}>
            {filtered.map(({ icon: Icon, title, desc, img, duration, difficulty, price, color }, i) => (
              <div
                key={title}
                className="card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="exp-card-img" style={{ position: "relative", height: 220, overflow: "hidden" }}>
                  <img src={img} alt={title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%)"
                  }} />
                  <div style={{
                    position: "absolute", top: 14, left: 14,
                    width: 40, height: 40,
                    background: color,
                    borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={20} color="#fff" />
                  </div>
                </div>

                <div style={{ padding: "20px 22px 22px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-dark)", marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "var(--color-text-light)", lineHeight: 1.65, marginBottom: 20 }}>{desc}</p>

                  <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
                    {[
                      { label: `⏱ ${duration}` },
                      { label: `🏃 ${difficulty}` },
                    ].map(({ label }) => (
                      <span key={label} style={{
                        fontSize: 11, fontWeight: 600,
                        padding: "4px 10px",
                        background: "var(--color-gray-100)",
                        borderRadius: "var(--radius-full)",
                        color: "var(--color-text)",
                      }}>
                        {label}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid var(--color-gray-200)" }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color }}>
                      {price}
                    </span>
                    <button style={{
                      display: "flex", alignItems: "center", gap: 6,
                      padding: "8px 16px",
                      background: color,
                      color: "#fff",
                      borderRadius: "var(--radius-full)",
                      fontSize: 12,
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 0", background: "linear-gradient(135deg, var(--color-tierra) 0%, var(--color-dark) 55%, var(--color-lago) 100%)", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            ¿Quieres una experiencia personalizada?
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", marginBottom: 32 }}>
            Diseñamos itinerarios a la medida de tu grupo y presupuesto.
          </p>
          <Link href="/contacto" className="btn btn-gold">
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
}
