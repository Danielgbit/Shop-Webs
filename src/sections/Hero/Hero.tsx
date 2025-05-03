import LinkButton from "@/components/Button/LinkButton"
import hero from '../../../public/images/hero.png'
import styles from './Hero.module.css'

const Hero = () => {
    return <div className={styles.imageContainer}>
        <img src={hero.src} alt="" />
        <h1 className={`${styles.overlayText} ${styles.top}`}> Landing page profesional por solo $300.000 COP – lista en 72 horas </h1>
        <div className={`${styles.overlayText} ${styles.bottom}`}>
            <LinkButton href='#' className={styles.button}>
                👉 _"Quiero mi landing"_
            </LinkButton>
            <LinkButton href='#' className={`${styles.bottom} ${styles.buttonBottom}`}>
                Explorar beneficios 'flecha'
            </LinkButton>
        </div>
    </div>
}

export default Hero