import LinkButton from "@/components/Button/LinkButton"
import hero from '../../../public/images/hero.png'
import styles from './Hero.module.css'
import MainTitle from "@/components/MainTitle/MainTitle"

const Hero = () => {
    return <section className={styles.imageContainer}>
        <img src={hero.src} alt="" />
        <MainTitle className="" title="Landing page profesional por solo $300.000 COP – lista en 72 horas"/>
        <div className={`${styles.overlayText} ${styles.bottom}`}>
            <LinkButton href='#' className={styles.button}>
                👉 Quiero mi landing
            </LinkButton>
            <LinkButton href='#' className={`${styles.bottom} ${styles.buttonBottom}`}>
                Explorar beneficios
            </LinkButton>
        </div>
    </section>
}

export default Hero