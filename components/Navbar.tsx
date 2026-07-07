"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Destinos", href: "/destinos" },
  { label: "Experiencias", href: "/experiencias" },
  { label: "Cultura", href: "/cultura" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Scroll progress bar
  useEffect(() => {
    const handleProgress = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleProgress, { passive: true });
    return () => window.removeEventListener("scroll", handleProgress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // El centro vertical del navbar (top 20px + mitad de 72px = 56px)
      const x = window.innerWidth / 2;
      const y = 56;
      
      // Usamos elementsFromPoint para ver exactamente qué hay debajo del navbar en tiempo real
      const elements = document.elementsFromPoint(x, y);
      
      let detectedDark = false;
      let detectedSolidBg = false;

      for (const el of elements) {
        // Ignorar la propia navbar para que no se lea a sí misma
        if (el.tagName === 'HEADER' || el.closest('header')) continue;

        const style = window.getComputedStyle(el);
        const bgColor = style.backgroundColor;
        const bgImage = style.backgroundImage;

        // Analizar el color de fondo si es sólido
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          const match = bgColor.match(/\d+/g);
          if (match && match.length >= 3) {
            const [r, g, b] = match.map(Number);
            // Fórmula de brillo percibido (HSP)
            const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
            
            // Si el brillo es menor a 140, es oscuro. Si no, es claro.
            detectedDark = hsp < 140;
            detectedSolidBg = true;
            break;
          }
        }

        // Si tiene un overlay explícito de este proyecto
        if (el.classList.contains('hero-overlay')) {
          detectedDark = true;
          detectedSolidBg = true;
          break;
        }

        // Si hay una imagen o gradiente, asumimos que es el hero oscuro (heurística del proyecto)
        if (bgImage && bgImage !== 'none' && (bgImage.includes('linear-gradient') || bgImage.includes('radial-gradient'))) {
          detectedDark = true;
          detectedSolidBg = true;
          break;
        }
      }

      // Si detectó un fondo sólido, actualizamos el estado. Si no, fallback al top de la página.
      if (detectedSolidBg) {
        setIsDarkBg(detectedDark);
      } else {
        // Por defecto el body de Next.js suele ser blanco/claro
        setIsDarkBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = () => setMenuOpen(false);

  // Colores dinámicos dependiendo del fondo
  const textColor = isDarkBg ? "#fff" : "#000"; // Negro puro para fondos blancos
  const textMuted = isDarkBg ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.65)";
  const bgActive = isDarkBg ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.04)";
  const bgHover = isDarkBg ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)";

  return (
    <>
      <header style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        width: "92%",
        maxWidth: 1200,
        zIndex: 1000,
        height: 72,
        borderRadius: 24,
        display: "flex",
        alignItems: "center",
        padding: "0 32px",
        background: "transparent",
        backdropFilter: "blur(20px) saturate(150%)",
        WebkitBackdropFilter: "blur(20px) saturate(150%)",
        border: "none",
        boxShadow: "none",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        overflow: "hidden",
      }}>
        {/* Scroll progress bar */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 3,
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #6B1A2A, #1E4D7B, #3A6B2A, #C4895A)",
          borderRadius: "0 3px 3px 0",
          transition: "width 0.1s linear",
          zIndex: 2,
        }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>

          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <img 
              src="/assets/LogoSugamuxi.png" 
              alt="Logo Sugamuxi" 
              style={{ 
                height: 56, 
                objectFit: "contain",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))"
              }} 
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1) rotate(-1.5deg)";
                e.currentTarget.style.filter = "drop-shadow(0 8px 12px rgba(201,150,58,0.35))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                e.currentTarget.style.filter = "drop-shadow(0 4px 6px rgba(0,0,0,0.1))";
              }}
            />
          </Link>

          <nav style={{ display: "flex", gap: 8, alignItems: "center" }} className="nav-desktop">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    color: active ? textColor : textMuted,
                    padding: "8px 16px",
                    fontSize: 14,
                    fontWeight: active ? 600 : 500,
                    transition: "all 0.3s",
                    background: active ? bgActive : "transparent",
                    borderRadius: 12,
                    textDecoration: "none",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = textColor;
                      e.currentTarget.style.background = bgHover;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = textMuted;
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {item.label}
                  {active && (
                    <span style={{
                      position: "absolute",
                      bottom: 4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "var(--color-gold)",
                    }} />
                  )}
                </Link>
              );
            })}

            <Link href="/contacto" style={{
              background: "var(--color-gold)",
              color: "#000",
              padding: "10px 22px",
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 600,
              marginLeft: 16,
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--color-gold)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.2)";
              }}
            >
              Planifica tu viaje
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            style={{
              background: "transparent",
              border: "none",
              color: textColor,
              cursor: "pointer",
              padding: 8,
              transition: "color 0.3s ease",
            }}
            className="nav-mobile-btn"
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(30px) saturate(150%)",
          WebkitBackdropFilter: "blur(30px) saturate(150%)",
          zIndex: 1001,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          animation: "fadeIn 0.3s ease",
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              padding: 8,
            }}
            aria-label="Cerrar menú"
          >
            <X size={32} />
          </button>

          <div style={{
            position: "absolute",
            top: 24,
            left: 24,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            <MapPin size={22} color="var(--color-gold)" strokeWidth={2.5} />
            <span style={{
              fontSize: 20,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.5px",
              fontFamily: "var(--font-serif)",
            }}>
              Sugamuxi
            </span>
          </div>

          {navItems.map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                style={{
                  color: active ? "var(--color-gold)" : "#fff",
                  fontSize: 32,
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: "var(--font-serif)",
                  padding: "12px 24px",
                  opacity: 0,
                  animation: `slideUp 0.4s ease ${i * 0.08}s forwards`,
                  position: "relative",
                }}
              >
                {item.label}
                {active && (
                  <span style={{
                    position: "absolute",
                    bottom: 8,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 40,
                    height: 2,
                    background: "var(--color-gold)",
                    borderRadius: 1,
                  }} />
                )}
              </Link>
            );
          })}

          <Link
            href="/contacto"
            onClick={handleNavClick}
            style={{
              marginTop: 24,
              background: "var(--color-gold)",
              color: "#000",
              padding: "14px 32px",
              borderRadius: 50,
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              opacity: 0,
              animation: "slideUp 0.4s ease 0.4s forwards",
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            }}
          >
            Planifica tu viaje
          </Link>
        </div>
      )}
    </>
  );
}