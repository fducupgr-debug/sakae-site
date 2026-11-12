import { waLink, messages } from "@/lib/whatsapp";

/** No celular, o WhatsApp fica sempre a um polegar de distância. */
export function MobileWhatsAppBar() {
  return (
    <a
      href={waLink(messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed inset-x-0 bottom-0 z-30 flex items-center justify-center gap-3 bg-laranja text-verniz lbl !text-[13px] pt-4 pb-[calc(16px+env(safe-area-inset-bottom))] pl-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] active:bg-laranja-q"
    >
      Chamar no WhatsApp <span aria-hidden="true">↗</span>
    </a>
  );
}
