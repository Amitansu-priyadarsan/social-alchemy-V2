import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import styles from "./Case.module.css";

const STATS = [
  { n: <span className={styles.accent}>22→1,302</span>, l: "Followers in 30 days" },
  { n: "8,359", l: "Impressions (vs. 76 in prior 60 days)" },
  { n: "1,901", l: "Top post impressions" },
  { n: "3", l: "Qualified outbound conversations" },
];

// Area chart of daily impressions over 30 days.
function GrowthChart() {
  return (
    <div className={styles.chart}>
      <svg viewBox="0 0 600 280" style={{ width: "100%", height: "100%" }}>
        <defs>
          <linearGradient id="caseGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="28" x2="572" y1="84.0" y2="84.0" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4" />
        <line x1="28" x2="572" y1="140.0" y2="140.0" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4" />
        <line x1="28" x2="572" y1="196.0" y2="196.0" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4" />
        <polyline
          points="28,252 28.0,248.4 46.8,246.6 65.5,247.1 84.3,244.8 103.0,245.5 121.8,243.5 140.6,242.1 159.3,239.5 178.1,235.9 196.8,231.4 215.6,226.0 234.3,219.7 253.1,212.6 271.9,205.4 290.6,196.4 309.4,188.4 328.1,180.3 346.9,171.4 365.7,161.5 384.4,150.8 403.2,137.3 421.9,122.1 440.7,106.8 459.4,92.5 478.2,80.0 497.0,68.3 515.7,56.7 534.5,45.9 553.2,36.1 572.0,28.0 572,252"
          fill="url(#caseGradient)"
          stroke="none"
        />
        <polyline
          points="28.0,248.4 46.8,246.6 65.5,247.1 84.3,244.8 103.0,245.5 121.8,243.5 140.6,242.1 159.3,239.5 178.1,235.9 196.8,231.4 215.6,226.0 234.3,219.7 253.1,212.6 271.9,205.4 290.6,196.4 309.4,188.4 328.1,180.3 346.9,171.4 365.7,161.5 384.4,150.8 403.2,137.3 421.9,122.1 440.7,106.8 459.4,92.5 478.2,80.0 497.0,68.3 515.7,56.7 534.5,45.9 553.2,36.1 572.0,28.0"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="572.0" cy="28.0" r="5" fill="var(--accent)" />
        <circle cx="572.0" cy="28.0" r="10" fill="var(--accent)" opacity="0.25" />
        <text x="28" y="20" fill="var(--fg-soft)" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="0.06em">
          DAILY IMPRESSIONS · 30 DAYS
        </text>
        <text x="572" y="20" textAnchor="end" fill="var(--accent)" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="0.06em">
          +8,359 TOTAL
        </text>
      </svg>
    </div>
  );
}

export default function Case() {
  return (
    <section id="case" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal className={styles.case}>
          <div>
            <Eyebrow>04 / Case study · Ringus.AI</Eyebrow>
            <h2 className={styles.title}>
              From <span className={styles.accent}>dormant</span> to{" "}
              <span className={styles.accent}>1,302</span> followers in 30 days.
            </h2>
            <p className={styles.lede}>
              A 30-day content + outreach engine for an AI calling startup — and
              the honest story of what happened when growth started slowing.
            </p>
            <GrowthChart />
            <a className={styles.readMore} href="#">
              Read the full case study <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className={styles.stats}>
            {STATS.map((s, i) => (
              <div key={i} className={styles.stat}>
                <div className={styles.n}>{s.n}</div>
                <div className={styles.l}>{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
