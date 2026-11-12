"use client";

import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "rise": sobe 24px. "clip": abre de baixo para cima, para imagens. */
  mode?: "rise" | "clip";
};

const ease = [0.16, 1, 0.3, 1] as const;

/** Entrada discreta ao rolar. Com "reduzir movimento", o deslocamento é desligado. */
export function Reveal({ children, className, delay = 0, mode = "rise" }: Props) {
  const variants =
    mode === "clip"
      ? {
          hidden: { clipPath: "inset(100% 0% 0% 0%)" },
          shown: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.7, ease, delay } },
        }
      : {
          hidden: { opacity: 0, y: 24 },
          shown: { opacity: 1, y: 0, transition: { duration: 0.5, ease, delay } },
        };

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        variants={variants}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
