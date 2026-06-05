import type { Locale } from "@/shared/i18n/config";

export type SkillGroup = { title: string; icon: string; items: string[] };

/** Locale-invariant: group identity and icon. */
const base: { id: string; icon: string }[] = [
  { id: "core", icon: "react" },
  { id: "state", icon: "redux" },
  { id: "ui", icon: "css" },
  { id: "arch", icon: "layout" },
  { id: "api", icon: "api" },
  { id: "quality", icon: "team" },
];

type GroupContent = { title: string; items: string[] };

const content: Record<Locale, Record<string, GroupContent>> = {
  ru: {
    core: {
      title: "Core",
      items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
    },
    state: {
      title: "State & Data",
      items: ["Redux Toolkit", "RTK Query", "TanStack Query", "Zustand"],
    },
    ui: {
      title: "UI & стили",
      items: [
        "Material UI",
        "Tailwind CSS",
        "SCSS / CSS Modules",
        "styled-components",
        "shadcn/ui",
      ],
    },
    arch: {
      title: "Архитектура",
      items: ["Atomic Design", "Feature-Sliced Design", "Дизайн-системы"],
    },
    api: {
      title: "API & Realtime",
      items: ["REST API", "WebSocket", "GraphQL", "Axios"],
    },
    quality: {
      title: "Качество & процессы",
      items: [
        "Code review",
        "Менторинг",
        "Core Web Vitals / перформанс",
        "Доступность (a11y)",
        "Git",
      ],
    },
  },
  en: {
    core: {
      title: "Core",
      items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
    },
    state: {
      title: "State & Data",
      items: ["Redux Toolkit", "RTK Query", "TanStack Query", "Zustand"],
    },
    ui: {
      title: "UI & Styling",
      items: [
        "Material UI",
        "Tailwind CSS",
        "SCSS / CSS Modules",
        "styled-components",
        "shadcn/ui",
      ],
    },
    arch: {
      title: "Architecture",
      items: ["Atomic Design", "Feature-Sliced Design", "Design systems"],
    },
    api: {
      title: "API & Realtime",
      items: ["REST API", "WebSocket", "GraphQL", "Axios"],
    },
    quality: {
      title: "Quality & Process",
      items: [
        "Code review",
        "Mentoring",
        "Core Web Vitals / performance",
        "Accessibility (a11y)",
        "Git",
      ],
    },
  },
};

export const getSkillGroups = (locale: Locale): SkillGroup[] =>
  base.map((b) => ({ icon: b.icon, ...content[locale][b.id] }));

// Понимание есть, использую по необходимости (не основной фокус) — tech names, locale-invariant.
const skillsFamiliar = [
  "Jest",
  "Vitest",
  "Playwright",
  "Vite",
  "Webpack",
  "ESLint",
  "Biome / Prettier",
  "CI/CD",
];

export const getSkillsFamiliar = (_locale: Locale): string[] => skillsFamiliar;
