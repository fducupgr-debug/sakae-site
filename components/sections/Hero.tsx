"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SweepText } from "@/components/ui/SweepText";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { messages } from "@/lib/whatsapp";
import { store } from "@/data/store";

const heroBrands = ["Soft99", "Kers", "Cadillac", "Finisher", "Lincoln", "Wolf Pads"];

/**
 * Hero "Luz de inspeção".
 * O fundo é desenhado em CSS (pintura preta + reflexo de luz em tira).
 * Quando a IMAGEM 01 da direção de arte existir, ela entra por baixo do .paint-line.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const lineY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

  return (
    <section
      id="topo"
      ref={ref}
      aria-labelledby="hero-title"
      className="paint relative isolate overflow-hidden"
    >
      {/* reflexo */}
      <div aria-hidden="true" className="glint absolute -right-[12%] top-[8%] h-[70%] w-[46%]" />
      <motion.div
        aria-hidden="true"
        style={{ y: lineY }}
        className="paint-line top-[7%] -rotate-[13deg] md:top-[34%] md:-rotate-[2deg]"
      />
      <div aria-hidden="true" className="grain absolute inset-0" />
      <span
        aria-hidden="true"
        className="kanji absolute right-[2vw] top-[10%] text-[clamp(180px,30vw,460px)] text-cera/[0.06] max-md:right-[-14vw] max-md:top-[4%] max-md:text-[64vw]"
      >
        栄
      </span>

      <div className="wrap relative flex min-h-[clamp(600px,88svh,920px)] flex-col justify-end pb-10 pt-28 md:pb-12">
        <div className="flex max-w-[1080px] flex-col gap-7">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lbl text-fosco"
          >
            Distribuidor exclusivo Quad Film · {store.regions.join(" · ")}
          </motion.span>
          <SweepText
            as="h1"
            id="hero-title"
            className="display text-[clamp(52px,9.4vw,140px)] !leading-[0.94] !tracking-[-0.04em]"
          >
            Brilho não é&nbsp;sorte.
          </SweepText>
          <p className="max-w-[44ch] text-[clamp(18px,1.6vw,22px)] leading-relaxed text-cera/90">
            É produto certo na etapa certa. Diga qual é o seu carro e a gente indica o que usar, do
            shampoo ao PPF.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-1">
            <WhatsAppLink message={messages.car} />
            <ButtonLink href="#produtos" variant="ghost" className="text-cera">
              Ver produtos por etapa
            </ButtonLink>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-linha pt-4">
          <span className="lbl text-fosco">{heroBrands.join(" · ")} · e mais</span>
          <span className="lbl text-fosco">
            {store.city} · {store.state}
          </span>
        </div>
      </div>
    </section>
  );
}
