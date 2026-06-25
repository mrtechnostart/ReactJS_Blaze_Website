import { Reveal } from "@/components/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-radial-fade" />
      <div className="pointer-events-none absolute left-1/2 top-[-40%] -z-10 h-[360px] w-[680px] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
