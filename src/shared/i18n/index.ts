import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { type Dictionary, ru } from "./dictionaries/ru";

export * from "./config";
export type { Dictionary, Emphasis, RichSegment } from "./dictionaries/ru";

const dictionaries: Record<Locale, Dictionary> = { ru, en };

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];
