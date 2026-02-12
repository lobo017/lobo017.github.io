interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="mb-10 space-y-3">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-muted">{subtitle}</p> : null}
    </header>
  );
}
