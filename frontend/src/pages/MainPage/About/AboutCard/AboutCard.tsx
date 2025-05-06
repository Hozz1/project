import React from "react";
import styles from "./AboutCard.module.css";

function AboutCard({ icon, title, text, className }) {
  return (
    <div className={`${styles["card"]} ${className ? className : ""}`}>
      {icon}
      <h3 className={styles["card__title"]}>{title}</h3>
      <p className={styles["card__text"]}>{text}</p>
    </div>
  );
}

export default AboutCard;

