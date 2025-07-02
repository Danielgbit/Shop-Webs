'use client';

import Link from "next/link";
import styles from "./Header.module.css";
import LinkButton from "../Button/LinkButton";
import logo from '../../../public/images/logo.png';
import useScrollDirection from "@/hooks/useScrollDirection";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Qué incluye", href: "#que-incluye" },
  { label: "Ejemplos", href: "#ejemplos" },
  { label: "Contacto", href: "#contacto" },
  { label: "Testimonios", href: "#testimonios" },
];

const Header = () => {
  const scrollDir = useScrollDirection();

  return (
    <nav className={`${styles.navbar} ${scrollDir === 'down' ? styles.hidden : ''}`}>
      <img src={logo.src} alt="logo" className={styles.logo} />

      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <Link href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <LinkButton href="https://wa.me/573024932976" className={styles.button}>
        ¡Solicita la tuya!
      </LinkButton>
    </nav>
  );
};

export default Header;
