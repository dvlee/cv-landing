import { languages } from "@/entities/language";
import { employmentTypes, workFormats } from "@/entities/profile";
import { IconBolt, IconGlobe, Reveal, SectionTitle } from "@/shared/ui";

export function Additional() {
  return (
    <section id="more" className="py-16 sm:py-20">
      <Reveal>
        <SectionTitle
          kicker="// extra modules"
          title="Дополнительно"
          icon={<IconGlobe className="h-7 w-7" />}
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Languages */}
        <Reveal className="glass rounded-2xl p-6">
          <div className="mb-5 flex items-center gap-2.5">
            <IconGlobe className="h-5 w-5 text-neon-cyan" />
            <h3 className="font-display text-lg font-bold">Языки</h3>
          </div>
          <div className="space-y-5">
            {languages.map((l) => (
              <div key={l.name}>
                <div className="flex items-baseline justify-between">
                  <span className="font-medium text-fg">{l.name}</span>
                  <span className="font-mono text-xs text-muted">
                    {l.level}
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple shadow-[0_0_12px_var(--color-neon-cyan)]"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Work format */}
        <Reveal delay={80} className="glass rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-2.5">
            <IconBolt className="h-5 w-5 text-neon-purple" />
            <h3 className="font-display text-lg font-bold">Формат работы</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {workFormats.map((w) => (
              <span
                key={w}
                className="rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 px-3 py-1.5 text-sm text-fg/90"
              >
                {w}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {employmentTypes.map((w) => (
              <span
                key={w}
                className="rounded-lg border border-white/10 px-3 py-1.5 font-mono text-xs text-muted"
              >
                {w}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
