import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Formatos modernos para imágenes más rápidas
    formats: ["image/avif", "image/webp"],
    // Tamaños de dispositivo para responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Dominios externos permitidos
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
