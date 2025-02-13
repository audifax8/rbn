import React from "react";
import Image from "next/image";

import styles from './model.module.css';

export default function Model() {
  return (
    <div className="col-4">
       <Image
        className={styles.img}
        //src="/img/rbn.png"
        src="https://prod.fluidconfigure.com/imagecomposer/generate/?view=FFL&recipe=4%2C0%2C7%2C40%2C0%2C0%2C18%2C240%2C0%2C1%2C0%2C3%2C0%2C0%2C102%2C4%2C3%2C0%2C19%2C7%2C-1%2C-1%2C-1%2C-1%2C1%2C0%2C0%2C-1%2C%7B%22text%22%3A%22%22%7D%2C%7B%22text%22%3A%22%22%7D%2C-1%2C0%2C21%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C2%2C2%2C13%2C%7B%22text%22%3A%22%22%7D%2C%7B%22text%22%3A%22%22%7D%2C1%2C0%2C13%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%2C1%2C0%2C-1%2C0&apiKey=LUX-Ray-Ban-8taOhSR5AFyjt9tfxU&workflow=prod&environment=prod&customerId=1581&productId=22956&configVersion=1736506896155&publishedTime=02%2F12%2F2025%2010%3A55%3A31&purpose=serverDisplay&format=png&trim=false&padding=0&scale=0.5&binary=true&quality=91"
        alt="Next.js logo"
        width={100}
        height={100}
        priority
      />
    </div>
  );
}