import { CultureSection } from "./types";

export const cultureSections: Record<string, CultureSection[]> = {
  es: [
    {
      title: "El Piquete Boyacense",
      subtitle: "Sogamoso",
      desc: "Plato insignia de la región, ideal para compartir en familia. Se prepara con papa criolla, costilla de cerdo, gallina, longaniza, morcilla, plátano asado y mazorca. Es una comida tradicional campesina, servida comúnmente sobre hojas de plátano, que representa la abundancia de nuestra tierra.",
      img: "/assets/sogamoso/GastronomiaSogamoso.jpg",
      color: "#8B4513",
      side: "left",
    },
    {
      title: "Postres y Dulces Tradicionales",
      subtitle: "Iza",
      desc: "Conocido como el 'Nido Verde', el municipio de Iza es famoso por su plaza de postres y dulces. Destacan los esponjados, merengones, postre de tres leches y delicias de frutas andinas. Esta tradición dulce es el orgullo local y el acompañante perfecto tras disfrutar de las aguas termales.",
      img: "/assets/iza/GastronomiaIza.jpg",
      color: "#E8B55A",
      side: "right",
    },
    {
      title: "Trucha Arcoíris",
      subtitle: "Lago de Tota",
      desc: "A orillas del lago más alto de Colombia, la trucha arcoíris es el plato estrella. Se cría en las aguas frías y cristalinas del lago, lo que garantiza su frescura inigualable. Se sirve al ajillo, frita, asada o en deliciosa salsa de champiñones, siempre acompañada de papa de la región.",
      img: "/assets/tota/GastronomiaTota.jpg",
      color: "#2E8B57",
      side: "left",
    },
  ],
  en: [
    {
      title: "The Boyacá Piquete",
      subtitle: "Sogamoso",
      desc: "The flagship dish of the region, perfect for sharing. It is prepared with baby yellow potatoes, pork ribs, hen, sausage, blood sausage, roasted plantain, and corn. It is a traditional peasant meal, commonly served on plantain leaves, representing the abundance of our land.",
      img: "/assets/sogamoso/GastronomiaSogamoso.jpg",
      color: "#8B4513",
      side: "left",
    },
    {
      title: "Traditional Desserts and Sweets",
      subtitle: "Iza",
      desc: "Known as the 'Green Nest', the municipality of Iza is famous for its dessert square. Sponges, meringues, tres leches cake, and Andean fruit desserts stand out. This sweet tradition is the local pride and the perfect accompaniment after enjoying the natural hot springs.",
      img: "/assets/iza/GastronomiaIza.jpg",
      color: "#E8B55A",
      side: "right",
    },
    {
      title: "Rainbow Trout",
      subtitle: "Lake Tota",
      desc: "On the shores of the highest lake in Colombia, rainbow trout is the star dish. It is raised in the cold, crystal-clear waters of the lake, guaranteeing its freshness. It is served with garlic, fried, grilled, or in mushroom sauce, accompanied by local potatoes.",
      img: "/assets/tota/GastronomiaTota.jpg",
      color: "#2E8B57",
      side: "left",
    },
  ]
};
