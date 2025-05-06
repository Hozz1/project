import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.topRow}>
          <Link to="/" aria-label="Перейти на главную страницу" className={styles.logoLink}>
            <Logo />
          </Link>

          <nav className={styles.nav} aria-label="Основные ссылки сайта">
            <ul className={styles.navList}>
              <li><Link to="/" className={styles.navLink}>О нас</Link></li> 
              <li><Link to="/" className={styles.navLink}>Контакты</Link></li>
            </ul>
          </nav>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Few. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

