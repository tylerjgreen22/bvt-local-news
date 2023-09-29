import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import {
  Business,
  ConfirmReset,
  Login,
  News,
  Register,
  Reset,
  Sports,
  Staff,
  Subscribe,
} from "../../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "news", element: <News /> },
      { path: "sports", element: <Sports /> },
      { path: "staff", element: <Staff /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "reset", element: <Reset /> },
      { path: "resetConf", element: <ConfirmReset /> },
      { path: "business", element: <Business /> },
      { path: "subscribe", element: <Subscribe /> },
    ],
  },
]);

export default router;
