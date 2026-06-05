"use client";

import type { Dictionary } from "@/shared/i18n";
import { type Locale, locales } from "@/shared/i18n/config";
import { useScrollSpy } from "@/shared/lib/use-scroll-spy";

export function NavBar({
  locale,
  nav,
  email,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  email: string;
}) {
  const links = [
    { id: "about", label: nav.about },
    { id: "skills", label: nav.stack },
    { id: "projects", label: nav.projects },
    { id: "experience", label: nav.experience },
    { id: "education", label: nav.education },
    { id: "more", label: nav.more },
  ];

  const active = useScrollSpy(links.map((l) => l.id));

  return (
    <nav className="sticky top-0 z-50 mb-2 w-full border-b border-white/5 bg-void/70 backdrop-blur-xl print:hidden">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">dvlee</span>
        </a>
        <div className="hidden gap-7 font-mono text-xs uppercase tracking-widest md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? "true" : undefined}
              className={`transition ${
                active === l.id
                  ? "text-neon-cyan"
                  : "text-muted hover:text-neon-cyan"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {/* language switch — preserves the in-page hash on a full locale reload */}
          <div className="flex items-center gap-1 font-mono text-xs uppercase">
            {locales.map((l) => (
              <a
                key={l}
                href={`/${l}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/${l}${window.location.hash}`;
                }}
                aria-current={l === locale ? "true" : undefined}
                className={`px-1.5 py-0.5 transition ${
                  l === locale
                    ? "text-neon-cyan"
                    : "text-muted hover:text-neon-cyan"
                }`}
              >
                {l}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${email}`}
            className="holo-border rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest text-fg transition hover:text-neon-cyan"
          >
            {nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}
