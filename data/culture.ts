import { CultureSection, TimelineEvent } from "./types";

export const cultureSections: CultureSection[] = [
  {
    title: "Los Muiscas: Guardianes del Sol",
    subtitle: "Legado Ancestral",
    desc: "La Provincia de Sugamuxi fue el corazón espiritual de la civilización Muisca. Sogamoso, conocida como Suamox, fue el principal templo del sol de toda la región andina. El Museo Arqueológico de Sogamoso preserva más de 5.000 piezas que cuentan la historia de este pueblo.",
    img: "https://images.unsplash.com/photo-1550159930-40066082a4fc?auto=format&fit=crop&q=80&w=1200",
    color: "#C9963A",
    side: "left",
  },
  {
    title: "Festivales y Tradiciones Vivas",
    subtitle: "Cultura Boyacense",
    desc: "Cada municipio celebra sus fiestas patronales con música de chirimía, danzas tradicionales y trajes típicos boyacenses. Las ferias artesanales de Nobsa y los carnavales de Sogamoso son eventos que reviven la identidad cultural de la región.",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
    color: "#1B5E3B",
    side: "right",
  },
  {
    title: "Gastronomía de Altura",
    subtitle: "Sabores Ancestrales",
    desc: "El piquete boyacense, la mazamorra chiquita, los cubios, la chicha de maíz y el caldo de papa son pilares de una gastronomía que ha alimentado a los Andes por siglos. Cada receta es un acto de memoria cultural.",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=1200",
    color: "#8B4513",
    side: "left",
  },
  {
    title: "Artesanía y Oficios Tradicionales",
    subtitle: "Manos que Crean",
    desc: "Las ruanas de Nobsa, las ollas de barro de Iza, los sombreros y canastos de fique son producciones artesanales que se transmiten de generación en generación. Cada pieza cuenta una historia de identidad y pertenencia.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
    color: "#7B1FA2",
    side: "right",
  },
];

export const timeline: TimelineEvent[] = [
  { year: "800 a.C.", title: "Civilización Muisca",      desc: "Los Muiscas establecen el templo solar de Suamox (Sogamoso).",                   color: "#C9963A" },
  { year: "1537",     title: "Conquista española",       desc: "Conquistadores españoles llegan a la región. Fundación de villas coloniales.",     color: "#8B4513" },
  { year: "1600s",    title: "Era colonial",              desc: "Construcción de conventos, iglesias y organización del territorio.",               color: "#1B5E3B" },
  { year: "1819",     title: "Independencia de Colombia", desc: "Boyacá juega papel clave en la batalla de la independencia.",                     color: "#1565C0" },
  { year: "Hoy",      title: "Provincia Turística",      desc: "Sugamuxi se convierte en uno de los destinos más fascinantes de Colombia.",        color: "#2E8B57" },
];
