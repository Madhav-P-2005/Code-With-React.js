import React , {useState} from "react";

/*

State  are immutable . States  can Change . State is just the memory of your Component . It will keep track of Everything happening in your Component . 

*/


function Counter(){


    const [count , setCount] = useState(0)


    function IncrementCount(){
        setCount (count+1)
    }


    function DecrementCount(){
        if(count>0){
            setCount(count - 1)
        }
    }

    return(
        <>
            <div>
            <h1> This is my Counter : {count} </h1>
            <button onClick={IncrementCount}> Increment </button>         <button onClick={DecrementCount}> Decrement </button>               
            </div>
        </>
    )
    
}



export default Counter