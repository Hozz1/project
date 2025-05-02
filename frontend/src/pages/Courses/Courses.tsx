import Button from "../../components/Button/Button";
import styles from "./Courses.module.css";
import cn from "classnames";

function MainPage(props) {
  const courses = [
    {
      id: 1,
      name: "Основы Python",
    },
    {
      id: 2,
      name: "Основы Go",
    },
    {
      id: 3,
      name: "Основы JavaScript",
    },
  ];

  return (
    <div className={cn("container", styles["courses-page"])}>
      <h1 className={styles["title"]}>Наши курсы</h1>
      <div className={styles["courses-wrapper"]}>
        {courses.map((course) => {
          return (
            <div className={styles["course-card"]} key={course.id}>
              <h3 className={styles["course-card__title"]}>{course.name}</h3>
              <Button>Перейти</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
