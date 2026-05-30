import { SITE } from "./lib/seo";

// Served at /robots.txt — allows all crawlers (search + AI) and points to the sitemap.
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
