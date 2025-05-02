import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.tsx";
import Courses from "./pages/Courses/Courses.tsx";
import EnterPage from "./pages/Enter/EnterPage.tsx";
import RegistrationPage from "./pages/Registration/RegistrationPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 not found</div>,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/enter",
        element: <EnterPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
