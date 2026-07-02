"use client";

import Link from "next/link";
import { Mountain, Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--color-dark)",
      color: "rgba(255,255,255,0.7)",
      paddingTop: 80,
    }}>
      <div className="container-wide" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 48,
        paddingBottom: 64,
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{
              width: 44, height: 44,
              background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-xl))",
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Mountain size={24} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>Sugamuxi</div>
              <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Provincia · Boyacá</div>
            </div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: 260 }}>
            Destino turístico oficial de la Provincia de Sugamuxi en el corazón de Boyacá, Colombia.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" style={{
                width: 40, height: 40,
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.5)",
                transition: "all 0.2s ease",
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--color-primary)";
                  el.style.borderColor = "var(--color-primary)";
                  el.style.color = "#fff";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.borderColor = "rgba(255,255,255,0.12)";
                  el.style.color = "rgba(255,255,255,0.5)";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 20, fontSize: 14, letterSpacing: "0.06em", textTransform: "uppercase" }}>Explorar</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "Inicio", href: "/" },
              { label: "Destinos", href: "/destinos" },
              { label: "Experiencias", href: "/experiencias" },
              { label: "Cultura", href: "/cultura" },
              { label: "Contacto", href: "/contacto" },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "color 0.2s ease",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"}
                >
                  <ArrowRight size={12} />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 20, fontSize: 14, letterSpacing: "0.06em", textTransform: "uppercase" }}>Municipios</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {["Sogamoso", "Monguí", "Aquitania", "Iza", "Nobsa", "Firavitoba"].map(m => (
              <li key={m}>
                <a href="#" style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "color 0.2s ease",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"}
                >
                  <MapPin size={12} />
                  {m}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 20, fontSize: 14, letterSpacing: "0.06em", textTransform: "uppercase" }}>Contacto</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { Icon: MapPin, text: "Sogamoso, Boyacá, Colombia" },
              { Icon: Phone, text: "+57 (8) 770 0000" },
              { Icon: Mail, text: "info@sugamuxi.gov.co" },
            ].map(({ Icon, text }) => (
              <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{
                  width: 32, height: 32, flexShrink: 0,
                  background: "rgba(27,94,59,0.2)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={14} color="var(--color-primary-xl)" />
                </div>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, paddingTop: 6 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "20px 0",
      }}>
        <div className="container-wide footer-bottom" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            © 2025 Provincia de Sugamuxi · Todos los derechos reservados
          </p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            Boyacá, Colombia 🇨🇴
          </p>
        </div>
      </div>
    </footer>
  );
}
