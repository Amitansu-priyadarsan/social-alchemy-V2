import { ImageResponse } from "next/og";
import { SITE } from "./lib/seo";

// Dynamically generated social-share / AI-preview card, served at
// /opengraph-image. 1200×630 branded image — no static asset to maintain.
export const alt = "Social Alchemy — content & creative engines for AI startups";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(60% 60% at 25% 20%, rgba(124,92,255,0.30), transparent 60%), radial-gradient(50% 50% at 85% 90%, rgba(201,255,59,0.22), transparent 60%), #07070a",
          color: "#f0eee6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "9999px",
              background:
                "radial-gradient(circle at 35% 35%, #e6ffa0, #7c5cff 70%)",
            }}
          />
          <div style={{ fontSize: "30px", fontWeight: 600, letterSpacing: "-0.02em" }}>
            social alchemy
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "76px",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              maxWidth: "950px",
            }}
          >
            <span>Content &amp; creative engines for&nbsp;</span>
            <span style={{ color: "#c9ff3b" }}>AI startups.</span>
          </div>
          <div style={{ fontSize: "30px", color: "#8a8a92", maxWidth: "880px" }}>
            Founder-led LinkedIn · organic video · AI ad creative
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "22px",
            color: "#8a8a92",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {SITE.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
