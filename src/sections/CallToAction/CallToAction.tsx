import MainTitle from "@/components/MainTitle/MainTitle";
import styles from "./CallToAction.module.css";
import Link from "next/link";
import LinkButton from "@/components/Button/LinkButton";

const CallToAction = () => {
  return (
    <section className={styles.section}>
      <MainTitle
        className=""
        title="¿Listo para tener tu landing profesional?"
      />
      <div className={styles.buttonWrapper}>
          <LinkButton href='https://wa.me/573024932976'>Solicítala ahora por $300.000 COP</LinkButton>
        <div className={styles.shadowButton}></div>
      </div>
      <p className={styles.subtext}>
        Respuesta rápida por WhatsApp. Entrega en máximo 3 días.
      </p>
    </section>
  );
};

export default CallToAction;
