import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/blog/Blog";
import Chefs from "../pages/home/chefs/Chefs";
import Home from "../pages/home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/")
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
