import { faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import styles from './Portafolio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import landingOne from '../../../public/images/landing-page-1.png'
import landingTwo from '../../../public/images/landing-page-2.png'
import DesignedTitle from '@/components/DesignedTitle/DesignedTitle'
import MainTitle from '@/components/MainTitle/MainTitle'


const Portafolio = () => {
  return <section className={styles.portafolioSection}>
      <DesignedTitle
        title='Portafolio'
      />
    <div className={styles.headlineSection}>
        <MainTitle className='' title='Mira algunos ejemplos recientes'/>
        <p className={styles.description}>Cada landing page que desarrollo está diseñada a la medida de las necesidades del cliente, cuidando tanto la estética como el rendimiento. </p>  
    </div>
      <div className={styles.imageGallery}>
        <img src={landingOne.src} alt="landing-page" />
        <img src={landingTwo.src} alt="landing-page" />
      </div>
      <div className={styles.toolsSection}>
        <div className={styles.toolsTitle}>Herramientas utilizadas</div>
        <ul className={styles.toolsList}>
            <li className={styles.toolItem}> <FontAwesomeIcon icon={faReact}/> React</li>
            <li className={styles.toolItem}> <FontAwesomeIcon icon={faJs}/> JavaScript</li>
            <li className={styles.toolItem}> <FontAwesomeIcon icon={faNode}/> NodeJS</li>
            <li className={styles.toolItem}> <FontAwesomeIcon icon={faHtml5}/> HTML</li>
        </ul>
      </div>
    </section>
}

export default Portafolio
