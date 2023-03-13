import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";
import Profile from "../pages/Profile";

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
    ],
  },
]);

export default router;
