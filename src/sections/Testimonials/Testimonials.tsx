import DesignedTitle from "@/components/DesignedTitle/DesignedTitle"
import styles from './Testimonials.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

const Testimonials = () => {
  return <section className={styles.testimonialsSection}>
    <DesignedTitle
        title="Testimonios"
    />
    <h4 className={styles.headLine}>Lo que dicen quienes ya tienen su landing</h4>
    <div className={styles.testimonialsContainer}>
        <div className={styles.testimonial}>
            <FontAwesomeIcon icon={faUserCircle} className={styles.icon}/>
            <span className={styles.name}>Felipe</span>
            <p className={styles.content}>Excelente servicio, recomendados era bastantes funcionalidades, animaciones magnificas</p>
        </div>
        <div className={styles.testimonial}>
            <FontAwesomeIcon icon={faUserCircle} className={styles.icon}/>
            <span className={styles.name}>Santiago</span>
            <p className={styles.content}>Excelente servicio, recomendados era bastantes funcionalidades, animaciones magnificas</p>
        </div>
        <div className={styles.testimonial}>
            <FontAwesomeIcon icon={faUserCircle} className={styles.icon}/>
            <span className={styles.name}>Sofia</span>
            <p className={styles.content}>Excelente servicio, recomendados era bastantes funcionalidades, animaciones magnificas</p>
        </div>
    </div>
      
    </section>
}

export default Testimonials
