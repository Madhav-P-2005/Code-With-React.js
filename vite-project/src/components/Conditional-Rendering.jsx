// ⭐) Conditional Rendering & Rendering Lists 

import React, { useState } from "react";

function Loop({name , price}) {

  
  let [showbtn, setbtn] = useState(true);

  return (
    <>
    <h1>Conditional-Rendering</h1>

    <li>The price of {name} is {price} </li>
     
    {showbtn && <button> This is a 1st Button which is controlled by the next button (setbtn) </button>}

    <button  onClick={() => setbtn(!showbtn)}>Toggle the 1st Button </button>

    </>
  )
}

function Loop2({name , price}) {
  return (
    <>
      <h1>Conditional-Rendering Using Ternary Operators </h1>

      <li>
        {price > 100 && (
          <h3>
            {" "}
            The price of {name} is {price}{" "}
          </h3>
        )
        }
      </li>
      {/*  Or  Use  && */}

      {/* <li>
        {price > 100 ? (
          <h3>
            {" "}
            The price of {name} is {price}{" "}
          </h3>
        ) : (
          "Condition Not Satisfied so No output "
        )}
      </li> */}
      <button onClick> Click Me </button>
    </>
  );
}

export  {Loop , Loop2}