import Logo from "./components/logo";
import Menu from "./components/menu";
import Name from "./components/name";
import VM from "./components/vm";
import Model from "./components/model";
import Carousel from "./components/carousel";
import Price from "./components/price";
import Cart from "./components/cart";
import Script from 'next/script';

import { useEffect, useState } from 'react';

import styles from './components/configure.module.css';

export default function App() {
  const [configure, setConfigure] = useState();
  useEffect(() => {
    return document.addEventListener('configureApp', (e: any) => {
      const { configureApp } = e.detail;
      const params = {
        workflow: 'dev',
        product: 26101,
        customer: 1581
      };
      configureApp(params, (err: any, configure: any) => {
        if (!err) {
          setConfigure(configure);
        }
      });
    });
  },[]);
  return (
    <div className={styles.configureWrapper}>
      <Script
        src="//cdn-prod.fluidconfigure.com/static/code/configure-ui/stable/js/configure-app.js"
        strategy="afterInteractive"
      />
      <Script
        src="//rtrmv.essilorluxottica.com/lib/v/3.0.3/main.umd.js"
        strategy="afterInteractive"
      />
      <Script
        src="//vmmv-uat.luxottica.com/v/4.13/index.umd.js"
        strategy="afterInteractive"
      />
      <Script
        src="//rxc.luxottica.com/rxc3/fe/test/v1.5.2/dist/rxc.js"
        strategy="afterInteractive"
      />
      <section className={styles.flexContainer}>
        <Logo/>
        <Menu/>
      </section>
      <section className={styles.sectionSeparation}>
        <Name/>
        <VM/>
      </section>
      <section className={styles.modelSection}>
        <div className="fc-carousel-wrapper"></div>
        {!configure ? <Model/> : <Carousel configure={configure}/>}
      </section>
      <section className={styles.bottomSection}>
        <Price/>
        <Cart/>
      </section>
    </div>
  );
}
