import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import styles from "./Process.module.css";

const STEPS = [
  {
    n: "Step 01 · 20 min",
    title: "Intro call",
    body: "We figure out if your story, your ICP, and our way of working actually fit. No pitch. If it's not a fit, we'll tell you straight.",
  },
  {
    n: "Step 02 · Week 1",
    title: "Onboarding sprint",
    body: "A 90-min founder voice call (for content) or creative brief deep-dive (for video and ads). ICP and goal alignment. By end of week 1, your engine is built and the first batch is in production.",
  },
  {
    n: "Step 03 · Monthly",
    title: "Cadence",
    body: "Weekly batches delivered for your approval. We handle production, posting, engagement, analytics. 45-min monthly review.",
  },
];

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.wrap}>
        <SectionHead
          eyebrow="05 / How we work"
          title={
            <>
              Three steps.
              <br />
              No surprises.
            </>
          }
        />
        <div className={styles.steps}>
          {STEPS.map((s, i) => (
            <Reveal key={i} className={styles.step}>
              <div className={styles.n}>{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
