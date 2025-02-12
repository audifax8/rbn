import React from "react";
import styles from './price.module.css';

export default function Price() {
  return (
    <section className={styles.priceSection}>
      <span className={styles.finalPrice}>$180.00</span>
      <s className={styles.originalPrice}>$200.00</s>
      <span className={styles.discount}>-20%</span>
    </section>
  );
}