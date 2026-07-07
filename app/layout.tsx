import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: {
    default: "Sugamuxi · Provincia de Boyacá, Colombia",
    template: "%s | Sugamuxi",
  },
  description:
    "Destino turístico oficial de la Provincia de Sugamuxi en el corazón de Boyacá, Colombia. Descubre 13 municipios llenos de naturaleza, cultura e historia Muisca.",
  keywords: [
    "Sugamuxi",
    "Boyacá",
    "Colombia",
    "turismo",
    "Sogamoso",
    "Monguí",
    "Lago de Tota",
    "Aquitania",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Provincia de Sugamuxi",
    title: "Sugamuxi · Provincia de Boyacá, Colombia",
    description:
      "Donde los Andes guardan los secretos más hermosos de Colombia. 13 municipios, naturaleza, cultura e historia Muisca.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <LoadingScreen />
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
