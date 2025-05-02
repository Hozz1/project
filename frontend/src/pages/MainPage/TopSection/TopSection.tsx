import Title from "../../../components/Title/Title";
import styles from "./TopSection.module.css";

function TopSection(props) {
  return (
    <section className={styles["top-section"]}>
      <Title>Мы объединяем людей!</Title>
      <Title color={"green"} className={styles["top-section__title"]}>
        Учи. Общайся. Развивайся.
      </Title>
      <p className={styles["top-section__text"]}>
        Few - это платформа, что позволяет <br /> людям обучаться и обмениваться
        мыслями
      </p>
    </section>
  );
}

export default TopSection;
