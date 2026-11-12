import { store } from "@/data/store";
import { Logo } from "@/components/ui/Logo";
import { waLink, messages } from "@/lib/whatsapp";

/** O balcão: onde fica, quando abre e onde seguir. Sem colunas de links genéricos. */
export function Footer() {
  const address = [
    store.street,
    `${store.district} · ${store.city}`,
    `${store.state} · CEP ${store.postalCode}`,
  ].join("\n");

  return (
    <footer className="relative overflow-hidden border-t border-linha pb-[calc(72px+env(safe-area-inset-bottom))] md:pb-0">
      <span
        aria-hidden="true"
        className="kanji absolute -right-[0.08em] -bottom-[0.15em] text-[clamp(220px,32vw,520px)] text-cera/[0.04]"
      >
        栄
      </span>
      <div className="wrap relative grid grid-cols-[minmax(0,1fr)] gap-12 py-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] md:py-24">
        <div className="flex flex-col gap-4">
          <Logo width={150} className="mb-8 self-start" />
          <span className="lbl text-fosco">O balcão</span>
          <p className="display whitespace-pre-line text-[clamp(24px,2.6vw,38px)] !leading-[1.12]">{address}</p>
          <a
            href={store.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-under self-start text-cera"
          >
            Como chegar <span className="arw" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="flex flex-col gap-4 md:pt-[92px]">
          <span className="lbl text-fosco">Horário</span>
          <dl className="flex flex-col gap-3">
            {store.hours.map((h) => (
              <div key={h.days} className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-linha pb-3">
                <dt>{h.days}</dt>
                <dd className="font-mono text-[14px] tabular-nums text-cera/85">{h.time}</dd>
              </div>
            ))}
          </dl>
          <p className="text-[15px] text-fosco">Retirada na loja dentro do horário.</p>
        </div>

        <div className="flex flex-col gap-4 md:pt-[92px]">
          <span className="lbl text-fosco">WhatsApp</span>
          <a
            href={waLink(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="link-under self-start !normal-case !tracking-normal !text-[17px] text-cera"
          >
            {store.phoneDisplay} <span className="arw" aria-hidden="true">↗</span>
          </a>
          <span className="lbl mt-4 text-fosco">Acompanhe</span>
          <a
            href={store.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="link-under self-start !normal-case !tracking-normal !text-[17px] text-cera"
          >
            {store.instagramHandle} <span className="arw" aria-hidden="true">↗</span>
          </a>
          <a
            href={store.linkBio}
            target="_blank"
            rel="noopener noreferrer"
            className="link-under self-start !normal-case !tracking-normal !text-[17px] text-cera"
          >
            {store.films} <span className="arw" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="wrap relative flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-linha py-6">
        <span className="lbl text-fosco">
          {store.name} · {store.films}
        </span>
        <span className="lbl text-fosco">Distribuidor exclusivo Quad Film · {store.regions.join(" · ")}</span>
      </div>
    </footer>
  );
}
