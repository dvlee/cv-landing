import { getSkillGroups, getSkillsFamiliar } from "@/entities/skill";
import { getDictionary, type Locale } from "@/shared/i18n";
import { IconLayers, Reveal, SectionTitle, skillIcons } from "@/shared/ui";

export function Skills({ locale }: { locale: Locale }) {
  const skillGroups = getSkillGroups(locale);
  const skillsFamiliar = getSkillsFamiliar(locale);
  const { skills } = getDictionary(locale).sections;

  return (
    <section id="skills" className="py-16 sm:py-20">
      <Reveal>
        <SectionTitle
          kicker={skills.kicker}
          title={skills.title}
          icon={<IconLayers className="h-7 w-7" />}
        />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = skillIcons[group.icon];
          return (
            <Reveal
              key={group.title}
              delay={i * 60}
              className="group glass flex flex-col gap-4 rounded-2xl p-5 transition duration-300 hover:neon-edge"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-neon-violet/25 to-neon-blue/15 text-neon-cyan transition group-hover:from-neon-cyan/30 group-hover:text-neon-blue">
                  {Icon && <Icon className="h-5 w-5" />}
                </span>
                <h3 className="font-display text-base font-bold text-fg">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-neon-purple/20 bg-neon-purple/5 px-2.5 py-1 text-xs font-medium text-fg/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal
        delay={120}
        className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/5 px-5 py-4 sm:flex-row sm:items-center"
      >
        <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted">
          {skills.familiar}
        </span>
        <div className="flex flex-wrap gap-2">
          {skillsFamiliar.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
