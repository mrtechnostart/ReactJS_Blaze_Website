import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/aims", priority: 0.8, changeFrequency: "monthly" },
  { path: "/features", priority: 0.8, changeFrequency: "monthly" },
  { path: "/download", priority: 0.9, changeFrequency: "weekly" },
  { path: "/team", priority: 0.6, changeFrequency: "monthly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
