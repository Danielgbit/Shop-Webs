import MainTitle from "@/components/MainTitle/MainTitle";
import styles from "./CallToAction.module.css";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className={styles.section}>
      <MainTitle
        className=""
        title="¿Listo para tener tu landing profesional?"
      />
      <div className={styles.buttonWrapper}>
        <Link
          href="https://wa.me/573024932976"
          target="_blank"
          className={styles.button}
        >
          Solicítala ahora por $300.000
        </Link>
        <div className={styles.shadowButton}></div>
      </div>
      <p className={styles.subtext}>
        Respuesta rápida por WhatsApp. Entrega en máximo 3 días.
      </p>
    </section>
  );
};

export default CallToAction;
