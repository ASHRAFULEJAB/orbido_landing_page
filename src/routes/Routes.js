import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Components/pages/Home";

import Features from "../Components/pages/Features";
import Solution from "../Components/pages/Solution";
import About from "../Components/pages/About";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/feature",
        element: <Features />,
      },
      {
        path: "/solution",
        element: <Solution />,
      },
      
    ],
  },
]);
export default router;
