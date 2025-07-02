"use client";

import { motion } from "framer-motion";
import styles from "./TargetAudience.module.css";

const personas = [
  "Emprendedores",
  "Marcas personales",
  "Negocios locales",
  "Eventos y lanzamientos",
  "Tiendas físicas",
  "Servicios profesionales",
];

export default function TargetAudience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
      id="faq"
      className={styles.section}
    >
      <h2 className={styles.title}>¿Para quién es esto?</h2>
      <div className={styles.grid}>
        {personas.map((persona, i) => (
          <div key={i} className={styles.card}>
            🧠 {persona}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
