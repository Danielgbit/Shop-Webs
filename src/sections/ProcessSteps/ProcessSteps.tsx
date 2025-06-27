import styles from './ProcessSteps.module.css';

const steps = [
  "Me escribes por WhatsApp 📲",
  "Definimos tus objetivos",
  "Te muestro una propuesta visual",
  "Hacemos ajustes si es necesario",
  "Te entrego la landing en 72 horas",
  "La publicamos y conectamos con WhatsApp"
];

export default function ProcessSteps() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>¿Cómo funciona el proceso?</h2>
      <ol className={styles.list}>
        {steps.map((s, i) => (
          <li key={i}><span></span>{s}</li>
        ))}
      </ol>
    </section>
  );
}
