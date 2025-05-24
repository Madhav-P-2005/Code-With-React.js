// Functional Component 

/*

Props :- 1)  To make your Component to go  dynamic .

2)  Inside the components you can pass the variables/data. 

*/

function Hello(props){
  // Properties of JSX
  let text = "Scaler";

  function displayName() {
    return "Madhav P";
  }


//   props.name = "krishna";     Will Throw an Error :-  Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'  [ Note :- So for Dynamic Rendering/Updating  Use State ]


  return (
    <>
      <h1>
        {" "}
        Hello from Hello.jsx Component {text} , {displayName()}{" "}
      </h1>

      {/* The way to reuse the Components using props  */}
      <h1>
        {" "}
        Hello {props.name} {props.phoneno}
      </h1>
    </>
  );
}



export default Hello