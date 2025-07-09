"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../public/images/logo.png";
import useScrollDirection from "@/hooks/useScrollDirection";
import LinkButton from "../Button/LinkButton";
import styles from "./Header.module.css";

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

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className={`${styles.navbar} ${scrollDir === "down" ? styles.hidden : ""}`}>
      <Link href="#">
        <Image width={50} height={50} src={logo.src} alt="logo" className={styles.logo} />
      </Link>

      {isMenuOpen ? (
      <button className={styles.mobileMenuButton} onClick={toggleMenu} aria-label="Abrir menú">
        <FontAwesomeIcon icon={faClose} className={styles.mobileIcon} />
      </button>
      ) : (
      <button className={styles.mobileMenuButton} onClick={toggleMenu} aria-label="Abrir menú">
        <FontAwesomeIcon icon={faBars} className={styles.mobileIcon} />
      </button>
      )}


      <ul className={styles.navList}>
        {navItems.map(({ label, href }, index) => (
          <li key={index} className={styles.navItem}>
            <Link href={href} className={styles.navLink}>
              {label}
            </Link>
          </li>
        ))}
        <LinkButton href="https://wa.me/573024932976" className={styles.button}>
          ¡Solicita la tuya!
        </LinkButton>
      </ul>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className={styles.navListPhone}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map(({ label, href }, index) => (
              <li key={index} className={styles.navItem}>
                <Link href={href} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
