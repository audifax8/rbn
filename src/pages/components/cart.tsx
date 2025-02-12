import React from "react";
import styles from './cart.module.css';

export default function Cart() {
  return (
    <button className={styles.cart}>
      <span className={styles.label}>
        add to cart
      </span>
    </button>
  );
}