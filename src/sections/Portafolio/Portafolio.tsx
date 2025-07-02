'use client'

import {
  faHtml5,
  faJs,
  faNode,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Portafolio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import landingOne from "../../../public/images/WEB-1.png";
import landingTwo from "../../../public/images/WEB-2.png";
import DesignedTitle from "@/components/DesignedTitle/DesignedTitle";
import MainTitle from "@/components/MainTitle/MainTitle";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Portafolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
      id="ejemplos"
      className={styles.portafolioSection}
    >
      <DesignedTitle title="Portafolio" />
      <div className={styles.headlineSection}>
        <MainTitle className="" title="Mira algunos ejemplos recientes" />
        <p className={styles.description}>
          Cada landing page que desarrollo está diseñada a la medida de las
          necesidades del cliente, cuidando tanto la estética como el
          rendimiento.
        </p>
      </div>
      <div className={styles.imageGallery}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://centrodeesteticalulu.vercel.app"
        >
          <Image
            width={600}
            height={300}
            src={landingOne.src}
            alt="landing-page-1"
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://emunak.vercel.app"
        >
          <Image
            width={600}
            height={300}
            src={landingTwo.src}
            alt="landing-page-2"
          />
        </Link>
      </div>
      <div className={styles.toolsSection}>
        <div className={styles.toolsTitle}>Herramientas utilizadas</div>
        <ul className={styles.toolsList}>
          <li className={styles.toolItem}>
            <FontAwesomeIcon icon={faReact} /> React
          </li>
          <li className={styles.toolItem}>
            <FontAwesomeIcon icon={faJs} /> JavaScript
          </li>
          <li className={styles.toolItem}>
            <FontAwesomeIcon icon={faNode} /> NodeJS
          </li>
          <li className={styles.toolItem}>
            <FontAwesomeIcon icon={faHtml5} /> HTML
          </li>
          <li className={styles.toolItem}>
            <FontAwesomeIcon icon={faWordpress} /> WordPress
          </li>
          <li className={styles.toolItem}>
            <FontAwesomeIcon icon={faReact} /> NextJS
          </li>
          <li className={styles.toolItem}>
            <FontAwesomeIcon icon={faDatabase} /> SQL
          </li>
          <li className={styles.toolItem}>
            <FontAwesomeIcon icon={faDatabase} /> FireBase
          </li>
          <li className={styles.toolItem}>
            <FontAwesomeIcon icon={faDatabase} /> MongoDB
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Portafolio;
