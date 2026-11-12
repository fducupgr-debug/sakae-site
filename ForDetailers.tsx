import { SectionHead } from "@/components/ui/SectionHead";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Reveal } from "@/components/ui/Reveal";
import { messages } from "@/lib/whatsapp";
import { store } from "@/data/store";

const u18 = [
  { k: "Material", v: "TPU puro Covestro" },
  { k: "Espessura", v: "+195 µm" },
  { k: "Adesivo", v: "Henkel" },
  { k: "Autorregeneração", v: "Sim" },
  { k: "Garantia", v: "7 anos" },
  { k: "Acabamento", v: "Alta transparência e brilho" },
];

const supply = [
  "PPF Fumê de Farol e Transition Camaleão Black",
  "Compostos Lincoln, Nobrecar e Cadillac",
  "Boinas Wolf Pads e politriz Kers",
  "Desincrustantes em 5 L: Teixeira Pinto e Cadillac",
  "Iluminação Colmeia Kers para o estúdio",
];

/**
 * Seção clara, cor de primer automotivo: a única do site.
 * Sakae Films: distribuição exclusiva Quad Film para estéticas e aplicadores.
 */
export function ForDetailers() {
  return (
    <section id="esteticas" aria-labelledby="esteticas-title" className="bg-primer text-verniz">
      <div className="wrap grid grid-cols-[minmax(0,1fr)] gap-14 py-[clamp(80px,10vw,160px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="flex flex-col gap-10">
          <SectionHead
            id="esteticas-title"
            tone="primer"
            label={`${store.films} · Para estéticas`}
            title="Sua estética abastece aqui."
          >
            <p>
              Distribuição exclusiva Quad Film. Estoque em Ji-Paraná, entrega em Rondônia em até 24h
              e atendimento para {store.regions.filter((r) => r !== "RO").join(", ").replace(/, ([^,]*)$/, " e $1")}.
            </p>
          </SectionHead>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <WhatsAppLink message={messages.installer} variant="dark">
              Pedir tabela do instalador
            </WhatsAppLink>
            <WhatsAppLink message={messages.ppfQuote} variant="ghost" className="text-verniz">
              Cotação de PPF
            </WhatsAppLink>
          </div>
          <div className="flex flex-col gap-3 border-t border-verniz/15 pt-6">
            <span className="lbl text-primer-tx">Reposição para quem aplica</span>
            <ul className="flex flex-col">
              {supply.map((s) => (
                <li key={s} className="border-b border-verniz/15 py-3 text-[16px]">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal className="self-start bg-verniz p-[clamp(20px,3vw,40px)] text-cera">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <span className="lbl text-fosco">Ficha técnica</span>
            <span className="lbl text-fosco">Quad Film</span>
          </div>
          <p className="display mt-6 text-[clamp(40px,5vw,72px)]">U18</p>
          <p className="mt-2 text-cera/80">PPF de proteção de pintura, autorregenerativo.</p>
          <dl className="mt-8 flex flex-col">
            {u18.map((row) => (
              <div
                key={row.k}
                className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-4 border-t border-linha py-3.5"
              >
                <dt className="lbl text-fosco">{row.k}</dt>
                <dd className="font-mono text-[14px] tabular-nums">{row.v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-col gap-1 border-t border-linha pt-6">
            <span className="lbl text-fosco">Logística</span>
            <p className="display text-[clamp(26px,3vw,40px)]">Rondônia em até 24h</p>
            <p className="lbl text-fosco">{store.regions.join(" · ")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
