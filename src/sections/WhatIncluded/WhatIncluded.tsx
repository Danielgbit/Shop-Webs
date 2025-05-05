import styles from './WhatIncluded.module.css'
import image from '../../../public/images/scheme.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Íconos sólidos (free-solid-svg-icons)
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

// Íconos de marcas (free-brands-svg-icons)
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const WhatIncluded = () => {
    
  return <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>¿Qué incluye la landing de $300.000?</h2>
        <ul className={styles.list}>
            <li className={styles.item}><FontAwesomeIcon icon={faPalette} className={styles.icon} /> Diseño profesional 100% personalizado</li>
            <li className={styles.item}><FontAwesomeIcon icon={faMobileScreenButton} className={styles.icon} /> Optimizada para celulares</li>
            <li className={styles.item}><FontAwesomeIcon icon={faBolt} className={styles.icon} /> Carga rápida y segura</li>
            <li className={styles.item}><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Formularios de contacto funcionales</li>
            <li className={styles.item}><FontAwesomeIcon icon={faWhatsapp} className={styles.icon} /> Conexión a WhatsApp</li>
            <li className={styles.item}><FontAwesomeIcon icon={faServer} className={styles.icon} /> Hosting gratis por 1 año (si lo ofreces)</li>
            <li className={styles.item}><FontAwesomeIcon icon={faHeadset} className={styles.icon} /> Soporte y cambios básicos</li>
        </ul>
      </div>
      <div className={styles.imageWrapper}>
        <img src={image.src} className={styles.image} alt="scheme" />
      </div>
    </section>
}

export default WhatIncluded
