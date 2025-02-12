import React from "react";
import Image from "next/image";
import styles from './vm.module.css';

export default function VM() {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.vmButton}>
        <Image
          className="dark:invert"
          src="/vm.svg"
          alt="vm logo"
          width={18}
          height={18}
          priority
        />
        <span className={styles.vmLabel}>try on</span>
      </button>
    </div>
  );
}