import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { RevealStagger, RevealItem } from "@/components/reveal";
import { testimonials } from "@/lib/site-config";

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Loved by the community"
          title="What people say about Blaze"
          description="From reviewers across YouTube and XDA to thousands of daily drivers in our Telegram community."
        />

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.quote}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <Quote className="size-7 text-primary/40" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                  <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-primary/20 to-[var(--flame)]/20 font-heading text-sm font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.handle} · {t.source}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
