'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css'

const Footer = () => {
  return <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <p className={styles.logo}>FocusWEB</p>
          <p className={styles.tagline}>Páginas de destino personalizadas que convierten.</p>
        </div>

        <div className={styles.contact}>
          <p className={styles.contactTitle}>Contacto</p>
          <a href="focusweb:info@landingbuilder.com" className={styles.link}>
            <FontAwesomeIcon icon={faMailBulk} className={styles.icon} /> info@FocusWEB.com
          </a>
          <a href="https://wa.me/573001112233" target="_blank" className={styles.link}>
            <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} /> WhatsApp Soporte
          </a>
        </div>

        <div className={styles.social}>
          <p className={styles.contactTitle}>Siguenos</p>
          <a href="https://instagram.com/youraccount" target="_blank" className={styles.link}>
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} /> Instagram
          </a>
        </div>
      </div>

    <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} FocusWEB. Todos los derechos reservados.</p>
        <Link href="/privacy-policy" className={styles.legalLink}>
          Privacy Policy
        </Link>
      </div>
    </footer>
}

export default Footer