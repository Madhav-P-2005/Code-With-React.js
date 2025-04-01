import React from "react";



function Message(){

    function sayHello(){
       alert("Hello This is a sayHello() function ")
    }

    return(
        <>
            <button onClick={sayHello}> Click Me to Say Hello  </button>
        </>
    )
}


export default Message