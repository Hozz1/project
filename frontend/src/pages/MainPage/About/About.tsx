import Title from "../../../components/Title/Title";
import styles from "./About.module.css";
import {
  EducationIcon,
  ResourcesIcon,
  SupportIcon,
  TimeArrow,
  InteractiveIcon,
} from "../../../components/Icons";
import AboutCard from "./AboutCard/AboutCard";

function About(props) {
  const about = [
    {
      img: <TimeArrow />,
      title: "Гибкий график",
      text: `Учитесь в любое время и в любом месте. Наши курсы доступны 24/7, чтобы вы могли заниматься, когда вам удобно.`,
    },
    {
      img: <ResourcesIcon />,
      title: "Лучшие ресуры",
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
  ];

  return (
    <div className={styles["about-section"]}>
      <Title className={styles["about__title"]}>
        Few, в первую очередь, это:
      </Title>
      <div className={styles["about__container"]}>
        {about.map((item) => {
          return (
            <AboutCard icon={item.img} title={item.title} text={item.text} />
          );
        })}
      </div>
    </div>
  );
}

export default About;
