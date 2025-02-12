import React from "react";
import Image from "next/image";

import styles from './logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src="/rbn.svg"
        alt="Next.js logo"
        width={73}
        height={32}
        priority
      />
    </div>
  );
}