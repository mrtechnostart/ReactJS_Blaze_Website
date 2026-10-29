import crypto from "node:crypto";

// No database behind the demo — "fulfillment" is a structured log line,
// visible in Vercel's runtime logs.

// X-Signature is the HMAC-SHA256 hex digest of the raw body
// (https://docs.lemonsqueezy.com/help/webhooks/signing-requests).
function verified(rawBody: string, signature: string, secret: string) {
  const expected = Buffer.from(crypto.createHmac("sha256", secret).update(rawBody).digest("hex"), "utf8");
  const received = Buffer.from(signature, "utf8");
  return expected.length === received.length && crypto.timingSafeEqual(expected, received);
}

type Payload = {
  meta?: { event_name?: string; custom_data?: Record<string, unknown> };
  data?: { id?: string; attributes?: Record<string, unknown> };
};

export async function POST(req: Request) {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  const signature = req.headers.get("x-signature");
  if (!secret || !signature) {
    return new Response("Webhook not configured", { status: 400 });
  }

  // Signature verification needs the raw, unparsed body.
  const rawBody = await req.text();
  if (!rawBody || !verified(rawBody, signature, secret)) {
    console.error("[lemonsqueezy] webhook signature verification failed");
    return new Response("Invalid signature", { status: 400 });
  }

  const payload = JSON.parse(rawBody) as Payload;
  const event = payload.meta?.event_name;
  const attrs = payload.data?.attributes ?? {};

  switch (event) {
    case "order_created":
      if (attrs.status === "paid") {
        console.log("[lemonsqueezy] fulfilled order", {
          order: payload.data?.id,
          plan: payload.meta?.custom_data?.plan,
          total: attrs.total,
          currency: attrs.currency,
          email: attrs.user_email,
          testMode: attrs.test_mode,
          trfyxVisitorId: payload.meta?.custom_data?.df_visitor_id,
        });
      }
      break;
    case "subscription_payment_success":
    case "subscription_payment_failed":
      console.log(`[lemonsqueezy] ${event}`, {
        invoice: payload.data?.id,
        subscription: attrs.subscription_id,
        total: attrs.total,
        reason: attrs.billing_reason,
      });
      break;
    case "subscription_updated":
    case "subscription_cancelled":
    case "subscription_expired":
      console.log(`[lemonsqueezy] ${event}`, { subscription: payload.data?.id, status: attrs.status });
      break;
    case "order_refunded":
      console.log("[lemonsqueezy] order_refunded", { order: payload.data?.id, refunded: attrs.refunded_amount });
      break;
    default:
      console.log(`[lemonsqueezy] unhandled event ${event}`);
  }

  // Anything but a 200 makes Lemon Squeezy retry.
  return new Response(null, { status: 200 });
}
