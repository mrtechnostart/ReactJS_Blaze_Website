import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";

// No database behind the demo — "fulfillment" is a structured log line,
// visible in Vercel's runtime logs.
function fulfill(session: Stripe.Checkout.Session) {
  console.log("[stripe] fulfilled checkout", {
    session: session.id,
    mode: session.mode,
    plan: session.metadata?.plan,
    amount: session.amount_total,
    currency: session.currency,
    email: session.customer_details?.email,
    trfyxVisitorId: session.client_reference_id,
  });
}

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = req.headers.get("stripe-signature");
  if (!secret || !signature) {
    return new Response("Webhook not configured", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    // Signature verification needs the raw, unparsed body.
    event = getStripe().webhooks.constructEvent(await req.text(), signature, secret);
  } catch (err) {
    console.error("[stripe] webhook signature verification failed", err);
    return new Response("Invalid signature", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded": {
      const session = event.data.object;
      // Delayed payment methods complete while still unpaid; wait for async success.
      if (session.payment_status !== "unpaid") fulfill(session);
      break;
    }
    case "checkout.session.async_payment_failed":
    case "checkout.session.expired":
      console.log(`[stripe] ${event.type}`, { session: event.data.object.id });
      break;
    case "invoice.paid":
    case "invoice.payment_failed": {
      const invoice = event.data.object;
      console.log(`[stripe] ${event.type}`, {
        invoice: invoice.id,
        customer: invoice.customer,
        amount: invoice.amount_paid,
        reason: invoice.billing_reason,
      });
      break;
    }
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object;
      console.log(`[stripe] ${event.type}`, { subscription: sub.id, status: sub.status });
      break;
    }
    case "charge.refunded":
      console.log("[stripe] charge.refunded", { charge: event.data.object.id });
      break;
    default:
      console.log(`[stripe] unhandled event ${event.type}`);
  }

  return new Response(null, { status: 200 });
}
