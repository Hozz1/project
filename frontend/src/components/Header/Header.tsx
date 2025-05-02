import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import cn from "classnames";
import Logo from "../Logo/Logo";

function Header(props) {
  return (
    <header className={styles["header"]}>
      <div className={cn("container", styles["header__wrapper"])}>
        <Link to="/">
          <Logo />
        </Link>
        <nav className={styles["header__navigation"]}>
          <ul>
            <li>
              <Link to="/registration">Регистрация</Link>
            </li>
            <li>
              <Link to="/enter">Войти</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
