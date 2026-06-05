import type { Dictionary, RichSegment } from "./ru";

export const en: Dictionary = {
  nav: {
    about: "about",
    stack: "stack",
    projects: "projects",
    experience: "experience",
    education: "education",
    more: "more",
    contact: "Get in touch",
  },
  common: {
    resumeHh: "Resume hh.uz",
  },
  hero: {
    badge: "OPEN TO OPPORTUNITIES",
    lead: [
      { t: "15+ years", em: "fg" },
      { t: " of commercial web development. I build " },
      { t: "fintech", em: "cyan" },
      { t: ", " },
      { t: "banking", em: "cyan" },
      { t: " and " },
      { t: "enterprise", em: "cyan" },
      { t: " solutions with React, Next.js and TypeScript." },
    ] as RichSegment[],
  },
  sections: {
    about: { kicker: "// whoami", title: "About" },
    skills: {
      kicker: "// tech stack",
      title: "Skills",
      familiar: "Familiar, use as needed",
    },
    projects: {
      kicker: "// selected work",
      title: "Projects",
      open: "Open",
    },
    experience: {
      kicker: "// career log",
      title: "Experience",
      now: "Now",
      earlyTitle: "Early experience",
      earlyCaption:
        "2010 — 2020 · markup, WordPress, Drupal, Fullstack (Yii Framework)",
    },
    education: {
      kicker: "// learning log",
      title: "Education",
      higher: "Higher education",
      courses: "Additional training & courses",
    },
    additional: {
      kicker: "// extra modules",
      title: "Additional",
      languages: "Languages",
      workFormat: "Work format",
    },
  },
  footer: {
    ctaPre: "Let's ",
    ctaHi: "build",
    ctaPost: " something great",
    subtitle:
      "Open to interesting projects and offers. Drop me a line — I'll reply fast.",
  },
  print: {
    label: "Download PDF",
    fileName: "Denis Lee CV.pdf",
  },
  meta: {
    title: "Denis Lee — Senior Frontend Engineer",
    description:
      "Online CV of Senior Frontend Engineer Denis Lee. 15+ years of experience with React, Next.js, TypeScript. Tashkent, Uzbekistan.",
  },
};
