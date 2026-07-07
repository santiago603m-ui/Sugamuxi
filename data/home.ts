import { MapPin, Users, Star, Clock, Compass, Camera, Wind, Zap } from "lucide-react";
import { HeroSlide, Highlight, Stat, HomeExperience } from "./types";

export const heroSlides: HeroSlide[] = [
  {
    img: "/assets/paramo/main.jpg",
    tag: "Naturaleza pura",
    title: "Provincia de\nSugamuxi",
    subtitle: "Donde los Andes guardan los secretos más hermosos de Colombia",
  },
  {
    img: "/assets/mongui/main.jpg",
    tag: "Patrimonio histórico",
    title: "Monguí\nSagrado",
    subtitle: "Pueblos de piedra y cal que cuentan siglos de historia colonial",
  },
  {
    img: "/assets/lago_tota/main.jpg",
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
    img: "/assets/sogamoso/main.jpg",
    color: "#1B5E3B",
    desc: "Capital de la provincia, centro cultural y hogar del imponente Templo del Sol muisca."
  },
  {
    name: "Monguí",
    slug: "mongui",
    tag: "Patrimonio",
    img: "/assets/mongui/main.jpg",
    color: "#C9963A",
    desc: "El pueblo más lindo de Boyacá, cuna de fabricantes de balones y paisajes empedrados."
  },
  {
    name: "Aquitania",
    slug: "aquitania",
    tag: "Lago de Tota",
    img: "/assets/aquitania/main.jpg",
    color: "#2E8B57",
    desc: "Paraíso acuático y truchero, custodio de las místicas aguas del majestuoso Lago de Tota."
  },
  {
    name: "Iza",
    slug: "iza",
    tag: "Aguas termales",
    img: "/assets/iza/main.jpg",
    color: "#E8B55A",
    desc: "Naturaleza, postres tradicionales y aguas termales curativas para el descanso total."
  },
];

export const stats: Stat[] = [
  { icon: MapPin, value: "13", label: "Municipios" },
  { icon: Users, value: "400K+", label: "Visitantes al año" },
  { icon: Star, value: "4.9", label: "Calificación promedio" },
  { icon: Clock, value: "365", label: "Días al año para visitar" },
];

export const homeExperiences: HomeExperience[] = [
  { icon: Compass, title: "Senderismo Andino", desc: "Rutas entre páramos y lagunas glaciares con guías locales certificados.", color: "#1B5E3B", img: "/assets/paramo/main.jpg" },
  { icon: Camera, title: "Turismo Cultural", desc: "Museos, mercados artesanales y festivales tradicionales boyacenses.", color: "#C9963A", img: "/assets/templo_sol/main.jpg" },
  { icon: Wind, title: "Deportes de Aventura", desc: "Parapente, ciclomontañismo y kayak en el corazón de los Andes.", color: "#2E8B57", img: "/assets/lago_tota/main.jpg" },
  { icon: Zap, title: "Gastronomía Local", desc: "Piquete boyacense, chicha de maíz y cocina de tradición centenaria.", color: "#8B4513", img: "/assets/nobsa/main.jpg" },
];