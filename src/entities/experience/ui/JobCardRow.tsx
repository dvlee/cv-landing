import type { Job } from "@/entities/experience";

export function JobCardRow({ job }: { job: Job }) {
  return (
    <li
      key={job.company + job.period}
      className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="text-sm">
        <span className="font-medium text-fg">
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
        </span>
        <span className="text-muted">
          {" "}
          · {job.position} · {job.location}
        </span>
      </div>
      <span className="shrink-0 font-mono text-xs text-muted">
        {job.period}
      </span>
    </li>
  );
}
