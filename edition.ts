// Edição do mês: as promoções que trocam todo mês.
// Fonte: posts de novembro no Instagram. Confirmar valores com a loja.

export type EditionItem = {
  title: string;
  /** ids de data/products.ts */
  items: string[];
  offer: string;
  detail: string;
};

export const edition: { month: string; number: string; items: EditionItem[] } = {
  month: "Novembro",
  number: "11",
  items: [
    {
      title: "Combo de lavagem",
      items: ["kers-speed-clean", "finisher-cross-mol", "finisher-pneu-glicerine"],
      offer: "R$ 153",
      detail: "Pulverizador de espuma, pré-lavagem e acabamento de pneu. Um kit para lavar do começo ao fim.",
    },
    {
      title: "Microfibras 360 GSM",
      items: ["kers-microfibra-40x60", "kers-microfibra-neon"],
      offer: "R$ 9,90 · R$ 7,50",
      detail: "40×60 sem borda por R$ 9,90. Neon 40×40 por R$ 7,50.",
    },
    {
      title: "Glaco com brinde",
      items: ["soft99-glaco", "kers-microfibra-neon"],
      offer: "+ 2 microfibras",
      detail: "Na compra de um Glaco Big, ganhe 2 microfibras Neon.",
    },
  ],
};
