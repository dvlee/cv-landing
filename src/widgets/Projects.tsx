import { projects } from "@/entities/project";
import {
  IconExternal,
  IconLock,
  IconRocket,
  Reveal,
  SectionTitle,
} from "@/shared/ui";

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <Reveal>
        <SectionTitle
          kicker="// selected work"
          title="Проекты"
          icon={<IconRocket className="h-7 w-7" />}
        />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal
            as="article"
            key={p.title}
            delay={Math.min(i, 5) * 60}
            className="group glass flex flex-col rounded-2xl p-6 transition duration-300 hover:neon-edge hover:-translate-y-1"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-neon-cyan/80">
                {p.context}
              </span>
              {p.nda ? (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-muted">
                  <IconLock className="h-3 w-3" />
                  NDA
                </span>
              ) : (
                p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Открыть ${p.title}`}
                    className="shrink-0 text-muted transition hover:text-neon-cyan"
                  >
                    <IconExternal className="h-4 w-4" />
                  </a>
                )
              )}
            </div>
            <h3 className="font-display text-lg font-bold text-fg">
              {p.url && !p.nda ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-neon-cyan"
                >
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </h3>
            <p className="mt-1 font-mono text-xs text-neon-purple">{p.role}</p>
            <ul className="mt-4 flex-1 space-y-2">
              {p.points.map((pt) => (
                <li
                  key={pt}
                  className="flex gap-2.5 text-sm leading-relaxed text-fg/80"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-neon-cyan/80" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-neon-purple/20 bg-neon-purple/5 px-2 py-0.5 font-mono text-[11px] text-neon-cyan/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
