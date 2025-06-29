import React from "react";



function Message(){

    function sayHello(){
       alert("Hello This is a sayHello() function ")
    }

    return(
        <>
            <button onClick={sayHello}> Click Me to Say Hello  </button>

             <h2> when you hover this red div you get a alert pop up .</h2>
            <div className="red-div" style={{backgroundColor:"red"}} onMouseOver={sayHello}>
               I am red div 
            </div>
        </>
    )
}


export default Message