import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "../Layout/DefaultLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

export default Router;
