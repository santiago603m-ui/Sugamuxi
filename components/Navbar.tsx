"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mountain } from "lucide-react";

const navLinks = [
  { label: "Inicio",        href: "/" },
  { label: "Destinos",      href: "/destinos" },
  { label: "Experiencias",  href: "/experiencias" },
  { label: "Cultura",       href: "/cultura" },
  { label: "Contacto",      href: "/contacto" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          transition: "background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease",
          background: scrolled
            ? "rgba(15, 26, 20, 0.96)"
            : isHome
            ? "transparent"
            : "rgba(15, 26, 20, 0.96)",
          backdropFilter: scrolled || !isHome ? "blur(20px)" : "none",
          boxShadow: scrolled || !isHome ? "0 2px 32px rgba(0,0,0,0.25)" : "none",
          borderBottom: scrolled || !isHome ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div className="container-wide" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: 40, height: 40,
              background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-xl))",
              borderRadius: "10px",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 16px rgba(27,94,59,0.5)"
            }}>
              <Mountain size={22} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>Sugamuxi</div>
              <div style={{ fontSize: 10, fontWeight: 500, color: "rgba(255,255,255,0.55)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Provincia · Boyacá</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="nav-desktop">
            {navLinks.map(link => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    position: "relative",
                    padding: "8px 16px",
                    fontSize: 14,
                    fontWeight: active ? 700 : 500,
                    color: active ? "#fff" : "rgba(255,255,255,0.75)",
                    borderRadius: "var(--radius-full)",
                    transition: "all var(--transition)",
                    background: active ? "rgba(255,255,255,0.12)" : "transparent",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={e => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = "#fff";
                    if (!active) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                  }}
                  onMouseLeave={e => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
                    if (!active) (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  {link.label}
                  {active && (
                    <span style={{
                      position: "absolute",
                      bottom: 2,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 20,
                      height: 2,
                      background: "var(--color-gold)",
                      borderRadius: 2,
                    }} />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contacto"
              className="btn btn-gold"
              style={{ marginLeft: 12, padding: "10px 22px", fontSize: 13 }}
            >
              Planifica tu viaje
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-mobile-btn"
            style={{ color: "#fff", padding: 8 }}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          background: "var(--color-dark)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={{ position: "absolute", top: 24, right: 24, color: "#fff", padding: 8 }}
        >
          <X size={28} />
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <Mountain size={28} color="var(--color-gold)" />
          <span style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>Sugamuxi</span>
        </div>

        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: pathname === link.href ? "var(--color-gold)" : "rgba(255,255,255,0.85)",
              letterSpacing: "-0.02em",
              transition: "color 0.2s ease",
            }}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/contacto"
          className="btn btn-primary"
          style={{ marginTop: 16 }}
        >
          Planifica tu viaje
        </Link>
      </div>
    </>
  );
}
