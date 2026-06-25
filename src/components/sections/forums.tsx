import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { RevealStagger, RevealItem } from "@/components/reveal";
import { forums } from "@/lib/site-config";

export function Forums() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Forums & community"
          title="Where Blaze lives"
          description="Development threads, builds and discussion across XDA, SourceForge and Telegram."
        />

        <RevealStagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {forums.map((forum) => (
            <RevealItem key={forum.href}>
              <a
                href={forum.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div>
                  <h3 className="font-heading text-base font-semibold leading-snug">
                    {forum.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {forum.meta}
                  </p>
                </div>
                <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
