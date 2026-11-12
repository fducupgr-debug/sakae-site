import type { ReactNode } from "react";
import { waLink } from "@/lib/whatsapp";
import { ButtonLink } from "./ButtonLink";

type Props = {
  message: string;
  children?: ReactNode;
  variant?: "primary" | "dark" | "ghost";
  className?: string;
  "aria-label"?: string;
};

/** Todo caminho do site termina aqui: uma conversa que já começa escrita. */
export function WhatsAppLink({
  message,
  children = "Chamar no WhatsApp",
  variant = "primary",
  className,
  ...rest
}: Props) {
  return (
    <ButtonLink
      href={waLink(message)}
      external
      variant={variant}
      className={className}
      aria-label={rest["aria-label"]}
    >
      {children}
    </ButtonLink>
  );
}
