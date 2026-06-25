import { SectionHeading } from "@/components/section-heading";
import { RevealStagger, RevealItem } from "@/components/reveal";
import { features, type Feature } from "@/lib/site-config";

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Blaze"
          title="Everything you love about stock Android — and more"
          description="Blaze is an open-source project with no security trade-offs. Get a near-stock Android feel with all the customization you need."
        />

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <RevealItem key={feature.title}>
              <FeatureCard feature={feature} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="inline-flex rounded-xl bg-gradient-to-br from-primary/15 to-[var(--flame)]/15 p-3 text-primary ring-1 ring-inset ring-primary/20">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 font-heading text-lg font-semibold">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </div>
  );
}
