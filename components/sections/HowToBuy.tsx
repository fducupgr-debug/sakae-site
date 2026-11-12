import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

const stepsToBuy = [
  { t: "Escolha", d: "Ache o produto pela etapa ou só diga qual é o seu carro." },
  { t: "Toque em Pedir", d: "O WhatsApp abre com o nome do produto já escrito." },
  { t: "Confirme", d: "A loja confirma estoque, valor, parcelamento e entrega." },
  { t: "Receba", d: "Retire em Ji-Paraná ou receba na sua cidade." },
];

export function HowToBuy() {
  return (
    <section aria-labelledby="comprar-title" className="border-t border-linha">
      <div className="wrap py-[clamp(80px,10vw,160px)]">
        <SectionHead id="comprar-title" label="Como comprar" title="Quatro passos, zero dúvida." />
        <div className="relative mt-16">
        <div aria-hidden="true" className="lightline absolute inset-x-0 top-[13px] hidden md:block" />
        <ol className="relative grid grid-cols-[minmax(0,1fr)] gap-10 md:grid-cols-4 md:gap-8">
          {stepsToBuy.map((s, i) => (
            <li key={s.t}>
              <Reveal delay={i * 0.08} className="relative flex flex-col gap-3">
                <span className="lbl relative z-10 self-start bg-verniz pr-3 tabular-nums text-laranja">
                  0{i + 1}
                </span>
                <h3 className="font-display text-[24px] font-bold [font-stretch:118%]">{s.t}</h3>
                <p className="max-w-[30ch] text-cera/80">{s.d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
