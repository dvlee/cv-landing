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
    role: "Ведущий фронтенд-разработчик · команда из 5",
    url: "https://openbank.uz",
    stack: ["React", "Next.js", "TypeScript", "REST API"],
    points: [
      "Вёл фронтенд-направление продукта в команде из 5 разработчиков.",
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
      "Менторинг 1–2 младших разработчиков, помощь с архитектурой компонентов.",
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
