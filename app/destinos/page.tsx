"use client";

import Link from "next/link";
import { ArrowRight, Clock, Star, Mountain } from "lucide-react";

import { destinations } from "@/data/destinations";

export default function Destinos() {
  return (
    <div className="page-enter" style={{ paddingTop: "var(--nav-height)" }}>

      {/* Page Header */}
      <section style={{
        position: "relative",
        height: 420,
        overflow: "hidden",
      }}>
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000"
          alt="Destinos de Sugamuxi"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div className="hero-overlay" />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          textAlign: "center",
        }}>
          <div className="section-label" style={{ justifyContent: "center", color: "var(--color-gold)" }}>Explora la provincia</div>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.1,
          }}>
            Destinos de Sugamuxi
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", maxWidth: 480, marginTop: 16 }}>
            13 municipios, infinitas historias. Cada rincón de la provincia te sorprenderá.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section style={{ padding: "80px 0", background: "var(--color-gray-50)" }}>
        <div className="container-wide">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: 32,
          }}>
            {destinations.map((dest, i) => (
              <article
                key={dest.name}
                className="card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
                  <img
                    src={dest.img}
                    alt={dest.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)"
                  }} />
                  {/* Tag */}
                  <span style={{
                    position: "absolute", top: 14, left: 14,
                    background: dest.color,
                    color: "#fff",
                    padding: "4px 12px",
                    borderRadius: "var(--radius-full)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>
                    {dest.tag}
                  </span>
                  {/* Rating */}
                  <div style={{
                    position: "absolute", top: 14, right: 14,
                    display: "flex", alignItems: "center", gap: 4,
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(8px)",
                    padding: "4px 10px",
                    borderRadius: "var(--radius-full)",
                  }}>
                    <Star size={11} fill="#FBBF24" color="#FBBF24" />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{dest.rating}</span>
                  </div>
                  <h2 style={{
                    position: "absolute", bottom: 16, left: 16,
                    fontFamily: "var(--font-serif)",
                    fontSize: 28,
                    fontWeight: 800,
                    color: "#fff",
                  }}>
                    {dest.name}
                  </h2>
                </div>

                {/* Content */}
                <div style={{ padding: "24px 24px 20px" }}>
                  <p style={{ fontSize: 14, color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: 20 }}>
                    {dest.desc}
                  </p>

                  {/* Highlights */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                    {dest.highlights.map(h => (
                      <span key={h} style={{
                        padding: "4px 10px",
                        background: `${dest.color}12`,
                        color: dest.color,
                        borderRadius: "var(--radius-full)",
                        fontSize: 11,
                        fontWeight: 600,
                        border: `1px solid ${dest.color}25`,
                      }}>
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid var(--color-gray-200)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Clock size={13} color="var(--color-text-light)" />
                      <span style={{ fontSize: 12, color: "var(--color-text-light)" }}>Mejor época: {dest.time}</span>
                    </div>
                    <button style={{
                      display: "flex", alignItems: "center", gap: 6,
                      color: dest.color,
                      fontSize: 13,
                      fontWeight: 700,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "gap 0.2s ease",
                    }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap = "10px"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap = "6px"}
                    >
                      Explorar <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "var(--color-primary)", textAlign: "center" }}>
        <div className="container">
          <Mountain size={40} color="rgba(255,255,255,0.3)" style={{ margin: "0 auto 16px" }} />
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 40, fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            ¿No sabes por dónde empezar?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            Contáctanos y te ayudamos a diseñar el itinerario perfecto para tu grupo.
          </p>
          <Link href="/contacto" className="btn btn-gold" style={{ fontSize: 15 }}>
            Planifica tu viaje <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
