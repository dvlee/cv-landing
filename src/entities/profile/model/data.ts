import type { Locale } from "@/shared/i18n/config";

/** Locale-invariant contact details and role. */
const contacts = {
  role: "Senior Frontend Engineer",
  phone: "+998 (90) 321-44-66",
  phoneRaw: "+998903214466",
  telegram: "@dvlee69",
  telegramUrl: "https://t.me/dvlee69",
  email: "dvlee69@gmail.com",
  github: "https://github.com/dvlee",
  linkedin: "https://www.linkedin.com/in/dvlee69/",
  hh: "https://tashkent.hh.uz/resume/6d4ad8eeff071d67790039ed1f395454374a51",
};

const localized: Record<
  Locale,
  {
    name: string;
    shortName: string;
    age: string;
    born: string;
    location: string;
    about: string;
  }
> = {
  ru: {
    name: "Ли Денис Витальевич",
    shortName: "Денис Ли",
    age: "37 лет",
    born: "18 мая 1989",
    location: "г. Ташкент, Узбекистан",
    about:
      "Основной мой фокус — фронтенд на React, Next.js и TypeScript, но у меня также есть опыт работы с бэкэндом на PHP (Yii, WordPress, Drupal). Я постоянно развиваюсь и расширяю свои знания: решаю алгоритмические задачи на Codewars, что помогает улучшать логическое мышление и навыки оптимизации, а также интересуюсь Node.js, Python и Docker, чтобы углубить знания в бэкэнде и DevOps.",
  },
  en: {
    name: "Denis Lee",
    shortName: "Denis Lee",
    age: "37 years",
    born: "May 18, 1989",
    location: "Tashkent, Uzbekistan",
    about:
      "My main focus is frontend with React, Next.js and TypeScript, but I also have backend experience with PHP (Yii, WordPress, Drupal). I keep growing and expanding my knowledge: I solve algorithmic problems on Codewars, which sharpens my logical thinking and optimization skills, and I'm into Node.js, Python and Docker to deepen my backend and DevOps expertise.",
  },
};

export const getProfile = (locale: Locale) => ({
  ...contacts,
  ...localized[locale],
});

export type Profile = ReturnType<typeof getProfile>;

export type Stat = { value: string; label: string; sub: string };

const statsByLocale: Record<Locale, Stat[]> = {
  ru: [
    { value: "15+", label: "лет в разработке", sub: "15 лет 9 месяцев" },
    { value: "11", label: "компаний и проектов", sub: "от стартапов до e-gov" },
    { value: "Senior", label: "уровень", sub: "Frontend / React" },
    { value: "B1", label: "английский", sub: "+ корейский A1" },
  ],
  en: [
    { value: "15+", label: "years in development", sub: "15 years 9 months" },
    {
      value: "11",
      label: "companies & projects",
      sub: "from startups to e-gov",
    },
    { value: "Senior", label: "level", sub: "Frontend / React" },
    { value: "B1", label: "English", sub: "+ Korean A1" },
  ],
};

export const getStats = (locale: Locale): Stat[] => statsByLocale[locale];

const employmentTypesByLocale: Record<Locale, string[]> = {
  ru: ["Полная занятость", "Частичная занятость", "Проектная работа"],
  en: ["Full-time", "Part-time", "Project work"],
};

export const getEmploymentTypes = (locale: Locale): string[] =>
  employmentTypesByLocale[locale];

const workFormatsByLocale: Record<Locale, string[]> = {
  ru: ["На месте работодателя", "Удалённо", "Гибрид"],
  en: ["On-site", "Remote", "Hybrid"],
};

export const getWorkFormats = (locale: Locale): string[] =>
  workFormatsByLocale[locale];
