import React , {useState} from "react";

/*

State  are immutable . States  can Change . State is just the memory of your Component . It will keep track of Everything happening in your Component . 

State in React is used to store and manage dynamic data that can change over time within a component.

When the state changes, React re-renders the component to reflect the new data.

*/


function Counter2(){


    ["Note :- Here setCount and setFactor are Methods()  of the useState() Hook . "]

    const [count , setCount] = useState(0)


    // Handling Multiple Events in React 
    const [factor , setFactor]  = useState(1);



    function IncrementCount(){
        setCount (count+factor)
    }


    function DecrementCount(){
        if(count>0){
            setCount(count - factor)
        }
    }



    function IncrementFactor(){
        setFactor(factor+1)
    }


    function DecrementFactor(){
        if(count>0){
            setFactor(factor-1)
        }
    }

    return (
      <>
        <div>
          <h1> This is my Counter2 : {count} </h1>
          <button onClick={IncrementCount}> Increment </button>{" "}
          <button onClick={DecrementCount}> Decrement </button>
        </div>


        <hr />
        <h1> Set my Factor {factor} </h1>
        <button onClick={IncrementFactor}> Increment </button>{" "}
        <button onClick={DecrementFactor}> Decrement </button>
      </>
    );
    
}



export default Counter2