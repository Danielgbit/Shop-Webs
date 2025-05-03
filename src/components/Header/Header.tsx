import Link from "next/link";
import styles from "./Header.module.css";
import LinkButton from "../Button/LinkButton";
import logo from '../../../public/images/logo.jpg'

const Header = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <img src={logo.src} alt="logo" className={styles.logo} />
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="#">
              Inicio
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="#">
              Que incluye
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="#">
              Ejemplos
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="#">
              Contacto
            </Link>
          </li>
        </ul>
        <LinkButton href={'#'} className={styles.button}>
          ¡Solicita la tuya!
        </LinkButton>
      </nav>
    </>
  );
};

export default Header;
