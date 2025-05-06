import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Courses.module.css";
import cn from "classnames";

const courseImages = {
  1: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  2: "https://blog.golang.org/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
  3: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
};

const courseTopicsData = {
  1: [
    { id: 1, title: "Введение в Python", description: "Основы языка, установка и запуск.", path: "/python/introduction" },
    { id: 2, title: "Переменные и типы данных", description: "Работа с числами, строками, списками.", path: "/python/variables" },
    { id: 3, title: "Условные операторы", description: "if, else, elif — принятие решений в коде.", path: "/python/conditionals" },
  ],
  2: [
    { id: 1, title: "Введение в Go", description: "Основы языка и инструменты.", path: "/go/introduction" },
    { id: 2, title: "Основы синтаксиса", description: "Переменные, функции, структуры.", path: "/go/syntax" },
    { id: 3, title: "Горутины и каналы", description: "Параллелизм и коммуникация между потоками.", path: "/go/goroutines" },
  ],
  3: [
    { id: 1, title: "Введение в JavaScript", description: "Язык браузера и серверов.", path: "/javascript/introduction" },
    { id: 2, title: "Функции и объекты", description: "Основы объектно-ориентированного программирования.", path: "/javascript/functions" },
    { id: 3, title: "Асинхронность", description: "Промисы, async/await, обработка событий.", path: "/javascript/async" },
  ],
};

function MainPage() {
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  const courses = [
    {
      id: 1,
      name: "Основы Python",
      description: "Изучите основы Python — популярного и простого в изучении языка программирования.",
    },
    {
      id: 2,
      name: "Основы Go",
      description: "Освойте Go — современный язык для высокопроизводительных приложений.",
    },
    {
      id: 3,
      name: "Основы JavaScript",
      description: "Научитесь создавать динамичные веб-страницы с помощью JavaScript.",
    },
  ];

  const toggleCourseTopics = (id) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  return (
    <div className={cn("container", styles["courses-page"])}>
      <h1 className={styles.title}>Наши курсы</h1>
      <div className={styles["courses-wrapper"]}>
        {courses.map((course) => {
          const isExpanded = expandedCourseId === course.id;
          const topics = courseTopicsData[course.id] || [];

          return (
            <div key={course.id} className={styles["course-block"]}>
              <div
                className={styles["course-card"]}
                onClick={() => toggleCourseTopics(course.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCourseTopics(course.id);
                  }
                }}
              >
                <img
                  src={courseImages[course.id]}
                  alt={`Логотип курса ${course.name}`}
                  className={styles["course-card__image"]}
                  loading="lazy"
                />
                <div>
                  <h3 className={styles["course-card__title"]}>{course.name}</h3>
                  <p className={styles["course-card__description"]}>{course.description}</p>
                </div>
              </div>

              {isExpanded && (
                <div className={styles["topics-list"]}>
                  {topics.map((topic) => (
                    <Link
                      key={topic.id}
                      to={topic.path}
                      className={styles["topic-card"]}
                      tabIndex={0}
                      role="link"
                    >
                      <h4 className={styles["topic-card__title"]}>{topic.title}</h4>
                      <p className={styles["topic-card__description"]}>{topic.description}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;





