import React from "react";

import "./Navbar2.css";

import { NavLink } from "react-router-dom";
const Navbar2 = () => {
  return (
    <>
      <div>
        <nav>
        <ul>
          <li>
            <NavLink  className = {(e) => {return e.isActive?"red":""}} to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink className = {(e) => {return e.isActive?"red":""}} to="/hello">Hello Page</NavLink>
          </li>
          <li>
            <NavLink  className = {(e) => {return e.isActive?"red":""}}to="/bye">Bye Page</NavLink>
          </li>
        </ul>
        </nav>
      </div>
        <h1>React Router: Routing in React :- npm i react-router-dom</h1>
    </>
  );
};

export default Navbar2;
