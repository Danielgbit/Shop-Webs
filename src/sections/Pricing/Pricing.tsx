import styles from './Pricing.module.css';

const plans = [
  {
    name: "Básico",
    price: "$300.000 COP",
    features: ["Landing 1 sección", "Responsive", "3 dias", "Hosting 1 año"]
  },
  {
    name: "Premium",
    price: "$450.000 COP",
    features: ["Hasta 3 secciones", "Texto optimizado", "1 semana", "WhatsApp + SEO"]
  },
  {
    name: "Pro",
    price: "$600.000 COP",
    features: ["5 secciones", "Copywriting pro", "Integración extra", "Mantenimiento"]
  }
];

export default function Pricing() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Planes y precios</h2>
      <div className={styles.grid}>
        {plans.map((plan, i) => (
          <div key={i} className={styles.card}>
            <h3>{plan.name}</h3>
            <p className={styles.price}>{plan.price}</p>
            <ul>
              {plan.features.map((f, i) => <li className={styles.list} key={i}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
