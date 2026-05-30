// Single source of truth for SEO / AEO metadata and structured data.
// ⚠️ Update SITE.url to your real production domain before deploying — it
// drives canonical URLs, Open Graph URLs, the sitemap, and JSON-LD @ids.
// Also replace the placeholder LinkedIn / X profile URLs in `sameAs`.

export const SITE = {
  url: "https://socialalchemy.in",
  name: "Social Alchemy",
  // Used as the homepage <title> and OG title.
  title: "Social Alchemy — Content & Creative Engines for AI Startups",
  // Title template for any future pages: "<Page> · Social Alchemy".
  titleTemplate: "%s · Social Alchemy",
  description:
    "Social Alchemy is an AI-native content & creative studio for AI startups. We run founder-led LinkedIn content, organic short-form video, and AI ad creative — strategy to delivery, so you show up consistently.",
  keywords: [
    "content agency for AI startups",
    "AI startup content marketing",
    "founder-led LinkedIn content",
    "LinkedIn ghostwriting for founders",
    "organic short-form video production",
    "AI ad creative",
    "AI video ads",
    "B2B content marketing for AI companies",
    "founder content engine",
    "creative studio for startups",
  ],
  locale: "en_US",
  email: "adriot2002@gmail.com",
  founder: "Aditya Prasad Rath",
  location: { city: "Bhubaneswar", region: "Odisha", country: "IN" },
  // Replace with real profile URLs.
  sameAs: [
    "https://www.linkedin.com/company/social-alchemy",
    "https://x.com/socialalchemy",
  ],
  services: [
    {
      name: "Founder Content Engine",
      description:
        "Founder-led LinkedIn (and X) content that gets you in front of your buyers — strategy, scripting in your voice, posting, and engagement.",
    },
    {
      name: "Organic Video Production",
      description:
        "Short-form video for founders, products, and brand stories. Script, shoot, edit, deliver.",
    },
    {
      name: "AI Video Ad Creative",
      description:
        "High-velocity ad creative built with AI tools — multiple hook and creative variants per concept for paid social.",
    },
  ],
};
