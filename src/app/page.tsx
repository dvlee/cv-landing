import Image from "next/image";
import {
  IconBolt,
  IconBriefcase,
  IconCap,
  IconCar,
  IconCert,
  IconClock,
  IconGlobe,
  IconLayers,
  IconMail,
  IconPhone,
  IconPin,
  IconTelegram,
  skillIcons,
} from "./components/icons";
import Reveal from "./components/Reveal";
import {
  courses,
  education,
  employmentTypes,
  experience,
  languages,
  profile,
  skills,
  stats,
  workFormats,
} from "./data";

function SectionTitle({
  kicker,
  title,
  icon,
}: {
  kicker: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-[0.35em] text-neon-cyan/80">
        {kicker}
      </span>
      <h2 className="flex items-center gap-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {icon && <span className="text-neon-purple">{icon}</span>}
        <span className="text-fg">{title}</span>
      </h2>
      <div className="mt-1 h-px w-28 bg-gradient-to-r from-neon-cyan via-neon-purple to-transparent" />
    </div>
  );
}

function Corner({ className }: { className: string }) {
  return (
    <span
      className={`pointer-events-none absolute h-5 w-5 border-neon-cyan/70 ${className}`}
    />
  );
}

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
      {/* ============ NAV ============ */}
      <nav className="sticky top-0 z-50 -mx-5 mb-2 flex items-center justify-between border-b border-white/5 bg-void/70 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">DL</span>
          <span className="text-fg/60">_dev</span>
        </a>
        <div className="hidden gap-7 font-mono text-xs uppercase tracking-widest text-muted md:flex">
          <a className="transition hover:text-neon-cyan" href="#about">
            about
          </a>
          <a className="transition hover:text-neon-cyan" href="#skills">
            stack
          </a>
          <a className="transition hover:text-neon-cyan" href="#experience">
            experience
          </a>
          <a className="transition hover:text-neon-cyan" href="#more">
            more
          </a>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="holo-border rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest text-fg transition hover:text-neon-cyan"
        >
          Связаться
        </a>
      </nav>

      {/* ============ HERO ============ */}
      <section
        id="top"
        className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div className="reveal order-2 lg:order-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1.5 font-mono text-xs tracking-widest text-neon-cyan animate-pulse-glow">
            <span className="h-2 w-2 rounded-full bg-neon-cyan shadow-[0_0_10px_2px_var(--color-neon-cyan)]" />
            ОТКРЫТ К ПРЕДЛОЖЕНИЯМ
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-fg">Ли Денис</span>
            <br />
            <span className="text-gradient">Витальевич</span>
          </h1>

          <p className="mt-5 max-w-xl font-mono text-base text-neon-cyan/90 sm:text-lg">
            {"<"} {profile.role} {"/>"}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {profile.age} · {profile.location}. {profile.relocation}.
          </p>

          {/* contacts */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${profile.phoneRaw}`}
              className="group glass inline-flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm transition hover:neon-edge"
            >
              <IconPhone className="h-5 w-5 text-neon-cyan" />
              <span className="text-fg">{profile.phone}</span>
            </a>
            <a
              href={profile.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass inline-flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm transition hover:neon-edge"
            >
              <IconTelegram className="h-5 w-5 text-neon-blue" />
              <span className="text-fg">{profile.telegram}</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group glass inline-flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm transition hover:neon-edge"
            >
              <IconMail className="h-5 w-5 text-neon-purple" />
              <span className="text-fg">{profile.email}</span>
            </a>
          </div>
        </div>

        {/* photo */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative animate-float">
            {/* rotating glow ring */}
            <div className="absolute -inset-6 -z-10 rounded-full bg-[conic-gradient(from_0deg,var(--color-neon-cyan),var(--color-neon-purple),var(--color-neon-pink),var(--color-neon-cyan))] opacity-30 blur-2xl animate-spin-slow" />
            <div className="holo-border relative h-64 w-64 overflow-hidden rounded-full sm:h-80 sm:w-80">
              <Image
                src="/me.png"
                alt={`${profile.name} — ${profile.role}`}
                fill
                priority
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-neon-cyan/30" />
            </div>
            {/* orbit badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-neon-cyan/40 bg-void px-4 py-1.5 font-mono text-xs tracking-widest text-neon-cyan">
              React · Next · TS
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
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

      {/* ============ ABOUT ============ */}
      <section id="about" className="py-16 sm:py-20">
        <Reveal>
          <SectionTitle
            kicker="// whoami"
            title="Обо мне"
            icon={<IconBolt className="h-7 w-7" />}
          />
        </Reveal>
        <Reveal delay={120} className="glass rounded-2xl p-7 sm:p-9">
          <p className="text-lg leading-relaxed text-fg/90">{profile.about}</p>
          <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
            {["Codewars", "Node.js", "Python", "Docker", "DevOps"].map((t) => (
              <span
                key={t}
                className="rounded-md border border-neon-purple/25 bg-neon-purple/5 px-3 py-1.5 text-neon-cyan/90"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============ SKILLS ============ */}
      <section id="skills" className="py-16 sm:py-20">
        <Reveal>
          <SectionTitle
            kicker="// tech stack"
            title="Навыки"
            icon={<IconLayers className="h-7 w-7" />}
          />
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((sk, i) => {
            const Icon = skillIcons[sk.icon];
            return (
              <Reveal
                key={sk.name}
                delay={i * 60}
                className="group glass flex items-center gap-3 rounded-xl p-4 transition duration-300 hover:neon-edge hover:-translate-y-1"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-neon-violet/25 to-neon-blue/15 text-neon-cyan transition group-hover:from-neon-cyan/30 group-hover:text-neon-blue">
                  {Icon && <Icon className="h-6 w-6" />}
                </span>
                <span className="text-sm font-medium text-fg">{sk.name}</span>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section id="experience" className="py-16 sm:py-20">
        <Reveal>
          <SectionTitle
            kicker="// career log"
            title="Опыт работы"
            icon={<IconBriefcase className="h-7 w-7" />}
          />
        </Reveal>

        <div className="relative pl-6 sm:pl-8">
          {/* timeline line */}
          <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent sm:left-1.5" />
          <div className="flex flex-col gap-6">
            {experience.map((job, i) => (
              <Reveal
                as="article"
                key={job.company + job.period}
                delay={Math.min(i, 4) * 60}
                className="relative"
              >
                {/* node */}
                <span className="absolute -left-[26px] top-6 h-3 w-3 rounded-full bg-neon-cyan shadow-[0_0_12px_3px_var(--color-neon-cyan)] sm:-left-[34px]" />
                <div className="glass rounded-2xl p-6 transition duration-300 hover:border-neon-cyan/40 sm:p-7">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-fg">
                        {job.url ? (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-neon-cyan"
                          >
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}
                      </h3>
                      <p className="mt-0.5 font-mono text-sm text-neon-cyan/90">
                        {job.position}
                      </p>
                    </div>
                    <div className="shrink-0 text-left sm:text-right">
                      <div className="font-mono text-xs text-fg/80">
                        {job.period}
                      </div>
                      <div className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-2.5 py-0.5 font-mono text-[11px] text-neon-purple">
                        <IconClock className="h-3 w-3" />
                        {job.duration}
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 font-mono text-xs text-muted">
                    {job.location}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-2.5 text-sm leading-relaxed text-fg/80"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-neon-cyan/80" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MORE (bento) ============ */}
      <section id="more" className="py-16 sm:py-20">
        <Reveal>
          <SectionTitle
            kicker="// extra modules"
            title="Дополнительно"
            icon={<IconGlobe className="h-7 w-7" />}
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Languages */}
          <Reveal className="glass rounded-2xl p-6 lg:row-span-2">
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

          {/* Car */}
          <Reveal delay={140} className="glass rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-2.5">
              <IconCar className="h-5 w-5 text-neon-cyan" />
              <h3 className="font-display text-lg font-bold">Авто</h3>
            </div>
            <p className="text-sm text-fg/90">Собственный автомобиль</p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-neon-purple/30 bg-neon-purple/10 px-3 py-1.5">
              <span className="font-mono text-sm text-neon-cyan">
                Права кат. B
              </span>
            </div>
          </Reveal>

          {/* Location */}
          <Reveal delay={120} className="glass rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-2.5">
              <IconPin className="h-5 w-5 text-neon-pink" />
              <h3 className="font-display text-lg font-bold">Локация</h3>
            </div>
            <p className="text-sm text-fg/90">{profile.location}</p>
            <p className="mt-2 font-mono text-xs text-muted">
              {profile.relocation}
            </p>
          </Reveal>

          {/* Education */}
          <Reveal delay={80} className="glass rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-2.5">
              <IconCap className="h-5 w-5 text-neon-blue" />
              <h3 className="font-display text-lg font-bold">Образование</h3>
            </div>
            <p className="font-medium text-fg">
              {education.degree}, {education.year}
            </p>
            <p className="mt-1 text-sm text-fg/80">{education.place}</p>
            <p className="mt-1 font-mono text-xs text-muted">
              {education.field}
            </p>
          </Reveal>

          {/* Courses */}
          <Reveal
            delay={140}
            className="glass rounded-2xl p-6 md:col-span-2 lg:col-span-1"
          >
            <div className="mb-4 flex items-center gap-2.5">
              <IconCert className="h-5 w-5 text-neon-purple" />
              <h3 className="font-display text-lg font-bold">Курсы</h3>
            </div>
            <ul className="space-y-3">
              {courses.map((c) => (
                <li key={c.title} className="flex gap-3">
                  <span className="font-mono text-xs text-neon-cyan">
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

      {/* ============ FOOTER / CTA ============ */}
      <footer className="relative my-12 overflow-hidden rounded-3xl">
        <div className="holo-border glass rounded-3xl p-10 text-center sm:p-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Давайте <span className="text-gradient">создадим</span> что-то
            крутое
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Открыт к интересным проектам и предложениям. Напишите — отвечу
            быстро.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${profile.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-violet to-neon-blue px-6 py-3.5 font-medium text-white shadow-[0_0_30px_-6px_var(--color-neon-blue)] transition hover:brightness-110"
            >
              <IconPhone className="h-5 w-5" /> {profile.phone}
            </a>
            <a
              href={profile.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="holo-border inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-medium text-fg transition hover:text-neon-cyan"
            >
              <IconTelegram className="h-5 w-5" /> Telegram
            </a>
          </div>
          <div className="mt-10 font-mono text-xs text-muted">
            © {new Date().getFullYear()} {profile.name} · Frontend Developer
          </div>
        </div>
      </footer>
    </main>
  );
}
