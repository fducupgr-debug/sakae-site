import { brands, products, steps } from "@/data/products";
import { Reveal } from "@/components/ui/Reveal";
import { SweepText } from "@/components/ui/SweepText";

export function Manifesto() {
  return (
    <section aria-labelledby="manifesto-title" className="relative overflow-hidden">
      <div className="wrap grid grid-cols-[minmax(0,1fr)] gap-10 py-[clamp(96px,13vw,200px)] md:grid-cols-[minmax(0,180px)_minmax(0,1fr)] md:gap-16">
        <div className="flex items-start gap-4 md:flex-col">
          <span
            aria-hidden="true"
            className="kanji text-[clamp(96px,11vw,170px)] text-cera/[0.16]"
          >
            栄
          </span>
          <span className="lbl text-fosco md:mt-4">
            Sakae
            <br />
            prosperar
          </span>
        </div>

        <div className="flex flex-col gap-10">
          <SweepText
            as="h2"
            id="manifesto-title"
            className="display text-[clamp(32px,5vw,72px)] max-w-[18ch] !leading-[1.04]"
          >
            Na pintura, casca de laranja é defeito. Aqui, é a nossa cor.
          </SweepText>
          <Reveal className="grid grid-cols-[minmax(0,1fr)] gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-w-[980px]">
            <p className="text-[clamp(17px,1.4vw,19px)] leading-relaxed text-cera/85">
              Sakae (栄) quer dizer prosperar, em japonês. Pra gente, é o carro voltar melhor do que
              saiu.
            </p>
            <p className="text-[clamp(17px,1.4vw,19px)] leading-relaxed text-cera/85">
              Aqui você encontra as marcas que os detailers usam e alguém que explica cada uma antes
              de você comprar. Sem adivinhação.
            </p>
          </Reveal>
          <p className="lbl flex flex-wrap gap-x-6 gap-y-2 border-t border-linha pt-5 text-fosco">
            <span>
              <span className="text-cera tabular-nums">{brands.length}</span> marcas
            </span>
            <span>
              <span className="text-cera tabular-nums">{products.length}</span> produtos
            </span>
            <span>
              <span className="text-cera tabular-nums">{steps.filter((s) => s.order).length}</span>{" "}
              etapas do lavar ao interior
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
