import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./EnterPage.module.css";
import cn from "classnames";

function EnterPage(props) {
  return (
    <div className={cn("container", styles["enter-page"])}>
      <form className={styles["form"]}>
        <h1 className={styles["title"]}>Login</h1>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Login!</Button>
      </form>
    </div>
  );
}

export default EnterPage;
