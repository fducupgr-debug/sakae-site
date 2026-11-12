import type { ReactNode } from "react";
import { SweepText } from "./SweepText";

type Props = {
  id: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: "dark" | "primer";
  className?: string;
};

/** Cabeçalho de seção: etiqueta mono, título expandido com passada de luz, apoio curto. */
export function SectionHead({ id, label, title, children, tone = "dark", className = "" }: Props) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <span className={`lbl ${tone === "primer" ? "text-primer-tx" : "text-fosco"}`}>{label}</span>
      <SweepText
        id={id}
        className="display text-[clamp(34px,5.2vw,76px)] max-w-[16ch]"
      >
        {title}
      </SweepText>
      {children && (
        <div
          className={`text-[clamp(17px,1.5vw,20px)] leading-relaxed max-w-[56ch] ${
            tone === "primer" ? "text-verniz/80" : "text-cera/85"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
