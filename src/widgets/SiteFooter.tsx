import { profile } from "@/entities/profile";
import {
  IconExternal,
  IconGithub,
  IconLinkedin,
  IconPhone,
  IconTelegram,
} from "@/shared/ui";

export function SiteFooter() {
  return (
    <footer className="relative my-12 overflow-hidden rounded-3xl">
      <div className="holo-border glass rounded-3xl p-10 text-center sm:p-16">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Давайте <span className="text-gradient">создадим</span> что-то крутое
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Открыт к интересным проектам и предложениям. Напишите — отвечу быстро.
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
        <div className="mt-6 flex flex-wrap justify-center gap-3">
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
        </div>
        <div className="mt-10 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name} · Senior Frontend Engineer
        </div>
      </div>
    </footer>
  );
}
