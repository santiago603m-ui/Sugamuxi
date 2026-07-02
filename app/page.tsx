"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, ChevronDown, MapPin, Star, Clock, Users,
  Camera, Compass, Wind, Zap, Map
} from "lucide-react";

import { highlights, stats, homeExperiences as experiences } from "@/data/home";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * end);

      setCount(current);

      if (progress >= 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return { count, ref };
}

function StatItem({ icon: Icon, value, label }: { icon: typeof Star; value: string; label: string }) {
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const { count, ref } = useCountUp(numericValue, 2500);

  return (
    <div ref={ref} style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
        <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>
          {count}{suffix}
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>{label}</div>
      </div>
    </div>
  );
}

function HighlightCard({ dest, index }: { dest: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link href={`/destinos/${dest.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          animationDelay: `${index * 0.1}s`,
          borderRadius: "24px",
          background: "#fff",
          overflow: "hidden",
          position: "relative",
          boxShadow: isHovered 
            ? `0 24px 50px -12px ${dest.color}40, 0 0 0 1px ${dest.color}20` 
            : "0 10px 30px -10px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)",
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          transition: "all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
        }}
        className="card-2010"
      >
        <div style={{ position: "relative", height: 280, overflow: "hidden" }}>
          <img
            src={dest.img}
            alt={dest.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: isHovered ? "scale(1.12)" : "scale(1.02)",
              transition: "transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: isHovered 
              ? "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
            transition: "background 0.5s ease"
          }} />
          
          {/* Badge */}
          <div style={{
            position: "absolute", top: 20, left: 20, zIndex: 2,
          }}>
            <span style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}>
              {dest.tag}
            </span>
          </div>

          <div style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20,
            zIndex: 2,
            transform: isHovered ? "translateY(-4px)" : "translateY(0)",
            transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}>
            <h3 style={{
              fontFamily: "var(--font-serif)",
              fontSize: 28,
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              textShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}>
              {dest.name}
            </h3>
          </div>
        </div>
        
        <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff" }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: isHovered ? dest.color : "#6B7280", transition: "color 0.3s ease" }}>
            Explorar municipio
          </span>
          <div style={{
            width: 36, height: 36,
            background: isHovered ? dest.color : "#F3F4F6",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}>
            <ArrowRight size={16} color={isHovered ? "#fff" : dest.color} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const heroImg = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2400";

  return (
    <div className="page-enter">

      {/* ══════════════════════════════════════════════════
          HERO — Estático: Provincia de Sugamuxi
      ══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        height: "100vh",
        minHeight: 700,
        overflow: "hidden",
        background: "linear-gradient(135deg, #4a000b 0%, #000b4a 100%)"
      }}>

        <div style={{
          position: "absolute", inset: 0,
          opacity: 0.25,
          filter: "blur(6px)",
          transform: "scale(1.05)",
        }}>
          <img
            src={heroImg}
            alt="Provincia de Sugamuxi"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        <div className="container-wide" style={{
          position: "relative", zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
          paddingTop: "var(--nav-height)",
        }}>

          <div style={{
            textAlign: "center",
            maxWidth: 1000,
            width: "100%",
            animation: "floatAmbient 8s ease-in-out infinite",
          }}>

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(201,150,58,0.15)",
              border: "1px solid rgba(201,150,58,0.3)",
              borderRadius: "var(--radius-full)",
              padding: "8px 20px",
              marginBottom: 28,
            }}>
              <MapPin size={14} color="var(--color-gold)" />
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>
                Naturaleza pura
              </span>
            </div>

            <div style={{ position: "relative", display: "inline-block", marginBottom: 24 }}>
              <h1 aria-hidden="true" style={{
                position: "absolute",
                inset: 0,
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(60px, 9vw, 120px)",
                fontWeight: 900,
                lineHeight: 0.95,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.12)",
                userSelect: "none",
                pointerEvents: "none",
              }}>
                Provincia de
                Sugamuxi
              </h1>
              <h1 style={{
                position: "relative",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(60px, 9vw, 120px)",
                fontWeight: 900,
                lineHeight: 0.95,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                backgroundImage: `url(${heroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmerBackground 25s linear infinite",
              }}>
                Provincia de
                Sugamuxi
              </h1>
            </div>

            <p style={{
              fontSize: "clamp(18px, 2.2vw, 26px)",
              color: "rgba(255,255,255,0.85)",
              maxWidth: 700,
              margin: "0 auto 48px",
              lineHeight: 1.6,
            }}>
              Donde los Andes guardan los secretos más hermosos de Colombia
            </p>

            <div className="hero-btn-group" style={{
              display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",
            }}>
              <Link
                href="/destinos"
                className="btn btn-gold"
                style={{
                  fontSize: 16,
                  padding: "14px 32px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Explorar Destinos <ArrowRight size={18} />
              </Link>
              <Link
                href="/experiencias"
                className="btn btn-outline"
                style={{
                  fontSize: 16,
                  padding: "14px 32px",
                  borderColor: "rgba(255,255,255,0.4)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Ver Experiencias
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--color-primary)", padding: "32px 0" }}>
        <div className="container-wide stats-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 24,
        }}>
          {stats.map(({ icon: Icon, value, label }) => (
            <StatItem key={label} icon={Icon} value={value} label={label} />
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          DESTINOS HIGHLIGHTS
      ══════════════════════════════════════════════════ */}
      <section className="section-reduce-pad" style={{ padding: "100px 0", background: "var(--color-gray-50)" }}>
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

          <div className="destinos-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}>
            {highlights.map((dest, i) => (
              <HighlightCard key={dest.name} dest={dest} index={i} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link
              href="/destinos"
              className="btn btn-primary"
              style={{
                fontSize: 15,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
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
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(27,94,59,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(201,150,58,0.10) 0%, transparent 50%)
          `,
        }} />

        {[...Array(3)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            width: 6, height: 6,
            borderRadius: "50%",
            background: i % 2 === 0 ? "var(--color-gold)" : "var(--color-primary-xl)",
            top: `${20 + i * 25}%`,
            left: `${10 + i * 35}%`,
            opacity: 0.5,
            animation: `float ${3 + i * 0.8}s ease-in-out infinite`,
            animationDelay: `${i * 0.6}s`,
          }} />
        ))}

        <div className="container-wide" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>

          <div style={{ position: "relative", display: "inline-block", marginBottom: 40 }}>
            <div style={{
              position: "absolute",
              inset: -20,
              borderRadius: "50%",
              border: "1px solid rgba(201,150,58,0.25)",
              animation: "pulse-ring 2.5s ease-out infinite",
            }} />
            <div style={{
              position: "absolute",
              inset: -8,
              borderRadius: "50%",
              border: "1px solid rgba(201,150,58,0.15)",
              animation: "pulse-ring 2.5s ease-out infinite",
              animationDelay: "0.8s",
            }} />
            <div style={{
              width: 100, height: 100,
              background: "linear-gradient(135deg, rgba(27,94,59,0.3), rgba(201,150,58,0.2))",
              border: "1px solid rgba(201,150,58,0.3)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(10px)",
            }}>
              <Map size={44} color="var(--color-gold)" />
            </div>
          </div>

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

          <div style={{
            position: "relative",
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
          }}>
            <div className="map-placeholder" style={{
              height: 320,
              background: "linear-gradient(135deg, #1a2f1e 0%, #0d1f14 30%, #1B3A25 60%, #0d1f14 100%)",
              position: "relative",
              overflow: "hidden",
            }}>
              {[...Array(8)].map((_, i) => (
                <div key={i} style={{
                  position: "absolute",
                  borderRadius: "50%",
                  background: i % 3 === 0 ? "rgba(201,150,58,0.25)" : "rgba(76,175,122,0.15)",
                  width: 30 + (i * 17 % 50), height: 30 + (i * 17 % 50),
                  left: `${8 + (i * 19) % 80}%`,
                  top: `${12 + (i * 29) % 70}%`,
                  filter: "blur(4px)",
                  animation: `float ${4 + i % 3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }} />
              ))}

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
                    width: 10, height: 10,
                    background: "var(--color-gold)",
                    borderRadius: "50%",
                    boxShadow: "0 0 0 3px rgba(201,150,58,0.2)",
                    animation: `pulse-ring 2s ease-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }} />
                </div>
              ))}

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
      <section className="section-reduce-pad" style={{ padding: "100px 0", background: "var(--color-white)" }}>
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
            <Link
              href="/experiencias"
              className="btn btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Ver todas <ArrowRight size={16} />
            </Link>
          </div>

          <div className="exp-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {experiences.map(({ icon: Icon, title, desc, color }, i) => (
              <div
                key={title}
                style={{
                  padding: 32,
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-gray-200)",
                  background: "var(--color-gray-50)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  animationDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
                  el.style.background = "#fff";
                  el.style.borderColor = "var(--color-gray-100)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
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
      <section className="section-reduce-pad" style={{
        position: "relative",
        overflow: "hidden",
        padding: "80px 0",
        background: "var(--color-dark)",
      }}>
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000"
          alt="CTA background"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,26,20,0.85)" }} />

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
          <div className="hero-btn-group" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contacto"
              className="btn btn-gold"
              style={{
                fontSize: 16,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Planifica tu viaje <ArrowRight size={16} />
            </Link>
            <Link
              href="/destinos"
              className="btn btn-outline"
              style={{ fontSize: 16 }}
            >
              Ver destinos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}