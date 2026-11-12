"use client";

import { useEffect, useId, useRef, useState } from "react";
import { SectionHead } from "@/components/ui/SectionHead";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { products } from "@/data/products";
import { messages } from "@/lib/whatsapp";

/**
 * Teste da chuva: antes e depois do Glaco, com arraste.
 * As duas cenas são desenhadas em canvas (ilustração) até existirem as
 * IMAGENS 02 e 03 da direção de arte. Para trocar, substitua os <canvas> por <Image>.
 */

type Mode = "before" | "after";

function rng(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ORANGE = [240, 105, 15];
const COOL = [227, 234, 241];
const RED = [210, 48, 32];

function draw(canvas: HTMLCanvasElement, mode: Mode) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (!w || !h) return;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const r = rng(11);
  const k = w / 1100;

  // noite
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, "#06070a");
  sky.addColorStop(0.5, "#0f1217");
  sky.addColorStop(1, "#050506");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  // estrada: brilho molhado no centro
  const road = ctx.createRadialGradient(w * 0.5, h * 0.78, 0, w * 0.5, h * 0.78, w * 0.55);
  road.addColorStop(0, "rgba(240,105,15,0.10)");
  road.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = road;
  ctx.fillRect(0, 0, w, h);

  // luzes da rua (bokeh)
  const soft = mode === "before" ? 1.9 : 1;
  for (let i = 0; i < 54; i++) {
    const x = r() * w;
    const y = h * (0.22 + r() * 0.42);
    const rad = (10 + r() * 34) * (0.5 + k * 0.6) * soft;
    const pick = r();
    const c = pick < 0.55 ? ORANGE : pick < 0.82 ? COOL : RED;
    const a = (0.18 + r() * 0.45) / (mode === "before" ? 1.3 : 1);
    const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
    g.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${a})`);
    g.addColorStop(mode === "before" ? 0.2 : 0.55, `rgba(${c[0]},${c[1]},${c[2]},${a * 0.55})`);
    g.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.fill();
    // reflexo vertical no asfalto
    const rg = ctx.createLinearGradient(x, y, x, h * 0.9);
    rg.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${a * 0.22})`);
    rg.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
    ctx.fillStyle = rg;
    ctx.fillRect(x - rad * 0.12, y, rad * 0.24, h * 0.9 - y);
  }

  if (mode === "before") {
    // vidro embaçado e água espalhada
    ctx.fillStyle = "rgba(150,160,170,0.07)";
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 220; i++) {
      const x = r() * w;
      let y = -20 + r() * h * 0.6;
      const len = h * (0.15 + r() * 0.6);
      const lw = 1 + r() * 7 * (0.5 + k * 0.5);
      ctx.strokeStyle = `rgba(220,228,236,${0.025 + r() * 0.07})`;
      ctx.lineWidth = lw;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(x, y);
      let xx = x;
      while (y < Math.min(h * 0.9, y + len)) {
        y += 14 + r() * 18;
        xx += (r() - 0.5) * 8;
        ctx.lineTo(xx, y);
      }
      ctx.stroke();
    }
    for (let i = 0; i < 90; i++) {
      const x = r() * w;
      const y = r() * h * 0.85;
      const rx = (6 + r() * 26) * (0.5 + k * 0.5);
      ctx.fillStyle = `rgba(200,210,220,${0.03 + r() * 0.05})`;
      ctx.beginPath();
      ctx.ellipse(x, y, rx, rx * (1.4 + r() * 1.6), (r() - 0.5) * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }
  } else {
    // gotas perfeitas que escorrem
    for (let i = 0; i < 420; i++) {
      const x = r() * w;
      const y = r() * h * 0.86;
      const big = r() < 0.12;
      const rad = (big ? 7 + r() * 9 : 1.6 + r() * 4.5) * (0.55 + k * 0.6);
      const body = ctx.createRadialGradient(x - rad * 0.2, y - rad * 0.3, rad * 0.1, x, y, rad);
      body.addColorStop(0, "rgba(255,255,255,0.06)");
      body.addColorStop(0.75, "rgba(10,12,16,0.30)");
      body.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(x, y, rad, 0, Math.PI * 2);
      ctx.fill();
      // borda inferior pega a luz da rua
      ctx.strokeStyle = r() < 0.6 ? "rgba(240,105,15,0.45)" : "rgba(227,234,241,0.35)";
      ctx.lineWidth = Math.max(0.6, rad * 0.16);
      ctx.beginPath();
      ctx.arc(x, y, rad * 0.78, Math.PI * 0.15, Math.PI * 0.85);
      ctx.stroke();
      // ponto de brilho
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.beginPath();
      ctx.ellipse(x - rad * 0.32, y - rad * 0.38, rad * 0.2, rad * 0.14, -0.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // painel do carro
  ctx.fillStyle = "#030304";
  ctx.beginPath();
  ctx.moveTo(0, h);
  ctx.lineTo(0, h * 0.86);
  ctx.quadraticCurveTo(w * 0.5, h * 0.8, w, h * 0.87);
  ctx.lineTo(w, h);
  ctx.closePath();
  ctx.fill();
  const edge = ctx.createLinearGradient(0, 0, w, 0);
  edge.addColorStop(0, "rgba(227,234,241,0)");
  edge.addColorStop(0.55, "rgba(227,234,241,0.35)");
  edge.addColorStop(1, "rgba(227,234,241,0)");
  ctx.strokeStyle = edge;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, h * 0.86);
  ctx.quadraticCurveTo(w * 0.5, h * 0.8, w, h * 0.87);
  ctx.stroke();
}

export function RainTest() {
  const before = useRef<HTMLCanvasElement>(null);
  const after = useRef<HTMLCanvasElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const sliderId = useId();
  const glaco = products.find((p) => p.id === "soft99-glaco")!;

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const paint = () => {
      if (before.current) draw(before.current, "before");
      if (after.current) draw(after.current, "after");
    };
    paint();
    const ro = new ResizeObserver(paint);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="teste" aria-labelledby="teste-title" className="border-t border-linha">
      <div className="wrap grid grid-cols-[minmax(0,1fr)] gap-12 py-[clamp(80px,10vw,160px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:items-end">
        <div className="flex flex-col gap-8">
          <SectionHead id="teste-title" label="Teste da chuva" title="Arraste. Isso é Glaco na chuva.">
            <p>
              Sem repelente, a água espalha e a estrada some. Com Glaco, a chuva vira gota e escorre
              sozinha.
            </p>
          </SectionHead>
          <WhatsAppLink message={messages.product(glaco)} className="self-start">
            Pedir Glaco
          </WhatsAppLink>
        </div>

        <div className="flex flex-col gap-3">
          <div
            ref={box}
            className="relative aspect-[3/2] w-full max-w-full select-none overflow-hidden border border-linha max-sm:aspect-[4/5]"
          >
            <canvas ref={before} aria-hidden="true" className="absolute inset-0 h-full w-full" />
            <canvas
              ref={after}
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
              style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
            />
            <span className="lbl absolute left-4 top-4 bg-verniz/70 px-2 py-1 text-cera">
              Sem Glaco
            </span>
            <span className="lbl absolute right-4 top-4 bg-verniz/70 px-2 py-1 text-cera">
              Com Glaco
            </span>

            <input
              id={sliderId}
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Comparar vidro sem Glaco e com Glaco"
              className="peer absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 z-0 w-px bg-brilho shadow-[0_0_18px_2px_rgba(227,234,241,0.35)] peer-focus-visible:shadow-[0_0_0_2px_var(--color-luz)]"
              style={{ left: `${pos}%` }}
            >
              <span className="lbl absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-cera !text-[14px] text-verniz [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
                ⟷
              </span>
            </div>
          </div>
          <p className="lbl text-fosco">Ilustração · arraste a linha ou use as setas do teclado</p>
        </div>
      </div>
    </section>
  );
}
