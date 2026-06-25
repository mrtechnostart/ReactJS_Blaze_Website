"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig, stats } from "@/lib/site-config";
import { PhoneMockup } from "@/components/phone-mockup";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-radial-fade" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[480px] w-[820px] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[30%] -z-10 h-[360px] w-[360px] rounded-full bg-[var(--flame)]/20 blur-[110px]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pb-28 lg:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="size-3.5 text-[var(--flame)]" />
              Now based on {siteConfig.androidVersion}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Blaze puts the{" "}
            <span className="text-gradient-brand">bloatware away.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="mt-5 max-w-xl text-lg text-muted-foreground text-pretty"
          >
            {siteConfig.name} is an open-source, AOSP-based operating system that
            pairs a near-stock experience with deep customization, blazing
            performance and privacy-first foundations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/download"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full text-base")}
            >
              Download Now
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "rounded-full text-base"
              )}
            >
              <GithubIcon className="size-4" />
              View Source
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease }}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <ShieldCheck className="size-4 text-primary" />
            Open source · microG-friendly · security patched twice a month
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36, ease }}
            className="mt-10 grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-card/60 p-4 backdrop-blur">
                <dt className="font-heading text-xl font-bold">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* CSS phone mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="relative mx-auto flex justify-center"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 m-auto h-80 w-80 rounded-full bg-gradient-to-tr from-primary/30 to-[var(--flame)]/30 blur-3xl" />
          <div className="animate-blaze-float">
            <PhoneMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
