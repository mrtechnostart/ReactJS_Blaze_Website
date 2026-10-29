// Lemon Squeezy API (https://docs.lemonsqueezy.com/api) — server-side only.
// Every request needs the JSON:API headers; a 4xx answers with a JSON:API
// `errors` array.

const API = "https://api.lemonsqueezy.com/v1";

function env(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not set`);
  return value;
}

type Resource = { id: string; attributes: Record<string, unknown> };
type Document = { data?: Resource | Resource[]; meta?: Record<string, unknown> };

async function ls(path: string, init: RequestInit = {}): Promise<Document> {
  const res = await fetch(`${API}${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${env("LEMONSQUEEZY_API_KEY")}`,
    },
  });
  const body = (await res.json().catch(() => ({}))) as Document & { errors?: { detail?: string }[] };
  if (!res.ok) throw new Error(`Lemon Squeezy ${res.status}: ${body.errors?.[0]?.detail ?? res.statusText}`);
  return body;
}

const list = (doc: Document) => (Array.isArray(doc.data) ? doc.data : []);
const one = (doc: Document) => (doc.data && !Array.isArray(doc.data) ? doc.data : null);

export type PlanId = "supporter" | "pro" | "lifetime";

export type Plan = {
  id: PlanId;
  name: string;
  cadence: string;
  description: string;
  perks: string[];
  // Name of the Lemon Squeezy product to sell — resolved at request time, so
  // no product or variant ids live in code or env.
  productName: string;
  subscription: boolean;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "supporter",
    name: "Supporter",
    cadence: "/month",
    description: "Keep the builds coming and back the maintainers.",
    perks: ["Supporter badge on Telegram", "Monthly dev updates", "Our eternal gratitude"],
    productName: "Blaze Supporter",
    subscription: true,
  },
  {
    id: "pro",
    name: "Pro",
    cadence: "/month",
    description: "For power users who want builds first.",
    perks: [
      "Everything in Supporter",
      "Early access to beta builds",
      "Priority device support",
    ],
    productName: "Blaze Pro",
    subscription: true,
    featured: true,
  },
  {
    id: "lifetime",
    name: "Lifetime",
    cadence: "one-time",
    description: "Pay once, support Blaze forever.",
    perks: ["Everything in Pro", "Lifetime perks, no renewals", "Name in the credits"],
    productName: "Blaze Lifetime",
    subscription: false,
  },
];

export type Offer = { variantId: string; price: string };

// The store's published products matched to plans by name, each with its
// first variant (a single-variant product's "Default" variant) and the
// price in the store's currency.
export async function getOffers(): Promise<Partial<Record<PlanId, Offer>>> {
  const products = list(await ls(`/products?filter[store_id]=${encodeURIComponent(env("LEMONSQUEEZY_STORE_ID"))}&page[size]=100`));
  const offers: Partial<Record<PlanId, Offer>> = {};
  for (const plan of plans) {
    const product = products.find((p) => p.attributes.name === plan.productName && p.attributes.status === "published");
    if (!product) continue;
    const [variant] = list(await ls(`/variants?filter[product_id]=${product.id}`));
    if (!variant) continue;
    offers[plan.id] = { variantId: variant.id, price: String(product.attributes.price_formatted ?? "") };
  }
  return offers;
}

let testMode: boolean | undefined;

// A test-mode API key only works with test-mode data, so checkouts are
// created in the key's mode (users/me reports it in meta.test_mode).
async function keyIsTestMode(): Promise<boolean> {
  testMode ??= (await ls("/users/me")).meta?.test_mode === true;
  return testMode;
}

export async function createCheckout(input: {
  variantId: string;
  custom: Record<string, string>;
  redirectUrl: string;
}): Promise<string> {
  const doc = await ls("/checkouts", {
    method: "POST",
    body: JSON.stringify({
      data: {
        type: "checkouts",
        attributes: {
          product_options: { redirect_url: input.redirectUrl, enabled_variants: [Number(input.variantId)] },
          checkout_data: { custom: input.custom },
          test_mode: await keyIsTestMode(),
        },
        relationships: {
          store: { data: { type: "stores", id: env("LEMONSQUEEZY_STORE_ID") } },
          variant: { data: { type: "variants", id: input.variantId } },
        },
      },
    }),
  });
  const url = one(doc)?.attributes.url;
  if (typeof url !== "string") throw new Error("Lemon Squeezy returned no checkout url");
  return url;
}

export async function getOrder(orderId: string) {
  return one(await ls(`/orders/${encodeURIComponent(orderId)}`))?.attributes ?? null;
}
