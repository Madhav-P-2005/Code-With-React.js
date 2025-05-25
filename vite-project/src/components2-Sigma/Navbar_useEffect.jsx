import React, { useEffect } from "react";

/*
  This component demonstrates different useEffect behaviors:
  Case 1 :-   Runs on every render.
  Case 2 :-   Runs only once on first render.
  Case 3 :-   Runs when specific props (color) change
  Case 4 :-   Runs a cleanup function when the component unmounts
*/

const Navbar_useEffect = ({ color }) => {
  // Case 1 :- Runs after every render
  useEffect(() => {
    alert("This will run on every render.");
  });

  
  // Case 2 :- Runs only once after the initial render
  useEffect(() => {
    alert("Welcome. This is the initial render.");
  }, []);


  // Case 3 :-  Runs only when the 'color' prop changes
  useEffect(() => {
    alert("This runs because 'color' changed.");
  }, [color]);


  // Example of a cleanup function executed on component unmount
  useEffect(() => {
    alert("Initial render of App.jsx");

    return () => {
      alert("Component was unmounted.");
    };
  }, []);

  return <div>This is a Navbar with color: {color}</div>;
};

export default Navbar_useEffect;