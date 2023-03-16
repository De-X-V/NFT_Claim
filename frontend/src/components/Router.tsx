import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";
import Profile from "../pages/Profile";
import Faq from "../pages/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "dashboard",
        element: <DashBoard />,
      },

      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
]);

export default router;
