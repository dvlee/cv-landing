export const profile = {
  name: "Ли Денис Витальевич",
  shortName: "Денис Ли",
  role: "Senior Frontend Engineer",
  age: "37 лет",
  born: "18 мая 1989",
  location: "г. Ташкент, Узбекистан",
  // relocation: "Не готов к переезду · готов к редким командировкам",
  phone: "+998 (90) 321-44-66",
  phoneRaw: "+998903214466",
  telegram: "@dvlee69",
  telegramUrl: "https://t.me/dvlee69",
  email: "dvlee69@gmail.com",
  github: "https://github.com/dvlee",
  linkedin: "https://www.linkedin.com/in/dvlee69/",
  hh: "https://tashkent.hh.uz/resume/6d4ad8eeff071d67790039ed1f395454374a51",
  about:
    "Основной мой фокус — фронтенд на React, Next.js и TypeScript, но у меня также есть опыт работы с бэкэндом на PHP (Yii, WordPress, Drupal). Я постоянно развиваюсь и расширяю свои знания: решаю алгоритмические задачи на Codewars, что помогает улучшать логическое мышление и навыки оптимизации, а также интересуюсь Node.js, Python и Docker, чтобы углубить знания в бэкэнде и DevOps.",
};

export const stats = [
  { value: "15+", label: "лет в разработке", sub: "15 лет 9 месяцев" },
  { value: "11", label: "компаний и проектов", sub: "от стартапов до e-gov" },
  { value: "Senior", label: "уровень", sub: "Frontend / React" },
  { value: "B1", label: "английский", sub: "+ корейский A1" },
];

export const employmentTypes = [
  "Полная занятость",
  "Частичная занятость",
  "Проектная работа",
];

export const workFormats = ["На месте работодателя", "Удалённо", "Гибрид"];

export type SkillGroup = { title: string; icon: string; items: string[] };
export const skillGroups: SkillGroup[] = [
  {
    title: "Core",
    icon: "react",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    title: "State & Data",
    icon: "redux",
    items: ["Redux Toolkit", "RTK Query", "TanStack Query", "Zustand"],
  },
  {
    title: "UI & стили",
    icon: "css",
    items: [
      "Material UI",
      "Tailwind CSS",
      "SCSS / CSS Modules",
      "styled-components",
      "shadcn/ui",
    ],
  },
  {
    title: "Архитектура",
    icon: "layout",
    items: ["Atomic Design", "Feature-Sliced Design", "Дизайн-системы"],
  },
  {
    title: "API & Realtime",
    icon: "api",
    items: ["REST API", "WebSocket", "GraphQL", "Axios"],
  },
  {
    title: "Качество & процессы",
    icon: "team",
    items: [
      "Code review",
      "Менторинг",
      "Core Web Vitals / перформанс",
      "Доступность (a11y)",
      "Git",
    ],
  },
];

// Понимание есть, использую по необходимости (не основной фокус)
export const skillsFamiliar = [
  "Jest",
  "Vitest",
  "Playwright",
  "Vite",
  "Webpack",
  "ESLint",
  "Biome / Prettier",
  "CI/CD",
];

export type Project = {
  title: string;
  context: string;
  role: string;
  url?: string;
  nda?: boolean;
  stack: string[];
  points: string[];
};

export const projects: Project[] = [
  {
    title: "OpenBank",
    context: "Финтех · онлайн-банк",
    role: "Ведущий фронтенд-разработчик",
    url: "https://openbank.uz",
    stack: ["React", "Next.js", "TypeScript", "REST API"],
    points: [
      "Организация архитектуры веб-приложения",
      "Клиентские интерфейсы с интеграцией банковских REST API и WebSocket.",
      "Code review, единый код-стайл и поддерживаемость кодовой базы.",
    ],
  },
  {
    title: "E-Gov — портал госуслуг",
    context: "Госсектор · электронное правительство",
    role: "Ведущий специалист, фронтенд",
    url: "https://egov.uz",
    stack: ["React", "Next.js", "TypeScript", "Material UI"],
    points: [
      "Сложные дашборды, админ-панели и публичные интерфейсы портала.",
      "Менторинг младших разработчиков, помощь с архитектурой компонентов.",
      "Кроссбраузерность и адаптивность под массовую пользовательскую нагрузку.",
    ],
  },
  {
    title: "Интернет-банкинг — личный кабинет",
    context: "Финтех · веб-банкинг",
    role: "Фронтенд-разработчик",
    nda: true,
    stack: ["React", "TypeScript", "RTK Query", "WebSocket"],
    points: [
      "Кабинет интернет-банкинга: переводы, платежи, история операций.",
      "Реалтайм-обновления через WebSocket, оптимизация клиентской части.",
    ],
  },
  {
    title: "Корпоративные порталы и информационные системы",
    context: "Enterprise · внутренние системы",
    role: "Фронтенд-разработчик",
    nda: true,
    stack: ["React", "TypeScript", "Atomic Design", "FSD"],
    points: [
      "Интерфейсы корпоративных порталов и ИС по Atomic Design / Feature-Sliced Design.",
      "Переиспользуемые компоненты и общие UI-паттерны для ускорения разработки.",
    ],
  },
  {
    title: "Админки и аналитические дашборды",
    context: "Enterprise · data-heavy UI",
    role: "Фронтенд-разработчик",
    nda: true,
    stack: ["React", "TypeScript", "REST API", "Charts"],
    points: [
      "Админ-панели и дашборды: таблицы, фильтры, визуализация данных.",
      "Юнит-тесты ключевой логики, взаимодействие с QA-командой.",
    ],
  },
  {
    title: "Система электронного документооборота",
    context: "Enterprise · документооборот",
    role: "Фронтенд-разработчик",
    nda: true,
    stack: ["React", "TypeScript", "Material UI"],
    points: [
      "Кабинет ЭДО: работа с документами, статусами и ролями пользователей.",
      "Акцент на доступность (a11y) и удобство для ежедневной работы операторов.",
    ],
  },
];

export type Job = {
  company: string;
  url?: string;
  position: string;
  period: string;
  duration: string;
  location: string;
  points: string[];
  current?: boolean;
  compact?: boolean;
};

export const experience: Job[] = [
  {
    company: "Smartbank",
    url: "https://smartbank.uz",
    position: "Frontend-разработчик",
    period: "Декабрь 2023 — настоящее время",
    duration: "2 года 6 месяцев",
    location: "Ташкент",
    current: true,
    points: [
      "Развиваю клиентские интерфейсы банковских продуктов на React, Next.js и TypeScript.",
      "Интеграция с бэкендом через REST API и WebSocket для реалтайм-обмена данными.",
      "Оптимизация производительности клиентской части (Core Web Vitals), стабильность и скорость работы.",
      "Code review, поддержка код-стайла, читаемости и масштабируемости кодовой базы.",
      "Менторинг младших разработчиков, помощь в отладке и разборе технических задач.",
    ],
  },
  {
    company: "UZINFOCOM",
    url: "https://uzinfocom.uz",
    position: "Frontend-разработчик",
    period: "Сентябрь 2023 — Ноябрь 2023",
    duration: "3 месяца",
    location: "Ташкент",
    points: [
      "Разработка интерфейсов корпоративного портала на React, TypeScript по методологии Atomic Design.",
      "Создание адаптивных и высокопроизводительных компонентов для улучшения UX.",
      "Оптимизация существующего кода на основе пользовательского фидбэка.",
      "Интеграция с внутренними системами и API для синхронизации данных в реальном времени.",
    ],
  },
  {
    company: "Центр Управления Проектами Электронного Правительства",
    url: "https://egov.uz",
    position: "Ведущий специалист · Frontend-разработчик",
    period: "Март 2021 — Август 2023",
    duration: "2 года 6 месяцев",
    location: "Ташкент",
    points: [
      "Сложные дашборды, веб-сайты и админ-панели на React.js, Next.js, TypeScript, Material UI.",
      "Менторинг 1–2 младших разработчиков, выстраивание архитектурных подходов к компонентам.",
      "Оптимизация UI с акцентом на производительность и масштабируемость под высокую нагрузку.",
      "Интеграция через REST API и WebSocket, кроссбраузерность и адаптивный дизайн.",
    ],
  },
  {
    company: "Stylemix Themes",
    url: "https://stylemixthemes.com",
    position: "Frontend-разработчик",
    period: "Сентябрь 2019 — Август 2020",
    duration: "1 год",
    location: "Ташкент",
    points: [
      "Разработка и поддержка коммерческих тем для WordPress под требования клиентов.",
      "Оптимизация существующих тем: производительность, совместимость с плагинами, безопасность.",
      "Кроссбраузерная совместимость и адаптивный дизайн.",
    ],
  },
  {
    company: "Фриланс / частная практика",
    position: "Frontend-разработчик",
    period: "Январь 2018 — Сентябрь 2019",
    duration: "1 год 9 месяцев",
    location: "Удалённо",
    points: [
      "Разработка сайтов и тем для WordPress с учётом адаптивности и SEO.",
      "Разработка и доработка компонентов на React.js, улучшение функционала и UX.",
      "Вёрстка email-писем, шаблонов и макетов с интеграцией в CMS.",
    ],
  },
  {
    company: "Petxlab",
    url: "https://petxlab.com",
    position: "Frontend-разработчик",
    period: "Декабрь 2015 — Декабрь 2017",
    duration: "2 года 1 месяц",
    location: "Южная Корея",
    points: [
      "Вёрстка макетов и UI для веб и мобильных приложений по современным стандартам.",
      "Интеграция фронтенд-решений в веб-приложение на базе Laravel.",
    ],
  },
  {
    company: "Webline",
    url: "https://webline.uz",
    position: "Веб-разработчик",
    period: "Март 2015 — Октябрь 2015",
    duration: "8 месяцев",
    location: "Ташкент",
    compact: true,
    points: [
      "HTML-шаблоны по дизайнам с адаптивностью и кроссбраузерностью.",
      "Сайты и темы для WordPress, оптимизация производительности и UX.",
    ],
  },
  {
    company: "Business Intelligence Technology Solutions (BiTS)",
    position: "Frontend-разработчик",
    period: "Сентябрь 2014 — Декабрь 2014",
    duration: "4 месяца",
    location: "Ташкент",
    compact: true,
    points: [
      "Адаптивные макеты из готовых дизайнов с точным соответствием.",
      "Интеграция вёрстки в веб-приложения, поддержка существующих проектов.",
    ],
  },
  {
    company: "Sapphire Promotion Group",
    url: "https://sapphire.uz",
    position: "Fullstack веб-разработчик",
    period: "Апрель 2013 — Сентябрь 2014",
    duration: "1 год 6 месяцев",
    location: "Ташкент",
    compact: true,
    points: [
      "Полный цикл разработки сайтов на Yii Framework: серверная логика, БД, фронтенд.",
      "Адаптивная вёрстка и email-шаблоны для всех популярных почтовых клиентов.",
    ],
  },
  {
    company: "DataSite Technologies",
    url: "https://datasite.uz",
    position: "Веб-разработчик",
    period: "Сентябрь 2011 — Март 2013",
    duration: "1 год 7 месяцев",
    location: "Ташкент",
    compact: true,
    points: [
      "Разработка сайтов на CMS Drupal: пользовательские темы и модули.",
      "Поддержка и оптимизация существующих сайтов, адаптивная вёрстка.",
    ],
  },
  {
    company: "Ташкентский Университет Информационных Технологий",
    position: "HTML-верстальщик",
    period: "Сентябрь 2010 — Июль 2011",
    duration: "11 месяцев",
    location: "Ташкент",
    compact: true,
    points: [
      "Вёрстка адаптивных интерфейсов по современным стандартам.",
      "Интеграция вёрстки с Zend Framework.",
    ],
  },
];

export const languages = [
  { name: "Русский", level: "Родной", pct: 100 },
  { name: "Английский", level: "B1 · Средний", pct: 60 },
  { name: "Корейский", level: "A1 · Базовый", pct: 25 },
];

export const education = {
  degree: "Бакалавр",
  year: "2011",
  place: "Ташкентский Университет Информационных Технологий",
  field: "Информационные технологии",
};

export const courses = [
  {
    year: "2022",
    title: "MERN Stack Front To Back: Full Stack React, Redux & Node.js",
    org: "Udemy",
  },
  {
    year: "2020",
    title: "React + Redux — Профессиональная Разработка",
    org: "Udemy",
  },
];
