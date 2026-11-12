import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "ghost";
  external?: boolean;
  arrow?: boolean;
  className?: string;
  "aria-label"?: string;
};

/** Ação da marca: canto cortado (primary/dark) ou sublinhado que corre (ghost). */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  arrow = true,
  className = "",
  ...rest
}: Props) {
  const base =
    variant === "ghost" ? "link-under" : variant === "dark" ? "btn btn-dark" : "btn";
  return (
    <a
      href={href}
      className={`${base} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={rest["aria-label"]}
    >
      <span>{children}</span>
      {arrow && (
        <span className="arw" aria-hidden="true">
          {external ? "↗" : "↓"}
        </span>
      )}
    </a>
  );
}
