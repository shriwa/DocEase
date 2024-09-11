import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "../Layout/DefaultLayout";
import Home from "../Pages/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
