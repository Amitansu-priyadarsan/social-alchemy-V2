"use client";

import Reveal from "./Reveal";
import styles from "./Engines.module.css";

// One pricing/engine card. Tracks the cursor to drive the --mx/--my
// spotlight gradient, and reveals on scroll via Reveal.
export default function EngineCard({
  num,
  label,
  title,
  lede,
  bullets,
  bestFor,
  featured = false,
  art,
}) {
  const handleMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <Reveal
      as="article"
      className={`${styles.engine} ${featured ? styles.featured : ""}`}
      onMouseMove={handleMove}
    >
      <div className={styles.num}>
        <span>{num}</span>
        <span>{label}</span>
      </div>
      <div className={styles.art}>{art}</div>
      <h3>{title}</h3>
      <p className={styles.lede}>{lede}</p>
      <ul>
        {bullets.map((b, i) => (
          <li key={i}>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className={styles.best}>
        <b>Best for</b> · {bestFor}
      </div>
    </Reveal>
  );
}
