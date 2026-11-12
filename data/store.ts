// Dados da loja.

const fullAddress = "R. Caramua, 160 - Urupá, Ji-Paraná - RO, 76900-156";

export const store = {
  name: "Sakae Detail Shop",
  films: "Sakae Films",
  /** Só dígitos, com 55 e DDD. */
  whatsapp: "5569992629602",
  phoneDisplay: "(69) 99262-9602",
  phoneSchema: "+55-69-99262-9602",
  instagram: "https://www.instagram.com/sakae_detailshop/",
  instagramHandle: "@sakae_detailshop",
  linkBio: "https://beacons.ai/sakaefilms",
  street: "R. Caramua, 160",
  district: "Urupá",
  city: "Ji-Paraná",
  state: "RO",
  postalCode: "76900-156",
  fullAddress,
  hours: [
    { days: "Segunda a sexta", time: "8h às 12h · 14h às 17h" },
    { days: "Sábado", time: "8h às 12h" },
  ],
  /** Para o schema.org (SEO local). */
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "12:00" },
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "14:00", closes: "17:00" },
    { days: ["Saturday"], opens: "08:00", closes: "12:00" },
  ],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(fullAddress),
  /** Atendimento e entrega de filmes, segundo os posts da Sakae Films. */
  regions: ["RO", "AC", "AM", "RR"],
  pickup: true,
};
