import Logo from "./components/logo";
import Menu from "./components/menu";
import Name from "./components/name";
import VM from "./components/vm";
import Model from "./components/model";
import Price from "./components/price";
import Cart from "./components/cart";

import styles from './components/configure.module.css';

export default function App() {
  return (
    <div className={styles.configureWrapper}>
      <section className={styles.flexContainer}>
        <Logo/>
        <Menu/>
      </section>
      <section className={styles.sectionSeparation}>
        <Name/>
        <VM/>
      </section>
      <section className={styles.modelSection}>
        <Model/>
      </section>
      <section className={styles.bottomSection}>
        <Price/>
        <Cart/>
      </section>
    </div>
  );
}
