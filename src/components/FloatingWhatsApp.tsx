import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

type FloatingWhatsAppProps = {
  label: string;
};

export function FloatingWhatsApp({ label }: FloatingWhatsAppProps) {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1F9D55] px-4 py-3 text-sm font-bold text-white shadow-premium transition hover:bg-[#178447]"
    >
      <MessageCircle size={19} />
      <span>{label}</span>
    </a>
  );
}
