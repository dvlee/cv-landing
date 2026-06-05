import type { Locale } from "@/shared/i18n/config";

export type Language = { name: string; level: string; pct: number };

const languagesByLocale: Record<Locale, Language[]> = {
  ru: [
    { name: "Русский", level: "Родной", pct: 100 },
    { name: "Английский", level: "B1 · Средний уровень", pct: 40 },
    { name: "Корейский", level: "Начальный уровень", pct: 20 },
  ],
  en: [
    { name: "Russian", level: "Native", pct: 100 },
    { name: "English", level: "B1 · Intermediate", pct: 40 },
    { name: "Korean", level: "Beginner", pct: 20 },
  ],
};

export const getLanguages = (locale: Locale): Language[] =>
  languagesByLocale[locale];
