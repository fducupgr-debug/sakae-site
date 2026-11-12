// Catálogo Sakae Detail Shop
// Fonte: posts do Instagram @sakae_detailshop (prints enviados em 11/11/2026).
// Preços vêm dos posts e devem ser confirmados pela loja.
// Para trocar um preço, edite só o campo `price` do produto.
// `price: null` mostra "Consultar" no site.
// `confirm` lista o que ainda falta checar (não aparece no site).

export type StepId =
  | "lavar"
  | "descontaminar"
  | "corrigir"
  | "proteger"
  | "acabamento"
  | "interior"
  | "acessorios"
  | "estudio";

export type Step = {
  id: StepId;
  name: string;
  hint: string;
  /** Etapas do processo têm ordem; as outras são categorias. */
  order?: number;
};

export type Product = {
  id: string;
  step: StepId;
  brand: string;
  name: string;
  use: string;
  sizes?: string[];
  dilution?: string;
  specs?: string[];
  price?: string | null;
  /** Caminho em /public/images/products quando houver foto real. */
  image?: string;
  confirm?: string[];
};

export const steps: Step[] = [
  { id: "lavar", name: "Lavar", hint: "Pré-lavagem, shampoo, desincrustantes e espuma", order: 1 },
  { id: "descontaminar", name: "Descontaminar", hint: "Ferro, piche, cola e clay", order: 2 },
  { id: "corrigir", name: "Corrigir", hint: "Compostos, boinas e politriz", order: 3 },
  { id: "proteger", name: "Proteger", hint: "Ceras, vitrificadores e PPF", order: 4 },
  { id: "acabamento", name: "Acabamento", hint: "Pneus, plásticos, vidros e motor", order: 5 },
  { id: "interior", name: "Interior", hint: "Couro, plásticos, odores e detalhes", order: 6 },
  { id: "acessorios", name: "Microfibras e acessórios", hint: "Secagem, aplicação e escovas" },
  { id: "estudio", name: "Para o estúdio", hint: "Iluminação e ferramentas" },
];

export const products: Product[] = [
  // ---------- LAVAR ----------
  { id: "magil-foam-gloss", step: "lavar", brand: "Magil Clean", name: "Foam Gloss", use: "Shampoo automotivo com muita espuma, brilho intenso e lubrificação máxima", price: null, confirm: ["volumes"] },
  { id: "finisher-lava-auto-hidrorreativo", step: "lavar", brand: "Finisher", name: "Lava Auto Hidrorreativo", use: "Shampoo com SiO2 para carros vitrificados e encerados", sizes: ["580 ml"], dilution: "1:40", image: "/images/products/finisher-lava-auto-hidrorreativo.webp", price: null },
  { id: "finisher-cross-mol", step: "lavar", brand: "Finisher", name: "Cross Mol", use: "Pré-lavagem sem toque, com alto poder de limpeza e ação neutra", sizes: ["580 ml", "2 L"], image: "/images/products/finisher-cross-mol.webp", price: null },
  { id: "tp-multi-tp", step: "lavar", brand: "Teixeira Pinto", name: "Multi TP", use: "Limpador de uso geral para várias superfícies", price: null },
  { id: "magil-ultra-limpador", step: "lavar", brand: "Magil Clean", name: "Ultra Limpador", use: "Limpador de uso geral para limpeza profunda", sizes: ["5 L"], price: null },
  { id: "finisher-canelinha", step: "lavar", brand: "Finisher", name: "Canelinha", use: "Multi limpador concentrado, rende até 100 L", sizes: ["2 L"], dilution: "até 1:50", image: "/images/products/finisher-canelinha.webp", price: null },
  { id: "cadillac-multicar", step: "lavar", brand: "Cadillac", name: "Multicar", use: "Multi limpador alcalino para limpeza pesada", sizes: ["5 L"], image: "/images/products/cadillac-multicar.webp", price: null },
  { id: "cadillac-demolidor", step: "lavar", brand: "Cadillac", name: "Demolidor", use: "Lavagem alcalina de alta performance para sujeira extrema", sizes: ["5 L"], image: "/images/products/cadillac-demolidor.webp", price: null },
  { id: "tp-ta-r4", step: "lavar", brand: "Teixeira Pinto", name: "TA R4", use: "Detergente desincrustante alcalino, fórmula concentrada", sizes: ["5 L"], price: null },
  { id: "tp-inter-max", step: "lavar", brand: "Teixeira Pinto", name: "Inter Max", use: "Detergente desincrustante ácido, fórmula concentrada", sizes: ["5 L"], price: null },
  { id: "finisher-alcalino", step: "lavar", brand: "Finisher", name: "Alcalino", use: "Desincrustante alcalino concentrado para sujeira pesada", sizes: ["2 L"], price: null },
  { id: "finisher-aditivado", step: "lavar", brand: "Finisher", name: "Aditivado", use: "Desincrustante ácido concentrado", sizes: ["2 L"], price: null },
  { id: "finisher-desengraxante-neutro", step: "lavar", brand: "Finisher", name: "Desengraxante Neutro", use: "Remove oleosidade com pH neutro", sizes: ["580 ml"], dilution: "1:20", price: null },
  { id: "kers-speed-clean", step: "lavar", brand: "Kers", name: "Speed Clean", use: "Pulverizador pressurizado de espuma ativa", price: null },
  { id: "kers-snow-freeze", step: "lavar", brand: "Kers", name: "Snow Freeze", use: "Canhão de espuma de alta performance para lavadora", price: "6× R$ 38,50" },
  { id: "kers-snow-black", step: "lavar", brand: "Kers", name: "Snow Black", use: "Canhão de espuma densa de alta performance", price: "6× R$ 54,80" },
  { id: "kers-snow-jet", step: "lavar", brand: "Kers", name: "Snow Jet", use: "Bico para pré-lavagem e aplicação de espuma", price: null },
  { id: "kers-kit-bicos", step: "lavar", brand: "Kers", name: "Kit de bicos para lavadora", use: "5 bicos (15°, 25°, 40°, sabão e jato), compatível com a maioria das lavadoras de alta pressão", price: null },
  { id: "kers-luva-octopus", step: "lavar", brand: "Kers", name: "Luva Octopus", use: "Luva de microfibra com alta retenção de água e espuma", price: null },

  // ---------- DESCONTAMINAR ----------
  { id: "cadillac-ironlac", step: "descontaminar", brand: "Cadillac", name: "Ironlac", use: "Descontaminante de partículas ferrosas que prepara a pintura", sizes: ["500 ml"], price: null },
  { id: "finisher-descontaminante-ferroso", step: "descontaminar", brand: "Finisher", name: "Descontaminante Ferroso", use: "Remove contaminação ferrosa, pronto uso, odor suavizado", price: null },
  { id: "cadillac-descole", step: "descontaminar", brand: "Cadillac", name: "Descole", use: "Removedor de cola e piche", sizes: ["500 ml"], price: null },
  { id: "finisher-remove-cola-graxa-piche", step: "descontaminar", brand: "Finisher", name: "Remove Cola, Graxa e Piche", use: "Para pintura, plásticos, vidros e metais", sizes: ["700 ml"], price: null },
  { id: "kers-taco-clay-bar", step: "descontaminar", brand: "Kers", name: "Taco Clay Bar", use: "Descontaminação rápida, deixa a superfície lisa", price: null },

  // ---------- CORRIGIR ----------
  { id: "lincoln-hpf", step: "corrigir", brand: "Lincoln Pro Detail", name: "HPF", use: "Composto polidor de corte pesado", price: null },
  { id: "lincoln-hff", step: "corrigir", brand: "Lincoln Pro Detail", name: "HFF", use: "Composto polidor de corte com refino, para correção moderada", price: null },
  { id: "lincoln-hof", step: "corrigir", brand: "Lincoln Pro Detail", name: "HOF", use: "All in one: correção, brilho e proteção em uma etapa", price: null },
  { id: "cadillac-risco-zero-corte", step: "corrigir", brand: "Cadillac", name: "Risco Zero Corte", use: "Composto polidor de alto poder de corte", price: null, confirm: ["peso"] },
  { id: "cadillac-risco-zero-refino", step: "corrigir", brand: "Cadillac", name: "Risco Zero Refino", use: "Composto polidor de refino e acabamento", price: null, confirm: ["peso"] },
  { id: "nobrecar-nc-cut-select", step: "corrigir", brand: "Nobrecar", name: "NC Cut Select", use: "Composto polidor premium para corte e refino", price: null },
  { id: "nobrecar-nc-one-step", step: "corrigir", brand: "Nobrecar", name: "NC One Step", use: "Composto polidor 3 em 1 premium", price: null },
  { id: "nobrecar-nc-technology", step: "corrigir", brand: "Nobrecar", name: "NC Technology", use: "Massa de polir para todo tipo de pintura, inclusive repintura", price: null },
  { id: "wolf-arctic-wool", step: "corrigir", brand: "Wolf Pads", name: "Arctic Wool", use: "Boina de lã para corte", price: null },
  { id: "wolf-golden-wool", step: "corrigir", brand: "Wolf Pads", name: "Golden Wool", use: "Boina de lã para corte e refino", price: null },
  { id: "wolf-micro-wolf", step: "corrigir", brand: "Wolf Pads", name: "Micro Wolf", use: "Boina de microfibra: corte rápido com bom acabamento", price: null },
  { id: "wolf-one-step-pad", step: "corrigir", brand: "Wolf Pads", name: "One Step Pad", use: "Boina de espuma para polimento one step", price: null },
  { id: "wolf-boina-celeste", step: "corrigir", brand: "Wolf Pads", name: "Boina Celeste", use: "Boina de espuma para refino", price: null },
  { id: "kers-politriz-roto-orbital", step: "corrigir", brand: "Kers", name: "Politriz Roto Orbital", use: "Politriz com controle de velocidade e kit de boinas Hyper de brinde", price: "12× R$ 99,90", confirm: ["preço e brinde ainda valem?"] },
  { id: "finisher-lava-boina-microfibra", step: "corrigir", brand: "Finisher", name: "Lava Boina e Microfibra", use: "Tira a oleosidade de boinas e microfibras sem agredir as fibras", sizes: ["580 ml"], dilution: "1:100", price: null },

  // ---------- PROTEGER ----------
  { id: "quadfilm-u18", step: "proteger", brand: "Quad Film", name: "PPF Quadfilm U18", use: "Película de proteção de pintura em TPU puro, autorregenerativa", specs: ["+195 µm", "TPU Covestro", "Adesivo Henkel", "Garantia 7 anos"], price: null },
  { id: "quadfilm-fume-farol", step: "proteger", brand: "Quad Film", name: "PPF Fumê de Farol", use: "Proteção para farol com autorregeneração, resistência a impactos e proteção UV", price: null },
  { id: "newshield-transition-camaleao", step: "proteger", brand: "New Shield", name: "PPF Transition Camaleão Black", use: "Película para farol com efeito camaleão e proteção", price: null },
  { id: "toys-ppf-airfree", step: "proteger", brand: "Toys", name: "PPF Airfree", use: "Solução para aplicação de PPF", price: null },
  { id: "dimension-9h", step: "proteger", brand: "Dimension Car Care", name: "9H+ Ceramic Coating", use: "Vitrificador de alta proteção com acabamento premium", price: null },
  { id: "dimension-7h", step: "proteger", brand: "Dimension Car Care", name: "7H+ Vitrificador Cerâmico", use: "Brilho intenso, proteção da pintura e manutenção mais fácil", price: null },
  { id: "finisher-cera-cristalizadora", step: "proteger", brand: "Finisher", name: "Cera Cristalizadora", use: "Brilho espelhado, proteção duradoura e efeito hidrorrepelente", sizes: ["200 g"], price: null },
  { id: "finisher-cera-liquida", step: "proteger", brand: "Finisher", name: "Cera Líquida", use: "Brilho intenso com aplicação prática, pronto uso", sizes: ["700 ml"], price: null },

  // ---------- ACABAMENTO ----------
  { id: "soft99-glaco", step: "acabamento", brand: "Soft99", name: "Glaco", use: "Cristalizador de vidros, repelente de água de chuva", price: null },
  { id: "soft99-glaco-moto", step: "acabamento", brand: "Soft99", name: "Glaco Moto", use: "Repelente de água de chuva para viseiras de capacete", price: null },
  { id: "finisher-pneu-glicerine", step: "acabamento", brand: "Finisher", name: "Pneu Glicerine", use: "Acabamento brilhante para pneus com alto rendimento", sizes: ["580 ml", "2 L"], price: null },
  { id: "finisher-plastico-externo", step: "acabamento", brand: "Finisher", name: "Plástico Externo", use: "Revitaliza e protege plásticos externos", sizes: ["160 g", "580 ml"], price: null },
  { id: "cadillac-motorlac", step: "acabamento", brand: "Cadillac", name: "Motorlac", use: "Verniz de motor para proteção e acabamento profissional", sizes: ["500 ml"], price: null },

  // ---------- INTERIOR ----------
  { id: "finisher-plastico-interno", step: "interior", brand: "Finisher", name: "Plástico Interno", use: "Renova plásticos e borrachas com toque seco, pronto uso", sizes: ["580 ml"], price: null },
  { id: "finisher-limpa-couro", step: "interior", brand: "Finisher", name: "Limpa Couro", use: "Limpa couro automotivo sem agredir", sizes: ["700 ml"], price: null },
  { id: "finisher-hidrata-couro", step: "interior", brand: "Finisher", name: "Hidrata Couro", use: "Hidrata, amacia e ajuda a evitar ressecamento", sizes: ["160 g"], price: null },
  { id: "tp-pure-intense", step: "interior", brand: "Teixeira Pinto", name: "Pure Intense", use: "Neutralizador de odor que elimina o cheiro na origem", price: null },
  { id: "tp-pure-clean", step: "interior", brand: "Teixeira Pinto", name: "Pure Clean", use: "Neutralizador de odores com aroma de pistache", price: null },
  { id: "kers-pincel-delicate-touch", step: "interior", brand: "Kers", name: "Pincel Delicate Touch", use: "Limpa black piano e superfícies delicadas sem arranhar", price: null },
  { id: "kers-pincel-n12", step: "interior", brand: "Kers", name: "Pincel Cerdas Naturais N12", use: "Limpeza precisa em áreas delicadas", price: null },
  { id: "kers-escova-dual-color", step: "interior", brand: "Kers", name: "Escova Dual Color", use: "Limpeza de detalhes com cerdas resistentes e pegada ergonômica", price: null },

  // ---------- MICROFIBRAS E ACESSÓRIOS ----------
  { id: "kers-microfibra-40x60", step: "acessorios", brand: "Kers", name: "Microfibra 360 GSM 40×60", use: "Sem bordas, toque macio, ideal para acabamento", price: "R$ 9,90" },
  { id: "kers-microfibra-neon", step: "acessorios", brand: "Kers", name: "Microfibra Neon 360 GSM 40×40", use: "Toque macio e alta absorção para acabamento", price: "R$ 7,50" },
  { id: "kers-toalha-twist", step: "acessorios", brand: "Kers", name: "Toalha de Secagem Twist 60×90", use: "Alta absorção e secagem rápida", price: null },
  { id: "kers-aplicador-espuma", step: "acessorios", brand: "Kers", name: "Aplicador de Espuma", use: "Aplicação uniforme de ceras, selantes e hidratantes", price: null },
  { id: "kers-kit-6-espumas", step: "acessorios", brand: "Kers", name: "Kit com 6 espumas aplicadoras", use: "Aplicação de ceras, selantes e condicionadores", price: null },
  { id: "kers-borrifador-360", step: "acessorios", brand: "Kers", name: "Borrifador 360°", use: "Borrifa em qualquer direção, para o dia a dia do detailer", price: null },
  { id: "kers-master-brush", step: "acessorios", brand: "Kers", name: "Master Brush", use: "Escova para furo de rodas com alcance profundo", price: null },
  { id: "kers-escova-corrente", step: "acessorios", brand: "Kers", name: "Escova para Corrente", use: "Limpeza de correntes de moto e partes estreitas", price: null },

  // ---------- PARA O ESTÚDIO ----------
  { id: "kers-colmeia", step: "estudio", brand: "Kers", name: "Colmeia", use: "Iluminação LED hexagonal de 11 células para estéticas", price: "12× R$ 128,90" },
  { id: "kers-turbo-air-jet", step: "estudio", brand: "Kers", name: "Turbo Air Jet", use: "Pistola de ar para secagem e limpeza de frestas", price: "R$ 55,00" },
];

export const brands = Array.from(new Set(products.map((p) => p.brand))).sort((a, b) =>
  a.localeCompare(b, "pt-BR"),
);
