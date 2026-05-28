"use client";

import type { Locale } from "@/data/types";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  compact?: boolean;
};

export function LanguageSwitcher({
  locale,
  onLocaleChange,
  compact = false
}: LanguageSwitcherProps) {
  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-white/[0.15] bg-white/10 p-1 backdrop-blur",
        !compact && "shadow-sm"
      )}
      aria-label="Language switcher"
    >
      {(["id", "en"] as Locale[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onLocaleChange(item)}
          className={cn(
            "focus-ring min-h-9 rounded-full px-3 text-xs font-bold uppercase transition",
            locale === item
              ? "bg-gold text-deep-navy"
              : "text-white/[0.82] hover:bg-white/10 hover:text-white"
          )}
          aria-pressed={locale === item}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
