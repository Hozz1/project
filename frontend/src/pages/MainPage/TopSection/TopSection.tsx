import Title from "../../../components/Title/Title";
import styles from "./TopSection.module.css";

function TopSection() {
  return (
    <section className={styles["top-section"]} aria-label="Главный раздел сайта">
      <Title as="h1">Мы объединяем людей!</Title>
      <Title as="h2" color="green" className={styles["top-section__title"]}>
        Учи. Общайся. Развивайся.
      </Title>
      <p className={styles["top-section__text"]}>
        Few - это платформа, что позволяет <br /> людям обучаться и обмениваться мыслями
      </p>
    </section>
  );
}

export default TopSection;
