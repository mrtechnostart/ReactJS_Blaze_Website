import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { variants } from "@/lib/site-config";

export function Variants() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pick your flavour"
          title="Two builds, your choice"
          description="Every supported device ships in two variants. Go full Google, or stay completely de-Googled — the choice is always yours."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {variants.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.08}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border bg-card p-7",
                  v.recommended
                    ? "border-primary/50 shadow-xl shadow-primary/10"
                    : "border-border"
                )}
              >
                {v.recommended && (
                  <Badge className="absolute right-6 top-6 bg-primary">
                    Most popular
                  </Badge>
                )}
                <h3 className="font-heading text-2xl font-bold">{v.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {v.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {v.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/download"
                  className={cn(
                    buttonVariants({
                      variant: v.recommended ? "default" : "outline",
                    }),
                    "mt-7 w-full rounded-full"
                  )}
                >
                  Download {v.name}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
