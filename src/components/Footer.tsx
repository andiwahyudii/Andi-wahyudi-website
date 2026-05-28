import { Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import type { SiteContent } from "@/lib/i18n";

type FooterProps = {
  content: SiteContent;
};

export function Footer({ content }: FooterProps) {
  const location =
    content.locale === "id" ? siteConfig.locationId : siteConfig.locationEn;

  return (
    <footer className="bg-[#06111F] py-10 text-white">
      <div className="container-page grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-heading text-xl font-bold tracking-[0.18em]">
            {siteConfig.name}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-white/[0.68]">
            {siteConfig.headline}
          </p>
          <p className="mt-5 text-sm text-white/[0.54]">{content.footer.copyright}</p>
        </div>

        <div className="grid gap-3 text-sm text-white/[0.72]">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-soft-gold"
          >
            <MessageCircle size={17} />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.mailto}
            className="inline-flex items-center gap-2 transition hover:text-soft-gold"
          >
            <Mail size={17} />
            {siteConfig.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={17} />
            {location}
          </span>
        </div>
      </div>
    </footer>
  );
}
