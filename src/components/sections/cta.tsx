import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { TelegramIcon } from "@/components/brand-icons";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function CTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-[var(--flame)]/10 px-6 py-16 text-center sm:px-12">
            <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 size-64 rounded-full bg-[var(--flame)]/20 blur-3xl" />

            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Ready to light up your device?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-pretty">
              Join thousands of users running {siteConfig.name}. Grab a build for
              your device and hop into the community for support and updates.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/download"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full text-base"
                )}
              >
                <Download className="size-4" />
                Download Blaze
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full text-base"
                )}
              >
                <TelegramIcon className="size-4" />
                Join Telegram
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
