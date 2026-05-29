import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function IconPhone(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}
export function IconMail(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
export function IconTelegram(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <path d="M21.5 4.3 2.9 11.4c-.9.4-.9 1.6 0 1.9l4.6 1.5 1.8 5.6c.2.7 1.1.9 1.6.3l2.5-2.5 4.6 3.4c.6.4 1.5.1 1.7-.6l3-14.1c.2-1-.7-1.8-1.7-1.6Z" />
      <path d="m7.5 14.8 9.5-6.6-7.2 7.6" />
    </svg>
  );
}
export function IconPin(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
export function IconCar(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <path d="M5 13 6.5 7A2 2 0 0 1 8.4 5.5h7.2A2 2 0 0 1 17.5 7L19 13" />
      <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
      <circle cx="7.5" cy="15.5" r="1" />
      <circle cx="16.5" cy="15.5" r="1" />
    </svg>
  );
}
export function IconGlobe(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </svg>
  );
}
export function IconBriefcase(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </svg>
  );
}
export function IconCap(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <path d="m22 9-10-5L2 9l10 5 10-5Z" />
      <path d="M6 10.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.5" />
    </svg>
  );
}
export function IconCert(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <circle cx="12" cy="9" r="5" />
      <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
    </svg>
  );
}
export function IconBolt(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}
export function IconClock(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
export function IconLayers(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 18l9 5 9-5" />
    </svg>
  );
}

/* ---- Skill / tech icons ---- */
export function IconReact(p: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}
export function IconNext(p: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="12" r="9.3" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8.5 8v8M8.5 8l7.2 9M15.5 8.6V14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function IconTs(p: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...p}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M7 10h5M9.5 10v6M14 15.5c.6.6 3.2 1 3.2-1 0-1.8-3-1.2-3-3 0-1.8 2.5-1.5 3-.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function IconJs(p: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...p}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M9 9.5v5c0 1.6-2.4 1.7-2.8.3M13 15.2c.5.7 3 1.1 3-.7 0-1.7-2.8-1.2-2.8-2.9 0-1.6 2.3-1.4 2.8-.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function IconRedux(p: P) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      {...p}
    >
      <circle cx="9" cy="7" r="2" />
      <circle cx="17" cy="13" r="2" />
      <circle cx="8" cy="18" r="2" />
      <path d="M10.7 7.6c3 .4 5 2 5.5 4.2M7.4 8.6C6 10.4 6 13 8 15M10 18c2.5.3 5-.6 6.2-2.6" />
    </svg>
  );
}
export function IconApi(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4M13 6l-2 12" />
    </svg>
  );
}
export function IconGit(p: P) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      {...p}
    >
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="9" r="2" />
      <path d="M6 8v8M6 13h6a3 3 0 0 0 3-3V11" />
    </svg>
  );
}
export function IconCss(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <path d="M5 3h14l-1.4 15L12 20l-5.6-2L5 3Z" />
      <path d="M8.5 8h7l-.5 5-3 1-3-1" />
    </svg>
  );
}
export function IconTeam(p: P) {
  return (
    <svg aria-hidden="true" {...base} {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6" />
    </svg>
  );
}

export const skillIcons: Record<string, (p: P) => React.ReactNode> = {
  react: IconReact,
  next: IconNext,
  ts: IconTs,
  js: IconJs,
  redux: IconRedux,
  api: IconApi,
  git: IconGit,
  layout: IconLayers,
  css: IconCss,
  team: IconTeam,
};
