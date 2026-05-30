import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import styles from "./Problem.module.css";

export default function Problem() {
  return (
    <section id="problem" className={styles.section}>
      <Reveal className={styles.grid}>
        <Eyebrow>01 / The problem</Eyebrow>
        <div>
          <p className={styles.p}>
            Most AI founders know content matters.{" "}
            <span className={styles.quiet}>
              None of them have time to do it well.
            </span>{" "}
            You&apos;re building the product, closing customers, hiring,
            fundraising. Posting consistently keeps slipping to next week. Your
            ad creative is a Canva template. Your YouTube channel is empty.
          </p>
          <p className={`${styles.p} ${styles.p2}`}>
            Meanwhile, the AI founders who show up consistently are the ones
            getting inbound from your customers, your investors, and your future
            hires.
          </p>
          <p className={`${styles.p} ${styles.punch}`}>
            You don&apos;t have a content problem. You have a <em>time</em>{" "}
            problem.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
