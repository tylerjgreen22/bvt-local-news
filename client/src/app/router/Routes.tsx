import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import * as Pages from "../../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "news", element: <Pages.News /> },
      { path: "sports", element: <Pages.Sports /> },
      { path: "staff", element: <Pages.Staff /> },
      { path: "login", element: <Pages.Login /> },
      { path: "register", element: <Pages.Register /> },
      { path: "reset", element: <Pages.Reset /> },
      { path: "resetConf", element: <Pages.ConfirmReset /> },
      { path: "business", element: <Pages.Business /> },
      { path: "subscribe", element: <Pages.Subscribe /> },
    ],
  },
]);

export default router;
