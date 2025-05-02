import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./RegistrationPage.module.css";
import cn from "classnames";

function RegistrationPage(props) {
  return (
    <div className={cn("container", styles["enter-page"])}>
      <form className={styles["form"]}>
        <h1 className={styles["title"]}>Registration</h1>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Repeat password" />
        <Button>Registration!</Button>
        <p>
          Have an account? <Link to="/enter">Login!</Link>
        </p>
      </form>
    </div>
  );
}

export default RegistrationPage;
