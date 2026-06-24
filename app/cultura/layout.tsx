import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cultura",
  description:
    "Descubre la riqueza cultural de Sugamuxi: legado Muisca, festivales boyacenses, gastronomía ancestral y artesanías tradicionales de Boyacá, Colombia.",
};

export default function CulturaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
