"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { siteConfig } from "@/data/siteConfig";
import type { Locale } from "@/data/types";
import type { SiteContent } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type NavbarProps = {
  content: SiteContent;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function Navbar({ content, locale, onLocaleChange }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-deep-navy/95 shadow-premium backdrop-blur"
          : "bg-transparent"
      )}
    >
      <nav className="container-page flex min-h-[76px] items-center justify-between gap-4">
        <a
          href="#home"
          className="focus-ring rounded-lg py-2 font-heading text-sm font-bold uppercase tracking-[0.2em] text-white sm:text-base"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {content.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/[0.78] transition hover:text-soft-gold"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} onLocaleChange={onLocaleChange} />
          <Button href="#contact" variant="primary" className="min-h-10 px-5 py-2">
            {content.nav.contactLabel}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher
            locale={locale}
            onLocaleChange={onLocaleChange}
            compact
          />
          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.15] bg-white/10 text-white"
            aria-label={open ? content.nav.closeMenuLabel : content.nav.openMenuLabel}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "lg:hidden",
          open ? "pointer-events-auto block" : "pointer-events-none hidden"
        )}
      >
        <div className="border-t border-white/10 bg-deep-navy px-4 pb-6 pt-3 shadow-premium">
          <div className="mx-auto flex max-w-md flex-col gap-2">
            {content.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-2xl px-4 py-3 text-base font-semibold text-white/[0.86] hover:bg-white/[0.08]"
              >
                {item.label}
              </a>
            ))}
            <Button
              href="#contact"
              variant="primary"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              {content.nav.contactLabel}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
