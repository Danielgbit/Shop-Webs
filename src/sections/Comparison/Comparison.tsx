import styles from '../Comparison/Comparison.module.css';

export default function Comparison() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>¿Landing o sitio web completo?</h2>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr className={styles.header}>
            <th className={styles.points}></th>
            <th className={styles.pointsTitle}>Landing Page</th>
            <th className={styles.pointsTitle}>Sitio Web</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.header}>
            <td className={styles.pointsTitle}>Velocidad de carga</td>
            <td className={styles.points}>🚀 Rápida</td>
            <td className={styles.points}>⚠️ Depende del contenido</td>
          </tr>
          <tr className={styles.header}>
            <td className={styles.pointsTitle}>Enfoque</td>
            <td className={styles.points}>🎯 Una sola acción</td>
            <td className={styles.points}>📚 Múltiples secciones</td>
          </tr>
          <tr className={styles.header}>
            <td className={styles.pointsTitle}>Precio</td>
            <td className={styles.points}>💰 Económica</td>
            <td className={styles.points}>💸 Más costosa</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
