"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import LinkButton from "../Button/LinkButton";
import logo from "../../../public/images/logo.png";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menú"
      >
        <svg
          className={styles.mobileMenuIcon}
          viewBox="0 0 100 80"
          width="24"
          height="24"
          fill="#fffbee"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
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

      {/* Botón Desktop */}

      {/* Menú Móvil */}
      <ul className={`${styles.mobileNavList} ${isMenuOpen ? "open" : ""}`}>
        <li className={styles.mobileNavItem}>
          <Link
            href="https://wa.me/573024932976"
            className={styles.mobileNavLink}
          >
            ¡Solicita la tuya!
          </Link>
        </li>
        {navItems.map((item, index) => (
          <li key={index} className={styles.mobileNavItem}>
            <Link href={item.href} className={styles.mobileNavLink}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
