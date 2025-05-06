import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
import Logo from "../Logo/Logo";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // В реальном приложении это состояние должно приходить из контекста или пропсов
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Обработчик выхода
  const handleLogout = () => {
    // Здесь можно добавить логику выхода, очистить токены и т.п.
    setIsLoggedIn(false);
    closeMenu();
    navigate("/"); // Перенаправление на главную
  };

  // Определяем, на какой странице мы сейчас
  const currentPath = location.pathname;

  // Меню для разных страниц, если не авторизован
  const menuForRegistration = (
    <ul onClick={closeMenu}>
      <li>
        <Link to="/enter" tabIndex={menuOpen ? 0 : -1}>
          Войти
        </Link>
      </li>
      <li>
        <Link to="/" tabIndex={menuOpen ? 0 : -1}>
          Главная
        </Link>
      </li>
    </ul>
  );

  const menuForEnter = (
    <ul onClick={closeMenu}>
      <li>
        <Link to="/registration" tabIndex={menuOpen ? 0 : -1}>
          Регистрация
        </Link>
      </li>
      <li>
        <Link to="/" tabIndex={menuOpen ? 0 : -1}>
          Главная
        </Link>
      </li>
    </ul>
  );

  const defaultMenu = (
    <ul onClick={closeMenu}>
      <li>
        <Link to="/registration" tabIndex={menuOpen ? 0 : -1}>
          Регистрация
        </Link>
      </li>
      <li>
        <Link to="/enter" tabIndex={menuOpen ? 0 : -1}>
          Войти
        </Link>
      </li>
    </ul>
  );

  // Меню после авторизации — кнопка "Выход"
  const loggedInMenu = (
    <ul onClick={closeMenu}>
      <li>
        <button
          onClick={handleLogout}
          className={styles.logoutButton}
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Выйти из аккаунта"
          type="button"
        >
          Выход
        </button>
      </li>
    </ul>
  );

  // Выбираем меню в зависимости от состояния и пути
  let menuToRender;

  if (isLoggedIn) {
    menuToRender = loggedInMenu;
  } else if (currentPath === "/registration") {
    menuToRender = menuForRegistration;
  } else if (currentPath === "/enter") {
    menuToRender = menuForEnter;
  } else {
    menuToRender = defaultMenu;
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link to="/" className={styles.header__logo} aria-label="Перейти на главную">
          <Logo />
        </Link>

        <button
          className={`${styles["menu-toggle"]} ${menuOpen ? styles.open : ""}`}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.header__navigation} ${menuOpen ? styles.open : ""}`}
          aria-label="Основная навигация сайта"
        >
          {menuToRender}
        </nav>
      </div>
    </header>
  );
}

export default Header;


