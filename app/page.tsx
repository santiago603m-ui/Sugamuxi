"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight, ChevronDown, MapPin, Star, Clock, Users,
  Camera, Compass, Wind, Zap, Map
} from "lucide-react";

// ── Hero carousel images ──────────────────────────────────────────────────────
const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2400",
    tag: "Naturaleza pura",
    title: "Provincia de\nSugamuxi",
    subtitle: "Donde los Andes guardan los secretos más hermosos de Colombia",
  },
  {
    img: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&q=80&w=2400",
    tag: "Patrimonio histórico",
    title: "Monguí\nSagrado",
    subtitle: "Pueblos de piedra y cal que cuentan siglos de historia colonial",
  },
  {
    img: "https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&q=80&w=2400",
    tag: "Lago de Tota",
    title: "Agua y\nCielo",
    subtitle: "El lago más alto de Colombia, un espejo de nubes y montañas",
  },
];

// ── Destination highlights ────────────────────────────────────────────────────
const highlights = [
  { name: "Sogamoso",  tag: "Ciudad del Sol",  img: "https://images.unsplash.com/photo-1549645938-34863f683bb5?auto=format&fit=crop&q=80&w=800",  color: "#1B5E3B" },
  { name: "Monguí",   tag: "Patrimonio",       img: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&q=80&w=800",  color: "#C9963A" },
  { name: "Aquitania", tag: "Lago de Tota",    img: "https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&q=80&w=800",  color: "#2E8B57" },
  { name: "Iza",      tag: "Aguas termales",   img: "https://images.unsplash.com/photo-1582046467006-2531eec2534a?auto=format&fit=crop&q=80&w=800",  color: "#E8B55A" },
];

// ── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
  { icon: MapPin,  value: "13",    label: "Municipios" },
  { icon: Users,   value: "400K+", label: "Visitantes al año" },
  { icon: Star,    value: "4.9",   label: "Calificación promedio" },
  { icon: Clock,   value: "365",   label: "Días al año para visitar" },
];

// ── Experiences preview ───────────────────────────────────────────────────────
const experiences = [
  { icon: Compass, title: "Senderismo Andino",    desc: "Rutas entre páramos y lagunas glaciares con guías locales certificados.", color: "#1B5E3B" },
  { icon: Camera,  title: "Turismo Cultural",     desc: "Museos, mercados artesanales y festivales tradicionales boyacenses.",     color: "#C9963A" },
  { icon: Wind,    title: "Deportes de Aventura", desc: "Parapente, ciclomontañismo y kayak en el corazón de los Andes.",         color: "#2E8B57" },
  { icon: Zap,     title: "Gastronomía Local",    desc: "Piquete boyacense, chicha de maíz y cocina de tradición centenaria.",    color: "#8B4513" },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setSlide(s => (s + 1) % heroSlides.length);
        setAnimating(false);
      }, 400);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => {
    setAnimating(true);
    setTimeout(() => { setSlide(i); setAnimating(false); }, 300);
  };

  const current = heroSlides[slide];

  return (
    <div className="page-enter">

      {/* ══════════════════════════════════════════════════
          HERO – Full screen with transparent navbar
      ══════════════════════════════════════════════════ */}
      <section style={{ position: "relative", height: "100vh", minHeight: 700, overflow: "hidden" }}>

        {/* Background image */}
        <div style={{
          position: "absolute", inset: 0,
          transition: "opacity 0.5s ease",
          opacity: animating ? 0 : 1,
        }}>
          <img
            src={current.img}
            alt={current.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          <div className="hero-overlay" />
          {/* Bottom gradient */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
            background: "linear-gradient(to top, rgba(10,26,20,0.85), transparent)",
          }} />
        </div>

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 48px",
          paddingTop: "var(--nav-height)",
          maxWidth: 900,
          marginLeft: 0,
        }}
        className="container-wide"
        >
          {/* Tag */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(201,150,58,0.2)",
            border: "1px solid rgba(201,150,58,0.4)",
            borderRadius: "var(--radius-full)",
            padding: "6px 16px",
            marginBottom: 24,
            width: "fit-content",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(10px)" : "translateY(0)",
            transition: "all 0.5s ease 0.1s",
          }}>
            <MapPin size={12} color="var(--color-gold)" />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold)" }}>
              {current.tag}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(52px, 7vw, 96px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.05,
            whiteSpace: "pre-line",
            marginBottom: 24,
            textShadow: "0 4px 24px rgba(0,0,0,0.3)",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(20px)" : "translateY(0)",
            transition: "all 0.5s ease 0.2s",
          }}>
            {current.title}
          </h1>

          <p style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.8)",
            maxWidth: 520,
            lineHeight: 1.65,
            marginBottom: 40,
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(16px)" : "translateY(0)",
            transition: "all 0.5s ease 0.3s",
          }}>
            {current.subtitle}
          </p>

          <div style={{
            display: "flex", gap: 16, flexWrap: "wrap",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(12px)" : "translateY(0)",
            transition: "all 0.5s ease 0.4s",
          }}>
            <Link href="/destinos" className="btn btn-primary" style={{ fontSize: 15 }}>
              Explorar Destinos <ArrowRight size={16} />
            </Link>
            <Link href="/experiencias" className="btn btn-outline" style={{ fontSize: 15 }}>
              Ver Experiencias
            </Link>
          </div>
        </div>

        {/* Slide dots */}
        <div style={{
          position: "absolute", bottom: 120, left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: 8, zIndex: 3,
        }}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === slide ? 32 : 8,
                height: 8,
                borderRadius: 4,
                background: i === slide ? "var(--color-gold)" : "rgba(255,255,255,0.4)",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 3,
        }}>
          <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Descubrir</span>
          <ChevronDown size={18} color="rgba(255,255,255,0.5)" style={{ animation: "float 2s ease-in-out infinite" }} />
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--color-primary)", padding: "32px 0" }}>
        <div className="container-wide" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 24,
        }}>
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 48, height: 48,
                background: "rgba(255,255,255,0.12)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon size={20} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          DESTINOS HIGHLIGHTS
      ══════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 0", background: "var(--color-gray-50)" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Nuestros destinos</div>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 700,
              color: "var(--color-dark)",
              lineHeight: 1.2,
            }}>
              Lugares que te dejarán
              <span style={{ color: "var(--color-primary)", display: "block" }}>sin palabras</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}>
            {highlights.map((dest, i) => (
              <div
                key={dest.name}
                className="card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
                  <img
                    src={dest.img}
                    alt={dest.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%)",
                  }} />
                  <div style={{
                    position: "absolute",
                    top: 14, left: 14,
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "var(--radius-full)",
                    padding: "4px 12px",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "0.08em",
                  }}>
                    {dest.tag}
                  </div>
                  <h3 style={{
                    position: "absolute",
                    bottom: 16, left: 16,
                    fontFamily: "var(--font-serif)",
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#fff",
                  }}>
                    {dest.name}
                  </h3>
                </div>
                <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "var(--color-text-light)" }}>Explorar municipio</span>
                  <div style={{
                    width: 32, height: 32,
                    background: dest.color,
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <ArrowRight size={14} color="#fff" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/destinos" className="btn btn-primary" style={{ fontSize: 15 }}>
              Ver todos los destinos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          MAPA INTERACTIVO – "PRÓXIMAMENTE"
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        padding: "120px 0",
        background: "var(--color-dark)",
        overflow: "hidden",
      }}>
        {/* Decorative background elements */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(27,94,59,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(201,150,58,0.10) 0%, transparent 50%)
          `,
        }} />

        {/* Grid pattern overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            width: 6, height: 6,
            borderRadius: "50%",
            background: i % 2 === 0 ? "var(--color-gold)" : "var(--color-primary-xl)",
            top: `${15 + i * 14}%`,
            left: `${5 + i * 15}%`,
            opacity: 0.6,
            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }} />
        ))}

        <div className="container-wide" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>

          {/* Icon container with pulse */}
          <div style={{ position: "relative", display: "inline-block", marginBottom: 40 }}>
            <div style={{
              position: "absolute",
              inset: -20,
              borderRadius: "50%",
              border: "2px solid rgba(201,150,58,0.3)",
              animation: "pulse-ring 2.5s ease-out infinite",
            }} />
            <div style={{
              position: "absolute",
              inset: -8,
              borderRadius: "50%",
              border: "2px solid rgba(201,150,58,0.15)",
              animation: "pulse-ring 2.5s ease-out infinite",
              animationDelay: "0.8s",
            }} />
            <div style={{
              width: 100, height: 100,
              background: "linear-gradient(135deg, rgba(27,94,59,0.3), rgba(201,150,58,0.2))",
              border: "2px solid rgba(201,150,58,0.4)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(10px)",
            }}>
              <Map size={44} color="var(--color-gold)" />
            </div>
          </div>

          {/* "Próximamente" badge */}
          <div style={{ marginBottom: 24 }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 24px",
              borderRadius: "var(--radius-full)",
              border: "1px solid rgba(201,150,58,0.4)",
              background: "rgba(201,150,58,0.08)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
            }}>
              <span style={{
                width: 7, height: 7,
                borderRadius: "50%",
                background: "var(--color-gold)",
                animation: "pulse 1.5s ease-in-out infinite",
                display: "inline-block",
              }} />
              Próximamente
            </span>
          </div>

          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(36px, 5vw, 72px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Mapa Interactivo de
            <br />
            <span style={{
              background: "linear-gradient(90deg, var(--color-gold), var(--color-primary-xl), var(--color-gold))",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 3s linear infinite",
            }}>
              Sugamuxi
            </span>
          </h2>

          <p style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.55)",
            maxWidth: 560,
            margin: "0 auto 48px",
            lineHeight: 1.75,
          }}>
            Estamos construyendo una experiencia única: un mapa interactivo donde podrás explorar
            los 13 municipios, descubrir rutas, puntos de interés y planificar tu aventura perfecta
            por la Provincia de Sugamuxi.
          </p>

          {/* Feature chips */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
            {["13 Municipios", "Rutas turísticas", "Puntos de interés", "Clima en tiempo real", "Tours guiados"].map(chip => (
              <span key={chip} style={{
                padding: "8px 18px",
                borderRadius: "var(--radius-full)",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                fontSize: 13,
                color: "rgba(255,255,255,0.6)",
                fontWeight: 500,
              }}>
                {chip}
              </span>
            ))}
          </div>

          {/* Mock map preview */}
          <div style={{
            position: "relative",
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
          }}>
            {/* Blurred map-like preview */}
            <div style={{
              height: 320,
              background: "linear-gradient(135deg, #1a2f1e 0%, #0d1f14 30%, #1B3A25 60%, #0d1f14 100%)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Simulated map grid */}
              {[...Array(12)].map((_, i) => (
                <div key={i} style={{
                  position: "absolute",
                  borderRadius: "50%",
                  background: i % 3 === 0 ? "rgba(201,150,58,0.3)" : "rgba(76,175,122,0.2)",
                  width: 40 + (i * 13 % 40), height: 40 + (i * 13 % 40),
                  left: `${5 + (i * 17) % 85}%`,
                  top: `${10 + (i * 23) % 75}%`,
                  filter: "blur(3px)",
                  animation: `float ${4 + i % 3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }} />
              ))}

              {/* Map pins */}
              {[
                { x: "25%", y: "35%" }, { x: "55%", y: "25%" },
                { x: "70%", y: "55%" }, { x: "38%", y: "65%" },
              ].map((pos, i) => (
                <div key={i} style={{
                  position: "absolute",
                  left: pos.x, top: pos.y,
                  transform: "translate(-50%, -50%)",
                }}>
                  <div style={{
                    width: 12, height: 12,
                    background: "var(--color-gold)",
                    borderRadius: "50%",
                    boxShadow: "0 0 0 4px rgba(201,150,58,0.3)",
                    animation: `pulse-ring 2s ease-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }} />
                </div>
              ))}

              {/* Coming soon overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 30%, rgba(15,26,20,0.9) 100%)",
                display: "flex", alignItems: "flex-end", justifyContent: "center",
                paddingBottom: 24,
              }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "10px 24px",
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "var(--radius-full)",
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-gold)", animation: "pulse 1.5s ease-in-out infinite" }} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>Mapa en desarrollo · Primera fase activa</span>
                </div>
              </div>
            </div>
          </div>

          <p style={{ marginTop: 32, fontSize: 13, color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em" }}>
            Fase 1 · En construcción · Disponible pronto
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          EXPERIENCES PREVIEW
      ══════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 0", background: "var(--color-white)" }}>
        <div className="container-wide">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
            <div>
              <div className="section-label">Qué hacer</div>
              <h2 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 700,
                color: "var(--color-dark)",
                lineHeight: 1.2,
              }}>
                Experiencias<br />
                <span style={{ color: "var(--color-primary)" }}>que transforman</span>
              </h2>
            </div>
            <Link href="/experiencias" className="btn btn-primary">
              Ver todas <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {experiences.map(({ icon: Icon, title, desc, color }, i) => (
              <div
                key={title}
                style={{
                  padding: 32,
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-gray-200)",
                  background: "var(--color-gray-50)",
                  transition: "all var(--transition)",
                  cursor: "pointer",
                  animationDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "var(--shadow-lg)";
                  el.style.background = "#fff";
                  el.style.borderColor = "var(--color-gray-100)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.background = "var(--color-gray-50)";
                  el.style.borderColor = "var(--color-gray-200)";
                }}
              >
                <div style={{
                  width: 56, height: 56,
                  borderRadius: "var(--radius-md)",
                  background: `${color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>
                  <Icon size={26} color={color} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-dark)", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "var(--color-text-light)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        padding: "80px 0",
      }}>
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000"
          alt="CTA background"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,26,20,0.82)" }} />

        <div className="container-wide" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>¿Listo para explorar?</div>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: 20,
            lineHeight: 1.2,
          }}>
            Tu aventura en Sugamuxi<br />comienza hoy
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", marginBottom: 40 }}>
            Conecta con guías locales y vive experiencias auténticas
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contacto" className="btn btn-gold" style={{ fontSize: 16 }}>
              Planifica tu viaje <ArrowRight size={16} />
            </Link>
            <Link href="/destinos" className="btn btn-outline" style={{ fontSize: 16 }}>
              Ver destinos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
