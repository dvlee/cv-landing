export type Emphasis = "fg" | "cyan";

/** A run of text with optional neon emphasis — lets translators re-segment freely. */
export type RichSegment = { t: string; em?: Emphasis };

export const ru = {
  nav: {
    about: "о себе",
    stack: "стек",
    projects: "проекты",
    experience: "опыт",
    education: "обучение",
    more: "ещё",
    contact: "Связаться",
  },
  common: {
    resumeHh: "Резюме hh.uz",
  },
  hero: {
    badge: "ОТКРЫТ К ПРЕДЛОЖЕНИЯМ",
    lead: [
      { t: "15+ лет", em: "fg" },
      { t: " в коммерческой веб-разработке. Создаю " },
      { t: "fintech", em: "cyan" },
      { t: ", " },
      { t: "банковские", em: "cyan" },
      { t: " и " },
      { t: "enterprise", em: "cyan" },
      { t: "-решения на React, Next.js и TypeScript." },
    ] as RichSegment[],
  },
  sections: {
    about: { kicker: "// whoami", title: "Обо мне" },
    skills: {
      kicker: "// tech stack",
      title: "Навыки",
      familiar: "Знаком, использую по необходимости",
    },
    projects: {
      kicker: "// selected work",
      title: "Проекты",
      open: "Открыть",
    },
    experience: {
      kicker: "// career log",
      title: "Опыт работы",
      now: "Сейчас",
      earlyTitle: "Ранний опыт",
      earlyCaption:
        "2010 — 2020 · вёрстка, WordPress, Drupal, Fullstack (Yii Framework)",
    },
    education: {
      kicker: "// learning log",
      title: "Образование",
      higher: "Высшее образование",
      courses: "Дополнительное обучение и курсы",
    },
    additional: {
      kicker: "// extra modules",
      title: "Дополнительно",
      languages: "Языки",
      workFormat: "Формат работы",
    },
  },
  footer: {
    ctaPre: "Давайте ",
    ctaHi: "создадим",
    ctaPost: " что-то крутое",
    subtitle:
      "Открыт к интересным проектам и предложениям. Напишите — отвечу быстро.",
  },
  print: {
    label: "Скачать PDF",
    fileName: "Ли Денис Витальевич.pdf",
  },
  meta: {
    title: "Ли Денис — Senior Frontend Engineer",
    description:
      "Сайт-резюме Senior Frontend Engineer Ли Дениса. 15+ лет опыта, React, Next.js, TypeScript. Ташкент, Узбекистан.",
  },
};

export type Dictionary = typeof ru;
