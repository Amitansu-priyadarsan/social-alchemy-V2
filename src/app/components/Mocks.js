import styles from "./Mocks.module.css";

// A fake LinkedIn post card.
export function LinkedInMock({
  avatar = "SF",
  name = "Startup Founder",
  sub = "AI Startup · 2d",
  lead,
  highlights = [],
  stats = [],
}) {
  return (
    <div className={styles.liPost}>
      <div className={styles.liHead}>
        <div className={styles.liAvatar}>{avatar}</div>
        <div className={styles.liMeta}>
          <b>{name}</b>
          <div className={styles.liSub}>{sub}</div>
        </div>
      </div>
      <div className={styles.liBody}>
        {lead}
        {highlights.map((h, i) => (
          <div key={i} style={{ marginTop: 6 }}>
            <span className={styles.high}>{h}</span>
          </div>
        ))}
      </div>
      <div className={styles.liStats}>
        {stats.map((s, i) => (
          <span key={i}>
            <b>{s.value}</b> {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// A fake short-form video frame.
export function VideoMock({ badge, caption, duration }) {
  return (
    <div className={styles.vidMock}>
      <div className={styles.silhouette} />
      <div className={styles.badge}>{badge}</div>
      <div className={styles.play} />
      <div className={styles.caption}>{caption}</div>
      <div className={styles.duration}>{duration}</div>
    </div>
  );
}

// A 2x2 grid of ad-creative variants.
export function AdMock({ cells }) {
  return (
    <div className={styles.adMock}>
      {cells.map((c, i) => (
        <div key={i} className={styles.adCell}>
          <span>{c}</span>
        </div>
      ))}
    </div>
  );
}
