import { MapPin, Users, Star, Clock, Compass, Camera, Wind, Zap } from "lucide-react";
import { HeroSlide, Highlight, Stat, HomeExperience } from "./types";

export const heroSlides: HeroSlide[] = [
  {
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2400",
    tag: "Naturaleza pura",
    title: "Provincia de\nSugamuxi",
    subtitle: "Donde los Andes guardan los secretos más hermosos de Colombia",
  },
  {
    img: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&q=80&w=2400",
    tag: "Patrimonio histórico",
    title: "Monguí\nSagrado",
    subtitle: "Pueblos de piedra y cal que cuentan siglos de historia colonial",
  },
  {
    img: "https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&q=80&w=2400",
    tag: "Lago de Tota",
    title: "Agua y\nCielo",
    subtitle: "El lago más alto de Colombia, un espejo de nubes y montañas",
  },
];

export const highlights: Highlight[] = [
  {
    name: "Sogamoso",
    slug: "sogamoso",
    tag: "Ciudad del Sol",
    img: "https://images.unsplash.com/photo-1549645938-34863f683bb5?auto=format&fit=crop&q=80&w=800",
    color: "#1B5E3B"
  },
  {
    name: "Monguí",
    slug: "mongui",
    tag: "Patrimonio",
    img: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&q=80&w=800",
    color: "#C9963A"
  },
  {
    name: "Aquitania",
    slug: "aquitania",
    tag: "Lago de Tota",
    img: "https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&q=80&w=800",
    color: "#2E8B57"
  },
  {
    name: "Iza",
    slug: "iza",
    tag: "Aguas termales",
    img: "https://images.unsplash.com/photo-1582046467006-2531eec2534a?auto=format&fit=crop&q=80&w=800",
    color: "#E8B55A"
  },
];

export const stats: Stat[] = [
  { icon: MapPin, value: "13", label: "Municipios" },
  { icon: Users, value: "400K+", label: "Visitantes al año" },
  { icon: Star, value: "4.9", label: "Calificación promedio" },
  { icon: Clock, value: "365", label: "Días al año para visitar" },
];

export const homeExperiences: HomeExperience[] = [
  { icon: Compass, title: "Senderismo Andino", desc: "Rutas entre páramos y lagunas glaciares con guías locales certificados.", color: "#1B5E3B" },
  { icon: Camera, title: "Turismo Cultural", desc: "Museos, mercados artesanales y festivales tradicionales boyacenses.", color: "#C9963A" },
  { icon: Wind, title: "Deportes de Aventura", desc: "Parapente, ciclomontañismo y kayak en el corazón de los Andes.", color: "#2E8B57" },
  { icon: Zap, title: "Gastronomía Local", desc: "Piquete boyacense, chicha de maíz y cocina de tradición centenaria.", color: "#8B4513" },
];