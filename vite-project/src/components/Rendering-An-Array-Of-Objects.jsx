import React from "react";

import { Loop, Loop2 } from "./Conditional-Rendering";


function Fruits(){
    let fruits = [
      {
        name: "Apple",
        price: 100,
      },
      {
        name: "Orange",
        price: 80,
      },
      ,
      {
        name: "Mango",
        price: 150,
      },
      {
        name: "PineApple",
        price: 200,
      },
    ];

    
    return(
        <>
        <div> {fruits.map(fruit =>(
            <li>{fruit.name} - {fruit.price}</li>
        ))} </div>

        
        {/* key value is used for unique values  */}
        <div>
        <br/>
           {fruits.map(fruit =>(
            <li key = {fruit.name} >{fruit.name} - {fruit.price}</li>
           ))}
        </div>



        {/* By Using Conditional-Rendering  */}
        <div>
            <br/>
            {fruits.map(fruit =>(
                <Loop name = {fruit.name}  price = {fruit.price}/>
            ))}
        </div>



        {/* By Using Conditional-Rendering Using Ternary Operators  */}
        <div>
            <br/>
            {fruits.map(fruit =>(
                <Loop2 name = {fruit.name}   price = {fruit.price} />
            ))}
        </div>
        </>
    )
}

export default Fruits