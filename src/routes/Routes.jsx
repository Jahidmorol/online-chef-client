import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ViewrecipeLayout from "../layouts/ViewrecipeLayout";
import Blog from "../pages/blog/Blog";
import Chefs from "../pages/home/chefs/Chefs";
import Home from "../pages/home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import ErrorPage from "../pages/shared/ErrorPage";
import Viewrecipes from "../pages/viewrecipes/Viewrecipes";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
  {
    path: 'viewrecipes',
    element: <ViewrecipeLayout></ViewrecipeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><Viewrecipes></Viewrecipes></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/${params.id}`),
      }
    ]
  }
]);

export default router;
