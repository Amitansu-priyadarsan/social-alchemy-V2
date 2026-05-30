import { SITE } from "./lib/seo";

// Served at /sitemap.xml. Single-page site today — add entries here as you
// add routes (e.g. /founder-content, /ai-ad-creative, /work).
export default function sitemap() {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
