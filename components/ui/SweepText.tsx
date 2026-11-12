"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

type Props = {
  as?: Tag;
  id?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Passada de luz: quando o título entra na tela, um brilho atravessa o texto
 * uma única vez, como a luz de inspeção correndo sobre a pintura.
 * O texto fica legível antes, durante e depois do efeito.
 */
export function SweepText({ as: Component = "h2", id, className = "", children }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Component
      id={id}
      ref={ref as never}
      className={`sweep ${on ? "is-on" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
