"use client";

import { profile } from "@/entities/profile";
import { useScrollSpy } from "@/shared/lib/use-scroll-spy";

const links = [
  { id: "about", label: "about" },
  { id: "skills", label: "stack" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "more", label: "more" },
];

const sectionIds = links.map((l) => l.id);

export function NavBar() {
  const active = useScrollSpy(sectionIds);

  return (
    <nav className="sticky top-0 z-50 mb-2 w-full border-b border-white/5 bg-void/70 backdrop-blur-xl print:hidden">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">dvlee</span>
          {/* <span className="text-fg/60">.pro</span> */}
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
        <a
          href={`mailto:${profile.email}`}
          className="holo-border rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest text-fg transition hover:text-neon-cyan"
        >
          Связаться
        </a>
      </div>
    </nav>
  );
}
