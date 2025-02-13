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
import { RTR_API } from "@/services/rtrApi";

declare global {
  interface Window {
    rtrViewerMV: any;
  }
}

export default function App() {
  const [configure, setConfigure] = useState();
  useEffect(() => {
    return document.addEventListener('configureApp', (e: any) => {
      const { configureApp } = e.detail;
      const params = {
        workflow: 'dev',
        //Mega Way
        product: 26101,
        //Aviator
        //product: 22956,
        customer: 1581
      };
      configureApp(params, async (err: any, configure: any) => {
        if (!err) {
          setConfigure(configure);
          /*const waitForScriptToLoad = (checkTimeMs: number, timeOutMs: number) => {
            let elapsedTime = 0;
            let loaded = false;
            return new Promise((resolve, reject) => {
              const time = setInterval(() => {
                elapsedTime += checkTimeMs;
                if (window.rtrViewerMV) {
                  loaded = true;
                  resolve({
                    time: (elapsedTime / 1000).toFixed(2) + 's'
                  });
                  clearInterval(time);
                } else if (elapsedTime > timeOutMs && !loaded) {
                  reject({
                    time: elapsedTime
                  });
                  clearInterval(time);
                }
              }, checkTimeMs);
            });
          };

          await waitForScriptToLoad(100, 20000);
          const rtrApi = new RTR_API(window.rtrViewerMV, configure);
          rtrApi.init();*/
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
        strategy="lazyOnload"
      />
      <Script
        src="//rxc.luxottica.com/rxc3/fe/test/v1.5.2/dist/rxc.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
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
        <div id="rtr-container" className={styles.rtr}></div>
      </section>
      <section className={styles.bottomSection}>
        <Price/>
        <Cart/>
      </section>
    </div>
  );
}
