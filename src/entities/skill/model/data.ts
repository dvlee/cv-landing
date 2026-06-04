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
