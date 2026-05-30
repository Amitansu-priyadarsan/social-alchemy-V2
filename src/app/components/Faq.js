"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";
import styles from "./Faq.module.css";

const FAQS = [
  {
    q: "How is this different from a content agency or a freelancer?",
    a: "We run productized engines, not custom projects. You know exactly what you get every month. You're hiring a content and creative function, not a vendor you have to brief from scratch every time.",
  },
  {
    q: "Do you only work with AI startups?",
    a: "Yes. The work compounds when we understand the space deeply — the buyer, the investor language, the product narratives, the creative references that resonate.",
  },
  {
    q: "Can we start with just one service?",
    a: "Most clients start with one engine. Many add a second after 60 days once the first is producing. Stacking is optional, never required.",
  },
  {
    q: "I don't have time for a long onboarding.",
    a: "The founder voice call is 90 minutes, once. For video and ad clients, the creative brief takes a similar one-time investment. After that, your weekly commitment is approving work — usually 20–30 minutes.",
  },
  {
    q: "What if it doesn't work?",
    a: "The first 30 days are the test. If you don't see measurable lift in reach, engagement, and the start of inbound conversations (for content), or measurable creative output and ad performance lift (for video and ads), we have an honest conversation about whether to continue. We'd rather lose a client at day 30 than waste your money for 6 months.",
  },
  {
    q: "How many clients do you take at a time?",
    a: "Maximum 5 across all three services. The work is too involved to do well at higher volume.",
  },
];

export default function Faq() {
  // Single-open accordion; first item open by default.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.wrap}>
        <SectionHead
          eyebrow="07 / FAQ"
          title={
            <>
              Questions, answered
              <br />
              without dancing.
            </>
          }
        />
        <div className={styles.list}>
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
              >
                <button
                  type="button"
                  className={styles.q}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className={styles.plus} aria-hidden="true" />
                </button>
                <div className={styles.answer}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
