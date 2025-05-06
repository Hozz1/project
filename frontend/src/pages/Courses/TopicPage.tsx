import { useParams } from "react-router-dom";

const allTopics = {
  "python/introduction": {
    title: "Введение в Python",
    content: "Здесь подробный контент по введению в Python...",
  },
  "python/variables": {
    title: "Переменные и типы данных",
    content: "Информация о переменных и типах данных в Python...",
  },
  "python/conditionals": {
    title: "Условные операторы",
    content: "Условные операторы if, else, elif...",
  },
  "go/introduction": {
    title: "Введение в Go",
    content: "Основы языка Go и инструменты...",
  },
  "go/syntax": {
    title: "Основы синтаксиса",
    content: "Переменные, функции, структуры в Go...",
  },
  "go/goroutines": {
    title: "Горутины и каналы",
    content: "Параллелизм в Go с помощью горутин...",
  },
  "javascript/introduction": {
    title: "Введение в JavaScript",
    content: "Язык браузера и серверов — основы JS...",
  },
  "javascript/functions": {
    title: "Функции и объекты",
    content: "Объектно-ориентированное программирование в JS...",
  },
  "javascript/async": {
    title: "Асинхронность",
    content: "Промисы, async/await, обработка событий...",
  },
};

function TopicPage() {
  const { topicPath } = useParams();
  const topic = allTopics[topicPath];

  if (!topic) {
    return <h2>Тема не найдена</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{topic.title}</h2>
      <p>{topic.content}</p>
    </div>
  );
}

export default TopicPage;
