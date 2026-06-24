import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiencias",
  description:
    "Descubre las mejores experiencias en Sugamuxi: senderismo, kayak, parapente, gastronomía boyacense y tours culturales en Boyacá, Colombia.",
};

export default function ExperienciasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
