// Short cut for Functional Component :- rfce 

import React from "react";

function Bye({id , phoneno , age}){
    return (
      <>
        <h1> Bye from Bye Component </h1>

        <h1 >
          {" "}
          Hello this is a DeStructured way of using JavaScript . And a Component of Bye  {id} {phoneno} {age}{" "}
        </h1>
      </>
    );
}




export default Bye