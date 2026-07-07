"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/573001234567?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20Provincia%20de%20Sugamuxi"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Contactar por WhatsApp"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "#25D366",
        color: "#fff",
        borderRadius: 999,
        padding: hovered ? "14px 22px" : "16px",
        boxShadow: "0 8px 30px rgba(37,211,102,0.45)",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: 14,
        transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
        transform: visible
          ? hovered ? "translateY(-4px) scale(1.04)" : "translateY(0) scale(1)"
          : "translateY(100px) scale(0.8)",
        opacity: visible ? 1 : 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      {/* Pulse ring */}
      <span style={{
        position: "absolute",
        inset: 0,
        borderRadius: 999,
        background: "#25D366",
        animation: "wa-pulse 2.5s ease-out infinite",
        opacity: 0.4,
        zIndex: -1,
      }} />

      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width={24}
        height={24}
        style={{ flexShrink: 0 }}
      >
        <path d="M20.52 3.449A11.93 11.93 0 0 0 12.003 0C5.373 0 .004 5.373.004 12.003c0 2.117.553 4.183 1.607 6.003L0 24l6.137-1.61A11.977 11.977 0 0 0 12.002 24c6.63 0 11.998-5.37 11.998-12 0-3.205-1.247-6.217-3.48-8.551zM12.003 21.998a9.965 9.965 0 0 1-5.077-1.384l-.364-.216-3.772.99 1.008-3.68-.237-.378A9.954 9.954 0 0 1 2.007 12c0-5.514 4.482-9.996 9.996-9.996 2.67 0 5.18 1.04 7.07 2.929A9.944 9.944 0 0 1 22 12.002c0 5.514-4.482 9.996-9.997 9.996zm5.45-7.483c-.298-.15-1.763-.87-2.037-.969-.272-.1-.47-.15-.668.148-.198.299-.77.969-.943 1.168-.174.198-.347.223-.645.074-.298-.149-1.258-.464-2.396-1.48-.885-.79-1.483-1.765-1.657-2.063-.173-.298-.018-.459.13-.607.133-.133.298-.347.447-.52.15-.174.199-.298.298-.497.1-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.205-.24-.578-.485-.5-.668-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.298-1.04 1.016-1.04 2.477 0 1.462 1.065 2.874 1.213 3.073.149.198 2.096 3.2 5.077 4.487.71.307 1.263.49 1.694.627.712.227 1.36.195 1.872.118.57-.085 1.763-.72 2.012-1.415.25-.695.25-1.29.175-1.414-.074-.124-.272-.198-.57-.347z" />
      </svg>

      {/* Label — only visible on hover */}
      <span style={{
        maxWidth: hovered ? 160 : 0,
        overflow: "hidden",
        transition: "max-width 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
        display: "block",
      }}>
        ¡Escríbenos!
      </span>

      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.4; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </a>
  );
}
