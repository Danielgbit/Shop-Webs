"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import LinkButton from "../Button/LinkButton";
import logo from "../../../public/images/logo.png";
import useScrollDirection from "@/hooks/useScrollDirection";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Qué incluye", href: "#que-incluye" },
  { label: "Ejemplos", href: "#ejemplos" },
  { label: "Contacto", href: "#contacto" },
  { label: "Testimonios", href: "#testimonios" },
];

const Header = () => {
  const scrollDir = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMain = () => {
    if (isMenuOpen === false) {
      setIsMenuOpen(true);
    }else {
      setIsMenuOpen(false);
    };
  };

  
  return (
    <nav
      className={`${styles.navbar} ${
        scrollDir === "down" ? styles.hidden : ""
      }`}
    >
      {/* Logo */}
      <Image
        width={50}
        height={50}
        src={logo.src}
        alt="logo"
        className={styles.logo}
      />

      {/* Menú hamburguesa en móviles */}
      <button
        className={styles.mobileMenuButton}
        onClick={() => handleMain()}
        aria-label="Abrir menú"
      >
        <FontAwesomeIcon icon={faBars} className={styles.mobileMenuButton} />
      </button>

      {/* Menú Desktop */}
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <Link href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          </li>
        ))}

        <LinkButton href="https://wa.me/573024932976" className={styles.button}>
          ¡Solicita la tuya!
        </LinkButton>
      </ul>

      <ul className={isMenuOpen ? styles.navListPhone : styles.block}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <Link href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
