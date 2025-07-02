import styles from './TargetAudience.module.css';

const personas = [
  "Emprendedores",
  "Marcas personales",
  "Negocios locales",
  "Eventos y lanzamientos",
  "Tiendas físicas",
  "Servicios profesionales"
];

export default function TargetAudience() {
  return (
    <section id='faq' className={styles.section}>
      <h2 className={styles.title}>¿Para quién es esto?</h2>
      <div className={styles.grid}>
        {personas.map((persona, i) => (
          <div key={i} className={styles.card}>
            🧠 {persona}
          </div>
        ))}
      </div>
    </section>
  );
}
