'use client'

import LinkButton from "@/components/Button/LinkButton";
import styles from "./Hero.module.css";
import laptop from "../../../public/images/laptop.png";
import tablet from "../../../public/images/tablet.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
      className={styles.hero}
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Landing page profesional por solo <span>$300.000 COP</span>
          </h1>
          <p className={styles.subtitle}>
            Entregada en solo <strong>3 dias</strong>. Optimizada para
            conversión, diseño moderno y adaptable a cualquier dispositivo.
            Ideal para emprendedores y marcas que quieren destacar.
          </p>
          <div className={styles.buttons}>
            <LinkButton href="https://wa.me/573024932976">
              Quiero mi landing
            </LinkButton>
            <LinkButton href="#beneficios" className={styles.secondary}>
              Ver más beneficios
            </LinkButton>
          </div>
        </div>
        <div className={styles.images}>
          <div className={styles.glassCard}>
            <img className={styles.laptop} src={laptop.src} alt="Laptop" />
          </div>
          <img className={styles.tablet} src={tablet.src} alt="Tablet" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
