'use client'

import styles from "./WhatIncluded.module.css";
import image from "../../../public/images/scheme.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faMobileScreenButton,
  faBolt,
  faEnvelope,
  faServer,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const features = [
  {
    icon: faPalette,
    text: "Diseño profesional 100% personalizado",
  },
  {
    icon: faMobileScreenButton,
    text: "Optimizada para celulares",
  },
  {
    icon: faBolt,
    text: "Carga rápida y segura",
  },
  {
    icon: faEnvelope,
    text: "Formularios de contacto funcionales",
  },
  {
    icon: faWhatsapp,
    text: "Conexión a WhatsApp",
  },
  {
    icon: faServer,
    text: "Hosting gratis por 1 año",
  },
  {
    icon: faHeadset,
    text: "Soporte y cambios básicos",
  },
];

const WhatIncluded = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
      id="que-incluye"
      className={styles.container}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>¿Qué incluye la landing de $300.000?</h2>
        <ul className={styles.list}>
          {features.map((feature, index) => (
            <li key={index} className={styles.item}>
              <FontAwesomeIcon icon={feature.icon} className={styles.icon} />
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.imageWrapper}>
        <img src={image.src} className={styles.image} alt="scheme" />
      </div>
    </motion.section>
  );
};

export default WhatIncluded;
