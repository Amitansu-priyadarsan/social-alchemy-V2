import SectionHead from "./SectionHead";
import EngineCard from "./EngineCard";
import { LinkedInMock, VideoMock, AdMock } from "./Mocks";
import styles from "./Engines.module.css";

const ENGINES = [
  {
    num: "01",
    label: "Founder Content",
    title: (
      <>
        The Founder
        <br />
        Content Engine
      </>
    ),
    lede: "Founder-led LinkedIn (and X, optional) content that gets you in front of your buyers.",
    bullets: [
      "Strategy, pillar design, founder voice extraction",
      "12–16 posts/month, fully scripted in your voice",
      "Posting, engagement, warm outbound handled",
      "Weekly batches, monthly review",
    ],
    bestFor: "founders who want to be known",
    art: (
      <LinkedInMock
        lead="The thing no one tells you about building AI products in 2026 —"
        highlights={[
          "Buyers don't trust demos anymore.",
          "They trust founders who can articulate the why.",
        ]}
        stats={[
          { value: "1.9K", label: "imp" },
          { value: "312", label: "rxn" },
          { value: "48", label: "cmt" },
        ]}
      />
    ),
  },
  {
    num: "02",
    label: "Organic Video",
    featured: true,
    title: (
      <>
        Organic Video
        <br />
        Production
      </>
    ),
    lede: "Short-form video for founders, products, and brand stories. Script, shoot, edit, deliver.",
    bullets: [
      "Founder-led shorts for LinkedIn, IG, YouTube",
      "Product explainers and customer stories",
      "Pre-production, on-site shoot, full post",
      "Per-project or monthly retainer",
    ],
    bestFor: "founders who want a face on camera",
    art: <VideoMock badge="REEL · 9:16" caption="Why we built Ringus" duration="0:48" />,
  },
  {
    num: "03",
    label: "AI Ad Creative",
    title: (
      <>
        AI Video
        <br />
        Ad Creative
      </>
    ),
    lede: "High-velocity ad creative built with AI tools. Test more variants, faster, for less.",
    bullets: [
      "AI-generated video ads for paid social",
      "Multiple hook + creative variants per concept",
      "Built for fast iteration on Meta, LinkedIn, YT",
      "Per-project or monthly creative retainer",
    ],
    bestFor: "founders needing ad volume",
    art: <AdMock cells={["HOOK A", "HOOK B", "HOOK C", "HOOK D"]} />,
  },
];

export default function Engines() {
  return (
    <section id="engines" className={styles.section}>
      <div className={styles.wrap}>
        <SectionHead
          eyebrow="02 / What we do"
          title={
            <>
              Three engines.
              <br />
              One team.
            </>
          }
          lede="Pick one. Stack two. Or run all three."
        />
        <div className={styles.grid}>
          {ENGINES.map((e) => (
            <EngineCard key={e.num} {...e} />
          ))}
        </div>
        <div className={styles.pricingNote}>
          Pricing on request · Engagements scale per engine
        </div>
      </div>
    </section>
  );
}
