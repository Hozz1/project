import About from "./About/About";
import KnowledgeSection from "./KnowledgeSection/KnowledgeSection";
import styles from "./MainPage.module.css";
import TopSection from "./TopSection/TopSection";

function MainPage(props) {
  return (
    <div className="container">
      <TopSection />
      <KnowledgeSection />
      <About />
    </div>
  );
}

export default MainPage;
