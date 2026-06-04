export function SectionTitle({
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
