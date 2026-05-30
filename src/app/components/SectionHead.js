import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import styles from "./SectionHead.module.css";

// Shared section header: eyebrow label + display title + optional lede.
// `title` may be a string or JSX (e.g. with <br/>).
export default function SectionHead({ eyebrow, title, lede }) {
  return (
    <Reveal className={styles.head}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={styles.title}>{title}</h2>
      {lede && <p className={styles.lede}>{lede}</p>}
    </Reveal>
  );
}
