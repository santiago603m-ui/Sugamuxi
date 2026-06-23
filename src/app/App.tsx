import { useState, useEffect } from "react";
import {
  Mountain, ChevronDown, Menu, X, Facebook, Instagram, Twitter, Youtube,
  MapPin, Calendar, Bus, Hotel, Phone, Mail, Send, ArrowRight, Image,
} from "lucide-react";

// ─── Wireframe palette ────────────────────────────────────────────────────────
const W = {
  white:    "#ffffff",
  bg:       "#f9f9f9",
  surface:  "#f0f0f0",
  border:   "#cccccc",
  divider:  "#e2e2e2",
  muted:    "#aaaaaa",
  body:     "#555555",
  heading:  "#1a1a1a",
  dark:     "#2a2a2a",
  darker:   "#1a1a1a",
  fill:     "#dddddd",
  fillDark: "#bbbbbb",
  accent:   "#444444",
} as const;

const font = "Montserrat, sans-serif";
const serif = "Playfair Display, serif";

// ─── Image placeholder ────────────────────────────────────────────────────────
function ImgBox({ label, className = "", dark = false }: { label: string; className?: string; dark?: boolean }) {
  const bg   = dark ? "#3a3a3a" : W.fill;
  const bdr  = dark ? "#555555" : W.border;
  const icon = dark ? "#888888" : W.muted;
  const txt  = dark ? "#999999" : W.body;
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 select-none ${className}`}
      style={{ background: bg, border: `1.5px dashed ${bdr}` }}
    >
      <Image size={24} color={icon} strokeWidth={1.5} />
      <span className="text-xs font-medium text-center px-3 leading-snug" style={{ color: txt, fontFamily: font }}>
        {label}
      </span>
    </div>
  );
}

// ─── Section label ────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: W.muted, letterSpacing: "0.2em", fontFamily: font }}>
      {children}
    </p>
  );
}

// ─── Tag chip ─────────────────────────────────────────────────────────────────
function Tag({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <span
      className="inline-block text-xs font-semibold px-3 py-1 rounded-sm border"
      style={{
        background: dark ? W.dark : W.surface,
        color: dark ? W.muted : W.body,
        borderColor: dark ? "#444" : W.border,
        fontFamily: font,
      }}
    >
      {label}
    </span>
  );
}

// ─── Destination card ─────────────────────────────────────────────────────────
function DestinoCard({ name, desc, tag }: { name: string; desc: string; tag: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="overflow-hidden transition-all duration-200 cursor-pointer"
      style={{
        border: `1.5px solid ${hov ? W.accent : W.border}`,
        background: W.white,
        boxShadow: hov ? "0 8px 28px rgba(0,0,0,0.10)" : "0 1px 4px rgba(0,0,0,0.05)",
        transform: hov ? "translateY(-3px)" : "none",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="relative h-48">
        <ImgBox label={`Foto: ${name}`} className="w-full h-full" />
        <div
          className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-200"
          style={{ background: "rgba(26,26,26,0.88)", opacity: hov ? 1 : 0 }}
        >
          <p className="text-xs leading-relaxed" style={{ color: "#cccccc", fontFamily: font }}>{desc}</p>
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold" style={{ color: W.white }}>
            Explorar <ArrowRight size={12} />
          </span>
        </div>
      </div>
      <div className="px-4 py-4" style={{ borderTop: `1px solid ${W.divider}` }}>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-bold" style={{ color: W.heading, fontFamily: serif }}>{name}</h3>
          <Tag label={tag} />
        </div>
        <p className="text-xs leading-snug" style={{ color: W.body }}>{desc.slice(0, 65)}…</p>
      </div>
    </div>
  );
}

// ─── Experience card ──────────────────────────────────────────────────────────
function ExperienciaCard({ title, sub, desc }: { title: string; sub: string; desc: string }) {
  return (
    <div
      className="flex flex-col p-6 transition-all duration-150 hover:shadow-md"
      style={{ background: W.surface, border: `1.5px solid ${W.border}` }}
    >
      <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: W.muted, fontFamily: font }}>{sub}</p>
      <h3 className="text-lg font-bold mb-3" style={{ color: W.heading, fontFamily: serif }}>{title}</h3>
      <p className="text-sm leading-relaxed flex-1" style={{ color: W.body, fontFamily: font }}>{desc}</p>
      <button className="mt-5 self-start flex items-center gap-1 text-xs font-bold transition-all hover:gap-2" style={{ color: W.accent, fontFamily: font }}>
        Ver recorrido <ArrowRight size={13} />
      </button>
    </div>
  );
}

// ─── Guide card ───────────────────────────────────────────────────────────────
function GuiaCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="p-6" style={{ background: W.surface, border: `1.5px solid ${W.border}` }}>
      <div className="mb-4" style={{ color: W.accent }}>{icon}</div>
      <h3 className="text-base font-bold mb-4" style={{ color: W.heading, fontFamily: serif }}>{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-xs leading-snug" style={{ color: W.body, fontFamily: font }}>
            <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: W.muted }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = ["inicio", "destinos", "experiencias", "gastronomia", "guia", "contacto"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) { setActiveSection(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#inicio",       label: "Inicio" },
    { href: "#destinos",     label: "Destinos" },
    { href: "#experiencias", label: "Experiencias" },
    { href: "#gastronomia",  label: "Cultura" },
    { href: "#contacto",     label: "Contacto" },
  ];

  return (
    <div style={{ background: W.white, fontFamily: font, scrollBehavior: "smooth", color: W.heading }}>

      {/* ── NAVBAR ────────────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? `1px solid ${W.divider}` : "none",
          boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <Mountain size={22} color={scrolled ? W.dark : W.white} strokeWidth={2} />
            <span className="text-lg font-bold tracking-tight" style={{ color: scrolled ? W.dark : W.white, fontFamily: serif }}>
              Sugamuxi
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              const txtColor = scrolled ? (isActive ? W.darker : W.body) : (isActive ? W.white : "rgba(255,255,255,0.8)");
              return (
                <a
                  key={href}
                  href={href}
                  className="text-xs font-semibold tracking-widest uppercase relative transition-colors"
                  style={{ color: txtColor, letterSpacing: "0.12em", fontFamily: font }}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px" style={{ background: scrolled ? W.dark : W.white }} />
                  )}
                </a>
              );
            })}
            <a
              href="#contacto"
              className="ml-2 px-5 py-2 text-xs font-bold tracking-widest uppercase border transition-all hover:bg-black/5"
              style={{
                border: `1.5px solid ${scrolled ? W.accent : W.white}`,
                color: scrolled ? W.accent : W.white,
                fontFamily: font,
                letterSpacing: "0.1em",
              }}
            >
              Planea tu viaje
            </a>
          </nav>

          {/* Mobile button */}
          <button className="lg:hidden p-2" style={{ color: scrolled ? W.dark : W.white }} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            className="lg:hidden py-4 px-6 flex flex-col gap-3"
            style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderTop: `1px solid ${W.divider}` }}
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold py-1.5 border-b"
                style={{ color: W.heading, borderColor: W.divider }}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-1 text-center py-3 text-xs font-bold tracking-widest uppercase border"
              style={{ border: `1.5px solid ${W.accent}`, color: W.accent }}
              onClick={() => setMobileOpen(false)}
            >
              Planea tu viaje
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section id="inicio" className="relative flex items-center justify-center" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0">
          <ImgBox label="Foto: Panorama Provincia de Sugamuxi — Andes boyacenses" className="w-full h-full" dark />
          <div className="absolute inset-0" style={{ background: "rgba(20,20,20,0.62)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center pt-24">
          <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.22em", fontFamily: font }}>
            Boyacá · Colombia · Patrimonio Andino
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: W.white, fontFamily: serif }}>
            Descubre la Provincia<br />
            <span className="italic" style={{ color: "#dddddd" }}>de Sugamuxi</span>
          </h1>
          <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.72)", fontFamily: font }}>
            Paisajes, cultura y aventura en el corazón de Boyacá — donde los Andes guardan siglos de historia muisca y tradición andina.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#destinos"
              className="px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all hover:bg-white hover:text-black"
              style={{ background: W.white, color: W.dark, fontFamily: font, letterSpacing: "0.1em" }}
            >
              Explorar Destinos
            </a>
            <a
              href="#experiencias"
              className="px-8 py-4 text-xs font-bold tracking-widest uppercase border transition-all hover:bg-white/10"
              style={{ border: `1.5px solid ${W.white}`, color: W.white, fontFamily: font, letterSpacing: "0.1em" }}
            >
              Ver Recorridos
            </a>
          </div>
        </div>

        <a href="#destinos" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" style={{ color: "rgba(255,255,255,0.5)" }}>
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: font, letterSpacing: "0.15em" }}>Descubrir</span>
          <ChevronDown size={20} />
        </a>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <div style={{ background: W.dark, borderBottom: `1px solid #333` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "11", label: "Municipios" },
            { num: "3.000+", label: "m s.n.m." },
            { num: "500+", label: "Años de historia" },
            { num: "Lago de Tota", label: "El lago más alto de Colombia" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center px-2">
              <p className="text-2xl lg:text-3xl font-bold" style={{ color: W.white, fontFamily: serif }}>{num}</p>
              <p className="text-xs mt-1 font-semibold tracking-wide uppercase" style={{ color: W.muted, fontFamily: font }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESTINOS ──────────────────────────────────────────────────────── */}
      <section id="destinos" className="py-20 lg:py-28" style={{ background: W.white }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <Label>Explora la Provincia</Label>
              <h2 className="text-3xl lg:text-5xl font-bold" style={{ color: W.heading, fontFamily: serif }}>Destinos Imperdibles</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed" style={{ color: W.body }}>
              Cada municipio de Sugamuxi guarda una identidad única: desde el esplendor colonial hasta los paisajes de alta montaña.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <DestinoCard name="Sogamoso"  tag="Ciudad Solar"      desc="Capital de la provincia y ciudad del sol. Cuna de la cultura muisca, hogar del Museo Arqueológico y la Catedral." />
            <DestinoCard name="Monguí"    tag="Pueblo Patrimonial" desc="Considerado uno de los pueblos más bonitos de Colombia. Su basílica colonial y calles empedradas lo convierten en joya arquitectónica." />
            <DestinoCard name="Aquitania" tag="Lago de Tota"       desc="Puerta de entrada al Lago de Tota, el lago más alto de Colombia. Cultivos de cebolla en lienzo verde junto al espejo de agua andino." />
            <DestinoCard name="Iza"       tag="Aguas Termales"     desc="Pueblo de aguas termales y balnearios naturales. Un refugio de bienestar rodeado de montañas y tradición campesina boyacense." />
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-3 text-xs font-bold tracking-widest uppercase border transition-all hover:bg-black/5"
              style={{ border: `1.5px solid ${W.accent}`, color: W.accent, fontFamily: font, letterSpacing: "0.1em" }}
            >
              Ver todos los destinos <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCIAS ──────────────────────────────────────────────────── */}
      <section id="experiencias" className="py-20 lg:py-28" style={{ background: W.bg, borderTop: `1px solid ${W.divider}`, borderBottom: `1px solid ${W.divider}` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <Label>Recorridos Curados</Label>
              <h2 className="text-3xl lg:text-5xl font-bold" style={{ color: W.heading, fontFamily: serif }}>Experiencias &<br />Recorridos</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed" style={{ color: W.body }}>
              Rutas temáticas diseñadas para sumergirte en la cultura, la naturaleza y la gastronomía de Sugamuxi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ExperienciaCard sub="Naturaleza · 2 días"  title="Ruta del Sol y del Lago"   desc="Recorre las orillas del Lago de Tota al amanecer, visita cultivos de cebolla y disfruta del silencio de la sabana andina más alta de Colombia. Incluye kayak y observación de aves." />
            <ExperienciaCard sub="Patrimonio · 1 día"   title="Caminos de Monguí"          desc="Camine las calles empedradas del Pueblo Patrimonial de Colombia. Visite la Basílica Menor, el puente colonial y los talleres de artesanos que fabrican balones desde el siglo XVII." />
            <ExperienciaCard sub="Cultura · 3 días"     title="Valle de Sogamoso"          desc="Descubra la Ciudad del Sol: el Museo Arqueológico Tuamanama, la lagrada solar de los Muiscas, plazas coloniales y la gastronomía más auténtica del altiplano boyacense." />
          </div>

          <div className="mt-8">
            <ImgBox label="Foto: Paisaje panorámico — Lago de Tota al amanecer, Aquitania, Boyacá" className="w-full h-52 lg:h-64" />
          </div>
        </div>
      </section>

      {/* ── GASTRONOMÍA ───────────────────────────────────────────────────── */}
      <section id="gastronomia" className="py-20 lg:py-28" style={{ background: W.white }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Label>Sabores Ancestrales</Label>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: W.heading, fontFamily: serif }}>Gastronomía<br />Boyacense</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: W.body }}>
                La cocina de Sugamuxi es un viaje sensorial a las tradiciones muiscas y campesinas. Los sabores del altiplano —el cuchuco, la chicha de maíz, las arepas de choclo— hablan de siglos de convivencia con la tierra.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: W.body }}>
                Cada pueblo conserva sus recetas propias. En Sogamoso, el caldo de papa con costilla acompaña el amanecer. En Aquitania, la cebolla domina la mesa. En Iza, los amasijos y dulces de horno artesanal esperan a los viajeros.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Cuchuco de trigo", "Piquete boyacense", "Chicha de maíz", "Caldo de papa", "Mazamorra", "Arepas de choclo"].map((d) => (
                  <Tag key={d} label={d} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ImgBox label="Foto: Cuchuco de trigo con espinazo"    className="h-44" />
              <ImgBox label="Foto: Chicha de maíz artesanal"         className="h-44" />
              <ImgBox label="Foto: Piquete boyacense tradicional"     className="h-44" />
              <ImgBox label="Foto: Mercado campesino de Sogamoso"    className="h-44" />
            </div>
          </div>
        </div>
      </section>

      {/* ── GUÍA DEL VIAJERO ──────────────────────────────────────────────── */}
      <section id="guia" className="py-20 lg:py-28" style={{ background: W.dark }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: W.muted, letterSpacing: "0.2em", fontFamily: font }}>Información Práctica</p>
            <h2 className="text-3xl lg:text-5xl font-bold" style={{ color: W.white, fontFamily: serif }}>Guía del Viajero</h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: W.muted, fontFamily: font }}>
              Todo lo que necesitas saber antes de viajar a la Provincia de Sugamuxi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <Calendar size={26} />, title: "Cuándo ir",
                items: ["Temporada seca: diciembre — febrero (ideal para senderismo y el lago)", "Temporada de flores: marzo — mayo (paisajes verdes exuberantes)", "Semana Santa: procesiones en Monguí y Sogamoso", "Feria del Sol: junio en Sogamoso, festival cultural muisca", "Clima promedio: 13 °C – 19 °C todo el año"],
              },
              {
                icon: <Bus size={26} />, title: "Cómo llegar",
                items: ["Desde Bogotá: 3.5 h por la vía a Tunja (Autopista del Norte)", "Desde Tunja: 45 min en bus hacia Sogamoso (salidas frecuentes)", "Terminal de Sogamoso: conexiones a todos los municipios", "Desde Medellín: vuelo a Sogamoso o bus 7 h", "Alquiler de carro desde Tunja recomendado para exploración libre"],
              },
              {
                icon: <Hotel size={26} />, title: "Dónde hospedarse",
                items: ["Sogamoso: hoteles boutique y cadenas nacionales en el centro", "Monguí: posadas coloniales a pasos de la Basílica", "Aquitania: cabañas con vista al Lago de Tota", "Iza: spa-hoteles con aguas termales naturales", "Opciones de ecoturismo y camping en el páramo de Tota"],
              },
            ].map(({ icon, title, items }) => (
              <div key={title} className="p-6" style={{ background: "#333333", border: `1px solid #444444` }}>
                <div className="mb-4" style={{ color: W.muted }}>{icon}</div>
                <h3 className="text-base font-bold mb-4" style={{ color: W.white, fontFamily: serif }}>{title}</h3>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs leading-snug" style={{ color: "#999999", fontFamily: font }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "#666" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div
            className="mt-12 p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ border: `1px solid #444444`, background: "#333333" }}
          >
            <div>
              <h3 className="text-lg font-bold mb-1" style={{ color: W.white, fontFamily: serif }}>¿Listo para tu próxima aventura?</h3>
              <p className="text-xs" style={{ color: W.muted, fontFamily: font }}>Conecta con operadores locales especializados en turismo sostenible.</p>
            </div>
            <a
              href="#contacto"
              className="px-8 py-3 text-xs font-bold tracking-widest uppercase border whitespace-nowrap transition-all hover:bg-white/10"
              style={{ border: `1.5px solid ${W.white}`, color: W.white, fontFamily: font, letterSpacing: "0.1em" }}
            >
              Ver operadores turísticos
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ──────────────────────────────────────────────────────── */}
      <section id="contacto" className="py-20 lg:py-28" style={{ background: W.white }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14 text-center">
            <Label>Hablemos</Label>
            <h2 className="text-3xl lg:text-5xl font-bold" style={{ color: W.heading, fontFamily: serif }}>Contacto &<br />Operadores</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left */}
            <div className="flex flex-col justify-between gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: W.heading, fontFamily: serif }}>Planifica tu experiencia con expertos locales</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: W.body }}>
                  Nuestros operadores turísticos conocen cada rincón de la provincia. Te ofrecen rutas personalizadas, transporte, guías certificados y alojamiento en toda la región de Sugamuxi.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold tracking-widest uppercase border transition-all hover:bg-black/5"
                  style={{ border: `1.5px solid ${W.accent}`, color: W.accent, fontFamily: font, letterSpacing: "0.1em" }}
                >
                  Ver operadores turísticos <ArrowRight size={14} />
                </a>
              </div>
              <div className="space-y-4 pt-8" style={{ borderTop: `1px solid ${W.divider}` }}>
                {[
                  { icon: <MapPin size={15} />, label: "Ubicación",           val: "Sogamoso, Boyacá, Colombia" },
                  { icon: <Phone  size={15} />, label: "Teléfono",            val: "+57 (8) 770-0000" },
                  { icon: <Mail   size={15} />, label: "Correo electrónico",  val: "info@sugamuxi.gov.co" },
                ].map(({ icon, label, val }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center" style={{ background: W.surface, border: `1px solid ${W.border}`, color: W.accent }}>
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide" style={{ color: W.muted }}>{label}</p>
                      <p className="text-sm" style={{ color: W.heading }}>{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="p-8" style={{ background: W.bg, border: `1.5px solid ${W.border}` }}>
              <h3 className="text-lg font-bold mb-6" style={{ color: W.heading, fontFamily: serif }}>Envíanos un mensaje</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Nombre", "Correo electrónico"].map((lbl) => (
                    <div key={lbl}>
                      <label className="block text-xs font-bold tracking-wide uppercase mb-1.5" style={{ color: W.muted }}>{lbl}</label>
                      <input
                        type={lbl === "Correo electrónico" ? "email" : "text"}
                        placeholder={lbl === "Correo electrónico" ? "tu@correo.com" : "Tu nombre"}
                        className="w-full px-4 py-3 text-sm outline-none transition-all"
                        style={{ border: `1.5px solid ${W.border}`, background: W.white, color: W.heading, fontFamily: font }}
                        onFocus={(e) => (e.target.style.borderColor = W.accent)}
                        onBlur={(e)  => (e.target.style.borderColor = W.border)}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-wide uppercase mb-1.5" style={{ color: W.muted }}>Tipo de viaje</label>
                  <select
                    className="w-full px-4 py-3 text-sm outline-none appearance-none"
                    style={{ border: `1.5px solid ${W.border}`, background: W.white, color: W.heading, fontFamily: font }}
                  >
                    <option>Turismo cultural y patrimonio</option>
                    <option>Ecoturismo y naturaleza</option>
                    <option>Gastronomía y tradición</option>
                    <option>Aventura y senderismo</option>
                    <option>Turismo de bienestar</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-wide uppercase mb-1.5" style={{ color: W.muted }}>Mensaje</label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos sobre tu viaje ideal, fechas, número de personas..."
                    className="w-full px-4 py-3 text-sm outline-none resize-none"
                    style={{ border: `1.5px solid ${W.border}`, background: W.white, color: W.heading, fontFamily: font }}
                    onFocus={(e) => (e.target.style.borderColor = W.accent)}
                    onBlur={(e)  => (e.target.style.borderColor = W.border)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 text-xs font-bold tracking-widest uppercase transition-all hover:bg-zinc-800"
                  style={{ background: W.dark, color: W.white, fontFamily: font, letterSpacing: "0.1em" }}
                >
                  Enviar mensaje <Send size={13} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer style={{ background: W.darker, borderTop: `1px solid #2e2e2e` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Mountain size={20} color={W.muted} strokeWidth={2} />
                <span className="text-lg font-bold" style={{ color: W.white, fontFamily: serif }}>Sugamuxi</span>
              </div>
              <p className="text-xs leading-relaxed mb-6" style={{ color: "#666666", fontFamily: font }}>
                Descubre el corazón verde de Boyacá — cultura muisca, paisajes andinos y hospitalidad que perdura.
              </p>
              <div className="flex gap-2">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 flex items-center justify-center transition-colors hover:bg-white/10" style={{ border: `1px solid #444`, color: W.muted }}>
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {[
              { title: "Destinos",      links: ["Sogamoso", "Monguí", "Aquitania", "Iza", "Tópaga", "Firavitoba"] },
              { title: "Experiencias",  links: ["Ruta del Lago de Tota", "Caminos de Monguí", "Valle de Sogamoso", "Termalismo en Iza", "Senderismo en el páramo"] },
              { title: "Información",   links: ["Guía del viajero", "Operadores turísticos", "Gastronomía", "Mapa de la provincia", "Política de privacidad"] },
            ].map(({ title, links }) => (
              <div key={title}>
                <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#555555", fontFamily: font }}>{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-xs transition-colors hover:text-white" style={{ color: "#777777", fontFamily: font }}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="h-px mb-8" style={{ background: "#2e2e2e" }} />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs" style={{ color: "#444444", fontFamily: font }}>
              © 2026 Provincia de Sugamuxi · Boyacá, Colombia. Todos los derechos reservados.
            </p>
            <p className="text-xs" style={{ color: "#3a3a3a", fontFamily: font }}>
              Hecho con amor en el altiplano boyacense
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cccccc; border-radius: 3px; }
        ::selection { background: #dddddd; color: #1a1a1a; }
      `}</style>
    </div>
  );
}
