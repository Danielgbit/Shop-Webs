'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Marca */}
        <div className={styles.section}>
          <Image width={80} height={80} alt='Logo' src={logo} className={styles.logo}/>
          <p className={styles.description}>
            Creamos landing pages efectivas que generan resultados reales. Entregas rápidas, diseño limpio y enfoque en conversión.
          </p>
        </div>

        {/* Navegación */}
        <div className={styles.section}>
          <h4 className={styles.title}>Navegación</h4>
          <ul className={styles.navList}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/#que-incluye">Que incluye</Link></li>
            <li><Link href="/#contacto">Contacto</Link></li>
            <li><Link href="/#faq">Preguntas</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className={styles.contact}>  
          <h4 className={styles.title}>Contacto</h4>
          <a href="mailto:info@FocusWEB.com" className={styles.link}>
            <FontAwesomeIcon icon={faEnvelope} /> focuswebssite@gmail.com
          </a>
          <a href="https://wa.me/573001112233" target="_blank" className={styles.link}>
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
        </div>

        {/* Redes Sociales */}
        <div className={styles.section}>
          <h4 className={styles.title}>Síguenos</h4>
          <div className={styles.socials}>
            <a href="https://instagram.com/focusw3b" target="_blank" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61567470701712" target="_blank" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} FocusW3B. Todos los derechos reservados.</p>
        <Link href="/privacy-policy" className={styles.legalLink}>
          Política de privacidad
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
