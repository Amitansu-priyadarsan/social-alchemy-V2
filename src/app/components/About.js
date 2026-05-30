import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <Reveal className={styles.wrap}>
        <div className={styles.head}>
          <Eyebrow>06 / About</Eyebrow>
          <h2 className={styles.title}>
            A small team.
            <br />
            Built for depth.
          </h2>
        </div>
        <div className={styles.body}>
          <p className={styles.lead}>
            We&apos;re a small team building content and creative for AI
            startups, based in Bhubaneswar. Led by{" "}
            <b className={styles.hl}>Aditya Prasad Rath</b>, with a tight crew
            across scripting, video production, and AI creative tooling — and a
            network of specialist collaborators we bring in based on the
            project.
          </p>
          <p className={styles.second}>
            We work with a small number of clients at a time because the work
            requires depth. Currently working with <b>Ringus.AI</b>.
          </p>
          <div className={styles.links}>
            <a href="#">LinkedIn →</a>
            <a href="#">X / Twitter →</a>
            <a href="mailto:hello@socialalchemy.in">Email →</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
