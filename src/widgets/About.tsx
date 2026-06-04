import { profile } from "@/entities/profile";
import { IconBolt, Reveal, SectionTitle } from "@/shared/ui";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Reveal>
        <SectionTitle
          kicker="// whoami"
          title="Обо мне"
          icon={<IconBolt className="h-7 w-7" />}
        />
      </Reveal>
      <Reveal
        delay={120}
        className="glass grid items-center gap-7 rounded-2xl p-7 sm:gap-9 sm:p-9 md:grid-cols-[260px_1fr] print:block"
      >
        {/* photo */}
        <div className="relative mx-auto w-full max-w-[240px] md:mx-0 md:max-w-none print:hidden">
          <div className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle_at_center,var(--color-neon-purple),transparent_70%)] opacity-25 blur-2xl" />
          <Image
            src="/me-2.png"
            alt={profile.name}
            width={526}
            height={938}
            sizes="(max-width: 768px) 240px, 260px"
            className="h-auto w-full object-contain -mb-9"
          />
        </div>

        {/* text */}
        <div>
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
        </div>
      </Reveal>
    </section>
  );
}
