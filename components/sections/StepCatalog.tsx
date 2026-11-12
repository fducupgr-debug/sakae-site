"use client";

import { useId, useMemo, useState } from "react";
import { products, steps, type Product, type StepId } from "@/data/products";
import { SectionHead } from "@/components/ui/SectionHead";
import { waLink, messages } from "@/lib/whatsapp";

const norm = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const stepNumber = (id: StepId) => {
  const s = steps.find((x) => x.id === id);
  return s?.order ? String(s.order).padStart(2, "0") : "+";
};

function ProductRow({ p, showStep }: { p: Product; showStep: boolean }) {
  const meta = [...(p.sizes ?? []), ...(p.dilution ? [`Diluição ${p.dilution}`] : []), ...(p.specs ?? [])];
  const stepName = steps.find((s) => s.id === p.step)?.name;
  return (
    <li className="group relative grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1.5 border-b border-linha px-[clamp(0px,1.6vw,24px)] py-5 transition-colors duration-200 hover:bg-grafite md:grid-cols-[minmax(0,150px)_minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,150px)_auto] md:items-center md:gap-x-8">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-[linear-gradient(90deg,transparent,var(--color-luz)_40%,transparent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />
      <span className="lbl col-span-2 text-fosco md:col-span-1">
        {p.brand}
        {showStep && stepName ? <span className="text-fosco/70"> · {stepName}</span> : null}
      </span>
      <div className="col-span-2 flex min-w-0 flex-col gap-1 md:col-span-1">
        <h3 className="font-display text-[19px] font-bold leading-tight tracking-[-0.01em] [font-stretch:112%]">
          {p.name}
        </h3>
        <p className="text-[15px] leading-snug text-fosco">{p.use}</p>
      </div>
      <p className={`lbl col-span-2 !text-[11.5px] text-cera/70 md:col-span-1 ${meta.length ? "" : "max-md:hidden"}`}>
        {meta.length ? meta.join(" · ") : <span className="text-fosco/60">—</span>}
      </p>
      <p className="lbl self-center !text-[13px] tabular-nums text-cera md:text-right">
        {p.price ?? <span className="text-fosco">Consultar</span>}
      </p>
      <a
        href={waLink(messages.product(p))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Pedir ${p.name}, ${p.brand}, no WhatsApp`}
        className="lbl inline-flex items-center gap-2 self-center justify-self-end py-2 text-laranja hover:text-laranja-q"
      >
        Pedir <span aria-hidden="true">↗</span>
      </a>
    </li>
  );
}

export function StepCatalog() {
  const [active, setActive] = useState<StepId>("lavar");
  const [query, setQuery] = useState("");
  const searchId = useId();

  const counts = useMemo(() => {
    const c = new Map<StepId, number>();
    for (const p of products) c.set(p.step, (c.get(p.step) ?? 0) + 1);
    return c;
  }, []);

  const q = norm(query.trim());
  const searching = q.length > 1;
  const list = useMemo(() => {
    if (searching) {
      return products.filter((p) => norm(`${p.name} ${p.brand} ${p.use}`).includes(q));
    }
    return products.filter((p) => p.step === active);
  }, [active, q, searching]);

  const current = steps.find((s) => s.id === active)!;

  return (
    <section id="produtos" aria-labelledby="produtos-title" className="relative">
      <div className="wrap py-[clamp(80px,10vw,160px)]">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)] md:items-end">
          <SectionHead id="produtos-title" label="Catálogo" title="Escolha pela etapa.">
            <p>
              Toque em <span className="font-mono text-laranja">Pedir</span> e a mensagem já vai
              pronta para o WhatsApp. Não sabe qual usar? Diga o carro e a gente indica.
            </p>
          </SectionHead>
          <div className="flex flex-col gap-2">
            <label htmlFor={searchId} className="lbl text-fosco">
              Buscar produto ou marca
            </label>
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex.: Glaco, boina, shampoo"
              className="w-full border border-linha bg-grafite px-4 py-3.5 text-[16px] text-cera placeholder:text-fosco/70 focus:border-fosco focus:outline-none focus-visible:outline-2 focus-visible:outline-luz"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-8 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-12">
          {/* etapas: lista lateral no desktop, abas roláveis fixas no celular */}
          <nav
            aria-label="Etapas"
            className="sticky top-[calc(68px+env(safe-area-inset-top))] z-20 self-start bg-verniz py-3 md:top-[100px] md:bg-transparent md:py-0"
          >
            <ul className="no-scrollbar flex gap-2 overflow-x-auto md:flex-col md:gap-0 md:overflow-visible">
              {steps.map((s) => {
                const on = !searching && s.id === active;
                return (
                  <li key={s.id} className="shrink-0">
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => {
                        setActive(s.id);
                        setQuery("");
                      }}
                      className={`flex w-full items-baseline gap-3 whitespace-nowrap border px-3.5 py-2.5 text-left transition-colors md:border-0 md:border-b md:border-linha md:px-0 md:py-3.5 ${
                        on
                          ? "border-cera bg-cera text-verniz md:bg-transparent md:text-brilho"
                          : "border-linha text-cera/75 hover:text-brilho"
                      }`}
                    >
                      <span className={`lbl tabular-nums ${on ? "md:text-laranja" : "text-fosco"}`}>
                        {stepNumber(s.id)}
                      </span>
                      <span className="text-[15px] font-medium md:text-[17px]">{s.name}</span>
                      <span className="lbl ml-auto hidden tabular-nums text-fosco md:inline">
                        {counts.get(s.id)}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-cera/30 pb-4">
              <p className="display text-[clamp(26px,3vw,40px)]" aria-live="polite">
                {searching ? `Busca: “${query.trim()}”` : current.name}
              </p>
              <p className="lbl text-fosco">
                {searching
                  ? `${list.length} ${list.length === 1 ? "resultado" : "resultados"}`
                  : `${current.hint} · ${list.length} itens`}
              </p>
            </div>
            {list.length > 0 ? (
              <ul>
                {list.map((p) => (
                  <ProductRow key={p.id} p={p} showStep={searching} />
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-start gap-4 border-b border-linha py-10">
                <p className="max-w-[48ch] text-cera/85">
                  Não achamos “{query.trim()}” no catálogo do site. A loja tem mais itens do que
                  aparecem aqui: pergunte direto.
                </p>
                <a
                  href={waLink(`Olá, Sakae! Vocês têm ${query.trim()}?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Perguntar no WhatsApp <span className="arw" aria-hidden="true">↗</span>
                </a>
              </div>
            )}
            <p className="lbl mt-5 text-fosco">
              Preços e estoque confirmados na conversa. “Consultar” = valor sob pedido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
