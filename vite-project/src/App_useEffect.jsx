import React, { useState, useEffect } from 'react';
import Navbar_useEffect from './components2-Sigma/Navbar_useEffect.jsx';

/*

  ⭐) useEffect :- 

  - A React Hook for handling side effects (like alerts, data fetching, timers, etc..) in function components.

  - useEffect is a react hook that runs  when a component is mounted.

  - Executes code after the component renders.

  useEffect Snippet :- 

    useEffect(() => {
    // 1. Effect Logic (what to do after render)

     return () => {
     // 2. Cleanup Logic :- (what to do before unmount or before next  effect run) . This runs :-  1) Before the component unmounts  2) Before the effect re-runs (if dependencies change)
     };
    },[dependencies]); //  3. Dependency Array (when to re-run the effect)


    2) Clean Up Example :- 

    useEffect(() => {
    const timer = setInterval(() => console.log("Running..."), 1000);

    return () => {
       clearInterval(timer);
       console.log("Cleanup before unmount or next effect");
    };
    }, []);



    3) third (Dependency Array)  :-   1) A list of variables/state/props the effect depends on.   2) If empty ([]) → Runs only once after initial mount.  3) If includes variables → Runs when any of them change.

    [],                     // Run only once
    [count],                // Run when count changes
    [userId, themeColor],   // Run when userId or themeColor changes



*/

useEffect(() => {
  first

  return () => {
    second
  }
}, [third])

const App_useEffect = () => {
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

export default App_useEffect;