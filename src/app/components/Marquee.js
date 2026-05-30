import styles from "./Marquee.module.css";

const PHRASES = [
  "Founder-led LinkedIn",
  "Organic video",
  "AI ad creative",
  "Built for AI startups",
  "5 clients max",
  "Productized engines",
  "Live with Ringus.AI",
  "2 spots open Q3",
];

export default function Marquee() {
  return (
    <div className={styles.band}>
      <div className={styles.marquee}>
        {/* Rendered twice so the -50% translate loops seamlessly */}
        <div className={styles.track} aria-hidden="false">
          {PHRASES.map((p, i) => (
            <span key={`a-${i}`}>{p}</span>
          ))}
          {PHRASES.map((p, i) => (
            <span key={`b-${i}`} aria-hidden="true">
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
