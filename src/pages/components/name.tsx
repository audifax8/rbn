import React from "react";
import styles from './name.module.css'

export default function Name() {
  return (
    <div className={styles.nameContainer}>
      <h1 className={styles.name}>Mega Wayfarer</h1>
    </div>
  );
}