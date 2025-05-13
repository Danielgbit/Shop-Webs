import LinkButton from "@/components/Button/LinkButton"
import styles from './Hero.module.css'
import MainTitle from "@/components/MainTitle/MainTitle"
import laptop from '../../../public/images/laptop.png'
import tablet from '../../../public/images/tablet.png'


const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.imagesWrapper}>
            <div>
                <img className={styles.laptop} src={laptop.src} alt="Laptop" />
                <div className={styles.shadowLaptop}></div>
            </div>
            <div>
                <img className={styles.tablet} src={tablet.src} alt="Tablet" />
                <div className={styles.shadowtablet}></div>
            </div>
        </div>
        <MainTitle className="" title="Landing page profesional por solo $300.000 COP – lista en 72 horas"/>
        <div className={`${styles.overlayText}`}>
            <LinkButton href="https://wa.me/573024932976" className={styles.button}>
                Quiero mi landing
            </LinkButton>
            <LinkButton href='#' className={`${styles.buttonBottom}`}>
                Explorar beneficios
            </LinkButton>
        </div>
    </section>
}

export default Hero