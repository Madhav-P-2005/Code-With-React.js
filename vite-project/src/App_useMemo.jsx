import {useMemo, useState} from "react";

/*

    What is useMemo() in React ?

      - `useMemo` is a React Hook that allows you to **memoize a computed value**.
      - It's mainly used to **optimize performance** by **avoiding unnecessary recalculations** of expensive functions during re-renders.

    In this example :- 
      - We have a huge array (`numbers`) with 30 million objects.
      - We want to find one "magical" item in that array.
      - This `find()` operation is **expensive** if run on every re-render.
      - So we wrap it in `useMemo()` to **cache the result** until `numbers` changes.

    Syntax :- const memoizedValue = useMemo(() => computeExpensiveValue(), [dependencies]);

    In this case :-   const magical = useMemo(() => numbers.find(item => item.isMagical === true), [numbers]);

                     - This means: Only recalculate `magical` when `numbers` state changes.
                     - If only `count` changes, the expensive `.find()` will NOT re-run.

    Benefit :-
       - Reduces CPU usage and boosts performance.
       - Great for expensive calculations, filtering, sorting, or component rendering logic.

    Note :- 
       - Only use `useMemo` when the computation is truly heavy or performance-critical.
       - Otherwise, it can actually slow things down slightly due to memoization overhead.

*/


const nums = new Array(30_000_000).fill(0).map((_,i) =>{
    return{
        index:i,
        isMagical : i===29_000_000,
    } 
})

console.log(nums)

const App_useMemo = () => {

    const [count , setCount] = useState(0)
    const [numbers , setNumbers ] = useState(nums)

    // const magical = numbers.find(item  => item.isMagical===true)     // Expensive Computation 

    // Use useMemo() :- use it when you want between re-renders you dont want any value to re-render again and again
    // const magical = useMemo(() => numbers.find(item => item.isMagical===true) , [])

    // Thanks to dependency array [] through which i could say useMemo() to re-calculate magical when the numbers change not everytime . 
    const magical = useMemo(() => numbers.find(item => item.isMagical===true) , [numbers])



  return (
    <>
     <div>
      <span> Magical numbers is {magical.index} </span>
     </div>

     <div>
       <h1> Counter :-  {count}</h1>
       <button onClick={() => {setCount((count) => count + 1);
       
       if (count==10){
        setNumbers(new Array(10_000_000).fill(0).map((_, i) =>{
            return{
                index : i,
                isMagical : i===9_00_000
            }
        }))
       }
       
       }}> Click Me and this will make the useState to re-render the component so the computation will again start from scratch </button>
     </div>
    </>
  )
}

export default App_useMemo