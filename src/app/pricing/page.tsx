import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { plans } from "@/lib/stripe";

// Unlinked test page for Stripe + trfyx attribution demos — keep it out of search.
export const metadata: Metadata = {
  title: "Pricing",
  robots: { index: false, follow: false },
};

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { canceled, error } = await searchParams;

  return (
    <>
      <PageHeader
        eyebrow="Support Blaze"
        title="Pick a plan"
        description="Help keep Project Blaze open, fast and maintained. Payments run in Stripe test mode."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {(canceled || error) && (
          <p className="mx-auto mb-8 max-w-xl rounded-xl border border-border bg-card px-4 py-3 text-center text-sm text-muted-foreground">
            {canceled
              ? "Checkout canceled — no charge was made."
              : "Something went wrong starting checkout. Please try again."}
          </p>
        )}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <form
              key={plan.id}
              action="/api/stripe/checkout"
              method="POST"
              className={cn(
                "flex flex-col rounded-2xl border bg-card p-6",
                plan.featured ? "border-primary/50 shadow-lg shadow-primary/10" : "border-border"
              )}
            >
              <input type="hidden" name="plan" value={plan.id} />
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-xl font-bold">{plan.name}</h2>
                {plan.featured && (
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <p className="mt-6">
                <span className="font-heading text-4xl font-extrabold">{plan.price}</span>
                <span className="ml-1 text-sm text-muted-foreground">{plan.cadence}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {perk}
                  </li>
                ))}
              </ul>
              <button
                type="submit"
                // Trfyx click goal: fires on click, before Stripe confirms payment.
                {...(plan.id === "pro" && { "data-trfyx-goal": "pro_plan_clicked" })}
                className={cn(
                  buttonVariants({ size: "lg", variant: plan.featured ? "default" : "outline" }),
                  "mt-8 w-full rounded-full text-base"
                )}
              >
                {plan.mode === "payment" ? "Buy lifetime" : `Get ${plan.name}`}
              </button>
            </form>
          ))}
        </div>
      </section>
    </>
  );
}
