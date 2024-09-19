import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "../Layout/DefaultLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Prescription from "../Components/Prescription";
import NotFound from "../Pages/NotFound"

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
      {
        path:"/prescription",
        element:<Prescription />,
      },
      {
        path: "*", 
        element: <NotFound />,
      }
    ],
  },
]);

export default Router;
