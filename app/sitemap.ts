import type { MetadataRoute } from "next";
import { allPublicPaths } from "@/lib/routes";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPublicPaths().map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: "2026-08-02",
    changeFrequency: path.includes("/bai-viet/") || path.includes("/articles/") ? "monthly" : "weekly",
    priority: path === "/vi" || path === "/en" ? 1 : path.includes("mql5-codegraph") ? 0.9 : 0.7,
  }));
}
