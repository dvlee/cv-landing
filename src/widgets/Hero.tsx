import Image from "next/image";
import { profile } from "@/entities/profile";
import {
  IconExternal,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconTelegram,
  PrintButton,
} from "@/shared/ui";

export function Hero() {
  return (
    <section
      id="top"
      className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div className="reveal order-2 lg:order-1">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1.5 font-mono text-xs tracking-widest text-neon-cyan animate-pulse-glow">
          <span className="h-2 w-2 rounded-full bg-neon-cyan shadow-[0_0_10px_2px_var(--color-neon-cyan)]" />
          ОТКРЫТ К ПРЕДЛОЖЕНИЯМ
        </div>

        <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          <span className="text-fg">Ли Денис</span>
          <br />
          <span className="text-fg">Витальевич</span>
          {/* <span className="text-gradient">Витальевич</span> */}
        </h1>

        {/* role + value proposition */}
        {/* <p className="mt-5 font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl"> */}
        <p className="mt-5 font-display text-2xl font-bold tracking-tight text-gradient sm:text-3xl">
          Senior Frontend Engineer
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-sm text-neon-cyan/90 sm:text-base">
          {["React", "Next.js", "TypeScript"].map((t, i) => (
            <span key={t} className="inline-flex items-center gap-2.5">
              {i > 0 && <span className="text-neon-purple/60">•</span>}
              {t}
            </span>
          ))}
        </div>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-fg/80 sm:text-lg">
          <span className="font-semibold text-fg">15+ лет</span> в коммерческой
          веб-разработке. Создаю <span className="text-neon-cyan">fintech</span>
          , <span className="text-neon-cyan">банковские</span> и{" "}
          <span className="text-neon-cyan">enterprise</span>-решения на React,
          Next.js и TypeScript.
        </p>

        <p className="mt-4 max-w-xl font-mono text-sm text-muted">
          {profile.age} · {profile.location}
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

        {/* social + resume */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass grid h-11 w-11 place-items-center rounded-xl text-fg transition hover:neon-edge hover:text-neon-cyan"
          >
            <IconGithub className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass grid h-11 w-11 place-items-center rounded-xl text-fg transition hover:neon-edge hover:text-neon-blue"
          >
            <IconLinkedin className="h-5 w-5" />
          </a>
          <a
            href={profile.hh}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex h-11 items-center gap-2 rounded-xl px-4 text-sm text-fg transition hover:neon-edge hover:text-neon-cyan"
          >
            <IconExternal className="h-4 w-4" />
            <span>Резюме hh.uz</span>
          </a>
          <PrintButton className="holo-border inline-flex h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium text-fg transition hover:text-neon-cyan print:hidden" />
        </div>
      </div>

      {/* photo */}
      <div className="order-1 flex justify-center lg:order-2">
        {/* <div className="relative animate-float"> */}
        <div className="relative">
          {/* ambient glow behind the cutout */}
          <div className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle_at_center,var(--color-neon-cyan),transparent_70%)] opacity-30 blur-3xl animate-pulse-glow" />
          <Image
            src="/me.png"
            alt={`${profile.name} — ${profile.role}`}
            width={1684}
            height={2528}
            priority
            sizes="(max-width: 640px) 260px, 340px"
            // className="relative h-auto w-[260px] object-contain drop-shadow-[0_0_25px_var(--color-neon-cyan)] sm:w-[340px]"
            className="relative h-auto max-w-[420px] aspect-[1/1.2] object-top object-cover"
          />
          {/* orbit badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-neon-cyan/40 bg-void px-4 py-1.5 font-mono text-xs tracking-widest text-neon-cyan">
            React · Next · TS
          </div>
        </div>
      </div>
    </section>
  );
}
