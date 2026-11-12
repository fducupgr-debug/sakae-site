"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { waLink, messages } from "@/lib/whatsapp";

const links = [
  { href: "#produtos", label: "Produtos" },
  { href: "#edicao", label: "Edição do mês" },
  { href: "#esteticas", label: "Para estéticas" },
  { href: "#loja", label: "Loja" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-verniz border-b border-linha pt-[env(safe-area-inset-top)]">
      <div className="wrap flex h-[68px] items-center justify-between gap-6">
        <a href="#topo" aria-label="Sakae Detail Shop, voltar ao início" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="lbl text-cera/80 hover:text-brilho transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn !px-4 !py-3 !text-[12px] hidden sm:inline-flex"
          >
            WhatsApp <span className="arw" aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="md:hidden lbl text-cera border border-linha px-4 py-3"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="md:hidden fixed inset-x-0 bottom-0 top-[calc(68px+env(safe-area-inset-top))] bg-verniz z-40 overflow-y-auto"
      >
        <nav aria-label="Menu" className="wrap flex flex-col pt-6 pb-[calc(32px+env(safe-area-inset-bottom))]">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-linha py-5"
            >
              <span className="lbl text-fosco tabular-nums">0{i + 1}</span>
              <span className="display text-[34px]">{l.label}</span>
            </a>
          ))}
          <a
            href={waLink(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-8 self-start"
          >
            Chamar no WhatsApp <span className="arw" aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
