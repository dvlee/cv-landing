export function Corner({ className }: { className: string }) {
  return (
    <span
      className={`pointer-events-none absolute h-5 w-5 border-neon-cyan/70 ${className}`}
    />
  );
}
