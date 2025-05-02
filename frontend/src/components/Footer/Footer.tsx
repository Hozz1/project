import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

function Header(props) {
  return (
    <footer className={styles["footer"]}>
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </footer>
  );
}

export default Header;
