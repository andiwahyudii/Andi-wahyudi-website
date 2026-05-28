import { contentEn } from "@/data/content.en";
import { contentId } from "@/data/content.id";
import type { Locale } from "@/data/types";

export const locales: Locale[] = ["id", "en"];

export const dictionary = {
  id: contentId,
  en: contentEn
} as const;

export type SiteContent = typeof contentId | typeof contentEn;

export function getContent(locale: Locale): SiteContent {
  return dictionary[locale] ?? dictionary.id;
}
