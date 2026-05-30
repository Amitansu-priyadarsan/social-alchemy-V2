import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { LinkedInMock, VideoMock, AdMock } from "./Mocks";
import styles from "./Work.module.css";

const WORK = [
  {
    span: "col2",
    tag: "LinkedIn short",
    mock: (
      <VideoMock
        badge="9:16"
        caption="The 2 lakh real-estate experiment"
        duration="0:54"
      />
    ),
    title: "Founder-led short for Ringus.AI",
    note: "Top-performing organic post · 1,901 imp",
  },
  {
    span: "col2",
    tag: "AI ad",
    mock: <AdMock cells={["CTR 4.2%", "CTR 3.8%", "CTR 2.9%", "CTR 5.1%"]} />,
    title: "AI-generated ad creative",
    note: "4 hook variants · 48hr turnaround",
  },
  {
    span: "col2",
    tag: "LinkedIn post",
    mock: (
      <LinkedInMock
        lead={"“We were 2 years too early.”"}
        highlights={["Building AI calling agents in 2022 vs 2026."]}
        stats={[
          { value: "2.4K", label: "imp" },
          { value: "418", label: "rxn" },
          { value: "67", label: "cmt" },
        ]}
      />
    ),
    title: "“We were 2 years too early.”",
    note: "Top engagement post in Ringus history",
  },
  {
    span: "col3",
    tag: "Organic video",
    mock: (
      <VideoMock
        badge="EXPLAINER"
        caption="How Ringus closes a 5-min call"
        duration="1:14"
      />
    ),
    title: "Customer story — explainer cut",
    note: "Sourced 3 qualified inbound calls",
  },
  {
    span: "col3",
    tag: "AI ad",
    mock: (
      <VideoMock
        badge="AI · 9:16"
        caption="Your AI sales rep, 24/7"
        duration="0:18"
      />
    ),
    title: "Ringus calling agent — concept reel",
    note: "Hero creative for outreach campaign",
  },
  {
    span: "col2",
    tag: "LinkedIn",
    mock: (
      <LinkedInMock
        lead="I scheduled comedy into my calendar. Here's what happened —"
        highlights={[
          "Founder posts that read like essays beat checklists 4x.",
        ]}
        stats={[
          { value: "1.5K", label: "imp" },
          { value: "268", label: "rxn" },
          { value: "41", label: "cmt" },
        ]}
      />
    ),
    title: "“Comedy schedule” post",
    note: "Top-3 LinkedIn post of the month",
  },
];

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.wrap}>
        <SectionHead
          eyebrow="03 / Selected work"
          title={
            <>
              A snapshot of
              <br />
              what we&apos;ve shipped.
            </>
          }
        />
        <div className={styles.grid}>
          {WORK.map((item, i) => (
            <Reveal key={i} className={styles[item.span]}>
              <div className={styles.item}>
                <span className={styles.tag}>{item.tag}</span>
                {item.mock}
                <div className={styles.caption}>
                  <h4>{item.title}</h4>
                  <span>{item.note}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
