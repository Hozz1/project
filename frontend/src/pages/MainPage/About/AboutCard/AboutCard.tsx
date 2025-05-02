import styles from "./AboutCard.module.css";
import { ResourcesIcon, TimeArrow } from "../../../../components/Icons";

function AboutCard({ icon, title, text }) {
  return (
    <div className={styles["card"]}>
      {icon}
      <h3 className={styles["card__title"]}>{title}</h3>
      <p className={styles["card__text"]}>{text}</p>
    </div>
  );
}

export default AboutCard;
