import type { Job } from "@/entities/experience";
import { IconClock, Reveal } from "@/shared/ui";

export function JobCard({
  job,
  index,
  nowLabel,
}: {
  job: Job;
  index: number;
  nowLabel: string;
}) {
  return (
    <Reveal as="article" delay={Math.min(index, 4) * 60} className="relative">
      {/* node */}
      <span
        className={`absolute top-6 h-3 w-3 rounded-full sm:-left-[32px] ${
          job.current
            ? "-left-[25px] bg-neon-cyan shadow-[0_0_12px_3px_var(--color-neon-cyan)]"
            : "-left-[25px] h-2.5 w-2.5 bg-neon-purple/75 sm:-left-[32px]"
        }`}
      />
      <div
        className={`rounded-2xl p-6 transition duration-300 sm:p-7 ${
          job.current ? "holo-border glass" : "glass hover:border-neon-cyan/40"
        }`}
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
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
              {job.current && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-widest text-neon-cyan">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_2px_var(--color-neon-cyan)]" />
                  {nowLabel}
                </span>
              )}
            </div>
            <p className="mt-0.5 font-mono text-sm text-neon-cyan/90">
              {job.position}
            </p>
          </div>
          <div className="shrink-0 text-left sm:text-right">
            <div className="font-mono text-xs text-fg/80">{job.period}</div>
            <div className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-2.5 py-0.5 font-mono text-[11px] text-neon-purple">
              <IconClock className="h-3 w-3" />
              {job.duration}
            </div>
          </div>
        </div>
        <div className="mt-1 font-mono text-xs text-muted">{job.location}</div>
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
  );
}
