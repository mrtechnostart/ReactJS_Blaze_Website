import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getOrder } from "@/lib/lemonsqueezy";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

// Display only — fulfillment happens in the webhook, not here.
async function loadOrder(id: string | undefined) {
  if (!id || !/^\d+$/.test(id)) return null;
  try {
    return await getOrder(id);
  } catch {
    return null;
  }
}

export default async function PricingSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { order_id } = await searchParams;
  const order = await loadOrder(typeof order_id === "string" ? order_id : undefined);
  const paid = order?.status === "paid";

  return (
    <>
      <PageHeader
        eyebrow={paid ? "Payment received" : "Thank you"}
        title={paid ? "Thanks for supporting Blaze!" : "Thanks! Your purchase is being confirmed"}
        description={
          order
            ? [order.total_formatted, order.user_email].filter((v) => typeof v === "string" && v).join(" · ")
            : "You'll get a receipt from Lemon Squeezy by email."
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
