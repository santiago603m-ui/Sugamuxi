import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinos",
  description:
    "Descubre los 13 municipios de la Provincia de Sugamuxi: Sogamoso, Monguí, Aquitania, Iza, Nobsa, Firavitoba y más. Naturaleza, cultura e historia en Boyacá.",
};

export default function DestinosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
