import { SectionHeading } from "@/components/section-heading";
import { RevealStagger, RevealItem } from "@/components/reveal";
import { doubts } from "@/lib/site-config";

export function Doubts() {
  return (
    <section id="doubts" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Clear your doubts"
          title="Everything you wanted to ask about custom ROMs"
          description="New to custom ROMs? Here's the honest, jargon-free rundown — no fear-mongering, just facts."
        />

        <RevealStagger className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          {doubts.map((doubt, i) => (
            <RevealItem
              key={doubt.question}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7">
                <span
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: doubt.accent }}
                />
                <div className="flex items-start gap-4">
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-xl font-heading text-sm font-bold text-white"
                    style={{ background: doubt.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold tracking-tight sm:text-xl">
                      {doubt.question}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {doubt.answer}
                    </p>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
