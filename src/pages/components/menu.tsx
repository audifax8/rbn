import React from "react";
import Image from "next/image";
import styles from './menu.module.css';

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Image
        className="dark:invert"
        src="/menu.svg"
        alt="Next.js logo"
        width={28}
        height={12}
        priority
      />
    </div>
  );
}