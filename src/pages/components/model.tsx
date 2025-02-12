import React from "react";
import Image from "next/image";

import styles from './model.module.css';

export default function Model() {
  return (
    <div className="col-4">
       <Image
        className={styles.img}
        src="/img/rbn.png"
        alt="Next.js logo"
        width={100}
        height={100}
        priority
      />
    </div>
  );
}