"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────
   Escudos/símbolos de los 13 municipios de Sugamuxi
   Fuente: Wikimedia Commons (upload.wikimedia.org) — URLs verificadas
   ──────────────────────────────────────────────────────────────────────── */
const municipios = [
  {
    nombre: "Sogamoso",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Escudo_de_Sogamoso.svg",
    tipo: "escudo",
  },
  {
    nombre: "Monguí",
    /* No hay escudo en Commons — se usa imagen de la basílica como distintivo */
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Basilica_de_Mongui_Boyaca_Colombia.jpg/120px-Basilica_de_Mongui_Boyaca_Colombia.jpg",
    tipo: "foto",
  },
  {
    nombre: "Aquitania",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Escudo_de_Aquitania_%28Boyac%C3%A1%29.svg",
    tipo: "escudo",
  },
  {
    nombre: "Iza",
    /* Bandera oficial */
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Flag_of_Iza_%28Boyac%C3%A1%29.svg/200px-Flag_of_Iza_%28Boyac%C3%A1%29.svg.png",
    tipo: "bandera",
  },
  {
    nombre: "Nobsa",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Escudo_nobsa.gif",
    tipo: "escudo",
  },
  {
    nombre: "Firavitoba",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Escudo_de_Firavitoba.svg",
    tipo: "escudo",
  },
  {
    nombre: "Tibasosa",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Tibasosa_%28Boyac%C3%A1%29.svg",
    tipo: "bandera",
  },
  {
    nombre: "Tota",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Flag_of_Tota_%28Boyac%C3%A1%29.svg",
    tipo: "bandera",
  },
  {
    nombre: "Pesca",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Escudo_de_Pesca.svg",
    tipo: "escudo",
  },
  {
    nombre: "Cuítiva",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Cu%C3%ADtiva.svg",
    tipo: "bandera",
  },
  {
    nombre: "Gámeza",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/81/Flag_of_G%C3%A1meza_%28Boyac%C3%A1%29.svg",
    tipo: "bandera",
  },
  {
    nombre: "Corrales",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Corrales_%28Boyac%C3%A1%29.svg",
    tipo: "bandera",
  },
  {
    nombre: "Mongua",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Mongua_%28Boyac%C3%A1%29.svg",
    tipo: "bandera",
  },
];

export default function Footer() {
  return (
    <footer style={{
      background: "var(--color-dark)",
      color: "rgba(255,255,255,0.7)",
      paddingTop: 56,
    }}>
      <div className="container-wide" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 32,
        paddingBottom: 40,
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
            <img
              src="/assets/LogoSugamuxi.png"
              alt="Logo Sugamuxi"
              style={{
                height: 56,
                objectFit: "contain",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08) translateY(-4px)";
                e.currentTarget.style.filter = "drop-shadow(0 12px 16px rgba(255,255,255,0.15))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) translateY(0)";
                e.currentTarget.style.filter = "drop-shadow(0 4px 8px rgba(0,0,0,0.4))";
              }}
            />
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.5)", maxWidth: 260 }}>
            Destino turístico oficial de la Provincia de Sugamuxi en el corazón de Boyacá, Colombia.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
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

        {/* Destinations */}
        <div style={{ gridColumn: "span 2" }}>
          <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase" }}>Municipios de Sugamuxi</h4>
          <ul style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            columnGap: 16,
            rowGap: 10
          }}>
            {municipios.map(({ nombre }) => (
              <li key={nombre}>
                <Link href="/destinos" style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "color 0.2s ease",
                  textDecoration: "none",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"}
                >
                  <MapPin size={12} />
                  {nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase" }}>Contacto</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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
        padding: "16px 0",
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
