import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { CTA } from "@/components/sections/cta";
import { aims } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Aims",
  description:
    "The vision behind Project Blaze — best-in-class customization with privacy-first, microG-friendly security, evolving into optimized, considered design.",
};

const timeline = [
  {
    phase: "The idea",
    title: "Customization, without giving up privacy",
    body: "Blaze began with one conviction: you shouldn't have to choose between a deeply customizable phone and your privacy. By embracing a microG-friendly, de-Googled foundation, Blaze keeps you in control of your data from day one.",
  },
  {
    phase: "The evolution",
    title: "From tweaks to a design philosophy",
    body: "What started as a customization-first ROM grew into something larger — a focus on optimized, considered design. Every layout and interaction is refined for clarity and speed while respecting the stock Android experience.",
  },
  {
    phase: "Today",
    title: "Fast, clean, open and community-driven",
    body: "Blaze is now a mature, open-source project with 15+ official devices, twice-monthly security patches, and an active community of maintainers and users shaping where it goes next.",
  },
];

export default function AimsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our aims"
        title="Why Project Blaze exists"
        description="The best customization, with the security of a privacy-first, microG-friendly foundation — evolved into a philosophy of optimized, considered design."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ol className="relative space-y-12 border-l border-border pl-8">
            {timeline.map((item) => (
              <Reveal as="li" key={item.phase} className="relative">
                <span className="absolute -left-[2.6rem] grid size-6 place-items-center rounded-full border border-primary/40 bg-background">
                  <span className="size-2.5 rounded-full bg-gradient-to-br from-primary to-[var(--flame)]" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {item.phase}
                </span>
                <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              What we stand for
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide every build of Project Blaze.
            </p>
          </Reveal>

          <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aims.map((aim) => {
              const Icon = aim.icon;
              return (
                <RevealItem key={aim.title}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <div className="inline-flex rounded-xl bg-gradient-to-br from-primary/15 to-[var(--flame)]/15 p-3 text-primary ring-1 ring-inset ring-primary/20">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-semibold">
                      {aim.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {aim.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      <CTA />
    </>
  );
}
