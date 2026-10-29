import type { NextRequest } from "next/server";
import { createCheckout, getOffers, plans } from "@/lib/lemonsqueezy";

// Trfyx cookies are plain values; keep only safe characters.
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

  const offer = (await getOffers())[plan.id];
  if (!offer) {
    return Response.redirect(`${origin}/pricing?error=price`, 303);
  }

  // Trfyx attribution: Lemon Squeezy returns checkout custom data in the
  // webhook's meta.custom_data, where Trfyx reads df_visitor_id.
  const custom: Record<string, string> = { plan: plan.id };
  const visitorId = readCookie(req, "df_visitor_id");
  const sessionId = readCookie(req, "df_session_id");
  if (visitorId) custom.df_visitor_id = visitorId;
  if (sessionId) custom.df_session_id = sessionId;

  const url = await createCheckout({
    variantId: offer.variantId,
    custom,
    // [order_id] is a Lemon Squeezy link variable, replaced with the real
    // order id after purchase.
    redirectUrl: `${origin}/pricing/success?order_id=[order_id]`,
  });

  return Response.redirect(url, 303);
}
