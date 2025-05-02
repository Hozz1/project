import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
