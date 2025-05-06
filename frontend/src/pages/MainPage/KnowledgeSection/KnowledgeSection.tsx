import Title from "../../../components/Title/Title";
import styles from "./KnowledgeSection.module.css";

const languages = [
  { name: "Django", color: "#092E20" },
  { name: "Python", color: "#3776AB" },
  { name: "Java", color: "#007396" },
];

function KnowledgeSection() {
  return (
    <section className={styles["knowledge-section"]} aria-label="Раздел знаний">
      <Title className={styles["knowledge-section__title"]}>
        Мы делимся знаниями в области:
      </Title>
      <div className={styles["knowledge__wrapper"]}>
        {languages.map(({ name, color }) => (
          <div
            key={name}
            className={styles["knowledge__block"]}
            style={{ backgroundColor: color }}
            aria-label={`Знание в области ${name}`}
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default KnowledgeSection;

