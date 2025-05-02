import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  return <>
    <nav className={styles.navbar}>
      <img src="" alt="logo" className={styles.logo} />
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="#">Inicio</Link>
          </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="#">Que incluye</Link>
          </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="#">Ejemplos</Link>
          </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="#">Contacto</Link>
          </li>
      </ul>
    <button>Solicita la tuya!</button> 
  </nav>
  </>
}

export default Header