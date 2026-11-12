import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";
import { store } from "@/data/store";

/** Teto de LED hexagonal da loja, desenhado em SVG até chegar a foto real. */
function HexCeiling() {
  const hexes: { x: number; y: number }[] = [];
  const rr = 46;
  const dx = rr * Math.sqrt(3);
  const dy = rr * 1.5;
  for (let row = -1; row < 7; row++) {
    for (let col = -1; col < 9; col++) {
      hexes.push({ x: col * dx + (row % 2 ? dx / 2 : 0), y: row * dy });
    }
  }
  const pts = (cx: number, cy: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`;
    }).join(" ");

  return (
    <svg viewBox="0 0 640 480" className="h-full w-full" role="img" aria-label="Ilustração do teto de LED hexagonal da loja">
      <defs>
        <radialGradient id="hexFade" cx="55%" cy="40%" r="70%">
          <stop offset="0%" style={{ stopColor: "var(--color-brilho)", stopOpacity: 0.95 }} />
          <stop offset="70%" style={{ stopColor: "var(--color-luz)", stopOpacity: 0.25 }} />
          <stop offset="100%" style={{ stopColor: "var(--color-luz)", stopOpacity: 0 }} />
        </radialGradient>
        <filter id="hexGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="640" height="480" style={{ fill: "var(--color-verniz)" }} />
      <g transform="translate(20 10) skewX(-8)" filter="url(#hexGlow)" stroke="url(#hexFade)" strokeWidth="3" fill="none">
        {hexes.map((h, i) => (
          <polygon key={i} points={pts(h.x, h.y)} />
        ))}
      </g>
    </svg>
  );
}

function PhotoSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`relative flex items-end overflow-hidden border border-linha bg-verniz bg-[repeating-linear-gradient(135deg,var(--color-grafite)_0_1px,transparent_1px_14px)] p-4 ${className}`}
    >
      <span className="lbl bg-verniz px-2 py-1 text-fosco">{label}</span>
    </div>
  );
}

export function Store() {
  return (
    <section id="loja" aria-labelledby="loja-title" className="relative">
      <div className="wrap grid grid-cols-[minmax(0,1fr)] gap-12 py-[clamp(80px,10vw,160px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-20">
        <div className="flex flex-col gap-10 lg:sticky lg:top-[120px] lg:self-start">
          <SectionHead id="loja-title" label="A loja" title={`${store.city}, ${store.state}.`}>
            <p>
              Vem ver o brilho de perto: os produtos na prateleira e quem entende de aplicação no
              balcão. Pediu pelo WhatsApp? Retire aqui.
            </p>
          </SectionHead>
          <dl className="flex flex-col">
            <div className="grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] gap-4 border-t border-linha py-3.5">
              <dt className="lbl text-fosco">Endereço</dt>
              <dd>
                {store.street} · {store.district}
                <br />
                {store.city} · {store.state} · CEP {store.postalCode}
              </dd>
            </div>
            <div className="grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] gap-4 border-t border-linha py-3.5">
              <dt className="lbl text-fosco">Horário</dt>
              <dd className="flex flex-col gap-1">
                {store.hours.map((h) => (
                  <span key={h.days} className="flex flex-wrap justify-between gap-x-4">
                    <span>{h.days}</span>
                    <span className="font-mono text-[14px] tabular-nums text-cera/85">{h.time}</span>
                  </span>
                ))}
              </dd>
            </div>
            <div className="grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] gap-4 border-t border-linha py-3.5">
              <dt className="lbl text-fosco">WhatsApp</dt>
              <dd className="font-mono text-[15px] tabular-nums">{store.phoneDisplay}</dd>
            </div>
            <div className="grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] gap-4 border-y border-linha py-3.5">
              <dt className="lbl text-fosco">Instagram</dt>
              <dd>
                <a href={store.instagram} target="_blank" rel="noopener noreferrer" className="underline decoration-linha underline-offset-4 hover:decoration-laranja">
                  {store.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>
          <a href={store.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-under self-start text-cera">
            Como chegar <span className="arw" aria-hidden="true">↗</span>
          </a>
        </div>

        {/* colagem: troque os PhotoSlot por <Image> com as fotos reais */}
        <div className="grid grid-cols-6 gap-3">
          <Reveal mode="clip" className="col-span-6 aspect-[4/3] max-w-full overflow-hidden border border-linha">
            <HexCeiling />
          </Reveal>
          <PhotoSlot label="Foto real · equipe" className="col-span-3 aspect-[4/5] md:-mt-16 md:ml-8" />
          <PhotoSlot label="Foto real · parede verde com o neon" className="col-span-3 aspect-[4/5] md:mt-10" />
          <PhotoSlot label="Foto real · Detail Fest" className="col-span-4 col-start-2 aspect-[16/9]" />
        </div>
      </div>
    </section>
  );
}
