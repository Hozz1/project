import Title from "../../../components/Title/Title";
import styles from "./KnowledgeSection.module.css";

function KnowledgeSection(props) {
  const languages = ["Django", "Python", "Java"];

  return (
    <section className={styles["knowledge-section"]}>
      <Title className={styles["knowledge-section__title"]}>
        Мы делимся знаниями в области:
      </Title>
      <div className={styles["knowledge__wrapper"]}>
        {languages.map((item) => (
          <div className={styles["knowledge__block"]}>{item}</div>
        ))}
      </div>
    </section>
  );
}

export default KnowledgeSection;
