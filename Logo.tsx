import { SAKAE_PATH, SAKAE_VIEWBOX } from "./sakae-wordmark";

type Props = {
  className?: string;
  /** Largura do "Sakae" em px. */
  width?: number;
};

/** Logo oficial: "Sakae" em pincel laranja + "detail shop". */
export function Logo({ className = "", width = 118 }: Props) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`} style={{ width }}>
      <svg viewBox={SAKAE_VIEWBOX} width={width} role="img" aria-label="Sakae" className="block h-auto">
        <path d={SAKAE_PATH} fill="var(--color-laranja)" />
      </svg>
      <span
        aria-hidden="true"
        className="mt-[0.1em] font-sans font-normal tracking-[0.06em] text-cera/70"
        style={{ fontSize: Math.max(11, Math.round(width * 0.098)) }}
      >
        detail shop
      </span>
    </span>
  );
}
