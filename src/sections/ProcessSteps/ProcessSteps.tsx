'use client'

import { motion } from "framer-motion";
import styles from "./ProcessSteps.module.css";

const steps = [
  "Me escribes por WhatsApp 📲",
  "Definimos tus objetivos",
  "Te muestro una propuesta visual",
  "Hacemos ajustes si es necesario",
  "Te entrego la landing en 3 dias",
  "La publicamos y conectamos con WhatsApp",
];

export default function ProcessSteps() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
      className={styles.section}
    >
      <h2 className={styles.title}>¿Cómo funciona el proceso?</h2>
      <ol className={styles.list}>
        {steps.map((s, i) => (
          <li key={i}>
            <span></span>
            {s}
          </li>
        ))}
      </ol>
    </motion.section>
  );
}
