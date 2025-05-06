import React from "react";
import Title from "../../../components/Title/Title";
import styles from "./About.module.css";
import {
  EducationIcon,
  ResourcesIcon,
  SupportIcon,
  TimeArrow,
  InteractiveIcon,
  // Добавим иконку для 6-й карточки (можно переиспользовать любую или создать новую)
} from "../../../components/Icons";
import AboutCard from "./AboutCard/AboutCard";

// Простая иконка для 6-й карточки (пример)
function UpdateIcon() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#34a853"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 4v6h6" />
      <path d="M23 20v-6h-6" />
      <path d="M20.49 9A9 9 0 1 0 4.51 15" />
    </svg>
  );
}

function About() {
  const about = [
    {
      img: <TimeArrow />,
      title: "Гибкий график",
      text: `Учитесь в любое время и в любом месте. Наши курсы доступны 24/7, чтобы вы могли заниматься, когда вам удобно.`,
    },
    {
      img: <ResourcesIcon />,
      title: "Лучшие ресурсы",
      text: "Мы предоставляем доступ к актуальным статьям, книгам и видео-материалам, чтобы вы всегда оставались в курсе последних тенденций.",
    },
    {
      img: <EducationIcon />,
      title: "Персональное обучение",
      text: "Мы предлагаем персонализированные планы обучения, чтобы вы могли сосредоточиться на своих слабых местах и достигнуть своих целей быстрее.",
    },
    {
      img: <SupportIcon />,
      title: "Поддержка сообщества",
      text: "У нас есть активное сообщество студентов и преподавателей, готовых помочь вам в любой момент.",
    },
    {
      img: <InteractiveIcon />,
      title: "Интерактивное обучение",
      text: "Наши курсы предлагают интерактивные задачи и проекты, чтобы вы могли применить свои знания на практике.",
    },
    {
      img: <UpdateIcon />,
      title: "Постоянно обновляемый контент",
      text: "Наши курсы регулярно обновляются, чтобы вы всегда учились по самым свежим и востребованным темам.",
    },
  ];

  // Классы для позиционирования в гриде (3 колонки, 2 строки)
  const classNames = [
    styles["about__card--item1"],
    styles["about__card--item2"],
    styles["about__card--item3"],
    styles["about__card--item4"],
    styles["about__card--item5"],
    styles["about__card--item6"],
  ];

  return (
    <section className={styles["about-section"]} aria-label="О платформе Few">
      <Title className={styles["about__title"]}>
        Few, в первую очередь, это:
      </Title>
      <div className={styles["about__container"]}>
        {about.map(({ img, title, text }, index) => (
          <AboutCard
            key={title}
            icon={img}
            title={title}
            text={text}
            className={classNames[index]}
          />
        ))}
      </div>
    </section>
  );
}

export default About;