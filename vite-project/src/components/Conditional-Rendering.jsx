import React from "react";


function Loop({name , price}) {
  return (
    <>
    <h1>Conditional-Rendering</h1>

    <li>The price of {name} is {price} </li>

    </>
  )
}

function Loop2({name , price}) {
  return (
    <>
    <h1>Conditional-Rendering Using Ternary Operators </h1>

    <li>{price >100 ? <h3> The price of {name} is  {price} </h3> : " "}</li>

    <button onClick={}> Click Me </button>
    </>
  )
}

export  {Loop , Loop2}