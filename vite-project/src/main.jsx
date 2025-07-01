import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App_Form from "./App_Form";
// import App_useMemo from "./App_useMemo";
// import App_useCallback from "./App_useCallback";
// import App3Sigma from './App3Sigma.jsx'
// import App_useRef from './App_useRef.jsx'
// import App from './App.jsx'
// import App2Sigma from './App2Sigma.jsx'
// import RouterApp from "./RouterApp.jsx";
// import App_useContext from "./App_useContext.jsx";
// import AppExercise from "./AppExercise";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2Sigma/> */}
    {/* <App3Sigma/> */}
    {/* <App4Sigma/> */}
    {/* <AppExercise /> */}
    {/* <RouterApp/> */}
    {/* <App_useContext/> */}
    {/* <App_useMemo/> */}
    {/* <App_useCallback/> */}
    <App_Form/>
  </StrictMode>
);
