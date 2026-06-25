import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { founders } from "@/lib/site-config";

export function Founders() {
  return (
    <section id="team" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The people behind Blaze"
          title="Meet the founders"
          description="Project Blaze is led by a small, passionate team committed to a fast, clean and open Android experience."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {founders.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7">
                <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-center gap-4">
                  {founder.image ? (
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={160}
                      height={160}
                      className="size-16 shrink-0 rounded-2xl object-cover shadow-lg shadow-primary/20 ring-1 ring-border"
                    />
                  ) : (
                    <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary via-[var(--flame)] to-[var(--ember)] font-heading text-xl font-bold text-white shadow-lg shadow-primary/30">
                      {founder.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="font-heading text-xl font-bold">
                      {founder.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {founder.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {founder.bio}
                </p>
                <div className="mt-6 flex gap-2">
                  {founder.socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${founder.name} on ${social.label}`}
                        className="grid size-9 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <Icon className="size-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
