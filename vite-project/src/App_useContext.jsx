import React, { useState } from 'react'
import Navbar_useContext from './components2-Sigma/Navbar_useContext'

import { counterContext } from './use_Context/context'

/*
  What is useContext in React?

  - useContext is a React Hook that lets you access the value from a Context object.

  - It is used to **share state or data globally** across components without passing props manually at every level.

  - This helps us **avoid prop drilling** — that means we don’t need to pass props from parent ➝ child ➝ grandchild.

  Instead of :- 
    <Parent user={user}>
      <Child user={user}>
        <GrandChild user={user}> // tiring...

  We can just :- 
    const user = useContext(UserContext); // from anywhere inside the component tree

  Summary :- 
  - Create a context using createContext()
  - Wrap your components using Context.Provider
  - Use useContext(ContextName) in any child to access the value

  Useful for :- 
  - Auth (user login info)
  - Theme (light/dark mode)
  - Language preference
  - Cart state
  - App-wide settings


  here :-   App_useContext.jsx :- 
                       Nav_useContext.jsx :-
                                 Button_useContext.jsx :- 
                                          Component1_useContext.jsx 
                                  
*/


const App_useContext = () => {

    const [count , setCount] = useState(0)

    // function handleChange(){
    //     setCount(count+1)
    // }

  return (
    // <>
    //   <div>
    //     {" "}
    //     This is a without using use_Context hook Example from App_useContext.jsx  (App.jsx) :-{" "}
    //   </div>
    //   <br />

    //   {/*  See here this is a Example of "prop - drilling" */}
    //   <Navbar_useContext count={count} />
    //   <br />

    //   {/* <h1> This is a Counter :- {count}</h1> */}

    //   <button onClick={handleChange}>
    //     <h4>Click me To Increment/Decrement the Counter !! </h4>
    //   </button>
    // </>
    <>
      <counterContext.Provider value={{count , setCount}}>
      <Navbar_useContext/>
        <button onClick={() => setCount((count) => count+1)}>
          <h4>Click me To Increment/Decrement the Counter !! </h4>
        </button>
      </counterContext.Provider>
    </>
  );
}

export default App_useContext