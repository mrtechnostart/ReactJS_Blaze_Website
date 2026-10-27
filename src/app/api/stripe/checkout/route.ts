import type { NextRequest } from "next/server";
import { getStripe, plans } from "@/lib/stripe";

// Fixed label for this flow in the Stripe Dashboard.
const INTEGRATION_ID = "blaze-pricing-demo-qhvtrxmz";

// Trfyx cookies are plain values; keep only characters Stripe accepts.
function readCookie(req: NextRequest, name: string) {
  const value = req.cookies.get(name)?.value;
  if (!value) return undefined;
  return decodeURIComponent(value).replace(/[^\w.-]/g, "").slice(0, 200) || undefined;
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const plan = plans.find((p) => p.id === form.get("plan"));
  const origin = req.nextUrl.origin;

  if (!plan) {
    return Response.redirect(`${origin}/pricing?error=plan`, 303);
  }

  const stripe = getStripe();
  const { data: prices } = await stripe.prices.list({
    lookup_keys: [plan.lookupKey],
    active: true,
    limit: 1,
  });
  if (!prices[0]) {
    return Response.redirect(`${origin}/pricing?error=price`, 303);
  }

  // Trfyx attribution: visitor id goes in client_reference_id, both ids in metadata.
  const visitorId = readCookie(req, "df_visitor_id");
  const sessionId = readCookie(req, "df_session_id");
  const metadata: Record<string, string> = { plan: plan.id };
  if (visitorId) metadata.trfyx_visitor_id = visitorId;
  if (sessionId) metadata.trfyx_session_id = sessionId;

  const session = await stripe.checkout.sessions.create({
    mode: plan.mode,
    line_items: [{ price: prices[0].id, quantity: 1 }],
    client_reference_id: visitorId,
    metadata,
    ...(plan.mode === "subscription"
      ? { subscription_data: { metadata } }
      : { payment_intent_data: { metadata }, customer_creation: "always" as const }),
    // Trfyx's script auto-detects ?session_id=cs_... on the return page.
    success_url: `${origin}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/pricing?canceled=1`,
    integration_identifier: INTEGRATION_ID,
  });

  return Response.redirect(session.url!, 303);
}
