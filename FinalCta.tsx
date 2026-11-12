import { SweepText } from "@/components/ui/SweepText";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { messages } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="paint relative overflow-hidden border-t border-linha">
      <div aria-hidden="true" className="paint-line top-[22%] rotate-[1.5deg] opacity-60" />
      <div aria-hidden="true" className="grain absolute inset-0" />
      <div className="wrap relative flex flex-col gap-10 py-[clamp(110px,14vw,220px)]">
        <span className="lbl text-fosco">Sem adivinhação</span>
        <SweepText
          as="h2"
          id="final-title"
          className="display max-w-[14ch] text-[clamp(44px,8vw,124px)] !leading-[0.95] !tracking-[-0.04em]"
        >
          Diga o carro. A gente diz o produto.
        </SweepText>
        <WhatsAppLink message={messages.car} className="self-start" />
      </div>
    </section>
  );
}
