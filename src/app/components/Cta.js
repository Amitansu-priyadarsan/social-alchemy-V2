import BookCallButton from "./BookCallButton";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <section id="cta" className={styles.section}>
      <Reveal className={styles.inner}>
        <Eyebrow>08 / Let&apos;s talk</Eyebrow>
        <h2 className={styles.title}>
          Want this for
          <br />
          your <span className={styles.emGrad}>AI startup?</span>
        </h2>
        <p className={styles.lede}>
          20-minute intro call. No pitch. We&apos;ll figure out if it&apos;s a
          fit.
        </p>
        <BookCallButton size="xl">
          Book a call <span aria-hidden="true">→</span>
        </BookCallButton>
        <p className={styles.note}>Or DM Aditya on LinkedIn →</p>
      </Reveal>
    </section>
  );
}
