
import MainTitle from '@/components/MainTitle/MainTitle'
import styles from './CallToAction.module.css'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className={styles.section}>
     <MainTitle classNameModifiers='color' title='¿Listo para tener tu landing profesional?' />
      <Link href="https://wa.me/573001112233" target="_blank" className={styles.button}>
        Solicítala ahora por $300.000
      </Link>
      <p className={styles.subtext}>
        Respuesta rápida por WhatsApp. Entrega en máximo 3 días.
      </p>
    </section>
  )
}

export default CallToAction