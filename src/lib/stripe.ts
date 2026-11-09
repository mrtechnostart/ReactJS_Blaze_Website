import Stripe from "stripe";

let client: Stripe | undefined;

// Created lazily so builds don't need STRIPE_SECRET_KEY; server-side only.
export function getStripe(): Stripe {
  if (!client) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
    client = new Stripe(key);
  }
  return client;
}

export type PlanId = "pro";

export type Plan = {
  id: PlanId;
  name: string;
  price: string;
  cadence: string;
  description: string;
  perks: string[];
  // Stripe price lookup key — prices are resolved at checkout time.
  lookupKey: string;
  mode: "subscription" | "payment";
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "pro",
    name: "Pro",
    price: "$15",
    cadence: "/month",
    description: "For power users who want builds first.",
    perks: [
      "Early access to beta builds",
      "Priority device support",
      "Supporter badge on Telegram",
      "Monthly dev updates",
    ],
    lookupKey: "blaze_pro_monthly",
    mode: "subscription",
    featured: true,
  },
];
