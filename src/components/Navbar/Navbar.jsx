import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="data:image/png;base64,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"
        alt="este es el logo de la empresa"
      />
      <h1>jsv ski & sport</h1>
      <ul className={styles.containerUl}>
        <li>productos</li>
        <li>masculino</li>
        <li>femenino</li>
        <li>niños</li>
      </ul>
      <CartWidget />
    </div>
  );
};
