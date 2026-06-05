import type { Locale } from "@/shared/i18n/config";

export type Education = {
  degree: string;
  year: string;
  place: string;
  field: string;
};

const educationByLocale: Record<Locale, Education> = {
  ru: {
    degree: "Бакалавр",
    year: "2011",
    place: "Ташкентский Университет Информационных Технологий",
    field: "Информационные технологии",
  },
  en: {
    degree: "Bachelor's",
    year: "2011",
    place: "Tashkent University of Information Technologies",
    field: "Information Technology",
  },
};

export const getEducation = (locale: Locale): Education =>
  educationByLocale[locale];

export type Course = { year: string; title: string; org: string };

const coursesByLocale: Record<Locale, Course[]> = {
  ru: [
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
  ],
  en: [
    {
      year: "2022",
      title: "MERN Stack Front To Back: Full Stack React, Redux & Node.js",
      org: "Udemy",
    },
    {
      year: "2020",
      title: "React + Redux — Professional Development",
      org: "Udemy",
    },
  ],
};

export const getCourses = (locale: Locale): Course[] => coursesByLocale[locale];
