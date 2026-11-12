import { brands } from "@/data/products";

/** Curadoria antes de qualquer argumento: as marcas, em mono, passando devagar. */
export function BrandMarquee() {
  const row = (copy: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={copy || undefined}>
      {brands.map((b) => (
        <li key={b} className="flex items-center">
          <span className="lbl whitespace-nowrap px-8 !text-[13px] text-cera/80">{b}</span>
          <span className="h-1 w-1 bg-fosco/60" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Marcas da loja" className="border-y border-linha py-6">
      <div className="marquee">
        <div className="marquee-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
