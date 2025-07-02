'use client'

import { motion } from "framer-motion";
import MainTitle from "@/components/MainTitle/MainTitle";
import styles from "./CallToAction.module.css";
import LinkButton from "@/components/Button/LinkButton";

const CallToAction = () => {
  return (
    <motion.section
      id="contacto"
      className={styles.section}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}

    >
      <MainTitle
        className=""
        title="¿Listo para tener tu landing profesional?"
      />
      <div className={styles.buttonWrapper}>
        <LinkButton href="https://wa.me/573024932976">
          Solicítala ahora por $300.000 COP
        </LinkButton>
        <div className={styles.shadowButton}></div>
      </div>
      <p className={styles.subtext}>
        Respuesta rápida por WhatsApp. Entrega en máximo 3 días.
      </p>
    </motion.section>
  );
};

export default CallToAction;
