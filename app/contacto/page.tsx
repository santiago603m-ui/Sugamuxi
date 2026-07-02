"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contacto() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
      subject: "Nueva consulta desde Sugamuxi.gov.co",
      from_name: "Provincia de Sugamuxi",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      motivo: formData.get("motivo"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message ?? "Ocurrió un error. Por favor intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("No se pudo enviar el mensaje. Verifica tu conexión a internet.");
    }
  }

  const inputStyle: React.CSSProperties = {
    padding: "14px 16px",
    borderRadius: "var(--radius-md)",
    border: "1px solid var(--color-gray-200)",
    background: "var(--color-gray-50)",
    fontFamily: "inherit",
    fontSize: 14,
    outline: "none",
    transition: "all 0.2s",
    width: "100%",
  };

  return (
    <div className="page-enter" style={{ paddingTop: "var(--nav-height)" }}>

      {/* Header */}
      <section style={{
        position: "relative",
        height: 380,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}>
        <img
          src="https://images.unsplash.com/photo-1542640244-7e672d6cb466?auto=format&fit=crop&q=80&w=2000"
          alt="Contacto Sugamuxi"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="hero-overlay" />
        <div className="container-wide" style={{ position: "relative", zIndex: 2, textAlign: "center", width: "100%" }}>
          <div className="section-label" style={{ justifyContent: "center", color: "var(--color-gold)" }}>Hablemos</div>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Planifica tu viaje
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 560, margin: "0 auto" }}>
            Contáctanos para organizar tu experiencia en Sugamuxi.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "80px 0", background: "var(--color-gray-50)" }}>
        <div className="container" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 64,
        }}>
          {/* Info */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: 36,
              fontWeight: 700,
              color: "var(--color-dark)",
              marginBottom: 24,
              lineHeight: 1.2,
            }}>
              Información de <br /><span style={{ color: "var(--color-primary)" }}>Contacto</span>
            </h2>
            <p style={{ fontSize: 16, color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: 40 }}>
              Estamos aquí para ayudarte a planificar tu itinerario perfecto, resolver tus dudas sobre transporte, alojamiento o recomendarte los mejores operadores turísticos locales.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {[
                { icon: MapPin, title: "Ubicación",           text: "Centro de Información Turística\nSogamoso, Boyacá, Colombia" },
                { icon: Phone,  title: "Teléfono",            text: "+57 (8) 770 0000\n+57 300 123 4567 (WhatsApp)" },
                { icon: Mail,   title: "Correo",              text: "info@sugamuxi.gov.co\nturismo@sugamuxi.gov.co" },
                { icon: Clock,  title: "Horario de Atención", text: "Lunes a Viernes: 8:00 AM - 6:00 PM\nSábados y Domingos: 9:00 AM - 4:00 PM" },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} style={{ display: "flex", gap: 16 }}>
                  <div style={{
                    width: 48, height: 48, flexShrink: 0,
                    background: "var(--color-gray-200)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--color-dark)", marginBottom: 8 }}>{title}</h3>
                    <p style={{ fontSize: 14, color: "var(--color-text-light)", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-box" style={{
            background: "#fff",
            padding: 48,
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--color-gray-200)",
          }}>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: "var(--color-dark)", marginBottom: 32 }}>
              Envíanos un mensaje
            </h3>

            {/* Success state */}
            {status === "success" && (
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                gap: 16, padding: "40px 24px", textAlign: "center",
              }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%",
                  background: "rgba(76,108,41,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <CheckCircle size={36} color="var(--color-primary)" />
                </div>
                <h4 style={{ fontSize: 20, fontWeight: 700, color: "var(--color-dark)" }}>
                  ¡Mensaje enviado!
                </h4>
                <p style={{ fontSize: 15, color: "var(--color-text-light)", lineHeight: 1.6 }}>
                  Gracias por contactarnos. Te responderemos en las próximas 24 horas.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn btn-primary"
                  style={{ marginTop: 8 }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}

            {/* Form fields */}
            {status !== "success" && (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                {/* Error banner */}
                {status === "error" && (
                  <div style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "12px 16px", borderRadius: "var(--radius-md)",
                    background: "rgba(220,38,38,0.07)", border: "1px solid rgba(220,38,38,0.25)",
                    color: "#dc2626", fontSize: 14,
                  }}>
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    {errorMessage}
                  </div>
                )}

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)", marginLeft: 4 }}>
                    Nombre completo <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    required
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--color-primary)"}
                    onBlur={e => e.target.style.borderColor = "var(--color-gray-200)"}
                  />
                </div>

                <div className="contact-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)", marginLeft: 4 }}>
                      Email <span style={{ color: "#dc2626" }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Tu correo"
                      required
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "var(--color-primary)"}
                      onBlur={e => e.target.style.borderColor = "var(--color-gray-200)"}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)", marginLeft: 4 }}>
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Tu número (opcional)"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "var(--color-primary)"}
                      onBlur={e => e.target.style.borderColor = "var(--color-gray-200)"}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)", marginLeft: 4 }}>
                    Motivo del viaje
                  </label>
                  <select
                    name="motivo"
                    style={{ ...inputStyle }}
                    onFocus={e => e.target.style.borderColor = "var(--color-primary)"}
                    onBlur={e => e.target.style.borderColor = "var(--color-gray-200)"}
                  >
                    <option>Turismo y vacaciones</option>
                    <option>Ecoturismo y aventura</option>
                    <option>Turismo cultural</option>
                    <option>Eventos y convenciones</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)", marginLeft: 4 }}>
                    Mensaje <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="¿Cómo podemos ayudarte?"
                    rows={4}
                    required
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={e => e.target.style.borderColor = "var(--color-primary)"}
                    onBlur={e => e.target.style.borderColor = "var(--color-gray-200)"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: 16,
                    padding: "16px",
                    opacity: status === "loading" ? 0.75 : 1,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader size={16} style={{ animation: "spin-slow 1s linear infinite" }} />
                      Enviando…
                    </>
                  ) : (
                    <>
                      Enviar mensaje <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
