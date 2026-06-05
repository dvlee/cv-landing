import type { Locale } from "@/shared/i18n/config";

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

/** Locale-invariant structure: identity, link and timeline flags. */
type JobBase = {
  id: string;
  url?: string;
  current?: boolean;
  compact?: boolean;
};

const base: JobBase[] = [
  { id: "openbank", url: "https://openbank.uz", current: true },
  { id: "uzinfocom", url: "https://uzinfocom.uz" },
  { id: "egov", url: "https://egov.uz" },
  { id: "stylemix", url: "https://stylemixthemes.com", compact: true },
  { id: "freelance", compact: true },
  { id: "petxlab", url: "https://petxlab.com", compact: true },
  { id: "webline", url: "https://webline.uz", compact: true },
  { id: "bits", compact: true },
  { id: "sapphire", url: "https://sapphire.uz", compact: true },
  { id: "datasite", url: "https://datasite.uz", compact: true },
  { id: "tuit", compact: true },
];

type JobContent = Pick<
  Job,
  "company" | "position" | "period" | "duration" | "location" | "points"
>;

const content: Record<Locale, Record<string, JobContent>> = {
  ru: {
    openbank: {
      company: "Openbank",
      position: "Frontend-разработчик",
      period: "Декабрь 2023 — настоящее время",
      duration: "2 года 6 месяцев",
      location: "Ташкент, Узбекистан",
      points: [
        "Развиваю клиентские интерфейсы банковских продуктов на React, Next.js и TypeScript.",
        "Интеграция с бэкендом через REST API и WebSocket для реалтайм-обмена данными.",
        "Оптимизация производительности клиентской части, стабильность и скорость работы.",
        "Code review, поддержка код-стайла, читаемости и масштабируемости кодовой базы.",
        "Менторинг младших разработчиков, помощь в отладке и разборе технических задач.",
      ],
    },
    uzinfocom: {
      company: "UZINFOCOM",
      position: "Frontend-разработчик",
      period: "Сентябрь 2023 — Ноябрь 2023",
      duration: "3 месяца",
      location: "Ташкент, Узбекистан",
      points: [
        "Разработка интерфейсов корпоративного портала на React, TypeScript по методологии Atomic Design.",
        "Создание адаптивных и высокопроизводительных компонентов для улучшения UX.",
        "Оптимизация существующего кода на основе пользовательского фидбэка.",
        "Интеграция с внутренними системами и API для синхронизации данных в реальном времени.",
      ],
    },
    egov: {
      company: "Центр Управления Проектами Электронного Правительства",
      position: "Ведущий специалист · Frontend-разработчик",
      period: "Март 2021 — Август 2023",
      duration: "2 года 6 месяцев",
      location: "Ташкент, Узбекистан",
      points: [
        "Сложные дашборды, веб-сайты и админ-панели на React.js, Next.js, TypeScript, Material UI.",
        "Менторинг 1–2 младших разработчиков, выстраивание архитектурных подходов к компонентам.",
        "Оптимизация UI с акцентом на производительность и масштабируемость под высокую нагрузку.",
        "Интеграция через REST API и WebSocket, кроссбраузерность и адаптивный дизайн.",
      ],
    },
    stylemix: {
      company: "Stylemix Themes",
      position: "Frontend-разработчик",
      period: "Сентябрь 2019 — Август 2020",
      duration: "1 год",
      location: "Ташкент, Узбекистан",
      points: [
        "Разработка и поддержка коммерческих тем для WordPress под требования клиентов.",
        "Оптимизация существующих тем: производительность, совместимость с плагинами, безопасность.",
        "Кроссбраузерная совместимость и адаптивный дизайн.",
      ],
    },
    freelance: {
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
    petxlab: {
      company: "Petxlab",
      position: "Frontend-разработчик",
      period: "Декабрь 2015 — Декабрь 2017",
      duration: "2 года 1 месяц",
      location: "Сеул, Южная Корея",
      points: [
        "Вёрстка макетов и UI для веб и мобильных приложений по современным стандартам.",
        "Интеграция фронтенд-решений в веб-приложение на базе Laravel.",
      ],
    },
    webline: {
      company: "Webline",
      position: "Веб-разработчик",
      period: "Март 2015 — Октябрь 2015",
      duration: "8 месяцев",
      location: "Ташкент, Узбекистан",
      points: [
        "HTML-шаблоны по дизайнам с адаптивностью и кроссбраузерностью.",
        "Сайты и темы для WordPress, оптимизация производительности и UX.",
      ],
    },
    bits: {
      company: "Business Intelligence Technology Solutions (BiTS)",
      position: "Frontend-разработчик",
      period: "Сентябрь 2014 — Декабрь 2014",
      duration: "4 месяца",
      location: "Ташкент, Узбекистан",
      points: [
        "Адаптивные макеты из готовых дизайнов с точным соответствием.",
        "Интеграция вёрстки в веб-приложения, поддержка существующих проектов.",
      ],
    },
    sapphire: {
      company: "Sapphire Promotion Group",
      position: "Fullstack веб-разработчик",
      period: "Апрель 2013 — Сентябрь 2014",
      duration: "1 год 6 месяцев",
      location: "Ташкент, Узбекистан",
      points: [
        "Полный цикл разработки сайтов на Yii Framework: серверная логика, БД, фронтенд.",
        "Адаптивная вёрстка и email-шаблоны для всех популярных почтовых клиентов.",
      ],
    },
    datasite: {
      company: "DataSite Technologies",
      position: "Веб-разработчик",
      period: "Сентябрь 2011 — Март 2013",
      duration: "1 год 7 месяцев",
      location: "Ташкент, Узбекистан",
      points: [
        "Разработка сайтов на CMS Drupal: пользовательские темы и модули.",
        "Поддержка и оптимизация существующих сайтов, адаптивная вёрстка.",
      ],
    },
    tuit: {
      company: "Ташкентский Университет Информационных Технологий",
      position: "HTML-верстальщик",
      period: "Сентябрь 2010 — Июль 2011",
      duration: "11 месяцев",
      location: "Ташкент, Узбекистан",
      points: [
        "Вёрстка адаптивных интерфейсов по современным стандартам.",
        "Интеграция вёрстки с Zend Framework.",
      ],
    },
  },
  en: {
    openbank: {
      company: "Openbank",
      position: "Frontend Developer",
      period: "December 2023 — present",
      duration: "2 years 6 months",
      location: "Tashkent, Uzbekistan",
      points: [
        "Building client interfaces for banking products with React, Next.js and TypeScript.",
        "Backend integration over REST API and WebSocket for realtime data exchange.",
        "Client-side performance optimization, stability and responsiveness.",
        "Code review, maintaining code style, readability and scalability of the codebase.",
        "Mentoring junior developers, helping with debugging and breaking down technical tasks.",
      ],
    },
    uzinfocom: {
      company: "UZINFOCOM",
      position: "Frontend Developer",
      period: "September 2023 — November 2023",
      duration: "3 months",
      location: "Tashkent, Uzbekistan",
      points: [
        "Building corporate-portal interfaces with React and TypeScript following Atomic Design.",
        "Creating responsive, high-performance components to improve UX.",
        "Optimizing existing code based on user feedback.",
        "Integrating with internal systems and APIs for realtime data sync.",
      ],
    },
    egov: {
      company: "E-Government Project Management Center",
      position: "Lead Specialist · Frontend Developer",
      period: "March 2021 — August 2023",
      duration: "2 years 6 months",
      location: "Tashkent, Uzbekistan",
      points: [
        "Complex dashboards, websites and admin panels with React.js, Next.js, TypeScript, Material UI.",
        "Mentoring 1–2 junior developers, shaping architectural approaches to components.",
        "UI optimization focused on performance and scalability under heavy load.",
        "Integration over REST API and WebSocket, cross-browser support and responsive design.",
      ],
    },
    stylemix: {
      company: "Stylemix Themes",
      position: "Frontend Developer",
      period: "September 2019 — August 2020",
      duration: "1 year",
      location: "Tashkent, Uzbekistan",
      points: [
        "Building and maintaining commercial WordPress themes to client requirements.",
        "Optimizing existing themes: performance, plugin compatibility, security.",
        "Cross-browser compatibility and responsive design.",
      ],
    },
    freelance: {
      company: "Freelance / private practice",
      position: "Frontend Developer",
      period: "January 2018 — September 2019",
      duration: "1 year 9 months",
      location: "Remote",
      points: [
        "Building WordPress sites and themes with responsiveness and SEO in mind.",
        "Building and refining React.js components, improving functionality and UX.",
        "Coding email newsletters, templates and layouts with CMS integration.",
      ],
    },
    petxlab: {
      company: "Petxlab",
      position: "Frontend Developer",
      period: "December 2015 — December 2017",
      duration: "2 years 1 month",
      location: "Seoul, South Korea",
      points: [
        "Coding layouts and UI for web and mobile apps to modern standards.",
        "Integrating frontend solutions into a Laravel-based web application.",
      ],
    },
    webline: {
      company: "Webline",
      position: "Web Developer",
      period: "March 2015 — October 2015",
      duration: "8 months",
      location: "Tashkent, Uzbekistan",
      points: [
        "HTML templates from designs with responsiveness and cross-browser support.",
        "WordPress sites and themes, performance and UX optimization.",
      ],
    },
    bits: {
      company: "Business Intelligence Technology Solutions (BiTS)",
      position: "Frontend Developer",
      period: "September 2014 — December 2014",
      duration: "4 months",
      location: "Tashkent, Uzbekistan",
      points: [
        "Responsive layouts from finished designs with pixel-accurate fidelity.",
        "Integrating markup into web apps, maintaining existing projects.",
      ],
    },
    sapphire: {
      company: "Sapphire Promotion Group",
      position: "Fullstack Web Developer",
      period: "April 2013 — September 2014",
      duration: "1 year 6 months",
      location: "Tashkent, Uzbekistan",
      points: [
        "Full-cycle site development on Yii Framework: server logic, database, frontend.",
        "Responsive markup and email templates for all popular mail clients.",
      ],
    },
    datasite: {
      company: "DataSite Technologies",
      position: "Web Developer",
      period: "September 2011 — March 2013",
      duration: "1 year 7 months",
      location: "Tashkent, Uzbekistan",
      points: [
        "Building Drupal CMS sites: custom themes and modules.",
        "Maintaining and optimizing existing sites, responsive markup.",
      ],
    },
    tuit: {
      company: "Tashkent University of Information Technologies",
      position: "HTML Markup Developer",
      period: "September 2010 — July 2011",
      duration: "11 months",
      location: "Tashkent, Uzbekistan",
      points: [
        "Coding responsive interfaces to modern standards.",
        "Integrating markup with Zend Framework.",
      ],
    },
  },
};

export const getExperience = (locale: Locale): Job[] =>
  base.map((b) => ({ ...b, ...content[locale][b.id] }));
