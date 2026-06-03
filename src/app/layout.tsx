import type { Metadata } from "next";
import {
  JetBrains_Mono,
  Science_Gothic,
  Space_Grotesk,
} from "next/font/google";
import { profile } from "./data";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Ли Денис — Senior Frontend Engineer";
const description =
  "Сайт-резюме Senior Frontend Engineer Ли Дениса. 15+ лет опыта, React, Next.js, TypeScript. Ташкент, Узбекистан.";

const unbounded = Science_Gothic({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: title,
  authors: [{ name: profile.name }],
  keywords: [
    "Senior Frontend",
    "Frontend разработчик",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "fintech",
    "Ташкент",
    "Ли Денис",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.shortName,
  jobTitle: "Senior Frontend Engineer",
  email: `mailto:${profile.email}`,
  telephone: profile.phoneRaw,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ташкент",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data injection is the standard pattern
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
