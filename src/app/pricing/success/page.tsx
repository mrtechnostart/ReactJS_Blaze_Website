import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getStripe } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

// Display only — fulfillment happens in the webhook, not here.
async function loadSession(id: string | undefined) {
  if (!id?.startsWith("cs_")) return null;
  try {
    return await getStripe().checkout.sessions.retrieve(id);
  } catch {
    return null;
  }
}

export default async function PricingSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { session_id } = await searchParams;
  const session = await loadSession(typeof session_id === "string" ? session_id : undefined);
  const paid = session?.payment_status === "paid" || session?.payment_status === "no_payment_required";

  const amount =
    session?.amount_total != null
      ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: session.currency ?? "usd",
        }).format(session.amount_total / 100)
      : null;

  return (
    <>
      <PageHeader
        eyebrow={paid ? "Payment received" : "Processing"}
        title={paid ? "Thanks for supporting Blaze!" : "We're confirming your payment"}
        description={
          session
            ? [amount, session.customer_details?.email].filter(Boolean).join(" · ")
            : "We couldn't find that checkout session."
        }
      />
      <div className="flex justify-center py-16">
        <Link
          href="/pricing"
          className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full")}
        >
          Back to plans
        </Link>
      </div>
    </>
  );
}
