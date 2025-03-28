// Functional Component 
// Props :- To make your Component to go  dynamic .

function Hello(props){


    // Properties of JSX 
    let text = "Scaler"

    function displayName(){
        return 'Madhav P'
    }

    let name = "Madhav P"

   return (
    <>
    
    <h1> Hello from Hello.jsx Component  {text} ,   {displayName()} </h1>

    {/* The way to reuse the Components using props  */}
    <h1> Hello  {props.name} {props.phoneno}</h1>    

    </>
   )
}




export default Hello


 
