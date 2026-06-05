import { getCourses, getEducation } from "@/entities/education";
import { getDictionary, type Locale } from "@/shared/i18n";
import { IconCap, IconCert, Reveal, SectionTitle } from "@/shared/ui";

export function Education({ locale }: { locale: Locale }) {
  const education = getEducation(locale);
  const courses = getCourses(locale);
  const { education: t } = getDictionary(locale).sections;

  return (
    <section id="education" className="py-16 sm:py-20">
      <Reveal>
        <SectionTitle
          kicker={t.kicker}
          title={t.title}
          icon={<IconCap className="h-7 w-7" />}
        />
      </Reveal>

      <div className="flex flex-col gap-4">
        {/* Degree */}
        <Reveal className="glass rounded-2xl p-6 sm:p-7">
          <div className="mb-4 flex items-center gap-2.5">
            <IconCap className="h-5 w-5 text-neon-blue" />
            <h3 className="font-display text-lg font-bold">{t.higher}</h3>
          </div>
          <p className="font-medium text-fg">
            {education.degree}, {education.year}
          </p>
          <p className="mt-1 text-sm text-fg/80">{education.place}</p>
          <p className="mt-1 font-mono text-xs text-muted">{education.field}</p>
        </Reveal>

        {/* Courses */}
        <Reveal delay={80} className="glass rounded-2xl p-6 sm:p-7">
          <div className="mb-4 flex items-center gap-2.5">
            <IconCert className="h-5 w-5 text-neon-purple" />
            <h3 className="font-display text-lg font-bold">{t.courses}</h3>
          </div>
          <ul className="space-y-3">
            {courses.map((c) => (
              <li key={c.title} className="flex gap-3">
                <span className="shrink-0 font-mono text-xs text-neon-cyan">
                  {c.year}
                </span>
                <span className="text-sm text-fg/85">
                  {c.title}
                  <span className="text-muted"> · {c.org}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
