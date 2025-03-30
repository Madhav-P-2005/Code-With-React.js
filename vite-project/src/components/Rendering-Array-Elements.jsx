import React from "react";


function Animals(){

    let animals = ['Cat' , 'Dog' , 'Horse']
    return (
      <>
        <br />
        <h1> {animals} </h1> <br />
        <div>
          <h1> Using Higher Order Method by Using Map </h1>
          <ul>
            {animals.map((animal) => (
               // <h1> {animal} </h1>
              <ol> {animal} </ol>
            ))}
          </ul>
        </div>
      </>
    );
}

export default Animals