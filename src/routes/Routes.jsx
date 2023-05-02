import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../layouts/Main';
import Blog from '../pages/blog/Blog';
import Chefs from '../pages/home/chefs/Chefs';
import Home from '../pages/home/Home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/login/Register';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/chef',
          element: <Chefs></Chefs>
        },
        
      ]
    },
  ]);

export default router;