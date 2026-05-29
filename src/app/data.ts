export const profile = {
  name: "Ли Денис Витальевич",
  shortName: "Денис Ли",
  role: "Senior Frontend (React.js) Developer",
  age: "37 лет",
  born: "18 мая 1989",
  location: "г. Ташкент, Узбекистан",
  // relocation: "Не готов к переезду · готов к редким командировкам",
  phone: "+998 (90) 321-44-66",
  phoneRaw: "+998903214466",
  telegram: "@dvlee69",
  telegramUrl: "https://t.me/dvlee69",
  email: "dvlee69@gmail.com",
  about:
    "Основной мой фокус — фронтенд на React, Next.js и TypeScript, но у меня также есть опыт работы с бэкэндом на PHP (Yii, WordPress, Drupal). Я постоянно развиваюсь и расширяю свои знания: решаю алгоритмические задачи на Codewars, что помогает улучшать логическое мышление и навыки оптимизации, а также интересуюсь Node.js, Python и Docker, чтобы углубить знания в бэкэнде и DevOps.",
};

export const stats = [
  { value: "14+", label: "лет в разработке", sub: "14 лет 11 месяцев" },
  { value: "12", label: "компаний и проектов", sub: "от стартапов до e-gov" },
  { value: "Senior", label: "уровень", sub: "Frontend / React" },
  { value: "B1", label: "английский", sub: "+ корейский A1" },
];

export const employmentTypes = [
  "Полная занятость",
  "Частичная занятость",
  "Проектная работа",
];

export const workFormats = ["На месте работодателя", "Удалённо", "Гибрид"];

export type Skill = { name: string; icon: string };
export const skills: Skill[] = [
  { name: "React.JS", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "TypeScript", icon: "ts" },
  { name: "JavaScript", icon: "js" },
  { name: "React-Redux", icon: "redux" },
  { name: "RTK Query", icon: "redux" },
  { name: "REST API", icon: "api" },
  { name: "Git", icon: "git" },
  { name: "Кроссбраузерная вёрстка", icon: "layout" },
  { name: "БЭМ", icon: "css" },
  { name: "Работа в команде", icon: "team" },
];

export type Job = {
  company: string;
  url?: string;
  position: string;
  period: string;
  duration: string;
  location: string;
  points: string[];
};

export const experience: Job[] = [
  {
    company: "Smartbank",
    url: "https://smartbank.uz",
    position: "Frontend-разработчик",
    period: "Декабрь 2023 — настоящее время",
    duration: "2 года 6 месяцев",
    location: "Ташкент",
    points: [
      "Создание и поддержка пользовательских интерфейсов на React, Next.js, TypeScript.",
      "Разработка удобных и интуитивно понятных интерфейсов взаимодействия с системой.",
      "Интеграция с бэкендом через REST API и WebSocket для быстрого обмена данными.",
      "Оптимизация производительности клиентской части, стабильность и скорость работы.",
      "Код-ревью: оценка кода коллег, контроль стандартов, читабельности и поддерживаемости.",
      "Консультирование, помощь в отладке кода и разборе технических задач.",
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
      "Сложные интерфейсы дашбордов, веб-сайтов и админ-панелей на React.js, Next.js, TypeScript, MaterialUI.",
      "Создание и оптимизация UI с акцентом на производительность и масштабируемость.",
      "Интеграция с бэкендом через REST API и WebSocket.",
      "Кроссбраузерная совместимость, адаптивный дизайн, исправление багов и новые возможности.",
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
    points: [
      "Вёрстка адаптивных интерфейсов по современным стандартам.",
      "Интеграция вёрстки с Zend Framework.",
    ],
  },
];

export const languages = [
  { name: "Русский", level: "Родной", pct: 100 },
  { name: "Английский", level: "B2 · Средне-продвинутый", pct: 75 },
  { name: "Корейский", level: "A2 · Элементарный", pct: 35 },
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
