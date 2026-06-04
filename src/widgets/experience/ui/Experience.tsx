import { experience, JobCardRow } from "@/entities/experience";
import { IconBriefcase, Reveal, SectionTitle } from "@/shared/ui";
import { JobCard } from "../../../entities/experience/ui/JobCard";

export function Experience() {
  const fullJobs = experience.filter((job) => !job.compact);
  const earlyJobs = experience.filter((job) => job.compact);

  return (
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
        <div className="absolute left-0 top-7 h-full w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent sm:left-1.5" />

        <div className="flex flex-col gap-6">
          {fullJobs.map((job, i) => (
            <JobCard key={job.company + job.period} job={job} index={i} />
          ))}

          {/* early experience — condensed */}
          <Reveal as="article" delay={240} className="relative">
            <span className="absolute -left-[25px] top-6 h-2.5 w-2.5 rounded-full bg-neon-purple/40 sm:-left-[31px]" />
            <div className="glass rounded-2xl p-6 sm:p-7">
              <h3 className="font-display text-lg font-bold text-fg">
                Ранний опыт
              </h3>
              <p className="mt-0.5 font-mono text-xs text-muted">
                2010 — 2020 · вёрстка, WordPress, Drupal, Fullstack (Yii
                Framework)
              </p>
              <ul className="mt-4 divide-y divide-white/5">
                {earlyJobs.map((job) => (
                  <JobCardRow job={job} key={job.company + job.period} />
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
