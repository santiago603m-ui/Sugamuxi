import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Planifica tu viaje a la Provincia de Sugamuxi. Contáctanos para organizar tu itinerario en Boyacá, Colombia.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
