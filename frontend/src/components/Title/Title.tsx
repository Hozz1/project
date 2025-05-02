import styles from "./Title.module.css";
import cn from "classnames";

function Title({ children, className, color }) {
  return (
    <h2
      className={cn(
        styles["title"],
        className,
        color === "green" ? styles["title_green"] : "",
      )}
    >
      {children}
    </h2>
  );
}

export default Title;
