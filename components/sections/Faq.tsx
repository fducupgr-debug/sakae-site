import { faq } from "@/data/faq";
import { SectionHead } from "@/components/ui/SectionHead";
import { waLink } from "@/lib/whatsapp";

export function Faq() {
  return (
    <section aria-labelledby="duvidas-title" className="border-t border-linha">
      <div className="wrap grid grid-cols-[minmax(0,1fr)] gap-12 py-[clamp(80px,10vw,160px)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <SectionHead id="duvidas-title" label="Dúvidas" title="Antes de chamar.">
          <p>Se a sua dúvida não estiver aqui, ela vira mensagem.</p>
        </SectionHead>
        <div className="flex flex-col border-t border-linha">
          {faq.map((f) => (
            <details key={f.q} className="group border-b border-linha">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[clamp(18px,1.6vw,21px)] font-medium marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="lbl shrink-0 text-fosco transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="flex flex-col items-start gap-4 pb-6">
                <p className="max-w-[60ch] text-cera/85">{f.a}</p>
                <a
                  href={waLink(`Olá, Sakae! ${f.q}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-under text-laranja"
                >
                  Perguntar no WhatsApp <span className="arw" aria-hidden="true">↗</span>
                </a>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
