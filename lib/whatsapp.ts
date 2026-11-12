import { store } from "@/data/store";
import type { Product } from "@/data/products";

/** Monta o link do WhatsApp com a mensagem já escrita. */
export function waLink(message: string) {
  const text = encodeURIComponent(message);
  return store.whatsapp
    ? `https://wa.me/${store.whatsapp}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export const messages = {
  general: "Olá, Sakae! Vim pelo site e quero ajuda para escolher um produto.",
  car: "Olá, Sakae! Meu carro é: ___. Quero ajuda para escolher os produtos.",
  installer: "Olá, Sakae! Tenho uma estética e quero a tabela do instalador.",
  ppfQuote: "Olá, Sakae! Quero uma cotação de PPF Quad Film.",
  product: (p: Product) =>
    `Olá, Sakae! Vi no site o ${p.name} (${p.brand}). Tem disponível?`,
  edition: (title: string, month: string) =>
    `Olá, Sakae! Vi no site a promoção "${title}" de ${month.toLowerCase()}. Ainda está valendo?`,
};
