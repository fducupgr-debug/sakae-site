# Sakae Detail Shop · site

Site da Sakae Detail Shop (Ji-Paraná, RO), construído a partir da direção de arte
"Luz de inspeção": preto de pintura, laranja só na ação, linha de luz como assinatura.
Todo caminho do site termina no WhatsApp com a mensagem já escrita.

Next.js 16 · TypeScript · Tailwind CSS 4 · Motion (Framer Motion).

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Número do WhatsApp, endereço, horário | `data/store.ts` |
| Produtos, preços, etapas | `data/products.ts` |
| Promoções do mês | `data/edition.ts` |
| Perguntas frequentes | `data/faq.ts` |
| Mensagens que abrem no WhatsApp | `lib/whatsapp.ts` |
| Cores e fontes (tokens) | `app/globals.css` (bloco `@theme`) |

- **Preço**: no produto, `price: "R$ 9,90"`. `price: null` mostra "Consultar".
- **Produto novo**: copie uma linha em `data/products.ts`, troque `id`, `step`, `brand`, `name`, `use`.
- **WhatsApp**: preencha `whatsapp` em `data/store.ts` só com dígitos, com 55 e DDD.

## Pendências (TODO)

- [x] WhatsApp, endereço e horário (`data/store.ts`)
- [ ] Logo: hoje é um vetor feito a partir da imagem de 150 px (`components/ui/sakae-wordmark.ts`). Trocar pelo arquivo vetorial original quando houver
- [ ] Fotos reais da loja, equipe e Detail Fest: `public/images/store/` e trocar os `PhotoSlot` em `components/sections/Store.tsx`
- [ ] Fotos de produto (opcional): `public/images/products/` e o campo `image` no produto
- [ ] Imagens 01–03 da direção de arte (hero e teste da chuva)
- [ ] Domínio: adicionar `metadataBase` em `app/layout.tsx`
- [ ] Confirmar com a loja os itens marcados com `confirm` em `data/products.ts`

## Estrutura

```
app/            layout, página, estilos globais, fonte do 栄
components/
  ui/           ButtonLink, WhatsAppLink, SweepText, Reveal, Logo, SectionHead
  layout/       Header, Footer, MobileWhatsAppBar
  sections/     Hero, BrandMarquee, Manifesto, StepCatalog, RainTest,
                MonthEdition, ForDetailers, Store, HowToBuy, Faq, FinalCta
data/           products, edition, faq, store
lib/            whatsapp.ts
public/images/  hero, products, editorial, decorations, store
```

## Publicar

Suba o projeto para um repositório no GitHub e importe na Vercel (plano gratuito serve).
Depois conecte o domínio da loja em Settings → Domains.
