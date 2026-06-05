import type { Locale } from "@/shared/i18n/config";

export type Project = {
  title: string;
  context: string;
  role: string;
  url?: string;
  nda?: boolean;
  stack: string[];
  points: string[];
};

/** Locale-invariant structure: link, NDA flag and tech stack. */
type ProjectBase = {
  id: string;
  url?: string;
  nda?: boolean;
  stack: string[];
};

const base: ProjectBase[] = [
  {
    id: "openbank",
    url: "https://openbank.uz",
    stack: ["React", "Next.js", "TypeScript", "REST API"],
  },
  {
    id: "egov",
    url: "https://egov.uz",
    stack: ["React", "Next.js", "TypeScript", "Material UI"],
  },
  {
    id: "ibanking",
    nda: true,
    stack: ["React", "TypeScript", "RTK Query", "WebSocket"],
  },
  {
    id: "portals",
    nda: true,
    stack: ["React", "TypeScript", "Atomic Design", "FSD"],
  },
  {
    id: "dashboards",
    nda: true,
    stack: ["React", "TypeScript", "REST API", "Charts"],
  },
  {
    id: "edms",
    nda: true,
    stack: ["React", "TypeScript", "Material UI"],
  },
];

type ProjectContent = Pick<Project, "title" | "context" | "role" | "points">;

const content: Record<Locale, Record<string, ProjectContent>> = {
  ru: {
    openbank: {
      title: "OpenBank",
      context: "Финтех · онлайн-банк",
      role: "Ведущий фронтенд-разработчик · команда из 5",
      points: [
        "Вёл фронтенд-направление продукта в команде из 5 разработчиков.",
        "Клиентские интерфейсы с интеграцией банковских REST API и WebSocket.",
        "Code review, единый код-стайл и поддерживаемость кодовой базы.",
      ],
    },
    egov: {
      title: "E-Gov — портал госуслуг",
      context: "Госсектор · электронное правительство",
      role: "Ведущий специалист, фронтенд",
      points: [
        "Сложные дашборды, админ-панели и публичные интерфейсы портала.",
        "Менторинг 1–2 младших разработчиков, помощь с архитектурой компонентов.",
        "Кроссбраузерность и адаптивность под массовую пользовательскую нагрузку.",
      ],
    },
    ibanking: {
      title: "Интернет-банкинг — личный кабинет",
      context: "Финтех · веб-банкинг",
      role: "Фронтенд-разработчик",
      points: [
        "Кабинет интернет-банкинга: переводы, платежи, история операций.",
        "Реалтайм-обновления через WebSocket, оптимизация клиентской части.",
      ],
    },
    portals: {
      title: "Корпоративные порталы и информационные системы",
      context: "Enterprise · внутренние системы",
      role: "Фронтенд-разработчик",
      points: [
        "Интерфейсы корпоративных порталов и ИС по Atomic Design / Feature-Sliced Design.",
        "Переиспользуемые компоненты и общие UI-паттерны для ускорения разработки.",
      ],
    },
    dashboards: {
      title: "Админки и аналитические дашборды",
      context: "Enterprise · data-heavy UI",
      role: "Фронтенд-разработчик",
      points: [
        "Админ-панели и дашборды: таблицы, фильтры, визуализация данных.",
        "Юнит-тесты ключевой логики, взаимодействие с QA-командой.",
      ],
    },
    edms: {
      title: "Система электронного документооборота",
      context: "Enterprise · документооборот",
      role: "Фронтенд-разработчик",
      points: [
        "Кабинет ЭДО: работа с документами, статусами и ролями пользователей.",
        "Акцент на доступность (a11y) и удобство для ежедневной работы операторов.",
      ],
    },
  },
  en: {
    openbank: {
      title: "OpenBank",
      context: "Fintech · online bank",
      role: "Lead frontend developer · team of 5",
      points: [
        "Led the product's frontend track in a team of 5 developers.",
        "Client interfaces integrating banking REST APIs and WebSocket.",
        "Code review, unified code style and a maintainable codebase.",
      ],
    },
    egov: {
      title: "E-Gov — public services portal",
      context: "Public sector · e-government",
      role: "Lead specialist, frontend",
      points: [
        "Complex dashboards, admin panels and public portal interfaces.",
        "Mentoring 1–2 junior developers, helping with component architecture.",
        "Cross-browser support and responsiveness for mass user load.",
      ],
    },
    ibanking: {
      title: "Internet banking — personal account",
      context: "Fintech · web banking",
      role: "Frontend developer",
      points: [
        "Internet-banking account: transfers, payments, transaction history.",
        "Realtime updates over WebSocket, client-side optimization.",
      ],
    },
    portals: {
      title: "Corporate portals and information systems",
      context: "Enterprise · internal systems",
      role: "Frontend developer",
      points: [
        "Corporate portal and IS interfaces following Atomic Design / Feature-Sliced Design.",
        "Reusable components and shared UI patterns to speed up development.",
      ],
    },
    dashboards: {
      title: "Admin panels and analytics dashboards",
      context: "Enterprise · data-heavy UI",
      role: "Frontend developer",
      points: [
        "Admin panels and dashboards: tables, filters, data visualization.",
        "Unit tests for core logic, collaboration with the QA team.",
      ],
    },
    edms: {
      title: "Electronic document management system",
      context: "Enterprise · document management",
      role: "Frontend developer",
      points: [
        "EDM workspace: documents, statuses and user roles.",
        "Focus on accessibility (a11y) and day-to-day operator usability.",
      ],
    },
  },
};

export const getProjects = (locale: Locale): Project[] =>
  base.map((b) => ({ ...b, ...content[locale][b.id] }));
