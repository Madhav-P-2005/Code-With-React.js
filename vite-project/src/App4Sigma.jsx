import React, { useEffect, useState, useRef } from "react";

/*
  ⭐) useRef Hook :- 

  - useRef is used to persist a value across renders **without causing re-renders**.

  - Common use cases :-
      1) Storing mutable values that do not trigger re-renders.
      2) Accessing and manipulating DOM elements directly.

*/

const App4Sigma = () => {
  const [count, setCount] = useState(0);

  //  Case 1 :-  Persisting a variable across renders  a = a + 1 its again going to 1 then 2 then again 1 so  useRef
  // const a = useRef(0); // Uncomment to track render count without re-rendering

  // Case 2 :-  Accessing a DOM element (button) 
  const buttonRef = useRef(null);

  useEffect(() => {

    //  Case 1 :-  Track render count 

    // a.current+=1;
    // console.log(`Render count (using useRef) :-  ${a.current}`);


    //  Case 2 :-  Modify button DOM after first render 

    console.log("Component mounted. Setting button background to red.");
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "red";
    }
  });

  return (
    //  Case 1 :-  Persisting a variable across renders  a = a + 1 its again going to 1 then 2 then again 1 so  useRef
    // <div>
    //   <h1>Counter: {count}</h1>
    //   <button onClick={() => setCount(count + 1)}>Click Me</button>
    // </div>


    //  Case 1 :-  Persisting a variable across renders  a = a + 1 its again going to 1 then 2 then again 1 so  useRef
    <div>
      <h1>Counter: {count}</h1>
      <button ref={buttonRef} onClick={() => setCount(count + 1)}>Click Me</button>
      {/* Display None the inital Button .  */}
      <br>
      </br><br></br>
      <button onClick={() => buttonRef.current.style.display = "none"}> Change Me ! </button>
    </div>
  );
};

export default App4Sigma;