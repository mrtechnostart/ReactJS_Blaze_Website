import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { FeatureCard } from "@/components/sections/features";
import { Videos } from "@/components/sections/videos";
import { CTA } from "@/components/sections/cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { features, extras, doubts } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Project Blaze's features — open source, battery efficiency, fluid performance, MaterialYou customization, GameSpace, UDFPS tweaks and more.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Built to be fast, clean and yours"
        description="A near-stock Android base, supercharged with the customizations and refinements you actually want."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <RevealItem key={feature.title}>
                <FeatureCard feature={feature} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="border-t border-border/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Signature extras"
            title="The little things that make Blaze, Blaze"
            description="Thoughtful touches you won't find on a stock device."
          />
          <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((feature) => (
              <RevealItem key={feature.title}>
                <FeatureCard feature={feature} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <Videos />

      <section className="border-t border-border/60 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Quick answers to the most common questions about custom ROMs and Blaze."
          />
          <Reveal className="mt-10">
            <Accordion multiple={false} className="w-full">
              {doubts.map((doubt, i) => (
                <AccordionItem key={doubt.question} value={i}>
                  <AccordionTrigger className="text-left font-heading text-base">
                    {doubt.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {doubt.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
