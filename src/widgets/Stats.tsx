import { getStats } from "@/entities/profile";
import type { Locale } from "@/shared/i18n";
import { Corner, Reveal } from "@/shared/ui";

export function Stats({ locale }: { locale: Locale }) {
  const stats = getStats(locale);

  return (
    <section className="grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 90}
          className="glass relative overflow-hidden rounded-2xl p-5"
        >
          <Corner className="left-2 top-2 border-l-2 border-t-2" />
          <Corner className="right-2 top-2 border-r-2 border-t-2" />
          <Corner className="bottom-2 left-2 border-b-2 border-l-2" />
          <Corner className="bottom-2 right-2 border-b-2 border-r-2" />
          <div className="font-display text-3xl font-extrabold text-gradient sm:text-4xl">
            {s.value}
          </div>
          <div className="mt-1 text-sm font-medium text-fg">{s.label}</div>
          <div className="mt-0.5 font-mono text-xs text-muted">{s.sub}</div>
        </Reveal>
      ))}
    </section>
  );
}
