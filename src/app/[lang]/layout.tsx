import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Science_Gothic } from "next/font/google";
import { notFound } from "next/navigation";
import { getProfile } from "@/entities/profile";
import { getDictionary, hasLocale, type Locale, locales } from "@/shared/i18n";
import "../globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const scienceGothic = Science_Gothic({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
});

// Roboto / Roboto Mono подключаем как variable-шрифты (рекомендация next/font):
// один файл на всё семейство, веса не перечисляем. Оба включают кириллицу —
// в отличие от прежнего Space Grotesk, у которого её не было.
const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = getDictionary(lang);
  const profile = getProfile(lang);
  const { title, description } = dict.meta;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    applicationName: title,
    authors: [{ name: profile.name }],
    keywords: [
      "Senior Frontend",
      "Frontend Engineer",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "fintech",
      lang === "ru" ? "Ташкент" : "Tashkent",
      profile.name,
    ],
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ru: "/ru",
        en: "/en",
        "x-default": "/ru",
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: lang === "ru" ? "ru_RU" : "en_US",
      url: `/${lang}`,
      siteName: title,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function personJsonLd(locale: Locale) {
  const profile = getProfile(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.shortName,
    jobTitle: "Senior Frontend Engineer",
    email: `mailto:${profile.email}`,
    telephone: profile.phoneRaw,
    url: `${siteUrl}/${locale}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "ru" ? "Ташкент" : "Tashkent",
      addressCountry: "UZ",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Frontend",
    ],
    sameAs: [profile.github, profile.linkedin, profile.hh, profile.telegramUrl],
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${scienceGothic.variable} ${roboto.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data injection is the standard pattern
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd(lang)),
          }}
        />
        {children}
      </body>
    </html>
  );
}
