import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import App3Sigma from './App3Sigma.jsx'
// import App4Sigma from './App4Sigma.jsx'
// import App from './App.jsx'
// import App2Sigma from './App2Sigma.jsx'
import RouterApp from "./RouterApp.jsx";
// import AppExercise from "./AppExercise";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2Sigma/> */}
    {/* <App3Sigma/> */}
    {/* <App4Sigma/> */}
    {/* <AppExercise /> */}
    <RouterApp/>
  </StrictMode>
);
