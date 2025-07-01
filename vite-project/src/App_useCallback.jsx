import { useCallback , useState} from "react";

import Navbar_useCallback from "./components2-Sigma/Navbar_useCallback";

/*

  useCallback()  —   A React Hook for Function Memoization

  What is it ?

    - `useCallback` is a hook that returns a **memoized version** of the callback function.
    - It helps **prevent unnecessary re-creations** of functions between re-renders.

  Why use it ?

   - In JavaScript, even if two functions *look* the same, they are **different in memory**.
     Example :- 
       const a = () => {}   // function A
       const b = () => {}   // function B
       Even if A and B are identical, they’re different references.

   - So when you pass a function as a **prop** to a child component (like `<Navbar_useCallback />`),
     it causes the child to **re-render** if the function is newly created on every render.

   - To prevent this, use `useCallback()` to tell React:
     > "Don't recreate this function unless specific dependencies change."

  Syntax :- 
     const memoizedFn = useCallback(() => {
        // your logic
     }, [dependencies]);

  In this project :- 
      - We passed `getAdjective` as a prop.
      - Without `useCallback()`, every time `App_useCallback` re-renders (e.g., count changes), a **new version** of `getAdjective` is   created → triggers re-render of `Navbar_useCallback`.

     - By wrapping `getAdjective` in `useCallback`, the function reference is **frozen**  unless dependencies change.

  IMPORTANT :-  Dependency Array Behavior
    - If you write: 
       ```js
       const getAdjective = useCallback(() => "Another", [count])
       ```
      then every time `count` changes, the function **will be recreated** again — and this will **cause re-renders** in the memoized child too!

   => So only add dependencies that **must** trigger a re-creation of the function.

  useCallback + React.memo()
       - `React.memo()` prevents re-renders of components **unless their props change**
       - `useCallback()` ensures that function props don’t change **unnecessarily**

  Best Use Cases :- 
       - Passing functions to memoized child components (`React.memo`)
       - Event handlers that shouldn't be re-created unnecessarily
       - Avoiding expensive computations in child props

  Don’t overuse :- 
      - Only use `useCallback()` when you know a prop change causes **unnecessary re-rendering**
      - Otherwise, it adds complexity without a real performance gain
*/

function App_useCallback() {

   const [count , setCount] = useState(0)

   const [adjective, getadjective] = useState("Inital value")

  // So in JavaScript getAdjective() and getAdjective2() functions are not considered same so when our App_useCallback() is rerendering then this getAdjective() gets changed so which means Navbar_useCallback() will think that the prop has changed so due to this whole Navbar_useCallback() re-renders so to avoid this issue we use useCallback()  ! . 
  //    const getAdjective = () =>{
  //              return "another"
  //    }

     
    // Using useCallback() :- It helps to freeze the function ! Anther re- render dont change be like this only we are trying say here .
    const getAdjective  = useCallback(
      () => {
        return "another"
      },
      [],
    )
    

    return (
      <>
        {/*  Using memo :-  */}
        {/* <Navbar_useCallback adjective={"Good"} /> */}

        {/*  Without memo :- */}
        <Navbar_useCallback adjective={"Good"} getAdjective={getAdjective} />


        <h1> Counter :- {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          {" "}
          Click Me hee...
        </button>
      </>
    );
    
}

export default App_useCallback;