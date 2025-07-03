import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hello from "./components/Hello.jsx";
import Bye from "./components/Bye.jsx";
import Navbar2 from "./components2-Sigma/RouterNavbar2.jsx";
import User from "./components2-Sigma/RouterUser.jsx";

const router = createBrowserRouter([
  {
    path: "/hello",
    element: (
      <>
        <Navbar2 />
        <Hello />
      </>
    ),
  },
  {
    path: "/bye",
    element: (
      <>
        <Navbar2 />
        <Bye />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar2 />
        <h1>Welcome Home Page!</h1>
      </>
    ),
  },
  {
    path: "/user/:username",    
    element: (
      <>
        <Navbar2 />
        <User/>
      </>
    ),
  },
]);

const RouterApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default RouterApp;