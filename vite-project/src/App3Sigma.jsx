import React, { useState, useEffect } from 'react';
import Navbar_useEffect from './components2-Sigma/Navbar_useEffect.jsx';

/*

  ⭐) useEffect :- 

  - A React Hook for handling side effects (like alerts, data fetching, timers, etc..) in function components.

  - useEffect is a react hook that runs  when a component is mounted.

  - Executes code after the component renders.

*/

const App3Sigma = () => {
  // State to track button click count
  const [count, setCount] = useState(0);

  // State to simulate color change whenever count updates
  const [color, setColor] = useState(0);

  /*
    Runs every time the 'count' state changes.
    Displays an alert and updates the 'color' state.
  */
  useEffect(() => {
    alert("Color was Changed");
    setColor(color + 1);
  }, [count]);

  return (
    <div>
      {/* Passing dynamic color value as a prop to Navbar */}
      <Navbar_useEffect color={"skyblue" + color} />

      {/* Displaying the current count */}
      <h1>Counter: {count}</h1>

      {/* Button to update the count */}
      <button onClick={() => setCount(count + 1)}>Click Me</button>

      {/*  Note :-   So When there is a state change then react renders the entire component */}
    </div>
  );
};

export default App3Sigma;