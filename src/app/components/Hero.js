"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import BookCallButton from "./BookCallButton";
import Eyebrow from "./Eyebrow";
import styles from "./Hero.module.css";

const PROMPTS = [
  "Generate 12 LinkedIn posts in founder voice",
  "Script a 60-sec reel from this customer call",
  "Spin 8 AI ad variants from this brief",
  "Find the 3 hooks that beat last month's CTR",
];

export default function Hero() {
  const textRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  // Trigger the entrance reveal once mounted.
  useEffect(() => {
    const id = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Typewriter loop over PROMPTS, cleaned up on unmount.
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let promptIndex = 0;
    let timer;

    const typePrompt = () => {
      const current = PROMPTS[promptIndex];
      let i = 0;
      const tick = () => {
        if (i <= current.length) {
          el.textContent = current.slice(0, i++);
          timer = setTimeout(tick, 38);
        } else {
          timer = setTimeout(() => {
            promptIndex = (promptIndex + 1) % PROMPTS.length;
            typePrompt();
          }, 1500);
        }
      };
      tick();
    };

    typePrompt();
    return () => clearTimeout(timer);
  }, []);

  const reveal = `${styles.reveal} ${revealed ? styles.in : ""}`;

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.wrap}>
        <div className={styles.grid}>
          <div className={`${styles.heroLeft} ${reveal}`}>
            <Eyebrow>v2.6 · Bhubaneswar / Remote · 2024</Eyebrow>
            <h1 className={styles.title}>
              Content &amp; creative{" "}
              <span className={styles.emGrad}>engines</span> for AI startups.
            </h1>
            <p className={styles.sub}>
              We run founder-led LinkedIn, organic video, and AI-generated ad
              creative for AI startups — end-to-end. You approve and show up. We
              do the rest.
            </p>
            <div className={styles.ctas}>
              <BookCallButton size="lg">
                Book a 20-min intro call <span aria-hidden="true">→</span>
              </BookCallButton>
              <Button href="#engines" variant="ghost" size="lg">
                See the engines
              </Button>
            </div>
            <div className={styles.meta}>
              <span className={styles.dotLive} /> Live with Ringus.AI · 2 spots
              open Q3
            </div>
          </div>

          <div className={reveal}>
            <div className={styles.stage}>
              <div className={styles.rings}>
                <span />
                <span />
                <span />
              </div>
              <div className={styles.orb} />
              <span className={`${styles.chip} ${styles.c1}`}>Founder voice</span>
              <span className={`${styles.chip} ${styles.c2}`}>12 hooks/wk</span>
              <span className={`${styles.chip} ${styles.c3}`}>
                8.3K impressions
              </span>
              <span className={`${styles.chip} ${styles.c4}`}>3 inbound</span>
              <div className={styles.prompt}>
                <span className={styles.chev} aria-hidden="true">
                  ▸
                </span>
                <span className={styles.text} ref={textRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
