import { profile } from "@/entities/profile";
import { IconBolt, Reveal, SectionTitle } from "@/shared/ui";

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
  );
}
