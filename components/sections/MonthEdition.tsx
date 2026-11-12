import { edition } from "@/data/edition";
import { products } from "@/data/products";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { waLink, messages } from "@/lib/whatsapp";

const nameOf = (id: string) => {
  const p = products.find((x) => x.id === id);
  return p ? `${p.name} · ${p.brand}` : id;
};

/** Edição do mês: as promoções do feed ganham uma vitrine que troca todo mês. */
export function MonthEdition() {
  const [lead, ...rest] = edition.items;

  return (
    <section id="edicao" aria-labelledby="edicao-title" className="relative border-t border-linha">
      <div className="wrap py-[clamp(80px,10vw,160px)]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead id="edicao-title" label={`Edição nº ${edition.number}`} title={`Edição de ${edition.month.toLowerCase()}.`}>
            <p>As ofertas do mês, separadas do resto. Valores confirmados na conversa.</p>
          </SectionHead>
          <span
            aria-hidden="true"
            className="display text-[clamp(120px,18vw,260px)] !leading-[0.8] text-transparent [-webkit-text-stroke:1px_var(--color-linha)] max-md:hidden"
          >
            {edition.number}
          </span>
        </div>

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-px bg-linha md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          {/* oferta principal */}
          <Reveal className="flex flex-col justify-between gap-10 bg-verniz p-[clamp(20px,3vw,40px)] md:row-span-2">
            <div className="flex flex-col gap-4">
              <span className="lbl text-fosco">Oferta principal</span>
              <h3 className="display text-[clamp(30px,3.6vw,52px)]">{lead.title}</h3>
              <p className="max-w-[44ch] text-cera/85">{lead.detail}</p>
              <ul className="flex flex-col border-t border-linha">
                {lead.items.map((id) => (
                  <li key={id} className="lbl border-b border-linha py-3 text-cera/80">
                    {nameOf(id)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <p className="flex flex-col">
                <span className="lbl text-fosco">Por</span>
                <span className="display text-[clamp(44px,6vw,88px)] tabular-nums">{lead.offer}</span>
              </p>
              <a
                href={waLink(messages.edition(lead.title, edition.month))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Quero o combo <span className="arw" aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>

          {rest.map((item, i) => (
            <Reveal key={item.title} delay={0.08 * (i + 1)} className="flex flex-col gap-4 bg-verniz p-[clamp(20px,3vw,40px)]">
              <span className="lbl text-fosco">{item.items.map(nameOf).join(" + ")}</span>
              <h3 className="font-display text-[clamp(22px,2.2vw,30px)] font-bold leading-tight [font-stretch:118%]">
                {item.title}
              </h3>
              <p className="text-cera/85">{item.detail}</p>
              <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-4">
                <span className="display text-[clamp(26px,2.6vw,36px)] tabular-nums">{item.offer}</span>
                <a
                  href={waLink(messages.edition(item.title, edition.month))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-under text-laranja"
                >
                  Pedir <span className="arw" aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
